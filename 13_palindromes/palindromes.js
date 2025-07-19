const palindromes = function (word) {
    let fixed_word = (word.replace(/[^a-zA-Z0-9]/g, '')).toLowerCase();
    let word_len = fixed_word.length - 1;
    for (let i = 0; i <= word_len/2; i++){
        if(fixed_word[i] != fixed_word[word_len-i]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
