const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlength: 10,
    },
    last_name: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 10,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 8,
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
    Date_of_birth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    avatar_url: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    diagnose: {
      diagnose_name: {
        type: String,
      },
      diagnose_date: {
        type: Date,
      },
      psikiater_id: {
        type: mongoose.Types.ObjectId,
        ref: "psikiater_id",
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Patients = mongoose.model("Patients", patientSchema);
module.exports = Patients;
