#! /usr/bin/env node
class School {
    name;
    students = [];
    teachers = [];
    addStudent(stdObj) {
        this.students.push(stdObj);
    }
    addTeacher(teObj) {
        this.teachers.push(teObj);
    }
    constructor(name) {
        this.name = name;
    }
}
class Student {
    name;
    age;
    schoolName;
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
class Teacher extends Student {
}
//School
let School1 = new School("Inspire Acadmey");
let School2 = new School("AK Acadmey");
let School3 = new School("The Educater");
let School4 = new School("Rise Acadmey");
let School5 = new School("Fatima jinnah");
let School6 = new School("MH Grammar");
//Student
let s1 = new Student("Arham", 7, School1.name);
let s2 = new Student("Haim", 10, School2.name);
let s3 = new Student("Zainab", 4, School3.name);
let s4 = new Student("Maham", 13, School4.name);
let s5 = new Student("Umair", 5, School5.name);
let s6 = new Student("Zarmena", 3, School6.name);
//Teacher
let t1 = new Teacher("Fatima", 22, School1.name);
let t2 = new Teacher("Amna", 29, School2.name);
let t3 = new Teacher("Bushra", 27, School3.name);
let t4 = new Teacher("Saba", 30, School4.name);
let t5 = new Teacher("Suman", 26, School5.name);
let t6 = new Teacher("Nida", 28, School6.name);
//student
School1.addStudent(s1);
School2.addStudent(s2);
School3.addStudent(s3);
School4.addStudent(s4);
School5.addStudent(s5);
School6.addStudent(s6);
//teacher
School1.addTeacher(t1);
School2.addTeacher(t2);
School3.addTeacher(t3);
School4.addTeacher(t4);
School5.addTeacher(t5);
School6.addTeacher(t6);
//teacher
console.log(t1);
console.log(t2);
console.log(t3);
console.log(t4);
console.log(t5);
console.log(t6);
//student
console.log(School1);
console.log(School2);
console.log(School3);
console.log(School4);
console.log(School5);
console.log(School6);
export {};
