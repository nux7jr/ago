const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth_chek');
const { exec } = require("child_process");
const fs = require("fs")
// const fs = require('fs');

router.post('/', auth, (req, res, next) => {
  console.log(req.body.fileText)
  console.log(req.body.pathTo)


  let data = req.body.fileText;

  fs.writeFile(req.body.pathTo, data, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      // console.log(fs.readFileSync("books.txt", "utf8"));
    }
    res.render("/")
  });
  // write req.req.body.fileText to path 
  // + nginx -s reload
  // exec("ls -la", (error, stdout, stderr) => {
  //   if (error) {
  //     console.log(`error: ${error.message}`);
  //     return;
  //   }
  //   if (stderr) {
  //     console.log(`stderr: ${stderr}`);
  //     return;
  //   }
  //   console.log(`stdout: ${stdout}`);
  // });
});
module.exports = router;