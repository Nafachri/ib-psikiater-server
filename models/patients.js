const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    is_active: {
      type: Boolean,
      default: false,
    },
    first_name: {
      type: String,
      required: true,
      maxlength: 30,
    },
    last_name: {
      type: String,
      required: true,
      maxlength: 10,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (val) => {
          return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
            val
          );
        },
        message: `invalid email format`,
      },
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    avatar_url: {
      type: String,
      default:
        "https://www.suitdoctors.com/wp-content/uploads/2016/11/dummy-man-570x570.png",
    },
    address: {
      type: String,
      required: true,
    },
    isPremium: {
      type: Boolean,
      default: false,
      required: true,
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Patients = mongoose.model("Patients", patientSchema);
module.exports = Patients;
