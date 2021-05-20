
public class robotManager {

	private static volatile robotManager rbManager;

	private robotManager(){
		if(rbManager != null) {
			//to block the creation by reflection API
			throw new RuntimeException("Sorry. Please use the robotManager class");
					}
			};

	public void configureCurrentlocations(){

		System.out.println("Configuring current Location");
		//Let's assume it takes 0.5seconds for the robot to configure its location.
			try {
				Thread.sleep(500);
					} catch ( InterruptedException e) {
				e.printStackTrace();
			}	
	}

	

	public void configureSettings(){
		System.out.println("Configuring overall device");
		//Let's assume it takes 1.5seconds for the robot to configure its location.
			try {
				Thread.sleep(1500);
					} catch ( InterruptedException e) {
				e.printStackTrace();
			}	
	}	
	
		

	public static robotManager getManager() {
		if(rbManager == null) {
		
			synchronized(robotManager.class) {
				if(rbManager == null) {		
					
					rbManager = new robotManager();
					rbManager.configureCurrentlocations();
					rbManager.configureSettings();
				}
			}
		}
		return rbManager;
	}
}