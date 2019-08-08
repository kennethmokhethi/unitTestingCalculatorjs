//Returns even numbers
function findEven(arr) {
    var arr2 = [];
    for (var a = 0; arr.length; a++) {
        
        if (arr[a] % 2 == 0) {
            arr2.push(arr[a]);
        };
    };
    return arr2;
};