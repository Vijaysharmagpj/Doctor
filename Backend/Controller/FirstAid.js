const FirstAid = require("../Model/FirstAid");

exports.FirstAid = async (req, res) => {
  try {
    const { diseaseName, medicineName, dosage, timing } = req.body;

    // Convert input to lowercase to ensure case-insensitive comparison
    const normalizedDisease = diseaseName.trim().toLowerCase();

    // Check if a disease with same name already exists (case-insensitive)
    const existingDisease = await FirstAid.findOne({
      diseaseName: { $regex: new RegExp(`^${normalizedDisease}$`, "i") }
    });

    if (existingDisease) {
      return res.status(400).json({
        success: false,
        message: "Disease already exists in first aid list",
      });
    }

    // Add new FirstAid entry if not existing
    const newFirstAid = new FirstAid({
      diseaseName: diseaseName.trim(),
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


exports.updateFirstAid = async (req, res) => {
  const { id } = req.params;
  const { medicineName, dosage, timing } = req.body;

  if (!medicineName || !dosage || !timing) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const disease = await FirstAid.findById(id);
    if (!disease) {
      return res.status(404).json({
        success: false,
        message: "Disease not found",
      });
    }

    const medIndex = disease.medications.findIndex(
      (med) => med.medicineName.toLowerCase().trim() === medicineName.toLowerCase().trim()
    );

    if (medIndex === -1) {
      //Push new medicine
      disease.medications.push({ medicineName, dosage, timing });
    } else {
      //Update existing
      disease.medications[medIndex].dosage = dosage;
      disease.medications[medIndex].timing = timing;
    }

    const updated = await disease.save();

    res.status(200).json({
      success: true,
      message: medIndex === -1 ? "New medicine added" : "Medicine updated",
      data: updated,
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error",
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
