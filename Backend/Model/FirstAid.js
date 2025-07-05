const mongoose = require("mongoose");

const firstAid = mongoose.Schema({
    diseaseName: {
        type: String,
    },
    medications: [
        {
            medicineName: {
                type: String,
            },
            dosage: {
                type: String,
            },
            timing: {
                type: String,
            }
        }
    ]
});

module.exports = mongoose.model("FirstAid", firstAid);
