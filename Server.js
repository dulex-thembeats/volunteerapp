var express = require('express');

var app = express();

var port = process.env.PORT || 3000;



app.get('/', (req, res)=>{
    res.send('hello, express');
})




app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})