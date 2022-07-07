//Assumptions:
//-- Only 1 conversation can happen between 2 people
//-- Introverts will not initiate communication with anyone
//-- Friends will not initiate communication with anyone outside their party
//-- Only Gossipers will initiate communication with anyone outside party
//-- Inputs are non-zero
//-- Introverts are the last ones to the party

let X= 4;
let Y = 7;
let Z = 5;

let convFriends = 0;
let minConvGossip = 0;
let maxConvGossip = 0;

if ( Y%2 == 0 )
{
    convFriends = Y/2;
    if ( Z%2 == 0 )      // if gossipers are even-numbered, there are no gossipers left to talk to introverts
    {  
        maxConvGossip = Z/2;
        minConvGossip = Z/2;
    }
    else if ( Z%2 != 0 )
    {
        maxConvGossip = Math.ceil(Z/2);     // 1 introvert WILL talk, but the rest wont get to talk
        minConvGossip = Math.floor(Z/2);    // introverts WONT talk at all
    }
}

else if ( Y%2 != 0 )
{
    convFriends = Math.ceil(Y/2);   // take 1 from gossipers
    if ( Z%2 != 0 )                 // results in even pairs; nobody left to talk to the introverts
    {
        maxConvGossip = (Z-1)/2;
        minConvGossip = (Z-1)/2;
    }
    else if ( Z%2 == 0 )
    {
        maxConvGossip = Math.ceil((Z-1)/2);     // 1 introvert gets to talk; the balance remain silent
        minConvGossip = Math.floor((Z-1)/2);    // none of the introverts will talk
    }
}

console.log(`Minimum number of converstaions: ${convFriends + minConvGossip}`);
console.log(`Maximum number of converstaions: ${convFriends + maxConvGossip}`);

// console.log(`Conversations among Friends: ${convFriends}`);
// console.log(`Min conversations among Gossipers: ${minConvGossip}`);
// console.log(`Max conversations among Gossipers: ${maxConvGossip}`);