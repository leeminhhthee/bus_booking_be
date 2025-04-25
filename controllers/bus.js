import Bus from "../models/bus.js";

export const getBusDetails = async (req, res) => {
  try {
    const { busId } = req.params
    if (!busId) {
      return res.status(400).json({ error: "Bus ID is required" })
    }

    const bus = await Bus.findOne({busId})

    if(!bus) {
      return res.status(404).json({ error: "Bus not found" })
    }

    res.status(200).json({
      success: true,
      data: {
        busId: { type: String, required: true, unique: true },
        from: { type: String, required: true },
        to: { type: String, required: true },
        departureTime: { type: Date, required: true },
        arrivaltime: { type: Date, required: true },
        duration: { type: String, required: true },
        availableSeats: { type: Number, required: true },
        price: { type: Number, required: true },
        originalPrice: { type: Number, required: true },
        company: { type: String, required: true },
        busType: { type: String, required: true },
        rating: { type: Number, default: 0 },
        totalReviews: { type: Number, default: 0 },
        badges: [{ type: String }],
        seats: [[SeatSchema]],
      }
    })
  } catch (error) {
    console.error("error fetching bus details: ",error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

export const searchBuses = async (req, res) => {
  try {
    const { from, to, date } = req.body
    if (!from || !to || !date) {
      return res.status(400).json({ error: "from, to and date is required" })
    }

    const selectedDate = new Date(date)
    const startOfDay = new Date(selectedDate.setHours(0,0,0,0))
    const endOfDay = new Date(selectedDate.setHours(23,59,59,999))

    const buses = await Bus.find({
      from,
      to,
      departureTime: {$gte: startOfDay, $lte: endOfDay },
    })

    res.status(200).json({ success: true, data: buses })

  } catch (error) {
    console.error("error searching buses: ",error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}