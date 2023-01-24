import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { createRestaurant, getAllRestaurantbyId, getAllRestaurants } 
    from "./src/restaurants.js"

dotenv.config()


const PORT = process.env.PORT || 3030 // 3030 as a back up (short cuircuiting)

const app = express()
app.use(cors())
app.use(express.json())


// set up our routes
app.get( "/restaurants", getAllRestaurants)     // I already have this function written out 
app.get("/restaurants/:restId", getAllRestaurantbyId)
app.post('/restaurants', createRestaurant)

// Listen on port
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}...`)
})
