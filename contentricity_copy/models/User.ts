import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  entity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "entity",
    required: true
  },
  email: {
    type: String,
    required: true
  },
  platformAccess: [{
    type: mongoose.Schema.Types.ObjectId
  }],
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "role",
    required: true
  },
  customSettings: [
    {
      name: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      }
    }
  ],
  name: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: ""
  },
  jobTitle: {
    type: String,
    required: true
  },
  organization: {
    type: String,
    required: true
  },
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "tag"
  }],
  bio: {
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

export default mongoose.models.user || mongoose.model("user", userSchema)
