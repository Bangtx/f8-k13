interface PersonI {
  getId: () => number
  getName: () => string
  getAge: () => number
  setName: (name: string) => void
  setAge: (age: number) => void
  toString: () => string
  doSomething: () => void
}

interface StudentI extends PersonI {
  getSchool: () => string
  setSchool: (school: string) => void
}

abstract class Person implements PersonI {
  private readonly id: number
  private name: string
  protected age: number

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
    return `id: ${this.getId()}, name: ${this.getName()}, age: ${this.age}`
  }

  abstract doSomething(): void
}

class Student extends Person implements StudentI {
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

  toString() {
    return `id: ${this.getId()}, name: ${this.getName()}, age: ${this.age}, school: ${this.getSchool()}`
  }

  doSomething() {
    console.log('do something')
  }
}

// create new instance: person1 is an instance
const student: StudentI = new Student(1, 'dung', 20, 'f8')
console.log(student)