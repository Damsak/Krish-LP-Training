
public class ShakyaApplication {

	public static void main(String[] args) {
		
		Diploma firstDiploma = CourseFactory.createCourse("SoftwareEngineering");
		System.out.println(firstDiploma);
		
		Diploma secondDiploma = CourseFactory.createCourse("IT");
		System.out.println(secondDiploma);

	}

	}