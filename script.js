//your JS code here. If required.
var promise = new Promise(function(resolve) {
        setTimeout(function () {
          console.log("Hello, world!");
        }, 1000);
    });

    return promise;