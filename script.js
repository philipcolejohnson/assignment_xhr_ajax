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
    var request = {}
    var request.complete = options.complete || function() { };
    var request.data = options.data || {};
    var request.dataType = options.dataType || "json"
    var request.error = options.error || function() { };
    var request.headers = options.headers || function() { };
    var request.method = options.method || "GET";
    var request.success = options.success || function() {};
    var request.url = options.url ;
    var request.async = options.async || true;

    var xhr = new XMLHttpRequest();

    this.errorListener(xhr, xhrequest)
    this.successListener(xhr, request)



    xhr.open(options.method, options.url, options.async);
    xhr.send();

    return

  },

   errorListener: function(xhr, requestOptions) {
      xhr.addEventListener( "error", function(){
        return requestOptions.error(xhr, xhr.status, xhr.statusText);
    });
  },

  successListener: function(xhr, requestOptions) {
      xhr.addEventListener( "error", function(){
        return requestOptions.success(JSON.parse(xhr.data), xhr.status, xhr.statusText);
    });
  }
};

$.ajax({

});

// complete (function) What arguments should this take?
// data (object)
// error (function) What arguments should this take?
// headers (object)
// method (string) Note: type is an alias for this
// success (function) What arguments should this take?
// url (string)
// async (boolean)