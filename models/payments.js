const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patients",
    },
    product_type: String,
    product_detail: Map,
    payment_type: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    payment_method: {
      type: String,
      required: true,
    },
    payment_status: {
      type: String,
      required: true,
      default: "Pending",
    },
    slip_url: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Payments = mongoose.model("Payments", paymentSchema);
module.exports = Payments;
