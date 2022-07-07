// maybe start with friends and end with introverts
// considered permutations and combinations but too complex

let X= 7;
let Y = 4;
let Z = 3;

let introvertConv = 0;
let friendConv = 0;
let gossiperConv = 0;

if ( X%2==0 )    // begin with and check if introverts are EVEN number
{
    introvertConv = X/2;
    if ( Y%2 == 0 )   // check if friends are ODD
    {
        friendConv = Y/2;
        if ( Z%2 == 0 )   // check if gossipers are EVEN
        {
            gossiperConv = Z/2;
        }
        else if ( Z%2 != 0 )  // check if gossipers are ODD
        {
            gossiperConv = Math.ceil(Z/2);   // gossipers can talk to themselves so add 1 after the pairs match up
        }
    }
    else if ( Y%2 != 0 )   // check if friends are EVEN
    {
        friendConv = Math.ceil(Y/2)
        if ( Z%2 != 0 )
        {
            gossiperConv = (Z-1)/2;   // already took a partner from Z to talk to Y, this pair conversation will be recorded with friendConv
        }
        else if ( Z%2 == 0 )
        {
            gossiperConv = Math.ceil((Z-1)/2);
        }
    }
}

else if ( X%2 != 0 )  // check if introverts are ODD
{
    introvertConv = Math.ceil(X/2);
    if ( Y%2 != 0 )
    {
        friendConv = (Y-1)/2;
        if ( Z%2 == 0 )
        {
            gossiperConv = Z/2;
        }
        else if ( Z%2 != 0 )
        {
            gossiperConv = Math.ceil(Z/2);
        }
    }
    else if ( Y%2 == 0 )
    {
        friendConv = Math.ceil((Y-1)/2);
        if ( Z%2 != 0 )
        {
            gossiperConv = (Z-1)/2;
        }
        else if ( Z%2 == 0)
        {
            gossiperConv = Math.ceil((Z-1)/2);
        }
    }
}
console.log(`Total `)

console.log(`Introverts, X: ${X}`);
console.log(`Introvert conversations: ${introvertConv}`);

console.log(`Friends,Y: ${Y}`);
console.log(`Friend conversations: ${friendConv}`);

console.log(`Gossipers, Z: ${Z}`);
console.log(`Gossiper conversations: ${gossiperConv}`);
