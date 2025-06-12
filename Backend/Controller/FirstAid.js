const FirstAid = require("../Model/FirstAid");

exports.FirstAid = async (req, res) => {
  try {
    const newFirstAid =  new FirstAid(req.body);
    const response = await newFirstAid.save();
    res.status(200).json({
      success: true,
      message: "first aid add successfully",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong while adding a first aid",
      error: error.message,
    });
  }
};

exports.getFirstAid = async (req,res) => {
    try {
        const getFirstAidDetail= await FirstAid.find();
        res.status(200).json({
            success:true,
            message:"Fetch all data of first aid",
            data:getFirstAidDetail,
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Something went wrong while fetching first aid data",
            error:error.message,
        })
    }
}
