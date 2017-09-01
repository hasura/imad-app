var title = data.title;
var heading = data.heading;
var date = data.date;
var content = data.content;

var htmltemplate =`
<html>
<head>
    <title>${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
    <div class="container">
    <div> 
        <a href="/">Home</a>
    </div>
    
    <hr/>
    
    <h3>Article One</h3>
    
    <div>${date}</div>
    
    <div>
        ${content}
    </div>
    </div>
</body>