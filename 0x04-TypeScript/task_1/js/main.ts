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

// Implementation of the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage of Teacher
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Example usage of Directors
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Example usage of printTeacher
console.log(printTeacher("John", "Doe")); // J. Doe
