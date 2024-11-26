function delay(ms){
    return new Promise((resolve)=>setTimeout((resolve),ms));
};

async function display(){
    
    try { 
    console.log("Hello,");
    await delay(2000);
    console.log("World");
     }catch(error){
     console.log('Error :',error.message);
    }
}

display();