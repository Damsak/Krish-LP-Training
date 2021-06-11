package com.damsak.rentacar.demoapplication.service;

import com.damsak.rentacar.demoapplication.model.Student;
import com.damsak.rentacar.demoapplication.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService{

    //need to use the created repository
    //no need to create an instance. we can use autowiring

    @Autowired
    StudentRepository studentRepository;

    public Student save(Student student) {

     return  studentRepository.save(student);
    }

    public Student fetchStudentById(int id){

     Optional<Student>  student= studentRepository.findById(id);

     //now we need to check for the availability of the student record
    if(student.isPresent()){
        return student.get();
    }
    return null;
    }
}
