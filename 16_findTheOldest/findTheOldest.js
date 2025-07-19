const findTheOldest = function(array) {
    let oldest_age = 0;
    let oldest_name = "";
    for(let i = 0; i < array.length; i++){
        if(!array[i].yearOfDeath){
            let d = new Date();
            array[i].yearOfDeath = d.getFullYear();
        }
        let age = array[i].yearOfDeath - array[i].yearOfBirth;

        if(age > oldest_age){
            oldest_name = array[i].name;
            oldest_age = age;
        }
    }
    return array.find(person => person.name === oldest_name);
};

// Do not edit below this line
module.exports = findTheOldest;
