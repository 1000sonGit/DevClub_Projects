class Person {
    constructor(name, age){
        console.log(`Hello, I'm ${name}`)

        // Para deixar as variáveis disponíveis para outros métodos da classe
        this.name = name
        this.age = age
    }    

    talk(){
        console.log(`Hello my name is ${this.name} and I'm ${this.age}`)
    }
}

const newPerson = new Person("Ana", 36)

newPerson.talk()