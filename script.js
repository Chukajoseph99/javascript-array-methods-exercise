//convert a string to camelCase
function camelize(str){
    let camelCase = str.split("-");
    for(let i = 1; i < camelCase.length; i++){
        camelCase[i] = camelCase[i][0].toUpperCase() + camelCase[i].slice(1);
    }
    return camelCase.join("");
}

console.log(camelize("list-style-image"));



//Filter Range
function filterRange(arr, a, b){
    let filtered = arr.filter((elem) => {
        return elem >= a && elem <= b
});
    return filtered;
}

console.log(filterRange([5,3,8,1],1,4));