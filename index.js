const app = require('express')();

app.get('/',(req,res,_) => {
    res.send('Hello World !!')
})

app.listen(3000)