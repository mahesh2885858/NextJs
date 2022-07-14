import mongoose from "mongoose";

const invitationsSchema = new mongoose.Schema({
  entity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "entity",
    required: true,
  },
  inviteToken: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  platformIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "role",
    required: true,
  },
  sentAt: [
    {
      type: Date
    }
  ],
  expiresAt: {
    type: Date,
    default: null,
  },
  status: {
    type: Int,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  cancelledAt: {
    type: Date,
    default: null,
  },
  cancelledBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

export default mongoose.models.invitation ||
  mongoose.model("invitation", invitationsSchema);
