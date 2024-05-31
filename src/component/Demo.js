//Object:Object is a collection of Properties,it associate between key and value.
const person=new Object();
person.name="abcd";
person.age=20;
person.emailId="abcd@gmail.com";
console.log(person.age)

//Push:the push method adds new item to the end of an array.
const fruits=["apple","mango","guava"]
fruits.push("grapes")
console.log(fruits)
//Pop:the pop method removes the last item in the array.
fruits.pop()
console.log(fruits)
//Shift:the shift method removes the first item of an array.
fruits.shift()
console.log(fruits)
//unshift:the unshift method adds new item to the beginning of an array.
fruits.unshift("waterMelon")
console.log(fruits)
// Array:Array is an ordered collection of items which can be different datatypes.Arrays are used to store
//  multiple values in a single convertCssVariables.
const colours=["black","red","pink","orrange","yellow"]
console.log(colours)
//Map:it is used to apply a function on every item in an array and returns the new array
const num=[2,4,6,8,10]
const newArr=num.map(numFunc)
console.log(newArr)
function numFunc(num){
    return num*10;
}
//Filter:
const ages=[46,20,12,14,50]
const newlist=ages.filter(checkAge)
console.log(newlist)
function checkAge(ages){
    return ages>=18;
}