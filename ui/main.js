//counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    
    //make a request to counter end point 
    
    //capture the response and store in variable
    
    //render the variable in correct span
    
    counter = counter + 1;
    var span= document.getElementById('count');
    span.innerHTMl = counter.toString();
    
};
