class person {
  constructor(name, age, place, job) {
    this.name = name;
    this.age = age;
    this.place = place;
    this.job = job;
  }

  getDetails() {
    return `The name of the person is ${this.name} and his age is ${this.age}  works at ${this.place} as a ${this.job}`;
  }
}

let person1 = new person("Maran", 22, "Thoothukudi", "Full Stack Developer");

console.log(person1.getDetails());
