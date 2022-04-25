const fs = require("fs");

const Game = require("../application/cli");

function clearFile(filename) {
  if (fs.existsSync(filename)) fs.unlinkSync(filename);
}


clearFile("golden-master/0.csv");
let c = new Game("out/0.csv", "0");
c.save();

clearFile("out/1.csv");
c = new Command("out/1.csv", "1", date);
c.addCopperWire("57");
c.addPrepend("11");
c.save();

clearFile("out/2.csv");
c = new Command("out/2.csv", "2", date);
c.addPrepend("11");
c.addCopperWire("57");
c.save();

clearFile("out/3.csv");
c = new Command("out/3.csv", "3", date);
c.addCopperWire("57");
c.save();

clearFile("out/4.csv");
c = new Command("out/4.csv", "4", date);
c.addPrepend("89");
c.save();
