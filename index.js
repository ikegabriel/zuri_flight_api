import express from "express";
import bodyParser from "body-parser";
import flightRoutes from './routes/flight.js'

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.use('/flight', flightRoutes)

app.get('/', (req,res)=>{
    console.log('[TEST]');
    
    res.send('Hello from Home page.')
})

app.listen(PORT, () => console.log(`Server running on port: http://127.0.0.1:${PORT}`));