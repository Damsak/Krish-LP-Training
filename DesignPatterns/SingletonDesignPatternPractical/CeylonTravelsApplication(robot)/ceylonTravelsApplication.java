public class ceylonTravelsApplication {

	public static void main(String[] args) {

		long start;
		long end;
		
		start = System.currentTimeMillis();
		robotManager rbManager1 = robotManager.getManager();
		end = System.currentTimeMillis();

		System.out.println("Time taken for 1st instance creation " + (end-start));

		start = System.currentTimeMillis();
		robotManager rbManager2 = robotManager.getManager();
		end = System.currentTimeMillis();

		System.out.println("Time taken for 2nd instance creation " + (end-start));
	}
}