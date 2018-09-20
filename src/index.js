// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var newCoins = {};
    var coins = {
        "H":50,
        "Q":25,
        "D":10,
        "N":5,
        "P":1
    };

    if(currency <= 0){
        newCoins = {};
    } else if( currency > 10000){
        newCoins['error'] ="You are rich, my friend! We don't have so much coins for exchange"; 
    } else {
        for(var key in coins ){
            var count = 0;
            while(coins[key] <= currency){
                currency -= coins[key];
                count++;
            }
            if(count === 0) continue;
    
            newCoins[key] = count;
        }
    }

    return newCoins;
}
