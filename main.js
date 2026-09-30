(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../../opt/files/node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "../../opt/files/node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l2 = /* @__PURE__ */ Symbol.for("react.element");
      var n = /* @__PURE__ */ Symbol.for("react.portal");
      var p = /* @__PURE__ */ Symbol.for("react.fragment");
      var q = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var r = /* @__PURE__ */ Symbol.for("react.profiler");
      var t = /* @__PURE__ */ Symbol.for("react.provider");
      var u = /* @__PURE__ */ Symbol.for("react.context");
      var v2 = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var w2 = /* @__PURE__ */ Symbol.for("react.suspense");
      var x = /* @__PURE__ */ Symbol.for("react.memo");
      var y2 = /* @__PURE__ */ Symbol.for("react.lazy");
      var z3 = Symbol.iterator;
      function A3(a) {
        if (null === a || "object" !== typeof a) return null;
        a = z3 && a[z3] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var B3 = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C2 = Object.assign;
      var D = {};
      function E3(a, b2, e2) {
        this.props = a;
        this.context = b2;
        this.refs = D;
        this.updater = e2 || B3;
      }
      E3.prototype.isReactComponent = {};
      E3.prototype.setState = function(a, b2) {
        if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, b2, "setState");
      };
      E3.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      function F2() {
      }
      F2.prototype = E3.prototype;
      function G2(a, b2, e2) {
        this.props = a;
        this.context = b2;
        this.refs = D;
        this.updater = e2 || B3;
      }
      var H = G2.prototype = new F2();
      H.constructor = G2;
      C2(H, E3.prototype);
      H.isPureReactComponent = true;
      var I2 = Array.isArray;
      var J2 = Object.prototype.hasOwnProperty;
      var K2 = { current: null };
      var L2 = { key: true, ref: true, __self: true, __source: true };
      function M3(a, b2, e2) {
        var d, c = {}, k2 = null, h = null;
        if (null != b2) for (d in void 0 !== b2.ref && (h = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2) J2.call(b2, d) && !L2.hasOwnProperty(d) && (c[d] = b2[d]);
        var g = arguments.length - 2;
        if (1 === g) c.children = e2;
        else if (1 < g) {
          for (var f2 = Array(g), m = 0; m < g; m++) f2[m] = arguments[m + 2];
          c.children = f2;
        }
        if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
        return { $$typeof: l2, type: a, key: k2, ref: h, props: c, _owner: K2.current };
      }
      function N2(a, b2) {
        return { $$typeof: l2, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
      }
      function O3(a) {
        return "object" === typeof a && null !== a && a.$$typeof === l2;
      }
      function escape(a) {
        var b2 = { "=": "=0", ":": "=2" };
        return "$" + a.replace(/[=:]/g, function(a2) {
          return b2[a2];
        });
      }
      var P = /\/+/g;
      function Q(a, b2) {
        return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b2.toString(36);
      }
      function R3(a, b2, e2, d, c) {
        var k2 = typeof a;
        if ("undefined" === k2 || "boolean" === k2) a = null;
        var h = false;
        if (null === a) h = true;
        else switch (k2) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l2:
              case n:
                h = true;
            }
        }
        if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I2(c) ? (e2 = "", null != a && (e2 = a.replace(P, "$&/") + "/"), R3(c, b2, e2, "", function(a2) {
          return a2;
        })) : null != c && (O3(c) && (c = N2(c, e2 + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b2.push(c)), 1;
        h = 0;
        d = "" === d ? "." : d + ":";
        if (I2(a)) for (var g = 0; g < a.length; g++) {
          k2 = a[g];
          var f2 = d + Q(k2, g);
          h += R3(k2, b2, e2, f2, c);
        }
        else if (f2 = A3(a), "function" === typeof f2) for (a = f2.call(a), g = 0; !(k2 = a.next()).done; ) k2 = k2.value, f2 = d + Q(k2, g++), h += R3(k2, b2, e2, f2, c);
        else if ("object" === k2) throw b2 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
        return h;
      }
      function S(a, b2, e2) {
        if (null == a) return a;
        var d = [], c = 0;
        R3(a, d, "", "", function(a2) {
          return b2.call(e2, a2, c++);
        });
        return d;
      }
      function T2(a) {
        if (-1 === a._status) {
          var b2 = a._result;
          b2 = b2();
          b2.then(function(b3) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b3;
          }, function(b3) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b3;
          });
          -1 === a._status && (a._status = 0, a._result = b2);
        }
        if (1 === a._status) return a._result.default;
        throw a._result;
      }
      var U3 = { current: null };
      var V2 = { transition: null };
      var W2 = { ReactCurrentDispatcher: U3, ReactCurrentBatchConfig: V2, ReactCurrentOwner: K2 };
      function X2() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      exports.Children = { map: S, forEach: function(a, b2, e2) {
        S(a, function() {
          b2.apply(this, arguments);
        }, e2);
      }, count: function(a) {
        var b2 = 0;
        S(a, function() {
          b2++;
        });
        return b2;
      }, toArray: function(a) {
        return S(a, function(a2) {
          return a2;
        }) || [];
      }, only: function(a) {
        if (!O3(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
      } };
      exports.Component = E3;
      exports.Fragment = p;
      exports.Profiler = r;
      exports.PureComponent = G2;
      exports.StrictMode = q;
      exports.Suspense = w2;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W2;
      exports.act = X2;
      exports.cloneElement = function(a, b2, e2) {
        if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var d = C2({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
        if (null != b2) {
          void 0 !== b2.ref && (k2 = b2.ref, h = K2.current);
          void 0 !== b2.key && (c = "" + b2.key);
          if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
          for (f2 in b2) J2.call(b2, f2) && !L2.hasOwnProperty(f2) && (d[f2] = void 0 === b2[f2] && void 0 !== g ? g[f2] : b2[f2]);
        }
        var f2 = arguments.length - 2;
        if (1 === f2) d.children = e2;
        else if (1 < f2) {
          g = Array(f2);
          for (var m = 0; m < f2; m++) g[m] = arguments[m + 2];
          d.children = g;
        }
        return { $$typeof: l2, type: a.type, key: c, ref: k2, props: d, _owner: h };
      };
      exports.createContext = function(a) {
        a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a.Provider = { $$typeof: t, _context: a };
        return a.Consumer = a;
      };
      exports.createElement = M3;
      exports.createFactory = function(a) {
        var b2 = M3.bind(null, a);
        b2.type = a;
        return b2;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a) {
        return { $$typeof: v2, render: a };
      };
      exports.isValidElement = O3;
      exports.lazy = function(a) {
        return { $$typeof: y2, _payload: { _status: -1, _result: a }, _init: T2 };
      };
      exports.memo = function(a, b2) {
        return { $$typeof: x, type: a, compare: void 0 === b2 ? null : b2 };
      };
      exports.startTransition = function(a) {
        var b2 = V2.transition;
        V2.transition = {};
        try {
          a();
        } finally {
          V2.transition = b2;
        }
      };
      exports.unstable_act = X2;
      exports.useCallback = function(a, b2) {
        return U3.current.useCallback(a, b2);
      };
      exports.useContext = function(a) {
        return U3.current.useContext(a);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a) {
        return U3.current.useDeferredValue(a);
      };
      exports.useEffect = function(a, b2) {
        return U3.current.useEffect(a, b2);
      };
      exports.useId = function() {
        return U3.current.useId();
      };
      exports.useImperativeHandle = function(a, b2, e2) {
        return U3.current.useImperativeHandle(a, b2, e2);
      };
      exports.useInsertionEffect = function(a, b2) {
        return U3.current.useInsertionEffect(a, b2);
      };
      exports.useLayoutEffect = function(a, b2) {
        return U3.current.useLayoutEffect(a, b2);
      };
      exports.useMemo = function(a, b2) {
        return U3.current.useMemo(a, b2);
      };
      exports.useReducer = function(a, b2, e2) {
        return U3.current.useReducer(a, b2, e2);
      };
      exports.useRef = function(a) {
        return U3.current.useRef(a);
      };
      exports.useState = function(a) {
        return U3.current.useState(a);
      };
      exports.useSyncExternalStore = function(a, b2, e2) {
        return U3.current.useSyncExternalStore(a, b2, e2);
      };
      exports.useTransition = function() {
        return U3.current.useTransition();
      };
      exports.version = "18.3.1";
    }
  });

  // ../../opt/files/node_modules/react/index.js
  var require_react = __commonJS({
    "../../opt/files/node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../opt/files/node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "../../opt/files/node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      function f2(a, b2) {
        var c = a.length;
        a.push(b2);
        a: for (; 0 < c; ) {
          var d = c - 1 >>> 1, e2 = a[d];
          if (0 < g(e2, b2)) a[d] = b2, a[c] = e2, c = d;
          else break a;
        }
      }
      function h(a) {
        return 0 === a.length ? null : a[0];
      }
      function k2(a) {
        if (0 === a.length) return null;
        var b2 = a[0], c = a.pop();
        if (c !== b2) {
          a[0] = c;
          a: for (var d = 0, e2 = a.length, w2 = e2 >>> 1; d < w2; ) {
            var m = 2 * (d + 1) - 1, C2 = a[m], n = m + 1, x = a[n];
            if (0 > g(C2, c)) n < e2 && 0 > g(x, C2) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C2, a[m] = c, d = m);
            else if (n < e2 && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
            else break a;
          }
        }
        return b2;
      }
      function g(a, b2) {
        var c = a.sortIndex - b2.sortIndex;
        return 0 !== c ? c : a.id - b2.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        l2 = performance;
        exports.unstable_now = function() {
          return l2.now();
        };
      } else {
        p = Date, q = p.now();
        exports.unstable_now = function() {
          return p.now() - q;
        };
      }
      var l2;
      var p;
      var q;
      var r = [];
      var t = [];
      var u = 1;
      var v2 = null;
      var y2 = 3;
      var z3 = false;
      var A3 = false;
      var B3 = false;
      var D = "function" === typeof setTimeout ? setTimeout : null;
      var E3 = "function" === typeof clearTimeout ? clearTimeout : null;
      var F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G2(a) {
        for (var b2 = h(t); null !== b2; ) {
          if (null === b2.callback) k2(t);
          else if (b2.startTime <= a) k2(t), b2.sortIndex = b2.expirationTime, f2(r, b2);
          else break;
          b2 = h(t);
        }
      }
      function H(a) {
        B3 = false;
        G2(a);
        if (!A3) if (null !== h(r)) A3 = true, I2(J2);
        else {
          var b2 = h(t);
          null !== b2 && K2(H, b2.startTime - a);
        }
      }
      function J2(a, b2) {
        A3 = false;
        B3 && (B3 = false, E3(L2), L2 = -1);
        z3 = true;
        var c = y2;
        try {
          G2(b2);
          for (v2 = h(r); null !== v2 && (!(v2.expirationTime > b2) || a && !M3()); ) {
            var d = v2.callback;
            if ("function" === typeof d) {
              v2.callback = null;
              y2 = v2.priorityLevel;
              var e2 = d(v2.expirationTime <= b2);
              b2 = exports.unstable_now();
              "function" === typeof e2 ? v2.callback = e2 : v2 === h(r) && k2(r);
              G2(b2);
            } else k2(r);
            v2 = h(r);
          }
          if (null !== v2) var w2 = true;
          else {
            var m = h(t);
            null !== m && K2(H, m.startTime - b2);
            w2 = false;
          }
          return w2;
        } finally {
          v2 = null, y2 = c, z3 = false;
        }
      }
      var N2 = false;
      var O3 = null;
      var L2 = -1;
      var P = 5;
      var Q = -1;
      function M3() {
        return exports.unstable_now() - Q < P ? false : true;
      }
      function R3() {
        if (null !== O3) {
          var a = exports.unstable_now();
          Q = a;
          var b2 = true;
          try {
            b2 = O3(true, a);
          } finally {
            b2 ? S() : (N2 = false, O3 = null);
          }
        } else N2 = false;
      }
      var S;
      if ("function" === typeof F2) S = function() {
        F2(R3);
      };
      else if ("undefined" !== typeof MessageChannel) {
        T2 = new MessageChannel(), U3 = T2.port2;
        T2.port1.onmessage = R3;
        S = function() {
          U3.postMessage(null);
        };
      } else S = function() {
        D(R3, 0);
      };
      var T2;
      var U3;
      function I2(a) {
        O3 = a;
        N2 || (N2 = true, S());
      }
      function K2(a, b2) {
        L2 = D(function() {
          a(exports.unstable_now());
        }, b2);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A3 || z3 || (A3 = true, I2(J2));
      };
      exports.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y2;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h(r);
      };
      exports.unstable_next = function(a) {
        switch (y2) {
          case 1:
          case 2:
          case 3:
            var b2 = 3;
            break;
          default:
            b2 = y2;
        }
        var c = y2;
        y2 = b2;
        try {
          return a();
        } finally {
          y2 = c;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a, b2) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = y2;
        y2 = a;
        try {
          return b2();
        } finally {
          y2 = c;
        }
      };
      exports.unstable_scheduleCallback = function(a, b2, c) {
        var d = exports.unstable_now();
        "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
        switch (a) {
          case 1:
            var e2 = -1;
            break;
          case 2:
            e2 = 250;
            break;
          case 5:
            e2 = 1073741823;
            break;
          case 4:
            e2 = 1e4;
            break;
          default:
            e2 = 5e3;
        }
        e2 = c + e2;
        a = { id: u++, callback: b2, priorityLevel: a, startTime: c, expirationTime: e2, sortIndex: -1 };
        c > d ? (a.sortIndex = c, f2(t, a), null === h(r) && a === h(t) && (B3 ? (E3(L2), L2 = -1) : B3 = true, K2(H, c - d))) : (a.sortIndex = e2, f2(r, a), A3 || z3 || (A3 = true, I2(J2)));
        return a;
      };
      exports.unstable_shouldYield = M3;
      exports.unstable_wrapCallback = function(a) {
        var b2 = y2;
        return function() {
          var c = y2;
          y2 = b2;
          try {
            return a.apply(this, arguments);
          } finally {
            y2 = c;
          }
        };
      };
    }
  });

  // ../../opt/files/node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "../../opt/files/node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../opt/files/node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "../../opt/files/node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa2 = require_react();
      var ca = require_scheduler();
      function p(a) {
        for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b2 += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da2 = /* @__PURE__ */ new Set();
      var ea2 = {};
      function fa2(a, b2) {
        ha2(a, b2);
        ha2(a + "Capture", b2);
      }
      function ha2(a, b2) {
        ea2[a] = b2;
        for (a = 0; a < b2.length; a++) da2.add(b2[a]);
      }
      var ia2 = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var ja2 = Object.prototype.hasOwnProperty;
      var ka2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la2 = {};
      var ma = {};
      function oa2(a) {
        if (ja2.call(ma, a)) return true;
        if (ja2.call(la2, a)) return false;
        if (ka2.test(a)) return ma[a] = true;
        la2[a] = true;
        return false;
      }
      function pa(a, b2, c, d) {
        if (null !== c && 0 === c.type) return false;
        switch (typeof b2) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d) return false;
            if (null !== c) return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return "data-" !== a && "aria-" !== a;
          default:
            return false;
        }
      }
      function qa(a, b2, c, d) {
        if (null === b2 || "undefined" === typeof b2 || pa(a, b2, c, d)) return true;
        if (d) return false;
        if (null !== c) switch (c.type) {
          case 3:
            return !b2;
          case 4:
            return false === b2;
          case 5:
            return isNaN(b2);
          case 6:
            return isNaN(b2) || 1 > b2;
        }
        return false;
      }
      function v2(a, b2, c, d, e2, f2, g) {
        this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
        this.attributeName = d;
        this.attributeNamespace = e2;
        this.mustUseProperty = c;
        this.propertyName = a;
        this.type = b2;
        this.sanitizeURL = f2;
        this.removeEmptyString = g;
      }
      var z3 = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
        z3[a] = new v2(a, 0, false, a, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
        var b2 = a[0];
        z3[b2] = new v2(b2, 1, false, a[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
        z3[a] = new v2(a, 2, false, a.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
        z3[a] = new v2(a, 2, false, a, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
        z3[a] = new v2(a, 3, false, a.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a) {
        z3[a] = new v2(a, 3, true, a, null, false, false);
      });
      ["capture", "download"].forEach(function(a) {
        z3[a] = new v2(a, 4, false, a, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a) {
        z3[a] = new v2(a, 6, false, a, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a) {
        z3[a] = new v2(a, 5, false, a.toLowerCase(), null, false, false);
      });
      var ra2 = /[\-:]([a-z])/g;
      function sa2(a) {
        return a[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
        var b2 = a.replace(
          ra2,
          sa2
        );
        z3[b2] = new v2(b2, 1, false, a, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
        var b2 = a.replace(ra2, sa2);
        z3[b2] = new v2(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
        var b2 = a.replace(ra2, sa2);
        z3[b2] = new v2(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a) {
        z3[a] = new v2(a, 1, false, a.toLowerCase(), null, false, false);
      });
      z3.xlinkHref = new v2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(a) {
        z3[a] = new v2(a, 1, false, a.toLowerCase(), null, true, true);
      });
      function ta2(a, b2, c, d) {
        var e2 = z3.hasOwnProperty(b2) ? z3[b2] : null;
        if (null !== e2 ? 0 !== e2.type : d || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1]) qa(b2, c, e2, d) && (c = null), d || null === e2 ? oa2(b2) && (null === c ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c)) : e2.mustUseProperty ? a[e2.propertyName] = null === c ? 3 === e2.type ? false : "" : c : (b2 = e2.attributeName, d = e2.attributeNamespace, null === c ? a.removeAttribute(b2) : (e2 = e2.type, c = 3 === e2 || 4 === e2 && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b2, c) : a.setAttribute(b2, c)));
      }
      var ua = aa2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var va = /* @__PURE__ */ Symbol.for("react.element");
      var wa2 = /* @__PURE__ */ Symbol.for("react.portal");
      var ya = /* @__PURE__ */ Symbol.for("react.fragment");
      var za2 = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var Aa2 = /* @__PURE__ */ Symbol.for("react.profiler");
      var Ba = /* @__PURE__ */ Symbol.for("react.provider");
      var Ca = /* @__PURE__ */ Symbol.for("react.context");
      var Da2 = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var Ea2 = /* @__PURE__ */ Symbol.for("react.suspense");
      var Fa2 = /* @__PURE__ */ Symbol.for("react.suspense_list");
      var Ga2 = /* @__PURE__ */ Symbol.for("react.memo");
      var Ha2 = /* @__PURE__ */ Symbol.for("react.lazy");
      var Ia2 = /* @__PURE__ */ Symbol.for("react.offscreen");
      var Ja2 = Symbol.iterator;
      function Ka2(a) {
        if (null === a || "object" !== typeof a) return null;
        a = Ja2 && a[Ja2] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var A3 = Object.assign;
      var La2;
      function Ma(a) {
        if (void 0 === La2) try {
          throw Error();
        } catch (c) {
          var b2 = c.stack.trim().match(/\n( *(at )?)/);
          La2 = b2 && b2[1] || "";
        }
        return "\n" + La2 + a;
      }
      var Na2 = false;
      function Oa(a, b2) {
        if (!a || Na2) return "";
        Na2 = true;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b2) if (b2 = function() {
            throw Error();
          }, Object.defineProperty(b2.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b2, []);
            } catch (l2) {
              var d = l2;
            }
            Reflect.construct(a, [], b2);
          } else {
            try {
              b2.call();
            } catch (l2) {
              d = l2;
            }
            a.call(b2.prototype);
          }
          else {
            try {
              throw Error();
            } catch (l2) {
              d = l2;
            }
            a();
          }
        } catch (l2) {
          if (l2 && d && "string" === typeof l2.stack) {
            for (var e2 = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e2.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e2[g] !== f2[h]; ) h--;
            for (; 1 <= g && 0 <= h; g--, h--) if (e2[g] !== f2[h]) {
              if (1 !== g || 1 !== h) {
                do
                  if (g--, h--, 0 > h || e2[g] !== f2[h]) {
                    var k2 = "\n" + e2[g].replace(" at new ", " at ");
                    a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                    return k2;
                  }
                while (1 <= g && 0 <= h);
              }
              break;
            }
          }
        } finally {
          Na2 = false, Error.prepareStackTrace = c;
        }
        return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
      }
      function Pa(a) {
        switch (a.tag) {
          case 5:
            return Ma(a.type);
          case 16:
            return Ma("Lazy");
          case 13:
            return Ma("Suspense");
          case 19:
            return Ma("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a = Oa(a.type, false), a;
          case 11:
            return a = Oa(a.type.render, false), a;
          case 1:
            return a = Oa(a.type, true), a;
          default:
            return "";
        }
      }
      function Qa2(a) {
        if (null == a) return null;
        if ("function" === typeof a) return a.displayName || a.name || null;
        if ("string" === typeof a) return a;
        switch (a) {
          case ya:
            return "Fragment";
          case wa2:
            return "Portal";
          case Aa2:
            return "Profiler";
          case za2:
            return "StrictMode";
          case Ea2:
            return "Suspense";
          case Fa2:
            return "SuspenseList";
        }
        if ("object" === typeof a) switch (a.$$typeof) {
          case Ca:
            return (a.displayName || "Context") + ".Consumer";
          case Ba:
            return (a._context.displayName || "Context") + ".Provider";
          case Da2:
            var b2 = a.render;
            a = a.displayName;
            a || (a = b2.displayName || b2.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
          case Ga2:
            return b2 = a.displayName || null, null !== b2 ? b2 : Qa2(a.type) || "Memo";
          case Ha2:
            b2 = a._payload;
            a = a._init;
            try {
              return Qa2(a(b2));
            } catch (c) {
            }
        }
        return null;
      }
      function Ra(a) {
        var b2 = a.type;
        switch (a.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b2.displayName || "Context") + ".Consumer";
          case 10:
            return (b2._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a = b2.render, a = a.displayName || a.name || "", b2.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b2;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Qa2(b2);
          case 8:
            return b2 === za2 ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" === typeof b2) return b2.displayName || b2.name || null;
            if ("string" === typeof b2) return b2;
        }
        return null;
      }
      function Sa2(a) {
        switch (typeof a) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a;
          case "object":
            return a;
          default:
            return "";
        }
      }
      function Ta(a) {
        var b2 = a.type;
        return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
      }
      function Ua2(a) {
        var b2 = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d = "" + a[b2];
        if (!a.hasOwnProperty(b2) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
          var e2 = c.get, f2 = c.set;
          Object.defineProperty(a, b2, { configurable: true, get: function() {
            return e2.call(this);
          }, set: function(a2) {
            d = "" + a2;
            f2.call(this, a2);
          } });
          Object.defineProperty(a, b2, { enumerable: c.enumerable });
          return { getValue: function() {
            return d;
          }, setValue: function(a2) {
            d = "" + a2;
          }, stopTracking: function() {
            a._valueTracker = null;
            delete a[b2];
          } };
        }
      }
      function Va2(a) {
        a._valueTracker || (a._valueTracker = Ua2(a));
      }
      function Wa2(a) {
        if (!a) return false;
        var b2 = a._valueTracker;
        if (!b2) return true;
        var c = b2.getValue();
        var d = "";
        a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
        a = d;
        return a !== c ? (b2.setValue(a), true) : false;
      }
      function Xa2(a) {
        a = a || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a) return null;
        try {
          return a.activeElement || a.body;
        } catch (b2) {
          return a.body;
        }
      }
      function Ya2(a, b2) {
        var c = b2.checked;
        return A3({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
      }
      function Za2(a, b2) {
        var c = null == b2.defaultValue ? "" : b2.defaultValue, d = null != b2.checked ? b2.checked : b2.defaultChecked;
        c = Sa2(null != b2.value ? b2.value : c);
        a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
      }
      function ab(a, b2) {
        b2 = b2.checked;
        null != b2 && ta2(a, "checked", b2, false);
      }
      function bb(a, b2) {
        ab(a, b2);
        var c = Sa2(b2.value), d = b2.type;
        if (null != c) if ("number" === d) {
          if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
        } else a.value !== "" + c && (a.value = "" + c);
        else if ("submit" === d || "reset" === d) {
          a.removeAttribute("value");
          return;
        }
        b2.hasOwnProperty("value") ? cb(a, b2.type, c) : b2.hasOwnProperty("defaultValue") && cb(a, b2.type, Sa2(b2.defaultValue));
        null == b2.checked && null != b2.defaultChecked && (a.defaultChecked = !!b2.defaultChecked);
      }
      function db(a, b2, c) {
        if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
          var d = b2.type;
          if (!("submit" !== d && "reset" !== d || void 0 !== b2.value && null !== b2.value)) return;
          b2 = "" + a._wrapperState.initialValue;
          c || b2 === a.value || (a.value = b2);
          a.defaultValue = b2;
        }
        c = a.name;
        "" !== c && (a.name = "");
        a.defaultChecked = !!a._wrapperState.initialChecked;
        "" !== c && (a.name = c);
      }
      function cb(a, b2, c) {
        if ("number" !== b2 || Xa2(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
      }
      var eb = Array.isArray;
      function fb(a, b2, c, d) {
        a = a.options;
        if (b2) {
          b2 = {};
          for (var e2 = 0; e2 < c.length; e2++) b2["$" + c[e2]] = true;
          for (c = 0; c < a.length; c++) e2 = b2.hasOwnProperty("$" + a[c].value), a[c].selected !== e2 && (a[c].selected = e2), e2 && d && (a[c].defaultSelected = true);
        } else {
          c = "" + Sa2(c);
          b2 = null;
          for (e2 = 0; e2 < a.length; e2++) {
            if (a[e2].value === c) {
              a[e2].selected = true;
              d && (a[e2].defaultSelected = true);
              return;
            }
            null !== b2 || a[e2].disabled || (b2 = a[e2]);
          }
          null !== b2 && (b2.selected = true);
        }
      }
      function gb(a, b2) {
        if (null != b2.dangerouslySetInnerHTML) throw Error(p(91));
        return A3({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
      }
      function hb(a, b2) {
        var c = b2.value;
        if (null == c) {
          c = b2.children;
          b2 = b2.defaultValue;
          if (null != c) {
            if (null != b2) throw Error(p(92));
            if (eb(c)) {
              if (1 < c.length) throw Error(p(93));
              c = c[0];
            }
            b2 = c;
          }
          null == b2 && (b2 = "");
          c = b2;
        }
        a._wrapperState = { initialValue: Sa2(c) };
      }
      function ib(a, b2) {
        var c = Sa2(b2.value), d = Sa2(b2.defaultValue);
        null != c && (c = "" + c, c !== a.value && (a.value = c), null == b2.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
        null != d && (a.defaultValue = "" + d);
      }
      function jb(a) {
        var b2 = a.textContent;
        b2 === a._wrapperState.initialValue && "" !== b2 && null !== b2 && (a.value = b2);
      }
      function kb(a) {
        switch (a) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function lb(a, b2) {
        return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b2) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a;
      }
      var mb;
      var nb = (function(a) {
        return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c, d, e2) {
          MSApp.execUnsafeLocalFunction(function() {
            return a(b2, c, d, e2);
          });
        } : a;
      })(function(a, b2) {
        if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b2;
        else {
          mb = mb || document.createElement("div");
          mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
          for (b2 = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
          for (; b2.firstChild; ) a.appendChild(b2.firstChild);
        }
      });
      function ob(a, b2) {
        if (b2) {
          var c = a.firstChild;
          if (c && c === a.lastChild && 3 === c.nodeType) {
            c.nodeValue = b2;
            return;
          }
        }
        a.textContent = b2;
      }
      var pb = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var qb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(pb).forEach(function(a) {
        qb.forEach(function(b2) {
          b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
          pb[b2] = pb[a];
        });
      });
      function rb(a, b2, c) {
        return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a) && pb[a] ? ("" + b2).trim() : b2 + "px";
      }
      function sb(a, b2) {
        a = a.style;
        for (var c in b2) if (b2.hasOwnProperty(c)) {
          var d = 0 === c.indexOf("--"), e2 = rb(c, b2[c], d);
          "float" === c && (c = "cssFloat");
          d ? a.setProperty(c, e2) : a[c] = e2;
        }
      }
      var tb = A3({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function ub(a, b2) {
        if (b2) {
          if (tb[a] && (null != b2.children || null != b2.dangerouslySetInnerHTML)) throw Error(p(137, a));
          if (null != b2.dangerouslySetInnerHTML) {
            if (null != b2.children) throw Error(p(60));
            if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML)) throw Error(p(61));
          }
          if (null != b2.style && "object" !== typeof b2.style) throw Error(p(62));
        }
      }
      function vb(a, b2) {
        if (-1 === a.indexOf("-")) return "string" === typeof b2.is;
        switch (a) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var wb = null;
      function xb(a) {
        a = a.target || a.srcElement || window;
        a.correspondingUseElement && (a = a.correspondingUseElement);
        return 3 === a.nodeType ? a.parentNode : a;
      }
      var yb = null;
      var zb = null;
      var Ab = null;
      function Bb(a) {
        if (a = Cb(a)) {
          if ("function" !== typeof yb) throw Error(p(280));
          var b2 = a.stateNode;
          b2 && (b2 = Db(b2), yb(a.stateNode, a.type, b2));
        }
      }
      function Eb(a) {
        zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
      }
      function Fb() {
        if (zb) {
          var a = zb, b2 = Ab;
          Ab = zb = null;
          Bb(a);
          if (b2) for (a = 0; a < b2.length; a++) Bb(b2[a]);
        }
      }
      function Gb(a, b2) {
        return a(b2);
      }
      function Hb() {
      }
      var Ib = false;
      function Jb(a, b2, c) {
        if (Ib) return a(b2, c);
        Ib = true;
        try {
          return Gb(a, b2, c);
        } finally {
          if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
        }
      }
      function Kb(a, b2) {
        var c = a.stateNode;
        if (null === c) return null;
        var d = Db(c);
        if (null === d) return null;
        c = d[b2];
        a: switch (b2) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d;
            break a;
          default:
            a = false;
        }
        if (a) return null;
        if (c && "function" !== typeof c) throw Error(p(231, b2, typeof c));
        return c;
      }
      var Lb = false;
      if (ia2) try {
        Mb = {};
        Object.defineProperty(Mb, "passive", { get: function() {
          Lb = true;
        } });
        window.addEventListener("test", Mb, Mb);
        window.removeEventListener("test", Mb, Mb);
      } catch (a) {
        Lb = false;
      }
      var Mb;
      function Nb(a, b2, c, d, e2, f2, g, h, k2) {
        var l2 = Array.prototype.slice.call(arguments, 3);
        try {
          b2.apply(c, l2);
        } catch (m) {
          this.onError(m);
        }
      }
      var Ob = false;
      var Pb = null;
      var Qb = false;
      var Rb = null;
      var Sb = { onError: function(a) {
        Ob = true;
        Pb = a;
      } };
      function Tb(a, b2, c, d, e2, f2, g, h, k2) {
        Ob = false;
        Pb = null;
        Nb.apply(Sb, arguments);
      }
      function Ub(a, b2, c, d, e2, f2, g, h, k2) {
        Tb.apply(this, arguments);
        if (Ob) {
          if (Ob) {
            var l2 = Pb;
            Ob = false;
            Pb = null;
          } else throw Error(p(198));
          Qb || (Qb = true, Rb = l2);
        }
      }
      function Vb(a) {
        var b2 = a, c = a;
        if (a.alternate) for (; b2.return; ) b2 = b2.return;
        else {
          a = b2;
          do
            b2 = a, 0 !== (b2.flags & 4098) && (c = b2.return), a = b2.return;
          while (a);
        }
        return 3 === b2.tag ? c : null;
      }
      function Wb(a) {
        if (13 === a.tag) {
          var b2 = a.memoizedState;
          null === b2 && (a = a.alternate, null !== a && (b2 = a.memoizedState));
          if (null !== b2) return b2.dehydrated;
        }
        return null;
      }
      function Xb(a) {
        if (Vb(a) !== a) throw Error(p(188));
      }
      function Yb(a) {
        var b2 = a.alternate;
        if (!b2) {
          b2 = Vb(a);
          if (null === b2) throw Error(p(188));
          return b2 !== a ? null : a;
        }
        for (var c = a, d = b2; ; ) {
          var e2 = c.return;
          if (null === e2) break;
          var f2 = e2.alternate;
          if (null === f2) {
            d = e2.return;
            if (null !== d) {
              c = d;
              continue;
            }
            break;
          }
          if (e2.child === f2.child) {
            for (f2 = e2.child; f2; ) {
              if (f2 === c) return Xb(e2), a;
              if (f2 === d) return Xb(e2), b2;
              f2 = f2.sibling;
            }
            throw Error(p(188));
          }
          if (c.return !== d.return) c = e2, d = f2;
          else {
            for (var g = false, h = e2.child; h; ) {
              if (h === c) {
                g = true;
                c = e2;
                d = f2;
                break;
              }
              if (h === d) {
                g = true;
                d = e2;
                c = f2;
                break;
              }
              h = h.sibling;
            }
            if (!g) {
              for (h = f2.child; h; ) {
                if (h === c) {
                  g = true;
                  c = f2;
                  d = e2;
                  break;
                }
                if (h === d) {
                  g = true;
                  d = f2;
                  c = e2;
                  break;
                }
                h = h.sibling;
              }
              if (!g) throw Error(p(189));
            }
          }
          if (c.alternate !== d) throw Error(p(190));
        }
        if (3 !== c.tag) throw Error(p(188));
        return c.stateNode.current === c ? a : b2;
      }
      function Zb(a) {
        a = Yb(a);
        return null !== a ? $b(a) : null;
      }
      function $b(a) {
        if (5 === a.tag || 6 === a.tag) return a;
        for (a = a.child; null !== a; ) {
          var b2 = $b(a);
          if (null !== b2) return b2;
          a = a.sibling;
        }
        return null;
      }
      var ac = ca.unstable_scheduleCallback;
      var bc = ca.unstable_cancelCallback;
      var cc = ca.unstable_shouldYield;
      var dc = ca.unstable_requestPaint;
      var B3 = ca.unstable_now;
      var ec = ca.unstable_getCurrentPriorityLevel;
      var fc = ca.unstable_ImmediatePriority;
      var gc = ca.unstable_UserBlockingPriority;
      var hc = ca.unstable_NormalPriority;
      var ic = ca.unstable_LowPriority;
      var jc = ca.unstable_IdlePriority;
      var kc = null;
      var lc = null;
      function mc(a) {
        if (lc && "function" === typeof lc.onCommitFiberRoot) try {
          lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
        } catch (b2) {
        }
      }
      var oc = Math.clz32 ? Math.clz32 : nc;
      var pc = Math.log;
      var qc = Math.LN2;
      function nc(a) {
        a >>>= 0;
        return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
      }
      var rc = 64;
      var sc = 4194304;
      function tc(a) {
        switch (a & -a) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a;
        }
      }
      function uc(a, b2) {
        var c = a.pendingLanes;
        if (0 === c) return 0;
        var d = 0, e2 = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
        if (0 !== g) {
          var h = g & ~e2;
          0 !== h ? d = tc(h) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
        } else g = c & ~e2, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
        if (0 === d) return 0;
        if (0 !== b2 && b2 !== d && 0 === (b2 & e2) && (e2 = d & -d, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240))) return b2;
        0 !== (d & 4) && (d |= c & 16);
        b2 = a.entangledLanes;
        if (0 !== b2) for (a = a.entanglements, b2 &= d; 0 < b2; ) c = 31 - oc(b2), e2 = 1 << c, d |= a[c], b2 &= ~e2;
        return d;
      }
      function vc(a, b2) {
        switch (a) {
          case 1:
          case 2:
          case 4:
            return b2 + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return b2 + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function wc(a, b2) {
        for (var c = a.suspendedLanes, d = a.pingedLanes, e2 = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
          var g = 31 - oc(f2), h = 1 << g, k2 = e2[g];
          if (-1 === k2) {
            if (0 === (h & c) || 0 !== (h & d)) e2[g] = vc(h, b2);
          } else k2 <= b2 && (a.expiredLanes |= h);
          f2 &= ~h;
        }
      }
      function xc(a) {
        a = a.pendingLanes & -1073741825;
        return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
      }
      function yc() {
        var a = rc;
        rc <<= 1;
        0 === (rc & 4194240) && (rc = 64);
        return a;
      }
      function zc(a) {
        for (var b2 = [], c = 0; 31 > c; c++) b2.push(a);
        return b2;
      }
      function Ac(a, b2, c) {
        a.pendingLanes |= b2;
        536870912 !== b2 && (a.suspendedLanes = 0, a.pingedLanes = 0);
        a = a.eventTimes;
        b2 = 31 - oc(b2);
        a[b2] = c;
      }
      function Bc(a, b2) {
        var c = a.pendingLanes & ~b2;
        a.pendingLanes = b2;
        a.suspendedLanes = 0;
        a.pingedLanes = 0;
        a.expiredLanes &= b2;
        a.mutableReadLanes &= b2;
        a.entangledLanes &= b2;
        b2 = a.entanglements;
        var d = a.eventTimes;
        for (a = a.expirationTimes; 0 < c; ) {
          var e2 = 31 - oc(c), f2 = 1 << e2;
          b2[e2] = 0;
          d[e2] = -1;
          a[e2] = -1;
          c &= ~f2;
        }
      }
      function Cc(a, b2) {
        var c = a.entangledLanes |= b2;
        for (a = a.entanglements; c; ) {
          var d = 31 - oc(c), e2 = 1 << d;
          e2 & b2 | a[d] & b2 && (a[d] |= b2);
          c &= ~e2;
        }
      }
      var C2 = 0;
      function Dc(a) {
        a &= -a;
        return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
      }
      var Ec;
      var Fc;
      var Gc;
      var Hc;
      var Ic;
      var Jc = false;
      var Kc = [];
      var Lc = null;
      var Mc = null;
      var Nc = null;
      var Oc = /* @__PURE__ */ new Map();
      var Pc = /* @__PURE__ */ new Map();
      var Qc = [];
      var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Sc(a, b2) {
        switch (a) {
          case "focusin":
          case "focusout":
            Lc = null;
            break;
          case "dragenter":
          case "dragleave":
            Mc = null;
            break;
          case "mouseover":
          case "mouseout":
            Nc = null;
            break;
          case "pointerover":
          case "pointerout":
            Oc.delete(b2.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Pc.delete(b2.pointerId);
        }
      }
      function Tc(a, b2, c, d, e2, f2) {
        if (null === a || a.nativeEvent !== f2) return a = { blockedOn: b2, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a;
        a.eventSystemFlags |= d;
        b2 = a.targetContainers;
        null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
        return a;
      }
      function Uc(a, b2, c, d, e2) {
        switch (b2) {
          case "focusin":
            return Lc = Tc(Lc, a, b2, c, d, e2), true;
          case "dragenter":
            return Mc = Tc(Mc, a, b2, c, d, e2), true;
          case "mouseover":
            return Nc = Tc(Nc, a, b2, c, d, e2), true;
          case "pointerover":
            var f2 = e2.pointerId;
            Oc.set(f2, Tc(Oc.get(f2) || null, a, b2, c, d, e2));
            return true;
          case "gotpointercapture":
            return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b2, c, d, e2)), true;
        }
        return false;
      }
      function Vc(a) {
        var b2 = Wc(a.target);
        if (null !== b2) {
          var c = Vb(b2);
          if (null !== c) {
            if (b2 = c.tag, 13 === b2) {
              if (b2 = Wb(c), null !== b2) {
                a.blockedOn = b2;
                Ic(a.priority, function() {
                  Gc(c);
                });
                return;
              }
            } else if (3 === b2 && c.stateNode.current.memoizedState.isDehydrated) {
              a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a.blockedOn = null;
      }
      function Xc(a) {
        if (null !== a.blockedOn) return false;
        for (var b2 = a.targetContainers; 0 < b2.length; ) {
          var c = Yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
          if (null === c) {
            c = a.nativeEvent;
            var d = new c.constructor(c.type, c);
            wb = d;
            c.target.dispatchEvent(d);
            wb = null;
          } else return b2 = Cb(c), null !== b2 && Fc(b2), a.blockedOn = c, false;
          b2.shift();
        }
        return true;
      }
      function Zc(a, b2, c) {
        Xc(a) && c.delete(b2);
      }
      function $c() {
        Jc = false;
        null !== Lc && Xc(Lc) && (Lc = null);
        null !== Mc && Xc(Mc) && (Mc = null);
        null !== Nc && Xc(Nc) && (Nc = null);
        Oc.forEach(Zc);
        Pc.forEach(Zc);
      }
      function ad2(a, b2) {
        a.blockedOn === b2 && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
      }
      function bd(a) {
        function b2(b3) {
          return ad2(b3, a);
        }
        if (0 < Kc.length) {
          ad2(Kc[0], a);
          for (var c = 1; c < Kc.length; c++) {
            var d = Kc[c];
            d.blockedOn === a && (d.blockedOn = null);
          }
        }
        null !== Lc && ad2(Lc, a);
        null !== Mc && ad2(Mc, a);
        null !== Nc && ad2(Nc, a);
        Oc.forEach(b2);
        Pc.forEach(b2);
        for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
        for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
      }
      var cd = ua.ReactCurrentBatchConfig;
      var dd = true;
      function ed2(a, b2, c, d) {
        var e2 = C2, f2 = cd.transition;
        cd.transition = null;
        try {
          C2 = 1, fd2(a, b2, c, d);
        } finally {
          C2 = e2, cd.transition = f2;
        }
      }
      function gd2(a, b2, c, d) {
        var e2 = C2, f2 = cd.transition;
        cd.transition = null;
        try {
          C2 = 4, fd2(a, b2, c, d);
        } finally {
          C2 = e2, cd.transition = f2;
        }
      }
      function fd2(a, b2, c, d) {
        if (dd) {
          var e2 = Yc(a, b2, c, d);
          if (null === e2) hd2(a, b2, d, id2, c), Sc(a, d);
          else if (Uc(e2, a, b2, c, d)) d.stopPropagation();
          else if (Sc(a, d), b2 & 4 && -1 < Rc.indexOf(a)) {
            for (; null !== e2; ) {
              var f2 = Cb(e2);
              null !== f2 && Ec(f2);
              f2 = Yc(a, b2, c, d);
              null === f2 && hd2(a, b2, d, id2, c);
              if (f2 === e2) break;
              e2 = f2;
            }
            null !== e2 && d.stopPropagation();
          } else hd2(a, b2, d, null, c);
        }
      }
      var id2 = null;
      function Yc(a, b2, c, d) {
        id2 = null;
        a = xb(d);
        a = Wc(a);
        if (null !== a) if (b2 = Vb(a), null === b2) a = null;
        else if (c = b2.tag, 13 === c) {
          a = Wb(b2);
          if (null !== a) return a;
          a = null;
        } else if (3 === c) {
          if (b2.stateNode.current.memoizedState.isDehydrated) return 3 === b2.tag ? b2.stateNode.containerInfo : null;
          a = null;
        } else b2 !== a && (a = null);
        id2 = a;
        return null;
      }
      function jd(a) {
        switch (a) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (ec()) {
              case fc:
                return 1;
              case gc:
                return 4;
              case hc:
              case ic:
                return 16;
              case jc:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var kd2 = null;
      var ld = null;
      var md2 = null;
      function nd2() {
        if (md2) return md2;
        var a, b2 = ld, c = b2.length, d, e2 = "value" in kd2 ? kd2.value : kd2.textContent, f2 = e2.length;
        for (a = 0; a < c && b2[a] === e2[a]; a++) ;
        var g = c - a;
        for (d = 1; d <= g && b2[c - d] === e2[f2 - d]; d++) ;
        return md2 = e2.slice(a, 1 < d ? 1 - d : void 0);
      }
      function od(a) {
        var b2 = a.keyCode;
        "charCode" in a ? (a = a.charCode, 0 === a && 13 === b2 && (a = 13)) : a = b2;
        10 === a && (a = 13);
        return 32 <= a || 13 === a ? a : 0;
      }
      function pd2() {
        return true;
      }
      function qd() {
        return false;
      }
      function rd(a) {
        function b2(b3, d, e2, f2, g) {
          this._reactName = b3;
          this._targetInst = e2;
          this.type = d;
          this.nativeEvent = f2;
          this.target = g;
          this.currentTarget = null;
          for (var c in a) a.hasOwnProperty(c) && (b3 = a[c], this[c] = b3 ? b3(f2) : f2[c]);
          this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd2 : qd;
          this.isPropagationStopped = qd;
          return this;
        }
        A3(b2.prototype, { preventDefault: function() {
          this.defaultPrevented = true;
          var a2 = this.nativeEvent;
          a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd2);
        }, stopPropagation: function() {
          var a2 = this.nativeEvent;
          a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd2);
        }, persist: function() {
        }, isPersistent: pd2 });
        return b2;
      }
      var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
        return a.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      var td = rd(sd);
      var ud = A3({}, sd, { view: 0, detail: 0 });
      var vd = rd(ud);
      var wd;
      var xd2;
      var yd;
      var Ad = A3({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
      }, movementX: function(a) {
        if ("movementX" in a) return a.movementX;
        a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd2 = a.screenY - yd.screenY) : xd2 = wd = 0, yd = a);
        return wd;
      }, movementY: function(a) {
        return "movementY" in a ? a.movementY : xd2;
      } });
      var Bd = rd(Ad);
      var Cd = A3({}, Ad, { dataTransfer: 0 });
      var Dd = rd(Cd);
      var Ed = A3({}, ud, { relatedTarget: 0 });
      var Fd = rd(Ed);
      var Gd = A3({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Hd2 = rd(Gd);
      var Id = A3({}, sd, { clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
      } });
      var Jd = rd(Id);
      var Kd = A3({}, sd, { data: 0 });
      var Ld2 = rd(Kd);
      var Md = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var Nd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Pd(a) {
        var b2 = this.nativeEvent;
        return b2.getModifierState ? b2.getModifierState(a) : (a = Od[a]) ? !!b2[a] : false;
      }
      function zd() {
        return Pd;
      }
      var Qd = A3({}, ud, { key: function(a) {
        if (a.key) {
          var b2 = Md[a.key] || a.key;
          if ("Unidentified" !== b2) return b2;
        }
        return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
        return "keypress" === a.type ? od(a) : 0;
      }, keyCode: function(a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      }, which: function(a) {
        return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      } });
      var Rd2 = rd(Qd);
      var Sd2 = A3({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Td2 = rd(Sd2);
      var Ud2 = A3({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
      var Vd = rd(Ud2);
      var Wd = A3({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Xd = rd(Wd);
      var Yd = A3({}, Ad, {
        deltaX: function(a) {
          return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
        },
        deltaY: function(a) {
          return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Zd = rd(Yd);
      var $d = [9, 13, 27, 32];
      var ae3 = ia2 && "CompositionEvent" in window;
      var be3 = null;
      ia2 && "documentMode" in document && (be3 = document.documentMode);
      var ce3 = ia2 && "TextEvent" in window && !be3;
      var de2 = ia2 && (!ae3 || be3 && 8 < be3 && 11 >= be3);
      var ee2 = String.fromCharCode(32);
      var fe3 = false;
      function ge3(a, b2) {
        switch (a) {
          case "keyup":
            return -1 !== $d.indexOf(b2.keyCode);
          case "keydown":
            return 229 !== b2.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function he2(a) {
        a = a.detail;
        return "object" === typeof a && "data" in a ? a.data : null;
      }
      var ie2 = false;
      function je2(a, b2) {
        switch (a) {
          case "compositionend":
            return he2(b2);
          case "keypress":
            if (32 !== b2.which) return null;
            fe3 = true;
            return ee2;
          case "textInput":
            return a = b2.data, a === ee2 && fe3 ? null : a;
          default:
            return null;
        }
      }
      function ke3(a, b2) {
        if (ie2) return "compositionend" === a || !ae3 && ge3(a, b2) ? (a = nd2(), md2 = ld = kd2 = null, ie2 = false, a) : null;
        switch (a) {
          case "paste":
            return null;
          case "keypress":
            if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
              if (b2.char && 1 < b2.char.length) return b2.char;
              if (b2.which) return String.fromCharCode(b2.which);
            }
            return null;
          case "compositionend":
            return de2 && "ko" !== b2.locale ? null : b2.data;
          default:
            return null;
        }
      }
      var le3 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function me3(a) {
        var b2 = a && a.nodeName && a.nodeName.toLowerCase();
        return "input" === b2 ? !!le3[a.type] : "textarea" === b2 ? true : false;
      }
      function ne3(a, b2, c, d) {
        Eb(d);
        b2 = oe3(b2, "onChange");
        0 < b2.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b2 }));
      }
      var pe3 = null;
      var qe3 = null;
      function re3(a) {
        se3(a, 0);
      }
      function te3(a) {
        var b2 = ue2(a);
        if (Wa2(b2)) return a;
      }
      function ve2(a, b2) {
        if ("change" === a) return b2;
      }
      var we3 = false;
      if (ia2) {
        if (ia2) {
          ye2 = "oninput" in document;
          if (!ye2) {
            ze2 = document.createElement("div");
            ze2.setAttribute("oninput", "return;");
            ye2 = "function" === typeof ze2.oninput;
          }
          xe3 = ye2;
        } else xe3 = false;
        we3 = xe3 && (!document.documentMode || 9 < document.documentMode);
      }
      var xe3;
      var ye2;
      var ze2;
      function Ae3() {
        pe3 && (pe3.detachEvent("onpropertychange", Be3), qe3 = pe3 = null);
      }
      function Be3(a) {
        if ("value" === a.propertyName && te3(qe3)) {
          var b2 = [];
          ne3(b2, qe3, a, xb(a));
          Jb(re3, b2);
        }
      }
      function Ce3(a, b2, c) {
        "focusin" === a ? (Ae3(), pe3 = b2, qe3 = c, pe3.attachEvent("onpropertychange", Be3)) : "focusout" === a && Ae3();
      }
      function De2(a) {
        if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te3(qe3);
      }
      function Ee2(a, b2) {
        if ("click" === a) return te3(b2);
      }
      function Fe3(a, b2) {
        if ("input" === a || "change" === a) return te3(b2);
      }
      function Ge3(a, b2) {
        return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
      }
      var He3 = "function" === typeof Object.is ? Object.is : Ge3;
      function Ie3(a, b2) {
        if (He3(a, b2)) return true;
        if ("object" !== typeof a || null === a || "object" !== typeof b2 || null === b2) return false;
        var c = Object.keys(a), d = Object.keys(b2);
        if (c.length !== d.length) return false;
        for (d = 0; d < c.length; d++) {
          var e2 = c[d];
          if (!ja2.call(b2, e2) || !He3(a[e2], b2[e2])) return false;
        }
        return true;
      }
      function Je2(a) {
        for (; a && a.firstChild; ) a = a.firstChild;
        return a;
      }
      function Ke2(a, b2) {
        var c = Je2(a);
        a = 0;
        for (var d; c; ) {
          if (3 === c.nodeType) {
            d = a + c.textContent.length;
            if (a <= b2 && d >= b2) return { node: c, offset: b2 - a };
            a = d;
          }
          a: {
            for (; c; ) {
              if (c.nextSibling) {
                c = c.nextSibling;
                break a;
              }
              c = c.parentNode;
            }
            c = void 0;
          }
          c = Je2(c);
        }
      }
      function Le3(a, b2) {
        return a && b2 ? a === b2 ? true : a && 3 === a.nodeType ? false : b2 && 3 === b2.nodeType ? Le3(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
      }
      function Me2() {
        for (var a = window, b2 = Xa2(); b2 instanceof a.HTMLIFrameElement; ) {
          try {
            var c = "string" === typeof b2.contentWindow.location.href;
          } catch (d) {
            c = false;
          }
          if (c) a = b2.contentWindow;
          else break;
          b2 = Xa2(a.document);
        }
        return b2;
      }
      function Ne3(a) {
        var b2 = a && a.nodeName && a.nodeName.toLowerCase();
        return b2 && ("input" === b2 && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b2 || "true" === a.contentEditable);
      }
      function Oe3(a) {
        var b2 = Me2(), c = a.focusedElem, d = a.selectionRange;
        if (b2 !== c && c && c.ownerDocument && Le3(c.ownerDocument.documentElement, c)) {
          if (null !== d && Ne3(c)) {
            if (b2 = d.start, a = d.end, void 0 === a && (a = b2), "selectionStart" in c) c.selectionStart = b2, c.selectionEnd = Math.min(a, c.value.length);
            else if (a = (b2 = c.ownerDocument || document) && b2.defaultView || window, a.getSelection) {
              a = a.getSelection();
              var e2 = c.textContent.length, f2 = Math.min(d.start, e2);
              d = void 0 === d.end ? f2 : Math.min(d.end, e2);
              !a.extend && f2 > d && (e2 = d, d = f2, f2 = e2);
              e2 = Ke2(c, f2);
              var g = Ke2(
                c,
                d
              );
              e2 && g && (1 !== a.rangeCount || a.anchorNode !== e2.node || a.anchorOffset !== e2.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b2), a.extend(g.node, g.offset)) : (b2.setEnd(g.node, g.offset), a.addRange(b2)));
            }
          }
          b2 = [];
          for (a = c; a = a.parentNode; ) 1 === a.nodeType && b2.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
          "function" === typeof c.focus && c.focus();
          for (c = 0; c < b2.length; c++) a = b2[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
        }
      }
      var Pe3 = ia2 && "documentMode" in document && 11 >= document.documentMode;
      var Qe3 = null;
      var Re2 = null;
      var Se3 = null;
      var Te3 = false;
      function Ue3(a, b2, c) {
        var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
        Te3 || null == Qe3 || Qe3 !== Xa2(d) || (d = Qe3, "selectionStart" in d && Ne3(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se3 && Ie3(Se3, d) || (Se3 = d, d = oe3(Re2, "onSelect"), 0 < d.length && (b2 = new td("onSelect", "select", null, b2, c), a.push({ event: b2, listeners: d }), b2.target = Qe3)));
      }
      function Ve2(a, b2) {
        var c = {};
        c[a.toLowerCase()] = b2.toLowerCase();
        c["Webkit" + a] = "webkit" + b2;
        c["Moz" + a] = "moz" + b2;
        return c;
      }
      var We3 = { animationend: Ve2("Animation", "AnimationEnd"), animationiteration: Ve2("Animation", "AnimationIteration"), animationstart: Ve2("Animation", "AnimationStart"), transitionend: Ve2("Transition", "TransitionEnd") };
      var Xe2 = {};
      var Ye3 = {};
      ia2 && (Ye3 = document.createElement("div").style, "AnimationEvent" in window || (delete We3.animationend.animation, delete We3.animationiteration.animation, delete We3.animationstart.animation), "TransitionEvent" in window || delete We3.transitionend.transition);
      function Ze2(a) {
        if (Xe2[a]) return Xe2[a];
        if (!We3[a]) return a;
        var b2 = We3[a], c;
        for (c in b2) if (b2.hasOwnProperty(c) && c in Ye3) return Xe2[a] = b2[c];
        return a;
      }
      var $e2 = Ze2("animationend");
      var af = Ze2("animationiteration");
      var bf = Ze2("animationstart");
      var cf = Ze2("transitionend");
      var df = /* @__PURE__ */ new Map();
      var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ff(a, b2) {
        df.set(a, b2);
        fa2(b2, [a]);
      }
      for (gf = 0; gf < ef.length; gf++) {
        hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
        ff(jf, "on" + kf);
      }
      var hf;
      var jf;
      var kf;
      var gf;
      ff($e2, "onAnimationEnd");
      ff(af, "onAnimationIteration");
      ff(bf, "onAnimationStart");
      ff("dblclick", "onDoubleClick");
      ff("focusin", "onFocus");
      ff("focusout", "onBlur");
      ff(cf, "onTransitionEnd");
      ha2("onMouseEnter", ["mouseout", "mouseover"]);
      ha2("onMouseLeave", ["mouseout", "mouseover"]);
      ha2("onPointerEnter", ["pointerout", "pointerover"]);
      ha2("onPointerLeave", ["pointerout", "pointerover"]);
      fa2("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa2("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa2("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa2("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa2("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa2("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
      function nf(a, b2, c) {
        var d = a.type || "unknown-event";
        a.currentTarget = c;
        Ub(d, b2, void 0, a);
        a.currentTarget = null;
      }
      function se3(a, b2) {
        b2 = 0 !== (b2 & 4);
        for (var c = 0; c < a.length; c++) {
          var d = a[c], e2 = d.event;
          d = d.listeners;
          a: {
            var f2 = void 0;
            if (b2) for (var g = d.length - 1; 0 <= g; g--) {
              var h = d[g], k2 = h.instance, l2 = h.currentTarget;
              h = h.listener;
              if (k2 !== f2 && e2.isPropagationStopped()) break a;
              nf(e2, h, l2);
              f2 = k2;
            }
            else for (g = 0; g < d.length; g++) {
              h = d[g];
              k2 = h.instance;
              l2 = h.currentTarget;
              h = h.listener;
              if (k2 !== f2 && e2.isPropagationStopped()) break a;
              nf(e2, h, l2);
              f2 = k2;
            }
          }
        }
        if (Qb) throw a = Rb, Qb = false, Rb = null, a;
      }
      function D(a, b2) {
        var c = b2[of];
        void 0 === c && (c = b2[of] = /* @__PURE__ */ new Set());
        var d = a + "__bubble";
        c.has(d) || (pf(b2, a, 2, false), c.add(d));
      }
      function qf(a, b2, c) {
        var d = 0;
        b2 && (d |= 4);
        pf(c, a, d, b2);
      }
      var rf = "_reactListening" + Math.random().toString(36).slice(2);
      function sf(a) {
        if (!a[rf]) {
          a[rf] = true;
          da2.forEach(function(b3) {
            "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a), qf(b3, true, a));
          });
          var b2 = 9 === a.nodeType ? a : a.ownerDocument;
          null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
        }
      }
      function pf(a, b2, c, d) {
        switch (jd(b2)) {
          case 1:
            var e2 = ed2;
            break;
          case 4:
            e2 = gd2;
            break;
          default:
            e2 = fd2;
        }
        c = e2.bind(null, b2, c, a);
        e2 = void 0;
        !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
        d ? void 0 !== e2 ? a.addEventListener(b2, c, { capture: true, passive: e2 }) : a.addEventListener(b2, c, true) : void 0 !== e2 ? a.addEventListener(b2, c, { passive: e2 }) : a.addEventListener(b2, c, false);
      }
      function hd2(a, b2, c, d, e2) {
        var f2 = d;
        if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d) a: for (; ; ) {
          if (null === d) return;
          var g = d.tag;
          if (3 === g || 4 === g) {
            var h = d.stateNode.containerInfo;
            if (h === e2 || 8 === h.nodeType && h.parentNode === e2) break;
            if (4 === g) for (g = d.return; null !== g; ) {
              var k2 = g.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2) return;
              }
              g = g.return;
            }
            for (; null !== h; ) {
              g = Wc(h);
              if (null === g) return;
              k2 = g.tag;
              if (5 === k2 || 6 === k2) {
                d = f2 = g;
                continue a;
              }
              h = h.parentNode;
            }
          }
          d = d.return;
        }
        Jb(function() {
          var d2 = f2, e3 = xb(c), g2 = [];
          a: {
            var h2 = df.get(a);
            if (void 0 !== h2) {
              var k3 = td, n = a;
              switch (a) {
                case "keypress":
                  if (0 === od(c)) break a;
                case "keydown":
                case "keyup":
                  k3 = Rd2;
                  break;
                case "focusin":
                  n = "focus";
                  k3 = Fd;
                  break;
                case "focusout":
                  n = "blur";
                  k3 = Fd;
                  break;
                case "beforeblur":
                case "afterblur":
                  k3 = Fd;
                  break;
                case "click":
                  if (2 === c.button) break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k3 = Bd;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k3 = Dd;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k3 = Vd;
                  break;
                case $e2:
                case af:
                case bf:
                  k3 = Hd2;
                  break;
                case cf:
                  k3 = Xd;
                  break;
                case "scroll":
                  k3 = vd;
                  break;
                case "wheel":
                  k3 = Zd;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k3 = Jd;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k3 = Td2;
              }
              var t = 0 !== (b2 & 4), J2 = !t && "scroll" === a, x = t ? null !== h2 ? h2 + "Capture" : null : h2;
              t = [];
              for (var w2 = d2, u; null !== w2; ) {
                u = w2;
                var F2 = u.stateNode;
                5 === u.tag && null !== F2 && (u = F2, null !== x && (F2 = Kb(w2, x), null != F2 && t.push(tf(w2, F2, u))));
                if (J2) break;
                w2 = w2.return;
              }
              0 < t.length && (h2 = new k3(h2, n, null, c, e3), g2.push({ event: h2, listeners: t }));
            }
          }
          if (0 === (b2 & 7)) {
            a: {
              h2 = "mouseover" === a || "pointerover" === a;
              k3 = "mouseout" === a || "pointerout" === a;
              if (h2 && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
              if (k3 || h2) {
                h2 = e3.window === e3 ? e3 : (h2 = e3.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
                if (k3) {
                  if (n = c.relatedTarget || c.toElement, k3 = d2, n = n ? Wc(n) : null, null !== n && (J2 = Vb(n), n !== J2 || 5 !== n.tag && 6 !== n.tag)) n = null;
                } else k3 = null, n = d2;
                if (k3 !== n) {
                  t = Bd;
                  F2 = "onMouseLeave";
                  x = "onMouseEnter";
                  w2 = "mouse";
                  if ("pointerout" === a || "pointerover" === a) t = Td2, F2 = "onPointerLeave", x = "onPointerEnter", w2 = "pointer";
                  J2 = null == k3 ? h2 : ue2(k3);
                  u = null == n ? h2 : ue2(n);
                  h2 = new t(F2, w2 + "leave", k3, c, e3);
                  h2.target = J2;
                  h2.relatedTarget = u;
                  F2 = null;
                  Wc(e3) === d2 && (t = new t(x, w2 + "enter", n, c, e3), t.target = u, t.relatedTarget = J2, F2 = t);
                  J2 = F2;
                  if (k3 && n) b: {
                    t = k3;
                    x = n;
                    w2 = 0;
                    for (u = t; u; u = vf(u)) w2++;
                    u = 0;
                    for (F2 = x; F2; F2 = vf(F2)) u++;
                    for (; 0 < w2 - u; ) t = vf(t), w2--;
                    for (; 0 < u - w2; ) x = vf(x), u--;
                    for (; w2--; ) {
                      if (t === x || null !== x && t === x.alternate) break b;
                      t = vf(t);
                      x = vf(x);
                    }
                    t = null;
                  }
                  else t = null;
                  null !== k3 && wf(g2, h2, k3, t, false);
                  null !== n && null !== J2 && wf(g2, J2, n, t, true);
                }
              }
            }
            a: {
              h2 = d2 ? ue2(d2) : window;
              k3 = h2.nodeName && h2.nodeName.toLowerCase();
              if ("select" === k3 || "input" === k3 && "file" === h2.type) var na2 = ve2;
              else if (me3(h2)) if (we3) na2 = Fe3;
              else {
                na2 = De2;
                var xa = Ce3;
              }
              else (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na2 = Ee2);
              if (na2 && (na2 = na2(a, d2))) {
                ne3(g2, na2, c, e3);
                break a;
              }
              xa && xa(a, h2, d2);
              "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
            }
            xa = d2 ? ue2(d2) : window;
            switch (a) {
              case "focusin":
                if (me3(xa) || "true" === xa.contentEditable) Qe3 = xa, Re2 = d2, Se3 = null;
                break;
              case "focusout":
                Se3 = Re2 = Qe3 = null;
                break;
              case "mousedown":
                Te3 = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Te3 = false;
                Ue3(g2, c, e3);
                break;
              case "selectionchange":
                if (Pe3) break;
              case "keydown":
              case "keyup":
                Ue3(g2, c, e3);
            }
            var $a2;
            if (ae3) b: {
              switch (a) {
                case "compositionstart":
                  var ba = "onCompositionStart";
                  break b;
                case "compositionend":
                  ba = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  ba = "onCompositionUpdate";
                  break b;
              }
              ba = void 0;
            }
            else ie2 ? ge3(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
            ba && (de2 && "ko" !== c.locale && (ie2 || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie2 && ($a2 = nd2()) : (kd2 = e3, ld = "value" in kd2 ? kd2.value : kd2.textContent, ie2 = true)), xa = oe3(d2, ba), 0 < xa.length && (ba = new Ld2(ba, a, null, c, e3), g2.push({ event: ba, listeners: xa }), $a2 ? ba.data = $a2 : ($a2 = he2(c), null !== $a2 && (ba.data = $a2))));
            if ($a2 = ce3 ? je2(a, c) : ke3(a, c)) d2 = oe3(d2, "onBeforeInput"), 0 < d2.length && (e3 = new Ld2("onBeforeInput", "beforeinput", null, c, e3), g2.push({ event: e3, listeners: d2 }), e3.data = $a2);
          }
          se3(g2, b2);
        });
      }
      function tf(a, b2, c) {
        return { instance: a, listener: b2, currentTarget: c };
      }
      function oe3(a, b2) {
        for (var c = b2 + "Capture", d = []; null !== a; ) {
          var e2 = a, f2 = e2.stateNode;
          5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e2)), f2 = Kb(a, b2), null != f2 && d.push(tf(a, f2, e2)));
          a = a.return;
        }
        return d;
      }
      function vf(a) {
        if (null === a) return null;
        do
          a = a.return;
        while (a && 5 !== a.tag);
        return a ? a : null;
      }
      function wf(a, b2, c, d, e2) {
        for (var f2 = b2._reactName, g = []; null !== c && c !== d; ) {
          var h = c, k2 = h.alternate, l2 = h.stateNode;
          if (null !== k2 && k2 === d) break;
          5 === h.tag && null !== l2 && (h = l2, e2 ? (k2 = Kb(c, f2), null != k2 && g.unshift(tf(c, k2, h))) : e2 || (k2 = Kb(c, f2), null != k2 && g.push(tf(c, k2, h))));
          c = c.return;
        }
        0 !== g.length && a.push({ event: b2, listeners: g });
      }
      var xf = /\r\n?/g;
      var yf = /\u0000|\uFFFD/g;
      function zf(a) {
        return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
      }
      function Af(a, b2, c) {
        b2 = zf(b2);
        if (zf(a) !== b2 && c) throw Error(p(425));
      }
      function Bf() {
      }
      var Cf = null;
      var Df = null;
      function Ef(a, b2) {
        return "textarea" === a || "noscript" === a || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
      }
      var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
      var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
      var Hf = "function" === typeof Promise ? Promise : void 0;
      var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
        return Hf.resolve(null).then(a).catch(If);
      } : Ff;
      function If(a) {
        setTimeout(function() {
          throw a;
        });
      }
      function Kf(a, b2) {
        var c = b2, d = 0;
        do {
          var e2 = c.nextSibling;
          a.removeChild(c);
          if (e2 && 8 === e2.nodeType) if (c = e2.data, "/$" === c) {
            if (0 === d) {
              a.removeChild(e2);
              bd(b2);
              return;
            }
            d--;
          } else "$" !== c && "$?" !== c && "$!" !== c || d++;
          c = e2;
        } while (c);
        bd(b2);
      }
      function Lf(a) {
        for (; null != a; a = a.nextSibling) {
          var b2 = a.nodeType;
          if (1 === b2 || 3 === b2) break;
          if (8 === b2) {
            b2 = a.data;
            if ("$" === b2 || "$!" === b2 || "$?" === b2) break;
            if ("/$" === b2) return null;
          }
        }
        return a;
      }
      function Mf(a) {
        a = a.previousSibling;
        for (var b2 = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ("$" === c || "$!" === c || "$?" === c) {
              if (0 === b2) return a;
              b2--;
            } else "/$" === c && b2++;
          }
          a = a.previousSibling;
        }
        return null;
      }
      var Nf = Math.random().toString(36).slice(2);
      var Of = "__reactFiber$" + Nf;
      var Pf = "__reactProps$" + Nf;
      var uf = "__reactContainer$" + Nf;
      var of = "__reactEvents$" + Nf;
      var Qf = "__reactListeners$" + Nf;
      var Rf = "__reactHandles$" + Nf;
      function Wc(a) {
        var b2 = a[Of];
        if (b2) return b2;
        for (var c = a.parentNode; c; ) {
          if (b2 = c[uf] || c[Of]) {
            c = b2.alternate;
            if (null !== b2.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
              if (c = a[Of]) return c;
              a = Mf(a);
            }
            return b2;
          }
          a = c;
          c = a.parentNode;
        }
        return null;
      }
      function Cb(a) {
        a = a[Of] || a[uf];
        return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
      }
      function ue2(a) {
        if (5 === a.tag || 6 === a.tag) return a.stateNode;
        throw Error(p(33));
      }
      function Db(a) {
        return a[Pf] || null;
      }
      var Sf = [];
      var Tf = -1;
      function Uf(a) {
        return { current: a };
      }
      function E3(a) {
        0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
      }
      function G2(a, b2) {
        Tf++;
        Sf[Tf] = a.current;
        a.current = b2;
      }
      var Vf = {};
      var H = Uf(Vf);
      var Wf = Uf(false);
      var Xf = Vf;
      function Yf(a, b2) {
        var c = a.type.contextTypes;
        if (!c) return Vf;
        var d = a.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b2) return d.__reactInternalMemoizedMaskedChildContext;
        var e2 = {}, f2;
        for (f2 in c) e2[f2] = b2[f2];
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e2);
        return e2;
      }
      function Zf(a) {
        a = a.childContextTypes;
        return null !== a && void 0 !== a;
      }
      function $f() {
        E3(Wf);
        E3(H);
      }
      function ag(a, b2, c) {
        if (H.current !== Vf) throw Error(p(168));
        G2(H, b2);
        G2(Wf, c);
      }
      function bg(a, b2, c) {
        var d = a.stateNode;
        b2 = b2.childContextTypes;
        if ("function" !== typeof d.getChildContext) return c;
        d = d.getChildContext();
        for (var e2 in d) if (!(e2 in b2)) throw Error(p(108, Ra(a) || "Unknown", e2));
        return A3({}, c, d);
      }
      function cg(a) {
        a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
        Xf = H.current;
        G2(H, a);
        G2(Wf, Wf.current);
        return true;
      }
      function dg(a, b2, c) {
        var d = a.stateNode;
        if (!d) throw Error(p(169));
        c ? (a = bg(a, b2, Xf), d.__reactInternalMemoizedMergedChildContext = a, E3(Wf), E3(H), G2(H, a)) : E3(Wf);
        G2(Wf, c);
      }
      var eg = null;
      var fg = false;
      var gg = false;
      function hg(a) {
        null === eg ? eg = [a] : eg.push(a);
      }
      function ig(a) {
        fg = true;
        hg(a);
      }
      function jg() {
        if (!gg && null !== eg) {
          gg = true;
          var a = 0, b2 = C2;
          try {
            var c = eg;
            for (C2 = 1; a < c.length; a++) {
              var d = c[a];
              do
                d = d(true);
              while (null !== d);
            }
            eg = null;
            fg = false;
          } catch (e2) {
            throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e2;
          } finally {
            C2 = b2, gg = false;
          }
        }
        return null;
      }
      var kg = [];
      var lg = 0;
      var mg = null;
      var ng = 0;
      var og = [];
      var pg = 0;
      var qg = null;
      var rg = 1;
      var sg = "";
      function tg(a, b2) {
        kg[lg++] = ng;
        kg[lg++] = mg;
        mg = a;
        ng = b2;
      }
      function ug(a, b2, c) {
        og[pg++] = rg;
        og[pg++] = sg;
        og[pg++] = qg;
        qg = a;
        var d = rg;
        a = sg;
        var e2 = 32 - oc(d) - 1;
        d &= ~(1 << e2);
        c += 1;
        var f2 = 32 - oc(b2) + e2;
        if (30 < f2) {
          var g = e2 - e2 % 5;
          f2 = (d & (1 << g) - 1).toString(32);
          d >>= g;
          e2 -= g;
          rg = 1 << 32 - oc(b2) + e2 | c << e2 | d;
          sg = f2 + a;
        } else rg = 1 << f2 | c << e2 | d, sg = a;
      }
      function vg(a) {
        null !== a.return && (tg(a, 1), ug(a, 1, 0));
      }
      function wg(a) {
        for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
        for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
      }
      var xg = null;
      var yg = null;
      var I2 = false;
      var zg = null;
      function Ag(a, b2) {
        var c = Bg(5, null, null, 0);
        c.elementType = "DELETED";
        c.stateNode = b2;
        c.return = a;
        b2 = a.deletions;
        null === b2 ? (a.deletions = [c], a.flags |= 16) : b2.push(c);
      }
      function Cg(a, b2) {
        switch (a.tag) {
          case 5:
            var c = a.type;
            b2 = 1 !== b2.nodeType || c.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
            return null !== b2 ? (a.stateNode = b2, xg = a, yg = Lf(b2.firstChild), true) : false;
          case 6:
            return b2 = "" === a.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a.stateNode = b2, xg = a, yg = null, true) : false;
          case 13:
            return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b2, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b2, c.return = a, a.child = c, xg = a, yg = null, true) : false;
          default:
            return false;
        }
      }
      function Dg(a) {
        return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
      }
      function Eg(a) {
        if (I2) {
          var b2 = yg;
          if (b2) {
            var c = b2;
            if (!Cg(a, b2)) {
              if (Dg(a)) throw Error(p(418));
              b2 = Lf(c.nextSibling);
              var d = xg;
              b2 && Cg(a, b2) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I2 = false, xg = a);
            }
          } else {
            if (Dg(a)) throw Error(p(418));
            a.flags = a.flags & -4097 | 2;
            I2 = false;
            xg = a;
          }
        }
      }
      function Fg(a) {
        for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
        xg = a;
      }
      function Gg(a) {
        if (a !== xg) return false;
        if (!I2) return Fg(a), I2 = true, false;
        var b2;
        (b2 = 3 !== a.tag) && !(b2 = 5 !== a.tag) && (b2 = a.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a.type, a.memoizedProps));
        if (b2 && (b2 = yg)) {
          if (Dg(a)) throw Hg(), Error(p(418));
          for (; b2; ) Ag(a, b2), b2 = Lf(b2.nextSibling);
        }
        Fg(a);
        if (13 === a.tag) {
          a = a.memoizedState;
          a = null !== a ? a.dehydrated : null;
          if (!a) throw Error(p(317));
          a: {
            a = a.nextSibling;
            for (b2 = 0; a; ) {
              if (8 === a.nodeType) {
                var c = a.data;
                if ("/$" === c) {
                  if (0 === b2) {
                    yg = Lf(a.nextSibling);
                    break a;
                  }
                  b2--;
                } else "$" !== c && "$!" !== c && "$?" !== c || b2++;
              }
              a = a.nextSibling;
            }
            yg = null;
          }
        } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
        return true;
      }
      function Hg() {
        for (var a = yg; a; ) a = Lf(a.nextSibling);
      }
      function Ig() {
        yg = xg = null;
        I2 = false;
      }
      function Jg(a) {
        null === zg ? zg = [a] : zg.push(a);
      }
      var Kg = ua.ReactCurrentBatchConfig;
      function Lg(a, b2, c) {
        a = c.ref;
        if (null !== a && "function" !== typeof a && "object" !== typeof a) {
          if (c._owner) {
            c = c._owner;
            if (c) {
              if (1 !== c.tag) throw Error(p(309));
              var d = c.stateNode;
            }
            if (!d) throw Error(p(147, a));
            var e2 = d, f2 = "" + a;
            if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2) return b2.ref;
            b2 = function(a2) {
              var b3 = e2.refs;
              null === a2 ? delete b3[f2] : b3[f2] = a2;
            };
            b2._stringRef = f2;
            return b2;
          }
          if ("string" !== typeof a) throw Error(p(284));
          if (!c._owner) throw Error(p(290, a));
        }
        return a;
      }
      function Mg(a, b2) {
        a = Object.prototype.toString.call(b2);
        throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a));
      }
      function Ng(a) {
        var b2 = a._init;
        return b2(a._payload);
      }
      function Og(a) {
        function b2(b3, c2) {
          if (a) {
            var d2 = b3.deletions;
            null === d2 ? (b3.deletions = [c2], b3.flags |= 16) : d2.push(c2);
          }
        }
        function c(c2, d2) {
          if (!a) return null;
          for (; null !== d2; ) b2(c2, d2), d2 = d2.sibling;
          return null;
        }
        function d(a2, b3) {
          for (a2 = /* @__PURE__ */ new Map(); null !== b3; ) null !== b3.key ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
          return a2;
        }
        function e2(a2, b3) {
          a2 = Pg(a2, b3);
          a2.index = 0;
          a2.sibling = null;
          return a2;
        }
        function f2(b3, c2, d2) {
          b3.index = d2;
          if (!a) return b3.flags |= 1048576, c2;
          d2 = b3.alternate;
          if (null !== d2) return d2 = d2.index, d2 < c2 ? (b3.flags |= 2, c2) : d2;
          b3.flags |= 2;
          return c2;
        }
        function g(b3) {
          a && null === b3.alternate && (b3.flags |= 2);
          return b3;
        }
        function h(a2, b3, c2, d2) {
          if (null === b3 || 6 !== b3.tag) return b3 = Qg(c2, a2.mode, d2), b3.return = a2, b3;
          b3 = e2(b3, c2);
          b3.return = a2;
          return b3;
        }
        function k2(a2, b3, c2, d2) {
          var f3 = c2.type;
          if (f3 === ya) return m(a2, b3, c2.props.children, d2, c2.key);
          if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha2 && Ng(f3) === b3.type)) return d2 = e2(b3, c2.props), d2.ref = Lg(a2, b3, c2), d2.return = a2, d2;
          d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
          d2.ref = Lg(a2, b3, c2);
          d2.return = a2;
          return d2;
        }
        function l2(a2, b3, c2, d2) {
          if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c2.containerInfo || b3.stateNode.implementation !== c2.implementation) return b3 = Sg(c2, a2.mode, d2), b3.return = a2, b3;
          b3 = e2(b3, c2.children || []);
          b3.return = a2;
          return b3;
        }
        function m(a2, b3, c2, d2, f3) {
          if (null === b3 || 7 !== b3.tag) return b3 = Tg(c2, a2.mode, d2, f3), b3.return = a2, b3;
          b3 = e2(b3, c2);
          b3.return = a2;
          return b3;
        }
        function q(a2, b3, c2) {
          if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3) return b3 = Qg("" + b3, a2.mode, c2), b3.return = a2, b3;
          if ("object" === typeof b3 && null !== b3) {
            switch (b3.$$typeof) {
              case va:
                return c2 = Rg(b3.type, b3.key, b3.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b3), c2.return = a2, c2;
              case wa2:
                return b3 = Sg(b3, a2.mode, c2), b3.return = a2, b3;
              case Ha2:
                var d2 = b3._init;
                return q(a2, d2(b3._payload), c2);
            }
            if (eb(b3) || Ka2(b3)) return b3 = Tg(b3, a2.mode, c2, null), b3.return = a2, b3;
            Mg(a2, b3);
          }
          return null;
        }
        function r(a2, b3, c2, d2) {
          var e3 = null !== b3 ? b3.key : null;
          if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e3 ? null : h(a2, b3, "" + c2, d2);
          if ("object" === typeof c2 && null !== c2) {
            switch (c2.$$typeof) {
              case va:
                return c2.key === e3 ? k2(a2, b3, c2, d2) : null;
              case wa2:
                return c2.key === e3 ? l2(a2, b3, c2, d2) : null;
              case Ha2:
                return e3 = c2._init, r(
                  a2,
                  b3,
                  e3(c2._payload),
                  d2
                );
            }
            if (eb(c2) || Ka2(c2)) return null !== e3 ? null : m(a2, b3, c2, d2, null);
            Mg(a2, c2);
          }
          return null;
        }
        function y2(a2, b3, c2, d2, e3) {
          if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b3, a2, "" + d2, e3);
          if ("object" === typeof d2 && null !== d2) {
            switch (d2.$$typeof) {
              case va:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b3, a2, d2, e3);
              case wa2:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b3, a2, d2, e3);
              case Ha2:
                var f3 = d2._init;
                return y2(a2, b3, c2, f3(d2._payload), e3);
            }
            if (eb(d2) || Ka2(d2)) return a2 = a2.get(c2) || null, m(b3, a2, d2, e3, null);
            Mg(b3, d2);
          }
          return null;
        }
        function n(e3, g2, h2, k3) {
          for (var l3 = null, m2 = null, u = g2, w2 = g2 = 0, x = null; null !== u && w2 < h2.length; w2++) {
            u.index > w2 ? (x = u, u = null) : x = u.sibling;
            var n2 = r(e3, u, h2[w2], k3);
            if (null === n2) {
              null === u && (u = x);
              break;
            }
            a && u && null === n2.alternate && b2(e3, u);
            g2 = f2(n2, g2, w2);
            null === m2 ? l3 = n2 : m2.sibling = n2;
            m2 = n2;
            u = x;
          }
          if (w2 === h2.length) return c(e3, u), I2 && tg(e3, w2), l3;
          if (null === u) {
            for (; w2 < h2.length; w2++) u = q(e3, h2[w2], k3), null !== u && (g2 = f2(u, g2, w2), null === m2 ? l3 = u : m2.sibling = u, m2 = u);
            I2 && tg(e3, w2);
            return l3;
          }
          for (u = d(e3, u); w2 < h2.length; w2++) x = y2(u, e3, w2, h2[w2], k3), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w2 : x.key), g2 = f2(x, g2, w2), null === m2 ? l3 = x : m2.sibling = x, m2 = x);
          a && u.forEach(function(a2) {
            return b2(e3, a2);
          });
          I2 && tg(e3, w2);
          return l3;
        }
        function t(e3, g2, h2, k3) {
          var l3 = Ka2(h2);
          if ("function" !== typeof l3) throw Error(p(150));
          h2 = l3.call(h2);
          if (null == h2) throw Error(p(151));
          for (var u = l3 = null, m2 = g2, w2 = g2 = 0, x = null, n2 = h2.next(); null !== m2 && !n2.done; w2++, n2 = h2.next()) {
            m2.index > w2 ? (x = m2, m2 = null) : x = m2.sibling;
            var t2 = r(e3, m2, n2.value, k3);
            if (null === t2) {
              null === m2 && (m2 = x);
              break;
            }
            a && m2 && null === t2.alternate && b2(e3, m2);
            g2 = f2(t2, g2, w2);
            null === u ? l3 = t2 : u.sibling = t2;
            u = t2;
            m2 = x;
          }
          if (n2.done) return c(
            e3,
            m2
          ), I2 && tg(e3, w2), l3;
          if (null === m2) {
            for (; !n2.done; w2++, n2 = h2.next()) n2 = q(e3, n2.value, k3), null !== n2 && (g2 = f2(n2, g2, w2), null === u ? l3 = n2 : u.sibling = n2, u = n2);
            I2 && tg(e3, w2);
            return l3;
          }
          for (m2 = d(e3, m2); !n2.done; w2++, n2 = h2.next()) n2 = y2(m2, e3, w2, n2.value, k3), null !== n2 && (a && null !== n2.alternate && m2.delete(null === n2.key ? w2 : n2.key), g2 = f2(n2, g2, w2), null === u ? l3 = n2 : u.sibling = n2, u = n2);
          a && m2.forEach(function(a2) {
            return b2(e3, a2);
          });
          I2 && tg(e3, w2);
          return l3;
        }
        function J2(a2, d2, f3, h2) {
          "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
          if ("object" === typeof f3 && null !== f3) {
            switch (f3.$$typeof) {
              case va:
                a: {
                  for (var k3 = f3.key, l3 = d2; null !== l3; ) {
                    if (l3.key === k3) {
                      k3 = f3.type;
                      if (k3 === ya) {
                        if (7 === l3.tag) {
                          c(a2, l3.sibling);
                          d2 = e2(l3, f3.props.children);
                          d2.return = a2;
                          a2 = d2;
                          break a;
                        }
                      } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha2 && Ng(k3) === l3.type) {
                        c(a2, l3.sibling);
                        d2 = e2(l3, f3.props);
                        d2.ref = Lg(a2, l3, f3);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                      c(a2, l3);
                      break;
                    } else b2(a2, l3);
                    l3 = l3.sibling;
                  }
                  f3.type === ya ? (d2 = Tg(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f3), h2.return = a2, a2 = h2);
                }
                return g(a2);
              case wa2:
                a: {
                  for (l3 = f3.key; null !== d2; ) {
                    if (d2.key === l3) if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                      c(a2, d2.sibling);
                      d2 = e2(d2, f3.children || []);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    } else {
                      c(a2, d2);
                      break;
                    }
                    else b2(a2, d2);
                    d2 = d2.sibling;
                  }
                  d2 = Sg(f3, a2.mode, h2);
                  d2.return = a2;
                  a2 = d2;
                }
                return g(a2);
              case Ha2:
                return l3 = f3._init, J2(a2, d2, l3(f3._payload), h2);
            }
            if (eb(f3)) return n(a2, d2, f3, h2);
            if (Ka2(f3)) return t(a2, d2, f3, h2);
            Mg(a2, f3);
          }
          return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e2(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f3, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
        }
        return J2;
      }
      var Ug = Og(true);
      var Vg = Og(false);
      var Wg = Uf(null);
      var Xg = null;
      var Yg = null;
      var Zg = null;
      function $g() {
        Zg = Yg = Xg = null;
      }
      function ah(a) {
        var b2 = Wg.current;
        E3(Wg);
        a._currentValue = b2;
      }
      function bh(a, b2, c) {
        for (; null !== a; ) {
          var d = a.alternate;
          (a.childLanes & b2) !== b2 ? (a.childLanes |= b2, null !== d && (d.childLanes |= b2)) : null !== d && (d.childLanes & b2) !== b2 && (d.childLanes |= b2);
          if (a === c) break;
          a = a.return;
        }
      }
      function ch(a, b2) {
        Xg = a;
        Zg = Yg = null;
        a = a.dependencies;
        null !== a && null !== a.firstContext && (0 !== (a.lanes & b2) && (dh = true), a.firstContext = null);
      }
      function eh(a) {
        var b2 = a._currentValue;
        if (Zg !== a) if (a = { context: a, memoizedValue: b2, next: null }, null === Yg) {
          if (null === Xg) throw Error(p(308));
          Yg = a;
          Xg.dependencies = { lanes: 0, firstContext: a };
        } else Yg = Yg.next = a;
        return b2;
      }
      var fh = null;
      function gh(a) {
        null === fh ? fh = [a] : fh.push(a);
      }
      function hh(a, b2, c, d) {
        var e2 = b2.interleaved;
        null === e2 ? (c.next = c, gh(b2)) : (c.next = e2.next, e2.next = c);
        b2.interleaved = c;
        return ih(a, d);
      }
      function ih(a, b2) {
        a.lanes |= b2;
        var c = a.alternate;
        null !== c && (c.lanes |= b2);
        c = a;
        for (a = a.return; null !== a; ) a.childLanes |= b2, c = a.alternate, null !== c && (c.childLanes |= b2), c = a, a = a.return;
        return 3 === c.tag ? c.stateNode : null;
      }
      var jh = false;
      function kh(a) {
        a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function lh(a, b2) {
        a = a.updateQueue;
        b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
      }
      function mh(a, b2) {
        return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
      }
      function nh(a, b2, c) {
        var d = a.updateQueue;
        if (null === d) return null;
        d = d.shared;
        if (0 !== (K2 & 2)) {
          var e2 = d.pending;
          null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
          d.pending = b2;
          return ih(a, c);
        }
        e2 = d.interleaved;
        null === e2 ? (b2.next = b2, gh(d)) : (b2.next = e2.next, e2.next = b2);
        d.interleaved = b2;
        return ih(a, c);
      }
      function oh(a, b2, c) {
        b2 = b2.updateQueue;
        if (null !== b2 && (b2 = b2.shared, 0 !== (c & 4194240))) {
          var d = b2.lanes;
          d &= a.pendingLanes;
          c |= d;
          b2.lanes = c;
          Cc(a, c);
        }
      }
      function ph(a, b2) {
        var c = a.updateQueue, d = a.alternate;
        if (null !== d && (d = d.updateQueue, c === d)) {
          var e2 = null, f2 = null;
          c = c.firstBaseUpdate;
          if (null !== c) {
            do {
              var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
              null === f2 ? e2 = f2 = g : f2 = f2.next = g;
              c = c.next;
            } while (null !== c);
            null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
          } else e2 = f2 = b2;
          c = { baseState: d.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
          a.updateQueue = c;
          return;
        }
        a = c.lastBaseUpdate;
        null === a ? c.firstBaseUpdate = b2 : a.next = b2;
        c.lastBaseUpdate = b2;
      }
      function qh(a, b2, c, d) {
        var e2 = a.updateQueue;
        jh = false;
        var f2 = e2.firstBaseUpdate, g = e2.lastBaseUpdate, h = e2.shared.pending;
        if (null !== h) {
          e2.shared.pending = null;
          var k2 = h, l2 = k2.next;
          k2.next = null;
          null === g ? f2 = l2 : g.next = l2;
          g = k2;
          var m = a.alternate;
          null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l2 : h.next = l2, m.lastBaseUpdate = k2));
        }
        if (null !== f2) {
          var q = e2.baseState;
          g = 0;
          m = l2 = k2 = null;
          h = f2;
          do {
            var r = h.lane, y2 = h.eventTime;
            if ((d & r) === r) {
              null !== m && (m = m.next = {
                eventTime: y2,
                lane: 0,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              });
              a: {
                var n = a, t = h;
                r = b2;
                y2 = c;
                switch (t.tag) {
                  case 1:
                    n = t.payload;
                    if ("function" === typeof n) {
                      q = n.call(y2, q, r);
                      break a;
                    }
                    q = n;
                    break a;
                  case 3:
                    n.flags = n.flags & -65537 | 128;
                  case 0:
                    n = t.payload;
                    r = "function" === typeof n ? n.call(y2, q, r) : n;
                    if (null === r || void 0 === r) break a;
                    q = A3({}, q, r);
                    break a;
                  case 2:
                    jh = true;
                }
              }
              null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e2.effects, null === r ? e2.effects = [h] : r.push(h));
            } else y2 = { eventTime: y2, lane: r, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m ? (l2 = m = y2, k2 = q) : m = m.next = y2, g |= r;
            h = h.next;
            if (null === h) if (h = e2.shared.pending, null === h) break;
            else r = h, h = r.next, r.next = null, e2.lastBaseUpdate = r, e2.shared.pending = null;
          } while (1);
          null === m && (k2 = q);
          e2.baseState = k2;
          e2.firstBaseUpdate = l2;
          e2.lastBaseUpdate = m;
          b2 = e2.shared.interleaved;
          if (null !== b2) {
            e2 = b2;
            do
              g |= e2.lane, e2 = e2.next;
            while (e2 !== b2);
          } else null === f2 && (e2.shared.lanes = 0);
          rh |= g;
          a.lanes = g;
          a.memoizedState = q;
        }
      }
      function sh(a, b2, c) {
        a = b2.effects;
        b2.effects = null;
        if (null !== a) for (b2 = 0; b2 < a.length; b2++) {
          var d = a[b2], e2 = d.callback;
          if (null !== e2) {
            d.callback = null;
            d = c;
            if ("function" !== typeof e2) throw Error(p(191, e2));
            e2.call(d);
          }
        }
      }
      var th = {};
      var uh = Uf(th);
      var vh = Uf(th);
      var wh = Uf(th);
      function xh(a) {
        if (a === th) throw Error(p(174));
        return a;
      }
      function yh(a, b2) {
        G2(wh, b2);
        G2(vh, a);
        G2(uh, th);
        a = b2.nodeType;
        switch (a) {
          case 9:
          case 11:
            b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
            break;
          default:
            a = 8 === a ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = lb(b2, a);
        }
        E3(uh);
        G2(uh, b2);
      }
      function zh() {
        E3(uh);
        E3(vh);
        E3(wh);
      }
      function Ah(a) {
        xh(wh.current);
        var b2 = xh(uh.current);
        var c = lb(b2, a.type);
        b2 !== c && (G2(vh, a), G2(uh, c));
      }
      function Bh(a) {
        vh.current === a && (E3(uh), E3(vh));
      }
      var L2 = Uf(0);
      function Ch(a) {
        for (var b2 = a; null !== b2; ) {
          if (13 === b2.tag) {
            var c = b2.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b2;
          } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
            if (0 !== (b2.flags & 128)) return b2;
          } else if (null !== b2.child) {
            b2.child.return = b2;
            b2 = b2.child;
            continue;
          }
          if (b2 === a) break;
          for (; null === b2.sibling; ) {
            if (null === b2.return || b2.return === a) return null;
            b2 = b2.return;
          }
          b2.sibling.return = b2.return;
          b2 = b2.sibling;
        }
        return null;
      }
      var Dh = [];
      function Eh() {
        for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
        Dh.length = 0;
      }
      var Fh = ua.ReactCurrentDispatcher;
      var Gh = ua.ReactCurrentBatchConfig;
      var Hh = 0;
      var M3 = null;
      var N2 = null;
      var O3 = null;
      var Ih = false;
      var Jh = false;
      var Kh = 0;
      var Lh = 0;
      function P() {
        throw Error(p(321));
      }
      function Mh(a, b2) {
        if (null === b2) return false;
        for (var c = 0; c < b2.length && c < a.length; c++) if (!He3(a[c], b2[c])) return false;
        return true;
      }
      function Nh(a, b2, c, d, e2, f2) {
        Hh = f2;
        M3 = b2;
        b2.memoizedState = null;
        b2.updateQueue = null;
        b2.lanes = 0;
        Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
        a = c(d, e2);
        if (Jh) {
          f2 = 0;
          do {
            Jh = false;
            Kh = 0;
            if (25 <= f2) throw Error(p(301));
            f2 += 1;
            O3 = N2 = null;
            b2.updateQueue = null;
            Fh.current = Qh;
            a = c(d, e2);
          } while (Jh);
        }
        Fh.current = Rh;
        b2 = null !== N2 && null !== N2.next;
        Hh = 0;
        O3 = N2 = M3 = null;
        Ih = false;
        if (b2) throw Error(p(300));
        return a;
      }
      function Sh() {
        var a = 0 !== Kh;
        Kh = 0;
        return a;
      }
      function Th() {
        var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === O3 ? M3.memoizedState = O3 = a : O3 = O3.next = a;
        return O3;
      }
      function Uh() {
        if (null === N2) {
          var a = M3.alternate;
          a = null !== a ? a.memoizedState : null;
        } else a = N2.next;
        var b2 = null === O3 ? M3.memoizedState : O3.next;
        if (null !== b2) O3 = b2, N2 = a;
        else {
          if (null === a) throw Error(p(310));
          N2 = a;
          a = { memoizedState: N2.memoizedState, baseState: N2.baseState, baseQueue: N2.baseQueue, queue: N2.queue, next: null };
          null === O3 ? M3.memoizedState = O3 = a : O3 = O3.next = a;
        }
        return O3;
      }
      function Vh(a, b2) {
        return "function" === typeof b2 ? b2(a) : b2;
      }
      function Wh(a) {
        var b2 = Uh(), c = b2.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = N2, e2 = d.baseQueue, f2 = c.pending;
        if (null !== f2) {
          if (null !== e2) {
            var g = e2.next;
            e2.next = f2.next;
            f2.next = g;
          }
          d.baseQueue = e2 = f2;
          c.pending = null;
        }
        if (null !== e2) {
          f2 = e2.next;
          d = d.baseState;
          var h = g = null, k2 = null, l2 = f2;
          do {
            var m = l2.lane;
            if ((Hh & m) === m) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
            else {
              var q = {
                lane: m,
                action: l2.action,
                hasEagerState: l2.hasEagerState,
                eagerState: l2.eagerState,
                next: null
              };
              null === k2 ? (h = k2 = q, g = d) : k2 = k2.next = q;
              M3.lanes |= m;
              rh |= m;
            }
            l2 = l2.next;
          } while (null !== l2 && l2 !== f2);
          null === k2 ? g = d : k2.next = h;
          He3(d, b2.memoizedState) || (dh = true);
          b2.memoizedState = d;
          b2.baseState = g;
          b2.baseQueue = k2;
          c.lastRenderedState = d;
        }
        a = c.interleaved;
        if (null !== a) {
          e2 = a;
          do
            f2 = e2.lane, M3.lanes |= f2, rh |= f2, e2 = e2.next;
          while (e2 !== a);
        } else null === e2 && (c.lanes = 0);
        return [b2.memoizedState, c.dispatch];
      }
      function Xh(a) {
        var b2 = Uh(), c = b2.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = c.dispatch, e2 = c.pending, f2 = b2.memoizedState;
        if (null !== e2) {
          c.pending = null;
          var g = e2 = e2.next;
          do
            f2 = a(f2, g.action), g = g.next;
          while (g !== e2);
          He3(f2, b2.memoizedState) || (dh = true);
          b2.memoizedState = f2;
          null === b2.baseQueue && (b2.baseState = f2);
          c.lastRenderedState = f2;
        }
        return [f2, d];
      }
      function Yh() {
      }
      function Zh(a, b2) {
        var c = M3, d = Uh(), e2 = b2(), f2 = !He3(d.memoizedState, e2);
        f2 && (d.memoizedState = e2, dh = true);
        d = d.queue;
        $h(ai.bind(null, c, d, a), [a]);
        if (d.getSnapshot !== b2 || f2 || null !== O3 && O3.memoizedState.tag & 1) {
          c.flags |= 2048;
          bi(9, ci.bind(null, c, d, e2, b2), void 0, null);
          if (null === Q) throw Error(p(349));
          0 !== (Hh & 30) || di(c, b2, e2);
        }
        return e2;
      }
      function di(a, b2, c) {
        a.flags |= 16384;
        a = { getSnapshot: b2, value: c };
        b2 = M3.updateQueue;
        null === b2 ? (b2 = { lastEffect: null, stores: null }, M3.updateQueue = b2, b2.stores = [a]) : (c = b2.stores, null === c ? b2.stores = [a] : c.push(a));
      }
      function ci(a, b2, c, d) {
        b2.value = c;
        b2.getSnapshot = d;
        ei(b2) && fi(a);
      }
      function ai(a, b2, c) {
        return c(function() {
          ei(b2) && fi(a);
        });
      }
      function ei(a) {
        var b2 = a.getSnapshot;
        a = a.value;
        try {
          var c = b2();
          return !He3(a, c);
        } catch (d) {
          return true;
        }
      }
      function fi(a) {
        var b2 = ih(a, 1);
        null !== b2 && gi(b2, a, 1, -1);
      }
      function hi(a) {
        var b2 = Th();
        "function" === typeof a && (a = a());
        b2.memoizedState = b2.baseState = a;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
        b2.queue = a;
        a = a.dispatch = ii.bind(null, M3, a);
        return [b2.memoizedState, a];
      }
      function bi(a, b2, c, d) {
        a = { tag: a, create: b2, destroy: c, deps: d, next: null };
        b2 = M3.updateQueue;
        null === b2 ? (b2 = { lastEffect: null, stores: null }, M3.updateQueue = b2, b2.lastEffect = a.next = a) : (c = b2.lastEffect, null === c ? b2.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b2.lastEffect = a));
        return a;
      }
      function ji() {
        return Uh().memoizedState;
      }
      function ki(a, b2, c, d) {
        var e2 = Th();
        M3.flags |= a;
        e2.memoizedState = bi(1 | b2, c, void 0, void 0 === d ? null : d);
      }
      function li(a, b2, c, d) {
        var e2 = Uh();
        d = void 0 === d ? null : d;
        var f2 = void 0;
        if (null !== N2) {
          var g = N2.memoizedState;
          f2 = g.destroy;
          if (null !== d && Mh(d, g.deps)) {
            e2.memoizedState = bi(b2, c, f2, d);
            return;
          }
        }
        M3.flags |= a;
        e2.memoizedState = bi(1 | b2, c, f2, d);
      }
      function mi(a, b2) {
        return ki(8390656, 8, a, b2);
      }
      function $h(a, b2) {
        return li(2048, 8, a, b2);
      }
      function ni(a, b2) {
        return li(4, 2, a, b2);
      }
      function oi(a, b2) {
        return li(4, 4, a, b2);
      }
      function pi(a, b2) {
        if ("function" === typeof b2) return a = a(), b2(a), function() {
          b2(null);
        };
        if (null !== b2 && void 0 !== b2) return a = a(), b2.current = a, function() {
          b2.current = null;
        };
      }
      function qi(a, b2, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return li(4, 4, pi.bind(null, b2, a), c);
      }
      function ri() {
      }
      function si(a, b2) {
        var c = Uh();
        b2 = void 0 === b2 ? null : b2;
        var d = c.memoizedState;
        if (null !== d && null !== b2 && Mh(b2, d[1])) return d[0];
        c.memoizedState = [a, b2];
        return a;
      }
      function ti(a, b2) {
        var c = Uh();
        b2 = void 0 === b2 ? null : b2;
        var d = c.memoizedState;
        if (null !== d && null !== b2 && Mh(b2, d[1])) return d[0];
        a = a();
        c.memoizedState = [a, b2];
        return a;
      }
      function ui(a, b2, c) {
        if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
        He3(c, b2) || (c = yc(), M3.lanes |= c, rh |= c, a.baseState = true);
        return b2;
      }
      function vi(a, b2) {
        var c = C2;
        C2 = 0 !== c && 4 > c ? c : 4;
        a(true);
        var d = Gh.transition;
        Gh.transition = {};
        try {
          a(false), b2();
        } finally {
          C2 = c, Gh.transition = d;
        }
      }
      function wi() {
        return Uh().memoizedState;
      }
      function xi(a, b2, c) {
        var d = yi(a);
        c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi(a)) Ai(b2, c);
        else if (c = hh(a, b2, c, d), null !== c) {
          var e2 = R3();
          gi(c, a, d, e2);
          Bi(c, b2, d);
        }
      }
      function ii(a, b2, c) {
        var d = yi(a), e2 = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi(a)) Ai(b2, e2);
        else {
          var f2 = a.alternate;
          if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2)) try {
            var g = b2.lastRenderedState, h = f2(g, c);
            e2.hasEagerState = true;
            e2.eagerState = h;
            if (He3(h, g)) {
              var k2 = b2.interleaved;
              null === k2 ? (e2.next = e2, gh(b2)) : (e2.next = k2.next, k2.next = e2);
              b2.interleaved = e2;
              return;
            }
          } catch (l2) {
          } finally {
          }
          c = hh(a, b2, e2, d);
          null !== c && (e2 = R3(), gi(c, a, d, e2), Bi(c, b2, d));
        }
      }
      function zi(a) {
        var b2 = a.alternate;
        return a === M3 || null !== b2 && b2 === M3;
      }
      function Ai(a, b2) {
        Jh = Ih = true;
        var c = a.pending;
        null === c ? b2.next = b2 : (b2.next = c.next, c.next = b2);
        a.pending = b2;
      }
      function Bi(a, b2, c) {
        if (0 !== (c & 4194240)) {
          var d = b2.lanes;
          d &= a.pendingLanes;
          c |= d;
          b2.lanes = c;
          Cc(a, c);
        }
      }
      var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false };
      var Oh = { readContext: eh, useCallback: function(a, b2) {
        Th().memoizedState = [a, void 0 === b2 ? null : b2];
        return a;
      }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b2, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ki(
          4194308,
          4,
          pi.bind(null, b2, a),
          c
        );
      }, useLayoutEffect: function(a, b2) {
        return ki(4194308, 4, a, b2);
      }, useInsertionEffect: function(a, b2) {
        return ki(4, 2, a, b2);
      }, useMemo: function(a, b2) {
        var c = Th();
        b2 = void 0 === b2 ? null : b2;
        a = a();
        c.memoizedState = [a, b2];
        return a;
      }, useReducer: function(a, b2, c) {
        var d = Th();
        b2 = void 0 !== c ? c(b2) : b2;
        d.memoizedState = d.baseState = b2;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
        d.queue = a;
        a = a.dispatch = xi.bind(null, M3, a);
        return [d.memoizedState, a];
      }, useRef: function(a) {
        var b2 = Th();
        a = { current: a };
        return b2.memoizedState = a;
      }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
        return Th().memoizedState = a;
      }, useTransition: function() {
        var a = hi(false), b2 = a[0];
        a = vi.bind(null, a[1]);
        Th().memoizedState = a;
        return [b2, a];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a, b2, c) {
        var d = M3, e2 = Th();
        if (I2) {
          if (void 0 === c) throw Error(p(407));
          c = c();
        } else {
          c = b2();
          if (null === Q) throw Error(p(349));
          0 !== (Hh & 30) || di(d, b2, c);
        }
        e2.memoizedState = c;
        var f2 = { value: c, getSnapshot: b2 };
        e2.queue = f2;
        mi(ai.bind(
          null,
          d,
          f2,
          a
        ), [a]);
        d.flags |= 2048;
        bi(9, ci.bind(null, d, f2, c, b2), void 0, null);
        return c;
      }, useId: function() {
        var a = Th(), b2 = Q.identifierPrefix;
        if (I2) {
          var c = sg;
          var d = rg;
          c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
          b2 = ":" + b2 + "R" + c;
          c = Kh++;
          0 < c && (b2 += "H" + c.toString(32));
          b2 += ":";
        } else c = Lh++, b2 = ":" + b2 + "r" + c.toString(32) + ":";
        return a.memoizedState = b2;
      }, unstable_isNewReconciler: false };
      var Ph = {
        readContext: eh,
        useCallback: si,
        useContext: eh,
        useEffect: $h,
        useImperativeHandle: qi,
        useInsertionEffect: ni,
        useLayoutEffect: oi,
        useMemo: ti,
        useReducer: Wh,
        useRef: ji,
        useState: function() {
          return Wh(Vh);
        },
        useDebugValue: ri,
        useDeferredValue: function(a) {
          var b2 = Uh();
          return ui(b2, N2.memoizedState, a);
        },
        useTransition: function() {
          var a = Wh(Vh)[0], b2 = Uh().memoizedState;
          return [a, b2];
        },
        useMutableSource: Yh,
        useSyncExternalStore: Zh,
        useId: wi,
        unstable_isNewReconciler: false
      };
      var Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
        return Xh(Vh);
      }, useDebugValue: ri, useDeferredValue: function(a) {
        var b2 = Uh();
        return null === N2 ? b2.memoizedState = a : ui(b2, N2.memoizedState, a);
      }, useTransition: function() {
        var a = Xh(Vh)[0], b2 = Uh().memoizedState;
        return [a, b2];
      }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
      function Ci(a, b2) {
        if (a && a.defaultProps) {
          b2 = A3({}, b2);
          a = a.defaultProps;
          for (var c in a) void 0 === b2[c] && (b2[c] = a[c]);
          return b2;
        }
        return b2;
      }
      function Di(a, b2, c, d) {
        b2 = a.memoizedState;
        c = c(d, b2);
        c = null === c || void 0 === c ? b2 : A3({}, b2, c);
        a.memoizedState = c;
        0 === a.lanes && (a.updateQueue.baseState = c);
      }
      var Ei = { isMounted: function(a) {
        return (a = a._reactInternals) ? Vb(a) === a : false;
      }, enqueueSetState: function(a, b2, c) {
        a = a._reactInternals;
        var d = R3(), e2 = yi(a), f2 = mh(d, e2);
        f2.payload = b2;
        void 0 !== c && null !== c && (f2.callback = c);
        b2 = nh(a, f2, e2);
        null !== b2 && (gi(b2, a, e2, d), oh(b2, a, e2));
      }, enqueueReplaceState: function(a, b2, c) {
        a = a._reactInternals;
        var d = R3(), e2 = yi(a), f2 = mh(d, e2);
        f2.tag = 1;
        f2.payload = b2;
        void 0 !== c && null !== c && (f2.callback = c);
        b2 = nh(a, f2, e2);
        null !== b2 && (gi(b2, a, e2, d), oh(b2, a, e2));
      }, enqueueForceUpdate: function(a, b2) {
        a = a._reactInternals;
        var c = R3(), d = yi(a), e2 = mh(c, d);
        e2.tag = 2;
        void 0 !== b2 && null !== b2 && (e2.callback = b2);
        b2 = nh(a, e2, d);
        null !== b2 && (gi(b2, a, d, c), oh(b2, a, d));
      } };
      function Fi(a, b2, c, d, e2, f2, g) {
        a = a.stateNode;
        return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie3(c, d) || !Ie3(e2, f2) : true;
      }
      function Gi(a, b2, c) {
        var d = false, e2 = Vf;
        var f2 = b2.contextType;
        "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e2 = Zf(b2) ? Xf : H.current, d = b2.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e2) : Vf);
        b2 = new b2(c, f2);
        a.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
        b2.updater = Ei;
        a.stateNode = b2;
        b2._reactInternals = a;
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
        return b2;
      }
      function Hi(a, b2, c, d) {
        a = b2.state;
        "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c, d);
        "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c, d);
        b2.state !== a && Ei.enqueueReplaceState(b2, b2.state, null);
      }
      function Ii(a, b2, c, d) {
        var e2 = a.stateNode;
        e2.props = c;
        e2.state = a.memoizedState;
        e2.refs = {};
        kh(a);
        var f2 = b2.contextType;
        "object" === typeof f2 && null !== f2 ? e2.context = eh(f2) : (f2 = Zf(b2) ? Xf : H.current, e2.context = Yf(a, f2));
        e2.state = a.memoizedState;
        f2 = b2.getDerivedStateFromProps;
        "function" === typeof f2 && (Di(a, b2, f2, c), e2.state = a.memoizedState);
        "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Ei.enqueueReplaceState(e2, e2.state, null), qh(a, c, e2, d), e2.state = a.memoizedState);
        "function" === typeof e2.componentDidMount && (a.flags |= 4194308);
      }
      function Ji(a, b2) {
        try {
          var c = "", d = b2;
          do
            c += Pa(d), d = d.return;
          while (d);
          var e2 = c;
        } catch (f2) {
          e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
        }
        return { value: a, source: b2, stack: e2, digest: null };
      }
      function Ki(a, b2, c) {
        return { value: a, source: null, stack: null != c ? c : null, digest: null != b2 ? b2 : null };
      }
      function Li(a, b2) {
        try {
          console.error(b2.value);
        } catch (c) {
          setTimeout(function() {
            throw c;
          });
        }
      }
      var Mi = "function" === typeof WeakMap ? WeakMap : Map;
      function Ni(a, b2, c) {
        c = mh(-1, c);
        c.tag = 3;
        c.payload = { element: null };
        var d = b2.value;
        c.callback = function() {
          Oi || (Oi = true, Pi = d);
          Li(a, b2);
        };
        return c;
      }
      function Qi(a, b2, c) {
        c = mh(-1, c);
        c.tag = 3;
        var d = a.type.getDerivedStateFromError;
        if ("function" === typeof d) {
          var e2 = b2.value;
          c.payload = function() {
            return d(e2);
          };
          c.callback = function() {
            Li(a, b2);
          };
        }
        var f2 = a.stateNode;
        null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
          Li(a, b2);
          "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
          var c2 = b2.stack;
          this.componentDidCatch(b2.value, { componentStack: null !== c2 ? c2 : "" });
        });
        return c;
      }
      function Si(a, b2, c) {
        var d = a.pingCache;
        if (null === d) {
          d = a.pingCache = new Mi();
          var e2 = /* @__PURE__ */ new Set();
          d.set(b2, e2);
        } else e2 = d.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d.set(b2, e2));
        e2.has(c) || (e2.add(c), a = Ti.bind(null, a, b2, c), b2.then(a, a));
      }
      function Ui(a) {
        do {
          var b2;
          if (b2 = 13 === a.tag) b2 = a.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
          if (b2) return a;
          a = a.return;
        } while (null !== a);
        return null;
      }
      function Vi(a, b2, c, d, e2) {
        if (0 === (a.mode & 1)) return a === b2 ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b2 = mh(-1, 1), b2.tag = 2, nh(c, b2, 1))), c.lanes |= 1), a;
        a.flags |= 65536;
        a.lanes = e2;
        return a;
      }
      var Wi = ua.ReactCurrentOwner;
      var dh = false;
      function Xi(a, b2, c, d) {
        b2.child = null === a ? Vg(b2, null, c, d) : Ug(b2, a.child, c, d);
      }
      function Yi(a, b2, c, d, e2) {
        c = c.render;
        var f2 = b2.ref;
        ch(b2, e2);
        d = Nh(a, b2, c, d, f2, e2);
        c = Sh();
        if (null !== a && !dh) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, Zi(a, b2, e2);
        I2 && c && vg(b2);
        b2.flags |= 1;
        Xi(a, b2, d, e2);
        return b2.child;
      }
      function $i(a, b2, c, d, e2) {
        if (null === a) {
          var f2 = c.type;
          if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps) return b2.tag = 15, b2.type = f2, bj(a, b2, f2, d, e2);
          a = Rg(c.type, null, d, b2, b2.mode, e2);
          a.ref = b2.ref;
          a.return = b2;
          return b2.child = a;
        }
        f2 = a.child;
        if (0 === (a.lanes & e2)) {
          var g = f2.memoizedProps;
          c = c.compare;
          c = null !== c ? c : Ie3;
          if (c(g, d) && a.ref === b2.ref) return Zi(a, b2, e2);
        }
        b2.flags |= 1;
        a = Pg(f2, d);
        a.ref = b2.ref;
        a.return = b2;
        return b2.child = a;
      }
      function bj(a, b2, c, d, e2) {
        if (null !== a) {
          var f2 = a.memoizedProps;
          if (Ie3(f2, d) && a.ref === b2.ref) if (dh = false, b2.pendingProps = d = f2, 0 !== (a.lanes & e2)) 0 !== (a.flags & 131072) && (dh = true);
          else return b2.lanes = a.lanes, Zi(a, b2, e2);
        }
        return cj(a, b2, c, d, e2);
      }
      function dj(a, b2, c) {
        var d = b2.pendingProps, e2 = d.children, f2 = null !== a ? a.memoizedState : null;
        if ("hidden" === d.mode) if (0 === (b2.mode & 1)) b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G2(ej, fj), fj |= c;
        else {
          if (0 === (c & 1073741824)) return a = null !== f2 ? f2.baseLanes | c : c, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b2.updateQueue = null, G2(ej, fj), fj |= a, null;
          b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d = null !== f2 ? f2.baseLanes : c;
          G2(ej, fj);
          fj |= d;
        }
        else null !== f2 ? (d = f2.baseLanes | c, b2.memoizedState = null) : d = c, G2(ej, fj), fj |= d;
        Xi(a, b2, e2, c);
        return b2.child;
      }
      function gj(a, b2) {
        var c = b2.ref;
        if (null === a && null !== c || null !== a && a.ref !== c) b2.flags |= 512, b2.flags |= 2097152;
      }
      function cj(a, b2, c, d, e2) {
        var f2 = Zf(c) ? Xf : H.current;
        f2 = Yf(b2, f2);
        ch(b2, e2);
        c = Nh(a, b2, c, d, f2, e2);
        d = Sh();
        if (null !== a && !dh) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, Zi(a, b2, e2);
        I2 && d && vg(b2);
        b2.flags |= 1;
        Xi(a, b2, c, e2);
        return b2.child;
      }
      function hj(a, b2, c, d, e2) {
        if (Zf(c)) {
          var f2 = true;
          cg(b2);
        } else f2 = false;
        ch(b2, e2);
        if (null === b2.stateNode) ij(a, b2), Gi(b2, c, d), Ii(b2, c, d, e2), d = true;
        else if (null === a) {
          var g = b2.stateNode, h = b2.memoizedProps;
          g.props = h;
          var k2 = g.context, l2 = c.contextType;
          "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c) ? Xf : H.current, l2 = Yf(b2, l2));
          var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
          q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && Hi(b2, g, d, l2);
          jh = false;
          var r = b2.memoizedState;
          g.state = r;
          qh(b2, d, g, e2);
          k2 = b2.memoizedState;
          h !== d || r !== k2 || Wf.current || jh ? ("function" === typeof m && (Di(b2, c, m, d), k2 = b2.memoizedState), (h = jh || Fi(b2, c, h, d, r, k2, l2)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d, b2.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b2.flags |= 4194308), d = false);
        } else {
          g = b2.stateNode;
          lh(a, b2);
          h = b2.memoizedProps;
          l2 = b2.type === b2.elementType ? h : Ci(b2.type, h);
          g.props = l2;
          q = b2.pendingProps;
          r = g.context;
          k2 = c.contextType;
          "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c) ? Xf : H.current, k2 = Yf(b2, k2));
          var y2 = c.getDerivedStateFromProps;
          (m = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k2) && Hi(b2, g, d, k2);
          jh = false;
          r = b2.memoizedState;
          g.state = r;
          qh(b2, d, g, e2);
          var n = b2.memoizedState;
          h !== q || r !== n || Wf.current || jh ? ("function" === typeof y2 && (Di(b2, c, y2, d), n = b2.memoizedState), (l2 = jh || Fi(b2, c, l2, d, r, n, k2) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k2)), "function" === typeof g.componentDidUpdate && (b2.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b2.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d, b2.memoizedState = n), g.props = d, g.state = n, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b2.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b2.flags |= 1024), d = false);
        }
        return jj(a, b2, c, d, f2, e2);
      }
      function jj(a, b2, c, d, e2, f2) {
        gj(a, b2);
        var g = 0 !== (b2.flags & 128);
        if (!d && !g) return e2 && dg(b2, c, false), Zi(a, b2, f2);
        d = b2.stateNode;
        Wi.current = b2;
        var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
        b2.flags |= 1;
        null !== a && g ? (b2.child = Ug(b2, a.child, null, f2), b2.child = Ug(b2, null, h, f2)) : Xi(a, b2, h, f2);
        b2.memoizedState = d.state;
        e2 && dg(b2, c, true);
        return b2.child;
      }
      function kj(a) {
        var b2 = a.stateNode;
        b2.pendingContext ? ag(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a, b2.context, false);
        yh(a, b2.containerInfo);
      }
      function lj(a, b2, c, d, e2) {
        Ig();
        Jg(e2);
        b2.flags |= 256;
        Xi(a, b2, c, d);
        return b2.child;
      }
      var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
      function nj(a) {
        return { baseLanes: a, cachePool: null, transitions: null };
      }
      function oj(a, b2, c) {
        var d = b2.pendingProps, e2 = L2.current, f2 = false, g = 0 !== (b2.flags & 128), h;
        (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e2 & 2));
        if (h) f2 = true, b2.flags &= -129;
        else if (null === a || null !== a.memoizedState) e2 |= 1;
        G2(L2, e2 & 1);
        if (null === a) {
          Eg(b2);
          a = b2.memoizedState;
          if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
          g = d.children;
          a = d.fallback;
          return f2 ? (d = b2.mode, f2 = b2.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = pj(g, d, 0, null), a = Tg(a, d, c, null), f2.return = b2, a.return = b2, f2.sibling = a, b2.child = f2, b2.child.memoizedState = nj(c), b2.memoizedState = mj, a) : qj(b2, g);
        }
        e2 = a.memoizedState;
        if (null !== e2 && (h = e2.dehydrated, null !== h)) return rj(a, b2, g, d, h, e2, c);
        if (f2) {
          f2 = d.fallback;
          g = b2.mode;
          e2 = a.child;
          h = e2.sibling;
          var k2 = { mode: "hidden", children: d.children };
          0 === (g & 1) && b2.child !== e2 ? (d = b2.child, d.childLanes = 0, d.pendingProps = k2, b2.deletions = null) : (d = Pg(e2, k2), d.subtreeFlags = e2.subtreeFlags & 14680064);
          null !== h ? f2 = Pg(h, f2) : (f2 = Tg(f2, g, c, null), f2.flags |= 2);
          f2.return = b2;
          d.return = b2;
          d.sibling = f2;
          b2.child = d;
          d = f2;
          f2 = b2.child;
          g = a.child.memoizedState;
          g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
          f2.memoizedState = g;
          f2.childLanes = a.childLanes & ~c;
          b2.memoizedState = mj;
          return d;
        }
        f2 = a.child;
        a = f2.sibling;
        d = Pg(f2, { mode: "visible", children: d.children });
        0 === (b2.mode & 1) && (d.lanes = c);
        d.return = b2;
        d.sibling = null;
        null !== a && (c = b2.deletions, null === c ? (b2.deletions = [a], b2.flags |= 16) : c.push(a));
        b2.child = d;
        b2.memoizedState = null;
        return d;
      }
      function qj(a, b2) {
        b2 = pj({ mode: "visible", children: b2 }, a.mode, 0, null);
        b2.return = a;
        return a.child = b2;
      }
      function sj(a, b2, c, d) {
        null !== d && Jg(d);
        Ug(b2, a.child, null, c);
        a = qj(b2, b2.pendingProps.children);
        a.flags |= 2;
        b2.memoizedState = null;
        return a;
      }
      function rj(a, b2, c, d, e2, f2, g) {
        if (c) {
          if (b2.flags & 256) return b2.flags &= -257, d = Ki(Error(p(422))), sj(a, b2, g, d);
          if (null !== b2.memoizedState) return b2.child = a.child, b2.flags |= 128, null;
          f2 = d.fallback;
          e2 = b2.mode;
          d = pj({ mode: "visible", children: d.children }, e2, 0, null);
          f2 = Tg(f2, e2, g, null);
          f2.flags |= 2;
          d.return = b2;
          f2.return = b2;
          d.sibling = f2;
          b2.child = d;
          0 !== (b2.mode & 1) && Ug(b2, a.child, null, g);
          b2.child.memoizedState = nj(g);
          b2.memoizedState = mj;
          return f2;
        }
        if (0 === (b2.mode & 1)) return sj(a, b2, g, null);
        if ("$!" === e2.data) {
          d = e2.nextSibling && e2.nextSibling.dataset;
          if (d) var h = d.dgst;
          d = h;
          f2 = Error(p(419));
          d = Ki(f2, d, void 0);
          return sj(a, b2, g, d);
        }
        h = 0 !== (g & a.childLanes);
        if (dh || h) {
          d = Q;
          if (null !== d) {
            switch (g & -g) {
              case 4:
                e2 = 2;
                break;
              case 16:
                e2 = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                e2 = 32;
                break;
              case 536870912:
                e2 = 268435456;
                break;
              default:
                e2 = 0;
            }
            e2 = 0 !== (e2 & (d.suspendedLanes | g)) ? 0 : e2;
            0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, ih(a, e2), gi(d, a, e2, -1));
          }
          tj();
          d = Ki(Error(p(421)));
          return sj(a, b2, g, d);
        }
        if ("$?" === e2.data) return b2.flags |= 128, b2.child = a.child, b2 = uj.bind(null, a), e2._reactRetry = b2, null;
        a = f2.treeContext;
        yg = Lf(e2.nextSibling);
        xg = b2;
        I2 = true;
        zg = null;
        null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b2);
        b2 = qj(b2, d.children);
        b2.flags |= 4096;
        return b2;
      }
      function vj(a, b2, c) {
        a.lanes |= b2;
        var d = a.alternate;
        null !== d && (d.lanes |= b2);
        bh(a.return, b2, c);
      }
      function wj(a, b2, c, d, e2) {
        var f2 = a.memoizedState;
        null === f2 ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e2);
      }
      function xj(a, b2, c) {
        var d = b2.pendingProps, e2 = d.revealOrder, f2 = d.tail;
        Xi(a, b2, d.children, c);
        d = L2.current;
        if (0 !== (d & 2)) d = d & 1 | 2, b2.flags |= 128;
        else {
          if (null !== a && 0 !== (a.flags & 128)) a: for (a = b2.child; null !== a; ) {
            if (13 === a.tag) null !== a.memoizedState && vj(a, c, b2);
            else if (19 === a.tag) vj(a, c, b2);
            else if (null !== a.child) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === b2) break a;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === b2) break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
          d &= 1;
        }
        G2(L2, d);
        if (0 === (b2.mode & 1)) b2.memoizedState = null;
        else switch (e2) {
          case "forwards":
            c = b2.child;
            for (e2 = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e2 = c), c = c.sibling;
            c = e2;
            null === c ? (e2 = b2.child, b2.child = null) : (e2 = c.sibling, c.sibling = null);
            wj(b2, false, e2, c, f2);
            break;
          case "backwards":
            c = null;
            e2 = b2.child;
            for (b2.child = null; null !== e2; ) {
              a = e2.alternate;
              if (null !== a && null === Ch(a)) {
                b2.child = e2;
                break;
              }
              a = e2.sibling;
              e2.sibling = c;
              c = e2;
              e2 = a;
            }
            wj(b2, true, c, null, f2);
            break;
          case "together":
            wj(b2, false, null, null, void 0);
            break;
          default:
            b2.memoizedState = null;
        }
        return b2.child;
      }
      function ij(a, b2) {
        0 === (b2.mode & 1) && null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
      }
      function Zi(a, b2, c) {
        null !== a && (b2.dependencies = a.dependencies);
        rh |= b2.lanes;
        if (0 === (c & b2.childLanes)) return null;
        if (null !== a && b2.child !== a.child) throw Error(p(153));
        if (null !== b2.child) {
          a = b2.child;
          c = Pg(a, a.pendingProps);
          b2.child = c;
          for (c.return = b2; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b2;
          c.sibling = null;
        }
        return b2.child;
      }
      function yj(a, b2, c) {
        switch (b2.tag) {
          case 3:
            kj(b2);
            Ig();
            break;
          case 5:
            Ah(b2);
            break;
          case 1:
            Zf(b2.type) && cg(b2);
            break;
          case 4:
            yh(b2, b2.stateNode.containerInfo);
            break;
          case 10:
            var d = b2.type._context, e2 = b2.memoizedProps.value;
            G2(Wg, d._currentValue);
            d._currentValue = e2;
            break;
          case 13:
            d = b2.memoizedState;
            if (null !== d) {
              if (null !== d.dehydrated) return G2(L2, L2.current & 1), b2.flags |= 128, null;
              if (0 !== (c & b2.child.childLanes)) return oj(a, b2, c);
              G2(L2, L2.current & 1);
              a = Zi(a, b2, c);
              return null !== a ? a.sibling : null;
            }
            G2(L2, L2.current & 1);
            break;
          case 19:
            d = 0 !== (c & b2.childLanes);
            if (0 !== (a.flags & 128)) {
              if (d) return xj(a, b2, c);
              b2.flags |= 128;
            }
            e2 = b2.memoizedState;
            null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
            G2(L2, L2.current);
            if (d) break;
            else return null;
          case 22:
          case 23:
            return b2.lanes = 0, dj(a, b2, c);
        }
        return Zi(a, b2, c);
      }
      var zj;
      var Aj;
      var Bj;
      var Cj;
      zj = function(a, b2) {
        for (var c = b2.child; null !== c; ) {
          if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
          else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
          }
          if (c === b2) break;
          for (; null === c.sibling; ) {
            if (null === c.return || c.return === b2) return;
            c = c.return;
          }
          c.sibling.return = c.return;
          c = c.sibling;
        }
      };
      Aj = function() {
      };
      Bj = function(a, b2, c, d) {
        var e2 = a.memoizedProps;
        if (e2 !== d) {
          a = b2.stateNode;
          xh(uh.current);
          var f2 = null;
          switch (c) {
            case "input":
              e2 = Ya2(a, e2);
              d = Ya2(a, d);
              f2 = [];
              break;
            case "select":
              e2 = A3({}, e2, { value: void 0 });
              d = A3({}, d, { value: void 0 });
              f2 = [];
              break;
            case "textarea":
              e2 = gb(a, e2);
              d = gb(a, d);
              f2 = [];
              break;
            default:
              "function" !== typeof e2.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
          }
          ub(c, d);
          var g;
          c = null;
          for (l2 in e2) if (!d.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2]) if ("style" === l2) {
            var h = e2[l2];
            for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
          } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea2.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
          for (l2 in d) {
            var k2 = d[l2];
            h = null != e2 ? e2[l2] : void 0;
            if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h)) if ("style" === l2) if (h) {
              for (g in h) !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
              for (g in k2) k2.hasOwnProperty(g) && h[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
            } else c || (f2 || (f2 = []), f2.push(
              l2,
              c
            )), c = k2;
            else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea2.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
          }
          c && (f2 = f2 || []).push("style", c);
          var l2 = f2;
          if (b2.updateQueue = l2) b2.flags |= 4;
        }
      };
      Cj = function(a, b2, c, d) {
        c !== d && (b2.flags |= 4);
      };
      function Dj(a, b2) {
        if (!I2) switch (a.tailMode) {
          case "hidden":
            b2 = a.tail;
            for (var c = null; null !== b2; ) null !== b2.alternate && (c = b2), b2 = b2.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
          case "collapsed":
            c = a.tail;
            for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
            null === d ? b2 || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
        }
      }
      function S(a) {
        var b2 = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
        if (b2) for (var e2 = a.child; null !== e2; ) c |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags & 14680064, d |= e2.flags & 14680064, e2.return = a, e2 = e2.sibling;
        else for (e2 = a.child; null !== e2; ) c |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags, d |= e2.flags, e2.return = a, e2 = e2.sibling;
        a.subtreeFlags |= d;
        a.childLanes = c;
        return b2;
      }
      function Ej(a, b2, c) {
        var d = b2.pendingProps;
        wg(b2);
        switch (b2.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return S(b2), null;
          case 1:
            return Zf(b2.type) && $f(), S(b2), null;
          case 3:
            d = b2.stateNode;
            zh();
            E3(Wf);
            E3(H);
            Eh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a || null === a.child) Gg(b2) ? b2.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Fj(zg), zg = null));
            Aj(a, b2);
            S(b2);
            return null;
          case 5:
            Bh(b2);
            var e2 = xh(wh.current);
            c = b2.type;
            if (null !== a && null != b2.stateNode) Bj(a, b2, c, d, e2), a.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
            else {
              if (!d) {
                if (null === b2.stateNode) throw Error(p(166));
                S(b2);
                return null;
              }
              a = xh(uh.current);
              if (Gg(b2)) {
                d = b2.stateNode;
                c = b2.type;
                var f2 = b2.memoizedProps;
                d[Of] = b2;
                d[Pf] = f2;
                a = 0 !== (b2.mode & 1);
                switch (c) {
                  case "dialog":
                    D("cancel", d);
                    D("close", d);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", d);
                    break;
                  case "video":
                  case "audio":
                    for (e2 = 0; e2 < lf.length; e2++) D(lf[e2], d);
                    break;
                  case "source":
                    D("error", d);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      d
                    );
                    D("load", d);
                    break;
                  case "details":
                    D("toggle", d);
                    break;
                  case "input":
                    Za2(d, f2);
                    D("invalid", d);
                    break;
                  case "select":
                    d._wrapperState = { wasMultiple: !!f2.multiple };
                    D("invalid", d);
                    break;
                  case "textarea":
                    hb(d, f2), D("invalid", d);
                }
                ub(c, f2);
                e2 = null;
                for (var g in f2) if (f2.hasOwnProperty(g)) {
                  var h = f2[g];
                  "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a), e2 = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
                    d.textContent,
                    h,
                    a
                  ), e2 = ["children", "" + h]) : ea2.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
                }
                switch (c) {
                  case "input":
                    Va2(d);
                    db(d, f2, true);
                    break;
                  case "textarea":
                    Va2(d);
                    jb(d);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof f2.onClick && (d.onclick = Bf);
                }
                d = e2;
                b2.updateQueue = d;
                null !== d && (b2.flags |= 4);
              } else {
                g = 9 === e2.nodeType ? e2 : e2.ownerDocument;
                "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
                "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                a[Of] = b2;
                a[Pf] = d;
                zj(a, b2, false, false);
                b2.stateNode = a;
                a: {
                  g = vb(c, d);
                  switch (c) {
                    case "dialog":
                      D("cancel", a);
                      D("close", a);
                      e2 = d;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D("load", a);
                      e2 = d;
                      break;
                    case "video":
                    case "audio":
                      for (e2 = 0; e2 < lf.length; e2++) D(lf[e2], a);
                      e2 = d;
                      break;
                    case "source":
                      D("error", a);
                      e2 = d;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D(
                        "error",
                        a
                      );
                      D("load", a);
                      e2 = d;
                      break;
                    case "details":
                      D("toggle", a);
                      e2 = d;
                      break;
                    case "input":
                      Za2(a, d);
                      e2 = Ya2(a, d);
                      D("invalid", a);
                      break;
                    case "option":
                      e2 = d;
                      break;
                    case "select":
                      a._wrapperState = { wasMultiple: !!d.multiple };
                      e2 = A3({}, d, { value: void 0 });
                      D("invalid", a);
                      break;
                    case "textarea":
                      hb(a, d);
                      e2 = gb(a, d);
                      D("invalid", a);
                      break;
                    default:
                      e2 = d;
                  }
                  ub(c, e2);
                  h = e2;
                  for (f2 in h) if (h.hasOwnProperty(f2)) {
                    var k2 = h[f2];
                    "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea2.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta2(a, f2, k2, g));
                  }
                  switch (c) {
                    case "input":
                      Va2(a);
                      db(a, d, false);
                      break;
                    case "textarea":
                      Va2(a);
                      jb(a);
                      break;
                    case "option":
                      null != d.value && a.setAttribute("value", "" + Sa2(d.value));
                      break;
                    case "select":
                      a.multiple = !!d.multiple;
                      f2 = d.value;
                      null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                        a,
                        !!d.multiple,
                        d.defaultValue,
                        true
                      );
                      break;
                    default:
                      "function" === typeof e2.onClick && (a.onclick = Bf);
                  }
                  switch (c) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d = !!d.autoFocus;
                      break a;
                    case "img":
                      d = true;
                      break a;
                    default:
                      d = false;
                  }
                }
                d && (b2.flags |= 4);
              }
              null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
            }
            S(b2);
            return null;
          case 6:
            if (a && null != b2.stateNode) Cj(a, b2, a.memoizedProps, d);
            else {
              if ("string" !== typeof d && null === b2.stateNode) throw Error(p(166));
              c = xh(wh.current);
              xh(uh.current);
              if (Gg(b2)) {
                d = b2.stateNode;
                c = b2.memoizedProps;
                d[Of] = b2;
                if (f2 = d.nodeValue !== c) {
                  if (a = xg, null !== a) switch (a.tag) {
                    case 3:
                      Af(d.nodeValue, c, 0 !== (a.mode & 1));
                      break;
                    case 5:
                      true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  }
                }
                f2 && (b2.flags |= 4);
              } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b2, b2.stateNode = d;
            }
            S(b2);
            return null;
          case 13:
            E3(L2);
            d = b2.memoizedState;
            if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
              if (I2 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128)) Hg(), Ig(), b2.flags |= 98560, f2 = false;
              else if (f2 = Gg(b2), null !== d && null !== d.dehydrated) {
                if (null === a) {
                  if (!f2) throw Error(p(318));
                  f2 = b2.memoizedState;
                  f2 = null !== f2 ? f2.dehydrated : null;
                  if (!f2) throw Error(p(317));
                  f2[Of] = b2;
                } else Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
                S(b2);
                f2 = false;
              } else null !== zg && (Fj(zg), zg = null), f2 = true;
              if (!f2) return b2.flags & 65536 ? b2 : null;
            }
            if (0 !== (b2.flags & 128)) return b2.lanes = c, b2;
            d = null !== d;
            d !== (null !== a && null !== a.memoizedState) && d && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a || 0 !== (L2.current & 1) ? 0 === T2 && (T2 = 3) : tj()));
            null !== b2.updateQueue && (b2.flags |= 4);
            S(b2);
            return null;
          case 4:
            return zh(), Aj(a, b2), null === a && sf(b2.stateNode.containerInfo), S(b2), null;
          case 10:
            return ah(b2.type._context), S(b2), null;
          case 17:
            return Zf(b2.type) && $f(), S(b2), null;
          case 19:
            E3(L2);
            f2 = b2.memoizedState;
            if (null === f2) return S(b2), null;
            d = 0 !== (b2.flags & 128);
            g = f2.rendering;
            if (null === g) if (d) Dj(f2, false);
            else {
              if (0 !== T2 || null !== a && 0 !== (a.flags & 128)) for (a = b2.child; null !== a; ) {
                g = Ch(a);
                if (null !== g) {
                  b2.flags |= 128;
                  Dj(f2, false);
                  d = g.updateQueue;
                  null !== d && (b2.updateQueue = d, b2.flags |= 4);
                  b2.subtreeFlags = 0;
                  d = c;
                  for (c = b2.child; null !== c; ) f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                  G2(L2, L2.current & 1 | 2);
                  return b2.child;
                }
                a = a.sibling;
              }
              null !== f2.tail && B3() > Gj && (b2.flags |= 128, d = true, Dj(f2, false), b2.lanes = 4194304);
            }
            else {
              if (!d) if (a = Ch(g), null !== a) {
                if (b2.flags |= 128, d = true, c = a.updateQueue, null !== c && (b2.updateQueue = c, b2.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I2) return S(b2), null;
              } else 2 * B3() - f2.renderingStartTime > Gj && 1073741824 !== c && (b2.flags |= 128, d = true, Dj(f2, false), b2.lanes = 4194304);
              f2.isBackwards ? (g.sibling = b2.child, b2.child = g) : (c = f2.last, null !== c ? c.sibling = g : b2.child = g, f2.last = g);
            }
            if (null !== f2.tail) return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B3(), b2.sibling = null, c = L2.current, G2(L2, d ? c & 1 | 2 : c & 1), b2;
            S(b2);
            return null;
          case 22:
          case 23:
            return Hj(), d = null !== b2.memoizedState, null !== a && null !== a.memoizedState !== d && (b2.flags |= 8192), d && 0 !== (b2.mode & 1) ? 0 !== (fj & 1073741824) && (S(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S(b2), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p(156, b2.tag));
      }
      function Ij(a, b2) {
        wg(b2);
        switch (b2.tag) {
          case 1:
            return Zf(b2.type) && $f(), a = b2.flags, a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
          case 3:
            return zh(), E3(Wf), E3(H), Eh(), a = b2.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b2.flags = a & -65537 | 128, b2) : null;
          case 5:
            return Bh(b2), null;
          case 13:
            E3(L2);
            a = b2.memoizedState;
            if (null !== a && null !== a.dehydrated) {
              if (null === b2.alternate) throw Error(p(340));
              Ig();
            }
            a = b2.flags;
            return a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
          case 19:
            return E3(L2), null;
          case 4:
            return zh(), null;
          case 10:
            return ah(b2.type._context), null;
          case 22:
          case 23:
            return Hj(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Jj = false;
      var U3 = false;
      var Kj = "function" === typeof WeakSet ? WeakSet : Set;
      var V2 = null;
      function Lj(a, b2) {
        var c = a.ref;
        if (null !== c) if ("function" === typeof c) try {
          c(null);
        } catch (d) {
          W2(a, b2, d);
        }
        else c.current = null;
      }
      function Mj(a, b2, c) {
        try {
          c();
        } catch (d) {
          W2(a, b2, d);
        }
      }
      var Nj = false;
      function Oj(a, b2) {
        Cf = dd;
        a = Me2();
        if (Ne3(a)) {
          if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
          else a: {
            c = (c = a.ownerDocument) && c.defaultView || window;
            var d = c.getSelection && c.getSelection();
            if (d && 0 !== d.rangeCount) {
              c = d.anchorNode;
              var e2 = d.anchorOffset, f2 = d.focusNode;
              d = d.focusOffset;
              try {
                c.nodeType, f2.nodeType;
              } catch (F2) {
                c = null;
                break a;
              }
              var g = 0, h = -1, k2 = -1, l2 = 0, m = 0, q = a, r = null;
              b: for (; ; ) {
                for (var y2; ; ) {
                  q !== c || 0 !== e2 && 3 !== q.nodeType || (h = g + e2);
                  q !== f2 || 0 !== d && 3 !== q.nodeType || (k2 = g + d);
                  3 === q.nodeType && (g += q.nodeValue.length);
                  if (null === (y2 = q.firstChild)) break;
                  r = q;
                  q = y2;
                }
                for (; ; ) {
                  if (q === a) break b;
                  r === c && ++l2 === e2 && (h = g);
                  r === f2 && ++m === d && (k2 = g);
                  if (null !== (y2 = q.nextSibling)) break;
                  q = r;
                  r = q.parentNode;
                }
                q = y2;
              }
              c = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
            } else c = null;
          }
          c = c || { start: 0, end: 0 };
        } else c = null;
        Df = { focusedElem: a, selectionRange: c };
        dd = false;
        for (V2 = b2; null !== V2; ) if (b2 = V2, a = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a) a.return = b2, V2 = a;
        else for (; null !== V2; ) {
          b2 = V2;
          try {
            var n = b2.alternate;
            if (0 !== (b2.flags & 1024)) switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n) {
                  var t = n.memoizedProps, J2 = n.memoizedState, x = b2.stateNode, w2 = x.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t : Ci(b2.type, t), J2);
                  x.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u = b2.stateNode.containerInfo;
                1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
          } catch (F2) {
            W2(b2, b2.return, F2);
          }
          a = b2.sibling;
          if (null !== a) {
            a.return = b2.return;
            V2 = a;
            break;
          }
          V2 = b2.return;
        }
        n = Nj;
        Nj = false;
        return n;
      }
      function Pj(a, b2, c) {
        var d = b2.updateQueue;
        d = null !== d ? d.lastEffect : null;
        if (null !== d) {
          var e2 = d = d.next;
          do {
            if ((e2.tag & a) === a) {
              var f2 = e2.destroy;
              e2.destroy = void 0;
              void 0 !== f2 && Mj(b2, c, f2);
            }
            e2 = e2.next;
          } while (e2 !== d);
        }
      }
      function Qj(a, b2) {
        b2 = b2.updateQueue;
        b2 = null !== b2 ? b2.lastEffect : null;
        if (null !== b2) {
          var c = b2 = b2.next;
          do {
            if ((c.tag & a) === a) {
              var d = c.create;
              c.destroy = d();
            }
            c = c.next;
          } while (c !== b2);
        }
      }
      function Rj(a) {
        var b2 = a.ref;
        if (null !== b2) {
          var c = a.stateNode;
          switch (a.tag) {
            case 5:
              a = c;
              break;
            default:
              a = c;
          }
          "function" === typeof b2 ? b2(a) : b2.current = a;
        }
      }
      function Sj(a) {
        var b2 = a.alternate;
        null !== b2 && (a.alternate = null, Sj(b2));
        a.child = null;
        a.deletions = null;
        a.sibling = null;
        5 === a.tag && (b2 = a.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
        a.stateNode = null;
        a.return = null;
        a.dependencies = null;
        a.memoizedProps = null;
        a.memoizedState = null;
        a.pendingProps = null;
        a.stateNode = null;
        a.updateQueue = null;
      }
      function Tj(a) {
        return 5 === a.tag || 3 === a.tag || 4 === a.tag;
      }
      function Uj(a) {
        a: for (; ; ) {
          for (; null === a.sibling; ) {
            if (null === a.return || Tj(a.return)) return null;
            a = a.return;
          }
          a.sibling.return = a.return;
          for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
            if (a.flags & 2) continue a;
            if (null === a.child || 4 === a.tag) continue a;
            else a.child.return = a, a = a.child;
          }
          if (!(a.flags & 2)) return a.stateNode;
        }
      }
      function Vj(a, b2, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b2 ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b2) : c.insertBefore(a, b2) : (8 === c.nodeType ? (b2 = c.parentNode, b2.insertBefore(a, c)) : (b2 = c, b2.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b2.onclick || (b2.onclick = Bf));
        else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b2, c), a = a.sibling; null !== a; ) Vj(a, b2, c), a = a.sibling;
      }
      function Wj(a, b2, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b2 ? c.insertBefore(a, b2) : c.appendChild(a);
        else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b2, c), a = a.sibling; null !== a; ) Wj(a, b2, c), a = a.sibling;
      }
      var X2 = null;
      var Xj = false;
      function Yj(a, b2, c) {
        for (c = c.child; null !== c; ) Zj(a, b2, c), c = c.sibling;
      }
      function Zj(a, b2, c) {
        if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
          lc.onCommitFiberUnmount(kc, c);
        } catch (h) {
        }
        switch (c.tag) {
          case 5:
            U3 || Lj(c, b2);
          case 6:
            var d = X2, e2 = Xj;
            X2 = null;
            Yj(a, b2, c);
            X2 = d;
            Xj = e2;
            null !== X2 && (Xj ? (a = X2, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X2.removeChild(c.stateNode));
            break;
          case 18:
            null !== X2 && (Xj ? (a = X2, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X2, c.stateNode));
            break;
          case 4:
            d = X2;
            e2 = Xj;
            X2 = c.stateNode.containerInfo;
            Xj = true;
            Yj(a, b2, c);
            X2 = d;
            Xj = e2;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!U3 && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
              e2 = d = d.next;
              do {
                var f2 = e2, g = f2.destroy;
                f2 = f2.tag;
                void 0 !== g && (0 !== (f2 & 2) ? Mj(c, b2, g) : 0 !== (f2 & 4) && Mj(c, b2, g));
                e2 = e2.next;
              } while (e2 !== d);
            }
            Yj(a, b2, c);
            break;
          case 1:
            if (!U3 && (Lj(c, b2), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
              d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
            } catch (h) {
              W2(c, b2, h);
            }
            Yj(a, b2, c);
            break;
          case 21:
            Yj(a, b2, c);
            break;
          case 22:
            c.mode & 1 ? (U3 = (d = U3) || null !== c.memoizedState, Yj(a, b2, c), U3 = d) : Yj(a, b2, c);
            break;
          default:
            Yj(a, b2, c);
        }
      }
      function ak(a) {
        var b2 = a.updateQueue;
        if (null !== b2) {
          a.updateQueue = null;
          var c = a.stateNode;
          null === c && (c = a.stateNode = new Kj());
          b2.forEach(function(b3) {
            var d = bk.bind(null, a, b3);
            c.has(b3) || (c.add(b3), b3.then(d, d));
          });
        }
      }
      function ck(a, b2) {
        var c = b2.deletions;
        if (null !== c) for (var d = 0; d < c.length; d++) {
          var e2 = c[d];
          try {
            var f2 = a, g = b2, h = g;
            a: for (; null !== h; ) {
              switch (h.tag) {
                case 5:
                  X2 = h.stateNode;
                  Xj = false;
                  break a;
                case 3:
                  X2 = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
                case 4:
                  X2 = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
              }
              h = h.return;
            }
            if (null === X2) throw Error(p(160));
            Zj(f2, g, e2);
            X2 = null;
            Xj = false;
            var k2 = e2.alternate;
            null !== k2 && (k2.return = null);
            e2.return = null;
          } catch (l2) {
            W2(e2, b2, l2);
          }
        }
        if (b2.subtreeFlags & 12854) for (b2 = b2.child; null !== b2; ) dk(b2, a), b2 = b2.sibling;
      }
      function dk(a, b2) {
        var c = a.alternate, d = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ck(b2, a);
            ek(a);
            if (d & 4) {
              try {
                Pj(3, a, a.return), Qj(3, a);
              } catch (t) {
                W2(a, a.return, t);
              }
              try {
                Pj(5, a, a.return);
              } catch (t) {
                W2(a, a.return, t);
              }
            }
            break;
          case 1:
            ck(b2, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            break;
          case 5:
            ck(b2, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            if (a.flags & 32) {
              var e2 = a.stateNode;
              try {
                ob(e2, "");
              } catch (t) {
                W2(a, a.return, t);
              }
            }
            if (d & 4 && (e2 = a.stateNode, null != e2)) {
              var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h = a.type, k2 = a.updateQueue;
              a.updateQueue = null;
              if (null !== k2) try {
                "input" === h && "radio" === f2.type && null != f2.name && ab(e2, f2);
                vb(h, g);
                var l2 = vb(h, f2);
                for (g = 0; g < k2.length; g += 2) {
                  var m = k2[g], q = k2[g + 1];
                  "style" === m ? sb(e2, q) : "dangerouslySetInnerHTML" === m ? nb(e2, q) : "children" === m ? ob(e2, q) : ta2(e2, m, q, l2);
                }
                switch (h) {
                  case "input":
                    bb(e2, f2);
                    break;
                  case "textarea":
                    ib(e2, f2);
                    break;
                  case "select":
                    var r = e2._wrapperState.wasMultiple;
                    e2._wrapperState.wasMultiple = !!f2.multiple;
                    var y2 = f2.value;
                    null != y2 ? fb(e2, !!f2.multiple, y2, false) : r !== !!f2.multiple && (null != f2.defaultValue ? fb(
                      e2,
                      !!f2.multiple,
                      f2.defaultValue,
                      true
                    ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
                }
                e2[Pf] = f2;
              } catch (t) {
                W2(a, a.return, t);
              }
            }
            break;
          case 6:
            ck(b2, a);
            ek(a);
            if (d & 4) {
              if (null === a.stateNode) throw Error(p(162));
              e2 = a.stateNode;
              f2 = a.memoizedProps;
              try {
                e2.nodeValue = f2;
              } catch (t) {
                W2(a, a.return, t);
              }
            }
            break;
          case 3:
            ck(b2, a);
            ek(a);
            if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
              bd(b2.containerInfo);
            } catch (t) {
              W2(a, a.return, t);
            }
            break;
          case 4:
            ck(b2, a);
            ek(a);
            break;
          case 13:
            ck(b2, a);
            ek(a);
            e2 = a.child;
            e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (fk = B3()));
            d & 4 && ak(a);
            break;
          case 22:
            m = null !== c && null !== c.memoizedState;
            a.mode & 1 ? (U3 = (l2 = U3) || m, ck(b2, a), U3 = l2) : ck(b2, a);
            ek(a);
            if (d & 8192) {
              l2 = null !== a.memoizedState;
              if ((a.stateNode.isHidden = l2) && !m && 0 !== (a.mode & 1)) for (V2 = a, m = a.child; null !== m; ) {
                for (q = V2 = m; null !== V2; ) {
                  r = V2;
                  y2 = r.child;
                  switch (r.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Pj(4, r, r.return);
                      break;
                    case 1:
                      Lj(r, r.return);
                      var n = r.stateNode;
                      if ("function" === typeof n.componentWillUnmount) {
                        d = r;
                        c = r.return;
                        try {
                          b2 = d, n.props = b2.memoizedProps, n.state = b2.memoizedState, n.componentWillUnmount();
                        } catch (t) {
                          W2(d, c, t);
                        }
                      }
                      break;
                    case 5:
                      Lj(r, r.return);
                      break;
                    case 22:
                      if (null !== r.memoizedState) {
                        gk(q);
                        continue;
                      }
                  }
                  null !== y2 ? (y2.return = r, V2 = y2) : gk(q);
                }
                m = m.sibling;
              }
              a: for (m = null, q = a; ; ) {
                if (5 === q.tag) {
                  if (null === m) {
                    m = q;
                    try {
                      e2 = q.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q.stateNode, k2 = q.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g));
                    } catch (t) {
                      W2(a, a.return, t);
                    }
                  }
                } else if (6 === q.tag) {
                  if (null === m) try {
                    q.stateNode.nodeValue = l2 ? "" : q.memoizedProps;
                  } catch (t) {
                    W2(a, a.return, t);
                  }
                } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                  q.child.return = q;
                  q = q.child;
                  continue;
                }
                if (q === a) break a;
                for (; null === q.sibling; ) {
                  if (null === q.return || q.return === a) break a;
                  m === q && (m = null);
                  q = q.return;
                }
                m === q && (m = null);
                q.sibling.return = q.return;
                q = q.sibling;
              }
            }
            break;
          case 19:
            ck(b2, a);
            ek(a);
            d & 4 && ak(a);
            break;
          case 21:
            break;
          default:
            ck(
              b2,
              a
            ), ek(a);
        }
      }
      function ek(a) {
        var b2 = a.flags;
        if (b2 & 2) {
          try {
            a: {
              for (var c = a.return; null !== c; ) {
                if (Tj(c)) {
                  var d = c;
                  break a;
                }
                c = c.return;
              }
              throw Error(p(160));
            }
            switch (d.tag) {
              case 5:
                var e2 = d.stateNode;
                d.flags & 32 && (ob(e2, ""), d.flags &= -33);
                var f2 = Uj(a);
                Wj(a, f2, e2);
                break;
              case 3:
              case 4:
                var g = d.stateNode.containerInfo, h = Uj(a);
                Vj(a, h, g);
                break;
              default:
                throw Error(p(161));
            }
          } catch (k2) {
            W2(a, a.return, k2);
          }
          a.flags &= -3;
        }
        b2 & 4096 && (a.flags &= -4097);
      }
      function hk(a, b2, c) {
        V2 = a;
        ik(a, b2, c);
      }
      function ik(a, b2, c) {
        for (var d = 0 !== (a.mode & 1); null !== V2; ) {
          var e2 = V2, f2 = e2.child;
          if (22 === e2.tag && d) {
            var g = null !== e2.memoizedState || Jj;
            if (!g) {
              var h = e2.alternate, k2 = null !== h && null !== h.memoizedState || U3;
              h = Jj;
              var l2 = U3;
              Jj = g;
              if ((U3 = k2) && !l2) for (V2 = e2; null !== V2; ) g = V2, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e2) : null !== k2 ? (k2.return = g, V2 = k2) : jk(e2);
              for (; null !== f2; ) V2 = f2, ik(f2, b2, c), f2 = f2.sibling;
              V2 = e2;
              Jj = h;
              U3 = l2;
            }
            kk(a, b2, c);
          } else 0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V2 = f2) : kk(a, b2, c);
        }
      }
      function kk(a) {
        for (; null !== V2; ) {
          var b2 = V2;
          if (0 !== (b2.flags & 8772)) {
            var c = b2.alternate;
            try {
              if (0 !== (b2.flags & 8772)) switch (b2.tag) {
                case 0:
                case 11:
                case 15:
                  U3 || Qj(5, b2);
                  break;
                case 1:
                  var d = b2.stateNode;
                  if (b2.flags & 4 && !U3) if (null === c) d.componentDidMount();
                  else {
                    var e2 = b2.elementType === b2.type ? c.memoizedProps : Ci(b2.type, c.memoizedProps);
                    d.componentDidUpdate(e2, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                  }
                  var f2 = b2.updateQueue;
                  null !== f2 && sh(b2, f2, d);
                  break;
                case 3:
                  var g = b2.updateQueue;
                  if (null !== g) {
                    c = null;
                    if (null !== b2.child) switch (b2.child.tag) {
                      case 5:
                        c = b2.child.stateNode;
                        break;
                      case 1:
                        c = b2.child.stateNode;
                    }
                    sh(b2, g, c);
                  }
                  break;
                case 5:
                  var h = b2.stateNode;
                  if (null === c && b2.flags & 4) {
                    c = h;
                    var k2 = b2.memoizedProps;
                    switch (b2.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k2.autoFocus && c.focus();
                        break;
                      case "img":
                        k2.src && (c.src = k2.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (null === b2.memoizedState) {
                    var l2 = b2.alternate;
                    if (null !== l2) {
                      var m = l2.memoizedState;
                      if (null !== m) {
                        var q = m.dehydrated;
                        null !== q && bd(q);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(p(163));
              }
              U3 || b2.flags & 512 && Rj(b2);
            } catch (r) {
              W2(b2, b2.return, r);
            }
          }
          if (b2 === a) {
            V2 = null;
            break;
          }
          c = b2.sibling;
          if (null !== c) {
            c.return = b2.return;
            V2 = c;
            break;
          }
          V2 = b2.return;
        }
      }
      function gk(a) {
        for (; null !== V2; ) {
          var b2 = V2;
          if (b2 === a) {
            V2 = null;
            break;
          }
          var c = b2.sibling;
          if (null !== c) {
            c.return = b2.return;
            V2 = c;
            break;
          }
          V2 = b2.return;
        }
      }
      function jk(a) {
        for (; null !== V2; ) {
          var b2 = V2;
          try {
            switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                var c = b2.return;
                try {
                  Qj(4, b2);
                } catch (k2) {
                  W2(b2, c, k2);
                }
                break;
              case 1:
                var d = b2.stateNode;
                if ("function" === typeof d.componentDidMount) {
                  var e2 = b2.return;
                  try {
                    d.componentDidMount();
                  } catch (k2) {
                    W2(b2, e2, k2);
                  }
                }
                var f2 = b2.return;
                try {
                  Rj(b2);
                } catch (k2) {
                  W2(b2, f2, k2);
                }
                break;
              case 5:
                var g = b2.return;
                try {
                  Rj(b2);
                } catch (k2) {
                  W2(b2, g, k2);
                }
            }
          } catch (k2) {
            W2(b2, b2.return, k2);
          }
          if (b2 === a) {
            V2 = null;
            break;
          }
          var h = b2.sibling;
          if (null !== h) {
            h.return = b2.return;
            V2 = h;
            break;
          }
          V2 = b2.return;
        }
      }
      var lk = Math.ceil;
      var mk = ua.ReactCurrentDispatcher;
      var nk = ua.ReactCurrentOwner;
      var ok = ua.ReactCurrentBatchConfig;
      var K2 = 0;
      var Q = null;
      var Y = null;
      var Z2 = 0;
      var fj = 0;
      var ej = Uf(0);
      var T2 = 0;
      var pk = null;
      var rh = 0;
      var qk = 0;
      var rk = 0;
      var sk = null;
      var tk = null;
      var fk = 0;
      var Gj = Infinity;
      var uk = null;
      var Oi = false;
      var Pi = null;
      var Ri = null;
      var vk = false;
      var wk = null;
      var xk = 0;
      var yk = 0;
      var zk = null;
      var Ak = -1;
      var Bk = 0;
      function R3() {
        return 0 !== (K2 & 6) ? B3() : -1 !== Ak ? Ak : Ak = B3();
      }
      function yi(a) {
        if (0 === (a.mode & 1)) return 1;
        if (0 !== (K2 & 2) && 0 !== Z2) return Z2 & -Z2;
        if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
        a = C2;
        if (0 !== a) return a;
        a = window.event;
        a = void 0 === a ? 16 : jd(a.type);
        return a;
      }
      function gi(a, b2, c, d) {
        if (50 < yk) throw yk = 0, zk = null, Error(p(185));
        Ac(a, c, d);
        if (0 === (K2 & 2) || a !== Q) a === Q && (0 === (K2 & 2) && (qk |= c), 4 === T2 && Ck(a, Z2)), Dk(a, d), 1 === c && 0 === K2 && 0 === (b2.mode & 1) && (Gj = B3() + 500, fg && jg());
      }
      function Dk(a, b2) {
        var c = a.callbackNode;
        wc(a, b2);
        var d = uc(a, a === Q ? Z2 : 0);
        if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
        else if (b2 = d & -d, a.callbackPriority !== b2) {
          null != c && bc(c);
          if (1 === b2) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
            0 === (K2 & 6) && jg();
          }), c = null;
          else {
            switch (Dc(d)) {
              case 1:
                c = fc;
                break;
              case 4:
                c = gc;
                break;
              case 16:
                c = hc;
                break;
              case 536870912:
                c = jc;
                break;
              default:
                c = hc;
            }
            c = Fk(c, Gk.bind(null, a));
          }
          a.callbackPriority = b2;
          a.callbackNode = c;
        }
      }
      function Gk(a, b2) {
        Ak = -1;
        Bk = 0;
        if (0 !== (K2 & 6)) throw Error(p(327));
        var c = a.callbackNode;
        if (Hk() && a.callbackNode !== c) return null;
        var d = uc(a, a === Q ? Z2 : 0);
        if (0 === d) return null;
        if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b2) b2 = Ik(a, d);
        else {
          b2 = d;
          var e2 = K2;
          K2 |= 2;
          var f2 = Jk();
          if (Q !== a || Z2 !== b2) uk = null, Gj = B3() + 500, Kk(a, b2);
          do
            try {
              Lk();
              break;
            } catch (h) {
              Mk(a, h);
            }
          while (1);
          $g();
          mk.current = f2;
          K2 = e2;
          null !== Y ? b2 = 0 : (Q = null, Z2 = 0, b2 = T2);
        }
        if (0 !== b2) {
          2 === b2 && (e2 = xc(a), 0 !== e2 && (d = e2, b2 = Nk(a, e2)));
          if (1 === b2) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B3()), c;
          if (6 === b2) Ck(a, d);
          else {
            e2 = a.current.alternate;
            if (0 === (d & 30) && !Ok(e2) && (b2 = Ik(a, d), 2 === b2 && (f2 = xc(a), 0 !== f2 && (d = f2, b2 = Nk(a, f2))), 1 === b2)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B3()), c;
            a.finishedWork = e2;
            a.finishedLanes = d;
            switch (b2) {
              case 0:
              case 1:
                throw Error(p(345));
              case 2:
                Pk(a, tk, uk);
                break;
              case 3:
                Ck(a, d);
                if ((d & 130023424) === d && (b2 = fk + 500 - B3(), 10 < b2)) {
                  if (0 !== uc(a, 0)) break;
                  e2 = a.suspendedLanes;
                  if ((e2 & d) !== d) {
                    R3();
                    a.pingedLanes |= a.suspendedLanes & e2;
                    break;
                  }
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b2);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 4:
                Ck(a, d);
                if ((d & 4194240) === d) break;
                b2 = a.eventTimes;
                for (e2 = -1; 0 < d; ) {
                  var g = 31 - oc(d);
                  f2 = 1 << g;
                  g = b2[g];
                  g > e2 && (e2 = g);
                  d &= ~f2;
                }
                d = e2;
                d = B3() - d;
                d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
                if (10 < d) {
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 5:
                Pk(a, tk, uk);
                break;
              default:
                throw Error(p(329));
            }
          }
        }
        Dk(a, B3());
        return a.callbackNode === c ? Gk.bind(null, a) : null;
      }
      function Nk(a, b2) {
        var c = sk;
        a.current.memoizedState.isDehydrated && (Kk(a, b2).flags |= 256);
        a = Ik(a, b2);
        2 !== a && (b2 = tk, tk = c, null !== b2 && Fj(b2));
        return a;
      }
      function Fj(a) {
        null === tk ? tk = a : tk.push.apply(tk, a);
      }
      function Ok(a) {
        for (var b2 = a; ; ) {
          if (b2.flags & 16384) {
            var c = b2.updateQueue;
            if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
              var e2 = c[d], f2 = e2.getSnapshot;
              e2 = e2.value;
              try {
                if (!He3(f2(), e2)) return false;
              } catch (g) {
                return false;
              }
            }
          }
          c = b2.child;
          if (b2.subtreeFlags & 16384 && null !== c) c.return = b2, b2 = c;
          else {
            if (b2 === a) break;
            for (; null === b2.sibling; ) {
              if (null === b2.return || b2.return === a) return true;
              b2 = b2.return;
            }
            b2.sibling.return = b2.return;
            b2 = b2.sibling;
          }
        }
        return true;
      }
      function Ck(a, b2) {
        b2 &= ~rk;
        b2 &= ~qk;
        a.suspendedLanes |= b2;
        a.pingedLanes &= ~b2;
        for (a = a.expirationTimes; 0 < b2; ) {
          var c = 31 - oc(b2), d = 1 << c;
          a[c] = -1;
          b2 &= ~d;
        }
      }
      function Ek(a) {
        if (0 !== (K2 & 6)) throw Error(p(327));
        Hk();
        var b2 = uc(a, 0);
        if (0 === (b2 & 1)) return Dk(a, B3()), null;
        var c = Ik(a, b2);
        if (0 !== a.tag && 2 === c) {
          var d = xc(a);
          0 !== d && (b2 = d, c = Nk(a, d));
        }
        if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b2), Dk(a, B3()), c;
        if (6 === c) throw Error(p(345));
        a.finishedWork = a.current.alternate;
        a.finishedLanes = b2;
        Pk(a, tk, uk);
        Dk(a, B3());
        return null;
      }
      function Qk(a, b2) {
        var c = K2;
        K2 |= 1;
        try {
          return a(b2);
        } finally {
          K2 = c, 0 === K2 && (Gj = B3() + 500, fg && jg());
        }
      }
      function Rk(a) {
        null !== wk && 0 === wk.tag && 0 === (K2 & 6) && Hk();
        var b2 = K2;
        K2 |= 1;
        var c = ok.transition, d = C2;
        try {
          if (ok.transition = null, C2 = 1, a) return a();
        } finally {
          C2 = d, ok.transition = c, K2 = b2, 0 === (K2 & 6) && jg();
        }
      }
      function Hj() {
        fj = ej.current;
        E3(ej);
      }
      function Kk(a, b2) {
        a.finishedWork = null;
        a.finishedLanes = 0;
        var c = a.timeoutHandle;
        -1 !== c && (a.timeoutHandle = -1, Gf(c));
        if (null !== Y) for (c = Y.return; null !== c; ) {
          var d = c;
          wg(d);
          switch (d.tag) {
            case 1:
              d = d.type.childContextTypes;
              null !== d && void 0 !== d && $f();
              break;
            case 3:
              zh();
              E3(Wf);
              E3(H);
              Eh();
              break;
            case 5:
              Bh(d);
              break;
            case 4:
              zh();
              break;
            case 13:
              E3(L2);
              break;
            case 19:
              E3(L2);
              break;
            case 10:
              ah(d.type._context);
              break;
            case 22:
            case 23:
              Hj();
          }
          c = c.return;
        }
        Q = a;
        Y = a = Pg(a.current, null);
        Z2 = fj = b2;
        T2 = 0;
        pk = null;
        rk = qk = rh = 0;
        tk = sk = null;
        if (null !== fh) {
          for (b2 = 0; b2 < fh.length; b2++) if (c = fh[b2], d = c.interleaved, null !== d) {
            c.interleaved = null;
            var e2 = d.next, f2 = c.pending;
            if (null !== f2) {
              var g = f2.next;
              f2.next = e2;
              d.next = g;
            }
            c.pending = d;
          }
          fh = null;
        }
        return a;
      }
      function Mk(a, b2) {
        do {
          var c = Y;
          try {
            $g();
            Fh.current = Rh;
            if (Ih) {
              for (var d = M3.memoizedState; null !== d; ) {
                var e2 = d.queue;
                null !== e2 && (e2.pending = null);
                d = d.next;
              }
              Ih = false;
            }
            Hh = 0;
            O3 = N2 = M3 = null;
            Jh = false;
            Kh = 0;
            nk.current = null;
            if (null === c || null === c.return) {
              T2 = 1;
              pk = b2;
              Y = null;
              break;
            }
            a: {
              var f2 = a, g = c.return, h = c, k2 = b2;
              b2 = Z2;
              h.flags |= 32768;
              if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
                var l2 = k2, m = h, q = m.tag;
                if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                  var r = m.alternate;
                  r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
                }
                var y2 = Ui(g);
                if (null !== y2) {
                  y2.flags &= -257;
                  Vi(y2, g, h, f2, b2);
                  y2.mode & 1 && Si(f2, l2, b2);
                  b2 = y2;
                  k2 = l2;
                  var n = b2.updateQueue;
                  if (null === n) {
                    var t = /* @__PURE__ */ new Set();
                    t.add(k2);
                    b2.updateQueue = t;
                  } else n.add(k2);
                  break a;
                } else {
                  if (0 === (b2 & 1)) {
                    Si(f2, l2, b2);
                    tj();
                    break a;
                  }
                  k2 = Error(p(426));
                }
              } else if (I2 && h.mode & 1) {
                var J2 = Ui(g);
                if (null !== J2) {
                  0 === (J2.flags & 65536) && (J2.flags |= 256);
                  Vi(J2, g, h, f2, b2);
                  Jg(Ji(k2, h));
                  break a;
                }
              }
              f2 = k2 = Ji(k2, h);
              4 !== T2 && (T2 = 2);
              null === sk ? sk = [f2] : sk.push(f2);
              f2 = g;
              do {
                switch (f2.tag) {
                  case 3:
                    f2.flags |= 65536;
                    b2 &= -b2;
                    f2.lanes |= b2;
                    var x = Ni(f2, k2, b2);
                    ph(f2, x);
                    break a;
                  case 1:
                    h = k2;
                    var w2 = f2.type, u = f2.stateNode;
                    if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                      f2.flags |= 65536;
                      b2 &= -b2;
                      f2.lanes |= b2;
                      var F2 = Qi(f2, h, b2);
                      ph(f2, F2);
                      break a;
                    }
                }
                f2 = f2.return;
              } while (null !== f2);
            }
            Sk(c);
          } catch (na2) {
            b2 = na2;
            Y === c && null !== c && (Y = c = c.return);
            continue;
          }
          break;
        } while (1);
      }
      function Jk() {
        var a = mk.current;
        mk.current = Rh;
        return null === a ? Rh : a;
      }
      function tj() {
        if (0 === T2 || 3 === T2 || 2 === T2) T2 = 4;
        null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z2);
      }
      function Ik(a, b2) {
        var c = K2;
        K2 |= 2;
        var d = Jk();
        if (Q !== a || Z2 !== b2) uk = null, Kk(a, b2);
        do
          try {
            Tk();
            break;
          } catch (e2) {
            Mk(a, e2);
          }
        while (1);
        $g();
        K2 = c;
        mk.current = d;
        if (null !== Y) throw Error(p(261));
        Q = null;
        Z2 = 0;
        return T2;
      }
      function Tk() {
        for (; null !== Y; ) Uk(Y);
      }
      function Lk() {
        for (; null !== Y && !cc(); ) Uk(Y);
      }
      function Uk(a) {
        var b2 = Vk(a.alternate, a, fj);
        a.memoizedProps = a.pendingProps;
        null === b2 ? Sk(a) : Y = b2;
        nk.current = null;
      }
      function Sk(a) {
        var b2 = a;
        do {
          var c = b2.alternate;
          a = b2.return;
          if (0 === (b2.flags & 32768)) {
            if (c = Ej(c, b2, fj), null !== c) {
              Y = c;
              return;
            }
          } else {
            c = Ij(c, b2);
            if (null !== c) {
              c.flags &= 32767;
              Y = c;
              return;
            }
            if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
            else {
              T2 = 6;
              Y = null;
              return;
            }
          }
          b2 = b2.sibling;
          if (null !== b2) {
            Y = b2;
            return;
          }
          Y = b2 = a;
        } while (null !== b2);
        0 === T2 && (T2 = 5);
      }
      function Pk(a, b2, c) {
        var d = C2, e2 = ok.transition;
        try {
          ok.transition = null, C2 = 1, Wk(a, b2, c, d);
        } finally {
          ok.transition = e2, C2 = d;
        }
        return null;
      }
      function Wk(a, b2, c, d) {
        do
          Hk();
        while (null !== wk);
        if (0 !== (K2 & 6)) throw Error(p(327));
        c = a.finishedWork;
        var e2 = a.finishedLanes;
        if (null === c) return null;
        a.finishedWork = null;
        a.finishedLanes = 0;
        if (c === a.current) throw Error(p(177));
        a.callbackNode = null;
        a.callbackPriority = 0;
        var f2 = c.lanes | c.childLanes;
        Bc(a, f2);
        a === Q && (Y = Q = null, Z2 = 0);
        0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
          Hk();
          return null;
        }));
        f2 = 0 !== (c.flags & 15990);
        if (0 !== (c.subtreeFlags & 15990) || f2) {
          f2 = ok.transition;
          ok.transition = null;
          var g = C2;
          C2 = 1;
          var h = K2;
          K2 |= 4;
          nk.current = null;
          Oj(a, c);
          dk(c, a);
          Oe3(Df);
          dd = !!Cf;
          Df = Cf = null;
          a.current = c;
          hk(c, a, e2);
          dc();
          K2 = h;
          C2 = g;
          ok.transition = f2;
        } else a.current = c;
        vk && (vk = false, wk = a, xk = e2);
        f2 = a.pendingLanes;
        0 === f2 && (Ri = null);
        mc(c.stateNode, d);
        Dk(a, B3());
        if (null !== b2) for (d = a.onRecoverableError, c = 0; c < b2.length; c++) e2 = b2[c], d(e2.value, { componentStack: e2.stack, digest: e2.digest });
        if (Oi) throw Oi = false, a = Pi, Pi = null, a;
        0 !== (xk & 1) && 0 !== a.tag && Hk();
        f2 = a.pendingLanes;
        0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
        jg();
        return null;
      }
      function Hk() {
        if (null !== wk) {
          var a = Dc(xk), b2 = ok.transition, c = C2;
          try {
            ok.transition = null;
            C2 = 16 > a ? 16 : a;
            if (null === wk) var d = false;
            else {
              a = wk;
              wk = null;
              xk = 0;
              if (0 !== (K2 & 6)) throw Error(p(331));
              var e2 = K2;
              K2 |= 4;
              for (V2 = a.current; null !== V2; ) {
                var f2 = V2, g = f2.child;
                if (0 !== (V2.flags & 16)) {
                  var h = f2.deletions;
                  if (null !== h) {
                    for (var k2 = 0; k2 < h.length; k2++) {
                      var l2 = h[k2];
                      for (V2 = l2; null !== V2; ) {
                        var m = V2;
                        switch (m.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Pj(8, m, f2);
                        }
                        var q = m.child;
                        if (null !== q) q.return = m, V2 = q;
                        else for (; null !== V2; ) {
                          m = V2;
                          var r = m.sibling, y2 = m.return;
                          Sj(m);
                          if (m === l2) {
                            V2 = null;
                            break;
                          }
                          if (null !== r) {
                            r.return = y2;
                            V2 = r;
                            break;
                          }
                          V2 = y2;
                        }
                      }
                    }
                    var n = f2.alternate;
                    if (null !== n) {
                      var t = n.child;
                      if (null !== t) {
                        n.child = null;
                        do {
                          var J2 = t.sibling;
                          t.sibling = null;
                          t = J2;
                        } while (null !== t);
                      }
                    }
                    V2 = f2;
                  }
                }
                if (0 !== (f2.subtreeFlags & 2064) && null !== g) g.return = f2, V2 = g;
                else b: for (; null !== V2; ) {
                  f2 = V2;
                  if (0 !== (f2.flags & 2048)) switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(9, f2, f2.return);
                  }
                  var x = f2.sibling;
                  if (null !== x) {
                    x.return = f2.return;
                    V2 = x;
                    break b;
                  }
                  V2 = f2.return;
                }
              }
              var w2 = a.current;
              for (V2 = w2; null !== V2; ) {
                g = V2;
                var u = g.child;
                if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V2 = u;
                else b: for (g = w2; null !== V2; ) {
                  h = V2;
                  if (0 !== (h.flags & 2048)) try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(9, h);
                    }
                  } catch (na2) {
                    W2(h, h.return, na2);
                  }
                  if (h === g) {
                    V2 = null;
                    break b;
                  }
                  var F2 = h.sibling;
                  if (null !== F2) {
                    F2.return = h.return;
                    V2 = F2;
                    break b;
                  }
                  V2 = h.return;
                }
              }
              K2 = e2;
              jg();
              if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
                lc.onPostCommitFiberRoot(kc, a);
              } catch (na2) {
              }
              d = true;
            }
            return d;
          } finally {
            C2 = c, ok.transition = b2;
          }
        }
        return false;
      }
      function Xk(a, b2, c) {
        b2 = Ji(c, b2);
        b2 = Ni(a, b2, 1);
        a = nh(a, b2, 1);
        b2 = R3();
        null !== a && (Ac(a, 1, b2), Dk(a, b2));
      }
      function W2(a, b2, c) {
        if (3 === a.tag) Xk(a, a, c);
        else for (; null !== b2; ) {
          if (3 === b2.tag) {
            Xk(b2, a, c);
            break;
          } else if (1 === b2.tag) {
            var d = b2.stateNode;
            if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
              a = Ji(c, a);
              a = Qi(b2, a, 1);
              b2 = nh(b2, a, 1);
              a = R3();
              null !== b2 && (Ac(b2, 1, a), Dk(b2, a));
              break;
            }
          }
          b2 = b2.return;
        }
      }
      function Ti(a, b2, c) {
        var d = a.pingCache;
        null !== d && d.delete(b2);
        b2 = R3();
        a.pingedLanes |= a.suspendedLanes & c;
        Q === a && (Z2 & c) === c && (4 === T2 || 3 === T2 && (Z2 & 130023424) === Z2 && 500 > B3() - fk ? Kk(a, 0) : rk |= c);
        Dk(a, b2);
      }
      function Yk(a, b2) {
        0 === b2 && (0 === (a.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
        var c = R3();
        a = ih(a, b2);
        null !== a && (Ac(a, b2, c), Dk(a, c));
      }
      function uj(a) {
        var b2 = a.memoizedState, c = 0;
        null !== b2 && (c = b2.retryLane);
        Yk(a, c);
      }
      function bk(a, b2) {
        var c = 0;
        switch (a.tag) {
          case 13:
            var d = a.stateNode;
            var e2 = a.memoizedState;
            null !== e2 && (c = e2.retryLane);
            break;
          case 19:
            d = a.stateNode;
            break;
          default:
            throw Error(p(314));
        }
        null !== d && d.delete(b2);
        Yk(a, c);
      }
      var Vk;
      Vk = function(a, b2, c) {
        if (null !== a) if (a.memoizedProps !== b2.pendingProps || Wf.current) dh = true;
        else {
          if (0 === (a.lanes & c) && 0 === (b2.flags & 128)) return dh = false, yj(a, b2, c);
          dh = 0 !== (a.flags & 131072) ? true : false;
        }
        else dh = false, I2 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
        b2.lanes = 0;
        switch (b2.tag) {
          case 2:
            var d = b2.type;
            ij(a, b2);
            a = b2.pendingProps;
            var e2 = Yf(b2, H.current);
            ch(b2, c);
            e2 = Nh(null, b2, d, a, e2, c);
            var f2 = Sh();
            b2.flags |= 1;
            "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, kh(b2), e2.updater = Ei, b2.stateNode = e2, e2._reactInternals = b2, Ii(b2, d, a, c), b2 = jj(null, b2, d, true, f2, c)) : (b2.tag = 0, I2 && f2 && vg(b2), Xi(null, b2, e2, c), b2 = b2.child);
            return b2;
          case 16:
            d = b2.elementType;
            a: {
              ij(a, b2);
              a = b2.pendingProps;
              e2 = d._init;
              d = e2(d._payload);
              b2.type = d;
              e2 = b2.tag = Zk(d);
              a = Ci(d, a);
              switch (e2) {
                case 0:
                  b2 = cj(null, b2, d, a, c);
                  break a;
                case 1:
                  b2 = hj(null, b2, d, a, c);
                  break a;
                case 11:
                  b2 = Yi(null, b2, d, a, c);
                  break a;
                case 14:
                  b2 = $i(null, b2, d, Ci(d.type, a), c);
                  break a;
              }
              throw Error(p(
                306,
                d,
                ""
              ));
            }
            return b2;
          case 0:
            return d = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d ? e2 : Ci(d, e2), cj(a, b2, d, e2, c);
          case 1:
            return d = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d ? e2 : Ci(d, e2), hj(a, b2, d, e2, c);
          case 3:
            a: {
              kj(b2);
              if (null === a) throw Error(p(387));
              d = b2.pendingProps;
              f2 = b2.memoizedState;
              e2 = f2.element;
              lh(a, b2);
              qh(b2, d, null, c);
              var g = b2.memoizedState;
              d = g.element;
              if (f2.isDehydrated) if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
                e2 = Ji(Error(p(423)), b2);
                b2 = lj(a, b2, d, c, e2);
                break a;
              } else if (d !== e2) {
                e2 = Ji(Error(p(424)), b2);
                b2 = lj(a, b2, d, c, e2);
                break a;
              } else for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I2 = true, zg = null, c = Vg(b2, null, d, c), b2.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
              else {
                Ig();
                if (d === e2) {
                  b2 = Zi(a, b2, c);
                  break a;
                }
                Xi(a, b2, d, c);
              }
              b2 = b2.child;
            }
            return b2;
          case 5:
            return Ah(b2), null === a && Eg(b2), d = b2.type, e2 = b2.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e2.children, Ef(d, e2) ? g = null : null !== f2 && Ef(d, f2) && (b2.flags |= 32), gj(a, b2), Xi(a, b2, g, c), b2.child;
          case 6:
            return null === a && Eg(b2), null;
          case 13:
            return oj(a, b2, c);
          case 4:
            return yh(b2, b2.stateNode.containerInfo), d = b2.pendingProps, null === a ? b2.child = Ug(b2, null, d, c) : Xi(a, b2, d, c), b2.child;
          case 11:
            return d = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d ? e2 : Ci(d, e2), Yi(a, b2, d, e2, c);
          case 7:
            return Xi(a, b2, b2.pendingProps, c), b2.child;
          case 8:
            return Xi(a, b2, b2.pendingProps.children, c), b2.child;
          case 12:
            return Xi(a, b2, b2.pendingProps.children, c), b2.child;
          case 10:
            a: {
              d = b2.type._context;
              e2 = b2.pendingProps;
              f2 = b2.memoizedProps;
              g = e2.value;
              G2(Wg, d._currentValue);
              d._currentValue = g;
              if (null !== f2) if (He3(f2.value, g)) {
                if (f2.children === e2.children && !Wf.current) {
                  b2 = Zi(a, b2, c);
                  break a;
                }
              } else for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
                var h = f2.dependencies;
                if (null !== h) {
                  g = f2.child;
                  for (var k2 = h.firstContext; null !== k2; ) {
                    if (k2.context === d) {
                      if (1 === f2.tag) {
                        k2 = mh(-1, c & -c);
                        k2.tag = 2;
                        var l2 = f2.updateQueue;
                        if (null !== l2) {
                          l2 = l2.shared;
                          var m = l2.pending;
                          null === m ? k2.next = k2 : (k2.next = m.next, m.next = k2);
                          l2.pending = k2;
                        }
                      }
                      f2.lanes |= c;
                      k2 = f2.alternate;
                      null !== k2 && (k2.lanes |= c);
                      bh(
                        f2.return,
                        c,
                        b2
                      );
                      h.lanes |= c;
                      break;
                    }
                    k2 = k2.next;
                  }
                } else if (10 === f2.tag) g = f2.type === b2.type ? null : f2.child;
                else if (18 === f2.tag) {
                  g = f2.return;
                  if (null === g) throw Error(p(341));
                  g.lanes |= c;
                  h = g.alternate;
                  null !== h && (h.lanes |= c);
                  bh(g, c, b2);
                  g = f2.sibling;
                } else g = f2.child;
                if (null !== g) g.return = f2;
                else for (g = f2; null !== g; ) {
                  if (g === b2) {
                    g = null;
                    break;
                  }
                  f2 = g.sibling;
                  if (null !== f2) {
                    f2.return = g.return;
                    g = f2;
                    break;
                  }
                  g = g.return;
                }
                f2 = g;
              }
              Xi(a, b2, e2.children, c);
              b2 = b2.child;
            }
            return b2;
          case 9:
            return e2 = b2.type, d = b2.pendingProps.children, ch(b2, c), e2 = eh(e2), d = d(e2), b2.flags |= 1, Xi(a, b2, d, c), b2.child;
          case 14:
            return d = b2.type, e2 = Ci(d, b2.pendingProps), e2 = Ci(d.type, e2), $i(a, b2, d, e2, c);
          case 15:
            return bj(a, b2, b2.type, b2.pendingProps, c);
          case 17:
            return d = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d ? e2 : Ci(d, e2), ij(a, b2), b2.tag = 1, Zf(d) ? (a = true, cg(b2)) : a = false, ch(b2, c), Gi(b2, d, e2), Ii(b2, d, e2, c), jj(null, b2, d, true, a, c);
          case 19:
            return xj(a, b2, c);
          case 22:
            return dj(a, b2, c);
        }
        throw Error(p(156, b2.tag));
      };
      function Fk(a, b2) {
        return ac(a, b2);
      }
      function $k(a, b2, c, d) {
        this.tag = a;
        this.key = c;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b2;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function Bg(a, b2, c, d) {
        return new $k(a, b2, c, d);
      }
      function aj(a) {
        a = a.prototype;
        return !(!a || !a.isReactComponent);
      }
      function Zk(a) {
        if ("function" === typeof a) return aj(a) ? 1 : 0;
        if (void 0 !== a && null !== a) {
          a = a.$$typeof;
          if (a === Da2) return 11;
          if (a === Ga2) return 14;
        }
        return 2;
      }
      function Pg(a, b2) {
        var c = a.alternate;
        null === c ? (c = Bg(a.tag, b2, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b2, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
        c.flags = a.flags & 14680064;
        c.childLanes = a.childLanes;
        c.lanes = a.lanes;
        c.child = a.child;
        c.memoizedProps = a.memoizedProps;
        c.memoizedState = a.memoizedState;
        c.updateQueue = a.updateQueue;
        b2 = a.dependencies;
        c.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
        c.sibling = a.sibling;
        c.index = a.index;
        c.ref = a.ref;
        return c;
      }
      function Rg(a, b2, c, d, e2, f2) {
        var g = 2;
        d = a;
        if ("function" === typeof a) aj(a) && (g = 1);
        else if ("string" === typeof a) g = 5;
        else a: switch (a) {
          case ya:
            return Tg(c.children, e2, f2, b2);
          case za2:
            g = 8;
            e2 |= 8;
            break;
          case Aa2:
            return a = Bg(12, c, b2, e2 | 2), a.elementType = Aa2, a.lanes = f2, a;
          case Ea2:
            return a = Bg(13, c, b2, e2), a.elementType = Ea2, a.lanes = f2, a;
          case Fa2:
            return a = Bg(19, c, b2, e2), a.elementType = Fa2, a.lanes = f2, a;
          case Ia2:
            return pj(c, e2, f2, b2);
          default:
            if ("object" === typeof a && null !== a) switch (a.$$typeof) {
              case Ba:
                g = 10;
                break a;
              case Ca:
                g = 9;
                break a;
              case Da2:
                g = 11;
                break a;
              case Ga2:
                g = 14;
                break a;
              case Ha2:
                g = 16;
                d = null;
                break a;
            }
            throw Error(p(130, null == a ? a : typeof a, ""));
        }
        b2 = Bg(g, c, b2, e2);
        b2.elementType = a;
        b2.type = d;
        b2.lanes = f2;
        return b2;
      }
      function Tg(a, b2, c, d) {
        a = Bg(7, a, d, b2);
        a.lanes = c;
        return a;
      }
      function pj(a, b2, c, d) {
        a = Bg(22, a, d, b2);
        a.elementType = Ia2;
        a.lanes = c;
        a.stateNode = { isHidden: false };
        return a;
      }
      function Qg(a, b2, c) {
        a = Bg(6, a, null, b2);
        a.lanes = c;
        return a;
      }
      function Sg(a, b2, c) {
        b2 = Bg(4, null !== a.children ? a.children : [], a.key, b2);
        b2.lanes = c;
        b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
        return b2;
      }
      function al2(a, b2, c, d, e2) {
        this.tag = b2;
        this.containerInfo = a;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = zc(0);
        this.expirationTimes = zc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = zc(0);
        this.identifierPrefix = d;
        this.onRecoverableError = e2;
        this.mutableSourceEagerHydrationData = null;
      }
      function bl2(a, b2, c, d, e2, f2, g, h, k2) {
        a = new al2(a, b2, c, h, k2);
        1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
        f2 = Bg(3, null, null, b2);
        a.current = f2;
        f2.stateNode = a;
        f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        kh(f2);
        return a;
      }
      function cl2(a, b2, c) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: wa2, key: null == d ? null : "" + d, children: a, containerInfo: b2, implementation: c };
      }
      function dl2(a) {
        if (!a) return Vf;
        a = a._reactInternals;
        a: {
          if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
          var b2 = a;
          do {
            switch (b2.tag) {
              case 3:
                b2 = b2.stateNode.context;
                break a;
              case 1:
                if (Zf(b2.type)) {
                  b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b2 = b2.return;
          } while (null !== b2);
          throw Error(p(171));
        }
        if (1 === a.tag) {
          var c = a.type;
          if (Zf(c)) return bg(a, c, b2);
        }
        return b2;
      }
      function el2(a, b2, c, d, e2, f2, g, h, k2) {
        a = bl2(c, d, true, a, e2, f2, g, h, k2);
        a.context = dl2(null);
        c = a.current;
        d = R3();
        e2 = yi(c);
        f2 = mh(d, e2);
        f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
        nh(c, f2, e2);
        a.current.lanes = e2;
        Ac(a, e2, d);
        Dk(a, d);
        return a;
      }
      function fl2(a, b2, c, d) {
        var e2 = b2.current, f2 = R3(), g = yi(e2);
        c = dl2(c);
        null === b2.context ? b2.context = c : b2.pendingContext = c;
        b2 = mh(f2, g);
        b2.payload = { element: a };
        d = void 0 === d ? null : d;
        null !== d && (b2.callback = d);
        a = nh(e2, b2, g);
        null !== a && (gi(a, e2, g, f2), oh(a, e2, g));
        return g;
      }
      function gl(a) {
        a = a.current;
        if (!a.child) return null;
        switch (a.child.tag) {
          case 5:
            return a.child.stateNode;
          default:
            return a.child.stateNode;
        }
      }
      function hl2(a, b2) {
        a = a.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          var c = a.retryLane;
          a.retryLane = 0 !== c && c < b2 ? c : b2;
        }
      }
      function il2(a, b2) {
        hl2(a, b2);
        (a = a.alternate) && hl2(a, b2);
      }
      function jl2() {
        return null;
      }
      var kl2 = "function" === typeof reportError ? reportError : function(a) {
        console.error(a);
      };
      function ll2(a) {
        this._internalRoot = a;
      }
      ml2.prototype.render = ll2.prototype.render = function(a) {
        var b2 = this._internalRoot;
        if (null === b2) throw Error(p(409));
        fl2(a, b2, null, null);
      };
      ml2.prototype.unmount = ll2.prototype.unmount = function() {
        var a = this._internalRoot;
        if (null !== a) {
          this._internalRoot = null;
          var b2 = a.containerInfo;
          Rk(function() {
            fl2(null, a, null, null);
          });
          b2[uf] = null;
        }
      };
      function ml2(a) {
        this._internalRoot = a;
      }
      ml2.prototype.unstable_scheduleHydration = function(a) {
        if (a) {
          var b2 = Hc();
          a = { blockedOn: null, target: a, priority: b2 };
          for (var c = 0; c < Qc.length && 0 !== b2 && b2 < Qc[c].priority; c++) ;
          Qc.splice(c, 0, a);
          0 === c && Vc(a);
        }
      };
      function nl2(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
      }
      function ol2(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
      }
      function pl2() {
      }
      function ql2(a, b2, c, d, e2) {
        if (e2) {
          if ("function" === typeof d) {
            var f2 = d;
            d = function() {
              var a2 = gl(g);
              f2.call(a2);
            };
          }
          var g = el2(b2, d, a, 0, null, false, false, "", pl2);
          a._reactRootContainer = g;
          a[uf] = g.current;
          sf(8 === a.nodeType ? a.parentNode : a);
          Rk();
          return g;
        }
        for (; e2 = a.lastChild; ) a.removeChild(e2);
        if ("function" === typeof d) {
          var h = d;
          d = function() {
            var a2 = gl(k2);
            h.call(a2);
          };
        }
        var k2 = bl2(a, 0, false, null, null, false, false, "", pl2);
        a._reactRootContainer = k2;
        a[uf] = k2.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Rk(function() {
          fl2(b2, k2, c, d);
        });
        return k2;
      }
      function rl2(a, b2, c, d, e2) {
        var f2 = c._reactRootContainer;
        if (f2) {
          var g = f2;
          if ("function" === typeof e2) {
            var h = e2;
            e2 = function() {
              var a2 = gl(g);
              h.call(a2);
            };
          }
          fl2(b2, g, a, e2);
        } else g = ql2(c, b2, a, e2, d);
        return gl(g);
      }
      Ec = function(a) {
        switch (a.tag) {
          case 3:
            var b2 = a.stateNode;
            if (b2.current.memoizedState.isDehydrated) {
              var c = tc(b2.pendingLanes);
              0 !== c && (Cc(b2, c | 1), Dk(b2, B3()), 0 === (K2 & 6) && (Gj = B3() + 500, jg()));
            }
            break;
          case 13:
            Rk(function() {
              var b3 = ih(a, 1);
              if (null !== b3) {
                var c2 = R3();
                gi(b3, a, 1, c2);
              }
            }), il2(a, 1);
        }
      };
      Fc = function(a) {
        if (13 === a.tag) {
          var b2 = ih(a, 134217728);
          if (null !== b2) {
            var c = R3();
            gi(b2, a, 134217728, c);
          }
          il2(a, 134217728);
        }
      };
      Gc = function(a) {
        if (13 === a.tag) {
          var b2 = yi(a), c = ih(a, b2);
          if (null !== c) {
            var d = R3();
            gi(c, a, b2, d);
          }
          il2(a, b2);
        }
      };
      Hc = function() {
        return C2;
      };
      Ic = function(a, b2) {
        var c = C2;
        try {
          return C2 = a, b2();
        } finally {
          C2 = c;
        }
      };
      yb = function(a, b2, c) {
        switch (b2) {
          case "input":
            bb(a, c);
            b2 = c.name;
            if ("radio" === c.type && null != b2) {
              for (c = a; c.parentNode; ) c = c.parentNode;
              c = c.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
              for (b2 = 0; b2 < c.length; b2++) {
                var d = c[b2];
                if (d !== a && d.form === a.form) {
                  var e2 = Db(d);
                  if (!e2) throw Error(p(90));
                  Wa2(d);
                  bb(d, e2);
                }
              }
            }
            break;
          case "textarea":
            ib(a, c);
            break;
          case "select":
            b2 = c.value, null != b2 && fb(a, !!c.multiple, b2, false);
        }
      };
      Gb = Qk;
      Hb = Rk;
      var sl2 = { usingClientEntryPoint: false, Events: [Cb, ue2, Db, Eb, Fb, Qk] };
      var tl2 = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
      var ul2 = { bundleType: tl2.bundleType, version: tl2.version, rendererPackageName: tl2.rendererPackageName, rendererConfig: tl2.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
        a = Zb(a);
        return null === a ? null : a.stateNode;
      }, findFiberByHostInstance: tl2.findFiberByHostInstance || jl2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        vl2 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!vl2.isDisabled && vl2.supportsFiber) try {
          kc = vl2.inject(ul2), lc = vl2;
        } catch (a) {
        }
      }
      var vl2;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl2;
      exports.createPortal = function(a, b2) {
        var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!nl2(b2)) throw Error(p(200));
        return cl2(a, b2, null, c);
      };
      exports.createRoot = function(a, b2) {
        if (!nl2(a)) throw Error(p(299));
        var c = false, d = "", e2 = kl2;
        null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c = true), void 0 !== b2.identifierPrefix && (d = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
        b2 = bl2(a, 1, false, null, null, c, false, d, e2);
        a[uf] = b2.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        return new ll2(b2);
      };
      exports.findDOMNode = function(a) {
        if (null == a) return null;
        if (1 === a.nodeType) return a;
        var b2 = a._reactInternals;
        if (void 0 === b2) {
          if ("function" === typeof a.render) throw Error(p(188));
          a = Object.keys(a).join(",");
          throw Error(p(268, a));
        }
        a = Zb(b2);
        a = null === a ? null : a.stateNode;
        return a;
      };
      exports.flushSync = function(a) {
        return Rk(a);
      };
      exports.hydrate = function(a, b2, c) {
        if (!ol2(b2)) throw Error(p(200));
        return rl2(null, a, b2, true, c);
      };
      exports.hydrateRoot = function(a, b2, c) {
        if (!nl2(a)) throw Error(p(405));
        var d = null != c && c.hydratedSources || null, e2 = false, f2 = "", g = kl2;
        null !== c && void 0 !== c && (true === c.unstable_strictMode && (e2 = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
        b2 = el2(b2, null, a, 1, null != c ? c : null, e2, false, f2, g);
        a[uf] = b2.current;
        sf(a);
        if (d) for (a = 0; a < d.length; a++) c = d[a], e2 = c._getVersion, e2 = e2(c._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c, e2] : b2.mutableSourceEagerHydrationData.push(
          c,
          e2
        );
        return new ml2(b2);
      };
      exports.render = function(a, b2, c) {
        if (!ol2(b2)) throw Error(p(200));
        return rl2(null, a, b2, false, c);
      };
      exports.unmountComponentAtNode = function(a) {
        if (!ol2(a)) throw Error(p(40));
        return a._reactRootContainer ? (Rk(function() {
          rl2(null, null, a, false, function() {
            a._reactRootContainer = null;
            a[uf] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Qk;
      exports.unstable_renderSubtreeIntoContainer = function(a, b2, c, d) {
        if (!ol2(c)) throw Error(p(200));
        if (null == a || void 0 === a._reactInternals) throw Error(p(38));
        return rl2(a, b2, c, false, d);
      };
      exports.version = "18.3.1-next-f1338f8080-20240426";
    }
  });

  // ../../opt/files/node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "../../opt/files/node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../opt/files/node_modules/react-dom/client.js
  var require_client = __commonJS({
    "../../opt/files/node_modules/react-dom/client.js"(exports) {
      "use strict";
      var m = require_react_dom();
      if (true) {
        exports.createRoot = m.createRoot;
        exports.hydrateRoot = m.hydrateRoot;
      } else {
        i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        exports.createRoot = function(c, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.createRoot(c, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
        exports.hydrateRoot = function(c, h, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.hydrateRoot(c, h, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
      }
      var i;
    }
  });

  // ../../opt/files/node_modules/react/cjs/react-jsx-runtime.production.min.js
  var require_react_jsx_runtime_production_min = __commonJS({
    "../../opt/files/node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports) {
      "use strict";
      var f2 = require_react();
      var k2 = /* @__PURE__ */ Symbol.for("react.element");
      var l2 = /* @__PURE__ */ Symbol.for("react.fragment");
      var m = Object.prototype.hasOwnProperty;
      var n = f2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
      var p = { key: true, ref: true, __self: true, __source: true };
      function q(c, a, g) {
        var b2, d = {}, e2 = null, h = null;
        void 0 !== g && (e2 = "" + g);
        void 0 !== a.key && (e2 = "" + a.key);
        void 0 !== a.ref && (h = a.ref);
        for (b2 in a) m.call(a, b2) && !p.hasOwnProperty(b2) && (d[b2] = a[b2]);
        if (c && c.defaultProps) for (b2 in a = c.defaultProps, a) void 0 === d[b2] && (d[b2] = a[b2]);
        return { $$typeof: k2, type: c, key: e2, ref: h, props: d, _owner: n.current };
      }
      exports.Fragment = l2;
      exports.jsx = q;
      exports.jsxs = q;
    }
  });

  // ../../opt/files/node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "../../opt/files/node_modules/react/jsx-runtime.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_jsx_runtime_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // src/main.tsx
  var import_client = __toESM(require_client());

  // ../../opt/files/kit/index.tsx
  var import_react20 = __toESM(require_react());

  // ../../opt/files/kit/components.mjs
  var y = __toESM(require_react(), 1);
  var Je = __toESM(require_react(), 1);
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var import_react = __toESM(require_react(), 1);
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  var import_react2 = __toESM(require_react(), 1);
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
  function ee(e2) {
    var r, t, o = "";
    if (typeof e2 == "string" || typeof e2 == "number") o += e2;
    else if (typeof e2 == "object") if (Array.isArray(e2)) {
      var s = e2.length;
      for (r = 0; r < s; r++) e2[r] && (t = ee(e2[r])) && (o && (o += " "), o += t);
    } else for (t in e2) e2[t] && (o && (o += " "), o += t);
    return o;
  }
  function j() {
    for (var e2, r, t = 0, o = "", s = arguments.length; t < s; t++) (e2 = arguments[t]) && (r = ee(e2)) && (o && (o += " "), o += r);
    return o;
  }
  var ve = (e2) => {
    let r = Ce(e2), { conflictingClassGroups: t, conflictingClassGroupModifiers: o } = e2;
    return { getClassGroupId: (a) => {
      let i = a.split("-");
      return i[0] === "" && i.length !== 1 && i.shift(), oe(i, r) || we(a);
    }, getConflictingClassGroupIds: (a, i) => {
      let d = t[a] || [];
      return i && o[a] ? [...d, ...o[a]] : d;
    } };
  };
  var oe = (e2, r) => {
    if (e2.length === 0) return r.classGroupId;
    let t = e2[0], o = r.nextPart.get(t), s = o ? oe(e2.slice(1), o) : void 0;
    if (s) return s;
    if (r.validators.length === 0) return;
    let n = e2.join("-");
    return r.validators.find(({ validator: a }) => a(n))?.classGroupId;
  };
  var te = /^\[(.+)\]$/;
  var we = (e2) => {
    if (te.test(e2)) {
      let r = te.exec(e2)[1], t = r?.substring(0, r.indexOf(":"));
      if (t) return "arbitrary.." + t;
    }
  };
  var Ce = (e2) => {
    let { theme: r, prefix: t } = e2, o = { nextPart: /* @__PURE__ */ new Map(), validators: [] };
    return ke(Object.entries(e2.classGroups), t).forEach(([n, a]) => {
      U(a, o, n, r);
    }), o;
  };
  var U = (e2, r, t, o) => {
    e2.forEach((s) => {
      if (typeof s == "string") {
        let n = s === "" ? r : re(r, s);
        n.classGroupId = t;
        return;
      }
      if (typeof s == "function") {
        if (Se(s)) {
          U(s(o), r, t, o);
          return;
        }
        r.validators.push({ validator: s, classGroupId: t });
        return;
      }
      Object.entries(s).forEach(([n, a]) => {
        U(a, re(r, n), t, o);
      });
    });
  };
  var re = (e2, r) => {
    let t = e2;
    return r.split("-").forEach((o) => {
      t.nextPart.has(o) || t.nextPart.set(o, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), t = t.nextPart.get(o);
    }), t;
  };
  var Se = (e2) => e2.isThemeGetter;
  var ke = (e2, r) => r ? e2.map(([t, o]) => {
    let s = o.map((n) => typeof n == "string" ? r + n : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([a, i]) => [r + a, i])) : n);
    return [t, s];
  }) : e2;
  var Re = (e2) => {
    if (e2 < 1) return { get: () => {
    }, set: () => {
    } };
    let r = 0, t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), s = (n, a) => {
      t.set(n, a), r++, r > e2 && (r = 0, o = t, t = /* @__PURE__ */ new Map());
    };
    return { get(n) {
      let a = t.get(n);
      if (a !== void 0) return a;
      if ((a = o.get(n)) !== void 0) return s(n, a), a;
    }, set(n, a) {
      t.has(n) ? t.set(n, a) : s(n, a);
    } };
  };
  var Ae = (e2) => {
    let { separator: r, experimentalParseClassName: t } = e2, o = r.length === 1, s = r[0], n = r.length, a = (i) => {
      let d = [], c = 0, u = 0, g;
      for (let p = 0; p < i.length; p++) {
        let x = i[p];
        if (c === 0) {
          if (x === s && (o || i.slice(p, p + n) === r)) {
            d.push(i.slice(u, p)), u = p + n;
            continue;
          }
          if (x === "/") {
            g = p;
            continue;
          }
        }
        x === "[" ? c++ : x === "]" && c--;
      }
      let m = d.length === 0 ? i : i.substring(u), v2 = m.startsWith("!"), w2 = v2 ? m.substring(1) : m, h = g && g > u ? g - u : void 0;
      return { modifiers: d, hasImportantModifier: v2, baseClassName: w2, maybePostfixModifierPosition: h };
    };
    return t ? (i) => t({ className: i, parseClassName: a }) : a;
  };
  var Pe = (e2) => {
    if (e2.length <= 1) return e2;
    let r = [], t = [];
    return e2.forEach((o) => {
      o[0] === "[" ? (r.push(...t.sort(), o), t = []) : t.push(o);
    }), r.push(...t.sort()), r;
  };
  var ze = (e2) => ({ cache: Re(e2.cacheSize), parseClassName: Ae(e2), ...ve(e2) });
  var Me = /\s+/;
  var Ne = (e2, r) => {
    let { parseClassName: t, getClassGroupId: o, getConflictingClassGroupIds: s } = r, n = [], a = e2.trim().split(Me), i = "";
    for (let d = a.length - 1; d >= 0; d -= 1) {
      let c = a[d], { modifiers: u, hasImportantModifier: g, baseClassName: m, maybePostfixModifierPosition: v2 } = t(c), w2 = !!v2, h = o(w2 ? m.substring(0, v2) : m);
      if (!h) {
        if (!w2) {
          i = c + (i.length > 0 ? " " + i : i);
          continue;
        }
        if (h = o(m), !h) {
          i = c + (i.length > 0 ? " " + i : i);
          continue;
        }
        w2 = false;
      }
      let p = Pe(u).join(":"), x = g ? p + "!" : p, C2 = x + h;
      if (n.includes(C2)) continue;
      n.push(C2);
      let N2 = s(h, w2);
      for (let P = 0; P < N2.length; ++P) {
        let L2 = N2[P];
        n.push(x + L2);
      }
      i = c + (i.length > 0 ? " " + i : i);
    }
    return i;
  };
  function Te() {
    let e2 = 0, r, t, o = "";
    for (; e2 < arguments.length; ) (r = arguments[e2++]) && (t = ne(r)) && (o && (o += " "), o += t);
    return o;
  }
  var ne = (e2) => {
    if (typeof e2 == "string") return e2;
    let r, t = "";
    for (let o = 0; o < e2.length; o++) e2[o] && (r = ne(e2[o])) && (t && (t += " "), t += r);
    return t;
  };
  function Be(e2, ...r) {
    let t, o, s, n = a;
    function a(d) {
      let c = r.reduce((u, g) => g(u), e2());
      return t = ze(c), o = t.cache.get, s = t.cache.set, n = i, i(d);
    }
    function i(d) {
      let c = o(d);
      if (c) return c;
      let u = Ne(d, t);
      return s(d, u), u;
    }
    return function() {
      return n(Te.apply(null, arguments));
    };
  }
  var f = (e2) => {
    let r = (t) => t[e2] || [];
    return r.isThemeGetter = true, r;
  };
  var se = /^\[(?:([a-z-]+):)?(.+)\]$/i;
  var Ie = /^\d+\/\d+$/;
  var _e = /* @__PURE__ */ new Set(["px", "full", "screen"]);
  var Ee = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
  var Le = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
  var Ve = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
  var Ge = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
  var je = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
  var k = (e2) => z(e2) || _e.has(e2) || Ie.test(e2);
  var R = (e2) => M(e2, "length", Ke);
  var z = (e2) => !!e2 && !Number.isNaN(Number(e2));
  var F = (e2) => M(e2, "number", z);
  var B = (e2) => !!e2 && Number.isInteger(Number(e2));
  var Oe = (e2) => e2.endsWith("%") && z(e2.slice(0, -1));
  var l = (e2) => se.test(e2);
  var A = (e2) => Ee.test(e2);
  var We = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
  var $e = (e2) => M(e2, We, ie);
  var De = (e2) => M(e2, "position", ie);
  var He = /* @__PURE__ */ new Set(["image", "url"]);
  var Fe = (e2) => M(e2, He, qe);
  var Ue = (e2) => M(e2, "", Ze);
  var I = () => true;
  var M = (e2, r, t) => {
    let o = se.exec(e2);
    return o ? o[1] ? typeof r == "string" ? o[1] === r : r.has(o[1]) : t(o[2]) : false;
  };
  var Ke = (e2) => Le.test(e2) && !Ve.test(e2);
  var ie = () => false;
  var Ze = (e2) => Ge.test(e2);
  var qe = (e2) => je.test(e2);
  var Ye = () => {
    let e2 = f("colors"), r = f("spacing"), t = f("blur"), o = f("brightness"), s = f("borderColor"), n = f("borderRadius"), a = f("borderSpacing"), i = f("borderWidth"), d = f("contrast"), c = f("grayscale"), u = f("hueRotate"), g = f("invert"), m = f("gap"), v2 = f("gradientColorStops"), w2 = f("gradientColorStopPositions"), h = f("inset"), p = f("margin"), x = f("opacity"), C2 = f("padding"), N2 = f("saturate"), P = f("scale"), L2 = f("sepia"), K2 = f("skew"), Z2 = f("space"), q = f("translate"), W2 = () => ["auto", "contain", "none"], $2 = () => ["auto", "hidden", "clip", "visible", "scroll"], D = () => ["auto", l, r], b2 = () => [l, r], Y = () => ["", k, R], V2 = () => ["auto", z, l], J2 = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], G2 = () => ["solid", "dashed", "dotted", "double", "none"], X2 = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], T2 = () => ["", "0", l], Q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [z, l];
    return { cacheSize: 500, separator: ":", theme: { colors: [I], spacing: [k, R], blur: ["none", "", A, l], brightness: S(), borderColor: [e2], borderRadius: ["none", "", "full", A, l], borderSpacing: b2(), borderWidth: Y(), contrast: S(), grayscale: T2(), hueRotate: S(), invert: T2(), gap: b2(), gradientColorStops: [e2], gradientColorStopPositions: [Oe, R], inset: D(), margin: D(), opacity: S(), padding: b2(), saturate: S(), scale: S(), sepia: T2(), skew: S(), space: b2(), translate: b2() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", l] }], container: ["container"], columns: [{ columns: [A] }], "break-after": [{ "break-after": Q() }], "break-before": [{ "break-before": Q() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [...J2(), l] }], overflow: [{ overflow: $2() }], "overflow-x": [{ "overflow-x": $2() }], "overflow-y": [{ "overflow-y": $2() }], overscroll: [{ overscroll: W2() }], "overscroll-x": [{ "overscroll-x": W2() }], "overscroll-y": [{ "overscroll-y": W2() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [h] }], "inset-x": [{ "inset-x": [h] }], "inset-y": [{ "inset-y": [h] }], start: [{ start: [h] }], end: [{ end: [h] }], top: [{ top: [h] }], right: [{ right: [h] }], bottom: [{ bottom: [h] }], left: [{ left: [h] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", B, l] }], basis: [{ basis: D() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", l] }], grow: [{ grow: T2() }], shrink: [{ shrink: T2() }], order: [{ order: ["first", "last", "none", B, l] }], "grid-cols": [{ "grid-cols": [I] }], "col-start-end": [{ col: ["auto", { span: ["full", B, l] }, l] }], "col-start": [{ "col-start": V2() }], "col-end": [{ "col-end": V2() }], "grid-rows": [{ "grid-rows": [I] }], "row-start-end": [{ row: ["auto", { span: [B, l] }, l] }], "row-start": [{ "row-start": V2() }], "row-end": [{ "row-end": V2() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", l] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", l] }], gap: [{ gap: [m] }], "gap-x": [{ "gap-x": [m] }], "gap-y": [{ "gap-y": [m] }], "justify-content": [{ justify: ["normal", ...H()] }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal", ...H(), "baseline"] }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [...H(), "baseline"] }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [C2] }], px: [{ px: [C2] }], py: [{ py: [C2] }], ps: [{ ps: [C2] }], pe: [{ pe: [C2] }], pt: [{ pt: [C2] }], pr: [{ pr: [C2] }], pb: [{ pb: [C2] }], pl: [{ pl: [C2] }], m: [{ m: [p] }], mx: [{ mx: [p] }], my: [{ my: [p] }], ms: [{ ms: [p] }], me: [{ me: [p] }], mt: [{ mt: [p] }], mr: [{ mr: [p] }], mb: [{ mb: [p] }], ml: [{ ml: [p] }], "space-x": [{ "space-x": [Z2] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [Z2] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", l, r] }], "min-w": [{ "min-w": [l, r, "min", "max", "fit"] }], "max-w": [{ "max-w": [l, r, "none", "full", "min", "max", "fit", "prose", { screen: [A] }, A] }], h: [{ h: [l, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }], "min-h": [{ "min-h": [l, r, "min", "max", "fit", "svh", "lvh", "dvh"] }], "max-h": [{ "max-h": [l, r, "min", "max", "fit", "svh", "lvh", "dvh"] }], size: [{ size: [l, r, "auto", "min", "max", "fit"] }], "font-size": [{ text: ["base", A, R] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", F] }], "font-family": [{ font: [I] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", l] }], "line-clamp": [{ "line-clamp": ["none", z, F] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", k, l] }], "list-image": [{ "list-image": ["none", l] }], "list-style-type": [{ list: ["none", "disc", "decimal", l] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [e2] }], "placeholder-opacity": [{ "placeholder-opacity": [x] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [e2] }], "text-opacity": [{ "text-opacity": [x] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...G2(), "wavy"] }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", k, R] }], "underline-offset": [{ "underline-offset": ["auto", k, l] }], "text-decoration-color": [{ decoration: [e2] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: b2() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", l] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [x] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [...J2(), De] }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", $e] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, Fe] }], "bg-color": [{ bg: [e2] }], "gradient-from-pos": [{ from: [w2] }], "gradient-via-pos": [{ via: [w2] }], "gradient-to-pos": [{ to: [w2] }], "gradient-from": [{ from: [v2] }], "gradient-via": [{ via: [v2] }], "gradient-to": [{ to: [v2] }], rounded: [{ rounded: [n] }], "rounded-s": [{ "rounded-s": [n] }], "rounded-e": [{ "rounded-e": [n] }], "rounded-t": [{ "rounded-t": [n] }], "rounded-r": [{ "rounded-r": [n] }], "rounded-b": [{ "rounded-b": [n] }], "rounded-l": [{ "rounded-l": [n] }], "rounded-ss": [{ "rounded-ss": [n] }], "rounded-se": [{ "rounded-se": [n] }], "rounded-ee": [{ "rounded-ee": [n] }], "rounded-es": [{ "rounded-es": [n] }], "rounded-tl": [{ "rounded-tl": [n] }], "rounded-tr": [{ "rounded-tr": [n] }], "rounded-br": [{ "rounded-br": [n] }], "rounded-bl": [{ "rounded-bl": [n] }], "border-w": [{ border: [i] }], "border-w-x": [{ "border-x": [i] }], "border-w-y": [{ "border-y": [i] }], "border-w-s": [{ "border-s": [i] }], "border-w-e": [{ "border-e": [i] }], "border-w-t": [{ "border-t": [i] }], "border-w-r": [{ "border-r": [i] }], "border-w-b": [{ "border-b": [i] }], "border-w-l": [{ "border-l": [i] }], "border-opacity": [{ "border-opacity": [x] }], "border-style": [{ border: [...G2(), "hidden"] }], "divide-x": [{ "divide-x": [i] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [i] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [x] }], "divide-style": [{ divide: G2() }], "border-color": [{ border: [s] }], "border-color-x": [{ "border-x": [s] }], "border-color-y": [{ "border-y": [s] }], "border-color-s": [{ "border-s": [s] }], "border-color-e": [{ "border-e": [s] }], "border-color-t": [{ "border-t": [s] }], "border-color-r": [{ "border-r": [s] }], "border-color-b": [{ "border-b": [s] }], "border-color-l": [{ "border-l": [s] }], "divide-color": [{ divide: [s] }], "outline-style": [{ outline: ["", ...G2()] }], "outline-offset": [{ "outline-offset": [k, l] }], "outline-w": [{ outline: [k, R] }], "outline-color": [{ outline: [e2] }], "ring-w": [{ ring: Y() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [e2] }], "ring-opacity": [{ "ring-opacity": [x] }], "ring-offset-w": [{ "ring-offset": [k, R] }], "ring-offset-color": [{ "ring-offset": [e2] }], shadow: [{ shadow: ["", "inner", "none", A, Ue] }], "shadow-color": [{ shadow: [I] }], opacity: [{ opacity: [x] }], "mix-blend": [{ "mix-blend": [...X2(), "plus-lighter", "plus-darker"] }], "bg-blend": [{ "bg-blend": X2() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [t] }], brightness: [{ brightness: [o] }], contrast: [{ contrast: [d] }], "drop-shadow": [{ "drop-shadow": ["", "none", A, l] }], grayscale: [{ grayscale: [c] }], "hue-rotate": [{ "hue-rotate": [u] }], invert: [{ invert: [g] }], saturate: [{ saturate: [N2] }], sepia: [{ sepia: [L2] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [t] }], "backdrop-brightness": [{ "backdrop-brightness": [o] }], "backdrop-contrast": [{ "backdrop-contrast": [d] }], "backdrop-grayscale": [{ "backdrop-grayscale": [c] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }], "backdrop-invert": [{ "backdrop-invert": [g] }], "backdrop-opacity": [{ "backdrop-opacity": [x] }], "backdrop-saturate": [{ "backdrop-saturate": [N2] }], "backdrop-sepia": [{ "backdrop-sepia": [L2] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [a] }], "border-spacing-x": [{ "border-spacing-x": [a] }], "border-spacing-y": [{ "border-spacing-y": [a] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", l] }], duration: [{ duration: S() }], ease: [{ ease: ["linear", "in", "out", "in-out", l] }], delay: [{ delay: S() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", l] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [P] }], "scale-x": [{ "scale-x": [P] }], "scale-y": [{ "scale-y": [P] }], rotate: [{ rotate: [B, l] }], "translate-x": [{ "translate-x": [q] }], "translate-y": [{ "translate-y": [q] }], "skew-x": [{ "skew-x": [K2] }], "skew-y": [{ "skew-y": [K2] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l] }], accent: [{ accent: ["auto", e2] }], appearance: [{ appearance: ["none", "auto"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l] }], "caret-color": [{ caret: [e2] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": b2() }], "scroll-mx": [{ "scroll-mx": b2() }], "scroll-my": [{ "scroll-my": b2() }], "scroll-ms": [{ "scroll-ms": b2() }], "scroll-me": [{ "scroll-me": b2() }], "scroll-mt": [{ "scroll-mt": b2() }], "scroll-mr": [{ "scroll-mr": b2() }], "scroll-mb": [{ "scroll-mb": b2() }], "scroll-ml": [{ "scroll-ml": b2() }], "scroll-p": [{ "scroll-p": b2() }], "scroll-px": [{ "scroll-px": b2() }], "scroll-py": [{ "scroll-py": b2() }], "scroll-ps": [{ "scroll-ps": b2() }], "scroll-pe": [{ "scroll-pe": b2() }], "scroll-pt": [{ "scroll-pt": b2() }], "scroll-pr": [{ "scroll-pr": b2() }], "scroll-pb": [{ "scroll-pb": b2() }], "scroll-pl": [{ "scroll-pl": b2() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", l] }], fill: [{ fill: [e2, "none"] }], "stroke-w": [{ stroke: [k, R, F] }], stroke: [{ stroke: [e2, "none"] }], sr: ["sr-only", "not-sr-only"], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
  };
  var ae = Be(Ye);
  function _(...e2) {
    return ae(j(e2));
  }
  function le(e2, r) {
    if (typeof e2 == "function") return e2(r);
    e2 != null && (e2.current = r);
  }
  function ce(...e2) {
    return (r) => {
      let t = false, o = e2.map((s) => {
        let n = le(s, r);
        return !t && typeof n == "function" && (t = true), n;
      });
      if (t) return () => {
        for (let s = 0; s < o.length; s++) {
          let n = o[s];
          typeof n == "function" ? n() : le(e2[s], null);
        }
      };
    };
  }
  var Xe = /* @__PURE__ */ Symbol.for("react.lazy");
  var O = y[" use ".trim().toString()];
  function Qe(e2) {
    return typeof e2 == "object" && e2 !== null && "then" in e2;
  }
  function ue(e2) {
    return e2 != null && typeof e2 == "object" && "$$typeof" in e2 && e2.$$typeof === Xe && "_payload" in e2 && Qe(e2._payload);
  }
  function et(e2) {
    let r = tt(e2), t = y.forwardRef((o, s) => {
      let { children: n, ...a } = o;
      ue(n) && typeof O == "function" && (n = O(n._payload));
      let i = y.Children.toArray(n), d = i.find(ot);
      if (d) {
        let c = d.props.children, u = i.map((g) => g === d ? y.Children.count(c) > 1 ? y.Children.only(null) : y.isValidElement(c) ? c.props.children : null : g);
        return (0, import_jsx_runtime.jsx)(r, { ...a, ref: s, children: y.isValidElement(c) ? y.cloneElement(c, void 0, u) : null });
      }
      return (0, import_jsx_runtime.jsx)(r, { ...a, ref: s, children: n });
    });
    return t.displayName = `${e2}.Slot`, t;
  }
  var E = et("Slot");
  function tt(e2) {
    let r = y.forwardRef((t, o) => {
      let { children: s, ...n } = t;
      if (ue(s) && typeof O == "function" && (s = O(s._payload)), y.isValidElement(s)) {
        let a = st(s), i = nt(n, s.props);
        return s.type !== y.Fragment && (i.ref = o ? ce(o, a) : a), y.cloneElement(s, i);
      }
      return y.Children.count(s) > 1 ? y.Children.only(null) : null;
    });
    return r.displayName = `${e2}.SlotClone`, r;
  }
  var rt = /* @__PURE__ */ Symbol("radix.slottable");
  function ot(e2) {
    return y.isValidElement(e2) && typeof e2.type == "function" && "__radixId" in e2.type && e2.type.__radixId === rt;
  }
  function nt(e2, r) {
    let t = { ...r };
    for (let o in r) {
      let s = e2[o], n = r[o];
      /^on[A-Z]/.test(o) ? s && n ? t[o] = (...i) => {
        let d = n(...i);
        return s(...i), d;
      } : s && (t[o] = s) : o === "style" ? t[o] = { ...s, ...n } : o === "className" && (t[o] = [s, n].filter(Boolean).join(" "));
    }
    return { ...e2, ...t };
  }
  function st(e2) {
    let r = Object.getOwnPropertyDescriptor(e2.props, "ref")?.get, t = r && "isReactWarning" in r && r.isReactWarning;
    return t ? e2.ref : (r = Object.getOwnPropertyDescriptor(e2, "ref")?.get, t = r && "isReactWarning" in r && r.isReactWarning, t ? e2.props.ref : e2.props.ref || e2.ref);
  }
  var pe = (e2) => typeof e2 == "boolean" ? `${e2}` : e2 === 0 ? "0" : e2;
  var fe = j;
  var be = (e2, r) => (t) => {
    var o;
    if (r?.variants == null) return fe(e2, t?.class, t?.className);
    let { variants: s, defaultVariants: n } = r, a = Object.keys(s).map((c) => {
      let u = t?.[c], g = n?.[c];
      if (u === null) return null;
      let m = pe(u) || pe(g);
      return s[c][m];
    }), i = t && Object.entries(t).reduce((c, u) => {
      let [g, m] = u;
      return m === void 0 || (c[g] = m), c;
    }, {}), d = r == null || (o = r.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((c, u) => {
      let { class: g, className: m, ...v2 } = u;
      return Object.entries(v2).every((w2) => {
        let [h, p] = w2;
        return Array.isArray(p) ? p.includes({ ...n, ...i }[h]) : { ...n, ...i }[h] === p;
      }) ? [...c, g, m] : c;
    }, []);
    return fe(e2, a, d, t?.class, t?.className);
  };
  var at = be("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", { variants: { variant: { default: "border border-border bg-card text-card-foreground shadow-sm hover:bg-muted", primary: "bg-foreground text-background hover:bg-foreground/90", destructive: "bg-red-600 text-white hover:bg-red-700", outline: "border border-border bg-transparent text-textSecondary hover:bg-muted hover:text-textPrimary", secondary: "bg-secondary text-textPrimary hover:bg-secondary/80", ghost: "text-textSecondary hover:bg-muted hover:text-textPrimary", link: "text-textSecondary underline-offset-4 hover:underline hover:text-textPrimary", danger: "bg-destructive/10 text-destructive hover:bg-destructive/20", destructiveOutline: "border border-destructive/40 bg-card text-destructive shadow-sm hover:bg-destructive/5" }, size: { default: "h-10 px-4 py-2 rounded-full", sm: "h-8 px-3 text-xs rounded-full", lg: "h-11 px-6 rounded-full", icon: "h-9 w-9 rounded-lg", control: "h-8 px-4 rounded font-normal", controlIcon: "h-8 w-8 rounded" } }, defaultVariants: { variant: "default", size: "default" } });
  var ge = (0, import_react.forwardRef)(({ className: e2, variant: r, size: t, asChild: o = false, ...s }, n) => (0, import_jsx_runtime2.jsx)(o ? E : "button", { className: _(at({ variant: r, size: t, className: e2 })), ref: n, ...s }));
  ge.displayName = "Button";
  var ct = { primary: "border-ds-ink bg-ds-ink text-ds-page shadow-ds-control", secondary: "border-ds-hairline bg-ds-white text-ds-ink shadow-ds-control", ghost: "border-transparent bg-transparent text-ds-ink", destructive: "border-ds-redBorder bg-ds-white text-ds-red shadow-ds-control", success: "border-ds-teal bg-ds-white text-ds-teal shadow-ds-control" };
  function dt({ variant: e2 = "primary", compact: r = false, fullWidth: t = false, large: o = false, mobileLarge: s = false, className: n }) {
    return _("box-border inline-flex h-8 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded border font-text text-[13px] font-normal leading-none tracking-[-0.01em] transition-[background-color,border-color,color,transform] [transition-duration:120ms]", "hover:scale-105 active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-ink4", "disabled:cursor-default disabled:scale-100 disabled:border-ds-hairline disabled:bg-transparent disabled:text-ds-ink4 disabled:shadow-none", r ? "px-3" : "px-3 md:px-4", t && "flex w-full hover:scale-[1.02]", o && "h-[52px] rounded-lg text-[15px]", s && "max-md:flex max-md:h-[52px] max-md:w-full max-md:rounded-lg max-md:text-[15px] max-md:hover:scale-[1.02]", ct[e2], n);
  }
  var he = (0, import_react2.forwardRef)(({ variant: e2, compact: r, fullWidth: t, large: o, mobileLarge: s, className: n, asChild: a = false, iconBefore: i, iconAfter: d, type: c = "button", children: u, ...g }, m) => {
    let v2 = dt({ variant: e2, compact: r, fullWidth: t, large: o, mobileLarge: s, className: n });
    return a ? (0, import_jsx_runtime3.jsx)(E, { ref: m, className: v2, ...g, children: u }) : (0, import_jsx_runtime3.jsxs)("button", { ref: m, type: c, className: v2, ...g, children: [i, u, d] });
  });
  he.displayName = "DsButton";
  var ye = (0, import_react2.forwardRef)(({ label: e2, className: r, asChild: t = false, type: o = "button", ...s }, n) => (0, import_jsx_runtime3.jsx)(t ? E : "button", { ref: n, type: t ? void 0 : o, "aria-label": e2, title: e2, className: _("inline-flex h-8 w-8 flex-none cursor-pointer items-center justify-center rounded border-0 bg-transparent p-2 leading-none text-ds-ink transition-colors [transition-duration:120ms] hover:bg-ds-hover active:bg-ds-hoverStrong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-ink4 disabled:cursor-default disabled:bg-transparent disabled:text-ds-ink4 [&_svg]:h-4 [&_svg]:w-4", r), ...s }));
  ye.displayName = "DsIconButton";

  // ../../opt/files/kit/library.mjs
  var import_react3 = __toESM(require_react(), 1);
  var import_react4 = __toESM(require_react(), 1);
  var import_react5 = __toESM(require_react(), 1);
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
  var import_react6 = __toESM(require_react(), 1);
  var import_react7 = __toESM(require_react(), 1);
  var import_react8 = __toESM(require_react(), 1);
  var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
  var import_react9 = __toESM(require_react(), 1);
  var import_react10 = __toESM(require_react(), 1);
  var import_react11 = __toESM(require_react(), 1);
  var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
  var import_react12 = __toESM(require_react(), 1);
  var import_react13 = __toESM(require_react(), 1);
  var import_react14 = __toESM(require_react(), 1);
  var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
  var import_react15 = __toESM(require_react(), 1);
  var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
  var import_react16 = __toESM(require_react(), 1);
  var import_react17 = __toESM(require_react(), 1);
  var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
  var import_react18 = __toESM(require_react(), 1);
  var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
  var import_react19 = __toESM(require_react(), 1);
  var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
  var Zl = Object.create;
  var er = Object.defineProperty;
  var _l = Object.getOwnPropertyDescriptor;
  var Yl = Object.getOwnPropertyNames;
  var Ql = Object.getPrototypeOf;
  var jl = Object.prototype.hasOwnProperty;
  var Jl = (e2, a) => () => (a || e2((a = { exports: {} }).exports, a), a.exports);
  var eu = (e2, a, t, o) => {
    if (a && typeof a == "object" || typeof a == "function") for (let r of Yl(a)) !jl.call(e2, r) && r !== t && er(e2, r, { get: () => a[r], enumerable: !(o = _l(a, r)) || o.enumerable });
    return e2;
  };
  var ar = (e2, a, t) => (t = e2 != null ? Zl(Ql(e2)) : {}, eu(a || !e2 || !e2.__esModule ? er(t, "default", { value: e2, enumerable: true }) : t, e2));
  var ko = Jl((np, rt2) => {
    (function() {
      "use strict";
      var e2 = {}.hasOwnProperty;
      function a() {
        for (var r = "", l2 = 0; l2 < arguments.length; l2++) {
          var u = arguments[l2];
          u && (r = o(r, t(u)));
        }
        return r;
      }
      function t(r) {
        if (typeof r == "string" || typeof r == "number") return r;
        if (typeof r != "object") return "";
        if (Array.isArray(r)) return a.apply(null, r);
        if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) return r.toString();
        var l2 = "";
        for (var u in r) e2.call(r, u) && r[u] && (l2 = o(l2, u));
        return l2;
      }
      function o(r, l2) {
        return l2 ? r ? r + " " + l2 : r + l2 : r;
      }
      typeof rt2 < "u" && rt2.exports ? (a.default = a, rt2.exports = a) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
        return a;
      }) : window.classNames = a;
    })();
  });
  function Ae2() {
    let e2 = (0, import_react5.useRef)(null), a = (0, import_react5.useRef)(false), t = (o) => {
      e2.current?.pointerId === o.pointerId && (e2.current = null, delete o.currentTarget.dataset.dragging, o.currentTarget.hasPointerCapture(o.pointerId) && o.currentTarget.releasePointerCapture(o.pointerId));
    };
    return { "data-drag-scroll": "", onPointerEnter: (o) => {
      o.currentTarget.toggleAttribute("data-can-drag", o.pointerType === "mouse" && o.currentTarget.scrollWidth > o.currentTarget.clientWidth);
    }, onPointerDown: (o) => {
      a.current = false, !(o.pointerType !== "mouse" || o.button !== 0 || o.currentTarget.scrollWidth <= o.currentTarget.clientWidth) && o.target.closest("[data-drag-scroll], dialog") === o.currentTarget && (e2.current = { pointerId: o.pointerId, startX: o.clientX, scrollLeft: o.currentTarget.scrollLeft, active: false });
    }, onPointerMove: (o) => {
      let r = e2.current;
      if (!r || r.pointerId !== o.pointerId) return;
      let l2 = o.clientX - r.startX;
      !r.active && Math.abs(l2) < 5 || (r.active || (r.active = true, a.current = true, o.currentTarget.dataset.dragging = "", o.currentTarget.setPointerCapture(o.pointerId)), o.preventDefault(), o.currentTarget.scrollLeft = r.scrollLeft - l2);
    }, onPointerUp: t, onPointerCancel: t, onLostPointerCapture: t, onPointerLeave: () => {
      e2.current?.active || (e2.current = null);
    }, onDragStart: (o) => o.preventDefault(), onClickCapture: (o) => {
      !a.current || o.detail === 0 || (a.current = false, o.preventDefault(), o.stopPropagation());
    } };
  }
  function V(e2) {
    return { objectFit: e2.fit, objectPosition: e2.position, backgroundColor: e2.background };
  }
  function ru({ children: e2, width: a = "fluid", className: t, ...o }) {
    return (0, import_jsx_runtime4.jsx)("main", { ...o, className: t ? `file-card ${t}` : "file-card", "data-width": a, children: e2 });
  }
  function uu({ title: e2, fact: a, factKnown: t = false, intro: o }) {
    return (0, import_jsx_runtime4.jsxs)("header", { className: "file-header", children: [(0, import_jsx_runtime4.jsx)("h1", { className: "file-title", children: e2 }), a && (0, import_jsx_runtime4.jsx)("p", { className: t ? "file-fact is-known" : "file-fact", children: a }), o && (0, import_jsx_runtime4.jsx)("p", { className: "file-intro", children: o })] });
  }
  function su({ label: e2, heading: a = false, children: t }) {
    let o = import_react4.default.useId();
    return (0, import_jsx_runtime4.jsxs)("section", { className: "file-group", "aria-labelledby": o, children: [(0, import_jsx_runtime4.jsx)("h2", { id: o, className: a ? "file-group-heading" : "file-group-label", children: e2 }), t] });
  }
  function du({ children: e2 }) {
    return (0, import_jsx_runtime4.jsx)("div", { className: "file-rows", children: e2 });
  }
  function fu({ number: e2, thumbnail: a, name: t, detail: o, value: r, valueKnown: l2 = false }) {
    let u = e2 !== void 0 ? (0, import_jsx_runtime4.jsx)("span", { className: "file-row-slot is-number", children: e2 }) : a ? (0, import_jsx_runtime4.jsx)("span", { className: "file-row-slot", children: (0, import_jsx_runtime4.jsx)("img", { src: a.src, alt: a.alt, style: V(a), loading: "lazy" }) }) : null;
    return (0, import_jsx_runtime4.jsxs)("div", { className: "file-row", children: [u, (0, import_jsx_runtime4.jsxs)("div", { className: "file-row-main", children: [(0, import_jsx_runtime4.jsx)("span", { className: "file-strong", children: t }), o && (0, import_jsx_runtime4.jsx)("span", { className: "file-row-detail", children: o })] }), r && (0, import_jsx_runtime4.jsx)("span", { className: l2 ? "file-row-value file-known" : "file-row-value", children: r })] });
  }
  function Qe2({ items: e2 }) {
    return (0, import_jsx_runtime4.jsx)("dl", { className: "file-facts", children: e2.map((a) => (0, import_jsx_runtime4.jsxs)("div", { children: [(0, import_jsx_runtime4.jsx)("dt", { children: a.label }), (0, import_jsx_runtime4.jsx)("dd", { children: a.value })] }, a.label)) });
  }
  function cu({ children: e2 }) {
    return (0, import_jsx_runtime4.jsx)("p", { className: "file-p", children: e2 });
  }
  function mu({ children: e2 }) {
    return (0, import_jsx_runtime4.jsx)("p", { className: "file-key file-bar", children: e2 });
  }
  function gu({ title: e2, children: a, tone: t = "note" }) {
    return (0, import_jsx_runtime4.jsxs)("aside", { className: "file-callout file-bar", "data-tone": t, children: [(0, import_jsx_runtime4.jsx)("span", { className: "file-strong", children: e2 }), (0, import_jsx_runtime4.jsx)("span", { children: a })] });
  }
  function Ct({ items: e2, label: a, layout: t = "grid", bleed: o = t === "strip" && e2.length > 1 }) {
    let r = Ae2(), l2 = ["file-photos", e2.length === 1 && "is-single", t === "strip" && o && "file-bleed"].filter(Boolean).join(" ");
    return (0, import_jsx_runtime4.jsx)("div", { ...t === "strip" ? r : {}, className: l2, "data-layout": t, role: "region", "aria-label": a, tabIndex: t === "strip" && e2.length > 1 ? 0 : void 0, children: e2.map((u) => (0, import_jsx_runtime4.jsx)("img", { src: u.src, alt: u.alt, style: V(u), loading: "lazy" }, u.src)) });
  }
  function Su({ children: e2 }) {
    return (0, import_jsx_runtime4.jsx)("footer", { className: "file-closing", children: e2 });
  }
  function ce2(e2, a) {
    return e2 == null || a == null ? NaN : e2 < a ? -1 : e2 > a ? 1 : e2 >= a ? 0 : NaN;
  }
  function St(e2, a) {
    return e2 == null || a == null ? NaN : a < e2 ? -1 : a > e2 ? 1 : a >= e2 ? 0 : NaN;
  }
  function Fa(e2) {
    let a, t, o;
    e2.length !== 2 ? (a = ce2, t = (s, d) => ce2(e2(s), d), o = (s, d) => e2(s) - d) : (a = e2 === ce2 || e2 === St ? e2 : yu, t = e2, o = e2);
    function r(s, d, f2 = 0, c = s.length) {
      if (f2 < c) {
        if (a(d, d) !== 0) return c;
        do {
          let i = f2 + c >>> 1;
          t(s[i], d) < 0 ? f2 = i + 1 : c = i;
        } while (f2 < c);
      }
      return f2;
    }
    function l2(s, d, f2 = 0, c = s.length) {
      if (f2 < c) {
        if (a(d, d) !== 0) return c;
        do {
          let i = f2 + c >>> 1;
          t(s[i], d) <= 0 ? f2 = i + 1 : c = i;
        } while (f2 < c);
      }
      return f2;
    }
    function u(s, d, f2 = 0, c = s.length) {
      let i = r(s, d, f2, c - 1);
      return i > f2 && o(s[i - 1], d) > -o(s[i], d) ? i - 1 : i;
    }
    return { left: r, center: u, right: l2 };
  }
  function yu() {
    return 0;
  }
  function yt(e2) {
    return e2 === null ? NaN : +e2;
  }
  var or = Fa(ce2);
  var rr = or.right;
  var bu = or.left;
  var wu = Fa(yt).center;
  var wt = Math.sqrt(50);
  var kt = Math.sqrt(10);
  var Pt = Math.sqrt(2);
  function j2(e2, a, t) {
    e2.prototype = a.prototype = t, t.constructor = e2;
  }
  function oe2(e2, a) {
    var t = Object.create(e2.prototype);
    for (var o in a) t[o] = a[o];
    return t;
  }
  function z2() {
  }
  var re2 = 0.7;
  var xe2 = 1 / re2;
  var Fe2 = "\\s*([+-]?\\d+)\\s*";
  var ea = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
  var G = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
  var Mu = /^#([0-9a-f]{3,8})$/;
  var Au = new RegExp(`^rgb\\(${Fe2},${Fe2},${Fe2}\\)$`);
  var Du = new RegExp(`^rgb\\(${G},${G},${G}\\)$`);
  var Ru = new RegExp(`^rgba\\(${Fe2},${Fe2},${Fe2},${ea}\\)$`);
  var Fu = new RegExp(`^rgba\\(${G},${G},${G},${ea}\\)$`);
  var Bu = new RegExp(`^hsl\\(${ea},${G},${G}\\)$`);
  var Tu = new RegExp(`^hsla\\(${ea},${G},${G},${ea}\\)$`);
  var sr = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
  j2(z2, le2, { copy(e2) {
    return Object.assign(new this.constructor(), this, e2);
  }, displayable() {
    return this.rgb().displayable();
  }, hex: dr, formatHex: dr, formatHex8: qu, formatHsl: Ou, formatRgb: fr, toString: fr });
  function dr() {
    return this.rgb().formatHex();
  }
  function qu() {
    return this.rgb().formatHex8();
  }
  function Ou() {
    return xr(this).formatHsl();
  }
  function fr() {
    return this.rgb().formatRgb();
  }
  function le2(e2) {
    var a, t;
    return e2 = (e2 + "").trim().toLowerCase(), (a = Mu.exec(e2)) ? (t = a[1].length, a = parseInt(a[1], 16), t === 6 ? nr(a) : t === 3 ? new R2(a >> 8 & 15 | a >> 4 & 240, a >> 4 & 15 | a & 240, (a & 15) << 4 | a & 15, 1) : t === 8 ? Ha(a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, (a & 255) / 255) : t === 4 ? Ha(a >> 12 & 15 | a >> 8 & 240, a >> 8 & 15 | a >> 4 & 240, a >> 4 & 15 | a & 240, ((a & 15) << 4 | a & 15) / 255) : null) : (a = Au.exec(e2)) ? new R2(a[1], a[2], a[3], 1) : (a = Du.exec(e2)) ? new R2(a[1] * 255 / 100, a[2] * 255 / 100, a[3] * 255 / 100, 1) : (a = Ru.exec(e2)) ? Ha(a[1], a[2], a[3], a[4]) : (a = Fu.exec(e2)) ? Ha(a[1] * 255 / 100, a[2] * 255 / 100, a[3] * 255 / 100, a[4]) : (a = Bu.exec(e2)) ? pr(a[1], a[2] / 100, a[3] / 100, 1) : (a = Tu.exec(e2)) ? pr(a[1], a[2] / 100, a[3] / 100, a[4]) : sr.hasOwnProperty(e2) ? nr(sr[e2]) : e2 === "transparent" ? new R2(NaN, NaN, NaN, 0) : null;
  }
  function nr(e2) {
    return new R2(e2 >> 16 & 255, e2 >> 8 & 255, e2 & 255, 1);
  }
  function Ha(e2, a, t, o) {
    return o <= 0 && (e2 = a = t = NaN), new R2(e2, a, t, o);
  }
  function aa(e2) {
    return e2 instanceof z2 || (e2 = le2(e2)), e2 ? (e2 = e2.rgb(), new R2(e2.r, e2.g, e2.b, e2.opacity)) : new R2();
  }
  function Be2(e2, a, t, o) {
    return arguments.length === 1 ? aa(e2) : new R2(e2, a, t, o ?? 1);
  }
  function R2(e2, a, t, o) {
    this.r = +e2, this.g = +a, this.b = +t, this.opacity = +o;
  }
  j2(R2, Be2, oe2(z2, { brighter(e2) {
    return e2 = e2 == null ? xe2 : Math.pow(xe2, e2), new R2(this.r * e2, this.g * e2, this.b * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? re2 : Math.pow(re2, e2), new R2(this.r * e2, this.g * e2, this.b * e2, this.opacity);
  }, rgb() {
    return this;
  }, clamp() {
    return new R2(me2(this.r), me2(this.g), me2(this.b), Na(this.opacity));
  }, displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  }, hex: ir, formatHex: ir, formatHex8: Hu, formatRgb: cr, toString: cr }));
  function ir() {
    return `#${pe2(this.r)}${pe2(this.g)}${pe2(this.b)}`;
  }
  function Hu() {
    return `#${pe2(this.r)}${pe2(this.g)}${pe2(this.b)}${pe2((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function cr() {
    let e2 = Na(this.opacity);
    return `${e2 === 1 ? "rgb(" : "rgba("}${me2(this.r)}, ${me2(this.g)}, ${me2(this.b)}${e2 === 1 ? ")" : `, ${e2})`}`;
  }
  function Na(e2) {
    return isNaN(e2) ? 1 : Math.max(0, Math.min(1, e2));
  }
  function me2(e2) {
    return Math.max(0, Math.min(255, Math.round(e2) || 0));
  }
  function pe2(e2) {
    return e2 = me2(e2), (e2 < 16 ? "0" : "") + e2.toString(16);
  }
  function pr(e2, a, t, o) {
    return o <= 0 ? e2 = a = t = NaN : t <= 0 || t >= 1 ? e2 = a = NaN : a <= 0 && (e2 = NaN), new E2(e2, a, t, o);
  }
  function xr(e2) {
    if (e2 instanceof E2) return new E2(e2.h, e2.s, e2.l, e2.opacity);
    if (e2 instanceof z2 || (e2 = le2(e2)), !e2) return new E2();
    if (e2 instanceof E2) return e2;
    e2 = e2.rgb();
    var a = e2.r / 255, t = e2.g / 255, o = e2.b / 255, r = Math.min(a, t, o), l2 = Math.max(a, t, o), u = NaN, s = l2 - r, d = (l2 + r) / 2;
    return s ? (a === l2 ? u = (t - o) / s + (t < o) * 6 : t === l2 ? u = (o - a) / s + 2 : u = (a - t) / s + 4, s /= d < 0.5 ? l2 + r : 2 - l2 - r, u *= 60) : s = d > 0 && d < 1 ? 0 : u, new E2(u, s, d, e2.opacity);
  }
  function ta(e2, a, t, o) {
    return arguments.length === 1 ? xr(e2) : new E2(e2, a, t, o ?? 1);
  }
  function E2(e2, a, t, o) {
    this.h = +e2, this.s = +a, this.l = +t, this.opacity = +o;
  }
  j2(E2, ta, oe2(z2, { brighter(e2) {
    return e2 = e2 == null ? xe2 : Math.pow(xe2, e2), new E2(this.h, this.s, this.l * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? re2 : Math.pow(re2, e2), new E2(this.h, this.s, this.l * e2, this.opacity);
  }, rgb() {
    var e2 = this.h % 360 + (this.h < 0) * 360, a = isNaN(e2) || isNaN(this.s) ? 0 : this.s, t = this.l, o = t + (t < 0.5 ? t : 1 - t) * a, r = 2 * t - o;
    return new R2(Mt(e2 >= 240 ? e2 - 240 : e2 + 120, r, o), Mt(e2, r, o), Mt(e2 < 120 ? e2 + 240 : e2 - 120, r, o), this.opacity);
  }, clamp() {
    return new E2(mr(this.h), Ua(this.s), Ua(this.l), Na(this.opacity));
  }, displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  }, formatHsl() {
    let e2 = Na(this.opacity);
    return `${e2 === 1 ? "hsl(" : "hsla("}${mr(this.h)}, ${Ua(this.s) * 100}%, ${Ua(this.l) * 100}%${e2 === 1 ? ")" : `, ${e2})`}`;
  } }));
  function mr(e2) {
    return e2 = (e2 || 0) % 360, e2 < 0 ? e2 + 360 : e2;
  }
  function Ua(e2) {
    return Math.max(0, Math.min(1, e2 || 0));
  }
  function Mt(e2, a, t) {
    return (e2 < 60 ? a + (t - a) * e2 / 60 : e2 < 180 ? t : e2 < 240 ? a + (t - a) * (240 - e2) / 60 : a) * 255;
  }
  var Va = Math.PI / 180;
  var Ea = 180 / Math.PI;
  var Wa = 18;
  var Lr = 0.96422;
  var hr = 1;
  var gr = 0.82521;
  var Ir = 4 / 29;
  var Te2 = 6 / 29;
  var Cr = 3 * Te2 * Te2;
  var Uu = Te2 * Te2 * Te2;
  function Sr(e2) {
    if (e2 instanceof X) return new X(e2.l, e2.a, e2.b, e2.opacity);
    if (e2 instanceof J) return yr(e2);
    e2 instanceof R2 || (e2 = aa(e2));
    var a = Ft(e2.r), t = Ft(e2.g), o = Ft(e2.b), r = At((0.2225045 * a + 0.7168786 * t + 0.0606169 * o) / hr), l2, u;
    return a === t && t === o ? l2 = u = r : (l2 = At((0.4360747 * a + 0.3850649 * t + 0.1430804 * o) / Lr), u = At((0.0139322 * a + 0.0971045 * t + 0.7141733 * o) / gr)), new X(116 * r - 16, 500 * (l2 - r), 200 * (r - u), e2.opacity);
  }
  function qe2(e2, a, t, o) {
    return arguments.length === 1 ? Sr(e2) : new X(e2, a, t, o ?? 1);
  }
  function X(e2, a, t, o) {
    this.l = +e2, this.a = +a, this.b = +t, this.opacity = +o;
  }
  j2(X, qe2, oe2(z2, { brighter(e2) {
    return new X(this.l + Wa * (e2 ?? 1), this.a, this.b, this.opacity);
  }, darker(e2) {
    return new X(this.l - Wa * (e2 ?? 1), this.a, this.b, this.opacity);
  }, rgb() {
    var e2 = (this.l + 16) / 116, a = isNaN(this.a) ? e2 : e2 + this.a / 500, t = isNaN(this.b) ? e2 : e2 - this.b / 200;
    return a = Lr * Dt(a), e2 = hr * Dt(e2), t = gr * Dt(t), new R2(Rt(3.1338561 * a - 1.6168667 * e2 - 0.4906146 * t), Rt(-0.9787684 * a + 1.9161415 * e2 + 0.033454 * t), Rt(0.0719453 * a - 0.2289914 * e2 + 1.4052427 * t), this.opacity);
  } }));
  function At(e2) {
    return e2 > Uu ? Math.pow(e2, 1 / 3) : e2 / Cr + Ir;
  }
  function Dt(e2) {
    return e2 > Te2 ? e2 * e2 * e2 : Cr * (e2 - Ir);
  }
  function Rt(e2) {
    return 255 * (e2 <= 31308e-7 ? 12.92 * e2 : 1.055 * Math.pow(e2, 1 / 2.4) - 0.055);
  }
  function Ft(e2) {
    return (e2 /= 255) <= 0.04045 ? e2 / 12.92 : Math.pow((e2 + 0.055) / 1.055, 2.4);
  }
  function Nu(e2) {
    if (e2 instanceof J) return new J(e2.h, e2.c, e2.l, e2.opacity);
    if (e2 instanceof X || (e2 = Sr(e2)), e2.a === 0 && e2.b === 0) return new J(NaN, 0 < e2.l && e2.l < 100 ? 0 : NaN, e2.l, e2.opacity);
    var a = Math.atan2(e2.b, e2.a) * Ea;
    return new J(a < 0 ? a + 360 : a, Math.sqrt(e2.a * e2.a + e2.b * e2.b), e2.l, e2.opacity);
  }
  function oa(e2, a, t, o) {
    return arguments.length === 1 ? Nu(e2) : new J(e2, a, t, o ?? 1);
  }
  function J(e2, a, t, o) {
    this.h = +e2, this.c = +a, this.l = +t, this.opacity = +o;
  }
  function yr(e2) {
    if (isNaN(e2.h)) return new X(e2.l, 0, 0, e2.opacity);
    var a = e2.h * Va;
    return new X(e2.l, Math.cos(a) * e2.c, Math.sin(a) * e2.c, e2.opacity);
  }
  j2(J, oa, oe2(z2, { brighter(e2) {
    return new J(this.h, this.c, this.l + Wa * (e2 ?? 1), this.opacity);
  }, darker(e2) {
    return new J(this.h, this.c, this.l - Wa * (e2 ?? 1), this.opacity);
  }, rgb() {
    return yr(this).rgb();
  } }));
  var Pr = -0.14861;
  var Bt = 1.78277;
  var Tt = -0.29227;
  var Ga = -0.90649;
  var ra = 1.97294;
  var br = ra * Ga;
  var wr = ra * Bt;
  var kr = Bt * Tt - Ga * Pr;
  function Vu(e2) {
    if (e2 instanceof Le2) return new Le2(e2.h, e2.s, e2.l, e2.opacity);
    e2 instanceof R2 || (e2 = aa(e2));
    var a = e2.r / 255, t = e2.g / 255, o = e2.b / 255, r = (kr * o + br * a - wr * t) / (kr + br - wr), l2 = o - r, u = (ra * (t - r) - Tt * l2) / Ga, s = Math.sqrt(u * u + l2 * l2) / (ra * r * (1 - r)), d = s ? Math.atan2(u, l2) * Ea - 120 : NaN;
    return new Le2(d < 0 ? d + 360 : d, s, r, e2.opacity);
  }
  function Oe2(e2, a, t, o) {
    return arguments.length === 1 ? Vu(e2) : new Le2(e2, a, t, o ?? 1);
  }
  function Le2(e2, a, t, o) {
    this.h = +e2, this.s = +a, this.l = +t, this.opacity = +o;
  }
  j2(Le2, Oe2, oe2(z2, { brighter(e2) {
    return e2 = e2 == null ? xe2 : Math.pow(xe2, e2), new Le2(this.h, this.s, this.l * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? re2 : Math.pow(re2, e2), new Le2(this.h, this.s, this.l * e2, this.opacity);
  }, rgb() {
    var e2 = isNaN(this.h) ? 0 : (this.h + 120) * Va, a = +this.l, t = isNaN(this.s) ? 0 : this.s * a * (1 - a), o = Math.cos(e2), r = Math.sin(e2);
    return new R2(255 * (a + t * (Pr * o + Bt * r)), 255 * (a + t * (Tt * o + Ga * r)), 255 * (a + t * (ra * o)), this.opacity);
  } }));
  function qt(e2, a, t, o, r) {
    var l2 = e2 * e2, u = l2 * e2;
    return ((1 - 3 * e2 + 3 * l2 - u) * a + (4 - 6 * l2 + 3 * u) * t + (1 + 3 * e2 + 3 * l2 - 3 * u) * o + u * r) / 6;
  }
  function vr(e2) {
    var a = e2.length - 1;
    return function(t) {
      var o = t <= 0 ? t = 0 : t >= 1 ? (t = 1, a - 1) : Math.floor(t * a), r = e2[o], l2 = e2[o + 1], u = o > 0 ? e2[o - 1] : 2 * r - l2, s = o < a - 1 ? e2[o + 2] : 2 * l2 - r;
      return qt((t - o / a) * a, u, r, l2, s);
    };
  }
  function Mr(e2) {
    var a = e2.length;
    return function(t) {
      var o = Math.floor(((t %= 1) < 0 ? ++t : t) * a), r = e2[(o + a - 1) % a], l2 = e2[o % a], u = e2[(o + 1) % a], s = e2[(o + 2) % a];
      return qt((t - o / a) * a, r, l2, u, s);
    };
  }
  var He2 = (e2) => () => e2;
  function Ar(e2, a) {
    return function(t) {
      return e2 + t * a;
    };
  }
  function Eu(e2, a, t) {
    return e2 = Math.pow(e2, t), a = Math.pow(a, t) - e2, t = 1 / t, function(o) {
      return Math.pow(e2 + o * a, t);
    };
  }
  function Ue2(e2, a) {
    var t = a - e2;
    return t ? Ar(e2, t > 180 || t < -180 ? t - 360 * Math.round(t / 360) : t) : He2(isNaN(e2) ? a : e2);
  }
  function Dr(e2) {
    return (e2 = +e2) == 1 ? M2 : function(a, t) {
      return t - a ? Eu(a, t, e2) : He2(isNaN(a) ? t : a);
    };
  }
  function M2(e2, a) {
    var t = a - e2;
    return t ? Ar(e2, t) : He2(isNaN(e2) ? a : e2);
  }
  var Ne2 = (function e(a) {
    var t = Dr(a);
    function o(r, l2) {
      var u = t((r = Be2(r)).r, (l2 = Be2(l2)).r), s = t(r.g, l2.g), d = t(r.b, l2.b), f2 = M2(r.opacity, l2.opacity);
      return function(c) {
        return r.r = u(c), r.g = s(c), r.b = d(c), r.opacity = f2(c), r + "";
      };
    }
    return o.gamma = e, o;
  })(1);
  function Rr(e2) {
    return function(a) {
      var t = a.length, o = new Array(t), r = new Array(t), l2 = new Array(t), u, s;
      for (u = 0; u < t; ++u) s = Be2(a[u]), o[u] = s.r || 0, r[u] = s.g || 0, l2[u] = s.b || 0;
      return o = e2(o), r = e2(r), l2 = e2(l2), s.opacity = 1, function(d) {
        return s.r = o(d), s.g = r(d), s.b = l2(d), s + "";
      };
    };
  }
  var Wu = Rr(vr);
  var Gu = Rr(Mr);
  var Ht = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  var Ot = new RegExp(Ht.source, "g");
  function la(e2, a) {
    return e2 = +e2, a = +a, function(t) {
      return Math.round(e2 * (1 - t) + a * t);
    };
  }
  function Ur(e2) {
    return function(a, t) {
      var o = e2((a = ta(a)).h, (t = ta(t)).h), r = M2(a.s, t.s), l2 = M2(a.l, t.l), u = M2(a.opacity, t.opacity);
      return function(s) {
        return a.h = o(s), a.s = r(s), a.l = l2(s), a.opacity = u(s), a + "";
      };
    };
  }
  var Ut = Ur(Ue2);
  var Nt = Ur(M2);
  function za(e2, a) {
    var t = M2((e2 = qe2(e2)).l, (a = qe2(a)).l), o = M2(e2.a, a.a), r = M2(e2.b, a.b), l2 = M2(e2.opacity, a.opacity);
    return function(u) {
      return e2.l = t(u), e2.a = o(u), e2.b = r(u), e2.opacity = l2(u), e2 + "";
    };
  }
  function Nr(e2) {
    return function(a, t) {
      var o = e2((a = oa(a)).h, (t = oa(t)).h), r = M2(a.c, t.c), l2 = M2(a.l, t.l), u = M2(a.opacity, t.opacity);
      return function(s) {
        return a.h = o(s), a.c = r(s), a.l = l2(s), a.opacity = u(s), a + "";
      };
    };
  }
  var Vt = Nr(Ue2);
  var Et = Nr(M2);
  function Vr(e2) {
    return (function a(t) {
      t = +t;
      function o(r, l2) {
        var u = e2((r = Oe2(r)).h, (l2 = Oe2(l2)).h), s = M2(r.s, l2.s), d = M2(r.l, l2.l), f2 = M2(r.opacity, l2.opacity);
        return function(c) {
          return r.h = u(c), r.s = s(c), r.l = d(Math.pow(c, t)), r.opacity = f2(c), r + "";
        };
      }
      return o.gamma = a, o;
    })(1);
  }
  var Wt = Vr(Ue2);
  var Gt = Vr(M2);
  function Gr(e2) {
    return Math.abs(e2 = Math.round(e2)) >= 1e21 ? e2.toLocaleString("en").replace(/,/g, "") : e2.toString(10);
  }
  function ge2(e2, a) {
    if ((t = (e2 = a ? e2.toExponential(a - 1) : e2.toExponential()).indexOf("e")) < 0) return null;
    var t, o = e2.slice(0, t);
    return [o.length > 1 ? o[0] + o.slice(2) : o, +e2.slice(t + 1)];
  }
  function $(e2) {
    return e2 = ge2(Math.abs(e2)), e2 ? e2[1] : NaN;
  }
  function zr(e2, a) {
    return function(t, o) {
      for (var r = t.length, l2 = [], u = 0, s = e2[0], d = 0; r > 0 && s > 0 && (d + s + 1 > o && (s = Math.max(1, o - d)), l2.push(t.substring(r -= s, r + s)), !((d += s + 1) > o)); ) s = e2[u = (u + 1) % e2.length];
      return l2.reverse().join(a);
    };
  }
  function Xr(e2) {
    return function(a) {
      return a.replace(/[0-9]/g, function(t) {
        return e2[+t];
      });
    };
  }
  var Yu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function se2(e2) {
    if (!(a = Yu.exec(e2))) throw new Error("invalid format: " + e2);
    var a;
    return new Xa({ fill: a[1], align: a[2], sign: a[3], symbol: a[4], zero: a[5], width: a[6], comma: a[7], precision: a[8] && a[8].slice(1), trim: a[9], type: a[10] });
  }
  se2.prototype = Xa.prototype;
  function Xa(e2) {
    this.fill = e2.fill === void 0 ? " " : e2.fill + "", this.align = e2.align === void 0 ? ">" : e2.align + "", this.sign = e2.sign === void 0 ? "-" : e2.sign + "", this.symbol = e2.symbol === void 0 ? "" : e2.symbol + "", this.zero = !!e2.zero, this.width = e2.width === void 0 ? void 0 : +e2.width, this.comma = !!e2.comma, this.precision = e2.precision === void 0 ? void 0 : +e2.precision, this.trim = !!e2.trim, this.type = e2.type === void 0 ? "" : e2.type + "";
  }
  Xa.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
  };
  function $r(e2) {
    e: for (var a = e2.length, t = 1, o = -1, r; t < a; ++t) switch (e2[t]) {
      case ".":
        o = r = t;
        break;
      case "0":
        o === 0 && (o = t), r = t;
        break;
      default:
        if (!+e2[t]) break e;
        o > 0 && (o = 0);
        break;
    }
    return o > 0 ? e2.slice(0, o) + e2.slice(r + 1) : e2;
  }
  var Zt;
  function Kr(e2, a) {
    var t = ge2(e2, a);
    if (!t) return e2 + "";
    var o = t[0], r = t[1], l2 = r - (Zt = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, u = o.length;
    return l2 === u ? o : l2 > u ? o + new Array(l2 - u + 1).join("0") : l2 > 0 ? o.slice(0, l2) + "." + o.slice(l2) : "0." + new Array(1 - l2).join("0") + ge2(e2, Math.max(0, a + l2 - 1))[0];
  }
  function _t(e2, a) {
    var t = ge2(e2, a);
    if (!t) return e2 + "";
    var o = t[0], r = t[1];
    return r < 0 ? "0." + new Array(-r).join("0") + o : o.length > r + 1 ? o.slice(0, r + 1) + "." + o.slice(r + 1) : o + new Array(r - o.length + 2).join("0");
  }
  var Yt = { "%": (e2, a) => (e2 * 100).toFixed(a), b: (e2) => Math.round(e2).toString(2), c: (e2) => e2 + "", d: Gr, e: (e2, a) => e2.toExponential(a), f: (e2, a) => e2.toFixed(a), g: (e2, a) => e2.toPrecision(a), o: (e2) => Math.round(e2).toString(8), p: (e2, a) => _t(e2 * 100, a), r: _t, s: Kr, X: (e2) => Math.round(e2).toString(16).toUpperCase(), x: (e2) => Math.round(e2).toString(16) };
  function Qt(e2) {
    return e2;
  }
  var Zr = Array.prototype.map;
  var _r = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  function Yr(e2) {
    var a = e2.grouping === void 0 || e2.thousands === void 0 ? Qt : zr(Zr.call(e2.grouping, Number), e2.thousands + ""), t = e2.currency === void 0 ? "" : e2.currency[0] + "", o = e2.currency === void 0 ? "" : e2.currency[1] + "", r = e2.decimal === void 0 ? "." : e2.decimal + "", l2 = e2.numerals === void 0 ? Qt : Xr(Zr.call(e2.numerals, String)), u = e2.percent === void 0 ? "%" : e2.percent + "", s = e2.minus === void 0 ? "\u2212" : e2.minus + "", d = e2.nan === void 0 ? "NaN" : e2.nan + "";
    function f2(i) {
      i = se2(i);
      var n = i.fill, m = i.align, x = i.sign, I2 = i.symbol, S = i.zero, k2 = i.width, D = i.comma, h = i.precision, P = i.trim, p = i.type;
      p === "n" ? (D = true, p = "g") : Yt[p] || (h === void 0 && (h = 12), P = true, p = "g"), (S || n === "0" && m === "=") && (S = true, n = "0", m = "=");
      var g = I2 === "$" ? t : I2 === "#" && /[boxX]/.test(p) ? "0" + p.toLowerCase() : "", F2 = I2 === "$" ? o : /[%p]/.test(p) ? u : "", q = Yt[p], Y = /[defgprs%]/.test(p);
      h = h === void 0 ? 6 : /[gprs]/.test(p) ? Math.max(1, Math.min(21, h)) : Math.max(0, Math.min(20, h));
      function ve2(y2) {
        var ie2 = g, H = F2, Me2, Jo, Pa;
        if (p === "c") H = q(y2) + H, y2 = "";
        else {
          y2 = +y2;
          var va = y2 < 0 || 1 / y2 < 0;
          if (y2 = isNaN(y2) ? d : q(Math.abs(y2), h), P && (y2 = $r(y2)), va && +y2 == 0 && x !== "+" && (va = false), ie2 = (va ? x === "(" ? x : s : x === "-" || x === "(" ? "" : x) + ie2, H = (p === "s" ? _r[8 + Zt / 3] : "") + H + (va && x === "(" ? ")" : ""), Y) {
            for (Me2 = -1, Jo = y2.length; ++Me2 < Jo; ) if (Pa = y2.charCodeAt(Me2), 48 > Pa || Pa > 57) {
              H = (Pa === 46 ? r + y2.slice(Me2 + 1) : y2.slice(Me2)) + H, y2 = y2.slice(0, Me2);
              break;
            }
          }
        }
        D && !S && (y2 = a(y2, 1 / 0));
        var Ma = ie2.length + y2.length + H.length, Q = Ma < k2 ? new Array(k2 - Ma + 1).join(n) : "";
        switch (D && S && (y2 = a(Q + y2, Q.length ? k2 - H.length : 1 / 0), Q = ""), m) {
          case "<":
            y2 = ie2 + y2 + H + Q;
            break;
          case "=":
            y2 = ie2 + Q + y2 + H;
            break;
          case "^":
            y2 = Q.slice(0, Ma = Q.length >> 1) + ie2 + y2 + H + Q.slice(Ma);
            break;
          default:
            y2 = Q + ie2 + y2 + H;
            break;
        }
        return l2(y2);
      }
      return ve2.toString = function() {
        return i + "";
      }, ve2;
    }
    function c(i, n) {
      var m = f2((i = se2(i), i.type = "f", i)), x = Math.max(-8, Math.min(8, Math.floor($(n) / 3))) * 3, I2 = Math.pow(10, -x), S = _r[8 + x / 3];
      return function(k2) {
        return m(I2 * k2) + S;
      };
    }
    return { format: f2, formatPrefix: c };
  }
  var $a;
  var Ka;
  var Za;
  jt({ thousands: ",", grouping: [3], currency: ["$", ""] });
  function jt(e2) {
    return $a = Yr(e2), Ka = $a.format, Za = $a.formatPrefix, $a;
  }
  var oo = /* @__PURE__ */ new Date();
  var ro = /* @__PURE__ */ new Date();
  function A2(e2, a, t, o) {
    function r(l2) {
      return e2(l2 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+l2)), l2;
    }
    return r.floor = (l2) => (e2(l2 = /* @__PURE__ */ new Date(+l2)), l2), r.ceil = (l2) => (e2(l2 = new Date(l2 - 1)), a(l2, 1), e2(l2), l2), r.round = (l2) => {
      let u = r(l2), s = r.ceil(l2);
      return l2 - u < s - l2 ? u : s;
    }, r.offset = (l2, u) => (a(l2 = /* @__PURE__ */ new Date(+l2), u == null ? 1 : Math.floor(u)), l2), r.range = (l2, u, s) => {
      let d = [];
      if (l2 = r.ceil(l2), s = s == null ? 1 : Math.floor(s), !(l2 < u) || !(s > 0)) return d;
      let f2;
      do
        d.push(f2 = /* @__PURE__ */ new Date(+l2)), a(l2, s), e2(l2);
      while (f2 < l2 && l2 < u);
      return d;
    }, r.filter = (l2) => A2((u) => {
      if (u >= u) for (; e2(u), !l2(u); ) u.setTime(u - 1);
    }, (u, s) => {
      if (u >= u) if (s < 0) for (; ++s <= 0; ) for (; a(u, -1), !l2(u); ) ;
      else for (; --s >= 0; ) for (; a(u, 1), !l2(u); ) ;
    }), t && (r.count = (l2, u) => (oo.setTime(+l2), ro.setTime(+u), e2(oo), e2(ro), Math.floor(t(oo, ro))), r.every = (l2) => (l2 = Math.floor(l2), !isFinite(l2) || !(l2 > 0) ? null : l2 > 1 ? r.filter(o ? (u) => o(u) % l2 === 0 : (u) => r.count(0, u) % l2 === 0) : r)), r;
  }
  var Ie2 = A2((e2) => {
    e2.setTime(e2 - e2.getMilliseconds());
  }, (e2, a) => {
    e2.setTime(+e2 + a * 1e3);
  }, (e2, a) => (a - e2) / 1e3, (e2) => e2.getUTCSeconds());
  var Qr = Ie2.range;
  var _a = A2((e2) => {
    e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * 1e3);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 6e4);
  }, (e2, a) => (a - e2) / 6e4, (e2) => e2.getMinutes());
  var ju = _a.range;
  var Ya = A2((e2) => {
    e2.setUTCSeconds(0, 0);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 6e4);
  }, (e2, a) => (a - e2) / 6e4, (e2) => e2.getUTCMinutes());
  var Ju = Ya.range;
  var Qa = A2((e2) => {
    e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * 1e3 - e2.getMinutes() * 6e4);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 36e5);
  }, (e2, a) => (a - e2) / 36e5, (e2) => e2.getHours());
  var es = Qa.range;
  var ja = A2((e2) => {
    e2.setUTCMinutes(0, 0, 0);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 36e5);
  }, (e2, a) => (a - e2) / 36e5, (e2) => e2.getUTCHours());
  var as = ja.range;
  var Ja = A2((e2) => e2.setHours(0, 0, 0, 0), (e2, a) => e2.setDate(e2.getDate() + a), (e2, a) => (a - e2 - (a.getTimezoneOffset() - e2.getTimezoneOffset()) * 6e4) / 864e5, (e2) => e2.getDate() - 1);
  var ts = Ja.range;
  var et2 = A2((e2) => {
    e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCDate(e2.getUTCDate() + a);
  }, (e2, a) => (a - e2) / 864e5, (e2) => e2.getUTCDate() - 1);
  var os = et2.range;
  var jr = A2((e2) => {
    e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCDate(e2.getUTCDate() + a);
  }, (e2, a) => (a - e2) / 864e5, (e2) => Math.floor(e2 / 864e5));
  var rs = jr.range;
  function Ce2(e2) {
    return A2((a) => {
      a.setDate(a.getDate() - (a.getDay() + 7 - e2) % 7), a.setHours(0, 0, 0, 0);
    }, (a, t) => {
      a.setDate(a.getDate() + t * 7);
    }, (a, t) => (t - a - (t.getTimezoneOffset() - a.getTimezoneOffset()) * 6e4) / 6048e5);
  }
  var sa = Ce2(0);
  var Jr = Ce2(1);
  var el = Ce2(2);
  var al = Ce2(3);
  var tl = Ce2(4);
  var ol = Ce2(5);
  var rl = Ce2(6);
  var ll = sa.range;
  var us = Jr.range;
  var ss = el.range;
  var ds = al.range;
  var fs = tl.range;
  var ns = ol.range;
  var is = rl.range;
  function Se2(e2) {
    return A2((a) => {
      a.setUTCDate(a.getUTCDate() - (a.getUTCDay() + 7 - e2) % 7), a.setUTCHours(0, 0, 0, 0);
    }, (a, t) => {
      a.setUTCDate(a.getUTCDate() + t * 7);
    }, (a, t) => (t - a) / 6048e5);
  }
  var da = Se2(0);
  var ul = Se2(1);
  var sl = Se2(2);
  var dl = Se2(3);
  var fl = Se2(4);
  var nl = Se2(5);
  var il = Se2(6);
  var cl = da.range;
  var cs = ul.range;
  var ps = sl.range;
  var ms = dl.range;
  var xs = fl.range;
  var Ls = nl.range;
  var hs = il.range;
  var at2 = A2((e2) => {
    e2.setDate(1), e2.setHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setMonth(e2.getMonth() + a);
  }, (e2, a) => a.getMonth() - e2.getMonth() + (a.getFullYear() - e2.getFullYear()) * 12, (e2) => e2.getMonth());
  var gs = at2.range;
  var tt2 = A2((e2) => {
    e2.setUTCDate(1), e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCMonth(e2.getUTCMonth() + a);
  }, (e2, a) => a.getUTCMonth() - e2.getUTCMonth() + (a.getUTCFullYear() - e2.getUTCFullYear()) * 12, (e2) => e2.getUTCMonth());
  var Is = tt2.range;
  var fa = A2((e2) => {
    e2.setMonth(0, 1), e2.setHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setFullYear(e2.getFullYear() + a);
  }, (e2, a) => a.getFullYear() - e2.getFullYear(), (e2) => e2.getFullYear());
  fa.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : A2((a) => {
    a.setFullYear(Math.floor(a.getFullYear() / e2) * e2), a.setMonth(0, 1), a.setHours(0, 0, 0, 0);
  }, (a, t) => {
    a.setFullYear(a.getFullYear() + t * e2);
  });
  var Cs = fa.range;
  var na = A2((e2) => {
    e2.setUTCMonth(0, 1), e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCFullYear(e2.getUTCFullYear() + a);
  }, (e2, a) => a.getUTCFullYear() - e2.getUTCFullYear(), (e2) => e2.getUTCFullYear());
  na.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : A2((a) => {
    a.setUTCFullYear(Math.floor(a.getUTCFullYear() / e2) * e2), a.setUTCMonth(0, 1), a.setUTCHours(0, 0, 0, 0);
  }, (a, t) => {
    a.setUTCFullYear(a.getUTCFullYear() + t * e2);
  });
  var Ss = na.range;
  function fo(e2, a) {
    a.domain && ("nice" in e2 || "quantiles" in e2 || "padding" in e2, e2.domain(a.domain));
  }
  function no(e2, a) {
    a.range && ("padding" in e2, e2.range(a.range));
  }
  function io(e2, a) {
    "align" in e2 && "align" in a && typeof a.align < "u" && e2.align(a.align);
  }
  function co(e2, a) {
    "base" in e2 && "base" in a && typeof a.base < "u" && e2.base(a.base);
  }
  function po(e2, a) {
    "clamp" in e2 && "clamp" in a && typeof a.clamp < "u" && e2.clamp(a.clamp);
  }
  function mo(e2, a) {
    "constant" in e2 && "constant" in a && typeof a.constant < "u" && e2.constant(a.constant);
  }
  function xo(e2, a) {
    "exponent" in e2 && "exponent" in a && typeof a.exponent < "u" && e2.exponent(a.exponent);
  }
  var pl = { lab: za, hcl: Vt, "hcl-long": Et, hsl: Ut, "hsl-long": Nt, cubehelix: Wt, "cubehelix-long": Gt, rgb: Ne2 };
  function Lo(e2) {
    switch (e2) {
      case "lab":
      case "hcl":
      case "hcl-long":
      case "hsl":
      case "hsl-long":
      case "cubehelix":
      case "cubehelix-long":
      case "rgb":
        return pl[e2];
      default:
    }
    var a = e2.type, t = e2.gamma, o = pl[a];
    return typeof t > "u" ? o : o.gamma(t);
  }
  function ho(e2, a) {
    if ("interpolate" in a && "interpolate" in e2 && typeof a.interpolate < "u") {
      var t = Lo(a.interpolate);
      e2.interpolate(t);
    }
  }
  var ys = new Date(Date.UTC(2020, 1, 2, 3, 4, 5));
  var bs = "%Y-%m-%d %H:%M";
  function go(e2) {
    var a = e2.tickFormat(1, bs)(ys);
    return a === "2020-02-02 03:04";
  }
  var ml = { day: Ja, hour: Qa, minute: _a, month: at2, second: Ie2, week: sa, year: fa };
  var xl = { day: et2, hour: ja, minute: Ya, month: tt2, second: Ie2, week: da, year: na };
  function Io(e2, a) {
    if ("nice" in a && typeof a.nice < "u" && "nice" in e2) {
      var t = a.nice;
      if (typeof t == "boolean") t && e2.nice();
      else if (typeof t == "number") e2.nice(t);
      else {
        var o = e2, r = go(o);
        if (typeof t == "string") o.nice(r ? xl[t] : ml[t]);
        else {
          var l2 = t.interval, u = t.step, s = (r ? xl[l2] : ml[l2]).every(u);
          s != null && o.nice(s);
        }
      }
    }
  }
  function Co(e2, a) {
    "padding" in e2 && "padding" in a && typeof a.padding < "u" && e2.padding(a.padding), "paddingInner" in e2 && "paddingInner" in a && typeof a.paddingInner < "u" && e2.paddingInner(a.paddingInner), "paddingOuter" in e2 && "paddingOuter" in a && typeof a.paddingOuter < "u" && e2.paddingOuter(a.paddingOuter);
  }
  function So(e2, a) {
    if (a.reverse) {
      var t = e2.range().slice().reverse();
      "padding" in e2, e2.range(t);
    }
  }
  function yo(e2, a) {
    "round" in a && typeof a.round < "u" && (a.round && "interpolate" in a && typeof a.interpolate < "u" ? console.warn("[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:", a) : "round" in e2 ? e2.round(a.round) : "interpolate" in e2 && a.round && e2.interpolate(la));
  }
  function bo(e2, a) {
    "unknown" in e2 && "unknown" in a && typeof a.unknown < "u" && e2.unknown(a.unknown);
  }
  function wo(e2, a) {
    if ("zero" in a && a.zero === true) {
      var t = e2.domain(), o = t[0], r = t[1], l2 = r < o, u = l2 ? [r, o] : [o, r], s = u[0], d = u[1], f2 = [Math.min(0, s), Math.max(0, d)];
      e2.domain(l2 ? f2.reverse() : f2);
    }
  }
  var ws = ["domain", "nice", "zero", "interpolate", "round", "range", "reverse", "align", "base", "clamp", "constant", "exponent", "padding", "unknown"];
  var ks = { domain: fo, nice: Io, zero: wo, interpolate: ho, round: yo, align: io, base: co, clamp: po, constant: mo, exponent: xo, padding: Co, range: no, reverse: So, unknown: bo };
  function ia() {
    for (var e2 = arguments.length, a = new Array(e2), t = 0; t < e2; t++) a[t] = arguments[t];
    var o = new Set(a), r = ws.filter(function(l2) {
      return o.has(l2);
    });
    return function(u, s) {
      return typeof s < "u" && r.forEach(function(d) {
        ks[d](u, s);
      }), u;
    };
  }
  var Ps = ia("domain", "range", "reverse", "align", "padding", "round");
  var vs = ia("domain", "range", "reverse", "clamp", "interpolate", "nice", "round", "zero");
  var Po = Math.PI;
  var vo = 2 * Po;
  var be2 = 1e-6;
  var Ms = vo - be2;
  function Mo() {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
  }
  function Ll() {
    return new Mo();
  }
  Mo.prototype = Ll.prototype = { constructor: Mo, moveTo: function(e2, a) {
    this._ += "M" + (this._x0 = this._x1 = +e2) + "," + (this._y0 = this._y1 = +a);
  }, closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  }, lineTo: function(e2, a) {
    this._ += "L" + (this._x1 = +e2) + "," + (this._y1 = +a);
  }, quadraticCurveTo: function(e2, a, t, o) {
    this._ += "Q" + +e2 + "," + +a + "," + (this._x1 = +t) + "," + (this._y1 = +o);
  }, bezierCurveTo: function(e2, a, t, o, r, l2) {
    this._ += "C" + +e2 + "," + +a + "," + +t + "," + +o + "," + (this._x1 = +r) + "," + (this._y1 = +l2);
  }, arcTo: function(e2, a, t, o, r) {
    e2 = +e2, a = +a, t = +t, o = +o, r = +r;
    var l2 = this._x1, u = this._y1, s = t - e2, d = o - a, f2 = l2 - e2, c = u - a, i = f2 * f2 + c * c;
    if (r < 0) throw new Error("negative radius: " + r);
    if (this._x1 === null) this._ += "M" + (this._x1 = e2) + "," + (this._y1 = a);
    else if (i > be2) if (!(Math.abs(c * s - d * f2) > be2) || !r) this._ += "L" + (this._x1 = e2) + "," + (this._y1 = a);
    else {
      var n = t - l2, m = o - u, x = s * s + d * d, I2 = n * n + m * m, S = Math.sqrt(x), k2 = Math.sqrt(i), D = r * Math.tan((Po - Math.acos((x + i - I2) / (2 * S * k2))) / 2), h = D / k2, P = D / S;
      Math.abs(h - 1) > be2 && (this._ += "L" + (e2 + h * f2) + "," + (a + h * c)), this._ += "A" + r + "," + r + ",0,0," + +(c * n > f2 * m) + "," + (this._x1 = e2 + P * s) + "," + (this._y1 = a + P * d);
    }
  }, arc: function(e2, a, t, o, r, l2) {
    e2 = +e2, a = +a, t = +t, l2 = !!l2;
    var u = t * Math.cos(o), s = t * Math.sin(o), d = e2 + u, f2 = a + s, c = 1 ^ l2, i = l2 ? o - r : r - o;
    if (t < 0) throw new Error("negative radius: " + t);
    this._x1 === null ? this._ += "M" + d + "," + f2 : (Math.abs(this._x1 - d) > be2 || Math.abs(this._y1 - f2) > be2) && (this._ += "L" + d + "," + f2), t && (i < 0 && (i = i % vo + vo), i > Ms ? this._ += "A" + t + "," + t + ",0,1," + c + "," + (e2 - u) + "," + (a - s) + "A" + t + "," + t + ",0,1," + c + "," + (this._x1 = d) + "," + (this._y1 = f2) : i > be2 && (this._ += "A" + t + "," + t + ",0," + +(i >= Po) + "," + c + "," + (this._x1 = e2 + t * Math.cos(r)) + "," + (this._y1 = a + t * Math.sin(r))));
  }, rect: function(e2, a, t, o) {
    this._ += "M" + (this._x0 = this._x1 = +e2) + "," + (this._y0 = this._y1 = +a) + "h" + +t + "v" + +o + "h" + -t + "Z";
  }, toString: function() {
    return this._;
  } };
  function hl(e2) {
    this._context = e2;
  }
  hl.prototype = { areaStart: function() {
    this._line = 0;
  }, areaEnd: function() {
    this._line = NaN;
  }, lineStart: function() {
    this._point = 0;
  }, lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }, point: function(e2, a) {
    switch (e2 = +e2, a = +a, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e2, a) : this._context.moveTo(e2, a);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e2, a);
        break;
    }
  } };
  var yl = ar(ko());
  var bl = ar(ko());
  var ft = (...e2) => e2.filter((a, t, o) => !!a && a.trim() !== "" && o.indexOf(a) === t).join(" ").trim();
  var Pl = (e2) => e2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  var vl = (e2) => e2.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, t, o) => o ? o.toUpperCase() : t.toLowerCase());
  var Oo = (e2) => {
    let a = vl(e2);
    return a.charAt(0).toUpperCase() + a.slice(1);
  };
  var Ml = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  var Al = (e2) => {
    for (let a in e2) if (a.startsWith("aria-") || a === "role" || a === "title") return true;
    return false;
  };
  var Rl = (0, import_react10.forwardRef)(({ color: e2 = "currentColor", size: a = 24, strokeWidth: t = 2, absoluteStrokeWidth: o, className: r = "", children: l2, iconNode: u, ...s }, d) => (0, import_react10.createElement)("svg", { ref: d, ...Ml, width: a, height: a, stroke: e2, strokeWidth: o ? Number(t) * 24 / Number(a) : t, className: ft("lucide", r), ...!l2 && !Al(s) && { "aria-hidden": "true" }, ...s }, [...u.map(([f2, c]) => (0, import_react10.createElement)(f2, c)), ...Array.isArray(l2) ? l2 : [l2]]));
  var U2 = (e2, a) => {
    let t = (0, import_react9.forwardRef)(({ className: o, ...r }, l2) => (0, import_react9.createElement)(Rl, { ref: l2, iconNode: a, className: ft(`lucide-${Pl(Oo(e2))}`, `lucide-${e2}`, o), ...r }));
    return t.displayName = Oo(e2), t;
  };
  var Ks = [["path", { d: "M7 7h10v10", key: "1tivn9" }], ["path", { d: "M7 17 17 7", key: "1vkiza" }]];
  var we2 = U2("arrow-up-right", Ks);
  var Zs = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
  var La = U2("check", Zs);
  var _s = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
  var ha = U2("chevron-left", _s);
  var Ys = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
  var ga = U2("chevron-right", Ys);
  var Qs = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
  var fe2 = U2("loader-circle", Qs);
  var js = [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]];
  var Ia = U2("x", js);
  var zo = { label: "Let\u2019s buy this", request: "I want this product. Check the current offer and prepare checkout for the selected variant. Resolve only essential missing choices in our conversation.", kind: "checkout" };
  function xd() {
    return (0, import_jsx_runtime11.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: (0, import_jsx_runtime11.jsx)("path", { d: "M20.5 12C20.5 9.76676 19.686 8.06004 18.2871 6.89355C16.8661 5.70886 14.7409 5 12 5C9.25912 5 7.13392 5.70886 5.71288 6.89355C4.31396 8.06004 3.49999 9.76677 3.49999 12C3.49999 12.4778 3.67754 13.2204 3.91698 13.9678C4.14619 14.6832 4.39417 15.2886 4.45995 15.4463C4.47153 15.474 4.45918 15.4447 4.47753 15.4883L4.51269 15.5781L4.55273 15.6973C4.71413 16.2258 4.88032 17.3955 4.10253 18.9609C4.45806 18.9447 4.80995 18.8667 5.14062 18.752C5.48117 18.6338 5.77064 18.4882 5.9746 18.3721C6.07544 18.3146 6.15337 18.2661 6.20312 18.2334C6.22792 18.2171 6.2459 18.2042 6.25585 18.1973C6.25889 18.1952 6.26114 18.1935 6.26269 18.1924C6.57078 17.9671 6.98047 17.9376 7.31835 18.1152C8.64944 18.8149 10.295 19 12 19C14.7409 19 16.8661 18.2911 18.2871 17.1064C19.686 15.94 20.5 14.2332 20.5 12ZM22.5 12C22.5 14.7665 21.4668 17.06 19.5674 18.6436C17.6898 20.2087 15.0646 21 12 21C10.3808 21 8.55858 20.8483 6.91699 20.1357C6.63773 20.2919 6.25326 20.4829 5.79589 20.6416C4.84476 20.9715 3.45924 21.2047 2.07226 20.5479C1.80018 20.419 1.59992 20.1742 1.52831 19.8818C1.45679 19.5894 1.52128 19.28 1.70312 19.04C2.39144 18.1322 2.60883 17.4279 2.66894 16.9775C2.72939 16.5244 2.63731 16.2736 2.63476 16.2666L2.63378 16.2646C2.63187 16.2601 2.63059 16.2546 2.62695 16.2461C2.62373 16.2386 2.61901 16.2282 2.61425 16.2168L2.61327 16.2158C2.53665 16.0321 2.2661 15.369 2.01269 14.5781C1.76944 13.8189 1.49999 12.8165 1.49999 12C1.49999 9.23347 2.5332 6.93995 4.43261 5.35645C6.31017 3.79128 8.93544 3 12 3C15.0646 3 17.6898 3.79129 19.5674 5.35645C21.4668 6.93996 22.5 9.23348 22.5 12Z" }) });
  }
  var Ld = { idle: { icon: (0, import_jsx_runtime11.jsx)(xd, {}), label: zo.label, shortLabel: "Buy this", variant: "active" }, sending: { icon: (0, import_jsx_runtime11.jsx)(fe2, { className: "file-spin", size: 16, strokeWidth: 2.25, "aria-hidden": "true" }), label: "Sending\u2026", variant: "disabled" }, sent: { icon: (0, import_jsx_runtime11.jsx)(La, { size: 16, strokeWidth: 2.25, "aria-hidden": "true" }), label: "Sent to Instinct", shortLabel: "Sent", variant: "disabled" } };

  // ../../opt/files/node_modules/react-router/dist/development/chunk-BV7QT456.mjs
  var React = __toESM(require_react(), 1);
  var React2 = __toESM(require_react(), 1);
  var React3 = __toESM(require_react(), 1);
  var React4 = __toESM(require_react(), 1);
  var React9 = __toESM(require_react(), 1);
  var React8 = __toESM(require_react(), 1);
  var React7 = __toESM(require_react(), 1);
  var React6 = __toESM(require_react(), 1);
  var React5 = __toESM(require_react(), 1);
  var React10 = __toESM(require_react(), 1);
  var React11 = __toESM(require_react(), 1);
  var import_meta = {};
  var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i;
  var PROTOCOL_RELATIVE_URL_REGEX = /^[\\/]{2}/;
  function normalizeProtocolRelativeUrl(url, protocol) {
    return protocol + url.replace(/\\/g, "/");
  }
  function isLocation(obj) {
    return typeof obj === "object" && obj != null && "pathname" in obj && "search" in obj && "hash" in obj && "state" in obj && "key" in obj;
  }
  function createMemoryHistory(options = {}) {
    let { initialEntries = ["/"], initialIndex, v5Compat = false } = options;
    let entries;
    entries = initialEntries.map(
      (entry, index2) => createMemoryLocation(
        entry,
        typeof entry === "string" ? null : entry.state,
        index2 === 0 ? "default" : void 0,
        typeof entry === "string" ? void 0 : entry.mask
      )
    );
    let index = clampIndex(
      initialIndex == null ? entries.length - 1 : initialIndex
    );
    let action = "POP";
    let listener = null;
    function clampIndex(n) {
      return Math.min(Math.max(n, 0), entries.length - 1);
    }
    function getCurrentLocation() {
      return entries[index];
    }
    function createMemoryLocation(to, state = null, key, mask) {
      let location2 = createLocation(
        entries ? getCurrentLocation().pathname : "/",
        to,
        state,
        key,
        mask
      );
      warning(
        location2.pathname.charAt(0) === "/",
        `relative pathnames are not supported in memory history: ${JSON.stringify(
          to
        )}`
      );
      return location2;
    }
    function createHref2(to) {
      return typeof to === "string" ? to : createPath(to);
    }
    let history = {
      get index() {
        return index;
      },
      get action() {
        return action;
      },
      get location() {
        return getCurrentLocation();
      },
      createHref: createHref2,
      createURL(to) {
        return new URL(createHref2(to), "http://localhost");
      },
      encodeLocation(to) {
        let path = typeof to === "string" ? parsePath(to) : to;
        return {
          pathname: path.pathname || "",
          search: path.search || "",
          hash: path.hash || ""
        };
      },
      push(to, state) {
        action = "PUSH";
        let nextLocation = isLocation(to) ? to : createMemoryLocation(to, state);
        index += 1;
        entries.splice(index, entries.length, nextLocation);
        if (v5Compat && listener) {
          listener({ action, location: nextLocation, delta: 1 });
        }
      },
      replace(to, state) {
        action = "REPLACE";
        let nextLocation = isLocation(to) ? to : createMemoryLocation(to, state);
        entries[index] = nextLocation;
        if (v5Compat && listener) {
          listener({ action, location: nextLocation, delta: 0 });
        }
      },
      go(delta) {
        action = "POP";
        let nextIndex = clampIndex(index + delta);
        let nextLocation = entries[nextIndex];
        index = nextIndex;
        if (listener) {
          listener({ action, location: nextLocation, delta });
        }
      },
      listen(fn) {
        listener = fn;
        return () => {
          listener = null;
        };
      }
    };
    return history;
  }
  function invariant(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      throw new Error(message);
    }
  }
  function warning(cond, message) {
    if (!cond) {
      if (typeof console !== "undefined") console.warn(message);
      try {
        throw new Error(message);
      } catch (e2) {
      }
    }
  }
  function createKey() {
    return Math.random().toString(36).substring(2, 10);
  }
  function createLocation(current, to, state = null, key, mask) {
    let location2 = {
      pathname: typeof current === "string" ? current : current.pathname,
      search: "",
      hash: "",
      ...typeof to === "string" ? parsePath(to) : to,
      state,
      // TODO: This could be cleaned up.  push/replace should probably just take
      // full Locations now and avoid the need to run through this flow at all
      // But that's a pretty big refactor to the current test suite so going to
      // keep as is for the time being and just let any incoming keys take precedence
      key: to && to.key || key || createKey(),
      mask
    };
    return location2;
  }
  function createPath({
    pathname = "/",
    search = "",
    hash = ""
  }) {
    if (search && search !== "?")
      pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#")
      pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
  }
  function parsePath(path) {
    let parsedPath = {};
    if (path) {
      let hashIndex = path.indexOf("#");
      if (hashIndex >= 0) {
        parsedPath.hash = path.substring(hashIndex);
        path = path.substring(0, hashIndex);
      }
      let searchIndex = path.indexOf("?");
      if (searchIndex >= 0) {
        parsedPath.search = path.substring(searchIndex);
        path = path.substring(0, searchIndex);
      }
      if (path) {
        parsedPath.pathname = path;
      }
    }
    return parsedPath;
  }
  var _map;
  _map = /* @__PURE__ */ new WeakMap();
  function matchRoutes(routes, locationArg, basename = "/") {
    return matchRoutesImpl(routes, locationArg, basename, false);
  }
  function matchRoutesImpl(routes, locationArg, basename, allowPartial, precomputedBranches) {
    let location2 = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    let pathname = stripBasename(location2.pathname || "/", basename);
    if (pathname == null) {
      return null;
    }
    let branches = precomputedBranches ?? flattenAndRankRoutes(routes);
    let matches = null;
    let decoded = decodePath(pathname);
    for (let i = 0; matches == null && i < branches.length; ++i) {
      matches = matchRouteBranch(
        branches[i],
        decoded,
        allowPartial
      );
    }
    return matches;
  }
  function convertRouteMatchToUiMatch(match, loaderData) {
    let { route, pathname, params } = match;
    return {
      id: route.id,
      pathname,
      params,
      data: loaderData[route.id],
      loaderData: loaderData[route.id],
      handle: route.handle
    };
  }
  function flattenAndRankRoutes(routes) {
    let branches = flattenRoutes(routes);
    rankRouteBranches(branches);
    return branches;
  }
  function flattenRoutes(routes, branches = [], parentsMeta = [], parentPath = "", _hasParentOptionalSegments = false) {
    let flattenRoute = (route, index, hasParentOptionalSegments = _hasParentOptionalSegments, relativePath) => {
      let meta = {
        relativePath: relativePath === void 0 ? route.path || "" : relativePath,
        caseSensitive: route.caseSensitive === true,
        childrenIndex: index,
        route
      };
      if (meta.relativePath.startsWith("/")) {
        if (!meta.relativePath.startsWith(parentPath) && hasParentOptionalSegments) {
          return;
        }
        invariant(
          meta.relativePath.startsWith(parentPath),
          `Absolute route path "${meta.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
        );
        meta.relativePath = meta.relativePath.slice(parentPath.length);
      }
      let path = joinPaths([parentPath, meta.relativePath]);
      let routesMeta = parentsMeta.concat(meta);
      if (route.children && route.children.length > 0) {
        invariant(
          // Our types know better, but runtime JS may not!
          // @ts-expect-error
          route.index !== true,
          `Index routes must not have child routes. Please remove all child routes from route path "${path}".`
        );
        flattenRoutes(
          route.children,
          branches,
          routesMeta,
          path,
          hasParentOptionalSegments
        );
      }
      if (route.path == null && !route.index) {
        return;
      }
      branches.push({
        path,
        score: computeScore(path, route.index),
        routesMeta: routesMeta.map((meta2, i) => {
          let [matcher, params] = compilePath(
            meta2.relativePath,
            meta2.caseSensitive,
            i === routesMeta.length - 1
          );
          return {
            ...meta2,
            matcher,
            compiledParams: params
          };
        })
      });
    };
    routes.forEach((route, index) => {
      if (route.path === "" || !route.path?.includes("?")) {
        flattenRoute(route, index);
      } else {
        for (let exploded of explodeOptionalSegments(route.path)) {
          flattenRoute(route, index, true, exploded);
        }
      }
    });
    return branches;
  }
  function explodeOptionalSegments(path) {
    let segments = path.split("/");
    if (segments.length === 0) return [];
    let [first, ...rest] = segments;
    let isOptional = first.endsWith("?");
    let required = first.replace(/\?$/, "");
    if (rest.length === 0) {
      return isOptional ? [required, ""] : [required];
    }
    let restExploded = explodeOptionalSegments(rest.join("/"));
    let result = [];
    result.push(
      ...restExploded.map(
        (subpath) => subpath === "" ? required : [required, subpath].join("/")
      )
    );
    if (isOptional) {
      result.push(...restExploded);
    }
    return result.map(
      (exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded
    );
  }
  function rankRouteBranches(branches) {
    branches.sort(
      (a, b2) => a.score !== b2.score ? b2.score - a.score : compareIndexes(
        a.routesMeta.map((meta) => meta.childrenIndex),
        b2.routesMeta.map((meta) => meta.childrenIndex)
      )
    );
  }
  var paramRe = /^:[\w-]+$/;
  var dynamicSegmentValue = 3;
  var indexRouteValue = 2;
  var emptySegmentValue = 1;
  var staticSegmentValue = 10;
  var splatPenalty = -2;
  var isSplat = (s) => s === "*";
  function computeScore(path, index) {
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some(isSplat)) {
      initialScore += splatPenalty;
    }
    if (index) {
      initialScore += indexRouteValue;
    }
    return segments.filter((s) => !isSplat(s)).reduce(
      (score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue),
      initialScore
    );
  }
  function compareIndexes(a, b2) {
    let siblings = a.length === b2.length && a.slice(0, -1).every((n, i) => n === b2[i]);
    return siblings ? (
      // If two routes are siblings, we should try to match the earlier sibling
      // first. This allows people to have fine-grained control over the matching
      // behavior by simply putting routes with identical paths in the order they
      // want them tried.
      a[a.length - 1] - b2[b2.length - 1]
    ) : (
      // Otherwise, it doesn't really make sense to rank non-siblings by index,
      // so they sort equally.
      0
    );
  }
  function matchRouteBranch(branch, pathname, allowPartial = false) {
    let { routesMeta } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];
    for (let i = 0; i < routesMeta.length; ++i) {
      let meta = routesMeta[i];
      let end = i === routesMeta.length - 1;
      let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
      let pattern = {
        path: meta.relativePath,
        caseSensitive: meta.caseSensitive,
        end
      };
      let match = (
        // Use precomputed matcher if it exists
        meta.matcher && meta.compiledParams ? matchPathImpl(
          pattern,
          remainingPathname,
          meta.matcher,
          meta.compiledParams
        ) : matchPath(pattern, remainingPathname)
      );
      let route = meta.route;
      if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
        match = matchPath(
          {
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end: false
          },
          remainingPathname
        );
      }
      if (!match) {
        return null;
      }
      Object.assign(matchedParams, match.params);
      matches.push({
        // TODO: Can this as be avoided?
        params: matchedParams,
        pathname: joinPaths([matchedPathname, match.pathname]),
        pathnameBase: normalizePathname(
          joinPaths([matchedPathname, match.pathnameBase])
        ),
        route
      });
      if (match.pathnameBase !== "/") {
        matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
      }
    }
    return matches;
  }
  function matchPath(pattern, pathname) {
    if (typeof pattern === "string") {
      pattern = { path: pattern, caseSensitive: false, end: true };
    }
    let [matcher, compiledParams] = compilePath(
      pattern.path,
      pattern.caseSensitive,
      pattern.end
    );
    return matchPathImpl(pattern, pathname, matcher, compiledParams);
  }
  function matchPathImpl(pattern, pathname, matcher, compiledParams) {
    let match = pathname.match(matcher);
    if (!match) return null;
    let matchedPathname = match[0];
    let pathnameBase = removeTrailingSlash(matchedPathname, 1);
    let captureGroups = match.slice(1);
    let params = compiledParams.reduce(
      (memo2, { paramName, isOptional }, index) => {
        if (paramName === "*") {
          let splatValue = captureGroups[index] || "";
          pathnameBase = removeTrailingSlash(
            matchedPathname.slice(0, matchedPathname.length - splatValue.length),
            1
          );
        }
        const value = captureGroups[index];
        if (isOptional && !value) {
          memo2[paramName] = void 0;
        } else {
          memo2[paramName] = (value || "").replace(/%2F/g, "/");
        }
        return memo2;
      },
      {}
    );
    return {
      params,
      pathname: matchedPathname,
      pathnameBase,
      pattern
    };
  }
  function compilePath(path, caseSensitive = false, end = true) {
    warning(
      path === "*" || !path.endsWith("*") || path.endsWith("/*"),
      `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`
    );
    let params = [];
    let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
      /\/:([\w-]+)(\?)?/g,
      (match, paramName, isOptional, index, str) => {
        params.push({ paramName, isOptional: isOptional != null });
        if (isOptional) {
          let nextChar = str.charAt(index + match.length);
          if (nextChar && nextChar !== "/") {
            return "/([^\\/]*)";
          }
          return "(?:/([^\\/]*))?";
        }
        return "/([^\\/]+)";
      }
    ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    if (path.endsWith("*")) {
      params.push({ paramName: "*" });
      regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
    } else if (end) {
      regexpSource += "\\/*$";
    } else if (path !== "" && path !== "/") {
      regexpSource += "(?:(?=\\/|$))";
    } else {
    }
    let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
    return [matcher, params];
  }
  function decodePath(value) {
    try {
      return value.split("/").map((v2) => decodeURIComponent(v2).replace(/\//g, "%2F")).join("/");
    } catch (error) {
      warning(
        false,
        `The URL path "${value}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${error}).`
      );
      return value;
    }
  }
  function stripBasename(pathname, basename) {
    if (basename === "/") return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
      return null;
    }
    let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
    let nextChar = pathname.charAt(startIndex);
    if (nextChar && nextChar !== "/") {
      return null;
    }
    return pathname.slice(startIndex) || "/";
  }
  function resolvePath(to, fromPathname = "/") {
    let {
      pathname: toPathname,
      search = "",
      hash = ""
    } = typeof to === "string" ? parsePath(to) : to;
    let pathname;
    if (toPathname) {
      toPathname = removeDoubleSlashes(toPathname);
      if (toPathname.startsWith("/") || toPathname.startsWith("\\")) {
        pathname = resolvePathname(toPathname.substring(1), "/");
      } else {
        pathname = resolvePathname(toPathname, fromPathname);
      }
    } else {
      pathname = fromPathname;
    }
    return {
      pathname,
      search: normalizeSearch(search),
      hash: normalizeHash(hash)
    };
  }
  function resolvePathname(relativePath, fromPathname) {
    let segments = removeTrailingSlash(fromPathname).split("/");
    let relativeSegments = relativePath.split("/");
    relativeSegments.forEach((segment) => {
      if (segment === "..") {
        if (segments.length > 1) segments.pop();
      } else if (segment !== ".") {
        segments.push(segment);
      }
    });
    return segments.length > 1 ? segments.join("/") : "/";
  }
  function getInvalidPathError(char, field, dest, path) {
    return `Cannot include a '${char}' character in a manually specified \`to.${field}\` field [${JSON.stringify(
      path
    )}].  Please separate it out to the \`to.${dest}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function getPathContributingMatches(matches) {
    return matches.filter(
      (match, index) => index === 0 || match.route.path && match.route.path.length > 0
    );
  }
  function getResolveToMatches(matches) {
    let pathMatches = getPathContributingMatches(matches);
    return pathMatches.map(
      (match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase
    );
  }
  function resolveTo(toArg, routePathnames, locationPathname, isPathRelative = false) {
    let to;
    if (typeof toArg === "string") {
      to = parsePath(toArg);
    } else {
      to = { ...toArg };
      invariant(
        !to.pathname || !to.pathname.includes("?"),
        getInvalidPathError("?", "pathname", "search", to)
      );
      invariant(
        !to.pathname || !to.pathname.includes("#"),
        getInvalidPathError("#", "pathname", "hash", to)
      );
      invariant(
        !to.search || !to.search.includes("#"),
        getInvalidPathError("#", "search", "hash", to)
      );
    }
    let isEmptyPath = toArg === "" || to.pathname === "";
    let toPathname = isEmptyPath ? "/" : to.pathname;
    let from;
    if (toPathname == null) {
      from = locationPathname;
    } else {
      let routePathnameIndex = routePathnames.length - 1;
      if (!isPathRelative && toPathname.startsWith("..")) {
        let toSegments = toPathname.split("/");
        while (toSegments[0] === "..") {
          toSegments.shift();
          routePathnameIndex -= 1;
        }
        to.pathname = toSegments.join("/");
      }
      from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    let path = resolvePath(to, from);
    let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
    let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
    if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
      path.pathname += "/";
    }
    return path;
  }
  var removeDoubleSlashes = (path) => path.replace(/[\\/]{2,}/g, "/");
  var joinPaths = (paths) => removeDoubleSlashes(paths.join("/"));
  function removeTrailingSlash(path, minLength = 0) {
    let end = path.length;
    while (end > minLength && path.charCodeAt(end - 1) === 47) {
      end--;
    }
    return end === path.length ? path : path.slice(0, end);
  }
  var normalizePathname = (pathname) => removeTrailingSlash(pathname).replace(/^\/*/, "/");
  var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
  var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
  var ErrorResponseImpl = class {
    constructor(status, statusText, data2, internal = false) {
      this.status = status;
      this.statusText = statusText || "";
      this.internal = internal;
      if (data2 instanceof Error) {
        this.data = data2.toString();
        this.error = data2;
      } else {
        this.data = data2;
      }
    }
  };
  function isRouteErrorResponse(error) {
    return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
  }
  function getRoutePattern(matches) {
    let parts = matches.map((m) => m.route.path).filter(Boolean);
    return joinPaths(parts) || "/";
  }
  var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  function parseToInfo(_to, basename) {
    let to = _to;
    if (typeof to !== "string" || !ABSOLUTE_URL_REGEX.test(to)) {
      return {
        absoluteURL: void 0,
        isExternal: false,
        to
      };
    }
    let absoluteURL = to;
    let isExternal = false;
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = PROTOCOL_RELATIVE_URL_REGEX.test(to) ? new URL(normalizeProtocolRelativeUrl(to, currentUrl.protocol)) : new URL(to);
        let path = stripBasename(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          to = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e2) {
        warning(
          false,
          `<Link to="${to}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    }
    return {
      absoluteURL,
      isExternal,
      to
    };
  }
  var objectProtoNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  var DEFAULT_NAVIGATION_URL = new URL("http://localhost");
  function getNavigatorCurrentUrl(navigator2) {
    if (navigator2.createURL) {
      return navigator2.createURL("/");
    }
    try {
      return new URL(navigator2.createHref("/"), DEFAULT_NAVIGATION_URL);
    } catch {
      return DEFAULT_NAVIGATION_URL;
    }
  }
  function isSameOrigin(a, b2) {
    return a.origin === b2.origin && (a.origin !== "null" || a.protocol === b2.protocol && a.host === b2.host);
  }
  function isExplicitUrl(destination, target) {
    if (destination.startsWith("//")) {
      return true;
    }
    let protocol = target.protocol.toLowerCase();
    if (!destination.toLowerCase().startsWith(protocol)) {
      return false;
    }
    return target.host === "" || destination.slice(protocol.length).startsWith("//");
  }
  function validateNavigationTarget(original, resolved, currentUrl, externalPolicy) {
    let originalUrl = null;
    try {
      originalUrl = original == null ? null : new URL(original, currentUrl);
    } catch {
    }
    let resolvedUrl = new URL(resolved, currentUrl);
    let originalIsExternal = originalUrl != null && !isSameOrigin(originalUrl, currentUrl);
    let resolvedIsExternal = !isSameOrigin(resolvedUrl, currentUrl);
    if (externalPolicy === "reject") {
      if (originalIsExternal || resolvedIsExternal) {
        throw new Error("External navigation is not allowed");
      }
    } else if (resolvedIsExternal) {
      if (originalUrl == null || !isExplicitUrl(original, originalUrl) || !isSameOrigin(originalUrl, resolvedUrl)) {
        throw new Error("External navigation is not allowed");
      }
    }
  }
  var validMutationMethodsArr = [
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
  ];
  var validMutationMethods = new Set(
    validMutationMethodsArr
  );
  var validRequestMethodsArr = [
    "GET",
    ...validMutationMethodsArr
  ];
  var validRequestMethods = new Set(validRequestMethodsArr);
  var _routes;
  var _branches;
  var _hmrRoutes;
  var _hmrBranches;
  _routes = /* @__PURE__ */ new WeakMap();
  _branches = /* @__PURE__ */ new WeakMap();
  _hmrRoutes = /* @__PURE__ */ new WeakMap();
  _hmrBranches = /* @__PURE__ */ new WeakMap();
  var invalidProtocols = [
    "about:",
    "blob:",
    "chrome:",
    "chrome-untrusted:",
    "content:",
    "data:",
    "devtools:",
    "file:",
    "filesystem:",
    // eslint-disable-next-line no-script-url
    "javascript:"
  ];
  function hasInvalidProtocol(location2) {
    try {
      return invalidProtocols.includes(new URL(location2).protocol);
    } catch {
      return false;
    }
  }
  var DataRouterContext = React.createContext(null);
  DataRouterContext.displayName = "DataRouter";
  var DataRouterStateContext = React.createContext(null);
  DataRouterStateContext.displayName = "DataRouterState";
  var RSCRouterContext = React.createContext(false);
  function useIsRSCRouterContext() {
    return React.useContext(RSCRouterContext);
  }
  var ViewTransitionContext = React.createContext({
    isTransitioning: false
  });
  ViewTransitionContext.displayName = "ViewTransition";
  var FetchersContext = React.createContext(
    /* @__PURE__ */ new Map()
  );
  FetchersContext.displayName = "Fetchers";
  var AwaitContext = React.createContext(null);
  AwaitContext.displayName = "Await";
  var NavigationContext = React.createContext(
    null
  );
  NavigationContext.displayName = "Navigation";
  var LocationContext = React.createContext(
    null
  );
  LocationContext.displayName = "Location";
  var RouteContext = React.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  });
  RouteContext.displayName = "Route";
  var RouteErrorContext = React.createContext(null);
  RouteErrorContext.displayName = "RouteError";
  var ENABLE_DEV_WARNINGS = true;
  var ERROR_DIGEST_BASE = "REACT_ROUTER_ERROR";
  var ERROR_DIGEST_REDIRECT = "REDIRECT";
  var ERROR_DIGEST_ROUTE_ERROR_RESPONSE = "ROUTE_ERROR_RESPONSE";
  function decodeRedirectErrorDigest(digest) {
    if (digest.startsWith(`${ERROR_DIGEST_BASE}:${ERROR_DIGEST_REDIRECT}:{`)) {
      try {
        let parsed = JSON.parse(digest.slice(28));
        if (typeof parsed === "object" && parsed && typeof parsed.status === "number" && typeof parsed.statusText === "string" && typeof parsed.location === "string" && typeof parsed.reloadDocument === "boolean" && typeof parsed.replace === "boolean") {
          return parsed;
        }
      } catch {
      }
    }
  }
  function decodeRouteErrorResponseDigest(digest) {
    if (digest.startsWith(
      `${ERROR_DIGEST_BASE}:${ERROR_DIGEST_ROUTE_ERROR_RESPONSE}:{`
    )) {
      try {
        let parsed = JSON.parse(digest.slice(40));
        if (typeof parsed === "object" && parsed && typeof parsed.status === "number" && typeof parsed.statusText === "string") {
          return new ErrorResponseImpl(
            parsed.status,
            parsed.statusText,
            parsed.data
          );
        }
      } catch {
      }
    }
  }
  function useHref(to, { relative } = {}) {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useHref() may be used only in the context of a <Router> component.`
    );
    let { basename, navigator: navigator2 } = React2.useContext(NavigationContext);
    let { hash, pathname, search } = useResolvedPath(to, { relative });
    let joinedPathname = pathname;
    if (basename !== "/") {
      joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
    }
    return navigator2.createHref({ pathname: joinedPathname, search, hash });
  }
  function useInRouterContext() {
    return React2.useContext(LocationContext) != null;
  }
  function useLocation() {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useLocation() may be used only in the context of a <Router> component.`
    );
    return React2.useContext(LocationContext).location;
  }
  var navigateEffectWarning = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
  function useIsomorphicLayoutEffect(cb) {
    let isStatic = React2.useContext(NavigationContext).static;
    if (!isStatic) {
      React2.useLayoutEffect(cb);
    }
  }
  function useNavigate() {
    let { isDataRoute } = React2.useContext(RouteContext);
    return isDataRoute ? useNavigateStable() : useNavigateUnstable();
  }
  function useNavigateUnstable() {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useNavigate() may be used only in the context of a <Router> component.`
    );
    let dataRouterContext = React2.useContext(DataRouterContext);
    let { basename, navigator: navigator2 } = React2.useContext(NavigationContext);
    let { matches } = React2.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
    let activeRef = React2.useRef(false);
    useIsomorphicLayoutEffect(() => {
      activeRef.current = true;
    });
    let navigate = React2.useCallback(
      (to, options = {}) => {
        warning(activeRef.current, navigateEffectWarning);
        if (!activeRef.current) return;
        if (typeof to === "number") {
          navigator2.go(to);
          return;
        }
        let path = resolveTo(
          to,
          JSON.parse(routePathnamesJson),
          locationPathname,
          options.relative === "path"
        );
        if (dataRouterContext == null && basename !== "/") {
          path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
        }
        validateNavigationTarget(
          typeof to === "string" ? to : createPath(to),
          navigator2.createHref(path),
          getNavigatorCurrentUrl(navigator2),
          "reject"
        );
        (!!options.replace ? navigator2.replace : navigator2.push)(
          path,
          options.state,
          options
        );
      },
      [
        basename,
        navigator2,
        routePathnamesJson,
        locationPathname,
        dataRouterContext
      ]
    );
    return navigate;
  }
  var OutletContext = React2.createContext(null);
  function useResolvedPath(to, { relative } = {}) {
    let { matches } = React2.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
    return React2.useMemo(
      () => resolveTo(
        to,
        JSON.parse(routePathnamesJson),
        locationPathname,
        relative === "path"
      ),
      [to, routePathnamesJson, locationPathname, relative]
    );
  }
  function useRoutesImpl(routes, locationArg, dataRouterOpts) {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useRoutes() may be used only in the context of a <Router> component.`
    );
    let { navigator: navigator2 } = React2.useContext(NavigationContext);
    let { matches: parentMatches } = React2.useContext(RouteContext);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;
    if (ENABLE_DEV_WARNINGS) {
      let parentPath = parentRoute && parentRoute.path || "";
      warningOnce(
        parentPathname,
        !parentRoute || parentPath.endsWith("*") || parentPath.endsWith("*?"),
        `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${parentPathname}" (under <Route path="${parentPath}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${parentPath}"> to <Route path="${parentPath === "/" ? "*" : `${parentPath}/*`}">.`
      );
    }
    let locationFromContext = useLocation();
    let location2;
    if (locationArg) {
      let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
      invariant(
        parentPathnameBase === "/" || parsedLocationArg.pathname?.startsWith(parentPathnameBase),
        `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${parentPathnameBase}" but pathname "${parsedLocationArg.pathname}" was given in the \`location\` prop.`
      );
      location2 = parsedLocationArg;
    } else {
      location2 = locationFromContext;
    }
    let pathname = location2.pathname || "/";
    let remainingPathname = pathname;
    if (parentPathnameBase !== "/") {
      let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
      let segments = pathname.replace(/^\//, "").split("/");
      remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
    }
    let matches = dataRouterOpts && dataRouterOpts.state.matches.length ? (
      // If we're in a data router, use the matches we've already identified but ensure
      // we have the latest route instances from the manifest in case elements have changed
      dataRouterOpts.state.matches.map(
        (m) => Object.assign(m, {
          route: dataRouterOpts.manifest[m.route.id] || m.route
        })
      )
    ) : matchRoutes(routes, { pathname: remainingPathname });
    if (ENABLE_DEV_WARNINGS) {
      warning(
        parentRoute || matches != null,
        `No routes matched location "${location2.pathname}${location2.search}${location2.hash}" `
      );
      warning(
        matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0,
        `Matched leaf route at location "${location2.pathname}${location2.search}${location2.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
      );
    }
    let renderedMatches = _renderMatches(
      matches && matches.map(
        (match) => Object.assign({}, match, {
          params: Object.assign({}, parentParams, match.params),
          pathname: joinPaths([
            parentPathnameBase,
            // Re-encode pathnames that were decoded inside matchRoutes.
            // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
            // `new URL()` internally and we need to prevent it from treating
            // them as separators
            navigator2.encodeLocation ? navigator2.encodeLocation(
              match.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
            ).pathname : match.pathname
          ]),
          pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
            parentPathnameBase,
            // Re-encode pathnames that were decoded inside matchRoutes
            // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
            // `new URL()` internally and we need to prevent it from treating
            // them as separators
            navigator2.encodeLocation ? navigator2.encodeLocation(
              match.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
            ).pathname : match.pathnameBase
          ])
        })
      ),
      parentMatches,
      dataRouterOpts
    );
    if (locationArg && renderedMatches) {
      return /* @__PURE__ */ React2.createElement(
        LocationContext.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              mask: void 0,
              ...location2
            },
            navigationType: "POP"
            /* Pop */
          }
        },
        renderedMatches
      );
    }
    return renderedMatches;
  }
  function DefaultErrorComponent() {
    let error = useRouteError();
    let message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : error instanceof Error ? error.message : JSON.stringify(error);
    let stack = error instanceof Error ? error.stack : null;
    let lightgrey = "rgba(200,200,200, 0.5)";
    let preStyles = { padding: "0.5rem", backgroundColor: lightgrey };
    let codeStyles = { padding: "2px 4px", backgroundColor: lightgrey };
    let devInfo = null;
    if (ENABLE_DEV_WARNINGS) {
      console.error(
        "Error handled by React Router default ErrorBoundary:",
        error
      );
      devInfo = /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), /* @__PURE__ */ React2.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ React2.createElement("code", { style: codeStyles }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ React2.createElement("code", { style: codeStyles }, "errorElement"), " prop on your route."));
    }
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ React2.createElement("h3", { style: { fontStyle: "italic" } }, message), stack ? /* @__PURE__ */ React2.createElement("pre", { style: preStyles }, stack) : null, devInfo);
  }
  var defaultErrorElement = /* @__PURE__ */ React2.createElement(DefaultErrorComponent, null);
  var RenderErrorBoundary = class extends React2.Component {
    constructor(props) {
      super(props);
      this.state = {
        location: props.location,
        revalidation: props.revalidation,
        error: props.error
      };
    }
    static getDerivedStateFromError(error) {
      return { error };
    }
    static getDerivedStateFromProps(props, state) {
      if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
        return {
          error: props.error,
          location: props.location,
          revalidation: props.revalidation
        };
      }
      return {
        error: props.error !== void 0 ? props.error : state.error,
        location: state.location,
        revalidation: props.revalidation || state.revalidation
      };
    }
    componentDidCatch(error, errorInfo) {
      if (this.props.onError) {
        this.props.onError(error, errorInfo);
      } else {
        console.error(
          "React Router caught the following error during render",
          error
        );
      }
    }
    render() {
      let error = this.state.error;
      if (this.context && typeof error === "object" && error && "digest" in error && typeof error.digest === "string") {
        const decoded = decodeRouteErrorResponseDigest(error.digest);
        if (decoded) error = decoded;
      }
      let result = error !== void 0 ? /* @__PURE__ */ React2.createElement(RouteContext.Provider, { value: this.props.routeContext }, /* @__PURE__ */ React2.createElement(
        RouteErrorContext.Provider,
        {
          value: error,
          children: this.props.component
        }
      )) : this.props.children;
      if (this.context) {
        return /* @__PURE__ */ React2.createElement(RSCErrorHandler, { error }, result);
      }
      return result;
    }
  };
  RenderErrorBoundary.contextType = RSCRouterContext;
  var errorRedirectHandledMap = /* @__PURE__ */ new WeakMap();
  function RSCErrorHandler({
    children,
    error
  }) {
    let { basename, navigator: navigator2 } = React2.useContext(NavigationContext);
    if (typeof error === "object" && error && "digest" in error && typeof error.digest === "string") {
      let redirect2 = decodeRedirectErrorDigest(error.digest);
      if (redirect2) {
        let existingRedirect = errorRedirectHandledMap.get(error);
        if (existingRedirect) throw existingRedirect;
        let parsed = parseToInfo(redirect2.location, basename);
        let target = parsed.absoluteURL || parsed.to;
        validateNavigationTarget(
          redirect2.location,
          target,
          getNavigatorCurrentUrl(navigator2),
          "allow-explicit"
        );
        if (hasInvalidProtocol(target)) {
          throw new Error("Invalid redirect location");
        }
        if (isBrowser && !errorRedirectHandledMap.get(error)) {
          if (parsed.isExternal || redirect2.reloadDocument) {
            window.location.href = target;
          } else {
            const redirectPromise = Promise.resolve().then(
              () => window.__reactRouterDataRouter.navigate(parsed.to, {
                replace: redirect2.replace
              })
            );
            errorRedirectHandledMap.set(error, redirectPromise);
            throw redirectPromise;
          }
        }
        return /* @__PURE__ */ React2.createElement("meta", { httpEquiv: "refresh", content: `0;url=${target}` });
      }
    }
    return children;
  }
  function RenderedRoute({ routeContext, match, children }) {
    let dataRouterContext = React2.useContext(DataRouterContext);
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
      dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    }
    return /* @__PURE__ */ React2.createElement(RouteContext.Provider, { value: routeContext }, children);
  }
  function _renderMatches(matches, parentMatches = [], dataRouterOpts) {
    let dataRouterState = dataRouterOpts?.state;
    if (matches == null) {
      if (!dataRouterState) {
        return null;
      }
      if (dataRouterState.errors) {
        matches = dataRouterState.matches;
      } else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
        matches = dataRouterState.matches;
      } else {
        return null;
      }
    }
    let renderedMatches = matches;
    let errors = dataRouterState?.errors;
    if (errors != null) {
      let errorIndex = renderedMatches.findIndex(
        (m) => m.route.id && errors?.[m.route.id] !== void 0
      );
      invariant(
        errorIndex >= 0,
        `Could not find a matching route for errors on route IDs: ${Object.keys(
          errors
        ).join(",")}`
      );
      renderedMatches = renderedMatches.slice(
        0,
        Math.min(renderedMatches.length, errorIndex + 1)
      );
    }
    let renderFallback = false;
    let fallbackIndex = -1;
    if (dataRouterOpts && dataRouterState) {
      renderFallback = dataRouterState.renderFallback;
      for (let i = 0; i < renderedMatches.length; i++) {
        let match = renderedMatches[i];
        if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
          fallbackIndex = i;
        }
        if (match.route.id) {
          let { loaderData, errors: errors2 } = dataRouterState;
          let needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors2 || errors2[match.route.id] === void 0);
          if (match.route.lazy || needsToRunLoader) {
            if (dataRouterOpts.isStatic) {
              renderFallback = true;
            }
            if (fallbackIndex >= 0) {
              renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
            } else {
              renderedMatches = [renderedMatches[0]];
            }
            break;
          }
        }
      }
    }
    let onErrorHandler = dataRouterOpts?.onError;
    let onError = dataRouterState && onErrorHandler ? (error, errorInfo) => {
      onErrorHandler(error, {
        location: dataRouterState.location,
        params: dataRouterState.matches?.[0]?.params ?? {},
        pattern: getRoutePattern(dataRouterState.matches),
        errorInfo
      });
    } : void 0;
    return renderedMatches.reduceRight(
      (outlet, match, index) => {
        let error;
        let shouldRenderHydrateFallback = false;
        let errorElement = null;
        let hydrateFallbackElement = null;
        if (dataRouterState) {
          error = errors && match.route.id ? errors[match.route.id] : void 0;
          errorElement = match.route.errorElement || defaultErrorElement;
          if (renderFallback) {
            if (fallbackIndex < 0 && index === 0) {
              warningOnce(
                "route-fallback",
                false,
                "No `HydrateFallback` element provided to render during initial hydration"
              );
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = null;
            } else if (fallbackIndex === index) {
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = match.route.hydrateFallbackElement || null;
            }
          }
        }
        let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
        let getChildren = () => {
          let children;
          if (error) {
            children = errorElement;
          } else if (shouldRenderHydrateFallback) {
            children = hydrateFallbackElement;
          } else if (match.route.Component) {
            children = /* @__PURE__ */ React2.createElement(match.route.Component, null);
          } else if (match.route.element) {
            children = match.route.element;
          } else {
            children = outlet;
          }
          return /* @__PURE__ */ React2.createElement(
            RenderedRoute,
            {
              match,
              routeContext: {
                outlet,
                matches: matches2,
                isDataRoute: dataRouterState != null
              },
              children
            }
          );
        };
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ React2.createElement(
          RenderErrorBoundary,
          {
            location: dataRouterState.location,
            revalidation: dataRouterState.revalidation,
            component: errorElement,
            error,
            children: getChildren(),
            routeContext: { outlet: null, matches: matches2, isDataRoute: true },
            onError
          }
        ) : getChildren();
      },
      null
    );
  }
  function getDataRouterConsoleError(hookName) {
    return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function useDataRouterContext(hookName) {
    let ctx = React2.useContext(DataRouterContext);
    invariant(ctx, getDataRouterConsoleError(hookName));
    return ctx;
  }
  function useDataRouterState(hookName) {
    let state = React2.useContext(DataRouterStateContext);
    invariant(state, getDataRouterConsoleError(hookName));
    return state;
  }
  function useRouteContext(hookName) {
    let route = React2.useContext(RouteContext);
    invariant(route, getDataRouterConsoleError(hookName));
    return route;
  }
  function useCurrentRouteId(hookName) {
    let route = useRouteContext(hookName);
    let thisRoute = route.matches[route.matches.length - 1];
    invariant(
      thisRoute.route.id,
      `${hookName} can only be used on routes that contain a unique "id"`
    );
    return thisRoute.route.id;
  }
  function useRouteId() {
    return useCurrentRouteId(
      "useRouteId"
      /* UseRouteId */
    );
  }
  function useNavigation() {
    let state = useDataRouterState(
      "useNavigation"
      /* UseNavigation */
    );
    return React2.useMemo(() => {
      let { matches, historyAction, ...rest } = state.navigation;
      return rest;
    }, [state.navigation]);
  }
  function useMatches() {
    let { matches, loaderData } = useDataRouterState(
      "useMatches"
      /* UseMatches */
    );
    return React2.useMemo(
      () => matches.map((m) => convertRouteMatchToUiMatch(m, loaderData)),
      [matches, loaderData]
    );
  }
  function useRouteError() {
    let error = React2.useContext(RouteErrorContext);
    let state = useDataRouterState(
      "useRouteError"
      /* UseRouteError */
    );
    let routeId = useCurrentRouteId(
      "useRouteError"
      /* UseRouteError */
    );
    if (error !== void 0) {
      return error;
    }
    return state.errors?.[routeId];
  }
  function useNavigateStable() {
    let { router } = useDataRouterContext(
      "useNavigate"
      /* UseNavigateStable */
    );
    let id2 = useCurrentRouteId(
      "useNavigate"
      /* UseNavigateStable */
    );
    let activeRef = React2.useRef(false);
    useIsomorphicLayoutEffect(() => {
      activeRef.current = true;
    });
    let navigate = React2.useCallback(
      async (to, options = {}) => {
        warning(activeRef.current, navigateEffectWarning);
        if (!activeRef.current) return;
        if (typeof to === "number") {
          await router.navigate(to);
        } else {
          await router.navigate(to, { fromRouteId: id2, ...options });
        }
      },
      [router, id2]
    );
    return navigate;
  }
  var alreadyWarned = {};
  function warningOnce(key, cond, message) {
    if (!cond && !alreadyWarned[key]) {
      alreadyWarned[key] = true;
      warning(false, message);
    }
  }
  var USE_OPTIMISTIC = "useOptimistic";
  var useOptimisticImpl = React3[USE_OPTIMISTIC];
  var MemoizedDataRoutes = React3.memo(DataRoutes2);
  function DataRoutes2({
    routes,
    manifest,
    future,
    state,
    isStatic,
    onError
  }) {
    return useRoutesImpl(routes, void 0, {
      manifest,
      state,
      isStatic,
      onError,
      future
    });
  }
  function MemoryRouter({
    basename,
    children,
    initialEntries,
    initialIndex,
    useTransitions
  }) {
    let historyRef = React3.useRef();
    if (historyRef.current == null) {
      historyRef.current = createMemoryHistory({
        initialEntries,
        initialIndex,
        v5Compat: true
      });
    }
    let history = historyRef.current;
    let [state, setStateImpl] = React3.useState({
      action: history.action,
      location: history.location
    });
    let setState = React3.useCallback(
      (newState) => {
        if (useTransitions === false) {
          setStateImpl(newState);
        } else {
          React3.startTransition(() => setStateImpl(newState));
        }
      },
      [useTransitions]
    );
    React3.useLayoutEffect(() => history.listen(setState), [history, setState]);
    return /* @__PURE__ */ React3.createElement(
      Router,
      {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        useTransitions
      }
    );
  }
  function Router({
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = "POP",
    navigator: navigator2,
    static: staticProp = false,
    useTransitions
  }) {
    invariant(
      !useInRouterContext(),
      `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`
    );
    let basename = basenameProp.replace(/^\/*/, "/");
    let navigationContext = React3.useMemo(
      () => ({
        basename,
        navigator: navigator2,
        static: staticProp,
        useTransitions,
        future: {}
      }),
      [basename, navigator2, staticProp, useTransitions]
    );
    if (typeof locationProp === "string") {
      locationProp = parsePath(locationProp);
    }
    let {
      pathname = "/",
      search = "",
      hash = "",
      state = null,
      key = "default",
      mask
    } = locationProp;
    let locationContext = React3.useMemo(() => {
      let trailingPathname = stripBasename(pathname, basename);
      if (trailingPathname == null) {
        return null;
      }
      return {
        location: {
          pathname: trailingPathname,
          search,
          hash,
          state,
          key,
          mask
        },
        navigationType
      };
    }, [basename, pathname, search, hash, state, key, navigationType, mask]);
    warning(
      locationContext != null,
      `<Router basename="${basename}"> is not able to match the URL "${pathname}${search}${hash}" because it does not start with the basename, so the <Router> won't render anything.`
    );
    if (locationContext == null) {
      return null;
    }
    return /* @__PURE__ */ React3.createElement(NavigationContext.Provider, { value: navigationContext }, /* @__PURE__ */ React3.createElement(LocationContext.Provider, { children, value: locationContext }));
  }
  var defaultMethod = "get";
  var defaultEncType = "application/x-www-form-urlencoded";
  function isHtmlElement(object) {
    return typeof HTMLElement !== "undefined" && object instanceof HTMLElement;
  }
  function isButtonElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
  }
  function isFormElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
  }
  function isInputElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
  }
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  function shouldProcessLinkClick(event, target) {
    return event.button === 0 && // Ignore everything but left clicks
    (!target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event);
  }
  var _formDataSupportsSubmitter = null;
  function isFormDataSubmitterSupported() {
    if (_formDataSupportsSubmitter === null) {
      try {
        new FormData(
          document.createElement("form"),
          // @ts-expect-error if FormData supports the submitter parameter, this will throw
          0
        );
        _formDataSupportsSubmitter = false;
      } catch (e2) {
        _formDataSupportsSubmitter = true;
      }
    }
    return _formDataSupportsSubmitter;
  }
  var supportedFormEncTypes = /* @__PURE__ */ new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  ]);
  function getFormEncType(encType) {
    if (encType != null && !supportedFormEncTypes.has(encType)) {
      warning(
        false,
        `"${encType}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`
      );
      return null;
    }
    return encType;
  }
  function getFormSubmissionInfo(target, basename) {
    let method;
    let action;
    let encType;
    let formData;
    let body;
    if (isFormElement(target)) {
      let attr = target.getAttribute("action");
      action = attr ? stripBasename(attr, basename) : null;
      method = target.getAttribute("method") || defaultMethod;
      encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
      formData = new FormData(target);
    } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
      let form = target.form;
      if (form == null) {
        throw new Error(
          `Cannot submit a <button> or <input type="submit"> without a <form>`
        );
      }
      let attr = target.getAttribute("formaction") || form.getAttribute("action");
      action = attr ? stripBasename(attr, basename) : null;
      method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
      encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
      formData = new FormData(form, target);
      if (!isFormDataSubmitterSupported()) {
        let { name, type, value } = target;
        if (type === "image") {
          let prefix = name ? `${name}.` : "";
          formData.append(`${prefix}x`, "0");
          formData.append(`${prefix}y`, "0");
        } else if (name) {
          formData.append(name, value);
        }
      }
    } else if (isHtmlElement(target)) {
      throw new Error(
        `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`
      );
    } else {
      method = defaultMethod;
      action = null;
      encType = defaultEncType;
      body = target;
    }
    if (formData && encType === "text/plain") {
      body = formData;
      formData = void 0;
    }
    return { action, method: method.toLowerCase(), encType, formData, body };
  }
  var objectProtoNames2 = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  var ESCAPE_LOOKUP = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  var ESCAPE_REGEX = /[&><\u2028\u2029]/g;
  function escapeHtml(html) {
    return html.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
  }
  function invariant2(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      throw new Error(message);
    }
  }
  function singleFetchUrl(reqUrl, basename, trailingSlashAware, extension) {
    let url = typeof reqUrl === "string" ? new URL(
      reqUrl,
      // This can be called during the SSR flow via PrefetchPageLinksImpl so
      // don't assume window is available
      typeof window === "undefined" ? "server://singlefetch/" : window.location.origin
    ) : reqUrl;
    if (trailingSlashAware) {
      if (url.pathname.endsWith("/")) {
        url.pathname = `${url.pathname}_.${extension}`;
      } else {
        url.pathname = `${url.pathname}.${extension}`;
      }
    } else {
      if (url.pathname === "/") {
        url.pathname = `_root.${extension}`;
      } else if (basename && stripBasename(url.pathname, basename) === "/") {
        url.pathname = `${removeTrailingSlash(basename)}/_root.${extension}`;
      } else {
        url.pathname = `${removeTrailingSlash(url.pathname)}.${extension}`;
      }
    }
    return url;
  }
  async function loadRouteModule(route, routeModulesCache) {
    if (route.id in routeModulesCache) {
      return routeModulesCache[route.id];
    }
    try {
      let routeModule = await import(
        /* @vite-ignore */
        /* webpackIgnore: true */
        route.module
      );
      routeModulesCache[route.id] = routeModule;
      return routeModule;
    } catch (error) {
      console.error(
        `Error loading route module \`${route.module}\`, reloading page...`
      );
      console.error(error);
      if (window.__reactRouterContext && window.__reactRouterContext.isSpaMode && // @ts-expect-error
      import_meta.hot) {
        throw error;
      }
      window.location.reload();
      return new Promise(() => {
      });
    }
  }
  function isPageLinkDescriptor(object) {
    return object != null && typeof object.page === "string";
  }
  function isHtmlLinkDescriptor(object) {
    if (object == null) {
      return false;
    }
    if (object.href == null) {
      return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
    }
    return typeof object.rel === "string" && typeof object.href === "string";
  }
  async function getKeyedPrefetchLinks(matches, manifest, routeModules) {
    let links = await Promise.all(
      matches.map(async (match) => {
        let route = manifest.routes[match.route.id];
        if (route) {
          let mod = await loadRouteModule(route, routeModules);
          return mod.links ? mod.links() : [];
        }
        return [];
      })
    );
    return dedupeLinkDescriptors(
      links.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map(
        (link) => link.rel === "stylesheet" ? { ...link, rel: "prefetch", as: "style" } : { ...link, rel: "prefetch" }
      )
    );
  }
  function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location2, mode) {
    let isNew = (match, index) => {
      if (!currentMatches[index]) return true;
      return match.route.id !== currentMatches[index].route.id;
    };
    let matchPathChanged = (match, index) => {
      return (
        // param change, /users/123 -> /users/456
        currentMatches[index].pathname !== match.pathname || // splat param changed, which is not present in match.path
        // e.g. /files/images/avatar.jpg -> files/finances.xls
        currentMatches[index].route.path?.endsWith("*") && currentMatches[index].params["*"] !== match.params["*"]
      );
    };
    if (mode === "assets") {
      return nextMatches.filter(
        (match, index) => isNew(match, index) || matchPathChanged(match, index)
      );
    }
    if (mode === "data") {
      return nextMatches.filter((match, index) => {
        let manifestRoute = manifest.routes[match.route.id];
        if (!manifestRoute || !manifestRoute.hasLoader) {
          return false;
        }
        if (isNew(match, index) || matchPathChanged(match, index)) {
          return true;
        }
        if (match.route.shouldRevalidate) {
          let routeChoice = match.route.shouldRevalidate({
            currentUrl: new URL(
              location2.pathname + location2.search + location2.hash,
              window.origin
            ),
            currentParams: currentMatches[0]?.params || {},
            nextUrl: new URL(page, window.origin),
            nextParams: match.params,
            defaultShouldRevalidate: true
          });
          if (typeof routeChoice === "boolean") {
            return routeChoice;
          }
        }
        return true;
      });
    }
    return [];
  }
  function getModuleLinkHrefs(matches, manifest, { includeHydrateFallback } = {}) {
    return dedupeHrefs(
      matches.map((match) => {
        let route = manifest.routes[match.route.id];
        if (!route) return [];
        let hrefs = [route.module];
        if (route.clientActionModule) {
          hrefs = hrefs.concat(route.clientActionModule);
        }
        if (route.clientLoaderModule) {
          hrefs = hrefs.concat(route.clientLoaderModule);
        }
        if (includeHydrateFallback && route.hydrateFallbackModule) {
          hrefs = hrefs.concat(route.hydrateFallbackModule);
        }
        if (route.imports) {
          hrefs = hrefs.concat(route.imports);
        }
        return hrefs;
      }).flat(1)
    );
  }
  function dedupeHrefs(hrefs) {
    return [...new Set(hrefs)];
  }
  function sortKeys(obj) {
    let sorted = {};
    let keys = Object.keys(obj).sort();
    for (let key of keys) {
      sorted[key] = obj[key];
    }
    return sorted;
  }
  function dedupeLinkDescriptors(descriptors, preloads) {
    let set = /* @__PURE__ */ new Set();
    let preloadsSet = new Set(preloads);
    return descriptors.reduce((deduped, descriptor) => {
      let alreadyModulePreload = preloads && !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
      if (alreadyModulePreload) {
        return deduped;
      }
      let key = JSON.stringify(sortKeys(descriptor));
      if (!set.has(key)) {
        set.add(key);
        deduped.push({ key, link: descriptor });
      }
      return deduped;
    }, []);
  }
  function useDataRouterContext2() {
    let context = React8.useContext(DataRouterContext);
    invariant2(
      context,
      "You must render this element inside a <DataRouterContext.Provider> element"
    );
    return context;
  }
  function useDataRouterStateContext() {
    let context = React8.useContext(DataRouterStateContext);
    invariant2(
      context,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    );
    return context;
  }
  var FrameworkContext = React8.createContext(void 0);
  FrameworkContext.displayName = "FrameworkContext";
  function useFrameworkContext() {
    let context = React8.useContext(FrameworkContext);
    invariant2(
      context,
      "You must render this element inside a <HydratedRouter> element"
    );
    return context;
  }
  function usePrefetchBehavior(prefetch, theirElementProps) {
    let frameworkContext = React8.useContext(FrameworkContext);
    let [maybePrefetch, setMaybePrefetch] = React8.useState(false);
    let [shouldPrefetch, setShouldPrefetch] = React8.useState(false);
    let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = theirElementProps;
    let ref = React8.useRef(null);
    React8.useEffect(() => {
      if (prefetch === "render") {
        setShouldPrefetch(true);
      }
      if (prefetch === "viewport") {
        let callback = (entries) => {
          entries.forEach((entry) => {
            setShouldPrefetch(entry.isIntersecting);
          });
        };
        let observer = new IntersectionObserver(callback, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => {
          observer.disconnect();
        };
      }
    }, [prefetch]);
    React8.useEffect(() => {
      if (maybePrefetch) {
        let id2 = setTimeout(() => {
          setShouldPrefetch(true);
        }, 100);
        return () => {
          clearTimeout(id2);
        };
      }
    }, [maybePrefetch]);
    let setIntent = () => {
      setMaybePrefetch(true);
    };
    let cancelIntent = () => {
      setMaybePrefetch(false);
      setShouldPrefetch(false);
    };
    if (!frameworkContext) {
      return [false, ref, {}];
    }
    if (prefetch !== "intent") {
      return [shouldPrefetch, ref, {}];
    }
    return [
      shouldPrefetch,
      ref,
      {
        onFocus: composeEventHandlers(onFocus, setIntent),
        onBlur: composeEventHandlers(onBlur, cancelIntent),
        onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
        onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
        onTouchStart: composeEventHandlers(onTouchStart, setIntent)
      }
    ];
  }
  function composeEventHandlers(theirHandler, ourHandler) {
    return (event) => {
      theirHandler && theirHandler(event);
      if (!event.defaultPrevented) {
        ourHandler(event);
      }
    };
  }
  function PrefetchPageLinks({ page, ...linkProps }) {
    let rsc = useIsRSCRouterContext();
    let { nonce: contextNonce } = useFrameworkContext();
    let { router } = useDataRouterContext2();
    let matches = React8.useMemo(
      () => matchRoutes(router.routes, page, router.basename),
      [router.routes, page, router.basename]
    );
    if (!matches) {
      return null;
    }
    if (linkProps.nonce == null && contextNonce) {
      linkProps = { ...linkProps, nonce: contextNonce };
    }
    if (rsc) {
      return /* @__PURE__ */ React8.createElement(RSCPrefetchPageLinksImpl, { page, matches, ...linkProps });
    }
    return /* @__PURE__ */ React8.createElement(PrefetchPageLinksImpl, { page, matches, ...linkProps });
  }
  function useKeyedPrefetchLinks(matches) {
    let { manifest, routeModules } = useFrameworkContext();
    let [keyedPrefetchLinks, setKeyedPrefetchLinks] = React8.useState([]);
    React8.useEffect(() => {
      let interrupted = false;
      void getKeyedPrefetchLinks(matches, manifest, routeModules).then(
        (links) => {
          if (!interrupted) {
            setKeyedPrefetchLinks(links);
          }
        }
      );
      return () => {
        interrupted = true;
      };
    }, [matches, manifest, routeModules]);
    return keyedPrefetchLinks;
  }
  function RSCPrefetchPageLinksImpl({
    page,
    matches: nextMatches,
    ...linkProps
  }) {
    let location2 = useLocation();
    let { future } = useFrameworkContext();
    let { basename } = useDataRouterContext2();
    let dataHrefs = React8.useMemo(() => {
      if (page === location2.pathname + location2.search + location2.hash) {
        return [];
      }
      let url = singleFetchUrl(
        page,
        basename,
        future.v8_trailingSlashAwareDataRequests,
        "rsc"
      );
      let hasSomeRoutesWithShouldRevalidate = false;
      let targetRoutes = [];
      for (let match of nextMatches) {
        if (typeof match.route.shouldRevalidate === "function") {
          hasSomeRoutesWithShouldRevalidate = true;
        } else {
          targetRoutes.push(match.route.id);
        }
      }
      if (hasSomeRoutesWithShouldRevalidate && targetRoutes.length > 0) {
        url.searchParams.set("_routes", targetRoutes.join(","));
      }
      return [url.pathname + url.search];
    }, [
      basename,
      future.v8_trailingSlashAwareDataRequests,
      page,
      location2,
      nextMatches
    ]);
    return /* @__PURE__ */ React8.createElement(React8.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })));
  }
  function PrefetchPageLinksImpl({
    page,
    matches: nextMatches,
    ...linkProps
  }) {
    let location2 = useLocation();
    let { future, manifest, routeModules } = useFrameworkContext();
    let { basename } = useDataRouterContext2();
    let { loaderData, matches } = useDataRouterStateContext();
    let newMatchesForData = React8.useMemo(
      () => getNewMatchesForLinks(
        page,
        nextMatches,
        matches,
        manifest,
        location2,
        "data"
      ),
      [page, nextMatches, matches, manifest, location2]
    );
    let newMatchesForAssets = React8.useMemo(
      () => getNewMatchesForLinks(
        page,
        nextMatches,
        matches,
        manifest,
        location2,
        "assets"
      ),
      [page, nextMatches, matches, manifest, location2]
    );
    let dataHrefs = React8.useMemo(() => {
      if (page === location2.pathname + location2.search + location2.hash) {
        return [];
      }
      let routesParams = /* @__PURE__ */ new Set();
      let foundOptOutRoute = false;
      nextMatches.forEach((m) => {
        let manifestRoute = manifest.routes[m.route.id];
        if (!manifestRoute || !manifestRoute.hasLoader) {
          return;
        }
        if (!newMatchesForData.some((m2) => m2.route.id === m.route.id) && m.route.id in loaderData && routeModules[m.route.id]?.shouldRevalidate) {
          foundOptOutRoute = true;
        } else if (manifestRoute.hasClientLoader) {
          foundOptOutRoute = true;
        } else {
          routesParams.add(m.route.id);
        }
      });
      if (routesParams.size === 0) {
        return [];
      }
      let url = singleFetchUrl(
        page,
        basename,
        future.v8_trailingSlashAwareDataRequests,
        "data"
      );
      if (foundOptOutRoute && routesParams.size > 0) {
        url.searchParams.set(
          "_routes",
          nextMatches.filter((m) => routesParams.has(m.route.id)).map((m) => m.route.id).join(",")
        );
      }
      return [url.pathname + url.search];
    }, [
      basename,
      future.v8_trailingSlashAwareDataRequests,
      loaderData,
      location2,
      manifest,
      newMatchesForData,
      nextMatches,
      page,
      routeModules
    ]);
    let moduleHrefs = React8.useMemo(
      () => getModuleLinkHrefs(newMatchesForAssets, manifest),
      [newMatchesForAssets, manifest]
    );
    let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
    return /* @__PURE__ */ React8.createElement(React8.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })), moduleHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "modulepreload", href, ...linkProps })), keyedPrefetchLinks.map(({ key, link }) => (
      // these don't spread `linkProps` because they are full link descriptors
      // already with their own props
      /* @__PURE__ */ React8.createElement(
        "link",
        {
          key,
          nonce: linkProps.nonce,
          ...link,
          crossOrigin: link.crossOrigin ?? linkProps.crossOrigin
        }
      )
    )));
  }
  function mergeRefs(...refs) {
    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
  }
  var isBrowser2 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  try {
    if (isBrowser2) {
      window.__reactRouterVersion = // @ts-expect-error
      "7.18.3";
    }
  } catch (e2) {
  }
  function HistoryRouter({
    basename,
    children,
    history,
    useTransitions
  }) {
    let [state, setStateImpl] = React10.useState({
      action: history.action,
      location: history.location
    });
    let setState = React10.useCallback(
      (newState) => {
        if (useTransitions === false) {
          setStateImpl(newState);
        } else {
          React10.startTransition(() => setStateImpl(newState));
        }
      },
      [useTransitions]
    );
    React10.useLayoutEffect(() => history.listen(setState), [history, setState]);
    return /* @__PURE__ */ React10.createElement(
      Router,
      {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        useTransitions
      }
    );
  }
  HistoryRouter.displayName = "unstable_HistoryRouter";
  var Link = React10.forwardRef(
    function LinkWithRef({
      onClick,
      discover = "render",
      prefetch = "none",
      relative,
      reloadDocument,
      replace: replace2,
      mask,
      state,
      target,
      to,
      preventScrollReset,
      viewTransition,
      defaultShouldRevalidate,
      ...rest
    }, forwardedRef) {
      let { basename, navigator: navigator2, useTransitions } = React10.useContext(NavigationContext);
      let isAbsolute = typeof to === "string" && ABSOLUTE_URL_REGEX.test(to);
      let parsed = parseToInfo(to, basename);
      to = parsed.to;
      let href = useHref(to, { relative });
      let location2 = useLocation();
      let maskedHref = null;
      if (mask) {
        let resolved = resolveTo(
          mask,
          [],
          location2.mask ? location2.mask.pathname : "/",
          true
        );
        if (basename !== "/") {
          resolved.pathname = resolved.pathname === "/" ? basename : joinPaths([basename, resolved.pathname]);
        }
        maskedHref = navigator2.createHref(resolved);
      }
      let [shouldPrefetch, prefetchRef, prefetchHandlers] = usePrefetchBehavior(
        prefetch,
        rest
      );
      let internalOnClick = useLinkClickHandler(to, {
        replace: replace2,
        mask,
        state,
        target,
        preventScrollReset,
        relative,
        viewTransition,
        defaultShouldRevalidate,
        useTransitions
      });
      function handleClick(event) {
        if (onClick) onClick(event);
        if (!event.defaultPrevented) {
          internalOnClick(event);
        }
      }
      let isSpaLink = !(parsed.isExternal || reloadDocument);
      let link = (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        /* @__PURE__ */ React10.createElement(
          "a",
          {
            ...rest,
            ...prefetchHandlers,
            href: (isSpaLink ? maskedHref : void 0) || parsed.absoluteURL || href,
            onClick: isSpaLink ? handleClick : onClick,
            ref: mergeRefs(forwardedRef, prefetchRef),
            target,
            "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
          }
        )
      );
      return shouldPrefetch && !isAbsolute ? /* @__PURE__ */ React10.createElement(React10.Fragment, null, link, /* @__PURE__ */ React10.createElement(PrefetchPageLinks, { page: href })) : link;
    }
  );
  Link.displayName = "Link";
  var NavLink = React10.forwardRef(
    function NavLinkWithRef({
      "aria-current": ariaCurrentProp = "page",
      caseSensitive = false,
      className: classNameProp = "",
      end = false,
      style: styleProp,
      to,
      viewTransition,
      children,
      ...rest
    }, ref) {
      let path = useResolvedPath(to, { relative: rest.relative });
      let location2 = useLocation();
      let routerState = React10.useContext(DataRouterStateContext);
      let { navigator: navigator2, basename } = React10.useContext(NavigationContext);
      let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useViewTransitionState(path) && viewTransition === true;
      let toPathname = navigator2.encodeLocation ? navigator2.encodeLocation(path).pathname : path.pathname;
      let locationPathname = location2.pathname;
      let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
      if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
        toPathname = toPathname.toLowerCase();
      }
      if (nextLocationPathname && basename) {
        nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
      }
      const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
      let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
      let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
      let renderProps = {
        isActive,
        isPending,
        isTransitioning
      };
      let ariaCurrent = isActive ? ariaCurrentProp : void 0;
      let className;
      if (typeof classNameProp === "function") {
        className = classNameProp(renderProps);
      } else {
        className = [
          classNameProp,
          isActive ? "active" : null,
          isPending ? "pending" : null,
          isTransitioning ? "transitioning" : null
        ].filter(Boolean).join(" ");
      }
      let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
      return /* @__PURE__ */ React10.createElement(
        Link,
        {
          ...rest,
          "aria-current": ariaCurrent,
          className,
          ref,
          style,
          to,
          viewTransition
        },
        typeof children === "function" ? children(renderProps) : children
      );
    }
  );
  NavLink.displayName = "NavLink";
  var Form = React10.forwardRef(
    ({
      discover = "render",
      fetcherKey,
      navigate,
      reloadDocument,
      replace: replace2,
      state,
      method = defaultMethod,
      action,
      onSubmit,
      relative,
      preventScrollReset,
      viewTransition,
      defaultShouldRevalidate,
      ...props
    }, forwardedRef) => {
      let { useTransitions } = React10.useContext(NavigationContext);
      let submit = useSubmit();
      let formAction = useFormAction(action, { relative });
      let formMethod = method.toLowerCase() === "get" ? "get" : "post";
      let isAbsolute = typeof action === "string" && ABSOLUTE_URL_REGEX.test(action);
      let submitHandler = (event) => {
        onSubmit && onSubmit(event);
        if (event.defaultPrevented) return;
        event.preventDefault();
        let submitter = event.nativeEvent.submitter;
        let submitMethod = submitter?.getAttribute("formmethod") || method;
        let doSubmit = () => submit(submitter || event.currentTarget, {
          fetcherKey,
          method: submitMethod,
          navigate,
          replace: replace2,
          state,
          relative,
          preventScrollReset,
          viewTransition,
          defaultShouldRevalidate
        });
        if (useTransitions && navigate !== false) {
          React10.startTransition(() => doSubmit());
        } else {
          doSubmit();
        }
      };
      return /* @__PURE__ */ React10.createElement(
        "form",
        {
          ref: forwardedRef,
          method: formMethod,
          action: formAction,
          onSubmit: reloadDocument ? onSubmit : submitHandler,
          ...props,
          "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
        }
      );
    }
  );
  Form.displayName = "Form";
  function ScrollRestoration({
    getKey,
    storageKey,
    ...props
  }) {
    let remixContext = React10.useContext(FrameworkContext);
    let { basename } = React10.useContext(NavigationContext);
    let location2 = useLocation();
    let matches = useMatches();
    useScrollRestoration({ getKey, storageKey });
    let ssrKey = React10.useMemo(
      () => {
        if (!remixContext || !getKey) return null;
        let userKey = getScrollRestorationKey(
          location2,
          matches,
          basename,
          getKey
        );
        return userKey !== location2.key ? userKey : null;
      },
      // Nah, we only need this the first time for the SSR render
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );
    if (!remixContext || remixContext.isSpaMode) {
      return null;
    }
    let restoreScroll = ((storageKey2, restoreKey) => {
      if (!window.history.state || !window.history.state.key) {
        let key = Math.random().toString(32).slice(2);
        window.history.replaceState({ key }, "");
      }
      try {
        let positions = JSON.parse(sessionStorage.getItem(storageKey2) || "{}");
        let storedY = positions[restoreKey || window.history.state.key];
        if (typeof storedY === "number") {
          window.scrollTo(0, storedY);
        }
      } catch (error) {
        console.error(error);
        sessionStorage.removeItem(storageKey2);
      }
    }).toString();
    if (props.nonce == null && remixContext?.nonce) {
      props.nonce = remixContext.nonce;
    }
    return /* @__PURE__ */ React10.createElement(
      "script",
      {
        ...props,
        suppressHydrationWarning: true,
        dangerouslySetInnerHTML: {
          __html: `(${restoreScroll})(${escapeHtml(
            JSON.stringify(storageKey || SCROLL_RESTORATION_STORAGE_KEY)
          )}, ${escapeHtml(JSON.stringify(ssrKey))})`
        }
      }
    );
  }
  ScrollRestoration.displayName = "ScrollRestoration";
  function getDataRouterConsoleError2(hookName) {
    return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function useDataRouterContext3(hookName) {
    let ctx = React10.useContext(DataRouterContext);
    invariant(ctx, getDataRouterConsoleError2(hookName));
    return ctx;
  }
  function useDataRouterState2(hookName) {
    let state = React10.useContext(DataRouterStateContext);
    invariant(state, getDataRouterConsoleError2(hookName));
    return state;
  }
  function useLinkClickHandler(to, {
    target,
    replace: replaceProp,
    mask,
    state,
    preventScrollReset,
    relative,
    viewTransition,
    defaultShouldRevalidate,
    useTransitions
  } = {}) {
    let navigate = useNavigate();
    let location2 = useLocation();
    let path = useResolvedPath(to, { relative });
    return React10.useCallback(
      (event) => {
        if (shouldProcessLinkClick(event, target)) {
          event.preventDefault();
          let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location2) === createPath(path);
          let doNavigate = () => navigate(to, {
            replace: replace2,
            mask,
            state,
            preventScrollReset,
            relative,
            viewTransition,
            defaultShouldRevalidate
          });
          if (useTransitions) {
            React10.startTransition(() => doNavigate());
          } else {
            doNavigate();
          }
        }
      },
      [
        location2,
        navigate,
        path,
        replaceProp,
        mask,
        state,
        target,
        to,
        preventScrollReset,
        relative,
        viewTransition,
        defaultShouldRevalidate,
        useTransitions
      ]
    );
  }
  var fetcherId = 0;
  var getUniqueFetcherId = () => `__${String(++fetcherId)}__`;
  function useSubmit() {
    let { router } = useDataRouterContext3(
      "useSubmit"
      /* UseSubmit */
    );
    let { basename } = React10.useContext(NavigationContext);
    let currentRouteId = useRouteId();
    let routerFetch = router.fetch;
    let routerNavigate = router.navigate;
    return React10.useCallback(
      async (target, options = {}) => {
        let { action, method, encType, formData, body } = getFormSubmissionInfo(
          target,
          basename
        );
        if (options.navigate === false) {
          let key = options.fetcherKey || getUniqueFetcherId();
          await routerFetch(key, currentRouteId, options.action || action, {
            defaultShouldRevalidate: options.defaultShouldRevalidate,
            preventScrollReset: options.preventScrollReset,
            formData,
            body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            flushSync: options.flushSync
          });
        } else {
          await routerNavigate(options.action || action, {
            defaultShouldRevalidate: options.defaultShouldRevalidate,
            preventScrollReset: options.preventScrollReset,
            formData,
            body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            replace: options.replace,
            state: options.state,
            fromRouteId: currentRouteId,
            flushSync: options.flushSync,
            viewTransition: options.viewTransition
          });
        }
      },
      [routerFetch, routerNavigate, basename, currentRouteId]
    );
  }
  function useFormAction(action, { relative } = {}) {
    let { basename } = React10.useContext(NavigationContext);
    let routeContext = React10.useContext(RouteContext);
    invariant(routeContext, "useFormAction must be used inside a RouteContext");
    let [match] = routeContext.matches.slice(-1);
    let path = { ...useResolvedPath(action ? action : ".", { relative }) };
    let location2 = useLocation();
    if (action == null) {
      path.search = location2.search;
      let params = new URLSearchParams(path.search);
      let indexValues = params.getAll("index");
      let hasNakedIndexParam = indexValues.some((v2) => v2 === "");
      if (hasNakedIndexParam) {
        params.delete("index");
        indexValues.filter((v2) => v2).forEach((v2) => params.append("index", v2));
        let qs = params.toString();
        path.search = qs ? `?${qs}` : "";
      }
    }
    if ((!action || action === ".") && match.route.index) {
      path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    }
    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    return createPath(path);
  }
  var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
  var savedScrollPositions = {};
  function getScrollRestorationKey(location2, matches, basename, getKey) {
    let key = null;
    if (getKey) {
      if (basename !== "/") {
        key = getKey(
          {
            ...location2,
            pathname: stripBasename(location2.pathname, basename) || location2.pathname
          },
          matches
        );
      } else {
        key = getKey(location2, matches);
      }
    }
    if (key == null) {
      key = location2.key;
    }
    return key;
  }
  function useScrollRestoration({
    getKey,
    storageKey
  } = {}) {
    let { router } = useDataRouterContext3(
      "useScrollRestoration"
      /* UseScrollRestoration */
    );
    let { restoreScrollPosition, preventScrollReset } = useDataRouterState2(
      "useScrollRestoration"
      /* UseScrollRestoration */
    );
    let { basename } = React10.useContext(NavigationContext);
    let location2 = useLocation();
    let matches = useMatches();
    let navigation = useNavigation();
    React10.useEffect(() => {
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = "auto";
      };
    }, []);
    usePageHide(
      React10.useCallback(() => {
        if (navigation.state === "idle") {
          let key = getScrollRestorationKey(location2, matches, basename, getKey);
          savedScrollPositions[key] = window.scrollY;
        }
        try {
          sessionStorage.setItem(
            storageKey || SCROLL_RESTORATION_STORAGE_KEY,
            JSON.stringify(savedScrollPositions)
          );
        } catch (error) {
          warning(
            false,
            `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${error}).`
          );
        }
        window.history.scrollRestoration = "auto";
      }, [navigation.state, getKey, basename, location2, matches, storageKey])
    );
    if (typeof document !== "undefined") {
      React10.useLayoutEffect(() => {
        try {
          let sessionPositions = sessionStorage.getItem(
            storageKey || SCROLL_RESTORATION_STORAGE_KEY
          );
          if (sessionPositions) {
            savedScrollPositions = JSON.parse(sessionPositions);
          }
        } catch (e2) {
        }
      }, [storageKey]);
      React10.useLayoutEffect(() => {
        let disableScrollRestoration = router?.enableScrollRestoration(
          savedScrollPositions,
          () => window.scrollY,
          getKey ? (location22, matches2) => getScrollRestorationKey(location22, matches2, basename, getKey) : void 0
        );
        return () => disableScrollRestoration && disableScrollRestoration();
      }, [router, basename, getKey]);
      React10.useLayoutEffect(() => {
        if (restoreScrollPosition === false) {
          return;
        }
        if (typeof restoreScrollPosition === "number") {
          window.scrollTo(0, restoreScrollPosition);
          return;
        }
        try {
          if (location2.hash) {
            let el2 = document.getElementById(
              decodeURIComponent(location2.hash.slice(1))
            );
            if (el2) {
              el2.scrollIntoView();
              return;
            }
          }
        } catch {
          warning(
            false,
            `"${location2.hash.slice(
              1
            )}" is not a decodable element ID. The view will not scroll to it.`
          );
        }
        if (preventScrollReset === true) {
          return;
        }
        window.scrollTo(0, 0);
      }, [location2, restoreScrollPosition, preventScrollReset]);
    }
  }
  function usePageHide(callback, options) {
    let { capture } = options || {};
    React10.useEffect(() => {
      let opts = capture != null ? { capture } : void 0;
      window.addEventListener("pagehide", callback, opts);
      return () => {
        window.removeEventListener("pagehide", callback, opts);
      };
    }, [callback, capture]);
  }
  function useViewTransitionState(to, { relative } = {}) {
    let vtContext = React10.useContext(ViewTransitionContext);
    invariant(
      vtContext != null,
      "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
    );
    let { basename } = useDataRouterContext3(
      "useViewTransitionState"
      /* useViewTransitionState */
    );
    let path = useResolvedPath(to, { relative });
    if (!vtContext.isTransitioning) {
      return false;
    }
    let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
    let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
    return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
  }

  // ../../opt/files/kit/index.tsx
  var import_jsx_runtime18 = __toESM(require_jsx_runtime());
  function RouteBridge() {
    const location2 = useLocation();
    const navigate = useNavigate();
    (0, import_react20.useEffect)(() => {
      window.instinctFile.route(location2.pathname + location2.search + location2.hash);
    }, [location2]);
    (0, import_react20.useEffect)(() => {
      const restore = (event) => navigate(event.detail, { replace: true });
      window.addEventListener("instinct-route", restore);
      return () => window.removeEventListener("instinct-route", restore);
    }, [navigate]);
    return null;
  }
  function FileRouter({ children }) {
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(MemoryRouter, { initialEntries: [window.instinctFile.initialRoute], children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(RouteBridge, {}),
      children
    ] });
  }

  // src/App.tsx
  var import_react21 = __toESM(require_react());

  // src/photos/hero.webp
  var hero_default = "./assets-SOR7GMHF.webp";

  // src/photos/disputa.webp
  var disputa_default = "./assets-3EFNBDAT.webp";

  // src/photos/presentes.webp
  var presentes_default = "./assets-ENHDUYBN.webp";

  // src/photos/recados.webp
  var recados_default = "./assets-E2DJI46A.webp";

  // src/photos/pix-qr.png
  var pix_qr_default = "./assets-72BK5LQN.png";

  // src/fonts/caveat-b64.ts
  var CAVEAT_WOFF2_B64 = "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";

  // src/App.tsx
  var import_jsx_runtime19 = __toESM(require_jsx_runtime());
  var PLACAR = { menina: 1, menino: 2 };
  var RECADOS = [
    { nome: "Papai Maiko", texto: "Se for menina nao vai ser Kemily mas o apelido vai ser KemKem \u{1F602}" }
  ];
  var CHAVE_PIX = "40793de8-3738-4a06-9294-50c144ec1dcf";
  var APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxphd5T-I_GSe66eNjuLXVKJn39SDrf8xkP9jrnBIijZrZ23e8bmB6mWjJwP2-5qfuXyA/exec";
  var viaAba = /[?&]fluxo=aba/.test(location.search);
  function urlEnvio(tipo, data2) {
    const qs = new URLSearchParams({ tipo, ...data2, _: String(Date.now()) });
    return APPS_SCRIPT_URL + "?" + qs.toString();
  }
  var ALVO = /* @__PURE__ */ new Date("2026-10-11T11:00:00-03:00");
  var CAL_URL = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent("Ch\xE1 Revela\xE7\xE3o \u{1F497}\u{1F499}") + "&dates=20261011T140000Z/20261011T170000Z&details=" + encodeURIComponent("Domingo, 11 de outubro de 2026, a partir das 11h, em Itapema (endere\xE7o a confirmar em breve). Galinhada caprichada e a grande revela\xE7\xE3o: menina ou menino?") + "&location=" + encodeURIComponent("Itapema - SC (endere\xE7o a confirmar)");
  var PRESENTES_BEBE = [
    "Fraldas (P ou M)",
    "Len\xE7os umedecidos",
    "Bodies, culotes e cal\xE7as com pezinho (P/M, cores neutras)",
    "Mantas e paninhos de enrolar",
    "Fraldas de pano grandes / paninhos de boca",
    "Toalhas com capuz",
    "Banheira ou trocador",
    "Kit higiene com estojo (cortador sem ponta, tesourinha, lixa, pente e escova macios)",
    "Pomada de assadura / aspirador nasal",
    "Term\xF4metro digital",
    "Lumin\xE1ria LED port\xE1til \xE2mbar",
    "Ru\xEDdo branco",
    "Bab\xE1 eletr\xF4nica",
    "Mochila/bolsa imperme\xE1vel",
    "Chupeta ortod\xF4ntica Philips Avent ou MAM (0-6 meses)",
    "Brinquedos e chocalhos"
  ];
  function mlBusca(item) {
    const slug = item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    return "https://lista.mercadolivre.com.br/" + slug;
  }
  function PresentesLista({ items }) {
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("ul", { className: "presentes-lista", children: items.map((it2) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("a", { href: mlBusca(it2), target: "_blank", rel: "noopener noreferrer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: it2 }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "ml-ir", children: "Mercado Livre \u2192" })
    ] }) }, it2)) });
  }
  var PRESENTES_MAE = [
    "Suti\xE3 de amamenta\xE7\xE3o e absorventes de seio",
    "Almofada de amamenta\xE7\xE3o",
    "Concha e pomada para o mamilo",
    "Camisola/pijama com abertura pra amamentar",
    "Calcinhas p\xF3s-parto de c\xF3s alto",
    "Produtos de skincare pra mam\xE3e"
  ];
  function useCountdown() {
    const [now, setNow] = (0, import_react21.useState)(() => Date.now());
    (0, import_react21.useEffect)(() => {
      const t = setInterval(() => setNow(Date.now()), 1e3);
      return () => clearInterval(t);
    }, []);
    const diff = Math.max(0, ALVO.getTime() - now);
    return {
      dias: Math.floor(diff / 864e5),
      horas: Math.floor(diff % 864e5 / 36e5),
      minutos: Math.floor(diff % 36e5 / 6e4),
      segundos: Math.floor(diff % 6e4 / 1e3)
    };
  }
  var jsonpSeq = 0;
  function jsonp(url, timeoutMs = 1e4) {
    return new Promise((resolve, reject) => {
      const cb = "__chaJsonp" + ++jsonpSeq;
      const s = document.createElement("script");
      let done = false;
      const cleanup = () => {
        if (done) return;
        done = true;
        clearTimeout(t);
        try {
          delete window[cb];
        } catch {
          window[cb] = void 0;
        }
        s.remove();
      };
      const t = setTimeout(() => {
        cleanup();
        reject(new Error("timeout"));
      }, timeoutMs);
      window[cb] = (d) => {
        cleanup();
        resolve(d);
      };
      s.onerror = () => {
        cleanup();
        reject(new Error("jsonp erro"));
      };
      s.src = url + (url.indexOf("?") >= 0 ? "&" : "?") + "callback=" + cb;
      document.head.appendChild(s);
    });
  }
  async function enviar(tipo, data2) {
    const d = await jsonp(urlEnvio(tipo, data2) + "&_=" + Date.now());
    if (d && d.ok === true) return;
    throw new Error("falhou");
  }
  function Campo({ label, children }) {
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("label", { className: "campo", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: label }),
      children
    ] });
  }
  function App() {
    const { dias, horas, minutos, segundos } = useCountdown();
    (0, import_react21.useEffect)(() => {
      if (!document.getElementById("caveat-font")) {
        const st3 = document.createElement("style");
        st3.id = "caveat-font";
        st3.textContent = "@font-face { font-family: 'Caveat'; font-style: normal; font-weight: 600 700; font-display: swap; src: url(data:font/woff2;base64," + CAVEAT_WOFF2_B64 + ") format('woff2'); }";
        document.head.appendChild(st3);
      }
    }, []);
    const [placar, setPlacar] = (0, import_react21.useState)(PLACAR);
    const carregarPlacar = () => {
      jsonp(APPS_SCRIPT_URL + "?_=" + Date.now()).then((d) => {
        if (typeof d.menina === "number" && typeof d.menino === "number") setPlacar(d);
        if (typeof d.listaVazia === "boolean") setListaVazia(d.listaVazia);
      }).catch(() => {
      });
    };
    (0, import_react21.useEffect)(carregarPlacar, []);
    (0, import_react21.useEffect)(() => {
      const t = setInterval(carregarPlacar, 3e4);
      return () => clearInterval(t);
    }, []);
    (0, import_react21.useEffect)(() => {
      const h = () => {
        if (!document.hidden) {
          carregarPlacar();
          carregarRecados();
        }
      };
      document.addEventListener("visibilitychange", h);
      return () => document.removeEventListener("visibilitychange", h);
    }, []);
    const [recados, setRecados] = (0, import_react21.useState)(RECADOS);
    const carregarRecados = () => {
      jsonp(APPS_SCRIPT_URL + "?lista=recados&_=" + Date.now()).then((d) => {
        if (d && Array.isArray(d.recados)) setRecados(d.recados);
      }).catch(() => {
      });
    };
    (0, import_react21.useEffect)(carregarRecados, []);
    (0, import_react21.useEffect)(() => {
      const t = setInterval(carregarRecados, 3e4);
      return () => clearInterval(t);
    }, []);
    const [voto, setVoto] = (0, import_react21.useState)(null);
    const [nomePalpite, setNomePalpite] = (0, import_react21.useState)("");
    const [palpiteState, setPalpiteState] = (0, import_react21.useState)("idle");
    const enviarPalpite = async () => {
      if (!voto || !nomePalpite.trim()) return;
      setPalpiteState("sending");
      try {
        await enviar("palpite", { nome: nomePalpite.trim(), palpite: voto });
        setPalpiteState("sent");
        setTimeout(carregarPlacar, 1500);
        setTimeout(carregarPlacar, 5e3);
      } catch {
        setPalpiteState("error");
      }
    };
    const [rsvpNome, setRsvpNome] = (0, import_react21.useState)("");
    const [rsvpQtd, setRsvpQtd] = (0, import_react21.useState)("1");
    const [rsvpState, setRsvpState] = (0, import_react21.useState)("idle");
    const [listaVazia, setListaVazia] = (0, import_react21.useState)(false);
    const [rsvpBusca, setRsvpBusca] = (0, import_react21.useState)("");
    const [buscando, setBuscando] = (0, import_react21.useState)(false);
    const [buscaErro, setBuscaErro] = (0, import_react21.useState)(false);
    const [pessoas, setPessoas] = (0, import_react21.useState)(null);
    const [naoAchou, setNaoAchou] = (0, import_react21.useState)(false);
    const [escolhas, setEscolhas] = (0, import_react21.useState)({});
    const [rsvpTipo, setRsvpTipo] = (0, import_react21.useState)("vou");
    const buscarNaLista = async () => {
      const q = rsvpBusca.trim();
      if (q.length < 2) return;
      setBuscando(true);
      setBuscaErro(false);
      setNaoAchou(false);
      try {
        const d = await jsonp(APPS_SCRIPT_URL + "?busca=" + encodeURIComponent(q) + "&_=" + Date.now());
        if (d.listaVazia) {
          setListaVazia(true);
          return;
        }
        const ps2 = d.pessoas || [];
        if (!ps2.length) {
          setPessoas(null);
          setNaoAchou(true);
          return;
        }
        setPessoas(ps2);
        const m = {};
        const livres = ps2.filter((p) => !p.confirmada);
        if (livres.length === 1) m[livres[0].nome] = "vou";
        setEscolhas(m);
      } catch {
        setBuscaErro(true);
      } finally {
        setBuscando(false);
      }
    };
    const confirmarLista = async () => {
      const vou = (pessoas || []).filter((p) => escolhas[p.nome] === "vou").map((p) => p.nome);
      const nao = (pessoas || []).filter((p) => escolhas[p.nome] === "nao").map((p) => p.nome);
      if (!vou.length && !nao.length) return;
      setRsvpState("sending");
      try {
        await enviar("rsvp", { nomes: vou.join("|"), nomesNao: nao.join("|"), confirmadoPor: rsvpBusca.trim() });
        setRsvpTipo(vou.length ? "vou" : "nao");
        setRsvpState("sent");
      } catch {
        setRsvpState("error");
      }
    };
    const enviarRecusa = async () => {
      if (!rsvpNome.trim()) return;
      setRsvpState("sending");
      try {
        await enviar("rsvp", { nome: rsvpNome.trim(), pessoas: "0", status: "nao_vai" });
        setRsvpTipo("nao");
        setRsvpState("sent");
      } catch {
        setRsvpState("error");
      }
    };
    const enviarRsvp = async () => {
      if (!rsvpNome.trim()) return;
      setRsvpState("sending");
      try {
        await enviar("rsvp", { nome: rsvpNome.trim(), pessoas: rsvpQtd });
        setRsvpState("sent");
      } catch {
        setRsvpState("error");
      }
    };
    const [presNome, setPresNome] = (0, import_react21.useState)("");
    const [presItem, setPresItem] = (0, import_react21.useState)("");
    const [presState, setPresState] = (0, import_react21.useState)("idle");
    const enviarPresente = async () => {
      if (!presItem.trim()) return;
      setPresState("sending");
      try {
        await enviar("presente", { nome: presNome.trim(), presente: presItem.trim() });
        setPresState("sent");
      } catch {
        setPresState("error");
      }
    };
    const [recNome, setRecNome] = (0, import_react21.useState)("");
    const [recTexto, setRecTexto] = (0, import_react21.useState)("");
    const [recState, setRecState] = (0, import_react21.useState)("idle");
    const enviarRecado = async () => {
      if (!recNome.trim() || !recTexto.trim()) return;
      setRecState("sending");
      try {
        await enviar("recado", { nome: recNome.trim(), recado: recTexto.trim() });
        setRecState("sent");
        setTimeout(carregarRecados, 1500);
        setTimeout(carregarRecados, 5e3);
      } catch {
        setRecState("error");
      }
    };
    const [copiado, setCopiado] = (0, import_react21.useState)(false);
    const [pixManual, setPixManual] = (0, import_react21.useState)(false);
    const copiarPix = async () => {
      let ok = false;
      try {
        await navigator.clipboard.writeText(CHAVE_PIX);
        ok = true;
      } catch {
      }
      if (!ok) {
        try {
          const ta2 = document.createElement("textarea");
          ta2.value = CHAVE_PIX;
          ta2.setAttribute("readonly", "");
          ta2.style.position = "fixed";
          ta2.style.top = "0";
          ta2.style.left = "0";
          ta2.style.opacity = "0";
          document.body.appendChild(ta2);
          ta2.focus();
          ta2.select();
          ta2.setSelectionRange(0, CHAVE_PIX.length);
          ok = document.execCommand("copy");
          document.body.removeChild(ta2);
        } catch {
        }
      }
      if (ok) {
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2500);
      } else {
        setPixManual(true);
      }
    };
    const totalVotos = placar.menina + placar.menino;
    const pctMenina = totalVotos === 0 ? 50 : Math.round(placar.menina / totalVotos * 100);
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(ru, { className: "cha-page", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "balloons", "aria-hidden": "true", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "balloon b1" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "balloon b2" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "balloon b3" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "balloon b4" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "balloon b5" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "balloon b6" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "floaters", "aria-hidden": "true", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "floater f1", children: "\u{1F4A7}" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "floater f2", children: "\u{1F37C}" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "floater f3", children: "\u2B50" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "floater f4", children: "\u2601\uFE0F" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "floater f5", children: "\u2728" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "floater f6", children: "\u{1F9F8}" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Ct, { label: "Nosso beb\xEA", items: [{ src: hero_default, alt: "Casal ilustrado olhando para o c\xE9u com bal\xF5es rosa e azuis" }] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        uu,
        {
          title: "Ch\xE1 Revela\xE7\xE3o \u{1F497}\u{1F499}",
          fact: "Domingo, 11 de outubro de 2026 \xB7 a partir das 11h",
          factKnown: true,
          intro: "Menina ou menino? Voc\xEA \xE9 nosso convidado especial pra descobrir juntinho com a gente."
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "bloco b-abertura", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "deco abertura-deco", children: "Nosso milagre est\xE1 chegando! \u{1F49B}" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(cu, { children: "Ficar\xEDamos muito felizes com a sua presen\xE7a nesse dia t\xE3o esperado. Prepare o cora\xE7\xE3o (e o palpite): vem a\xED uma tarde de galinhada, risadas e a grande revela\xE7\xE3o." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "bloco b-contagem", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(su, { label: "Contagem regressiva", heading: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "count", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "unit", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: dias }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "dias" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "unit", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: horas }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "horas" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "unit", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: minutos }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "min" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "unit seg", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: segundos }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "seg" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(cu, { children: "A mam\xE3e j\xE1 conta os minutos... e o papai conta as fraldas. \u{1F605}" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "bloco b-disputa", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(su, { label: "A disputa: de que time voc\xEA \xE9?", heading: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(cu, { children: "Palpite n\xE3o \xE9 torcida de verdade, mas aqui todo mundo leva MUITO a s\xE9rio. O papai j\xE1 treinou troca de fralda num boneco \u2014 o boneco sobreviveu. \u{1F605} Escolha seu time e registre seu voto!" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("figure", { className: "file-figure", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("img", { src: disputa_default, alt: "Dois bal\xF5es fofos, um rosa de menina e um azul de menino, frente a frente com uma interroga\xE7\xE3o dourada", loading: "lazy", decoding: "async" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "scorecard", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "score-row", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "score-label girl", children: "\u{1F497} Menina" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "score-numbers", children: [
              placar.menina,
              " \xD7 ",
              placar.menino
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "score-label boy", children: "Menino \u{1F499}" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "score-bar", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "score-fill girl", style: { width: `${pctMenina}%` } }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "score-fill boy", style: { width: `${100 - pctMenina}%` } })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "score-note", children: totalVotos === 0 ? "Nenhum voto ainda. Seja o primeiro a abrir a disputa!" : `${totalVotos} voto${totalVotos === 1 ? "" : "s"} computado${totalVotos === 1 ? "" : "s"}. Placar atualizado conforme os votos chegam.` })
        ] }),
        palpiteState === "sent" ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(gu, { title: "Voto computado! \u{1F389}", tone: "note", children: [
          "Obrigado por entrar na disputa, ",
          nomePalpite.split(" ")[0],
          "! O placar j\xE1 j\xE1 atualiza."
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "vote-area", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "vote-buttons", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("button", { type: "button", className: `vote-btn girl ${voto === "menina" ? "active" : ""}`, onClick: () => setVoto("menina"), children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "vote-emoji", children: "\u{1F497}" }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "\xC9 MENINA!" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("button", { type: "button", className: `vote-btn boy ${voto === "menino" ? "active" : ""}`, onClick: () => setVoto("menino"), children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "vote-emoji", children: "\u{1F499}" }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "\xC9 MENINO!" })
            ] })
          ] }),
          voto && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "vote-form", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Campo, { label: "Seu nome", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("input", { value: nomePalpite, onChange: (e2) => setNomePalpite(e2.target.value), placeholder: "Quem t\xE1 apostando?", maxLength: 60 }) }),
            viaAba ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
              "a",
              {
                className: "enviar-btn",
                href: urlEnvio("palpite", { nome: nomePalpite.trim(), palpite: voto ?? "menina" }) + "&modo=aba",
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: (e2) => {
                  if (!voto || !nomePalpite.trim()) {
                    e2.preventDefault();
                    return;
                  }
                  setPalpiteState("sent");
                  setTimeout(carregarPlacar, 1500);
                  setTimeout(carregarPlacar, 5e3);
                },
                children: `Enviar meu voto ${voto === "menina" ? "\u{1F497}" : "\u{1F499}"}`
              }
            ) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "enviar-btn", onClick: enviarPalpite, children: palpiteState === "sending" ? "Enviando..." : `Enviar meu voto ${voto === "menina" ? "\u{1F497}" : "\u{1F499}"}` }),
            palpiteState === "error" && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "erro", children: "Ops, n\xE3o foi. Tenta de novo?" }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", { className: "link-manual", target: "_blank", rel: "noopener noreferrer", href: urlEnvio("palpite", { nome: nomePalpite.trim(), palpite: voto ?? "menina" }) + "&modo=aba", children: "Se n\xE3o foi, toca aqui pra enviar \u{1F449}" })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "bloco b-convite", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(su, { label: "O convite", heading: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Qe2, { items: [
          { label: "Data", value: "Domingo, 11 de outubro de 2026" },
          { label: "Hor\xE1rio", value: "A partir das 11h - chega cedo pra gente prosear juntos \u{1F604}" },
          { label: "Local", value: "Itapema - endere\xE7o a confirmar em breve" },
          { label: "No prato", value: "Galinhada caprichada pra todo mundo" }
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", { className: "agenda-btn", href: CAL_URL, target: "_blank", rel: "noreferrer", children: "Adicionar na agenda \u{1F4C5}" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(mu, { children: "Leve na bagagem muito amor pra esse beb\xEA. A sua b\xEAn\xE7\xE3o sobre ele \xE9 o nosso maior presente. \u{1F381}" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(cu, { children: "Promessa do papai: ningu\xE9m sai com fome. Promessa da mam\xE3e: tentar n\xE3o chorar no discurso (de novo). \u{1F605}" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "bloco b-presenca", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(su, { label: "Confirme sua presen\xE7a", heading: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(cu, { children: "Ajuda a gente a calcular a galinhada (e quantas cadeiras o papai vai ter que carregar \u{1F605}). Confirma rapidinho aqui embaixo." }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "prazo", children: "Confirme at\xE9 quarta, 07/10 \u{1F49B}" }),
        rsvpState === "sent" && rsvpTipo === "nao" ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "confirm-card", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "confirm-title", children: "Tudo bem \u{1F49B}" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "confirm-fun", children: [
            "Pena que voc\xEA n\xE3o vai poder vir, ",
            (rsvpNome.trim() || rsvpBusca.trim()).split(" ")[0],
            " \u2014 vamos sentir sua falta! Se mudar de ideia at\xE9 quarta, 07/10, \xE9 s\xF3 voltar aqui e confirmar."
          ] })
        ] }) : rsvpState === "sent" ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "confirm-card", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "confirm-title", children: "Presen\xE7a confirmada! \u{1F388}" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "confirm-fun", children: [
            "Que alegria, ",
            (rsvpNome.trim() || rsvpBusca.trim()).split(" ")[0],
            "! O papai j\xE1 separou a sua cadeira e a mam\xE3e avisou: chega cedo, porque galinhada boa n\xE3o espera. \u{1F604}"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "confirm-fatos", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "\u{1F4C5} Domingo, 11 de outubro de 2026" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { children: "\u{1F55A} A partir das 11h - pra gente prosear juntos" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { children: "\u{1F4CD} Itapema - endere\xE7o a confirmar em breve" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", { className: "agenda-btn", href: CAL_URL, target: "_blank", rel: "noreferrer", children: "Adicionar na agenda \u{1F4C5}" })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "form-card", children: listaVazia ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Campo, { label: "Seu nome", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("input", { value: rsvpNome, onChange: (e2) => setRsvpNome(e2.target.value), placeholder: "Nome e sobrenome", maxLength: 60 }) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Campo, { label: "Voc\xEA vai acompanhado?", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("select", { value: rsvpQtd, onChange: (e2) => setRsvpQtd(e2.target.value), children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("option", { value: "1", children: "Vou sozinho(a)" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("option", { value: "2", children: "Eu +1" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("option", { value: "3", children: "Eu +2" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("option", { value: "4", children: "Eu +3" })
          ] }) }),
          viaAba ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            "a",
            {
              className: "enviar-btn",
              href: urlEnvio("rsvp", { nome: rsvpNome.trim(), pessoas: rsvpQtd }) + "&modo=aba",
              target: "_blank",
              rel: "noopener noreferrer",
              onClick: (e2) => {
                if (!rsvpNome.trim()) {
                  e2.preventDefault();
                  return;
                }
                setRsvpState("sent");
              },
              children: "Confirmar presen\xE7a \u{1F388}"
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "enviar-btn", onClick: enviarRsvp, children: rsvpState === "sending" ? "Enviando..." : "Confirmar presen\xE7a \u{1F388}" }),
          !viaAba && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "btn-naovou", onClick: enviarRecusa, disabled: rsvpState === "sending", children: "N\xE3o poderei ir \u{1F622}" }),
          rsvpState === "error" && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "erro", children: "Ops, n\xE3o foi. Tenta de novo?" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", { className: "link-manual", target: "_blank", rel: "noopener noreferrer", href: APPS_SCRIPT_URL + "?fluxo=busca&nome=" + encodeURIComponent(rsvpNome.trim() || rsvpBusca.trim()), children: "Se n\xE3o foi, toca aqui pra confirmar \u{1F449}" })
          ] })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(cu, { children: "Digita teu nome pra gente te achar na lista de convidados \u{1F50E}" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Campo, { label: "Seu nome", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            "input",
            {
              value: rsvpBusca,
              onChange: (e2) => {
                setRsvpBusca(e2.target.value);
                setPessoas(null);
                setNaoAchou(false);
              },
              placeholder: "Do jeito que o casal te conhece",
              maxLength: 60
            }
          ) }),
          !pessoas && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "enviar-btn", onClick: buscarNaLista, disabled: buscando || rsvpBusca.trim().length < 2, children: buscando ? "Procurando..." : "Buscar na lista \u{1F50E}" }),
          buscaErro && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "erro", children: "Ops, n\xE3o foi. Tenta de novo?" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", { className: "link-manual", target: "_blank", rel: "noopener noreferrer", href: APPS_SCRIPT_URL + "?fluxo=busca&nome=" + encodeURIComponent(rsvpBusca.trim()), children: "Se n\xE3o foi, toca aqui pra confirmar \u{1F449}" })
          ] }),
          naoAchou && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "aviso", children: "N\xE3o achei teu nome na lista \u2014 confere a grafia ou fala com o casal \u{1F49B}" }),
          pessoas && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "form-titulo", children: "Marca quem vai (e quem n\xE3o vai):" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "pessoas", children: pessoas.map((p) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "pessoa" + (p.confirmada ? " feita" : ""), children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "pessoa-nome", children: [
                p.nome,
                p.status === "confirmado" ? " \u2014 presen\xE7a j\xE1 confirmada \u2705" : p.status === "nao_vai" ? " \u2014 marcou que n\xE3o vai" : ""
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "chips", children: [
                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "chip" + (escolhas[p.nome] === "vou" ? " ativo" : ""), onClick: () => setEscolhas({ ...escolhas, [p.nome]: "vou" }), children: "Vou \u{1F389}" }),
                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "chip chip-nao" + (escolhas[p.nome] === "nao" ? " ativo" : ""), onClick: () => setEscolhas({ ...escolhas, [p.nome]: "nao" }), children: "N\xE3o vou \u{1F622}" })
              ] })
            ] }, p.nome)) }),
            viaAba ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
              "a",
              {
                className: "enviar-btn",
                href: urlEnvio("rsvp", {
                  nomes: (pessoas || []).filter((p) => escolhas[p.nome] === "vou").map((p) => p.nome).join("|"),
                  nomesNao: (pessoas || []).filter((p) => escolhas[p.nome] === "nao").map((p) => p.nome).join("|"),
                  confirmadoPor: rsvpBusca.trim()
                }) + "&modo=aba",
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: (e2) => {
                  if (!(pessoas || []).some((p) => escolhas[p.nome])) {
                    e2.preventDefault();
                    return;
                  }
                  setRsvpState("sent");
                },
                children: "Confirmar presen\xE7a \u{1F388}"
              }
            ) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
              "button",
              {
                type: "button",
                className: "enviar-btn",
                onClick: confirmarLista,
                disabled: !(pessoas || []).some((p) => escolhas[p.nome]),
                children: rsvpState === "sending" ? "Enviando..." : "Confirmar presen\xE7a \u{1F388}"
              }
            )
          ] }),
          rsvpState === "error" && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "erro", children: "Ops, n\xE3o foi. Tenta de novo?" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", { className: "link-manual", target: "_blank", rel: "noopener noreferrer", href: APPS_SCRIPT_URL + "?fluxo=busca&nome=" + encodeURIComponent(rsvpBusca.trim()), children: "Se n\xE3o foi, toca aqui pra confirmar \u{1F449}" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "bloco b-mural", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(su, { label: "Mural de recados", heading: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(cu, { children: "Deixe aqui um recado, um conselho ou um carinho pro casal e pro beb\xEA. Dica de como sobreviver \xE0s madrugadas em claro vale ouro \u2014 o papai t\xE1 aceitando todas. \u{1F602} Esse mural vai ficar guardado pra sempre." }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("figure", { className: "file-figure", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("img", { src: recados_default, alt: "Passarinho amarelo fofo entregando uma carta rosa numa caixinha de correio azul", loading: "lazy", decoding: "async" }) }),
        recState === "sent" ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(gu, { title: "Recado enviado! \u{1F48C}", tone: "note", children: [
          "Obrigado pelo carinho, ",
          recNome.split(" ")[0],
          "! Seu recado aparece aqui no mural em breve."
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "form-card", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Campo, { label: "Seu nome", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("input", { value: recNome, onChange: (e2) => setRecNome(e2.target.value), placeholder: "Quem escreve?", maxLength: 60 }) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Campo, { label: "Seu recado", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("textarea", { rows: 3, value: recTexto, onChange: (e2) => setRecTexto(e2.target.value), placeholder: "Escreve com carinho...", maxLength: 400 }) }),
          viaAba ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            "a",
            {
              className: "enviar-btn",
              href: urlEnvio("recado", { nome: recNome.trim(), recado: recTexto.trim() }) + "&modo=aba",
              target: "_blank",
              rel: "noopener noreferrer",
              onClick: (e2) => {
                if (!recNome.trim() || !recTexto.trim()) {
                  e2.preventDefault();
                  return;
                }
                setRecState("sent");
              },
              children: "Deixar meu recado \u{1F48C}"
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "enviar-btn", onClick: enviarRecado, children: recState === "sending" ? "Enviando..." : "Deixar meu recado \u{1F48C}" }),
          recState === "error" && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "erro", children: "Ops, n\xE3o foi. Tenta de novo?" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", { className: "link-manual", target: "_blank", rel: "noopener noreferrer", href: urlEnvio("recado", { nome: recNome.trim(), recado: recTexto.trim() }) + "&modo=aba", children: "Se n\xE3o foi, toca aqui pra enviar \u{1F449}" })
          ] })
        ] }),
        recados.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(du, { children: recados.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(fu, { name: r.texto, detail: r.nome }, i)) }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(cu, { children: "Ainda n\xE3o tem recados por aqui. Seja o primeiro a escrever! \u2728" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "bloco b-presentes", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(su, { label: "Presentes", heading: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(cu, { children: "Com carinho, preparamos uma lista de itens \xFAteis pro beb\xEA e pra mam\xE3e. Sinta-se \xE0 vontade pra escolher algo, ou pra abra\xE7ar o casal com seu pr\xF3prio presente." }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("figure", { className: "file-figure", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("img", { src: presentes_default, alt: "Ursinho de pel\xFAcia fofo segurando uma caixinha de presente rosa com la\xE7o azul", loading: "lazy", decoding: "async" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(su, { label: "Pro beb\xEA", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(PresentesLista, { items: PRESENTES_BEBE }) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(su, { label: "Pra mam\xE3e", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(PresentesLista, { items: PRESENTES_MAE }) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(cu, { children: "Se escolher fraldas, saiba que nunca s\xE3o demais: o beb\xEA troca de roupa mais vezes do que o papai troca de opini\xE3o sobre o enxoval. \u{1F602}" }),
        presState === "sent" ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(gu, { title: "Anotado! \u{1F381}", tone: "note", children: [
          "Obrigado por avisar",
          presNome.trim() ? `, ${presNome.split(" ")[0]}` : "",
          "!"
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "form-card", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "form-titulo", children: "Vai levar um presente? (opcional)" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(cu, { children: "Se quiser, avisa aqui o que vai levar, s\xF3 pra gente n\xE3o repetir. Sem compromisso nenhum!" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Campo, { label: "Seu nome", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("input", { value: presNome, onChange: (e2) => setPresNome(e2.target.value), placeholder: "Opcional", maxLength: 60 }) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Campo, { label: "O que voc\xEA vai levar?", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("input", { value: presItem, onChange: (e2) => setPresItem(e2.target.value), placeholder: "Ex.: fraldas M", maxLength: 120 }) }),
          viaAba ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            "a",
            {
              className: "enviar-btn",
              href: urlEnvio("presente", { nome: presNome.trim(), presente: presItem.trim() }) + "&modo=aba",
              target: "_blank",
              rel: "noopener noreferrer",
              onClick: (e2) => {
                if (!presItem.trim()) {
                  e2.preventDefault();
                  return;
                }
                setPresState("sent");
              },
              children: "Avisar o que vou levar \u{1F381}"
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "enviar-btn", onClick: enviarPresente, children: presState === "sending" ? "Enviando..." : "Avisar o que vou levar \u{1F381}" }),
          presState === "error" && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "erro", children: "Ops, n\xE3o foi. Tenta de novo?" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", { className: "link-manual", target: "_blank", rel: "noopener noreferrer", href: urlEnvio("presente", { nome: presNome.trim(), presente: presItem.trim() }) + "&modo=aba", children: "Se n\xE3o foi, toca aqui pra enviar \u{1F449}" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "pix-card", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "pix-fun", children: "O papai j\xE1 t\xE1 louco fazendo estoque de fraldas \u2014 jura que \xE9 promo\xE7\xE3o, mas a gente sabe que \xE9 p\xE2nico. \u{1F602} Se preferir, manda um Pix que vira fralda na hora! E se quiser nos aben\xE7oar ofertando qualquer valor, tamb\xE9m vai muito bem. \u{1F49B}" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "qr-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("img", { className: "qr-img", src: pix_qr_default, alt: "QR Code Pix", loading: "lazy", decoding: "async" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(du, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(fu, { name: "Aponte a c\xE2mera pro QR ou copie a chave abaixo", detail: "Chave aleat\xF3ria: 40793de8-3738-4a06-9294-50c144ec1dcf \xB7 Maiko Costa" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "enviar-btn pix-btn", onClick: copiarPix, children: copiado ? "Copiado! \u2705" : "Copiar chave Pix" }),
          pixManual && !copiado && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "pix-manual", children: [
            "N\xE3o consegui copiar sozinho \u{1F605} segura o dedo na chave abaixo e toca em Copiar:",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "pix-chave", children: CHAVE_PIX })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "bloco b-fotos", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(su, { label: "Fotos e v\xEDdeo do casal", heading: true, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(cu, { children: "Estamos preparando com carinho um cantinho com nossas fotos e um v\xEDdeo da nossa hist\xF3ria. Em breve por aqui!" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Su, { children: "A gente se v\xEA l\xE1! \u{1FA77}\u{1F499} Com amor, Maiko & Mardely (e o beb\xEA na barriga)" })
    ] });
  }

  // src/main.tsx
  var import_jsx_runtime20 = __toESM(require_jsx_runtime());
  (0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime20.jsx)(FileRouter, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(App, {}) }));
})();
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

lucide-react/dist/esm/shared/src/utils/mergeClasses.js:
lucide-react/dist/esm/shared/src/utils/toKebabCase.js:
lucide-react/dist/esm/shared/src/utils/toCamelCase.js:
lucide-react/dist/esm/shared/src/utils/toPascalCase.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/arrow-up-right.js:
lucide-react/dist/esm/icons/check.js:
lucide-react/dist/esm/icons/chevron-left.js:
lucide-react/dist/esm/icons/chevron-right.js:
lucide-react/dist/esm/icons/loader-circle.js:
lucide-react/dist/esm/icons/x.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-router/dist/development/chunk-BV7QT456.mjs:
react-router/dist/development/index.mjs:
  (**
   * react-router v7.18.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
