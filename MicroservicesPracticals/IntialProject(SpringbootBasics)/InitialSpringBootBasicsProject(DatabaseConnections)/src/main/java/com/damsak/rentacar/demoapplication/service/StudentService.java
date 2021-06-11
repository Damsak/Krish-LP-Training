package com.damsak.rentacar.demoapplication.service;

import com.damsak.rentacar.demoapplication.model.Student;

public interface StudentService {

    Student save(Student student);

    Student fetchStudentById(int id);

}
