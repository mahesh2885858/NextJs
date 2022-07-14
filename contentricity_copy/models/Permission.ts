import mongoose from "mongoose"

const permissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  displayLabel: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  modifiedAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.models.permission || mongoose.model("permission",permissionSchema)
