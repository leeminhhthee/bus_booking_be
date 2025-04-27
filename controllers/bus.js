import Bus from "../models/bus.js";

export const getBusDetails = async (req, res) => {
  try {
    const { busId } = req.params;
    if (!busId) {
      return res.status(400).json({ error: "Bus ID is required" });
    }

    // Sử dụng lean() để nhận về plain JS object, không kèm methods của mongoose document
    const bus = await Bus.findOne({ busId }).lean();
    if (!bus) {
      return res.status(404).json({ error: "Bus not found" });
    }

    // Trả về đúng dữ liệu chuyến xe
    return res.status(200).json({
      success: true,
      data: bus
    });
  } catch (error) {
    console.error("error fetching bus details:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

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