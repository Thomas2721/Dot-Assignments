// Question 1

let numbers =[3,6,7,2,9,1,2,7,8];

for(element of numbers){
let result = element*2 ;
console.log(result);
}



// Question 2

let students ={
    name:'thomas',
    age:35,
    id:'NSE/1020/14',
    dept:'CS'
}

for(keys in students ){
    console.log(`${keys} : ${students[keys]}`);
}


// Question 3

function display(str){
    let i=0;
    function displayNext(){
        if(i < str.length){
            console.log(str[i]);
            i++;
            setTimeout(printNext,1000);
        }
       
    }
    displayNext();
}


let names = ['james', 'tod', 'alex','jhon','thomas'];

display(names);





