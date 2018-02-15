function generateTemplate(obj){
    var title=obj.title;
    var heading=obj.heading;
    var content=obj.content;
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="ui/style.css"/>
        <title>${title}</title>
    </head>
    <body>
        <h1 class="center">${heading}</h1>
        <hr/>
        <p>${content}</p>
        <hr/>
        <div class="center">
            <a href="/">&larr; Back to Home</a>
        </div>
    </body>
    </html>`;
}
module.exports=generateTemplate;