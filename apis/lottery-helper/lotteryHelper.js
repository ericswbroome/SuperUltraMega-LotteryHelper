
/**
 * Initialize database table for a game such as powerball 1 (04/22/1997-11/01/1997) having 
 * 5 numbers ranging from 1-45 and an extra ball ranging from 1-45. We can optionally load the table with data.
 */
initialize_game = function(info = {name:'', start_date:'', end_date:'', version:1}, numbers={count:5, min:1, max:60}, extra={count:1, min:1, max:20}) {

}



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

