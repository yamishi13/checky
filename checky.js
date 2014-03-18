//checky.js
function checky() {
    this.checks = {"ch": []};
    if(localStorage.checks === null) {
        localStorage.checks = JSON.stringify(this.checks);
    }

    this.checks = JSON.parse(localStorage.checks);
    this.checks.ch.forEach(function(c) {
        //var curr = document.getElementById(c.nombre);
    });

    function onUpdate (id) {
        document.getElementById(id);
    }
}