var greeting = require("./greeting.js");

( () => {
    var welcomeBtn = document.getElementById("welcomeBtn");
    var welcomeMsg = document.getElementById("welcomeMsg");

    welcomeBtn.addEventListener('click',  function(){ greeting(welcomeMsg)});
})();
