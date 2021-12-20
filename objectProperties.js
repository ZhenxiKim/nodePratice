//A key-value pair is also called a "property" or a "field" of the object.
const person = {
    name: 'Max',
    age: 29,
    // greet : () => {
    //     console.log('Hi I am ' + this.name);
    // }
    // greet : function() {
    //     console.log('Hi I am ' + this.name);
    // }
    greet() {
        console.log('Hi I am ' + this.name);
    }

};

console.log(person);
person.greet();