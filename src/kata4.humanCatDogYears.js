const humanCatDogYears = (number) => {
    const ageArray = [number]
    if (number===1){
        ageArray.push(15)
        ageArray,push(15)
    }
    else if (number===2){
        ageArray.push(24)
        ageArray.push(24)
    }
    else {
        ageArray.push(24+4*(number-2))
        ageArray.push(24+5*(number-2))
    }
    return ageArray
}; 
module.exports = humanCatDogYears;

