import app from "./app.js";
import dotenv from "dotenv";

// 🔥 Load environment variables
dotenv.config();

// ✅ Set default port (safety)
const PORT = process.env.PORT || 4000;

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
});