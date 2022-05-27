const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/", async (req, res) => {
   try {
      const type = req.query.type || 'cat';
      const number = req.query.number || 1;
      const uri = `https://cat-fact.herokuapp.com/facts/random?animal_type=${type}&amount=${number}`;
      const response = await fetch(uri, {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' }
      })
      
      const data = await response.json();

      if (number > 1) {
         const facts = [];
         
         for (let f of data) {
            facts.push(f.text)
         }

         return res.send(facts.join(" "));
      } else {
         return res.send(data.text);
      }
   } catch (err) {
      console.error(err.message);
      res.status(500).send('There was an internal server error.');
   }
})

module.exports = router;