import java.util.Stack;

//Holds the status of previous drug list
public class prescriptionHistory {
	
	Stack<Prescription.MedicineMemento> history = new Stack<>();
	
	public void save(Prescription prescription) {
		history.push(prescription.save()); 
			}
	
	public void revert(Prescription prescription) {
		if(!history.isEmpty()) 	{
			prescription.revert(history.pop()); // we take last element from history
		} else {
			System.out.println("Cannot revert the list");
			}
			}

		}
