import express from "express";
import Score from "../models/score.js";


const router = express.Router();

//GET all scores
router.get("/", async (req, res) => {
  try {
    const score = await Score.find().sort({ score: -1 });
    res.json(score);
  } catch (err) {
    res.json(err);
  }
});

//creating score
router.post("/", async (req, res) => {
  const score = new Score({
    name: req.body.name,
    score: req.body.score,
    department: req.body.department,
    game: req.body.game,
  });
  try {
    const data = await score.save();
    res.json(data);
  } catch (err) {
    res.json(err);
  }
});

//GET specific score
router.get("/:scoreId", async (req, res) => {
  try {
    const score = await Score.findById(req.params.scoreId);
    res.json(score);
  } catch (err) {
    res.json(err);
  }
});

//DELETE post
router.delete("/:scoreId", async (req, res) => {
  try {
    const deletedScore = await Score.findOneAndRemove({ _id: id },(err)=>{
      if(err){
        return res.status(500).send();
      }
      return res.status(200).send();
    });
    res.json(deletedScore);
  } catch (err) {
    res.json(err);
  }
});

//Update a Score
router.patch("/:scoreId", async (req, res) => {
  try {
    const updatedScore = await Score.updateOne(
      { _id: req.params.scoreId },
      { $set: { name: req.body.name, score: req.body.score, date: Date.now } }
    );
    res.json(updatedScore);
  } catch (err) {
    res.json(err);
  }
});

export default router;
