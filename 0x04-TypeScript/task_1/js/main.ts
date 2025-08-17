interface Teacher {
  readonly firstName: string;          // only modifiable when initialized
  readonly lastName: string;           // only modifiable when initialized
  fullTimeEmployee: boolean;           // always required
  yearsOfExperience?: number;          // optional
  location: string;                    // always required
  [key: string]: any;                  // allows additional properties
}

// Example usage
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,   // extra property allowed
};

console.log(teacher3);
