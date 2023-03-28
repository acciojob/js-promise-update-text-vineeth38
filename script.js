//your JS code here. If required.
var promise = new Promise(function(resolve) {
        setTimeout(function () {
          console.log("Let the games begin");
        }, 1000);
    });

    return promise;