import express from "express";
import mainController from "./controllers/mainController.js";
import contentController from "./controllers/contentController.js";

const router = express.Router()

router.get('/', mainController.homePage);

router.get('/biographie', contentController.bioPage);
router.get('/parcours', mainController.underConstruction);
router.get('/experiences', mainController.underConstruction);
router.get('/passions', mainController.underConstruction);
router.get('/realisations/pro', mainController.underConstruction);
router.get('/realisations/perso', mainController.underConstruction);

// en cours de création :
router.get('/test', contentController.career);

export default router;