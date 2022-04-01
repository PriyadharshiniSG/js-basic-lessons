var s_a = new Array(" Adilabad ",
"Agra","Ahmedabad","Alappuzha" , "Alwar", "Aurangabad" ,"Azamgarh","Bangalore" , "Central Delhi", "Chennai"," Coimbatore",
 " Cuddalore ", "Dharmapuri" , "Dindigul" , "Ernakulam" , "Erode" , "Hyderabad" , "Jajpur" , "Kanchipuram" , "Kanyakumari" , "Karaikal" , "Kolkata" , "Kollam" , "Kozhikode" , "Madurai" , "Mumbai", "Namakkal" , "Nellore" , "New Delhi", 
 "Pondicherry" , "Pudukkottai" , "Ramanathapuram" , "Thanjavur" , "Theni" , "Thiruvananthapuram" , "Thoothukudi" , "Tiruchirappalli" , "Tirunelveli" , "Tirupur" , "Tiruvallur" , "Tiruvannamalai" , "Tiruvarur" , "Vellore" , "Viluppuram" , "Virudhunagar" , "Visakhapatnam");
export function print_state(state_id){
	var option_str = document.getElementById(state_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select city','');
	option_str.selectedIndex = 0;
	for (var i=0; i<s_a.length; i++) {
		option_str.options[option_str.length] = new Option(s_a[i],s_a[i]);
	}
}
