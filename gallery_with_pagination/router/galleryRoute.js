import express from "express";
import { showGallery } from "../controller/galleryController.js";

const router =express.Router();

router.get("./index", showGallery);

export default router;