var data = {
  "killing": "1. Pharaoh ordered Israelites to kill all male babies that were born. Exodus 1:15-16",
  "nile" : "2. Pharaoh charged his people to thrown every boy that is born into the Nile. Exodus 1:22 (can combine with #1)",
  "moses": "3. Levi woman placed the child in a basket and into the Nile. Exodus 2:3",
  "found": "4. Daughter of Pharaoh found the baby and made the baby her son. Exodus 2:5-10",
  "striking": "5. Moses killed an Egyptian and fled from Pharaoh. Exodus 2:11-15",
  "wife": "6. Moses rescued the women from the shepherds and helped them draw water and had Zipporah as his wife. Exodus 2:16-21",
  "burningBush": "7. Burning Bush. Exodus 3",
  "aaron": "8. Moses and Aaron returns to Egypt to meet with Pharaoh. Exodus 4:29-31",
  "hardLife": "9. Pharaoh made the lives of the Israelites harder and the Israelites blamed Moses for it. Exodus 5",
  "n" : ""
}


var showDescription = function() {
  var p = document.querySelector('#data');
  if(this.classList.contains('killing')) {
    p.innerHTML = data.killing;
    var n = document.querySelector('#n');
    n.innerHTML = data.nile;
  }
  if(this.classList.contains('moses')) {
    p.innerHTML = data.moses;
    var n = document.querySelector('#n');
    n.innerHTML = data.n;
  }
  if(this.classList.contains('found')) {
    p.innerHTML = data.found;
    var n = document.querySelector('#n');
    n.innerHTML = '';
    n.innerHTML = data.n;
  }
  if(this.classList.contains('striking')) {
    p.innerHTML = data.striking;
    var n = document.querySelector('#n');
    n.innerHTML = '';
    n.innerHTML = data.n;
  }
  if(this.classList.contains('wife')) {
    p.innerHTML = data.wife;
    var n = document.querySelector('#n');
    n.innerHTML = '';
    n.innerHTML = data.n;
  }
  if(this.classList.contains('burningBush')) {
    p.innerHTML = data.burningBush;
    var n = document.querySelector('#n');
    n.innerHTML = '';
    n.innerHTML = data.n;
  }
  if(this.classList.contains('hardLife')) {
    p.innerHTML = data.hardLife;
    var n = document.querySelector('#n');
    n.innerHTML = '';
    n.innerHTML = data.n;
  }
};
var lM = document.querySelectorAll('.hint');
for(var i = 0; i < lM.length; i++) lM[i].addEventListener('mouseover', showDescription);
