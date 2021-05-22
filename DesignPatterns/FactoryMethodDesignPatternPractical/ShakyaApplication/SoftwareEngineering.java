public class SoftwareEngineering extends Diploma {

	protected void createCourse() {
		subjects.add(new SoftwareDevelopment());
		subjects.add(new Algorithms());
		subjects.add(new OperatingSystems());
	}
	}