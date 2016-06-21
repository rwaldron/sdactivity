var cp = require("child_process");
var util = require("util");
var Emitter = require("events").EventEmitter;

function SDActivity(configuration) {
  Emitter.call(this);

  if (typeof configuration === "undefined") {
    configuration = {};
  }

  if (typeof configuration.period === "undefined") {
    configuration.period = 1000;
  }

  if (typeof configuration.sdpath === "undefined") {
    throw new Error("Expected valid sdpath");
  }

  var sdpath = configuration.sdpath;
  var period = configuration.period;
  var isMounted = false;
  var poll = function() {
    cp.exec("mount", function(error, output) {
      if (error) {
        throw new Error(error);
      }

      var results = output.split("\n");
      var length = results.length;
      var isPresent = false;
      var isChange = false;

      for (var i = 0; i < length; i++) {
        if (results[i].indexOf(sdpath) !== -1) {
          isPresent = true;
          break;
        }
      }

      if (isPresent && !isMounted) {
        isMounted = true;
        isChange = true;
      }

      if (!isPresent && isMounted) {
        isMounted = false;
        isChange = true;
      }

      if (isChange) {
        this.emit(isMounted ? "mount" : "unmount");
      }

      setTimeout(poll, this.period || 1000);
    }.bind(this));
  }.bind(this);

  Object.defineProperties(this, {
    sdpath: {
      get: function() {
        return sdpath;
      }
    },
    period: {
      get: function() {
        return period;
      }
    },
    isMounted: {
      get: function() {
        return isMounted;
      }
    },
  });

  poll();
}

util.inherits(SDActivity, Emitter);

module.exports = SDActivity;
