const mongoose = require("mongoose");
const Joi = require("joi");

const bloodRequestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    // email: { type: String, required: true, unique: true },
    bloodGroup: { type: String, required: true },
    reason: { type: String, required: true },
    place: { type: String, required: true },
    contact: { type: String, required: true },
    status: {
        type: String,
        default: 'pending',
        enum: ['pending', 'accepted', 'rejected']
    }
});

const BloodRequest = mongoose.model("BloodRequest", bloodRequestSchema);

const validateBloodRequest = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().label("Name"),
        // email: Joi.string().email().required().label("Email"),
        bloodGroup: Joi.string().required().label("Blood Group"),
        reason: Joi.string().required().label("Reason"),
        place: Joi.string().required().label("Place"),
        contact: Joi.string().required().label("Contact"),
        status: Joi.string().valid('pending', 'accepted', 'rejected').default('pending').label("Status")
    });
    return schema.validate(data);
};

module.exports = { BloodRequest, validateBloodRequest };
