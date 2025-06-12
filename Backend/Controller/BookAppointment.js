const BookAppointment = require("../Model/BookAppointment");

exports.BookAppointmentCreate = async (req,res) =>{
    try {
        const newAppointment= new BookAppointment(req.body);
        const BookAppointmentDetails = await newAppointment.save()
        res.status(200).json({
            success:true,
            message:"Appointment booked successfully",
            data:BookAppointmentDetails,
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Failed to book appointment",
            error: error.message,
        })
    }
}

exports.getBookAppointment = async (req,res) =>{
    try {
        const getBookAppointmentDetail= await BookAppointment.find()
        res.status(200).json({
            success:true,
            message:"Fetch Book Appointment Detail Successfully",
            data:getBookAppointmentDetail,
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Something went wrong while fetching appointment data",
            error:error.message,
        })
    }
}