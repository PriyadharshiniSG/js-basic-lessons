// import {print_state} from './cities.js'


// function print(){
// }


var go = document.getElementById('click');
go.addEventListener('click',(e)=>{
  e.preventDefault();
  add();
})
var data = [];
function add() {
  if (!checkEmptyInput()) {
  document.getElementById("msg").style.display = "none";
  // if(!(data == 0)){
  var name = document.getElementById("name").value;
  var aadhar = document.getElementById("aadhar").value;
  var dob = document.getElementById("dob").value;
  var city = document.getElementById("state").value;
  var datetime = document.getElementById("datetime").value;
  var gender = document.getElementById("gender").value;
  var labname = document.getElementById("labname").value;
  var report = document.getElementById("report").value;
  var result = document.getElementById("result").value;
  //  let first = document.getElementById("name");
  //  console.log(first.value);
   let data_obj = {
    name: name,
    aadhar: aadhar,
    dob: dob,
    city: city,
    datetime: datetime,
    gender: gender,
    labname: labname,
    report: report,
    result: result,
  };
  console.log(data_obj);
data.push(data_obj);
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
      cell1.innerText = data_obj["name"];
      cell2.innerText = data_obj["aadhar"];
      cell3.innerText = data_obj["dob"];
      cell4.innerText = data_obj["state"];
      cell5.innerText = data_obj["datetime"];
      cell6.innerText = data_obj["gender"];
      cell7.innerText = data_obj["labname"];
      cell8.innerText = data_obj["report"];
      cell9.innerText = data_obj["result"];
  }
}
function search() {
  var load, i;
  load = document.getElementById("find").value;
  table = document.getElementById("table");
  tr = table.getElementsByTagName('tr');
  if(tr.length === 1) {
    document.getElementById('msg').innerHTML = 
        "<----There is no record found!---->";
   }
   else {
      for(i =1; i< tr.length; i++) {
        if(table.rows[i].cells[8].innerHTML === load) {
          var newRows = table.insertRow(table.length),
          cell1 = newRows.insertCell(0),
          cell2 = newRows.insertCell(1),
          cell3 = newRows.insertCell(2),
          cell4 = newRows.insertCell(3),
          cell5 = newRows.insertCell(4),
          cell6 = newRows.insertCell(5),
          cell7 = newRows.insertCell(6),
          cell8 = newRows.insertCell(7),
          cell9 = newRows.insertCell(8);
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
// function reset() {
//   var table, tr;
//   table = document.getElementById("tablesearch");
//   tr = table.getElementsByTagName("tr");
//   for (i = 1; i < tr.length; i++) {
//     tr[i].style.display = "none";
//   }
// }
function checkEmptyInput() {
  var isEmpty = false,
    name = document.getElementById("name").value,
    aadhar = document.getElementById("aadhar").value,
    dob = document.getElementById("dob").value,
    gender = document.getElementById("gender").value,
    city = document.getElementById("city").value,
    time = document.getElementById("time").value,
    lab = document.getElementById("lab").value,
    report = document.getElementById("report").value,
    result = document.getElementById("result").value;
  return isEmpty;
}
var state_arr = new Array("India");

var s_a = new Array();
s_a[0]="";
s_a[1]=" Adilabad | Agra |Ahmedabad | Alappuzha | Alwar | Aurangabad | Azamgarh | Bangalore | Central Delhi | Chennai |Coimbatore | Cuddalore | Dharmapuri | Dindigul | Ernakulam | Erode | Hyderabad | Jajpur | Kanchipuram | Kanyakumari | Karaikal | Kolkata | Kollam | Kozhikode | Madurai | Mumbai | Namakkal | Nellore | New Delhi | Pondicherry | Pudukkottai | Ramanathapuram | Thanjavur | Theni | Thiruvananthapuram | Thoothukudi | Tiruchirappalli | Tirunelveli | Tirupur | Tiruvallur | Tiruvannamalai | Tiruvarur | Vellore | Viluppuram | Virudhunagar | Visakhapatnam";

 function print_state(state_id){
	var option_str = document.getElementById(state_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select State','');
	option_str.selectedIndex = 0;
	for (var i=0; i<state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
	}
}

function print_city(city_id, city_index){
	var option_str = document.getElementById(city_id);
	option_str.options[0] = new Option('Select City','');
	option_str.selectedIndex = 0;
	var city_arr = s_a[city_index].split("|");
	for (var i=0; i<city_arr.length; i++) {
		option_str.options[option_str.length] = new Option(city_arr[i],city_arr[i]);
	}
}
print_state('sts');

