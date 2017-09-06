var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = { 
'articleone' : {
title: 'Article One',
heading: 'Article One',
date: 'Aug 18 2017',
content: <p>This is the paragraph tag.</p>
<p>This is Another paragraph tag.</p>
<p>This is One more paragraph tag.</p>
},
'articletwo' : {
title: 'Article Two',
heading: 'Article Two',
date: 'Aug 20 2017',
content: <p>This is the paragraph tag.</p>
<p>This is Another paragraph tag.</p>
<p>This is One more paragraph tag.</p>
},
'articlethree' : {
title: 'Article Three',
heading: 'Article Three',
date: 'Aug 22 2017',
content: <p>This is the paragraph tag.</p>
<p>This is Another paragraph tag.</p>
<p>This is One more paragraph tag.</p>
}
};