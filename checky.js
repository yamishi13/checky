//checky.js
function Checky() {
    var checks = {"ch": []};
    if(!localStorage.checks) {
        localStorage.checks = JSON.stringify(checks);
    }

    checks = JSON.parse(localStorage.checks);
    checks.ch.forEach(function(c) {
        document.getElementById(c.id).checked = c.status;
    });

    this.checkyfy = function(id, type, extras) {
        type = typeof type !== 'undefined' ? type : "checkbox";
        extras = typeof extras !== 'undefined' ? extras : {"anchor":""};
        switch(type) {
            case "checkbox":
                this.checkybox(id); break;
            case "anchor":
                this.checkyanchor(id, extras.anchor); break;
        }
    };

    this.checkybox = function(id) {
        document.getElementById(id).onclick = function() {
            var done = false;
            for (var i = 0; i < checks.ch.length; i++) {
                if(checks.ch[i].id === id) {
                    checks.ch[i].status = document.getElementById(id).checked;
                    localStorage.checks = JSON.stringify(checks);
                    done = true;
                    break;
                }
            }
            if(!done) {
                obj = {"id": id, "status": document.getElementById(id).checked};
                checks.ch.push(obj);
                localStorage.checks = JSON.stringify(checks);
            }
        };
    };

    this.checkyanchor = function(id, anchor) {
        var done = false;
        for (var i = 0; i < checks.ch.length; i++) {
            if(checks.ch[i].id === id) {
                done = true;
                break;
            }
        }
        if(!done) {
            document.getElementById(anchor).onclick = function() {
                obj = {"id": id, "status": true};
                document.getElementById(id).checked = true;
                checks.ch.push(obj);
                localStorage.checks = JSON.stringify(checks);
            };
        }
    };
}
