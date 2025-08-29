# BFHL API

A simple **Node.js + Express** REST API that takes an array and returns:

- Odd and even numbers (as strings)  
- Alphabets (uppercase)  
- Special characters  
- Sum of numbers (as string)  
- Concatenated letters in reverse with alternating caps  

---

## 📦 Tech Stack

- Node.js  
- Express.js  
- Hosted on Railway  

---

## 🔧 Usage

### POST /bfhl

**Request:**
```json
{
  "data": ["2","a","y","4","&","-","*","5","92","b"]
}
```
Response:
```
{
  "is_success": true,
  "user_id": "sourabh_joshi_23102004",
  "email": "sourabhjoshi2310@gmail.com",
  "roll_number": "22BCE11673",
  "odd_numbers": ["5"],
  "even_numbers": ["2","4","92"],
  "alphabets": ["A","Y","B"],
  "special_characters": ["&","-","*"],
  "sum": "103",
  "concat_string": "ByA"
}
```
🌐 Deployment

Railway URL: https://your-app-name.up.railway.app/bfhl

Test with curl:
```
curl -X POST [https://your-app-name.up.railway.app/bfhl](https://22bce11673bfhlvitbhopal-production.up.railway.app/bfhl) \
-H "Content-Type: application/json" \
-d '{"data":["2","a","y","4","&","-","*","5","92","b"]}'
```
👤 Author

Sourabh Joshi
Email: sourabhjoshi2310@gmail.com
Roll Number: 22BCE11673
College:- VIT Bhopal
