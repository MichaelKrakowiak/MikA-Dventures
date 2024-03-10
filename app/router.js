import express from "express";
import mainController from "./controllers/mainController.js";

const router = express.Router()

router.get('/', mainController.homePage);

router.get('/biographie', mainController.underConstruction);
router.get('/parcours', mainController.underConstruction);
router.get('/experiences', mainController.underConstruction);
router.get('/passions', mainController.underConstruction);
router.get('/realisations/pro', mainController.underConstruction);
router.get('/realisations/perso', mainController.underConstruction);

export default router;