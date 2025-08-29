// index.js
import express from "express";

const app = express();

// ✅ Middleware: safe JSON parser
app.use(express.json({
  strict: true,
  verify: (req, res, buf) => {
    try {
      JSON.parse(buf.toString());
    } catch (e) {
      throw new Error("Invalid JSON format");
    }
  }
}));

// === Your details ===
const FULL_NAME = "sourabh_joshi";
const DOB = "23102004";
const EMAIL = "sourabhjoshi2310@gmail.com";
const ROLL_NUMBER = "22BCE11673";

// === Route /bfhl ===
app.post("/bfhl", (req, res, next) => {
  try {
    const data = req.body.data;

    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Request must contain 'data' as an array"
      });
    }

    let odd_numbers = [];
    let even_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let sum = 0;
    let lettersOnly = [];

    data.forEach(item => {
      if (!isNaN(item)) {
        // Numeric
        let num = parseInt(item);
        if (num % 2 === 0) {
          even_numbers.push(item.toString());
        } else {
          odd_numbers.push(item.toString());
        }
        sum += num;
      } else if (/^[a-zA-Z]+$/.test(item)) {
        // Alphabets
        alphabets.push(item.toUpperCase());
        lettersOnly.push(item);
      } else {
        // Special chars
        special_characters.push(item);
      }
    });

    // Reverse + alternating caps
    let allLetters = lettersOnly.join("").split("").reverse();
    let concat_string = allLetters
      .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
      .join("");

    res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string
    });
  } catch (err) {
    next(err); // forward to error handler
  }
});

// === Global Error Handler ===
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);
  res.status(500).json({
    is_success: false,
    message: err.message || "Something went wrong"
  });
});

// === Start server ===
app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
