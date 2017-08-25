var button = document.getElementById('submit_button');
function fill_names() {
    
    
}
button.onclick = function () {

    var name = document.getElementById('name');
    var inputName = name.value;
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if ( request.readyState == XMLHttpRequest.DONE) {
            if ( request.status == 200 ) {
                var names = request.responseText;
                names = JSON.parse(names);
                var list = [];
                for ( var i=0; i < names.length; i++ ) {
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
                
        }
    };
    request.open('GET','http://mramanm.imad.hasura-app.io/submit-info?name=' + inputName, true);
    request.send(null);

    
};
var datareq = document.getElementById('data_button');

datareq.onclick = function() {
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if ( request.readyState == XMLHttpRequest.DONE) {
            if ( request.status == 200 ) {
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
            		list += '<td style="width: 105.4px;">names[i][0]</td>';
            		list += '<td style="width: 105.4px;">names[i][1]</td>';
            		list += '<td style="width: 105.4px;">names[i][2]</td>';
            		list += '<td style="width: 105.4px;">names[i][4]</td>';
            		list += '<td style="width: 105.4px;">names[i][5]</td>';
            		list += '</tr>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
                
        }
    };
    request.open('GET','http://mramanm.imad.hasura-app.io/test-db', true);
    request.send(null); 
    
};
