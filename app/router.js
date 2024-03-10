import express from "express";
import mainController from "./controllers/mainController.js";

const router = express.Router()

router.get('/', mainController.homePage);

router.get('/Bio', mainController.underConstruction);

export default router;