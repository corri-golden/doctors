console.log("yop")

//Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice


const newDoctor = (name, specialty, address) => {
    return {
        "doctorsName": name, 
        "specialty": specialty,
        "addressOfPractice": address
    }
}

const doc = newDoctor("Lampkin", "Heart", "1234 West Ave")

console.log(doc, "doc")


// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

// Pet name
// Pet breed

const pet = (name, breed) => {
    return {
        name: name,
        breed: breed
    }
}

const dog = pet("Jasper", "dog")
const cat = pet("Dori", "cat")
const fish = pet("Nemo", "fish")

const BowWowKennels = []

BowWowKennels.push(dog, cat, fish)
console.log(BowWowKennels)

//Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels

