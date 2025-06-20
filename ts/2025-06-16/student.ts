class Person {
  private readonly id: number
  private name: string
  private age: number

  constructor(id: number, name: string, age: number) {
    this.id = id
    this.name = name
    this.age = age
  }

  getId(): number {
    return this.id
  }

  getName(): string {
    return this.name
  }

  getAge(): number {
    return this.age
  }

  setName(name: string) {
    this.name = name
  }

  setAge(age: number) {
    this.age = age
  }

  toString() {
    return `id: ${this.getId()}, name: ${this.getName()}`
  }
}

class Student extends Person {
  private school: string

  constructor(id: number, name: string, age: number, school: string) {
    super(id, name, age);
    this.school = school
  }

  getSchool(): string {
    return this.school
  }

  setSchool(school: string) {
    this.school = school
  }
}

// create new instance: person1 is an instance
const student1 = new Student(1, 'dung', 20, 'f8')
student1.setName('Luc')

console.log(student1)

