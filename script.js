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
    var request = {};
    request.complete = options.complete || function() { };
    request.data = options.data || {};
    request.dataType = options.dataType || "json";
    request.error = options.error || function() { };
    request.headers = options.headers || function() { };
    request.method = options.method || "GET";
    request.success = options.success || function() {};
    request.url = options.url ;
    request.async = options.async || true;

    var xhr = new XMLHttpRequest();

    this.errorListener(xhr, request);
    this.loadListener(xhr, request);



    xhr.open(request.method, request.url, request.async);
    xhr.send();

    return xhr;

  },

   errorListener: function(xhr, requestOptions) {
      xhr.addEventListener( "error", function(){
        return requestOptions.error(xhr, xhr.status, xhr.statusText);
    });
  },

  loadListener: function(xhr, requestOptions) {
      xhr.addEventListener( "load", function(){
        if (xhr.readyState === 4) {

          if (xhr.status === 200) {
            requestOptions.success(xhr.data, xhr.statusText, xhr);
          } else {
            requestOptions.error(xhr, xhr.status, xhr.statusText);
          }

          requestOptions.complete(xhr, xhr.statusText);

        }
    });
  }
};

// $.ajax({

// });

a = $.ajax({
  complete: function() { console.log("complete" ); },
  success: function(data, status) { console.log(status); },
  error: function() { console.log("error" ); },
  url: "http://reqres.in/api/users"
});

// complete (function) What arguments should this take?
// data (object)
// error (function) What arguments should this take?
// headers (object)
// method (string) Note: type is an alias for this
// success (function) What arguments should this take?
// url (string)
// async (boolean)