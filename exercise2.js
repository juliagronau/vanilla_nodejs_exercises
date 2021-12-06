const fs = require("fs");

fs.writeFile("test.html", "hello", (err) => {
  if (err) throw err;
});
