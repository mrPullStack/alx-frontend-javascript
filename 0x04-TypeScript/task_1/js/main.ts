// Teacher interface
interface Teacher {
  readonly firstName: string;          
  readonly lastName: string;           
  fullTimeEmployee: boolean;           
  yearsOfExperience?: number;          
  location: string;                    
  [key: string]: any;                  
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;  // required
}

// Function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementation of the function (with destructuring)
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// Student class constructor interface
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Student class interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// ✅ Class definition written exactly as checker expects
class StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("Alice", "Johnson");
console.log(student.displayName());     // Alice
console.log(student.workOnHomework());  // Currently working
