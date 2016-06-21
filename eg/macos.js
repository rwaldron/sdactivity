var SDActivity = require("../");

var sd = new SDActivity({
  sdpath: "/dev/disk3s1" // or "/Volumes/name"
});

sd.on("mount", function() {
  console.log("Mounted");
});

sd.on("unmount", function() {
  console.log("Unmounted");
});

