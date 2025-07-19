const sumAll = function(value, iteration) {
    if (value < 0 || iteration < 0) return "ERROR";
    if (!Number.isInteger(value) || !Number.isInteger(iteration)) return "ERROR";

    if (value > iteration){
        let temp = value;
        value = iteration;
        iteration = temp;
    }

    let return_value = 0;
    for (let i = value; i <= iteration; i++){
        return_value += i;
    }
    return return_value;
};

// Do not edit below this line
module.exports = sumAll;
