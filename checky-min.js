function Checky(){var a={ch:[]};localStorage.checks||(localStorage.checks=JSON.stringify(a)),a=JSON.parse(localStorage.checks),a.ch.forEach(function(a){document.getElementById(a.id).checked=a.status}),this.checkyfy=function(a,b,c){switch(b="undefined"!=typeof b?b:"checkbox",c="undefined"!=typeof c?c:{anchor:""},b){case"checkbox":this.checkybox(a);break;case"anchor":this.checkyanchor(a,c.anchor)}},this.checkybox=function(b){document.getElementById(b).onclick=function(){for(var c=!1,d=0;d<a.ch.length;d++)if(a.ch[d].id===b){a.ch[d].status=document.getElementById(b).checked,localStorage.checks=JSON.stringify(a),c=!0;break}c||(obj={id:b,status:document.getElementById(b).checked},a.ch.push(obj),localStorage.checks=JSON.stringify(a))}},this.checkyanchor=function(b,c){for(var d=!1,e=0;e<a.ch.length;e++)if(a.ch[e].id===b){d=!0;break}d||(document.getElementById(c).onclick=function(){obj={id:b,status:!0},document.getElementById(b).checked=!0,a.ch.push(obj),localStorage.checks=JSON.stringify(a)})}}