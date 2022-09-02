const jwt = require("jsonwebtoken");

app.post("/api/login", (req, res) => {
  //Mock user
  const user = {
    id: 1,
    username: "Maliks",
    email: "malik.ekkawi.dev@gmail.com",
  };

  function generateAccessToken(user) {
      return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
  }
});


//   jwt.sign({ user }, "secretkey", (err, token) => {
//     res.json({ token });
//   });