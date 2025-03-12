const Treatment = require("../Model/TreatmentModel")

exports.TreatmentController=async(req,res)=>{
    try {
        const newTreatment = new Treatment(req.body);
        let response = await newTreatment.save();
        res.status(200).json({
            success:true,
            data:response,
            message:"Treatment Insert Successfully",
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Treatment Failer",
            error:error.message,
        })
    }
}