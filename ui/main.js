//counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    
    //create a request object
    var request = new XMLHttpRequest();
    //capture the response and store in variable
    
    //render the variable in correct span
    request.onreddystatechange = function() {
      if (request.readystate === XMLHttprequest.DONE) {
          //take some action
          if (request.status === 200) {
                var counter = request.responseText;
                span.innerHTML = counter.toString();
                var span= document.getElementById('count');
              
          }
      }  
        //  not done yet
    };
    
    //make the request
    request.open('GET','http://harshitkumbhare.imad.hasura-app.io/counter',true);
    request.send(null);
};
