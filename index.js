let arr = ["bag", "dog", "pen", "bed", "bunk"];

function findIndex(arr, arrItem ){
     for (let i = 0; i <= arr.length ; i++){
     let currentItem = arr[i];
       if (currentItem === arrItem){
          return i;
       }
  }    
    return -1;
}

console.log (findIndex(arr, "pen"));//returns 2
console.log (findIndex(arr, "baf")); //returns -1

