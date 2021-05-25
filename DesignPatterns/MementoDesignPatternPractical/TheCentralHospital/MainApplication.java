public class MainApplication {

	public static void main(String[] args) {
		
		prescriptionHistory presHistory = new prescriptionHistory();
		
		Prescription prescription = new Prescription();
		
		prescription.addDrug(new Medicine("Panadol","5ml"));
		
		prescription.addDrug(new Medicine("Syrup","5ml"));
		
		presHistory.save(prescription);
		System.out.println(prescription);

		prescription.addDrug(new Medicine("Cream","5ml"));
		//presHistory.save(prescription);
		System.out.println("After 1 week = " + prescription);

		//remove the newly added cream
		presHistory.revert(prescription);
		System.out.println(prescription);
		
		presHistory.revert(prescription);
		System.out.println(prescription);
		
		presHistory.revert(prescription);
		System.out.println(prescription);
		
	}
}