var button = document.getElementById('submit_button');
var request = new XMLHttpRequest();
button.onclick = function () {

    var name = document.getElementById('name');
    var inputName = name.value;
    

    request.onreadystatechange = function() {
        if ( request.readystate == XMLHttpRequest.DONE) {
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
