const Contactus=require("../Model/Contact");

exports.ContactUs = async(req,res) => {
    console.log("contact us api")
    try {
        const newContact = new Contactus(req.body);
        const response= await newContact.save();    
        res.status(200).json({
            success:true,
            message:"Contact Successfully",
            data:response,
        })  
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Something went wrong while contact",
            error:error.message,
        })
    }
}