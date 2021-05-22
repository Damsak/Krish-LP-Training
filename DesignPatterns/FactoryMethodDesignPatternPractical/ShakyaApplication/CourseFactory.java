
public class CourseFactory {

	public static Diploma createCourse(String diploma) {

	switch(diploma.toLowerCase()) {
	
	case "softwareengineering":
		return new SoftwareEngineering();
	case "networkengineering":
		return new NetworkEngineering();
	case "it":
		return new IT();
	default:
		return null;
	}
	}
	}