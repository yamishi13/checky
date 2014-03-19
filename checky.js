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
            for (var i = 0; i < this.checks.ch.length; i++) {
                if(this.checks.ch[i].id === id) {
                    this.checks.ch[i].status = document.getElementById(id).checked;
                    localStorage.checks = JSON.stringify(this.checks);
                }
            }
        };
    };
}