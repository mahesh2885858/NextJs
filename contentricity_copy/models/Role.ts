import mongoose from "mongoose"

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  entity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "entity",
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  permissions: [{
    name: {
      type: String,
      required: true
    },
    value: {
      type: mongoose.Schema.Types.Mixed,
      required: true
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  modifiedAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.models.role || mongoose.model("role", roleSchema) 
