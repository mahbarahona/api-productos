require('dotenv').config({path: __dirname + '/.env'});

const express        = require('express');
const cors           = require('cors');
const helmet         = require('helmet');
const morgan         = require('morgan');




const app = express();

//configurar mw
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());



app.use('/api',( req, res) =>{
    const response = {
        status:true,
    }
    console.log('response',response)
    res
    .status(200)
    .header({})
    .send(response)
});


//server
const puerto = process.env.SERVER_PORT || 3000;

app.listen( puerto, ()=>{
    console.log(`Servidor en puerto ${puerto} - http://localhost:${puerto}`)
})


