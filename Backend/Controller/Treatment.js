const Treatment = require("../Model/TreatmentModel");

exports.TreatmentController = async (req, res) => {
  try {
    const newTreatment = new Treatment(req.body);
    let response = await newTreatment.save();
    res.status(200).json({
      success: true,
      data: response,
      message: "Treatment Insert Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Treatment Failer",
      error: error.message,
    });
  }
};

// get API of Treatement controller
exports.getTreatment = async (req, res) => {
  try {
    const treatments = await Treatment.find();
    res.status(200).json({
      success: true,
      data: treatments,
      message: "Treatments fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch treatments",
      error: error.message,
    });
  }
};
