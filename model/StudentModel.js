const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    name: String,
    class: String,
    school: String,
    fee: String,
    mobile: String,
    parentname: String,
    due: String,
  },
  { timestamps: true }
);

const StudentModel = mongoose.model("students", StudentSchema);

module.exports = { StudentModel };
