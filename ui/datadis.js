
function () {

    var request = new XMLHttpRequest();
	
    var names = request.responseText;
    names = JSON.parse(names);
    var list = [];
	list += '<tr>';
	list += '<td style="width: 105.4px;">Key</td>';
	list += '<td style="width: 105.4px;">Client Name</td>';
	list += '<td style="width: 105.4px;">Client Gender</td>';
	list += '<td style="width: 105.4px;">Client Email</td>';
	list += '<td style="width: 105.4px;">Client Mobile</td>';
	list += '</tr>';
    for ( var i=0; i < names.length; i++ ) {
		list += '<tr>';
		list += '<td style="width: 105.4px;">Key</td>';
		list += '<td style="width: 105.4px;">Client Name</td>';
		list += '<td style="width: 105.4px;">Client Gender</td>';
		list += '<td style="width: 105.4px;">Client Email</td>';
		list += '<td style="width: 105.4px;">Client Mobile</td>';
		list += '</tr>';    
    }
    var ul = document.getElementById('client_table');
    ul.innerHTML = list;
  
};
