const app = require("express");
const router = app.Router();
const Card = require("../models/card");

router.get("/", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    res.status(500).send("server error");
  }
});
router.post("/", async (req, res) => {
  //   const { title, description, price } = req.body;
  const newCard = new Card({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
  });
  try {
    const saveCard = await newCard.save();
    res.json(saveCard);
  } catch (err) {
    res.status(500).send("server error");
  }
});
router.get("/:id", async (req, res) => {
  try {
    const foundUser = await Card.findById(req.params.id);
    res.json(foundUser);
  } catch (err) {
    res.status(500).send("server error");
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const removeCards = await Card.findByIdAndRemove(req.params.id);
    res.send("deleted successfully");
  } catch (err) {
    res.status(500).send("server error");
  }
});
router.put("/:id", async (req, res) => {
  try {
    const updateCards = await Card.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          price: req.body.price,
        },
      }
    );
    res.json(updateCards);
  } catch (err) {
    res.status(500).send("server error");
  }
});
module.exports = router;
