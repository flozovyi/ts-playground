class Student {
    fullName: string;

    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = [firstName, middleInitial, lastName].filter(d => !!d).join(' ');
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

let user = new Student("Jane", "", "Smith");
document.body.textContent = greeter(user);


