import express from 'express';

const router =express.Router();


router.get("/", (req, res) => {
  res.send("Home Route");
});

router.get("/user", (req, res) => {
  res.json({
    name: "Amit",
    role: "Student",
  });
});

router.post("/user", userValidation, (req, res) => {
  const { username, password } = req.body;

  res.status(201).json({
    message: "User created successfully",
    user: {
      username,
    },
  });
});

router.put("/user/:id", userValidation, (req, res) => {
  const { id } = req.params;
  const { username } = req.body;

  res.json({
    message: "User updated successfully",
    userId: id,
    updatedUsername: username,
  });
});

export default router;
