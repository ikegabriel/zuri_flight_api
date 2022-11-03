import express from "express";
import controller from "../controllers/flightController.js"

const router = express.Router();

// All routes in here are starting with /flight

// List all flights
router.get('/', controller.listFlights);

// Get a single flight
router.get('/:id', controller.singleFlight);

// Book a flight
router.post('/book', controller.book);

// Update flight
router.patch('/update/:id', controller.update);

// Delete flight
router.delete   ('/delete/:id', controller.delete);

export default router