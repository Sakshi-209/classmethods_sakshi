class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  
    static getAdultAge() {
      return 18;
    }
  
    get isAdult() {
      return this.age >= Person.getAdultAge();
    }
  
    set setAge(newAge) {
      if (typeof newAge === 'number' && newAge >= 0) {
        this.age = newAge;
      } else {
        console.log('Age should be a non-negative number.');
      }
    }
  }
  
  // Create two instances of the Person class
  var sakshi = new Person('Sakshi', 21);
  var parshuram = new Person('Parshuram', 15);
  
  // Using instance methods
  sakshi.greet(); // Output: Hello, my name is Sakshi and I am 21 years old.
  parshuram.greet(); // Output: Hello, my name is Parshuram and I am 15 years old.
  
  // Using static method
  console.log(Person.getAdultAge()); // Output: 18
  
  // Using getter method
  console.log(sakshi.isAdult); // Output: true
  console.log(parshuram.isAdult); // Output: false
  
  // Using setter method
  sakshi.setAge = 22;
  console.log(sakshi.age); // Output: 22
  
  parshuram.setAge = -5; // Output: Age should be a non-negative number.
  