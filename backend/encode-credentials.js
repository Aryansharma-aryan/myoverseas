const fs = require("fs");
const credentials = require("./google/your-service-account.json"); // adjust filename
const encoded = Buffer.from(JSON.stringify(credentials)).toString("base64");
fs.writeFileSync("encoded.txt", encoded);
console.log("✅ Encoded credentials saved to encoded.txt");
