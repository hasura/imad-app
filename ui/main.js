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
                var list = [];
                var col = [];
                for (var i = 0; i < myBooks.length; i++) {
                    for (var key in names[i]) {
                        if (col.indexOf(key) === -1) {
                             col.push(key);
                         }
                    }
                } // extract Header information
                // CREATE DYNAMIC TABLE.
                var table = document.createElement("table");

                // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
        
                var tr = table.insertRow(-1);                   // TABLE ROW.

                for ( i = 0; i < col.length; i++) {
                    var th = document.createElement("th");      // TABLE HEADER.
                    th.innerHTML = col[i];
                    tr.appendChild(th);
                }
                var divContainer = document.getElementById("table_data");
                divContainer.innerHTML = "";
                divContainer.appendChild(table);            }
                
        }
    };
    request.open('GET','http://mramanm.imad.hasura-app.io/test-db', true);
    request.send(null); 
    
};
