let tpl = require("./hbs/tpl.hbs");

(function(tpl){
    let mainContainer = document.getElementById('main');
    mainContainer.innerHTML = tpl({"word":"this is the words"});
})(tpl);
