const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const User = require("../models/Users");
const Grattitude = require("../models/Grattitude");

// @route GET api/grattitude
// @desc Get all grattitude posts
//@access Private

router.get("/", auth, async (req, res) => {
  try {
    const grattitude = await Grattitude.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(grattitude);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST api/grattitude
// @desc Add new grattitude post
//@access Private

router.post(
  "/",
  [
    auth,
    [
      check("grateful", "Write something to be grateful for!")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { grateful, icon, date } = req.body;

    try {
      const newGrattitude = new Grattitude({
        grateful,
        date,
        user: req.user.id
      });

      const grattitude = await newGrattitude.save();

      res.json(grattitude);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route PUT api/grattitude/:id
// @desc Update grattitude post
//@access Private

router.put("/:id", (req, res) => {
  res.send("Update a grattitude post");
});

// @route DELETE api/grattitude/:id
// @desc Delete a grattitude post
//@access Private

router.delete("/:id", (req, res) => {
  res.send("Delete a grattitude post");
});

module.exports = router;
