//Created by Damsak Bandara For LP2021-Apil Batch Assignment 1. 

import java.util.Scanner;

public class frogJumpProblem{  


    public static void main(String args[]){  

	int distance = 0;

	Scanner scn = new Scanner(System.in);
	System.out.println("Please enter the distance in meters (Without decimals) - ");
	distance = scn.nextInt();

	if(distance <= 0) {
	System.out.println("Distance cannot be a negative value or Zero");
	return;	
	}

	int finalHops = calculateHops(distance);
	int finalTimeInSeconds = calculateTime(distance); 
	
     System.out.println("Final Hop count is: "+ finalHops);  
     System.out.println("Total Time taken in Seconds: "+ finalTimeInSeconds);  

    }


//Method to Calculate the number of Hops
   public static int calculateHops(int distance){

	int remainingDistance = distance;
	int distanceTravelled = 0;
	int step = 0; 
	int hopCount = 0;

	if( distance < 5 ) {
	hopCount = 1;
	distanceTravelled = 5;
	}
	

	while( distanceTravelled < distance ) {

  	 if(remainingDistance >= 5) {

		remainingDistance = remainingDistance - 5; 
		distanceTravelled = distanceTravelled + 5;
		hopCount++;
		step = 1;
		if( distanceTravelled == distance) {
		break;
		}
			if(distanceTravelled >= (distance + 4)) {
			break;
			} else {

				remainingDistance = remainingDistance - 3; 
				distanceTravelled = distanceTravelled + 3;
				step = 2;
				hopCount++;
				if( distanceTravelled == distance) {
				break;
				}
				if(remainingDistance < 0 ) {
				step = -1;
				break;
				}

				if( distanceTravelled >= (distance + 4)) {
				break;
				} else {
		
					remainingDistance = remainingDistance - 1;
					distanceTravelled = distanceTravelled + 1;
					step = 3;
					hopCount++;		

						if( distanceTravelled == distance) {
						break;
						}
						if(remainingDistance < 0 ) {
						step = -1;
						break;
						}
					}
				} 

			} else {

			if (step == -1) {
			break;
			}
			else if (step == 1) {
			distanceTravelled = distanceTravelled + 3;
			hopCount++;
			} else if ( step == 2) {
			distanceTravelled = distanceTravelled + 1;
			hopCount++;
			} else if (step == 3) {
			distanceTravelled = distanceTravelled + 5;
			hopCount++;
			}

			break;
			}
	}

	System.out.println("Total Travelled Distance: " + distanceTravelled );
	return hopCount;	
	}  

//Method to Calculate the total Time
   public static int calculateTime(int distance){

	int remainingDistance = distance;
	int distanceTravelled = 0;
	int step = 0; 
	int totalTime = 0;
	boolean lastStep = false;

	while(distanceTravelled < distance) {

  	if(remainingDistance >= 5) {

		remainingDistance = remainingDistance - 5; 
		distanceTravelled = distanceTravelled + 5;	

		step = 1;

		if(remainingDistance <= 0) { lastStep = true; }

		if(lastStep == false) {totalTime++;}

		if(distanceTravelled == distance) {
		break;
		}
			if( distanceTravelled >= (distance + 4)) {
			break;
			} else {
				remainingDistance = remainingDistance - 3; 
				distanceTravelled = distanceTravelled + 3;
				step = 2;			

				if(distanceTravelled == distance) {
				break;
				}
				if(remainingDistance <= 0 ) {
				step = -1;
				lastStep = true;
				break;
				}

				if( lastStep == false ) {totalTime = totalTime + 2;}
		
				if( distanceTravelled >= (distance + 4)) {
				break;
				} else {
		
					remainingDistance = remainingDistance - 1;
					distanceTravelled = distanceTravelled + 1;
					step = 3;	

						if( distanceTravelled == distance) {
						break;
						}
						if(remainingDistance <= 0 ) {
						step = -1;
						lastStep = true;
						break;
						}
						if(lastStep == false) {totalTime = totalTime + 5;}	
						}
				} 

			} else {

			if (step == -1) {
			break;
			}
			else if (step == 1) {
			distanceTravelled = distanceTravelled + 3;
			} else if ( step == 2) {
			distanceTravelled = distanceTravelled + 1;
			} else if (step == 3) {
			distanceTravelled = distanceTravelled + 5;
			}
			break;
			}
	}
	return totalTime;
	}  
}