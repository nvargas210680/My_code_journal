import express from "express";

const router = express.Router();

import {
  index,
  show,
  store,
  update,
  destroy,
} from "../controller/userController.js";

router.get("/", index);
router.post("/show", show);
router.post("/store", store);
router.post("/update", update);
router.post("/delete", destroy);

export default router;
