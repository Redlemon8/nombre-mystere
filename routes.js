import express from "express";
import { check }  from "./check.js";

const router = express.Router();

router.use((req, res, next) => {
    let mysteryNumber = Math.floor(Math.random() * 500) + 1; // Génère un nombre entre 1 et 100
    console.log(mysteryNumber);
    next();
});

router.get("/game/", (req, res, next) => {
    res.render('game');
    });

 export default router;