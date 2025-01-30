import express from "express";
//import { check }  from "./check.js";

const router = express.Router();

router.use((req, res, next) => {
  const mysteryNumber = Math.floor(Math.random() * 500) + 1; // Génère un nombre entre 1 et 100
  next();
});

router.get("/game/", (req, res) => {
  res.render('game');
});

export default router;