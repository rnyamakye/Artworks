import { Router } from "express";
import { blogData } from "../constants/index.mjs";

const router = Router();

router.get("/blogs", (req, res) => {
  res.send(blogData);
});

export default router;
