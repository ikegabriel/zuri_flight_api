import express from "express";
import bodyParser from "body-parser";
import flightRoutes from './routes/flight.js'

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.use('/flight', flightRoutes)

app.get('/', (req,res)=>{
    res.send('Use /flight route to access the api')
})

app.listen(PORT, () => console.log(`Server running on port: http://127.0.0.1:${PORT}`));