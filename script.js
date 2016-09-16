// var xhr = new XMLHttpRequest();
// xhr.addEventListener( "load", function(){
//     console.log( this.responseText );
// });
// xhr.open("GET", "http://reqres.in/api/users", true);
// xhr.send();


// // Create a post
// var xhr = new XMLHttpRequest();
// xhr.addEventListener( "load", function(){
//     console.log( this.responseText );
// });
// xhr.open("POST", "http://reqres.in/api/posts", true);
// xhr.send("title=Foo&body=Bar&userId=1");

var $ = {

  ajax: function(options) {
    var complete = options.complete || function() { }
    var data = options.data || {}
    var error = options.error || function() { }
    var headers = options.hearders || function() { }

  }

};


// complete (function) What arguments should this take?
// data (object)
// error (function) What arguments should this take?
// headers (object)
// method (string) Note: type is an alias for this
// success (function) What arguments should this take?
// url (string)
// async (boolean)