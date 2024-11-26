// Question 1

const color =['red','green','blue'];

const [firstColor,secondColor,thirdColor] = color;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);


// Question 2

const person={
name:'Alice',
age:25,
city:'Wonderland'
};

const {name,age,city} = person;
console.log(name);
console.log(age);
console.log(city);


// Question 3

const setting ={
    theme:'dark',
    language:'en',
}

const{theme,language, mode='light'} = setting;

console.log(theme);
console.log(language);
console.log(mode);