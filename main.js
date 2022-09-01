const jumpOnMarsh = (arr) => {
    let jumps = 0; 
    let i = 0; 
    while (i < arr.length - 1) {  
        if (arr[i] === 0 && arr[i + 2] === 0) {
            jumps++;
            i += 2
        } else {
            jumps++;
            i++
        }
    }
    return jumps;
}

console.log(jumpOnMarsh([0, 1, 0, 0, 0, 1, 0])); //should return 3
console.log(jumpOnMarsh([0, 0, 1, 0, 0, 1, 0])) //shoud return 4

/* 
EXPLANATION:

First, we declare two initial variables: 
1. jumps: This is the variable which will accumulate the minimum jumps needed to cross the marsh.
2. i: This is the iteration variable used within the while loop. It will increment in 1 or 2 depending 
on whether Juanito is doing a single jump or a double jump, respectively.

In line 5, we declare the condition for the loop. The condition will return true as long as the value of the iteration 
variable is less than the length of the array minus 1.

Inside the loop, we establish the following condition:
First scenario:
    If the current value equals 0 AND the same is true for the element that is two positions ahead (arr[i + 2]), Juanito 
    is enabled to skip a rock and do a double jump. In this case, we add 1 to the jumps variable and we change the 
    value of i, so that we can now evaluate the situation again from the rock (the element of the array in this case)
    where Juanito is now standing at.
Second scenario:
    If the first condition is not met, then, Juanito can only do a single jump. Similarly to what was done previously, 
    we change the value of i: in this case we add 1. 

Finally, we return the jumps variable to obtain the minimum number of jumps needed. 

*/