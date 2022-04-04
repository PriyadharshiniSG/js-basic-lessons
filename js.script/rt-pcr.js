import { checkEmptyInput } from './check.js';
import {data } from './event.js';
import { getOptions, cities } from './cities.js';
const state = document.getElementById('sts');
state.innerHTML = getOptions(cities);
export function add() {
  if (!checkEmptyInput()) {
  document.getElementById("msg").style.display = "none";
  var name = document.getElementById("name").value;
  var aadhar = document.getElementById("aadhar").value;
  var dob = document.getElementById("dob").value;
  var city = document.getElementById("sts").value;
  var datetime = document.getElementById("datetime").value;
  var gender = document.getElementById("gender").value;
  var labname = document.getElementById("labname").value;
  var report = document.getElementById("report").value;
  var result = document.getElementById("result").value;
   let data_obj = {
    Name: name,
    Aadhar: aadhar,
    DOB: dob,
    City: city,
    Datetime: datetime,
    Gender: gender,
    Labname: labname,
    Report: report,
    Result: result,
  };
  console.log(data_obj);
  data.push(data_obj);
  console.log(data);
  var newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4),
        cell6 = newRow.insertCell(5),
        cell7 = newRow.insertCell(6),
        cell8 = newRow.insertCell(7),
        cell9 = newRow.insertCell(8);
      cell1.innerText = data_obj["Name"];
      cell2.innerText = data_obj["Aadhar"];
      cell3.innerText = data_obj["DOB"];
      cell4.innerText = data_obj["City"];
      cell5.innerText = data_obj["Datetime"];
      cell6.innerText = data_obj["Gender"];
      cell7.innerText = data_obj["Labname"];
      cell8.innerText = data_obj["Report"];
      cell9.innerText = data_obj["Result"];
  }
}

export function searchFunction(input) {
  var  i;
  console.log(input);
  var table = document.getElementById("table");
  var tr = table.getElementsByTagName("tr");
  if(tr.length === 1) {
    document.getElementById("msg").innerHTML = 
        "**There is no record found!**";
   }
   else {
      for(i = 1; i < tr.length; i++) {
        if(table.rows[i].cells[1].innerHTML === input) {
          var newRow1 = tablesearch.insertRow(tablesearch.length),
          cell1 = newRow1.insertCell(0),
          cell2 = newRow1.insertCell(1),
          cell3 = newRow1.insertCell(2),
          cell4 = newRow1.insertCell(3),
          cell5 = newRow1.insertCell(4),
          cell6 = newRow1.insertCell(5),
          cell7 = newRow1.insertCell(6),
          cell8 = newRow1.insertCell(7),
          cell9 = newRow1.insertCell(8);
          cell1.innerHTML = table.rows[i].cells[0].innerHTML;
          cell2.innerHTML = table.rows[i].cells[1].innerHTML;
          cell3.innerHTML = table.rows[i].cells[2].innerHTML;
          cell4.innerHTML = table.rows[i].cells[3].innerHTML;
          cell5.innerHTML = table.rows[i].cells[4].innerHTML;
          cell6.innerHTML = table.rows[i].cells[5].innerHTML;
          cell7.innerHTML = table.rows[i].cells[6].innerHTML;
          cell8.innerHTML = table.rows[i].cells[7].innerHTML;
          cell9.innerHTML = table.rows[i].cells[8].innerHTML;
        }
      }
   }
}
