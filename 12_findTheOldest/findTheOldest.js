const findTheOldest = function(people) {
    return people.reduce((acumulator, current) => {
        const first = getAge(acumulator.yearOfBirth, acumulator.yearOfDeath);
        const second = getAge(current.yearOfBirth, current.yearOfDeath);
        return first < second ? current : acumulator;
    })
};


const getAge = function(birth, death) {
    if (!death){
        death = new Date().getFullYear();
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
