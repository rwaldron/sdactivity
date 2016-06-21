# SDActivity

Detect mount/unmount of sd card (or any path, really) on file system.


## Installation

```
npm install sdactivity
```


## Usage 

```js
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
```


See [Examples]() for more. 


## License

Copyright (c) 2016 Rick Waldron <waldron.rick@gmail.com>
Licensed under the MIT license. See LICENSE-MIT
