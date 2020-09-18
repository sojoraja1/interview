let f = function (a, b) {
//f.lenght is two
    if (arguments.length === f.length) {
        console.log("matched");
    }else{

        console.log("not");
    }


};

//determine if the function received the number of params it expected
f(1); //argument.lenght is 1
f(1, 2); //argument.length is 2
f(1, 2, 3);//argument.lenght is 3

/**
 * 
 * javascript function are optional
*/


/**
 * f.length gives the length of arguments defined in function
 * arguments.length gives current length of arguments //passed arguments
 * 
 */