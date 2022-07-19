/**
 * Generate sets of numbers including an additional number such as a "megaball"
 * parameters:
 *  numbers: {
 *      count:5, 
 *      min:1, 
 *      max:60},
 *  extra:{count:1, min:1, max:20}
 */



generate = function(numbers={count:5, min:1, max:60}, extra={count:1, min:1, max:20}) {
        let ret = {
            numbers:[], 
            extra:-1, 
            error:{value:200, 
                description:"Success"}}
        return ret;
}

applyFilter = function() {
    return {};
}

module.exports = {
    generate,
    applyFilter
}

