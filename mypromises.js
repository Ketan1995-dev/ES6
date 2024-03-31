
var n = 20;

const myPromise = new Promise((resolve,reject)=>{

    if(n>10)
    {
        resolve('success 1');
    }
    else{
        reject('failure');
    }
});

console.log(myPromise);

myPromise.then((value)=>{
    console.log('My Result ',value);
});

myPromise.catch((value)=>{
    console.log('Error = '+value);
});

const myPromise1 = new Promise((resolve,reject)=>{
    const number = Math.floor(Math.random()*11);
    setTimeout(()=>{
        console.log('Number = '+number);
        if(number%2==0){
            resolve('Even Number');
        }
        else{
            reject('Odd number');
        }
    },3000);
});

console.log('Promise Object',myPromise1);

myPromise1.then((result)=>{
    console.log('Promise Object',myPromise1);
    console.log('Result = '+result);
})
.then(result=>{

})
.then((result)=>{

})
.catch(error=>{

});

myPromise1.catch((error)=>{
    console.log('Promise Object',myPromise1);
    console.log('Error = '+error);
});


function func1(){

    // code to be executed.

    if(success){
        // call func2
        function func2(){

        }
        if(success){
            // call func3
        }
    }
    else{

    }

}




