//checky.js
function checky() {
    this.checks = {"ch": []};
    if(!localStorage.checks) {
        localStorage.checks = JSON.stringify(this.checks);
    }

    this.checks = JSON.parse(localStorage.checks);
    this.checks.ch.forEach(function(c) {
        //var curr = document.getElementById(c.nombre);
    });

    this.checkyfy = function(id) {
        document.getElementById(id).onclick = function(e) {
            alert(id);
        };
    }
}