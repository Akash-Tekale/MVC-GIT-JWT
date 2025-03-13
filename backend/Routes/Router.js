import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
  res.json("server start")
});

export default router;