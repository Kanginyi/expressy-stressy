const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
   res.send("asdf");
})

router.get("/new", (req, res) => {
   res.send("bingo");
})

router
   .route("/:id")
   .get((req, res) => {
      res.send("check get");
   })
   .put((req, res) => {
      res.send("check put");
   })
   .delete((req, res) => {
      res.send("check delete");
   })

module.exports = router;