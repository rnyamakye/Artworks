import { Router } from "express";
import { tutorials } from "../constants/index.mjs";

const router = Router();

router.get("/tutorials", (req, res) => {
  res.send(tutorials);
});

export default router;
