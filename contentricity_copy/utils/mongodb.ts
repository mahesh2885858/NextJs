import mongoose from "mongoose"

// Probably a better way to do this, quick and easy solution

const connectDB = async () => {
  try {
    if(mongoose.connections[0].readyState){
      return true
    }
    await mongoose.connect(process.env.MONGO_URI || "")
    console.log("MongoDB Connected...")
    return true
  } catch (err) {
    console.error(err)
    return false
  }
}

export default connectDB