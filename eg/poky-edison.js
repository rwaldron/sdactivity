var SDActivity = require("../"); // <-- change to "sdactivity"

var sd = new SDActivity({
  sdpath: "/dev/mmcblk1p1" // or "/media/sdcard"
});

sd.on("mount", function() {
  console.log("Mount");
});

sd.on("unmount", function() {
  console.log("Unmount");
});

