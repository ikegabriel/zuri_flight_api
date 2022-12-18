import express from "express";
import bodyParser from "body-parser";
import flightRoutes from './routes/flight.js'
import cors from "cors"

const app = express();
const PORT = 4000;

app.use(cors())
app.use(bodyParser.json());

app.use('/flight', flightRoutes)

app.get('/', (req,res)=>{
    res.send('Use /flight route to access the api')
})

app.listen(PORT, '172.17.0.1' () => console.log(`Server running on port: http://172.17.0.1:${PORT}`));
