const express = require("express");
const router = express.Router();

// @route POST api/grattitude
// @desc Get all grattitude posts
//@access Private

router.post("/", (req, res) => {
  res.send("Get all grattitude posts");
});

// @route POST api/grattitude
// @desc Add new grattitude post
//@access Private

router.post("/", (req, res) => {
  res.send("Add a grattitude post");
});

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
