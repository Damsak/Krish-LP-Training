public class Medicine {
	
	String medicineName;
	String Dosage;
	
	public Medicine(String medicineName,String Dosage) {
		this.medicineName = medicineName;
		this.Dosage = Dosage;
			}

	public String toString() {
		return "Medicine [medicineName=" + medicineName + ", Dosage=" + Dosage + "]";
		}
		
	}
