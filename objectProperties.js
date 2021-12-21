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

//Array
const hobbies = ['Sports','Cooking'];
for(let hobby of hobbies){
    console.log(hobby);
}

/* console.log(hobbies.map(hobby => {
    return 'Hobby : ' + hobby;
    //transform new array
})); */

console.log(hobbies.map(hobby => 'Hobby2 : '+ hobby));
console.log(hobbies);//original array not converted

//Object, Array : reference type
hobbies.push('Programming');
console.log(hobbies);
    