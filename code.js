function mergesort(array) {

    if (array.length < 2) { //if the array has only 0 or 1 elements then it is already sorted
        return array;
    }

    //if array has 2 or more elements
    let subArraySize = 1; //started to follow an algorithm online
    let left = 0;
    let right = 0;
    subArraySize = subArraySize * 2;
    while (subArraySize < array.length/2) { //this might ony work for arrays that are even in length
        left = 




    }

    return array;
}


let array = [7,1,3,4];
console.log(mergesort(array));
