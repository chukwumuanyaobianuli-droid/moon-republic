const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const mongoose = require('mongoose');

// Paste your exact connection string here
const URI = "mongodb+srv://moonuser:MoonRepublic2026@cluster0.ctmgouq.mongodb.net/moonrepublic?retryWrites=true&w=majority";

console.log("Connecting directly to MongoDB Atlas...");

mongoose.connect(URI)
  .then(() => {
    console.log("\n=================================");
    console.log(" SUCCESS! Database connection works!");
    console.log("=================================\n");
    process.exit(0);
  })
  .catch((err) => {
    console.log("\n=================================");
    console.log(" CONNECTION FAILED:");
    console.log(err.message);
    console.log("=================================\n");
    process.exit(1);
  });