export const cities = {
     0: "Select a city",
     1:   " Adilabad ",
     2:  "Agra",
     3:   "Ahmedabad",
     4:  "Alappuzha" , 
     5: "Alwar",
     6: "Aurangabad" ,
     7: "Azamgarh",
     8: "Bangalore" ,
     9: "Central Delhi", 
    10: "Chennai",
    11: "Coimbatore",
    12: " Cuddalore ",
    13: "Dharmapuri" ,
    14: "Dindigul" , 
    15: "Ernakulam" ,
    16: "Erode" , 
    17: "Hyderabad" , 
    18: "Jajpur" , 
    19: "Kanchipuram" ,
    20: "Kanyakumari" , 
    21:  "Karaikal" ,
    22:  "Kolkata" , 
    23:  "Kollam" , 
    24:  "Kozhikode" , 
    25:  "Madurai" ,
    26:  "Mumbai", 
    27:  "Namakkal" ,
    28:   "Nellore" ,
    29:    "New Delhi", 
    30: "Pondicherry" , 
    31: "Pudukkottai" , 
    32: "Ramanathapuram" ,
    33: "Thanjavur" ,
    34: "Theni" , 
    35: "Thiruvananthapuram" ,
    36: "Thoothukudi" ,
    37:  "Tiruchirappalli" , 
    38:  "Tirunelveli" , 
    39: "Tirupur" , 
    40:  "Tiruvallur" , 
    41:  "Tiruvannamalai" , 
    42:  "Tiruvarur" , 
    43:  "Vellore" , 
    44: "Viluppuram" , 
    45:  "Virudhunagar" , 
    46: "Visakhapatnam"
};
const city= document.getElementById("sts");
city.innerHTML = getOptions(cities);
export function getOptions(data) {
     return Object.entries(data)
       .map(
         ([code, city]) =>
           `<option value="${code}">${code == 'MSG' ? " " : code}  ${city}</option>`
       )
       .join("");
   }
