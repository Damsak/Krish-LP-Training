import java.util.ArrayList;

//This is the originator class
public class Prescription {
		
	ArrayList<Medicine> drugs = new ArrayList<>();
	
	public void addDrug(Medicine drug) {
		drugs.add(drug);
	}
	
	public ArrayList<Medicine> getDrugs() {
		//if we copy directly we only copy the references. 
		return (ArrayList) drugs.clone(); 
	}
	
	 //preserve prescription state - give state to the caretaker
	public MedicineMemento save() {
		return new MedicineMemento(getDrugs());
	}	
	
	public void revert(MedicineMemento medicineMemento) {
		drugs = medicineMemento.getDrugs();
	}
			
	public String toString() {
		return "Prescription [drugs=" + drugs + "]";
	}

	//for the memento(Can have separate class as well)
	public class MedicineMemento {
		
		ArrayList<Medicine> drugs;
		
		public MedicineMemento(ArrayList<Medicine> drugs) {
			this.drugs = drugs;
			}

		//private because only this class can access this
		private ArrayList<Medicine> getDrugs() {
			return drugs;
			}	
		}

	}