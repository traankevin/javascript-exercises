const repeatString = function(word, numberRepeated) {
    if (numberRepeated < 0) {
        return 'ERROR';
    }
    let string = "";
    for (let i = 0; i < numberRepeated; i++){
        string += word
    }
    return string;
};



// Do not edit below this line
module.exports = repeatString;
