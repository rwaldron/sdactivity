# SDActivity

Detect mount/unmount of sd card (or any path, really) on file system.


## Installation

```
npm install sdactivity
```


## Usage 

```js
var SDActivity = require("sdactivity");

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


See [Examples](eg) for more. 


## SDActivity Configuration Properties

| Name | Description | Default | Required? |
| ---- | ----------- | ------- | --------- |
| `sdpath` | System path to monitor | | Yes |
| `period` | Time in milliseconds between each `sdpath` check | 100 | No |


## License

Copyright (c) 2016 Rick Waldron <waldron.rick@gmail.com>
Licensed under the MIT license. See LICENSE-MIT
