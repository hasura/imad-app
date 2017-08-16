var button = document.getElementById('submit_button');
button.onclick = function () {
    var request = new XMLHTTPRequest ();
    request.onreadystatechange = function() {
        if ( request.readystate == XMLHTTPRequest.DONE) {
            if ( request.status == 200 ) {
                var names = request.responseText;
                names = JSON.parse(names);
                var list = [];
                for ( var i=0; i < names.length; i++ ) {
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHtml = list;
            }
                
        }
    };
    var name = document.getElementById('name');
    var inputName = name.value;
    
    request.open('GET','http://mramanm.hasura.imad.io/submit-info?name=' + inputName, true);
    request.send(null);
    
    
};
