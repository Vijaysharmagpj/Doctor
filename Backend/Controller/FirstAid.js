const FirstAid = require("../Model/FirstAid");

exports.FirstAid = async (req, res) => {
  try {
    const { diseaseName, medicineName, dosage, timing } = req.body;

    const newFirstAid = new FirstAid({
      diseaseName,
      medications: [],
    });

    const response = await newFirstAid.save();

    res.status(200).json({
      success: true,
      message: "First aid added successfully",
      data: response,
    });
  } catch (error) {
    console.error("Error adding first aid:", error.message);
    res.status(500).json({
      success: false,
      message: "Something went wrong while adding a first aid",
      error: error.message,
    });
  }
};

exports.getFirstAid = async (req, res) => {
  try {
    const getFirstAidDetail = await FirstAid.find();
    res.status(200).json({
      success: true,
      message: "Fetch all data of first aid",
      data: getFirstAidDetail,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong while fetching first aid data",
      error: error.message,
    });
  }
};
