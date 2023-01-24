import dbConnect from "./dbConnect.js"


export function getAllRestaurants(req, res) {
    const db = dbConnect()
    res.send("All Restaurants")
}

export function getAllRestaurantbyId(req, res) {
    const db = dbConnect()
    const { restId } = req.params               // destructuring (the pro way) // pull restId out of req.params
    res.send("Got Restaurant: " + restId)
}

export function createRestaurant(req, res) {
    const db = dbConnect()
    const newRestaurant = req.body
    res.status(201).send("Added Restaurant")      // Set the status first 
    
}