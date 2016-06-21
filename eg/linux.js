var SDActivity = require("../");

var sd = new SDActivity({
  sdpath: "/dev/sdd1" // or "/media/sdcard"
});

sd.on("mount", function() {
  console.log("Mount");
});

sd.on("unmount", function() {
  console.log("Unmount");
});

