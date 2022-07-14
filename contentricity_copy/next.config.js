/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "mongodb://ctricdev:Xgd36436dsg4@localhost:27017/contentricity",
  }
}

module.exports = nextConfig
