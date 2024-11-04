// Creating custom type
type Person = {
  name: string,
  age: number,
  isStudent: boolean
}
type Person = {
  name: string,
  age: number,
  isStudent?: boolean
}

let person1 = {
  name: "John",
  age: 42,
  isStudent: true
  address: {
    streer: string,
    city: string,
    country: string
  }
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}
