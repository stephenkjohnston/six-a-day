// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

require("./styles.css");

var books = [{
  "name": "Genesis",
  "chapters": 50,
  "testament": "old"
}, {
  "name": "Exodus",
  "chapters": 40,
  "testament": "old"
}, {
  "name": "Leviticus",
  "chapters": 27,
  "testament": "old"
}, {
  "name": "Numbers",
  "chapters": 36,
  "testament": "old"
}, {
  "name": "Deuteronomy",
  "chapters": 34,
  "testament": "old"
}, {
  "name": "Joshua",
  "chapters": 24,
  "testament": "old"
}, {
  "name": "Judges",
  "chapters": 21,
  "testament": "old"
}, {
  "name": "Ruth",
  "chapters": 4,
  "testament": "old"
}, {
  "name": "1 Samuel",
  "chapters": 31,
  "testament": "old"
}, {
  "name": "2 Samuel",
  "chapters": 24,
  "testament": "old"
}, {
  "name": "1 Kings",
  "chapters": 22,
  "testament": "old"
}, {
  "name": "2 Kings",
  "chapters": 25,
  "testament": "old"
}, {
  "name": "1 Chronicles",
  "chapters": 29,
  "testament": "new"
}, {
  "name": "2 Chronicles",
  "chapters": 36,
  "testament": "new"
}, {
  "name": "Ezra",
  "chapters": 10,
  "testament": "new"
}, {
  "name": "Nehemiah",
  "chapters": 13,
  "testament": "old"
}, {
  "name": "Esther",
  "chapters": 10,
  "testament": "old"
}, {
  "name": "Job",
  "chapters": 42,
  "testament": "old"
}, {
  "name": "Psalms",
  "chapters": 150,
  "testament": "old"
}, {
  "name": "Proverbs",
  "chapters": 31,
  "testament": "new"
}, {
  "name": "Ecclesiastes",
  "chapters": 12,
  "testament": "old"
}, {
  "name": "Song of Solomon",
  "chapters": 8,
  "testament": "old"
}, {
  "name": "Isaiah",
  "chapters": 66,
  "testament": "old"
}, {
  "name": "Jeremiah",
  "chapters": 52,
  "testament": "old"
}, {
  "name": "Lamentations",
  "chapters": 5,
  "testament": "old"
}, {
  "name": "Ezekiel",
  "chapters": 48,
  "testament": "old"
}, {
  "name": "Daniel",
  "chapters": 12,
  "testament": "old"
}, {
  "name": "Hosea",
  "chapters": 14,
  "testament": "old"
}, {
  "name": "Joel",
  "chapters": 3,
  "testament": "old"
}, {
  "name": "Amos",
  "chapters": 9,
  "testament": "old"
}, {
  "name": "Obadiah",
  "chapters": 1,
  "testament": "old"
}, {
  "name": "Jonah",
  "chapters": 4,
  "testament": "old"
}, {
  "name": "Micah",
  "chapters": 7,
  "testament": "old"
}, {
  "name": "Nahum",
  "chapters": 3,
  "testament": "old"
}, {
  "name": "Habakkuk",
  "chapters": 3,
  "testament": "old"
}, {
  "name": "Zephaniah",
  "chapters": 3,
  "testament": "old"
}, {
  "name": "Haggai",
  "chapters": 2,
  "testament": "old"
}, {
  "name": "Zechariah",
  "chapters": 14,
  "testament": "old"
}, {
  "name": "Malachi",
  "chapters": 4,
  "testament": "old"
}, {
  "name": "Matthew",
  "chapters": 28,
  "testament": "new"
}, {
  "name": "Mark",
  "chapters": 16,
  "testament": "new"
}, {
  "name": "Luke",
  "chapters": 24,
  "testament": "new"
}, {
  "name": "John",
  "chapters": 21,
  "testament": "new"
}, {
  "name": "Acts",
  "chapters": 28,
  "testament": "new"
}, {
  "name": "Romans",
  "chapters": 16,
  "testament": "new"
}, {
  "name": "1 Corinthians",
  "chapters": 16,
  "testament": "new"
}, {
  "name": "2 Corinthians",
  "chapters": 13,
  "testament": "new"
}, {
  "name": "Galatians",
  "chapters": 6,
  "testament": "new"
}, {
  "name": "Ephesians",
  "chapters": 6,
  "testament": "new"
}, {
  "name": "Philippians",
  "chapters": 4,
  "testament": "new"
}, {
  "name": "Colossians",
  "chapters": 4,
  "testament": "new"
}, {
  "name": "1 Thessalonians",
  "chapters": 5,
  "testament": "new"
}, {
  "name": "1 Thessalonians",
  "chapters": 3,
  "testament": "new"
}, {
  "name": "1 Timothy",
  "chapters": 6,
  "testament": "new"
}, {
  "name": "2 Timothy",
  "chapters": 4,
  "testament": "new"
}, {
  "name": "Titus",
  "chapters": 3,
  "testament": "new"
}, {
  "name": "Philemon",
  "chapters": 1,
  "testament": "new"
}, {
  "name": "Hebrews",
  "chapters": 13,
  "testament": "new"
}, {
  "name": "James",
  "chapters": 5,
  "testament": "new"
}, {
  "name": "1 Peter",
  "chapters": 5,
  "testament": "new"
}, {
  "name": "2 Peter",
  "chapters": 3,
  "testament": "new"
}, {
  "name": "1 John",
  "chapters": 5,
  "testament": "new"
}, {
  "name": "2 John",
  "chapters": 1,
  "testament": "new"
}, {
  "name": "3 John",
  "chapters": 1,
  "testament": "new"
}, {
  "name": "Jude",
  "chapters": 1,
  "testament": "new"
}, {
  "name": "Revelation",
  "chapters": 22,
  "testament": "new"
}];
window.addEventListener('DOMContentLoaded', function () {
  var booksContainer = document.getElementById("books"); // 86400000 = 1 day

  if (!cookieExists('hasVisitedToday')) {
    var date = new Date();
    date.setTime(parseInt(date.getTime()) + 86400000);
    document.cookie = "hasVisitedToday=true; expires=".concat(date.toUTCString());

    if (!sessionStorage.getItem('books')) {
      var selectedBooks = [];

      for (var i = 1; i <= 6; i++) {
        var bookNumber = Math.floor(Math.random() * books.length);

        if (typeof books[bookNumber] !== 'undefined') {
          var bookData = books[bookNumber];
          var chapter = Math.floor(Math.random() * bookData.chapters) + 1;
          var chapterName = "".concat(bookData.name, " ").concat(chapter);
          selectedBooks.push(chapterName);

          if (i === 6) {
            sessionStorage.setItem('books', selectedBooks);
          }
        }
      }
    }
  }

  ;

  if (sessionStorage.getItem('books')) {
    var cachedBooks = sessionStorage.getItem('books').split(',');

    if (Array.isArray(cachedBooks) && cachedBooks.length > 0) {
      cachedBooks.map(function (book) {
        var bookElement = document.createElement('a');
        bookElement.setAttribute("href", encodeURI("https://www.biblegateway.com/passage/?search=".concat(book, "&version=NIV")));
        bookElement.setAttribute("target", "_blank");
        bookElement.classList.add("book");
        bookElement.innerHTML = "<h2>".concat(book, "</h2>");
        booksContainer.appendChild(bookElement);
      });
    }
  }

  function cookieExists(name) {
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + name + '=([^;]*)'));
    return match ? true : false;
  }

  function getCookieValue(name) {
    var nameString = name + "=";
    var value = document.cookie.split(";").filter(function (item) {
      return item.includes(nameString);
    });

    if (value.length) {
      return value[0].substring(nameString.length, value[0].length);
    } else {
      return "";
    }
  }
});
},{"./styles.css":"src/styles.css"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62766" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map