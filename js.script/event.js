import { searchFunction, add } from "./rt-pcr.js";

export var data = [];

export function reset() {
    var table, tr;
    table = document.getElementById("tablesearch");
    tr = table.getElementsByTagName("tr");
    for (var i = 1; i < tr.length; i++) {
      tr[i].style.display = "none";
    }
  }
  var find = document.getElementById('submit');
 find.addEventListener('click',() => {
   var load = document.getElementById("find").value;
    searchFunction(load);
 });
 var go = document.getElementById('click');
 go.addEventListener('click',(e)=>{
   e.preventDefault();
   add();
 })
  var set = document.getElementById('find');
  set.addEventListener('keyup',() => {
     reset();
  });
 