export function checkEmptyInput() {
    var isEmpty = false;
    var Name = document.getElementById("name").value,
    aadhar = document.getElementById("aadhar").value,
    dob = document.getElementById("dob").value,
    gender = document.getElementById("gender").value,
    city = document.getElementById("sts").value,
    datetime = document.getElementById("datetime").value,
    labname = document.getElementById("labname").value,
    report = document.getElementById("report").value,
    result = document.getElementById("result").value;
    if (Name === "") {
      alert("Must Enter Name");
      isEmpty = true;
    }  else if (aadhar === "") {
      alert("Must Enter Aadhar");
      isEmpty = true;
    }  else if (dob === "") {
      alert("Must Enter date of birth");
      isEmpty = true;
    } else if (gender === "") {
      alert("Must Enter Gender");
      isEmpty = true;
    } else if (city === "") {
      alert("Must Enter City");
      isEmpty = true;
    } else if (datetime === "") {
      alert("Must Enter Time");
      isEmpty = true;
    } else if (labname === "") {
      alert("Must Enter name of the Lab");
      isEmpty = true;
    } else if (report === "") {
      alert("Must Enter Report");
      isEmpty = true;
    } else if (result === "") {
      alert("Must Enter Result");
      isEmpty = true;
    } 
    return isEmpty;
  }

