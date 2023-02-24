// Define a Person class that represents a person
class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  }
  
  // Define a Pharmacist class that extends Person and represents a pharmacist
  class Pharmacist extends Person {
    writePrescription(patient) {
      console.log(`${this.name} writes a prescription for ${patient.name}`);
    }
  }
  
  // Define a Cashier class that extends Person and represents a cashier
  class Cashier extends Person {
    collectCash(amount) {
      console.log(`${this.name} collects ${amount} dollars from the customer.`);
    }
    returnCash(amount) {
      console.log(`${this.name} returns ${amount} dollars to the customer.`);
    }
  }
  
  // Define an Employee class that extends Person and represents an employee
  class Employee extends Person {
    constructor(name, age, gender, position) {
      super(name, age, gender);
      this.position = position;
    }
  }
  
  // Define a Manager class that extends Employee and represents a manager
  class Manager extends Employee {
    constructor(name, age, gender, position) {
      super(name, age, gender, position);
    }
    manageEmployees() {
      console.log(`${this.name} is managing employees.`);
    }
    workAsCashier() {
      console.log(`${this.name} is working as a cashier.`);
    }
    workAsPharmacist(patient) {
      console.log(`${this.name} is working as a pharmacist and writes a prescription for ${patient.name}`);
    }
  }
  
  // Create objects of the classes and call the methods
  const pharmacist = new Pharmacist('Alice', 30, 'female');
  const patient = new Person('Bob', 40, 'male');
  pharmacist.writePrescription(patient);
  
  const cashier = new Cashier('Carol', 25, 'female');
  cashier.collectCash(100);
  cashier.returnCash(50);
  
  const manager = new Manager('Dave', 35, 'male', 'manager');
  manager.manageEmployees();
  manager.workAsCashier();
  manager.workAsPharmacist(patient);
  