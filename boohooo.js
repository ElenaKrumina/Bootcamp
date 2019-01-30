//1 Write a JS exercise to get the extension of afile name.

let filename = "system.js"
console.log(filename.split('.').pop());
let filename = "Untitled.js"
console.log(filename.split('.').pop());

filename.split('.').slice (-1).join('.')


//2 Write a Js program to create a new string without the first and last character of a given string.

console.log(without_first_end('JavaScript'));
console.log(without_first_end('JS'));

//3 Write a Js program to reverse a given string.

function strReverse(name){

    var splitString = name.split("");
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 
 
    console.log('Reverse string: ' + joinArray);
}
strReverse("Test string");

// vai

function string_reverse(str) {
    return str.split("").reverse().join("");
}
console.log(string_reverse("JavaScript"));



//4 Write a Js program to convert the lattrs of a given string in alphabetical order.

function sort(stringToSort){
    let arr = stringToSort.split('');
    arr.sort();
    return arr;
  }

  //5 whrite a js program to check two given nummbers and 
  //return true if one of the number is 50 or if their sum is 50.

function compare(num1, num2){
  return (num1 == 50 || num2 == 50 || num1 + num2 == 50);
}
  // 6 whrite a js program to complite the sum of
  // three elements of a given array of integers of length 3.

  function sum(arr){
    let sum = 0;
    arr.forEach(function(el){
      sum = sum + el;
    })
    return sum;
  }


  function sumEl(arr=[0,0,0]){
    var sum=0;
    if (arr.length==3){
        for (let i=0;i<3;i++){
            sum +=arr[i];
        };
    } else {
        console.log("Array d'nt have 3 elements");
    }
    return sum;
}

var sum = [1, 2, 3].reduce(add, 0);

function add(a, b) {
   return a + b;
}
//7 whrite a js program to compute the sum of the two given integers. 
//If the two values are same, then returns triple their sum.

function compute(num1, num2){
    if(num1 === num2){
      return (num1+num2)*3
    }else {
      return num1+num2
    }


  }
  function foo(a,b) {
    if(a === b) {
        return (a+b)*3
    }
    
        return a+b

    
}

console.log(foo(2,7));

//8 Write a js program to create a newqrry taking the first and last element
// from a given arry of integers and length must be greater or equal to 1.

function newArr(arr){
    if (arr.length===0){
        var firstEl=arr[0];
        console.log("Illinal arry length,")
        return
    }
        var lastEl=arr[arr.length-1];
        var newArray=[];
        newArray.push(arr[0]);
        if (arr.length-1!=0){
            newArray.push(lastEl);
        }
        return newArray;
    } else{
        console.log('There is no array!')
    };
}


//9 Write a js program to find the number of elements which presents in both of the given arrays.

function middle_elements(a, b) 
{
  var new_array = []
  new_array.push(a[1], b[1]);

    return new_array;
}
console.log(middle_elements([1, 2, 3], [1, 5, 6]));  
console.log(middle_elements([3, 3, 3], [2, 8, 0]));  
console.log(middle_elements([4, 2, 7], [2, 4, 5])); 




//Promise Constructor




let promise = new Promise(
    //unanymous function which shall be called when promise is created
    function(resolve, reject) {
      // body of Promise
      console.log("start of logic");
      //... logic
      let success = false;
      // then call either resolve or reject based on logic
      success ? resolve("success") : reject("failure");
      console.log("end of logic");
    }
  );
  
  // creating structure of what happens after promise body finishes execution
  promise
    //    resolve("success"), thus success -> input
    .then(function(input) {
      // success body step 1 out of 1
      console.log(input);
    })
    .catch(function(error) {
      // failure body
      console.error(error);
    });



var promise1 = new Promise(function(resolve, reject) {
    console.log("Loading");
    setTimeout(function() {
        console.log("Got data from facebook")
      resolve('Elena');
      reject("Eror: a valid user");
    }, 5000); //sec
  });
  
  promise1.then(function(value) {
    console.log(Display name:"+ name);
    // expected output: "foo"
    return"got the name"+ name);

  })result=>{
      consule.log(result);
  }

  .then()
  
  console.log(promise1);
  // expected output: [object Promise]


  setTimeout(function() {
    // body of timer
    console.log("1 second has passed");
  }, 1000 /* time in miliseconds */);
  }

  //task

  function start(counter){
    if(counter > 0 && counter<11){
      setTimeout(function(){
       
        console.log(counter);
        counter--;
        start(counter);
      }, 1000);
    }
  }
  start(10)

  // cits
  function somethingThatTakesTime() {
    console.log("2)");
    return new Promise(function(resolve) {
      console.log("3)");
      setTimeout(function() {
        console.log("5)");
        resolve("too long?");
      }, 1000);
      console.log("4)");
    });
  }
  
  async function myFunction() {
    console.log("1)");
    let value = await somethingThatTakesTime();
    console.log("6)");
    console.log(value);
  }
  
  console.log("0)");
  myFunction();
  console.log("7)");

  //task


  function somethingThatTakesTime(counter) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(counter);
      }, 1000);
    });
  }
  
  async function myFunction(counter) {
    if (counter>0){
      let value = await somethingThatTakesTime(counter);
      console.log(value);
      myFunction(--counter);
    }
  }
  
  myFunction(10);







