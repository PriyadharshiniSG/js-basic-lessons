var state_arr = new Array("India");

var s_a = new Array();
s_a[0]="";
s_a[1]=" Adilabad | Agra |Ahmedabad | Alappuzha | Alwar | Aurangabad | Azamgarh | Bangalore | Central Delhi | Chennai |Coimbatore | Cuddalore | Dharmapuri | Dindigul | Ernakulam | Erode | Hyderabad | Jajpur | Kanchipuram | Kanyakumari | Karaikal | Kolkata | Kollam | Kozhikode | Madurai | Mumbai | Namakkal | Nellore | New Delhi | Pondicherry | Pudukkottai | Ramanathapuram | Thanjavur | Theni | Thiruvananthapuram | Thoothukudi | Tiruchirappalli | Tirunelveli | Tirupur | Tiruvallur | Tiruvannamalai | Tiruvarur | Vellore | Viluppuram | Virudhunagar | Visakhapatnam";

export function print_state(state_id){
	var option_str = document.getElementById(state_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select State','');
	option_str.selectedIndex = 0;
	for (var i=0; i<state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
	}
}

export function print_city(city_id, city_index){
	var option_str = document.getElementById(city_id);
	option_str.options[0] = new Option('Select City','');
	option_str.selectedIndex = 0;
	var city_arr = s_a[city_index].split("|");
	for (var i=0; i<city_arr.length; i++) {
		option_str.options[option_str.length] = new Option(city_arr[i],city_arr[i]);
	}
}
