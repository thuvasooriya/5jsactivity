const person = {
    firstName: "Nimal", 
    lastName: "Raj", 
    age: "15", 
    city: "Kandy"
};
function concatInfo() {
    return "My name is " + person.firstName + " " + person.lastName + 
    ". I'm " + person.age + " years old. I live in " + person.city + ".";
}
const dispInfo = concatInfo();