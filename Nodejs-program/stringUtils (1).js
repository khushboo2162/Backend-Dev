function capitalize(str){
    if(!str)return"";
    return str[0].toUpperCase()+str.slice(1);
}

//reverse a string
function reverse(str){
    return str.split("").reverse().join("");
}

function countvowels(str){
    const matches=str.match(/[aeiou]/gi);
    return matches ? matches.length :0;
}

module.exports={
    capitalize,
    countvowels,
    reverse
};