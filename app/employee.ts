
export interface Person {
  fristName: string,
  lastName: string,
  age?: number
}

export class Employee {
  firstName: string
  lastName: string

  constructor(private person: Person) {
    this.firstName = this.person.fristName
    this.lastName = this.person.lastName
  }

  getFullname(): string {
    return `${this.firstName} ${this.lastName}`
  }
}