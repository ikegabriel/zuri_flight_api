import fs from "fs";
import { v4 as uuidv4 } from 'uuid';

const controller = {}
let flights = [
    {
        "title":"Flight to Cokyo",
        "time":"4am",
        "price":400000,
        "date":"19-10-2022",
        "id":1
    }
];

controller.listFlights = (req,res)=>{
    res.send(flights);
};

controller.singleFlight = (req,res)=>{
    const { id } = req.params;
    const foundFlight = flights.find((flight)=>flight.id === id);
    res.send(foundFlight);
};

controller.book = (req,res)=>{
    const flight = req.body;
    flights.push({...flight, id:uuidv4()})
    res.send({info:`Your flight to ${flight.title} has been booked`, flights}, );
};

controller.delete = (req,res)=>{
    const { id } = req.params;
    flights = flights.filter((flight)=>flight.id !== id);
    res.send(`flight with the id ${id} deleted from the database`);
};

controller.update = (req,res)=>{
    const { id } = req.params;
    const foundFlight = flights.find((flight)=>flight.id === id);
    console.log(req.params)
    const {title, time, price, date} = req.body;
    
    if(title)foundFlight.title=title;
    if(time)foundFlight.time=time;
    if(price)foundFlight.price=price;
    if(date)foundFlight.date=date;

    res.send(foundFlight);
};


export default controller;