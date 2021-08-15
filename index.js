// Add your functions here
function map(arr, f){
    return arr.map(f);
}

function reduce(arr, f, int){
    if (!!int) {
        return arr.reduce(f, int)
    } else {
        return arr.reduce(f)
    }
}