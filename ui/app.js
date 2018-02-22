var a= Math.floor((Math.random() * 100) + 1);
 function percentage()
 {
	var fname= prompt("Enter your name", "yourname");
	var sname=prompt("Enter Friend name", "yourname");
	var fn =document.getElementById('firstname');
	var sn= document.getElementById('secondname');
	var per=document.getElementById('content');
	fn.innerHTML = fname;
	sn.innerHTML = sname;
	content.innerHTML= a + "%";
	
}