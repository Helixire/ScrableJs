import express from "express";
import homeController from "../controllers/home.controller";
import gameController from "../controllers/game.controller";
import statusController from "../controllers/status.controller";


const router = express.Router();

router.get("/", (req, res) => {
  homeController.get(req, res);
});

router.post("/", (req, res) => {
  homeController.post(req, res);
});

router.get("/game", (req, res) => {
  gameController.get(req, res);
});

router.get("/game/status", (req, res) => {
  statusController.get(req, res);
});

router.get("/game/player", (req, res) => {
  statusController.player(req, res);
});

module.exports = router;
