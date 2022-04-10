//let array2 = [0, 2, -7, -4, 11, 23, 3, 1, 1, 8, 5, -4,]
let array1 = [0, -2, -7, -4,]

let iterations = array1.length * array1.length

for(let i = 0;i < iterations; i++) {
 for(let p = 0; p <= array1.length; p++){

    if(array1[i] + array1[p] === 0){
        console.log(`i = ${i}`)
        console.log(`p = ${p}`)
        console.log("Two of the numbers added together = 0")
    }

 }
 
};

//console.log(iterations)


