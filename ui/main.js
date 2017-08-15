//submit username/password to login

var submit = document.getElementById('submit_btn');
submit.onclick = function () {
     
    //create a request object
    var request = new XMLHttpRequest();
    //capture the response and store in variable
    
    //render the variable in correct span
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
          //take some action
          if (request.status === 200) {
     //capture a list of names and render it as a list
            alert('Logged In Successfully');
          } else if (request.status === 403) {
              alert('username/password is incorrect');
          } else if (request.status === 500) {
            alert('Somthing went wrong on the server');
          }
        }
        //  not done yet
};
    //make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST','http://harshitkumbhare.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
};