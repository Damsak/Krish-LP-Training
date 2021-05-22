import java.util.*;

public abstract class Diploma {

	List<Learning> subjects = new ArrayList<>();

	public Diploma() {
		createCourse();
	}

	protected abstract void createCourse();

	public String toString() {
		return " Subjects will be " + subjects + " ";
	}
	}