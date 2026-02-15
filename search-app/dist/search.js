var Xv = { exports: {} }, p0 = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var N2;
function ET() {
  if (N2) return p0;
  N2 = 1;
  var O = Symbol.for("react.transitional.element"), L = Symbol.for("react.fragment");
  function ie(z, ne, ve) {
    var He = null;
    if (ve !== void 0 && (He = "" + ve), ne.key !== void 0 && (He = "" + ne.key), "key" in ne) {
      ve = {};
      for (var le in ne)
        le !== "key" && (ve[le] = ne[le]);
    } else ve = ne;
    return ne = ve.ref, {
      $$typeof: O,
      type: z,
      key: He,
      ref: ne !== void 0 ? ne : null,
      props: ve
    };
  }
  return p0.Fragment = L, p0.jsx = ie, p0.jsxs = ie, p0;
}
var g0 = {}, Qv = { exports: {} }, Ze = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var j2;
function TT() {
  if (j2) return Ze;
  j2 = 1;
  var O = Symbol.for("react.transitional.element"), L = Symbol.for("react.portal"), ie = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), ve = Symbol.for("react.consumer"), He = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), k = Symbol.for("react.memo"), Ne = Symbol.for("react.lazy"), q = Symbol.for("react.activity"), N = Symbol.iterator;
  function fe(S) {
    return S === null || typeof S != "object" ? null : (S = N && S[N] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var Je = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, _t = Object.assign, rt = {};
  function nt(S, x, P) {
    this.props = S, this.context = x, this.refs = rt, this.updater = P || Je;
  }
  nt.prototype.isReactComponent = {}, nt.prototype.setState = function(S, x) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, x, "setState");
  }, nt.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function Al() {
  }
  Al.prototype = nt.prototype;
  function xt(S, x, P) {
    this.props = S, this.context = x, this.refs = rt, this.updater = P || Je;
  }
  var Kt = xt.prototype = new Al();
  Kt.constructor = xt, _t(Kt, nt.prototype), Kt.isPureReactComponent = !0;
  var tl = Array.isArray;
  function il() {
  }
  var Me = { H: null, A: null, T: null, S: null }, Ke = Object.prototype.hasOwnProperty;
  function Rt(S, x, P) {
    var I = P.ref;
    return {
      $$typeof: O,
      type: S,
      key: x,
      ref: I !== void 0 ? I : null,
      props: P
    };
  }
  function he(S, x) {
    return Rt(S.type, x, S.props);
  }
  function Bt(S) {
    return typeof S == "object" && S !== null && S.$$typeof === O;
  }
  function Se(S) {
    var x = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(P) {
      return x[P];
    });
  }
  var Ge = /\/+/g;
  function Qt(S, x) {
    return typeof S == "object" && S !== null && S.key != null ? Se("" + S.key) : x.toString(36);
  }
  function qt(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(il, il) : (S.status = "pending", S.then(
          function(x) {
            S.status === "pending" && (S.status = "fulfilled", S.value = x);
          },
          function(x) {
            S.status === "pending" && (S.status = "rejected", S.reason = x);
          }
        )), S.status) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function M(S, x, P, I, Te) {
    var Le = typeof S;
    (Le === "undefined" || Le === "boolean") && (S = null);
    var ze = !1;
    if (S === null) ze = !0;
    else
      switch (Le) {
        case "bigint":
        case "string":
        case "number":
          ze = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case O:
            case L:
              ze = !0;
              break;
            case Ne:
              return ze = S._init, M(
                ze(S._payload),
                x,
                P,
                I,
                Te
              );
          }
      }
    if (ze)
      return Te = Te(S), ze = I === "" ? "." + Qt(S, 0) : I, tl(Te) ? (P = "", ze != null && (P = ze.replace(Ge, "$&/") + "/"), M(Te, x, P, "", function(wa) {
        return wa;
      })) : Te != null && (Bt(Te) && (Te = he(
        Te,
        P + (Te.key == null || S && S.key === Te.key ? "" : ("" + Te.key).replace(
          Ge,
          "$&/"
        ) + "/") + ze
      )), x.push(Te)), 1;
    ze = 0;
    var Vt = I === "" ? "." : I + ":";
    if (tl(S))
      for (var yt = 0; yt < S.length; yt++)
        I = S[yt], Le = Vt + Qt(I, yt), ze += M(
          I,
          x,
          P,
          Le,
          Te
        );
    else if (yt = fe(S), typeof yt == "function")
      for (S = yt.call(S), yt = 0; !(I = S.next()).done; )
        I = I.value, Le = Vt + Qt(I, yt++), ze += M(
          I,
          x,
          P,
          Le,
          Te
        );
    else if (Le === "object") {
      if (typeof S.then == "function")
        return M(
          qt(S),
          x,
          P,
          I,
          Te
        );
      throw x = String(S), Error(
        "Objects are not valid as a React child (found: " + (x === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : x) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ze;
  }
  function Z(S, x, P) {
    if (S == null) return S;
    var I = [], Te = 0;
    return M(S, I, "", "", function(Le) {
      return x.call(P, Le, Te++);
    }), I;
  }
  function ae(S) {
    if (S._status === -1) {
      var x = S._result;
      x = x(), x.then(
        function(P) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = P);
        },
        function(P) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = P);
        }
      ), S._status === -1 && (S._status = 0, S._result = x);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var be = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var x = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(x)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, Re = {
    map: Z,
    forEach: function(S, x, P) {
      Z(
        S,
        function() {
          x.apply(this, arguments);
        },
        P
      );
    },
    count: function(S) {
      var x = 0;
      return Z(S, function() {
        x++;
      }), x;
    },
    toArray: function(S) {
      return Z(S, function(x) {
        return x;
      }) || [];
    },
    only: function(S) {
      if (!Bt(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return Ze.Activity = q, Ze.Children = Re, Ze.Component = nt, Ze.Fragment = ie, Ze.Profiler = ne, Ze.PureComponent = xt, Ze.StrictMode = z, Ze.Suspense = F, Ze.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Me, Ze.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return Me.H.useMemoCache(S);
    }
  }, Ze.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, Ze.cacheSignal = function() {
    return null;
  }, Ze.cloneElement = function(S, x, P) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var I = _t({}, S.props), Te = S.key;
    if (x != null)
      for (Le in x.key !== void 0 && (Te = "" + x.key), x)
        !Ke.call(x, Le) || Le === "key" || Le === "__self" || Le === "__source" || Le === "ref" && x.ref === void 0 || (I[Le] = x[Le]);
    var Le = arguments.length - 2;
    if (Le === 1) I.children = P;
    else if (1 < Le) {
      for (var ze = Array(Le), Vt = 0; Vt < Le; Vt++)
        ze[Vt] = arguments[Vt + 2];
      I.children = ze;
    }
    return Rt(S.type, Te, I);
  }, Ze.createContext = function(S) {
    return S = {
      $$typeof: He,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: ve,
      _context: S
    }, S;
  }, Ze.createElement = function(S, x, P) {
    var I, Te = {}, Le = null;
    if (x != null)
      for (I in x.key !== void 0 && (Le = "" + x.key), x)
        Ke.call(x, I) && I !== "key" && I !== "__self" && I !== "__source" && (Te[I] = x[I]);
    var ze = arguments.length - 2;
    if (ze === 1) Te.children = P;
    else if (1 < ze) {
      for (var Vt = Array(ze), yt = 0; yt < ze; yt++)
        Vt[yt] = arguments[yt + 2];
      Te.children = Vt;
    }
    if (S && S.defaultProps)
      for (I in ze = S.defaultProps, ze)
        Te[I] === void 0 && (Te[I] = ze[I]);
    return Rt(S, Le, Te);
  }, Ze.createRef = function() {
    return { current: null };
  }, Ze.forwardRef = function(S) {
    return { $$typeof: le, render: S };
  }, Ze.isValidElement = Bt, Ze.lazy = function(S) {
    return {
      $$typeof: Ne,
      _payload: { _status: -1, _result: S },
      _init: ae
    };
  }, Ze.memo = function(S, x) {
    return {
      $$typeof: k,
      type: S,
      compare: x === void 0 ? null : x
    };
  }, Ze.startTransition = function(S) {
    var x = Me.T, P = {};
    Me.T = P;
    try {
      var I = S(), Te = Me.S;
      Te !== null && Te(P, I), typeof I == "object" && I !== null && typeof I.then == "function" && I.then(il, be);
    } catch (Le) {
      be(Le);
    } finally {
      x !== null && P.types !== null && (x.types = P.types), Me.T = x;
    }
  }, Ze.unstable_useCacheRefresh = function() {
    return Me.H.useCacheRefresh();
  }, Ze.use = function(S) {
    return Me.H.use(S);
  }, Ze.useActionState = function(S, x, P) {
    return Me.H.useActionState(S, x, P);
  }, Ze.useCallback = function(S, x) {
    return Me.H.useCallback(S, x);
  }, Ze.useContext = function(S) {
    return Me.H.useContext(S);
  }, Ze.useDebugValue = function() {
  }, Ze.useDeferredValue = function(S, x) {
    return Me.H.useDeferredValue(S, x);
  }, Ze.useEffect = function(S, x) {
    return Me.H.useEffect(S, x);
  }, Ze.useEffectEvent = function(S) {
    return Me.H.useEffectEvent(S);
  }, Ze.useId = function() {
    return Me.H.useId();
  }, Ze.useImperativeHandle = function(S, x, P) {
    return Me.H.useImperativeHandle(S, x, P);
  }, Ze.useInsertionEffect = function(S, x) {
    return Me.H.useInsertionEffect(S, x);
  }, Ze.useLayoutEffect = function(S, x) {
    return Me.H.useLayoutEffect(S, x);
  }, Ze.useMemo = function(S, x) {
    return Me.H.useMemo(S, x);
  }, Ze.useOptimistic = function(S, x) {
    return Me.H.useOptimistic(S, x);
  }, Ze.useReducer = function(S, x, P) {
    return Me.H.useReducer(S, x, P);
  }, Ze.useRef = function(S) {
    return Me.H.useRef(S);
  }, Ze.useState = function(S) {
    return Me.H.useState(S);
  }, Ze.useSyncExternalStore = function(S, x, P) {
    return Me.H.useSyncExternalStore(
      S,
      x,
      P
    );
  }, Ze.useTransition = function() {
    return Me.H.useTransition();
  }, Ze.version = "19.2.4", Ze;
}
var b0 = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
b0.exports;
var x2;
function AT() {
  return x2 || (x2 = 1, (function(O, L) {
    process.env.NODE_ENV !== "production" && (function() {
      function ie(g, U) {
        Object.defineProperty(ve.prototype, g, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              U[0],
              U[1]
            );
          }
        });
      }
      function z(g) {
        return g === null || typeof g != "object" ? null : (g = _i && g[_i] || g["@@iterator"], typeof g == "function" ? g : null);
      }
      function ne(g, U) {
        g = (g = g.constructor) && (g.displayName || g.name) || "ReactClass";
        var te = g + "." + U;
        Mi[te] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          U,
          g
        ), Mi[te] = !0);
      }
      function ve(g, U, te) {
        this.props = g, this.context = U, this.refs = pt, this.updater = te || Ga;
      }
      function He() {
      }
      function le(g, U, te) {
        this.props = g, this.context = U, this.refs = pt, this.updater = te || Ga;
      }
      function F() {
      }
      function k(g) {
        return "" + g;
      }
      function Ne(g) {
        try {
          k(g);
          var U = !1;
        } catch {
          U = !0;
        }
        if (U) {
          U = console;
          var te = U.error, ue = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return te.call(
            U,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            ue
          ), k(g);
        }
      }
      function q(g) {
        if (g == null) return null;
        if (typeof g == "function")
          return g.$$typeof === ds ? null : g.displayName || g.name || null;
        if (typeof g == "string") return g;
        switch (g) {
          case S:
            return "Fragment";
          case P:
            return "Profiler";
          case x:
            return "StrictMode";
          case ze:
            return "Suspense";
          case Vt:
            return "SuspenseList";
          case se:
            return "Activity";
        }
        if (typeof g == "object")
          switch (typeof g.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), g.$$typeof) {
            case Re:
              return "Portal";
            case Te:
              return g.displayName || "Context";
            case I:
              return (g._context.displayName || "Context") + ".Consumer";
            case Le:
              var U = g.render;
              return g = g.displayName, g || (g = U.displayName || U.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
            case yt:
              return U = g.displayName || null, U !== null ? U : q(g.type) || "Memo";
            case wa:
              U = g._payload, g = g._init;
              try {
                return q(g(U));
              } catch {
              }
          }
        return null;
      }
      function N(g) {
        if (g === S) return "<>";
        if (typeof g == "object" && g !== null && g.$$typeof === wa)
          return "<...>";
        try {
          var U = q(g);
          return U ? "<" + U + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function fe() {
        var g = me.A;
        return g === null ? null : g.getOwner();
      }
      function Je() {
        return Error("react-stack-top-frame");
      }
      function _t(g) {
        if (Ci.call(g, "key")) {
          var U = Object.getOwnPropertyDescriptor(g, "key").get;
          if (U && U.isReactWarning) return !1;
        }
        return g.key !== void 0;
      }
      function rt(g, U) {
        function te() {
          bc || (bc = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            U
          ));
        }
        te.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: te,
          configurable: !0
        });
      }
      function nt() {
        var g = q(this.type);
        return Pr[g] || (Pr[g] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), g = this.props.ref, g !== void 0 ? g : null;
      }
      function Al(g, U, te, ue, ye, Ce) {
        var pe = te.ref;
        return g = {
          $$typeof: be,
          type: g,
          key: U,
          props: te,
          _owner: ue
        }, (pe !== void 0 ? pe : null) !== null ? Object.defineProperty(g, "ref", {
          enumerable: !1,
          get: nt
        }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(g, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(g, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: ye
        }), Object.defineProperty(g, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: Ce
        }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
      }
      function xt(g, U) {
        return U = Al(
          g.type,
          U,
          g.props,
          g._owner,
          g._debugStack,
          g._debugTask
        ), g._store && (U._store.validated = g._store.validated), U;
      }
      function Kt(g) {
        tl(g) ? g._store && (g._store.validated = 1) : typeof g == "object" && g !== null && g.$$typeof === wa && (g._payload.status === "fulfilled" ? tl(g._payload.value) && g._payload.value._store && (g._payload.value._store.validated = 1) : g._store && (g._store.validated = 1));
      }
      function tl(g) {
        return typeof g == "object" && g !== null && g.$$typeof === be;
      }
      function il(g) {
        var U = { "=": "=0", ":": "=2" };
        return "$" + g.replace(/[=:]/g, function(te) {
          return U[te];
        });
      }
      function Me(g, U) {
        return typeof g == "object" && g !== null && g.key != null ? (Ne(g.key), il("" + g.key)) : U.toString(36);
      }
      function Ke(g) {
        switch (g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
          default:
            switch (typeof g.status == "string" ? g.then(F, F) : (g.status = "pending", g.then(
              function(U) {
                g.status === "pending" && (g.status = "fulfilled", g.value = U);
              },
              function(U) {
                g.status === "pending" && (g.status = "rejected", g.reason = U);
              }
            )), g.status) {
              case "fulfilled":
                return g.value;
              case "rejected":
                throw g.reason;
            }
        }
        throw g;
      }
      function Rt(g, U, te, ue, ye) {
        var Ce = typeof g;
        (Ce === "undefined" || Ce === "boolean") && (g = null);
        var pe = !1;
        if (g === null) pe = !0;
        else
          switch (Ce) {
            case "bigint":
            case "string":
            case "number":
              pe = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case be:
                case Re:
                  pe = !0;
                  break;
                case wa:
                  return pe = g._init, Rt(
                    pe(g._payload),
                    U,
                    te,
                    ue,
                    ye
                  );
              }
          }
        if (pe) {
          pe = g, ye = ye(pe);
          var tt = ue === "" ? "." + Me(pe, 0) : ue;
          return Sc(ye) ? (te = "", tt != null && (te = tt.replace(ed, "$&/") + "/"), Rt(ye, U, te, "", function(la) {
            return la;
          })) : ye != null && (tl(ye) && (ye.key != null && (pe && pe.key === ye.key || Ne(ye.key)), te = xt(
            ye,
            te + (ye.key == null || pe && pe.key === ye.key ? "" : ("" + ye.key).replace(
              ed,
              "$&/"
            ) + "/") + tt
          ), ue !== "" && pe != null && tl(pe) && pe.key == null && pe._store && !pe._store.validated && (te._store.validated = 2), ye = te), U.push(ye)), 1;
        }
        if (pe = 0, tt = ue === "" ? "." : ue + ":", Sc(g))
          for (var Xe = 0; Xe < g.length; Xe++)
            ue = g[Xe], Ce = tt + Me(ue, Xe), pe += Rt(
              ue,
              U,
              te,
              Ce,
              ye
            );
        else if (Xe = z(g), typeof Xe == "function")
          for (Xe === g.entries && (Un || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Un = !0), g = Xe.call(g), Xe = 0; !(ue = g.next()).done; )
            ue = ue.value, Ce = tt + Me(ue, Xe++), pe += Rt(
              ue,
              U,
              te,
              Ce,
              ye
            );
        else if (Ce === "object") {
          if (typeof g.then == "function")
            return Rt(
              Ke(g),
              U,
              te,
              ue,
              ye
            );
          throw U = String(g), Error(
            "Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return pe;
      }
      function he(g, U, te) {
        if (g == null) return g;
        var ue = [], ye = 0;
        return Rt(g, ue, "", "", function(Ce) {
          return U.call(te, Ce, ye++);
        }), ue;
      }
      function Bt(g) {
        if (g._status === -1) {
          var U = g._ioInfo;
          U != null && (U.start = U.end = performance.now()), U = g._result;
          var te = U();
          if (te.then(
            function(ye) {
              if (g._status === 0 || g._status === -1) {
                g._status = 1, g._result = ye;
                var Ce = g._ioInfo;
                Ce != null && (Ce.end = performance.now()), te.status === void 0 && (te.status = "fulfilled", te.value = ye);
              }
            },
            function(ye) {
              if (g._status === 0 || g._status === -1) {
                g._status = 2, g._result = ye;
                var Ce = g._ioInfo;
                Ce != null && (Ce.end = performance.now()), te.status === void 0 && (te.status = "rejected", te.reason = ye);
              }
            }
          ), U = g._ioInfo, U != null) {
            U.value = te;
            var ue = te.displayName;
            typeof ue == "string" && (U.name = ue);
          }
          g._status === -1 && (g._status = 0, g._result = te);
        }
        if (g._status === 1)
          return U = g._result, U === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            U
          ), "default" in U || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            U
          ), U.default;
        throw g._result;
      }
      function Se() {
        var g = me.H;
        return g === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), g;
      }
      function Ge() {
        me.asyncTransitions--;
      }
      function Qt(g) {
        if (Ec === null)
          try {
            var U = ("require" + Math.random()).slice(0, 7);
            Ec = (O && O[U]).call(
              O,
              "timers"
            ).setImmediate;
          } catch {
            Ec = function(ue) {
              hs === !1 && (hs = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var ye = new MessageChannel();
              ye.port1.onmessage = ue, ye.port2.postMessage(void 0);
            };
          }
        return Ec(g);
      }
      function qt(g) {
        return 1 < g.length && typeof AggregateError == "function" ? new AggregateError(g) : g[0];
      }
      function M(g, U) {
        U !== hn - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), hn = U;
      }
      function Z(g, U, te) {
        var ue = me.actQueue;
        if (ue !== null)
          if (ue.length !== 0)
            try {
              ae(ue), Qt(function() {
                return Z(g, U, te);
              });
              return;
            } catch (ye) {
              me.thrownErrors.push(ye);
            }
          else me.actQueue = null;
        0 < me.thrownErrors.length ? (ue = qt(me.thrownErrors), me.thrownErrors.length = 0, te(ue)) : U(g);
      }
      function ae(g) {
        if (!La) {
          La = !0;
          var U = 0;
          try {
            for (; U < g.length; U++) {
              var te = g[U];
              do {
                me.didUsePromise = !1;
                var ue = te(!1);
                if (ue !== null) {
                  if (me.didUsePromise) {
                    g[U] = te, g.splice(0, U);
                    return;
                  }
                  te = ue;
                } else break;
              } while (!0);
            }
            g.length = 0;
          } catch (ye) {
            g.splice(0, U + 1), me.thrownErrors.push(ye);
          } finally {
            La = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var be = Symbol.for("react.transitional.element"), Re = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), I = Symbol.for("react.consumer"), Te = Symbol.for("react.context"), Le = Symbol.for("react.forward_ref"), ze = Symbol.for("react.suspense"), Vt = Symbol.for("react.suspense_list"), yt = Symbol.for("react.memo"), wa = Symbol.for("react.lazy"), se = Symbol.for("react.activity"), _i = Symbol.iterator, Mi = {}, Ga = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(g) {
          ne(g, "forceUpdate");
        },
        enqueueReplaceState: function(g) {
          ne(g, "replaceState");
        },
        enqueueSetState: function(g) {
          ne(g, "setState");
        }
      }, cu = Object.assign, pt = {};
      Object.freeze(pt), ve.prototype.isReactComponent = {}, ve.prototype.setState = function(g, U) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, g, U, "setState");
      }, ve.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      var ta = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (Ui in ta)
        ta.hasOwnProperty(Ui) && ie(Ui, ta[Ui]);
      He.prototype = ve.prototype, ta = le.prototype = new He(), ta.constructor = le, cu(ta, ve.prototype), ta.isPureReactComponent = !0;
      var Sc = Array.isArray, ds = Symbol.for("react.client.reference"), me = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, Ci = Object.prototype.hasOwnProperty, ou = console.createTask ? console.createTask : function() {
        return null;
      };
      ta = {
        react_stack_bottom_frame: function(g) {
          return g();
        }
      };
      var bc, vl, Pr = {}, Uo = ta.react_stack_bottom_frame.bind(
        ta,
        Je
      )(), Ho = ou(N(Je)), Un = !1, ed = /\/+/g, No = typeof reportError == "function" ? reportError : function(g) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var U = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
            error: g
          });
          if (!window.dispatchEvent(U)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", g);
          return;
        }
        console.error(g);
      }, hs = !1, Ec = null, hn = 0, Ol = !1, La = !1, Hl = typeof queueMicrotask == "function" ? function(g) {
        queueMicrotask(function() {
          return queueMicrotask(g);
        });
      } : Qt;
      ta = Object.freeze({
        __proto__: null,
        c: function(g) {
          return Se().useMemoCache(g);
        }
      });
      var Ui = {
        map: he,
        forEach: function(g, U, te) {
          he(
            g,
            function() {
              U.apply(this, arguments);
            },
            te
          );
        },
        count: function(g) {
          var U = 0;
          return he(g, function() {
            U++;
          }), U;
        },
        toArray: function(g) {
          return he(g, function(U) {
            return U;
          }) || [];
        },
        only: function(g) {
          if (!tl(g))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return g;
        }
      };
      L.Activity = se, L.Children = Ui, L.Component = ve, L.Fragment = S, L.Profiler = P, L.PureComponent = le, L.StrictMode = x, L.Suspense = ze, L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = me, L.__COMPILER_RUNTIME = ta, L.act = function(g) {
        var U = me.actQueue, te = hn;
        hn++;
        var ue = me.actQueue = U !== null ? U : [], ye = !1;
        try {
          var Ce = g();
        } catch (Xe) {
          me.thrownErrors.push(Xe);
        }
        if (0 < me.thrownErrors.length)
          throw M(U, te), g = qt(me.thrownErrors), me.thrownErrors.length = 0, g;
        if (Ce !== null && typeof Ce == "object" && typeof Ce.then == "function") {
          var pe = Ce;
          return Hl(function() {
            ye || Ol || (Ol = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(Xe, la) {
              ye = !0, pe.then(
                function(mn) {
                  if (M(U, te), te === 0) {
                    try {
                      ae(ue), Qt(function() {
                        return Z(
                          mn,
                          Xe,
                          la
                        );
                      });
                    } catch (jo) {
                      me.thrownErrors.push(jo);
                    }
                    if (0 < me.thrownErrors.length) {
                      var Hi = qt(
                        me.thrownErrors
                      );
                      me.thrownErrors.length = 0, la(Hi);
                    }
                  } else Xe(mn);
                },
                function(mn) {
                  M(U, te), 0 < me.thrownErrors.length && (mn = qt(
                    me.thrownErrors
                  ), me.thrownErrors.length = 0), la(mn);
                }
              );
            }
          };
        }
        var tt = Ce;
        if (M(U, te), te === 0 && (ae(ue), ue.length !== 0 && Hl(function() {
          ye || Ol || (Ol = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), me.actQueue = null), 0 < me.thrownErrors.length)
          throw g = qt(me.thrownErrors), me.thrownErrors.length = 0, g;
        return {
          then: function(Xe, la) {
            ye = !0, te === 0 ? (me.actQueue = ue, Qt(function() {
              return Z(
                tt,
                Xe,
                la
              );
            })) : Xe(tt);
          }
        };
      }, L.cache = function(g) {
        return function() {
          return g.apply(null, arguments);
        };
      }, L.cacheSignal = function() {
        return null;
      }, L.captureOwnerStack = function() {
        var g = me.getCurrentStack;
        return g === null ? null : g();
      }, L.cloneElement = function(g, U, te) {
        if (g == null)
          throw Error(
            "The argument must be a React element, but you passed " + g + "."
          );
        var ue = cu({}, g.props), ye = g.key, Ce = g._owner;
        if (U != null) {
          var pe;
          e: {
            if (Ci.call(U, "ref") && (pe = Object.getOwnPropertyDescriptor(
              U,
              "ref"
            ).get) && pe.isReactWarning) {
              pe = !1;
              break e;
            }
            pe = U.ref !== void 0;
          }
          pe && (Ce = fe()), _t(U) && (Ne(U.key), ye = "" + U.key);
          for (tt in U)
            !Ci.call(U, tt) || tt === "key" || tt === "__self" || tt === "__source" || tt === "ref" && U.ref === void 0 || (ue[tt] = U[tt]);
        }
        var tt = arguments.length - 2;
        if (tt === 1) ue.children = te;
        else if (1 < tt) {
          pe = Array(tt);
          for (var Xe = 0; Xe < tt; Xe++)
            pe[Xe] = arguments[Xe + 2];
          ue.children = pe;
        }
        for (ue = Al(
          g.type,
          ye,
          ue,
          Ce,
          g._debugStack,
          g._debugTask
        ), ye = 2; ye < arguments.length; ye++)
          Kt(arguments[ye]);
        return ue;
      }, L.createContext = function(g) {
        return g = {
          $$typeof: Te,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, g.Provider = g, g.Consumer = {
          $$typeof: I,
          _context: g
        }, g._currentRenderer = null, g._currentRenderer2 = null, g;
      }, L.createElement = function(g, U, te) {
        for (var ue = 2; ue < arguments.length; ue++)
          Kt(arguments[ue]);
        ue = {};
        var ye = null;
        if (U != null)
          for (Xe in vl || !("__self" in U) || "key" in U || (vl = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), _t(U) && (Ne(U.key), ye = "" + U.key), U)
            Ci.call(U, Xe) && Xe !== "key" && Xe !== "__self" && Xe !== "__source" && (ue[Xe] = U[Xe]);
        var Ce = arguments.length - 2;
        if (Ce === 1) ue.children = te;
        else if (1 < Ce) {
          for (var pe = Array(Ce), tt = 0; tt < Ce; tt++)
            pe[tt] = arguments[tt + 2];
          Object.freeze && Object.freeze(pe), ue.children = pe;
        }
        if (g && g.defaultProps)
          for (Xe in Ce = g.defaultProps, Ce)
            ue[Xe] === void 0 && (ue[Xe] = Ce[Xe]);
        ye && rt(
          ue,
          typeof g == "function" ? g.displayName || g.name || "Unknown" : g
        );
        var Xe = 1e4 > me.recentlyCreatedOwnerStacks++;
        return Al(
          g,
          ye,
          ue,
          fe(),
          Xe ? Error("react-stack-top-frame") : Uo,
          Xe ? ou(N(g)) : Ho
        );
      }, L.createRef = function() {
        var g = { current: null };
        return Object.seal(g), g;
      }, L.forwardRef = function(g) {
        g != null && g.$$typeof === yt ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof g != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          g === null ? "null" : typeof g
        ) : g.length !== 0 && g.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), g != null && g.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var U = { $$typeof: Le, render: g }, te;
        return Object.defineProperty(U, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return te;
          },
          set: function(ue) {
            te = ue, g.name || g.displayName || (Object.defineProperty(g, "name", { value: ue }), g.displayName = ue);
          }
        }), U;
      }, L.isValidElement = tl, L.lazy = function(g) {
        g = { _status: -1, _result: g };
        var U = {
          $$typeof: wa,
          _payload: g,
          _init: Bt
        }, te = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        return g._ioInfo = te, U._debugInfo = [{ awaited: te }], U;
      }, L.memo = function(g, U) {
        g == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          g === null ? "null" : typeof g
        ), U = {
          $$typeof: yt,
          type: g,
          compare: U === void 0 ? null : U
        };
        var te;
        return Object.defineProperty(U, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return te;
          },
          set: function(ue) {
            te = ue, g.name || g.displayName || (Object.defineProperty(g, "name", { value: ue }), g.displayName = ue);
          }
        }), U;
      }, L.startTransition = function(g) {
        var U = me.T, te = {};
        te._updatedFibers = /* @__PURE__ */ new Set(), me.T = te;
        try {
          var ue = g(), ye = me.S;
          ye !== null && ye(te, ue), typeof ue == "object" && ue !== null && typeof ue.then == "function" && (me.asyncTransitions++, ue.then(Ge, Ge), ue.then(F, No));
        } catch (Ce) {
          No(Ce);
        } finally {
          U === null && te._updatedFibers && (g = te._updatedFibers.size, te._updatedFibers.clear(), 10 < g && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), U !== null && te.types !== null && (U.types !== null && U.types !== te.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), U.types = te.types), me.T = U;
        }
      }, L.unstable_useCacheRefresh = function() {
        return Se().useCacheRefresh();
      }, L.use = function(g) {
        return Se().use(g);
      }, L.useActionState = function(g, U, te) {
        return Se().useActionState(
          g,
          U,
          te
        );
      }, L.useCallback = function(g, U) {
        return Se().useCallback(g, U);
      }, L.useContext = function(g) {
        var U = Se();
        return g.$$typeof === I && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), U.useContext(g);
      }, L.useDebugValue = function(g, U) {
        return Se().useDebugValue(g, U);
      }, L.useDeferredValue = function(g, U) {
        return Se().useDeferredValue(g, U);
      }, L.useEffect = function(g, U) {
        return g == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Se().useEffect(g, U);
      }, L.useEffectEvent = function(g) {
        return Se().useEffectEvent(g);
      }, L.useId = function() {
        return Se().useId();
      }, L.useImperativeHandle = function(g, U, te) {
        return Se().useImperativeHandle(g, U, te);
      }, L.useInsertionEffect = function(g, U) {
        return g == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Se().useInsertionEffect(g, U);
      }, L.useLayoutEffect = function(g, U) {
        return g == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Se().useLayoutEffect(g, U);
      }, L.useMemo = function(g, U) {
        return Se().useMemo(g, U);
      }, L.useOptimistic = function(g, U) {
        return Se().useOptimistic(g, U);
      }, L.useReducer = function(g, U, te) {
        return Se().useReducer(g, U, te);
      }, L.useRef = function(g) {
        return Se().useRef(g);
      }, L.useState = function(g) {
        return Se().useState(g);
      }, L.useSyncExternalStore = function(g, U, te) {
        return Se().useSyncExternalStore(
          g,
          U,
          te
        );
      }, L.useTransition = function() {
        return Se().useTransition();
      }, L.version = "19.2.4", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(b0, b0.exports)), b0.exports;
}
var B2;
function bm() {
  return B2 || (B2 = 1, process.env.NODE_ENV === "production" ? Qv.exports = TT() : Qv.exports = AT()), Qv.exports;
}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q2;
function OT() {
  return q2 || (q2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function O(S) {
      if (S == null) return null;
      if (typeof S == "function")
        return S.$$typeof === Bt ? null : S.displayName || S.name || null;
      if (typeof S == "string") return S;
      switch (S) {
        case rt:
          return "Fragment";
        case Al:
          return "Profiler";
        case nt:
          return "StrictMode";
        case il:
          return "Suspense";
        case Me:
          return "SuspenseList";
        case he:
          return "Activity";
      }
      if (typeof S == "object")
        switch (typeof S.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), S.$$typeof) {
          case _t:
            return "Portal";
          case Kt:
            return S.displayName || "Context";
          case xt:
            return (S._context.displayName || "Context") + ".Consumer";
          case tl:
            var x = S.render;
            return S = S.displayName, S || (S = x.displayName || x.name || "", S = S !== "" ? "ForwardRef(" + S + ")" : "ForwardRef"), S;
          case Ke:
            return x = S.displayName || null, x !== null ? x : O(S.type) || "Memo";
          case Rt:
            x = S._payload, S = S._init;
            try {
              return O(S(x));
            } catch {
            }
        }
      return null;
    }
    function L(S) {
      return "" + S;
    }
    function ie(S) {
      try {
        L(S);
        var x = !1;
      } catch {
        x = !0;
      }
      if (x) {
        x = console;
        var P = x.error, I = typeof Symbol == "function" && Symbol.toStringTag && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return P.call(
          x,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          I
        ), L(S);
      }
    }
    function z(S) {
      if (S === rt) return "<>";
      if (typeof S == "object" && S !== null && S.$$typeof === Rt)
        return "<...>";
      try {
        var x = O(S);
        return x ? "<" + x + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function ne() {
      var S = Se.A;
      return S === null ? null : S.getOwner();
    }
    function ve() {
      return Error("react-stack-top-frame");
    }
    function He(S) {
      if (Ge.call(S, "key")) {
        var x = Object.getOwnPropertyDescriptor(S, "key").get;
        if (x && x.isReactWarning) return !1;
      }
      return S.key !== void 0;
    }
    function le(S, x) {
      function P() {
        M || (M = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          x
        ));
      }
      P.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: P,
        configurable: !0
      });
    }
    function F() {
      var S = O(this.type);
      return Z[S] || (Z[S] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), S = this.props.ref, S !== void 0 ? S : null;
    }
    function k(S, x, P, I, Te, Le) {
      var ze = P.ref;
      return S = {
        $$typeof: Je,
        type: S,
        key: x,
        props: P,
        _owner: I
      }, (ze !== void 0 ? ze : null) !== null ? Object.defineProperty(S, "ref", {
        enumerable: !1,
        get: F
      }) : Object.defineProperty(S, "ref", { enumerable: !1, value: null }), S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(S, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(S, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Te
      }), Object.defineProperty(S, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Le
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    }
    function Ne(S, x, P, I, Te, Le) {
      var ze = x.children;
      if (ze !== void 0)
        if (I)
          if (Qt(ze)) {
            for (I = 0; I < ze.length; I++)
              q(ze[I]);
            Object.freeze && Object.freeze(ze);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else q(ze);
      if (Ge.call(x, "key")) {
        ze = O(S);
        var Vt = Object.keys(x).filter(function(wa) {
          return wa !== "key";
        });
        I = 0 < Vt.length ? "{key: someKey, " + Vt.join(": ..., ") + ": ...}" : "{key: someKey}", Re[ze + I] || (Vt = 0 < Vt.length ? "{" + Vt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          I,
          ze,
          Vt,
          ze
        ), Re[ze + I] = !0);
      }
      if (ze = null, P !== void 0 && (ie(P), ze = "" + P), He(x) && (ie(x.key), ze = "" + x.key), "key" in x) {
        P = {};
        for (var yt in x)
          yt !== "key" && (P[yt] = x[yt]);
      } else P = x;
      return ze && le(
        P,
        typeof S == "function" ? S.displayName || S.name || "Unknown" : S
      ), k(
        S,
        ze,
        P,
        ne(),
        Te,
        Le
      );
    }
    function q(S) {
      N(S) ? S._store && (S._store.validated = 1) : typeof S == "object" && S !== null && S.$$typeof === Rt && (S._payload.status === "fulfilled" ? N(S._payload.value) && S._payload.value._store && (S._payload.value._store.validated = 1) : S._store && (S._store.validated = 1));
    }
    function N(S) {
      return typeof S == "object" && S !== null && S.$$typeof === Je;
    }
    var fe = bm(), Je = Symbol.for("react.transitional.element"), _t = Symbol.for("react.portal"), rt = Symbol.for("react.fragment"), nt = Symbol.for("react.strict_mode"), Al = Symbol.for("react.profiler"), xt = Symbol.for("react.consumer"), Kt = Symbol.for("react.context"), tl = Symbol.for("react.forward_ref"), il = Symbol.for("react.suspense"), Me = Symbol.for("react.suspense_list"), Ke = Symbol.for("react.memo"), Rt = Symbol.for("react.lazy"), he = Symbol.for("react.activity"), Bt = Symbol.for("react.client.reference"), Se = fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ge = Object.prototype.hasOwnProperty, Qt = Array.isArray, qt = console.createTask ? console.createTask : function() {
      return null;
    };
    fe = {
      react_stack_bottom_frame: function(S) {
        return S();
      }
    };
    var M, Z = {}, ae = fe.react_stack_bottom_frame.bind(
      fe,
      ve
    )(), be = qt(z(ve)), Re = {};
    g0.Fragment = rt, g0.jsx = function(S, x, P) {
      var I = 1e4 > Se.recentlyCreatedOwnerStacks++;
      return Ne(
        S,
        x,
        P,
        !1,
        I ? Error("react-stack-top-frame") : ae,
        I ? qt(z(S)) : be
      );
    }, g0.jsxs = function(S, x, P) {
      var I = 1e4 > Se.recentlyCreatedOwnerStacks++;
      return Ne(
        S,
        x,
        P,
        !0,
        I ? Error("react-stack-top-frame") : ae,
        I ? qt(z(S)) : be
      );
    };
  })()), g0;
}
var Y2;
function zT() {
  return Y2 || (Y2 = 1, process.env.NODE_ENV === "production" ? Xv.exports = ET() : Xv.exports = OT()), Xv.exports;
}
var ee = zT(), ea = bm(), Vv = { exports: {} }, v0 = {}, Zv = { exports: {} }, S1 = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var w2;
function DT() {
  return w2 || (w2 = 1, (function(O) {
    function L(M, Z) {
      var ae = M.length;
      M.push(Z);
      e: for (; 0 < ae; ) {
        var be = ae - 1 >>> 1, Re = M[be];
        if (0 < ne(Re, Z))
          M[be] = Z, M[ae] = Re, ae = be;
        else break e;
      }
    }
    function ie(M) {
      return M.length === 0 ? null : M[0];
    }
    function z(M) {
      if (M.length === 0) return null;
      var Z = M[0], ae = M.pop();
      if (ae !== Z) {
        M[0] = ae;
        e: for (var be = 0, Re = M.length, S = Re >>> 1; be < S; ) {
          var x = 2 * (be + 1) - 1, P = M[x], I = x + 1, Te = M[I];
          if (0 > ne(P, ae))
            I < Re && 0 > ne(Te, P) ? (M[be] = Te, M[I] = ae, be = I) : (M[be] = P, M[x] = ae, be = x);
          else if (I < Re && 0 > ne(Te, ae))
            M[be] = Te, M[I] = ae, be = I;
          else break e;
        }
      }
      return Z;
    }
    function ne(M, Z) {
      var ae = M.sortIndex - Z.sortIndex;
      return ae !== 0 ? ae : M.id - Z.id;
    }
    if (O.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var ve = performance;
      O.unstable_now = function() {
        return ve.now();
      };
    } else {
      var He = Date, le = He.now();
      O.unstable_now = function() {
        return He.now() - le;
      };
    }
    var F = [], k = [], Ne = 1, q = null, N = 3, fe = !1, Je = !1, _t = !1, rt = !1, nt = typeof setTimeout == "function" ? setTimeout : null, Al = typeof clearTimeout == "function" ? clearTimeout : null, xt = typeof setImmediate < "u" ? setImmediate : null;
    function Kt(M) {
      for (var Z = ie(k); Z !== null; ) {
        if (Z.callback === null) z(k);
        else if (Z.startTime <= M)
          z(k), Z.sortIndex = Z.expirationTime, L(F, Z);
        else break;
        Z = ie(k);
      }
    }
    function tl(M) {
      if (_t = !1, Kt(M), !Je)
        if (ie(F) !== null)
          Je = !0, il || (il = !0, Se());
        else {
          var Z = ie(k);
          Z !== null && qt(tl, Z.startTime - M);
        }
    }
    var il = !1, Me = -1, Ke = 5, Rt = -1;
    function he() {
      return rt ? !0 : !(O.unstable_now() - Rt < Ke);
    }
    function Bt() {
      if (rt = !1, il) {
        var M = O.unstable_now();
        Rt = M;
        var Z = !0;
        try {
          e: {
            Je = !1, _t && (_t = !1, Al(Me), Me = -1), fe = !0;
            var ae = N;
            try {
              t: {
                for (Kt(M), q = ie(F); q !== null && !(q.expirationTime > M && he()); ) {
                  var be = q.callback;
                  if (typeof be == "function") {
                    q.callback = null, N = q.priorityLevel;
                    var Re = be(
                      q.expirationTime <= M
                    );
                    if (M = O.unstable_now(), typeof Re == "function") {
                      q.callback = Re, Kt(M), Z = !0;
                      break t;
                    }
                    q === ie(F) && z(F), Kt(M);
                  } else z(F);
                  q = ie(F);
                }
                if (q !== null) Z = !0;
                else {
                  var S = ie(k);
                  S !== null && qt(
                    tl,
                    S.startTime - M
                  ), Z = !1;
                }
              }
              break e;
            } finally {
              q = null, N = ae, fe = !1;
            }
            Z = void 0;
          }
        } finally {
          Z ? Se() : il = !1;
        }
      }
    }
    var Se;
    if (typeof xt == "function")
      Se = function() {
        xt(Bt);
      };
    else if (typeof MessageChannel < "u") {
      var Ge = new MessageChannel(), Qt = Ge.port2;
      Ge.port1.onmessage = Bt, Se = function() {
        Qt.postMessage(null);
      };
    } else
      Se = function() {
        nt(Bt, 0);
      };
    function qt(M, Z) {
      Me = nt(function() {
        M(O.unstable_now());
      }, Z);
    }
    O.unstable_IdlePriority = 5, O.unstable_ImmediatePriority = 1, O.unstable_LowPriority = 4, O.unstable_NormalPriority = 3, O.unstable_Profiling = null, O.unstable_UserBlockingPriority = 2, O.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, O.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ke = 0 < M ? Math.floor(1e3 / M) : 5;
    }, O.unstable_getCurrentPriorityLevel = function() {
      return N;
    }, O.unstable_next = function(M) {
      switch (N) {
        case 1:
        case 2:
        case 3:
          var Z = 3;
          break;
        default:
          Z = N;
      }
      var ae = N;
      N = Z;
      try {
        return M();
      } finally {
        N = ae;
      }
    }, O.unstable_requestPaint = function() {
      rt = !0;
    }, O.unstable_runWithPriority = function(M, Z) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var ae = N;
      N = M;
      try {
        return Z();
      } finally {
        N = ae;
      }
    }, O.unstable_scheduleCallback = function(M, Z, ae) {
      var be = O.unstable_now();
      switch (typeof ae == "object" && ae !== null ? (ae = ae.delay, ae = typeof ae == "number" && 0 < ae ? be + ae : be) : ae = be, M) {
        case 1:
          var Re = -1;
          break;
        case 2:
          Re = 250;
          break;
        case 5:
          Re = 1073741823;
          break;
        case 4:
          Re = 1e4;
          break;
        default:
          Re = 5e3;
      }
      return Re = ae + Re, M = {
        id: Ne++,
        callback: Z,
        priorityLevel: M,
        startTime: ae,
        expirationTime: Re,
        sortIndex: -1
      }, ae > be ? (M.sortIndex = ae, L(k, M), ie(F) === null && M === ie(k) && (_t ? (Al(Me), Me = -1) : _t = !0, qt(tl, ae - be))) : (M.sortIndex = Re, L(F, M), Je || fe || (Je = !0, il || (il = !0, Se()))), M;
    }, O.unstable_shouldYield = he, O.unstable_wrapCallback = function(M) {
      var Z = N;
      return function() {
        var ae = N;
        N = Z;
        try {
          return M.apply(this, arguments);
        } finally {
          N = ae;
        }
      };
    };
  })(S1)), S1;
}
var b1 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G2;
function RT() {
  return G2 || (G2 = 1, (function(O) {
    process.env.NODE_ENV !== "production" && (function() {
      function L() {
        if (tl = !1, Rt) {
          var M = O.unstable_now();
          Se = M;
          var Z = !0;
          try {
            e: {
              xt = !1, Kt && (Kt = !1, Me(he), he = -1), Al = !0;
              var ae = nt;
              try {
                t: {
                  for (He(M), rt = z(fe); rt !== null && !(rt.expirationTime > M && F()); ) {
                    var be = rt.callback;
                    if (typeof be == "function") {
                      rt.callback = null, nt = rt.priorityLevel;
                      var Re = be(
                        rt.expirationTime <= M
                      );
                      if (M = O.unstable_now(), typeof Re == "function") {
                        rt.callback = Re, He(M), Z = !0;
                        break t;
                      }
                      rt === z(fe) && ne(fe), He(M);
                    } else ne(fe);
                    rt = z(fe);
                  }
                  if (rt !== null) Z = !0;
                  else {
                    var S = z(Je);
                    S !== null && k(
                      le,
                      S.startTime - M
                    ), Z = !1;
                  }
                }
                break e;
              } finally {
                rt = null, nt = ae, Al = !1;
              }
              Z = void 0;
            }
          } finally {
            Z ? Ge() : Rt = !1;
          }
        }
      }
      function ie(M, Z) {
        var ae = M.length;
        M.push(Z);
        e: for (; 0 < ae; ) {
          var be = ae - 1 >>> 1, Re = M[be];
          if (0 < ve(Re, Z))
            M[be] = Z, M[ae] = Re, ae = be;
          else break e;
        }
      }
      function z(M) {
        return M.length === 0 ? null : M[0];
      }
      function ne(M) {
        if (M.length === 0) return null;
        var Z = M[0], ae = M.pop();
        if (ae !== Z) {
          M[0] = ae;
          e: for (var be = 0, Re = M.length, S = Re >>> 1; be < S; ) {
            var x = 2 * (be + 1) - 1, P = M[x], I = x + 1, Te = M[I];
            if (0 > ve(P, ae))
              I < Re && 0 > ve(Te, P) ? (M[be] = Te, M[I] = ae, be = I) : (M[be] = P, M[x] = ae, be = x);
            else if (I < Re && 0 > ve(Te, ae))
              M[be] = Te, M[I] = ae, be = I;
            else break e;
          }
        }
        return Z;
      }
      function ve(M, Z) {
        var ae = M.sortIndex - Z.sortIndex;
        return ae !== 0 ? ae : M.id - Z.id;
      }
      function He(M) {
        for (var Z = z(Je); Z !== null; ) {
          if (Z.callback === null) ne(Je);
          else if (Z.startTime <= M)
            ne(Je), Z.sortIndex = Z.expirationTime, ie(fe, Z);
          else break;
          Z = z(Je);
        }
      }
      function le(M) {
        if (Kt = !1, He(M), !xt)
          if (z(fe) !== null)
            xt = !0, Rt || (Rt = !0, Ge());
          else {
            var Z = z(Je);
            Z !== null && k(
              le,
              Z.startTime - M
            );
          }
      }
      function F() {
        return tl ? !0 : !(O.unstable_now() - Se < Bt);
      }
      function k(M, Z) {
        he = il(function() {
          M(O.unstable_now());
        }, Z);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), O.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var Ne = performance;
        O.unstable_now = function() {
          return Ne.now();
        };
      } else {
        var q = Date, N = q.now();
        O.unstable_now = function() {
          return q.now() - N;
        };
      }
      var fe = [], Je = [], _t = 1, rt = null, nt = 3, Al = !1, xt = !1, Kt = !1, tl = !1, il = typeof setTimeout == "function" ? setTimeout : null, Me = typeof clearTimeout == "function" ? clearTimeout : null, Ke = typeof setImmediate < "u" ? setImmediate : null, Rt = !1, he = -1, Bt = 5, Se = -1;
      if (typeof Ke == "function")
        var Ge = function() {
          Ke(L);
        };
      else if (typeof MessageChannel < "u") {
        var Qt = new MessageChannel(), qt = Qt.port2;
        Qt.port1.onmessage = L, Ge = function() {
          qt.postMessage(null);
        };
      } else
        Ge = function() {
          il(L, 0);
        };
      O.unstable_IdlePriority = 5, O.unstable_ImmediatePriority = 1, O.unstable_LowPriority = 4, O.unstable_NormalPriority = 3, O.unstable_Profiling = null, O.unstable_UserBlockingPriority = 2, O.unstable_cancelCallback = function(M) {
        M.callback = null;
      }, O.unstable_forceFrameRate = function(M) {
        0 > M || 125 < M ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Bt = 0 < M ? Math.floor(1e3 / M) : 5;
      }, O.unstable_getCurrentPriorityLevel = function() {
        return nt;
      }, O.unstable_next = function(M) {
        switch (nt) {
          case 1:
          case 2:
          case 3:
            var Z = 3;
            break;
          default:
            Z = nt;
        }
        var ae = nt;
        nt = Z;
        try {
          return M();
        } finally {
          nt = ae;
        }
      }, O.unstable_requestPaint = function() {
        tl = !0;
      }, O.unstable_runWithPriority = function(M, Z) {
        switch (M) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            M = 3;
        }
        var ae = nt;
        nt = M;
        try {
          return Z();
        } finally {
          nt = ae;
        }
      }, O.unstable_scheduleCallback = function(M, Z, ae) {
        var be = O.unstable_now();
        switch (typeof ae == "object" && ae !== null ? (ae = ae.delay, ae = typeof ae == "number" && 0 < ae ? be + ae : be) : ae = be, M) {
          case 1:
            var Re = -1;
            break;
          case 2:
            Re = 250;
            break;
          case 5:
            Re = 1073741823;
            break;
          case 4:
            Re = 1e4;
            break;
          default:
            Re = 5e3;
        }
        return Re = ae + Re, M = {
          id: _t++,
          callback: Z,
          priorityLevel: M,
          startTime: ae,
          expirationTime: Re,
          sortIndex: -1
        }, ae > be ? (M.sortIndex = ae, ie(Je, M), z(fe) === null && M === z(Je) && (Kt ? (Me(he), he = -1) : Kt = !0, k(le, ae - be))) : (M.sortIndex = Re, ie(fe, M), xt || Al || (xt = !0, Rt || (Rt = !0, Ge()))), M;
      }, O.unstable_shouldYield = F, O.unstable_wrapCallback = function(M) {
        var Z = nt;
        return function() {
          var ae = nt;
          nt = Z;
          try {
            return M.apply(this, arguments);
          } finally {
            nt = ae;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(b1)), b1;
}
var L2;
function W2() {
  return L2 || (L2 = 1, process.env.NODE_ENV === "production" ? Zv.exports = DT() : Zv.exports = RT()), Zv.exports;
}
var Jv = { exports: {} }, qa = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X2;
function _T() {
  if (X2) return qa;
  X2 = 1;
  var O = bm();
  function L(F) {
    var k = "https://react.dev/errors/" + F;
    if (1 < arguments.length) {
      k += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Ne = 2; Ne < arguments.length; Ne++)
        k += "&args[]=" + encodeURIComponent(arguments[Ne]);
    }
    return "Minified React error #" + F + "; visit " + k + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ie() {
  }
  var z = {
    d: {
      f: ie,
      r: function() {
        throw Error(L(522));
      },
      D: ie,
      C: ie,
      L: ie,
      m: ie,
      X: ie,
      S: ie,
      M: ie
    },
    p: 0,
    findDOMNode: null
  }, ne = Symbol.for("react.portal");
  function ve(F, k, Ne) {
    var q = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ne,
      key: q == null ? null : "" + q,
      children: F,
      containerInfo: k,
      implementation: Ne
    };
  }
  var He = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function le(F, k) {
    if (F === "font") return "";
    if (typeof k == "string")
      return k === "use-credentials" ? k : "";
  }
  return qa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = z, qa.createPortal = function(F, k) {
    var Ne = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!k || k.nodeType !== 1 && k.nodeType !== 9 && k.nodeType !== 11)
      throw Error(L(299));
    return ve(F, k, null, Ne);
  }, qa.flushSync = function(F) {
    var k = He.T, Ne = z.p;
    try {
      if (He.T = null, z.p = 2, F) return F();
    } finally {
      He.T = k, z.p = Ne, z.d.f();
    }
  }, qa.preconnect = function(F, k) {
    typeof F == "string" && (k ? (k = k.crossOrigin, k = typeof k == "string" ? k === "use-credentials" ? k : "" : void 0) : k = null, z.d.C(F, k));
  }, qa.prefetchDNS = function(F) {
    typeof F == "string" && z.d.D(F);
  }, qa.preinit = function(F, k) {
    if (typeof F == "string" && k && typeof k.as == "string") {
      var Ne = k.as, q = le(Ne, k.crossOrigin), N = typeof k.integrity == "string" ? k.integrity : void 0, fe = typeof k.fetchPriority == "string" ? k.fetchPriority : void 0;
      Ne === "style" ? z.d.S(
        F,
        typeof k.precedence == "string" ? k.precedence : void 0,
        {
          crossOrigin: q,
          integrity: N,
          fetchPriority: fe
        }
      ) : Ne === "script" && z.d.X(F, {
        crossOrigin: q,
        integrity: N,
        fetchPriority: fe,
        nonce: typeof k.nonce == "string" ? k.nonce : void 0
      });
    }
  }, qa.preinitModule = function(F, k) {
    if (typeof F == "string")
      if (typeof k == "object" && k !== null) {
        if (k.as == null || k.as === "script") {
          var Ne = le(
            k.as,
            k.crossOrigin
          );
          z.d.M(F, {
            crossOrigin: Ne,
            integrity: typeof k.integrity == "string" ? k.integrity : void 0,
            nonce: typeof k.nonce == "string" ? k.nonce : void 0
          });
        }
      } else k == null && z.d.M(F);
  }, qa.preload = function(F, k) {
    if (typeof F == "string" && typeof k == "object" && k !== null && typeof k.as == "string") {
      var Ne = k.as, q = le(Ne, k.crossOrigin);
      z.d.L(F, Ne, {
        crossOrigin: q,
        integrity: typeof k.integrity == "string" ? k.integrity : void 0,
        nonce: typeof k.nonce == "string" ? k.nonce : void 0,
        type: typeof k.type == "string" ? k.type : void 0,
        fetchPriority: typeof k.fetchPriority == "string" ? k.fetchPriority : void 0,
        referrerPolicy: typeof k.referrerPolicy == "string" ? k.referrerPolicy : void 0,
        imageSrcSet: typeof k.imageSrcSet == "string" ? k.imageSrcSet : void 0,
        imageSizes: typeof k.imageSizes == "string" ? k.imageSizes : void 0,
        media: typeof k.media == "string" ? k.media : void 0
      });
    }
  }, qa.preloadModule = function(F, k) {
    if (typeof F == "string")
      if (k) {
        var Ne = le(k.as, k.crossOrigin);
        z.d.m(F, {
          as: typeof k.as == "string" && k.as !== "script" ? k.as : void 0,
          crossOrigin: Ne,
          integrity: typeof k.integrity == "string" ? k.integrity : void 0
        });
      } else z.d.m(F);
  }, qa.requestFormReset = function(F) {
    z.d.r(F);
  }, qa.unstable_batchedUpdates = function(F, k) {
    return F(k);
  }, qa.useFormState = function(F, k, Ne) {
    return He.H.useFormState(F, k, Ne);
  }, qa.useFormStatus = function() {
    return He.H.useHostTransitionStatus();
  }, qa.version = "19.2.4", qa;
}
var Ya = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Q2;
function MT() {
  return Q2 || (Q2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function O() {
    }
    function L(q) {
      return "" + q;
    }
    function ie(q, N, fe) {
      var Je = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        L(Je);
        var _t = !1;
      } catch {
        _t = !0;
      }
      return _t && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && Je[Symbol.toStringTag] || Je.constructor.name || "Object"
      ), L(Je)), {
        $$typeof: k,
        key: Je == null ? null : "" + Je,
        children: q,
        containerInfo: N,
        implementation: fe
      };
    }
    function z(q, N) {
      if (q === "font") return "";
      if (typeof N == "string")
        return N === "use-credentials" ? N : "";
    }
    function ne(q) {
      return q === null ? "`null`" : q === void 0 ? "`undefined`" : q === "" ? "an empty string" : 'something with type "' + typeof q + '"';
    }
    function ve(q) {
      return q === null ? "`null`" : q === void 0 ? "`undefined`" : q === "" ? "an empty string" : typeof q == "string" ? JSON.stringify(q) : typeof q == "number" ? "`" + q + "`" : 'something with type "' + typeof q + '"';
    }
    function He() {
      var q = Ne.H;
      return q === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), q;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var le = bm(), F = {
      d: {
        f: O,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: O,
        C: O,
        L: O,
        m: O,
        X: O,
        S: O,
        M: O
      },
      p: 0,
      findDOMNode: null
    }, k = Symbol.for("react.portal"), Ne = le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), Ya.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F, Ya.createPortal = function(q, N) {
      var fe = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!N || N.nodeType !== 1 && N.nodeType !== 9 && N.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return ie(q, N, null, fe);
    }, Ya.flushSync = function(q) {
      var N = Ne.T, fe = F.p;
      try {
        if (Ne.T = null, F.p = 2, q)
          return q();
      } finally {
        Ne.T = N, F.p = fe, F.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, Ya.preconnect = function(q, N) {
      typeof q == "string" && q ? N != null && typeof N != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        ve(N)
      ) : N != null && typeof N.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        ne(N.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        ne(q)
      ), typeof q == "string" && (N ? (N = N.crossOrigin, N = typeof N == "string" ? N === "use-credentials" ? N : "" : void 0) : N = null, F.d.C(q, N));
    }, Ya.prefetchDNS = function(q) {
      if (typeof q != "string" || !q)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          ne(q)
        );
      else if (1 < arguments.length) {
        var N = arguments[1];
        typeof N == "object" && N.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          ve(N)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          ve(N)
        );
      }
      typeof q == "string" && F.d.D(q);
    }, Ya.preinit = function(q, N) {
      if (typeof q == "string" && q ? N == null || typeof N != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        ve(N)
      ) : N.as !== "style" && N.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        ve(N.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        ne(q)
      ), typeof q == "string" && N && typeof N.as == "string") {
        var fe = N.as, Je = z(fe, N.crossOrigin), _t = typeof N.integrity == "string" ? N.integrity : void 0, rt = typeof N.fetchPriority == "string" ? N.fetchPriority : void 0;
        fe === "style" ? F.d.S(
          q,
          typeof N.precedence == "string" ? N.precedence : void 0,
          {
            crossOrigin: Je,
            integrity: _t,
            fetchPriority: rt
          }
        ) : fe === "script" && F.d.X(q, {
          crossOrigin: Je,
          integrity: _t,
          fetchPriority: rt,
          nonce: typeof N.nonce == "string" ? N.nonce : void 0
        });
      }
    }, Ya.preinitModule = function(q, N) {
      var fe = "";
      if (typeof q == "string" && q || (fe += " The `href` argument encountered was " + ne(q) + "."), N !== void 0 && typeof N != "object" ? fe += " The `options` argument encountered was " + ne(N) + "." : N && "as" in N && N.as !== "script" && (fe += " The `as` option encountered was " + ve(N.as) + "."), fe)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          fe
        );
      else
        switch (fe = N && typeof N.as == "string" ? N.as : "script", fe) {
          case "script":
            break;
          default:
            fe = ve(fe), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              fe,
              q
            );
        }
      typeof q == "string" && (typeof N == "object" && N !== null ? (N.as == null || N.as === "script") && (fe = z(
        N.as,
        N.crossOrigin
      ), F.d.M(q, {
        crossOrigin: fe,
        integrity: typeof N.integrity == "string" ? N.integrity : void 0,
        nonce: typeof N.nonce == "string" ? N.nonce : void 0
      })) : N == null && F.d.M(q));
    }, Ya.preload = function(q, N) {
      var fe = "";
      if (typeof q == "string" && q || (fe += " The `href` argument encountered was " + ne(q) + "."), N == null || typeof N != "object" ? fe += " The `options` argument encountered was " + ne(N) + "." : typeof N.as == "string" && N.as || (fe += " The `as` option encountered was " + ne(N.as) + "."), fe && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        fe
      ), typeof q == "string" && typeof N == "object" && N !== null && typeof N.as == "string") {
        fe = N.as;
        var Je = z(
          fe,
          N.crossOrigin
        );
        F.d.L(q, fe, {
          crossOrigin: Je,
          integrity: typeof N.integrity == "string" ? N.integrity : void 0,
          nonce: typeof N.nonce == "string" ? N.nonce : void 0,
          type: typeof N.type == "string" ? N.type : void 0,
          fetchPriority: typeof N.fetchPriority == "string" ? N.fetchPriority : void 0,
          referrerPolicy: typeof N.referrerPolicy == "string" ? N.referrerPolicy : void 0,
          imageSrcSet: typeof N.imageSrcSet == "string" ? N.imageSrcSet : void 0,
          imageSizes: typeof N.imageSizes == "string" ? N.imageSizes : void 0,
          media: typeof N.media == "string" ? N.media : void 0
        });
      }
    }, Ya.preloadModule = function(q, N) {
      var fe = "";
      typeof q == "string" && q || (fe += " The `href` argument encountered was " + ne(q) + "."), N !== void 0 && typeof N != "object" ? fe += " The `options` argument encountered was " + ne(N) + "." : N && "as" in N && typeof N.as != "string" && (fe += " The `as` option encountered was " + ne(N.as) + "."), fe && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        fe
      ), typeof q == "string" && (N ? (fe = z(
        N.as,
        N.crossOrigin
      ), F.d.m(q, {
        as: typeof N.as == "string" && N.as !== "script" ? N.as : void 0,
        crossOrigin: fe,
        integrity: typeof N.integrity == "string" ? N.integrity : void 0
      })) : F.d.m(q));
    }, Ya.requestFormReset = function(q) {
      F.d.r(q);
    }, Ya.unstable_batchedUpdates = function(q, N) {
      return q(N);
    }, Ya.useFormState = function(q, N, fe) {
      return He().useFormState(q, N, fe);
    }, Ya.useFormStatus = function() {
      return He().useHostTransitionStatus();
    }, Ya.version = "19.2.4", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Ya;
}
var V2;
function F2() {
  if (V2) return Jv.exports;
  V2 = 1;
  function O() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
      } catch (L) {
        console.error(L);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (O(), Jv.exports = _T()) : Jv.exports = MT(), Jv.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Z2;
function CT() {
  if (Z2) return v0;
  Z2 = 1;
  var O = W2(), L = bm(), ie = F2();
  function z(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ne(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function ve(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function He(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function le(l) {
    if (l.tag === 31) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function F(l) {
    if (ve(l) !== l)
      throw Error(z(188));
  }
  function k(l) {
    var n = l.alternate;
    if (!n) {
      if (n = ve(l), n === null) throw Error(z(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (c = s.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return F(s), l;
          if (r === c) return F(s), n;
          r = r.sibling;
        }
        throw Error(z(188));
      }
      if (u.return !== c.return) u = s, c = r;
      else {
        for (var m = !1, v = s.child; v; ) {
          if (v === u) {
            m = !0, u = s, c = r;
            break;
          }
          if (v === c) {
            m = !0, c = s, u = r;
            break;
          }
          v = v.sibling;
        }
        if (!m) {
          for (v = r.child; v; ) {
            if (v === u) {
              m = !0, u = r, c = s;
              break;
            }
            if (v === c) {
              m = !0, c = r, u = s;
              break;
            }
            v = v.sibling;
          }
          if (!m) throw Error(z(189));
        }
      }
      if (u.alternate !== c) throw Error(z(190));
    }
    if (u.tag !== 3) throw Error(z(188));
    return u.stateNode.current === u ? l : n;
  }
  function Ne(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = Ne(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var q = Object.assign, N = Symbol.for("react.element"), fe = Symbol.for("react.transitional.element"), Je = Symbol.for("react.portal"), _t = Symbol.for("react.fragment"), rt = Symbol.for("react.strict_mode"), nt = Symbol.for("react.profiler"), Al = Symbol.for("react.consumer"), xt = Symbol.for("react.context"), Kt = Symbol.for("react.forward_ref"), tl = Symbol.for("react.suspense"), il = Symbol.for("react.suspense_list"), Me = Symbol.for("react.memo"), Ke = Symbol.for("react.lazy"), Rt = Symbol.for("react.activity"), he = Symbol.for("react.memo_cache_sentinel"), Bt = Symbol.iterator;
  function Se(l) {
    return l === null || typeof l != "object" ? null : (l = Bt && l[Bt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ge = Symbol.for("react.client.reference");
  function Qt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ge ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case _t:
        return "Fragment";
      case nt:
        return "Profiler";
      case rt:
        return "StrictMode";
      case tl:
        return "Suspense";
      case il:
        return "SuspenseList";
      case Rt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Je:
          return "Portal";
        case xt:
          return l.displayName || "Context";
        case Al:
          return (l._context.displayName || "Context") + ".Consumer";
        case Kt:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Me:
          return n = l.displayName || null, n !== null ? n : Qt(l.type) || "Memo";
        case Ke:
          n = l._payload, l = l._init;
          try {
            return Qt(l(n));
          } catch {
          }
      }
    return null;
  }
  var qt = Array.isArray, M = L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ae = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, be = [], Re = -1;
  function S(l) {
    return { current: l };
  }
  function x(l) {
    0 > Re || (l.current = be[Re], be[Re] = null, Re--);
  }
  function P(l, n) {
    Re++, be[Re] = l.current, l.current = n;
  }
  var I = S(null), Te = S(null), Le = S(null), ze = S(null);
  function Vt(l, n) {
    switch (P(Le, n), P(Te, l), P(I, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? Ng(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = Ng(n), l = rp(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    x(I), P(I, l);
  }
  function yt() {
    x(I), x(Te), x(Le);
  }
  function wa(l) {
    l.memoizedState !== null && P(ze, l);
    var n = I.current, u = rp(n, l.type);
    n !== u && (P(Te, l), P(I, u));
  }
  function se(l) {
    Te.current === l && (x(I), x(Te)), ze.current === l && (x(ze), Dr._currentValue = ae);
  }
  var _i, Mi;
  function Ga(l) {
    if (_i === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        _i = n && n[1] || "", Mi = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + _i + l + Mi;
  }
  var cu = !1;
  function pt(l, n) {
    if (!l || cu) return "";
    cu = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var $ = function() {
                throw Error();
              };
              if (Object.defineProperty($.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct($, []);
                } catch (Q) {
                  var Y = Q;
                }
                Reflect.construct(l, [], $);
              } else {
                try {
                  $.call();
                } catch (Q) {
                  Y = Q;
                }
                l.call($.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Q) {
                Y = Q;
              }
              ($ = l()) && typeof $.catch == "function" && $.catch(function() {
              });
            }
          } catch (Q) {
            if (Q && Y && typeof Q.stack == "string")
              return [Q.stack, Y.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = c.DetermineComponentFrameRoot(), m = r[0], v = r[1];
      if (m && v) {
        var A = m.split(`
`), B = v.split(`
`);
        for (s = c = 0; c < A.length && !A[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; s < B.length && !B[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (c === A.length || s === B.length)
          for (c = A.length - 1, s = B.length - 1; 1 <= c && 0 <= s && A[c] !== B[s]; )
            s--;
        for (; 1 <= c && 0 <= s; c--, s--)
          if (A[c] !== B[s]) {
            if (c !== 1 || s !== 1)
              do
                if (c--, s--, 0 > s || A[c] !== B[s]) {
                  var V = `
` + A[c].replace(" at new ", " at ");
                  return l.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", l.displayName)), V;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      cu = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Ga(u) : "";
  }
  function ta(l, n) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ga(l.type);
      case 16:
        return Ga("Lazy");
      case 13:
        return l.child !== n && n !== null ? Ga("Suspense Fallback") : Ga("Suspense");
      case 19:
        return Ga("SuspenseList");
      case 0:
      case 15:
        return pt(l.type, !1);
      case 11:
        return pt(l.type.render, !1);
      case 1:
        return pt(l.type, !0);
      case 31:
        return Ga("Activity");
      default:
        return "";
    }
  }
  function Sc(l) {
    try {
      var n = "", u = null;
      do
        n += ta(l, u), u = l, l = l.return;
      while (l);
      return n;
    } catch (c) {
      return `
Error generating stack: ` + c.message + `
` + c.stack;
    }
  }
  var ds = Object.prototype.hasOwnProperty, me = O.unstable_scheduleCallback, Ci = O.unstable_cancelCallback, ou = O.unstable_shouldYield, bc = O.unstable_requestPaint, vl = O.unstable_now, Pr = O.unstable_getCurrentPriorityLevel, Uo = O.unstable_ImmediatePriority, Ho = O.unstable_UserBlockingPriority, Un = O.unstable_NormalPriority, ed = O.unstable_LowPriority, No = O.unstable_IdlePriority, hs = O.log, Ec = O.unstable_setDisableYieldValue, hn = null, Ol = null;
  function La(l) {
    if (typeof hs == "function" && Ec(l), Ol && typeof Ol.setStrictMode == "function")
      try {
        Ol.setStrictMode(hn, l);
      } catch {
      }
  }
  var Hl = Math.clz32 ? Math.clz32 : U, Ui = Math.log, g = Math.LN2;
  function U(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Ui(l) / g | 0) | 0;
  }
  var te = 256, ue = 262144, ye = 4194304;
  function Ce(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
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
        return 64;
      case 128:
        return 128;
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
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function pe(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var s = 0, r = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var v = c & 134217727;
    return v !== 0 ? (c = v & ~r, c !== 0 ? s = Ce(c) : (m &= v, m !== 0 ? s = Ce(m) : u || (u = v & ~l, u !== 0 && (s = Ce(u))))) : (v = c & ~r, v !== 0 ? s = Ce(v) : m !== 0 ? s = Ce(m) : u || (u = c & ~l, u !== 0 && (s = Ce(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function tt(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function Xe(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
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
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function la() {
    var l = ye;
    return ye <<= 1, (ye & 62914560) === 0 && (ye = 4194304), l;
  }
  function mn(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function Hi(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function jo(l, n, u, c, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var v = l.entanglements, A = l.expirationTimes, B = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var V = 31 - Hl(u), $ = 1 << V;
      v[V] = 0, A[V] = -1;
      var Y = B[V];
      if (Y !== null)
        for (B[V] = null, V = 0; V < Y.length; V++) {
          var Q = Y[V];
          Q !== null && (Q.lane &= -536870913);
        }
      u &= ~$;
    }
    c !== 0 && ms(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function ms(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Hl(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 261930;
  }
  function fu(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Hl(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function Xa(l, n) {
    var u = n & -n;
    return u = (u & 42) !== 0 ? 1 : td(u), (u & (l.suspendedLanes | n)) !== 0 ? 0 : u;
  }
  function td(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Em(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ld() {
    var l = Z.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Rr(l.type));
  }
  function Tm(l, n) {
    var u = Z.p;
    try {
      return Z.p = l, n();
    } finally {
      Z.p = u;
    }
  }
  var Hn = Math.random().toString(36).slice(2), Mt = "__reactFiber$" + Hn, ra = "__reactProps$" + Hn, Ni = "__reactContainer$" + Hn, ad = "__reactEvents$" + Hn, Am = "__reactListeners$" + Hn, E0 = "__reactHandles$" + Hn, Om = "__reactResources$" + Hn, su = "__reactMarker$" + Hn;
  function nd(l) {
    delete l[Mt], delete l[ra], delete l[ad], delete l[Am], delete l[E0];
  }
  function Tc(l) {
    var n = l[Mt];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Ni] || u[Mt]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = Pn(l); l !== null; ) {
            if (u = l[Mt]) return u;
            l = Pn(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Ac(l) {
    if (l = l[Mt] || l[Ni]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function xo(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(z(33));
  }
  function Oc(l) {
    var n = l[Om];
    return n || (n = l[Om] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Tt(l) {
    l[su] = !0;
  }
  var zc = /* @__PURE__ */ new Set(), ji = {};
  function xi(l, n) {
    ru(l, n), ru(l + "Capture", n);
  }
  function ru(l, n) {
    for (ji[l] = n, l = 0; l < n.length; l++)
      zc.add(n[l]);
  }
  var ud = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), id = {}, Bo = {};
  function qo(l) {
    return ds.call(Bo, l) ? !0 : ds.call(id, l) ? !1 : ud.test(l) ? Bo[l] = !0 : (id[l] = !0, !1);
  }
  function Yo(l, n, u) {
    if (qo(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function cd(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function Pu(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  function Qa(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function od(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function zm(l, n, u) {
    var c = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    );
    if (!l.hasOwnProperty(n) && typeof c < "u" && typeof c.get == "function" && typeof c.set == "function") {
      var s = c.get, r = c.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(m) {
          u = "" + m, r.call(this, m);
        }
      }), Object.defineProperty(l, n, {
        enumerable: c.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(m) {
          u = "" + m;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function fd(l) {
    if (!l._valueTracker) {
      var n = od(l) ? "checked" : "value";
      l._valueTracker = zm(
        l,
        n,
        "" + l[n]
      );
    }
  }
  function Dm(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = od(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function ys(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var $v = /[\n"\\]/g;
  function Va(l) {
    return l.replace(
      $v,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ps(l, n, u, c, s, r, m, v) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Qa(n)) : l.value !== "" + Qa(n) && (l.value = "" + Qa(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? Dc(l, m, Qa(n)) : u != null ? Dc(l, m, Qa(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? l.name = "" + Qa(v) : l.removeAttribute("name");
  }
  function gs(l, n, u, c, s, r, m, v) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null)) {
        fd(l);
        return;
      }
      u = u != null ? "" + Qa(u) : "", n = n != null ? "" + Qa(n) : u, v || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = v ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), fd(l);
  }
  function Dc(l, n, u) {
    n === "number" && ys(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function wo(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Qa(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, c && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Rm(l, n, u) {
    if (n != null && (n = "" + Qa(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Qa(u) : "";
  }
  function _m(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(z(92));
        if (qt(c)) {
          if (1 < c.length) throw Error(z(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = Qa(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c), fd(l);
  }
  function du(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var T0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function A0(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || T0.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function O0(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(z(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in n)
        c = n[s], n.hasOwnProperty(s) && u[s] !== c && A0(l, s, c);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && A0(l, r, n[r]);
  }
  function Mm(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var kv = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), vs = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function yn(l) {
    return vs.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Nn() {
  }
  var sd = null;
  function rd(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var hu = null, Rc = null;
  function Ss(l) {
    var n = Ac(l);
    if (n && (l = n.stateNode)) {
      var u = l[ra] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (ps(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Va(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var s = c[ra] || null;
                if (!s) throw Error(z(90));
                ps(
                  c,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && Dm(c);
          }
          break e;
        case "textarea":
          Rm(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && wo(l, !!u.multiple, n, !1);
      }
    }
  }
  var Go = !1;
  function Cm(l, n, u) {
    if (Go) return l(n, u);
    Go = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (Go = !1, (hu !== null || Rc !== null) && (Af(), hu && (n = hu, l = Rc, Rc = hu = null, Ss(n), l)))
        for (n = 0; n < l.length; n++) Ss(l[n]);
    }
  }
  function Nl(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[ra] || null;
    if (c === null) return null;
    u = c[n];
    e: switch (n) {
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
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        z(231, n, typeof u)
      );
    return u;
  }
  var ei = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), bs = !1;
  if (ei)
    try {
      var Lo = {};
      Object.defineProperty(Lo, "passive", {
        get: function() {
          bs = !0;
        }
      }), window.addEventListener("test", Lo, Lo), window.removeEventListener("test", Lo, Lo);
    } catch {
      bs = !1;
    }
  var ti = null, Um = null, dd = null;
  function Hm() {
    if (dd) return dd;
    var l, n = Um, u = n.length, c, s = "value" in ti ? ti.value : ti.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && n[u - c] === s[r - c]; c++) ;
    return dd = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function hd(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Es() {
    return !0;
  }
  function z0() {
    return !1;
  }
  function $l(l) {
    function n(u, c, s, r, m) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var v in l)
        l.hasOwnProperty(v) && (u = l[v], this[v] = u ? u(r) : r[v]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? Es : z0, this.isPropagationStopped = z0, this;
    }
    return q(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Es);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Es);
      },
      persist: function() {
      },
      isPersistent: Es
    }), n;
  }
  var Bi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ts = $l(Bi), Xo = q({}, Bi, { view: 0, detail: 0 }), Wv = $l(Xo), Nm, jm, As, md = q({}, Xo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: pn,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== As && (As && l.type === "mousemove" ? (Nm = l.screenX - As.screenX, jm = l.screenY - As.screenY) : jm = Nm = 0, As = l), Nm);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : jm;
    }
  }), Qo = $l(md), D0 = q({}, md, { dataTransfer: 0 }), R0 = $l(D0), _0 = q({}, Xo, { relatedTarget: 0 }), yd = $l(_0), xm = q({}, Bi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), M0 = $l(xm), _c = q({}, Bi, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Mc = $l(_c), jn = q({}, Bi, { data: 0 }), C0 = $l(jn), Bm = {
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
  }, mu = {
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
  }, U0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function xn(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = U0[l]) ? !!n[l] : !1;
  }
  function pn() {
    return xn;
  }
  var pd = q({}, Xo, {
    key: function(l) {
      if (l.key) {
        var n = Bm[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = hd(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? mu[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: pn,
    charCode: function(l) {
      return l.type === "keypress" ? hd(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? hd(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), gd = $l(pd), qm = q({}, md, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Bn = $l(qm), Fv = q({}, Xo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: pn
  }), H0 = $l(Fv), N0 = q({}, Bi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Iv = $l(N0), Ym = q({}, md, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Pv = $l(Ym), j0 = q({}, Bi, {
    newState: 0,
    oldState: 0
  }), wm = $l(j0), vd = [9, 13, 27, 32], Vo = ei && "CompositionEvent" in window, Cc = null;
  ei && "documentMode" in document && (Cc = document.documentMode);
  var aa = ei && "TextEvent" in window && !Cc, Gm = ei && (!Vo || Cc && 8 < Cc && 11 >= Cc), Os = " ", qi = !1;
  function Sd(l, n) {
    switch (l) {
      case "keyup":
        return vd.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Lm(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Uc = !1;
  function x0(l, n) {
    switch (l) {
      case "compositionend":
        return Lm(n);
      case "keypress":
        return n.which !== 32 ? null : (qi = !0, Os);
      case "textInput":
        return l = n.data, l === Os && qi ? null : l;
      default:
        return null;
    }
  }
  function eS(l, n) {
    if (Uc)
      return l === "compositionend" || !Vo && Sd(l, n) ? (l = Hm(), dd = Um = ti = null, Uc = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Gm && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Xm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function yu(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Xm[l.type] : n === "textarea";
  }
  function Qm(l, n, u, c) {
    hu ? Rc ? Rc.push(c) : Rc = [c] : hu = c, n = br(n, "onChange"), 0 < n.length && (u = new Ts(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var Hc = null, Yi = null;
  function Nc(l) {
    Cg(l, 0);
  }
  function Zo(l) {
    var n = xo(l);
    if (Dm(n)) return l;
  }
  function Vm(l, n) {
    if (l === "change") return n;
  }
  var bd = !1;
  if (ei) {
    var da;
    if (ei) {
      var qn = "oninput" in document;
      if (!qn) {
        var Zm = document.createElement("div");
        Zm.setAttribute("oninput", "return;"), qn = typeof Zm.oninput == "function";
      }
      da = qn;
    } else da = !1;
    bd = da && (!document.documentMode || 9 < document.documentMode);
  }
  function Ed() {
    Hc && (Hc.detachEvent("onpropertychange", Td), Yi = Hc = null);
  }
  function Td(l) {
    if (l.propertyName === "value" && Zo(Yi)) {
      var n = [];
      Qm(
        n,
        Yi,
        l,
        rd(l)
      ), Cm(Nc, n);
    }
  }
  function B0(l, n, u) {
    l === "focusin" ? (Ed(), Hc = n, Yi = u, Hc.attachEvent("onpropertychange", Td)) : l === "focusout" && Ed();
  }
  function q0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Zo(Yi);
  }
  function wi(l, n) {
    if (l === "click") return Zo(n);
  }
  function jc(l, n) {
    if (l === "input" || l === "change")
      return Zo(n);
  }
  function Y0(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var na = typeof Object.is == "function" ? Object.is : Y0;
  function gn(l, n) {
    if (na(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!ds.call(n, s) || !na(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function Jm(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Km(l, n) {
    var u = Jm(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Jm(u);
    }
  }
  function xc(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? xc(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Gi(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = ys(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = ys(l.document);
    }
    return n;
  }
  function zs(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var Ds = ei && "documentMode" in document && 11 >= document.documentMode, Li = null, Jo = null, vn = null, Yn = !1;
  function Ad(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Yn || Li == null || Li !== ys(c) || (c = Li, "selectionStart" in c && zs(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), vn && gn(vn, c) || (vn = c, c = br(Jo, "onSelect"), 0 < c.length && (n = new Ts(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = Li)));
  }
  function li(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var wn = {
    animationend: li("Animation", "AnimationEnd"),
    animationiteration: li("Animation", "AnimationIteration"),
    animationstart: li("Animation", "AnimationStart"),
    transitionrun: li("Transition", "TransitionRun"),
    transitionstart: li("Transition", "TransitionStart"),
    transitioncancel: li("Transition", "TransitionCancel"),
    transitionend: li("Transition", "TransitionEnd")
  }, Ko = {}, Xi = {};
  ei && (Xi = document.createElement("div").style, "AnimationEvent" in window || (delete wn.animationend.animation, delete wn.animationiteration.animation, delete wn.animationstart.animation), "TransitionEvent" in window || delete wn.transitionend.transition);
  function St(l) {
    if (Ko[l]) return Ko[l];
    if (!wn[l]) return l;
    var n = wn[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in Xi)
        return Ko[l] = n[u];
    return l;
  }
  var Rs = St("animationend"), $m = St("animationiteration"), Od = St("animationstart"), Bc = St("transitionrun"), _s = St("transitionstart"), pu = St("transitioncancel"), w0 = St("transitionend"), gu = /* @__PURE__ */ new Map(), $o = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  $o.push("scrollEnd");
  function ha(l, n) {
    gu.set(l, n), xi(n, [l]);
  }
  var qc = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, $t = [], jl = 0, Sn = 0;
  function Za() {
    for (var l = jl, n = Sn = jl = 0; n < l; ) {
      var u = $t[n];
      $t[n++] = null;
      var c = $t[n];
      $t[n++] = null;
      var s = $t[n];
      $t[n++] = null;
      var r = $t[n];
      if ($t[n++] = null, c !== null && s !== null) {
        var m = c.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
      }
      r !== 0 && zd(u, s, r);
    }
  }
  function Ja(l, n, u, c) {
    $t[jl++] = l, $t[jl++] = n, $t[jl++] = u, $t[jl++] = c, Sn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function bn(l, n, u, c) {
    return Ja(l, n, u, c), Ms(l);
  }
  function ai(l, n) {
    return Ja(l, null, null, n), Ms(l);
  }
  function zd(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Hl(u), l = r.hiddenUpdates, c = l[s], c === null ? l[s] = [n] : c.push(n), n.lane = u | 536870912), r) : null;
  }
  function Ms(l) {
    if (50 < Tf)
      throw Tf = 0, rr = null, Error(z(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ma = {};
  function G0(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function cl(l, n, u, c) {
    return new G0(l, n, u, c);
  }
  function Yc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function ni(l, n) {
    var u = l.alternate;
    return u === null ? (u = cl(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function km(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function Dd(l, n, u, c, s, r) {
    var m = 0;
    if (c = l, typeof l == "function") Yc(l) && (m = 1);
    else if (typeof l == "string")
      m = vp(
        l,
        u,
        I.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case Rt:
          return l = cl(31, u, n, s), l.elementType = Rt, l.lanes = r, l;
        case _t:
          return ui(u.children, s, r, n);
        case rt:
          m = 8, s |= 24;
          break;
        case nt:
          return l = cl(12, u, n, s | 2), l.elementType = nt, l.lanes = r, l;
        case tl:
          return l = cl(13, u, n, s), l.elementType = tl, l.lanes = r, l;
        case il:
          return l = cl(19, u, n, s), l.elementType = il, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case xt:
                m = 10;
                break e;
              case Al:
                m = 9;
                break e;
              case Kt:
                m = 11;
                break e;
              case Me:
                m = 14;
                break e;
              case Ke:
                m = 16, c = null;
                break e;
            }
          m = 29, u = Error(
            z(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = cl(m, u, n, s), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function ui(l, n, u, c) {
    return l = cl(7, l, c, n), l.lanes = u, l;
  }
  function ko(l, n, u) {
    return l = cl(6, l, null, n), l.lanes = u, l;
  }
  function Wm(l) {
    var n = cl(18, null, null, 0);
    return n.stateNode = l, n;
  }
  function Rd(l, n, u) {
    return n = cl(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var Fm = /* @__PURE__ */ new WeakMap();
  function Ka(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = Fm.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: Sc(n)
      }, Fm.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: Sc(n)
    };
  }
  var $a = [], wc = 0, Cs = null, dl = 0, _a = [], ya = 0, Gn = null, Ma = 1, Ln = "";
  function En(l, n) {
    $a[wc++] = dl, $a[wc++] = Cs, Cs = l, dl = n;
  }
  function Im(l, n, u) {
    _a[ya++] = Ma, _a[ya++] = Ln, _a[ya++] = Gn, Gn = l;
    var c = Ma;
    l = Ln;
    var s = 32 - Hl(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - Hl(n) + s;
    if (30 < r) {
      var m = s - s % 5;
      r = (c & (1 << m) - 1).toString(32), c >>= m, s -= m, Ma = 1 << 32 - Hl(n) + s | u << s | c, Ln = r + l;
    } else
      Ma = 1 << r | u << s | c, Ln = l;
  }
  function Wo(l) {
    l.return !== null && (En(l, 1), Im(l, 1, 0));
  }
  function _d(l) {
    for (; l === Cs; )
      Cs = $a[--wc], $a[wc] = null, dl = $a[--wc], $a[wc] = null;
    for (; l === Gn; )
      Gn = _a[--ya], _a[ya] = null, Ln = _a[--ya], _a[ya] = null, Ma = _a[--ya], _a[ya] = null;
  }
  function Us(l, n) {
    _a[ya++] = Ma, _a[ya++] = Ln, _a[ya++] = Gn, Ma = n.id, Ln = n.overflow, Gn = l;
  }
  var xl = null, Yt = null, it = !1, vu = null, zl = !1, Su = Error(z(519));
  function Tn(l) {
    var n = Error(
      z(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Io(Ka(n, l)), Su;
  }
  function Hs(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[Mt] = l, n[ra] = c, u) {
      case "dialog":
        ut("cancel", n), ut("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        ut("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < _f.length; u++)
          ut(_f[u], n);
        break;
      case "source":
        ut("error", n);
        break;
      case "img":
      case "image":
      case "link":
        ut("error", n), ut("load", n);
        break;
      case "details":
        ut("toggle", n);
        break;
      case "input":
        ut("invalid", n), gs(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        );
        break;
      case "select":
        ut("invalid", n);
        break;
      case "textarea":
        ut("invalid", n), _m(n, c.value, c.defaultValue, c.children);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || cp(n.textContent, u) ? (c.popover != null && (ut("beforetoggle", n), ut("toggle", n)), c.onScroll != null && ut("scroll", n), c.onScrollEnd != null && ut("scrollend", n), c.onClick != null && (n.onclick = Nn), n = !0) : n = !1, n || Tn(l, !0);
  }
  function Fo(l) {
    for (xl = l.return; xl; )
      switch (xl.tag) {
        case 5:
        case 31:
        case 13:
          zl = !1;
          return;
        case 27:
        case 3:
          zl = !0;
          return;
        default:
          xl = xl.return;
      }
  }
  function bu(l) {
    if (l !== xl) return !1;
    if (!it) return Fo(l), it = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Cf(l.type, l.memoizedProps)), u = !u), u && Yt && Tn(l), Fo(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(z(317));
      Yt = Uh(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(z(317));
      Yt = Uh(l);
    } else
      n === 27 ? (n = Yt, In(l.type) ? (l = Ar, Ar = null, Yt = l) : Yt = n) : Yt = xl ? za(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Qi() {
    Yt = xl = null, it = !1;
  }
  function Pm() {
    var l = vu;
    return l !== null && (nl === null ? nl = l : nl.push.apply(
      nl,
      l
    ), vu = null), l;
  }
  function Io(l) {
    vu === null ? vu = [l] : vu.push(l);
  }
  var Md = S(null), ii = null, Xn = null;
  function pa(l, n, u) {
    P(Md, n._currentValue), n._currentValue = u;
  }
  function Qn(l) {
    l._currentValue = Md.current, x(Md);
  }
  function Cd(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function Eu(l, n, u, c) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var m = s.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var v = r;
          r = s;
          for (var A = 0; A < n.length; A++)
            if (v.context === n[A]) {
              r.lanes |= u, v = r.alternate, v !== null && (v.lanes |= u), Cd(
                r.return,
                u,
                l
              ), c || (m = null);
              break e;
            }
          r = v.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(z(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), Cd(m, u, l), m = null;
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === l) {
            m = null;
            break;
          }
          if (s = m.sibling, s !== null) {
            s.return = m.return, m = s;
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function Bl(l, n, u, c) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(z(387));
        if (m = m.memoizedProps, m !== null) {
          var v = s.type;
          na(s.pendingProps.value, m.value) || (l !== null ? l.push(v) : l = [v]);
        }
      } else if (s === ze.current) {
        if (m = s.alternate, m === null) throw Error(z(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(Dr) : l = [Dr]);
      }
      s = s.return;
    }
    l !== null && Eu(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function Gc(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!na(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function qe(l) {
    ii = l, Xn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function W(l) {
    return Ns(ii, l);
  }
  function ci(l, n) {
    return ii === null && qe(l), Ns(l, n);
  }
  function Ns(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, Xn === null) {
      if (l === null) throw Error(z(308));
      Xn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else Xn = Xn.next = n;
    return u;
  }
  var ol = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, ey = O.unstable_scheduleCallback, ty = O.unstable_NormalPriority, hl = {
    $$typeof: xt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function js() {
    return {
      controller: new ol(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function xs(l) {
    l.refCount--, l.refCount === 0 && ey(ty, function() {
      l.controller.abort();
    });
  }
  var Lc = null, Bs = 0, Vi = 0, Sl = null;
  function At(l, n) {
    if (Lc === null) {
      var u = Lc = [];
      Bs = 0, Vi = Ah(), Sl = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return Bs++, n.then(qs, qs), n;
  }
  function qs() {
    if (--Bs === 0 && Lc !== null) {
      Sl !== null && (Sl.status = "fulfilled");
      var l = Lc;
      Lc = null, Vi = 0, Sl = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function Ys(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (c.status = "rejected", c.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), c;
  }
  var oi = M.S;
  M.S = function(l, n) {
    $y = vl(), typeof n == "object" && n !== null && typeof n.then == "function" && At(l, n), oi !== null && oi(l, n);
  };
  var ka = S(null);
  function Wa() {
    var l = ka.current;
    return l !== null ? l : Ut.pooledCache;
  }
  function Po(l, n) {
    n === null ? P(ka, ka.current) : P(ka, n.pool);
  }
  function Xc() {
    var l = Wa();
    return l === null ? null : { parent: hl._currentValue, pool: l };
  }
  var Zi = Error(z(460)), Qc = Error(z(474)), ef = Error(z(542)), Vc = { then: function() {
  } };
  function ly(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function ay(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Nn, Nn), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, Ud(l), l;
      default:
        if (typeof n.status == "string") n.then(Nn, Nn);
        else {
          if (l = Ut, l !== null && 100 < l.shellSuspendCounter)
            throw Error(z(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, Ud(l), l;
        }
        throw Ki = n, Zi;
    }
  }
  function Ji(l) {
    try {
      var n = l._init;
      return n(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Ki = u, Zi) : u;
    }
  }
  var Ki = null;
  function ny() {
    if (Ki === null) throw Error(z(459));
    var l = Ki;
    return Ki = null, l;
  }
  function Ud(l) {
    if (l === Zi || l === ef)
      throw Error(z(483));
  }
  var $i = null, Zc = 0;
  function ws(l) {
    var n = Zc;
    return Zc += 1, $i === null && ($i = []), ay($i, l, n);
  }
  function tf(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Gs(l, n) {
    throw n.$$typeof === N ? Error(z(525)) : (l = Object.prototype.toString.call(n), Error(
      z(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function L0(l) {
    function n(H, _) {
      if (l) {
        var j = H.deletions;
        j === null ? (H.deletions = [_], H.flags |= 16) : j.push(_);
      }
    }
    function u(H, _) {
      if (!l) return null;
      for (; _ !== null; )
        n(H, _), _ = _.sibling;
      return null;
    }
    function c(H) {
      for (var _ = /* @__PURE__ */ new Map(); H !== null; )
        H.key !== null ? _.set(H.key, H) : _.set(H.index, H), H = H.sibling;
      return _;
    }
    function s(H, _) {
      return H = ni(H, _), H.index = 0, H.sibling = null, H;
    }
    function r(H, _, j) {
      return H.index = j, l ? (j = H.alternate, j !== null ? (j = j.index, j < _ ? (H.flags |= 67108866, _) : j) : (H.flags |= 67108866, _)) : (H.flags |= 1048576, _);
    }
    function m(H) {
      return l && H.alternate === null && (H.flags |= 67108866), H;
    }
    function v(H, _, j, K) {
      return _ === null || _.tag !== 6 ? (_ = ko(j, H.mode, K), _.return = H, _) : (_ = s(_, j), _.return = H, _);
    }
    function A(H, _, j, K) {
      var Ae = j.type;
      return Ae === _t ? V(
        H,
        _,
        j.props.children,
        K,
        j.key
      ) : _ !== null && (_.elementType === Ae || typeof Ae == "object" && Ae !== null && Ae.$$typeof === Ke && Ji(Ae) === _.type) ? (_ = s(_, j.props), tf(_, j), _.return = H, _) : (_ = Dd(
        j.type,
        j.key,
        j.props,
        null,
        H.mode,
        K
      ), tf(_, j), _.return = H, _);
    }
    function B(H, _, j, K) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== j.containerInfo || _.stateNode.implementation !== j.implementation ? (_ = Rd(j, H.mode, K), _.return = H, _) : (_ = s(_, j.children || []), _.return = H, _);
    }
    function V(H, _, j, K, Ae) {
      return _ === null || _.tag !== 7 ? (_ = ui(
        j,
        H.mode,
        K,
        Ae
      ), _.return = H, _) : (_ = s(_, j), _.return = H, _);
    }
    function $(H, _, j) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return _ = ko(
          "" + _,
          H.mode,
          j
        ), _.return = H, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case fe:
            return j = Dd(
              _.type,
              _.key,
              _.props,
              null,
              H.mode,
              j
            ), tf(j, _), j.return = H, j;
          case Je:
            return _ = Rd(
              _,
              H.mode,
              j
            ), _.return = H, _;
          case Ke:
            return _ = Ji(_), $(H, _, j);
        }
        if (qt(_) || Se(_))
          return _ = ui(
            _,
            H.mode,
            j,
            null
          ), _.return = H, _;
        if (typeof _.then == "function")
          return $(H, ws(_), j);
        if (_.$$typeof === xt)
          return $(
            H,
            ci(H, _),
            j
          );
        Gs(H, _);
      }
      return null;
    }
    function Y(H, _, j, K) {
      var Ae = _ !== null ? _.key : null;
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return Ae !== null ? null : v(H, _, "" + j, K);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case fe:
            return j.key === Ae ? A(H, _, j, K) : null;
          case Je:
            return j.key === Ae ? B(H, _, j, K) : null;
          case Ke:
            return j = Ji(j), Y(H, _, j, K);
        }
        if (qt(j) || Se(j))
          return Ae !== null ? null : V(H, _, j, K, null);
        if (typeof j.then == "function")
          return Y(
            H,
            _,
            ws(j),
            K
          );
        if (j.$$typeof === xt)
          return Y(
            H,
            _,
            ci(H, j),
            K
          );
        Gs(H, j);
      }
      return null;
    }
    function Q(H, _, j, K, Ae) {
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return H = H.get(j) || null, v(_, H, "" + K, Ae);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case fe:
            return H = H.get(
              K.key === null ? j : K.key
            ) || null, A(_, H, K, Ae);
          case Je:
            return H = H.get(
              K.key === null ? j : K.key
            ) || null, B(_, H, K, Ae);
          case Ke:
            return K = Ji(K), Q(
              H,
              _,
              j,
              K,
              Ae
            );
        }
        if (qt(K) || Se(K))
          return H = H.get(j) || null, V(_, H, K, Ae, null);
        if (typeof K.then == "function")
          return Q(
            H,
            _,
            j,
            ws(K),
            Ae
          );
        if (K.$$typeof === xt)
          return Q(
            H,
            _,
            j,
            ci(_, K),
            Ae
          );
        Gs(_, K);
      }
      return null;
    }
    function de(H, _, j, K) {
      for (var Ae = null, ht = null, ge = _, Qe = _ = 0, ke = null; ge !== null && Qe < j.length; Qe++) {
        ge.index > Qe ? (ke = ge, ge = null) : ke = ge.sibling;
        var vt = Y(
          H,
          ge,
          j[Qe],
          K
        );
        if (vt === null) {
          ge === null && (ge = ke);
          break;
        }
        l && ge && vt.alternate === null && n(H, ge), _ = r(vt, _, Qe), ht === null ? Ae = vt : ht.sibling = vt, ht = vt, ge = ke;
      }
      if (Qe === j.length)
        return u(H, ge), it && En(H, Qe), Ae;
      if (ge === null) {
        for (; Qe < j.length; Qe++)
          ge = $(H, j[Qe], K), ge !== null && (_ = r(
            ge,
            _,
            Qe
          ), ht === null ? Ae = ge : ht.sibling = ge, ht = ge);
        return it && En(H, Qe), Ae;
      }
      for (ge = c(ge); Qe < j.length; Qe++)
        ke = Q(
          ge,
          H,
          Qe,
          j[Qe],
          K
        ), ke !== null && (l && ke.alternate !== null && ge.delete(
          ke.key === null ? Qe : ke.key
        ), _ = r(
          ke,
          _,
          Qe
        ), ht === null ? Ae = ke : ht.sibling = ke, ht = ke);
      return l && ge.forEach(function(tu) {
        return n(H, tu);
      }), it && En(H, Qe), Ae;
    }
    function _e(H, _, j, K) {
      if (j == null) throw Error(z(151));
      for (var Ae = null, ht = null, ge = _, Qe = _ = 0, ke = null, vt = j.next(); ge !== null && !vt.done; Qe++, vt = j.next()) {
        ge.index > Qe ? (ke = ge, ge = null) : ke = ge.sibling;
        var tu = Y(H, ge, vt.value, K);
        if (tu === null) {
          ge === null && (ge = ke);
          break;
        }
        l && ge && tu.alternate === null && n(H, ge), _ = r(tu, _, Qe), ht === null ? Ae = tu : ht.sibling = tu, ht = tu, ge = ke;
      }
      if (vt.done)
        return u(H, ge), it && En(H, Qe), Ae;
      if (ge === null) {
        for (; !vt.done; Qe++, vt = j.next())
          vt = $(H, vt.value, K), vt !== null && (_ = r(vt, _, Qe), ht === null ? Ae = vt : ht.sibling = vt, ht = vt);
        return it && En(H, Qe), Ae;
      }
      for (ge = c(ge); !vt.done; Qe++, vt = j.next())
        vt = Q(ge, H, Qe, vt.value, K), vt !== null && (l && vt.alternate !== null && ge.delete(vt.key === null ? Qe : vt.key), _ = r(vt, _, Qe), ht === null ? Ae = vt : ht.sibling = vt, ht = vt);
      return l && ge.forEach(function(Zg) {
        return n(H, Zg);
      }), it && En(H, Qe), Ae;
    }
    function Nt(H, _, j, K) {
      if (typeof j == "object" && j !== null && j.type === _t && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case fe:
            e: {
              for (var Ae = j.key; _ !== null; ) {
                if (_.key === Ae) {
                  if (Ae = j.type, Ae === _t) {
                    if (_.tag === 7) {
                      u(
                        H,
                        _.sibling
                      ), K = s(
                        _,
                        j.props.children
                      ), K.return = H, H = K;
                      break e;
                    }
                  } else if (_.elementType === Ae || typeof Ae == "object" && Ae !== null && Ae.$$typeof === Ke && Ji(Ae) === _.type) {
                    u(
                      H,
                      _.sibling
                    ), K = s(_, j.props), tf(K, j), K.return = H, H = K;
                    break e;
                  }
                  u(H, _);
                  break;
                } else n(H, _);
                _ = _.sibling;
              }
              j.type === _t ? (K = ui(
                j.props.children,
                H.mode,
                K,
                j.key
              ), K.return = H, H = K) : (K = Dd(
                j.type,
                j.key,
                j.props,
                null,
                H.mode,
                K
              ), tf(K, j), K.return = H, H = K);
            }
            return m(H);
          case Je:
            e: {
              for (Ae = j.key; _ !== null; ) {
                if (_.key === Ae)
                  if (_.tag === 4 && _.stateNode.containerInfo === j.containerInfo && _.stateNode.implementation === j.implementation) {
                    u(
                      H,
                      _.sibling
                    ), K = s(_, j.children || []), K.return = H, H = K;
                    break e;
                  } else {
                    u(H, _);
                    break;
                  }
                else n(H, _);
                _ = _.sibling;
              }
              K = Rd(j, H.mode, K), K.return = H, H = K;
            }
            return m(H);
          case Ke:
            return j = Ji(j), Nt(
              H,
              _,
              j,
              K
            );
        }
        if (qt(j))
          return de(
            H,
            _,
            j,
            K
          );
        if (Se(j)) {
          if (Ae = Se(j), typeof Ae != "function") throw Error(z(150));
          return j = Ae.call(j), _e(
            H,
            _,
            j,
            K
          );
        }
        if (typeof j.then == "function")
          return Nt(
            H,
            _,
            ws(j),
            K
          );
        if (j.$$typeof === xt)
          return Nt(
            H,
            _,
            ci(H, j),
            K
          );
        Gs(H, j);
      }
      return typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint" ? (j = "" + j, _ !== null && _.tag === 6 ? (u(H, _.sibling), K = s(_, j), K.return = H, H = K) : (u(H, _), K = ko(j, H.mode, K), K.return = H, H = K), m(H)) : u(H, _);
    }
    return function(H, _, j, K) {
      try {
        Zc = 0;
        var Ae = Nt(
          H,
          _,
          j,
          K
        );
        return $i = null, Ae;
      } catch (ge) {
        if (ge === Zi || ge === ef) throw ge;
        var ht = cl(29, ge, null, H.mode);
        return ht.lanes = K, ht.return = H, ht;
      } finally {
      }
    };
  }
  var ki = L0(!0), uy = L0(!1), fi = !1;
  function Ls(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Hd(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function si(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Fa(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (gt & 2) !== 0) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = Ms(l), zd(l, null, u), n;
    }
    return Ja(l, c, n, u), Ms(l);
  }
  function Wi(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, fu(l, u);
    }
  }
  function Nd(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var m = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = m : r = r.next = m, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var iy = !1;
  function Fi() {
    if (iy) {
      var l = Sl;
      if (l !== null) throw l;
    }
  }
  function Tu(l, n, u, c) {
    iy = !1;
    var s = l.updateQueue;
    fi = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, v = s.shared.pending;
    if (v !== null) {
      s.shared.pending = null;
      var A = v, B = A.next;
      A.next = null, m === null ? r = B : m.next = B, m = A;
      var V = l.alternate;
      V !== null && (V = V.updateQueue, v = V.lastBaseUpdate, v !== m && (v === null ? V.firstBaseUpdate = B : v.next = B, V.lastBaseUpdate = A));
    }
    if (r !== null) {
      var $ = s.baseState;
      m = 0, V = B = A = null, v = r;
      do {
        var Y = v.lane & -536870913, Q = Y !== v.lane;
        if (Q ? (lt & Y) === Y : (c & Y) === Y) {
          Y !== 0 && Y === Vi && (iy = !0), V !== null && (V = V.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          e: {
            var de = l, _e = v;
            Y = n;
            var Nt = u;
            switch (_e.tag) {
              case 1:
                if (de = _e.payload, typeof de == "function") {
                  $ = de.call(Nt, $, Y);
                  break e;
                }
                $ = de;
                break e;
              case 3:
                de.flags = de.flags & -65537 | 128;
              case 0:
                if (de = _e.payload, Y = typeof de == "function" ? de.call(Nt, $, Y) : de, Y == null) break e;
                $ = q({}, $, Y);
                break e;
              case 2:
                fi = !0;
            }
          }
          Y = v.callback, Y !== null && (l.flags |= 64, Q && (l.flags |= 8192), Q = s.callbacks, Q === null ? s.callbacks = [Y] : Q.push(Y));
        } else
          Q = {
            lane: Y,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, V === null ? (B = V = Q, A = $) : V = V.next = Q, m |= Y;
        if (v = v.next, v === null) {
          if (v = s.shared.pending, v === null)
            break;
          Q = v, v = Q.next, Q.next = null, s.lastBaseUpdate = Q, s.shared.pending = null;
        }
      } while (!0);
      V === null && (A = $), s.baseState = A, s.firstBaseUpdate = B, s.lastBaseUpdate = V, r === null && (s.shared.lanes = 0), Wn |= m, l.lanes = m, l.memoizedState = $;
    }
  }
  function jd(l, n) {
    if (typeof l != "function")
      throw Error(z(191, l));
    l.call(n);
  }
  function Ii(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        jd(u[l], n);
  }
  var Dl = S(null), Jc = S(0);
  function X0(l, n) {
    l = kn, P(Jc, l), P(Dl, n), kn = l | n.baseLanes;
  }
  function Xs() {
    P(Jc, kn), P(Dl, Dl.current);
  }
  function lf() {
    kn = Jc.current, x(Dl), x(Jc);
  }
  var ga = S(null), Ia = null;
  function Au(l) {
    var n = l.alternate;
    P(kt, kt.current & 1), P(ga, l), Ia === null && (n === null || Dl.current !== null || n.memoizedState !== null) && (Ia = l);
  }
  function af(l) {
    P(kt, kt.current), P(ga, l), Ia === null && (Ia = l);
  }
  function xd(l) {
    l.tag === 22 ? (P(kt, kt.current), P(ga, l), Ia === null && (Ia = l)) : Vn();
  }
  function Vn() {
    P(kt, kt.current), P(ga, ga.current);
  }
  function va(l) {
    x(ga), Ia === l && (Ia = null), x(kt);
  }
  var kt = S(0);
  function nf(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || Dn(u) || sc(u)))
          return n;
      } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Ou = 0, Ve = null, Ot = null, ml = null, Kc = !1, $c = !1, ri = !1, Qs = 0, uf = 0, Pi = null, Q0 = 0;
  function ll() {
    throw Error(z(321));
  }
  function di(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!na(l[u], n[u])) return !1;
    return !0;
  }
  function Vs(l, n, u, c, s, r) {
    return Ou = r, Ve = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, M.H = l === null || l.memoizedState === null ? F0 : Id, ri = !1, r = u(c, s), ri = !1, $c && (r = V0(
      n,
      u,
      c,
      s
    )), Bd(l), r;
  }
  function Bd(l) {
    M.H = Ps;
    var n = Ot !== null && Ot.next !== null;
    if (Ou = 0, ml = Ot = Ve = null, Kc = !1, uf = 0, Pi = null, n) throw Error(z(300));
    l === null || yl || (l = l.dependencies, l !== null && Gc(l) && (yl = !0));
  }
  function V0(l, n, u, c) {
    Ve = l;
    var s = 0;
    do {
      if ($c && (Pi = null), uf = 0, $c = !1, 25 <= s) throw Error(z(301));
      if (s += 1, ml = Ot = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      M.H = I0, r = n(u, c);
    } while ($c);
    return r;
  }
  function tS() {
    var l = M.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Wc(n) : n, l = l.useState()[0], (Ot !== null ? Ot.memoizedState : null) !== l && (Ve.flags |= 1024), n;
  }
  function qd() {
    var l = Qs !== 0;
    return Qs = 0, l;
  }
  function kc(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Zs(l) {
    if (Kc) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Kc = !1;
    }
    Ou = 0, ml = Ot = Ve = null, $c = !1, uf = Qs = 0, Pi = null;
  }
  function ql() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ml === null ? Ve.memoizedState = ml = l : ml = ml.next = l, ml;
  }
  function fl() {
    if (Ot === null) {
      var l = Ve.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = Ot.next;
    var n = ml === null ? Ve.memoizedState : ml.next;
    if (n !== null)
      ml = n, Ot = l;
    else {
      if (l === null)
        throw Ve.alternate === null ? Error(z(467)) : Error(z(310));
      Ot = l, l = {
        memoizedState: Ot.memoizedState,
        baseState: Ot.baseState,
        baseQueue: Ot.baseQueue,
        queue: Ot.queue,
        next: null
      }, ml === null ? Ve.memoizedState = ml = l : ml = ml.next = l;
    }
    return ml;
  }
  function Js() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Wc(l) {
    var n = uf;
    return uf += 1, Pi === null && (Pi = []), l = ay(Pi, l, n), n = Ve, (ml === null ? n.memoizedState : ml.next) === null && (n = n.alternate, M.H = n === null || n.memoizedState === null ? F0 : Id), l;
  }
  function cf(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Wc(l);
      if (l.$$typeof === xt) return W(l);
    }
    throw Error(z(438, String(l)));
  }
  function Yd(l) {
    var n = null, u = Ve.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = Ve.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Js(), Ve.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = he;
    return n.index++, u;
  }
  function zu(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function Du(l) {
    var n = fl();
    return wd(n, Ot, l);
  }
  function wd(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(z(311));
    c.lastRenderedReducer = u;
    var s = l.baseQueue, r = c.pending;
    if (r !== null) {
      if (s !== null) {
        var m = s.next;
        s.next = r.next, r.next = m;
      }
      n.baseQueue = s = r, c.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var v = m = null, A = null, B = n, V = !1;
      do {
        var $ = B.lane & -536870913;
        if ($ !== B.lane ? (lt & $) === $ : (Ou & $) === $) {
          var Y = B.revertLane;
          if (Y === 0)
            A !== null && (A = A.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }), $ === Vi && (V = !0);
          else if ((Ou & Y) === Y) {
            B = B.next, Y === Vi && (V = !0);
            continue;
          } else
            $ = {
              lane: 0,
              revertLane: B.revertLane,
              gesture: null,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }, A === null ? (v = A = $, m = r) : A = A.next = $, Ve.lanes |= Y, Wn |= Y;
          $ = B.action, ri && u(r, $), r = B.hasEagerState ? B.eagerState : u(r, $);
        } else
          Y = {
            lane: $,
            revertLane: B.revertLane,
            gesture: B.gesture,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          }, A === null ? (v = A = Y, m = r) : A = A.next = Y, Ve.lanes |= $, Wn |= $;
        B = B.next;
      } while (B !== null && B !== n);
      if (A === null ? m = r : A.next = v, !na(r, l.memoizedState) && (yl = !0, V && (u = Sl, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = A, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Gd(l) {
    var n = fl(), u = n.queue;
    if (u === null) throw Error(z(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var m = s = s.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== s);
      na(r, n.memoizedState) || (yl = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function cy(l, n, u) {
    var c = Ve, s = fl(), r = it;
    if (r) {
      if (u === void 0) throw Error(z(407));
      u = u();
    } else u = n();
    var m = !na(
      (Ot || s).memoizedState,
      u
    );
    if (m && (s.memoizedState = u, yl = !0), s = s.queue, Zd(Ld.bind(null, c, s, l), [
      l
    ]), s.getSnapshot !== n || m || ml !== null && ml.memoizedState.tag & 1) {
      if (c.flags |= 2048, Ic(
        9,
        { destroy: void 0 },
        oy.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), Ut === null) throw Error(z(349));
      r || (Ou & 127) !== 0 || Ks(c, n, u);
    }
    return u;
  }
  function Ks(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = Ve.updateQueue, n === null ? (n = Js(), Ve.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function oy(l, n, u, c) {
    n.value = u, n.getSnapshot = c, Xd(n) && Qd(l);
  }
  function Ld(l, n, u) {
    return u(function() {
      Xd(n) && Qd(l);
    });
  }
  function Xd(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !na(l, u);
    } catch {
      return !0;
    }
  }
  function Qd(l) {
    var n = ai(l, 2);
    n !== null && Oa(n, l, 2);
  }
  function fy(l) {
    var n = ql();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), ri) {
        La(!0);
        try {
          u();
        } finally {
          La(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zu,
      lastRenderedState: l
    }, n;
  }
  function Yl(l, n, u, c) {
    return l.baseState = u, wd(
      l,
      Ot,
      typeof c == "function" ? c : zu
    );
  }
  function Z0(l, n, u, c, s) {
    if (Is(l)) throw Error(z(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          r.listeners.push(m);
        }
      };
      M.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, sy(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function sy(l, n) {
    var u = n.action, c = n.payload, s = l.state;
    if (n.isTransition) {
      var r = M.T, m = {};
      M.T = m;
      try {
        var v = u(s, c), A = M.S;
        A !== null && A(m, v), ry(l, n, v);
      } catch (B) {
        Fc(l, n, B);
      } finally {
        r !== null && m.types !== null && (r.types = m.types), M.T = r;
      }
    } else
      try {
        r = u(s, c), ry(l, n, r);
      } catch (B) {
        Fc(l, n, B);
      }
  }
  function ry(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        dy(l, n, c);
      },
      function(c) {
        return Fc(l, n, c);
      }
    ) : dy(l, n, u);
  }
  function dy(l, n, u) {
    n.status = "fulfilled", n.value = u, hy(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, sy(l, u)));
  }
  function Fc(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, hy(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function hy(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function $s(l, n) {
    return n;
  }
  function my(l, n) {
    if (it) {
      var u = Ut.formState;
      if (u !== null) {
        e: {
          var c = Ve;
          if (it) {
            if (Yt) {
              t: {
                for (var s = Yt, r = zl; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = za(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                Yt = za(
                  s.nextSibling
                ), c = s.data === "F!";
                break e;
              }
            }
            Tn(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = ql(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $s,
      lastRenderedState: n
    }, u.queue = c, u = Wd.bind(
      null,
      Ve,
      c
    ), c.dispatch = u, c = fy(!1), r = ec.bind(
      null,
      Ve,
      !1,
      c.queue
    ), c = ql(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = Z0.bind(
      null,
      Ve,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function J0(l) {
    var n = fl();
    return ks(n, Ot, l);
  }
  function ks(l, n, u) {
    if (n = wd(
      l,
      n,
      $s
    )[0], l = Du(zu)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = Wc(n);
      } catch (m) {
        throw m === Zi ? ef : m;
      }
    else c = n;
    n = fl();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (Ve.flags |= 2048, Ic(
      9,
      { destroy: void 0 },
      yy.bind(null, s, u),
      null
    )), [c, r, l];
  }
  function yy(l, n) {
    l.action = n;
  }
  function py(l) {
    var n = fl(), u = Ot;
    if (u !== null)
      return ks(n, u, l);
    fl(), n = n.memoizedState, u = fl();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function Ic(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = Ve.updateQueue, n === null && (n = Js(), Ve.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function gy() {
    return fl().memoizedState;
  }
  function of(l, n, u, c) {
    var s = ql();
    Ve.flags |= l, s.memoizedState = Ic(
      1 | n,
      { destroy: void 0 },
      u,
      c === void 0 ? null : c
    );
  }
  function ff(l, n, u, c) {
    var s = fl();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    Ot !== null && c !== null && di(c, Ot.memoizedState.deps) ? s.memoizedState = Ic(n, r, u, c) : (Ve.flags |= l, s.memoizedState = Ic(
      1 | n,
      r,
      u,
      c
    ));
  }
  function Vd(l, n) {
    of(8390656, 8, l, n);
  }
  function Zd(l, n) {
    ff(2048, 8, l, n);
  }
  function vy(l) {
    Ve.flags |= 4;
    var n = Ve.updateQueue;
    if (n === null)
      n = Js(), Ve.updateQueue = n, n.events = [l];
    else {
      var u = n.events;
      u === null ? n.events = [l] : u.push(l);
    }
  }
  function Ws(l) {
    var n = fl().memoizedState;
    return vy({ ref: n, nextImpl: l }), function() {
      if ((gt & 2) !== 0) throw Error(z(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function Jd(l, n) {
    return ff(4, 2, l, n);
  }
  function Sy(l, n) {
    return ff(4, 4, l, n);
  }
  function Kd(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function by(l, n, u) {
    u = u != null ? u.concat([l]) : null, ff(4, 4, Kd.bind(null, n, l), u);
  }
  function Zn() {
  }
  function $d(l, n) {
    var u = fl();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && di(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function K0(l, n) {
    var u = fl();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && di(n, c[1]))
      return c[0];
    if (c = l(), ri) {
      La(!0);
      try {
        l();
      } finally {
        La(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function Fs(l, n, u) {
    return u === void 0 || (Ou & 1073741824) !== 0 && (lt & 261930) === 0 ? l.memoizedState = n : (l.memoizedState = u, l = og(), Ve.lanes |= l, Wn |= l, u);
  }
  function Ru(l, n, u, c) {
    return na(u, n) ? u : Dl.current !== null ? (l = Fs(l, u, c), na(l, n) || (yl = !0), l) : (Ou & 42) === 0 || (Ou & 1073741824) !== 0 && (lt & 261930) === 0 ? (yl = !0, l.memoizedState = u) : (l = og(), Ve.lanes |= l, Wn |= l, n);
  }
  function kd(l, n, u, c, s) {
    var r = Z.p;
    Z.p = r !== 0 && 8 > r ? r : 8;
    var m = M.T, v = {};
    M.T = v, ec(l, !1, n, u);
    try {
      var A = s(), B = M.S;
      if (B !== null && B(v, A), A !== null && typeof A == "object" && typeof A.then == "function") {
        var V = Ys(
          A,
          c
        );
        hi(
          l,
          n,
          V,
          Na(l)
        );
      } else
        hi(
          l,
          n,
          c,
          Na(l)
        );
    } catch ($) {
      hi(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: $ },
        Na()
      );
    } finally {
      Z.p = r, m !== null && v.types !== null && (m.types = v.types), M.T = m;
    }
  }
  function $0() {
  }
  function sf(l, n, u, c) {
    if (l.tag !== 5) throw Error(z(476));
    var s = rf(l).queue;
    kd(
      l,
      s,
      n,
      ae,
      u === null ? $0 : function() {
        return Ct(l), u(c);
      }
    );
  }
  function rf(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: ae,
      baseState: ae,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zu,
        lastRenderedState: ae
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zu,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function Ct(l) {
    var n = rf(l);
    n.next === null && (n = l.alternate.memoizedState), hi(
      l,
      n.next.queue,
      {},
      Na()
    );
  }
  function Ey() {
    return W(Dr);
  }
  function k0() {
    return fl().memoizedState;
  }
  function Ty() {
    return fl().memoizedState;
  }
  function _u(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = Na();
          l = si(u);
          var c = Fa(n, l, u);
          c !== null && (Oa(c, n, u), Wi(c, n, u)), n = { cache: js() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function W0(l, n, u) {
    var c = Na();
    u = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Is(l) ? Fd(n, u) : (u = bn(l, n, u, c), u !== null && (Oa(u, l, c), Ay(u, n, c)));
  }
  function Wd(l, n, u) {
    var c = Na();
    hi(l, n, u, c);
  }
  function hi(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Is(l)) Fd(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, v = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = v, na(v, m))
            return Ja(l, n, s, 0), Ut === null && Za(), !1;
        } catch {
        } finally {
        }
      if (u = bn(l, n, s, c), u !== null)
        return Oa(u, l, c), Ay(u, n, c), !0;
    }
    return !1;
  }
  function ec(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: Ah(),
      gesture: null,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Is(l)) {
      if (n) throw Error(z(479));
    } else
      n = bn(
        l,
        u,
        c,
        2
      ), n !== null && Oa(n, l, 2);
  }
  function Is(l) {
    var n = l.alternate;
    return l === Ve || n !== null && n === Ve;
  }
  function Fd(l, n) {
    $c = Kc = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function Ay(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, fu(l, u);
    }
  }
  var Ps = {
    readContext: W,
    use: cf,
    useCallback: ll,
    useContext: ll,
    useEffect: ll,
    useImperativeHandle: ll,
    useLayoutEffect: ll,
    useInsertionEffect: ll,
    useMemo: ll,
    useReducer: ll,
    useRef: ll,
    useState: ll,
    useDebugValue: ll,
    useDeferredValue: ll,
    useTransition: ll,
    useSyncExternalStore: ll,
    useId: ll,
    useHostTransitionStatus: ll,
    useFormState: ll,
    useActionState: ll,
    useOptimistic: ll,
    useMemoCache: ll,
    useCacheRefresh: ll
  };
  Ps.useEffectEvent = ll;
  var F0 = {
    readContext: W,
    use: cf,
    useCallback: function(l, n) {
      return ql().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: W,
    useEffect: Vd,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, of(
        4194308,
        4,
        Kd.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return of(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      of(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = ql();
      n = n === void 0 ? null : n;
      var c = l();
      if (ri) {
        La(!0);
        try {
          l();
        } finally {
          La(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = ql();
      if (u !== void 0) {
        var s = u(n);
        if (ri) {
          La(!0);
          try {
            u(n);
          } finally {
            La(!1);
          }
        }
      } else s = n;
      return c.memoizedState = c.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, c.queue = l, l = l.dispatch = W0.bind(
        null,
        Ve,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = ql();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = fy(l);
      var n = l.queue, u = Wd.bind(null, Ve, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Zn,
    useDeferredValue: function(l, n) {
      var u = ql();
      return Fs(u, l, n);
    },
    useTransition: function() {
      var l = fy(!1);
      return l = kd.bind(
        null,
        Ve,
        l.queue,
        !0,
        !1
      ), ql().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = Ve, s = ql();
      if (it) {
        if (u === void 0)
          throw Error(z(407));
        u = u();
      } else {
        if (u = n(), Ut === null)
          throw Error(z(349));
        (lt & 127) !== 0 || Ks(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Vd(Ld.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, Ic(
        9,
        { destroy: void 0 },
        oy.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = ql(), n = Ut.identifierPrefix;
      if (it) {
        var u = Ln, c = Ma;
        u = (c & ~(1 << 32 - Hl(c) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = Qs++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = Q0++, n = "_" + n + "r_" + u.toString(32) + "_";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Ey,
    useFormState: my,
    useActionState: my,
    useOptimistic: function(l) {
      var n = ql();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = ec.bind(
        null,
        Ve,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Yd,
    useCacheRefresh: function() {
      return ql().memoizedState = _u.bind(
        null,
        Ve
      );
    },
    useEffectEvent: function(l) {
      var n = ql(), u = { impl: l };
      return n.memoizedState = u, function() {
        if ((gt & 2) !== 0)
          throw Error(z(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Id = {
    readContext: W,
    use: cf,
    useCallback: $d,
    useContext: W,
    useEffect: Zd,
    useImperativeHandle: by,
    useInsertionEffect: Jd,
    useLayoutEffect: Sy,
    useMemo: K0,
    useReducer: Du,
    useRef: gy,
    useState: function() {
      return Du(zu);
    },
    useDebugValue: Zn,
    useDeferredValue: function(l, n) {
      var u = fl();
      return Ru(
        u,
        Ot.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Du(zu)[0], n = fl().memoizedState;
      return [
        typeof l == "boolean" ? l : Wc(l),
        n
      ];
    },
    useSyncExternalStore: cy,
    useId: k0,
    useHostTransitionStatus: Ey,
    useFormState: J0,
    useActionState: J0,
    useOptimistic: function(l, n) {
      var u = fl();
      return Yl(u, Ot, l, n);
    },
    useMemoCache: Yd,
    useCacheRefresh: Ty
  };
  Id.useEffectEvent = Ws;
  var I0 = {
    readContext: W,
    use: cf,
    useCallback: $d,
    useContext: W,
    useEffect: Zd,
    useImperativeHandle: by,
    useInsertionEffect: Jd,
    useLayoutEffect: Sy,
    useMemo: K0,
    useReducer: Gd,
    useRef: gy,
    useState: function() {
      return Gd(zu);
    },
    useDebugValue: Zn,
    useDeferredValue: function(l, n) {
      var u = fl();
      return Ot === null ? Fs(u, l, n) : Ru(
        u,
        Ot.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Gd(zu)[0], n = fl().memoizedState;
      return [
        typeof l == "boolean" ? l : Wc(l),
        n
      ];
    },
    useSyncExternalStore: cy,
    useId: k0,
    useHostTransitionStatus: Ey,
    useFormState: py,
    useActionState: py,
    useOptimistic: function(l, n) {
      var u = fl();
      return Ot !== null ? Yl(u, Ot, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Yd,
    useCacheRefresh: Ty
  };
  I0.useEffectEvent = Ws;
  function Pc(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : q({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var An = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = Na(), s = si(c);
      s.payload = n, u != null && (s.callback = u), n = Fa(l, s, c), n !== null && (Oa(n, l, c), Wi(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = Na(), s = si(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = Fa(l, s, c), n !== null && (Oa(n, l, c), Wi(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = Na(), c = si(u);
      c.tag = 2, n != null && (c.callback = n), n = Fa(l, c, u), n !== null && (Oa(n, l, u), Wi(n, l, u));
    }
  };
  function Oy(l, n, u, c, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, m) : n.prototype && n.prototype.isPureReactComponent ? !gn(u, c) || !gn(s, r) : !0;
  }
  function P0(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && An.enqueueReplaceState(n, n.state, null);
  }
  function tc(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = q({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  function Pd(l) {
    qc(l);
  }
  function zy(l) {
    console.error(l);
  }
  function eh(l) {
    qc(l);
  }
  function df(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function er(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function Dy(l, n, u) {
    return u = si(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      df(l, n);
    }, u;
  }
  function Ry(l) {
    return l = si(l), l.tag = 3, l;
  }
  function _y(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        er(n, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      er(n, u, c), typeof s != "function" && (Wt === null ? Wt = /* @__PURE__ */ new Set([this]) : Wt.add(this));
      var v = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function lS(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && Bl(
        n,
        u,
        s,
        !0
      ), u = ga.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return Ia === null ? Sh() : u.alternate === null && Gt === 0 && (Gt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === Vc ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), mr(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === Vc ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), mr(l, c, s)), !1;
        }
        throw Error(z(435, u.tag));
      }
      return mr(l, c, s), Sh(), !1;
    }
    if (it)
      return n = ga.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== Su && (l = Error(z(422), { cause: c }), Io(Ka(l, u)))) : (c !== Su && (n = Error(z(423), {
        cause: c
      }), Io(
        Ka(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = Ka(c, u), s = Dy(
        l.stateNode,
        c,
        s
      ), Nd(l, s), Gt !== 4 && (Gt = 2)), !1;
    var r = Error(z(520), { cause: c });
    if (r = Ka(r, u), sr === null ? sr = [r] : sr.push(r), Gt !== 4 && (Gt = 2), n === null) return !0;
    c = Ka(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = Dy(u.stateNode, c, l), Nd(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Wt === null || !Wt.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = Ry(s), _y(
              s,
              l,
              u,
              c
            ), Nd(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var th = Error(z(461)), yl = !1;
  function Zt(l, n, u, c) {
    n.child = l === null ? uy(n, null, u, c) : ki(
      n,
      l.child,
      u,
      c
    );
  }
  function My(l, n, u, c, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in c) {
      var m = {};
      for (var v in c)
        v !== "ref" && (m[v] = c[v]);
    } else m = c;
    return qe(n), c = Vs(
      l,
      n,
      u,
      m,
      r,
      s
    ), v = qd(), l !== null && !yl ? (kc(l, n, s), tn(l, n, s)) : (it && v && Wo(n), n.flags |= 1, Zt(l, n, c, s), n.child);
  }
  function Cy(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !Yc(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, Uy(
        l,
        n,
        r,
        c,
        s
      )) : (l = Dd(
        u.type,
        null,
        c,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !nh(l, s)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : gn, u(m, c) && l.ref === n.ref)
        return tn(l, n, s);
    }
    return n.flags |= 1, l = ni(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function Uy(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (gn(r, c) && l.ref === n.ref)
        if (yl = !1, n.pendingProps = c = r, nh(l, s))
          (l.flags & 131072) !== 0 && (yl = !0);
        else
          return n.lanes = l.lanes, tn(l, n, s);
    }
    return lh(
      l,
      n,
      u,
      c,
      s
    );
  }
  function eg(l, n, u, c) {
    var s = c.children, r = l !== null ? l.memoizedState : null;
    if (l === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (r = r !== null ? r.baseLanes | u : u, l !== null) {
          for (c = n.child = l.child, s = 0; c !== null; )
            s = s | c.lanes | c.childLanes, c = c.sibling;
          c = s & ~r;
        } else c = 0, n.child = null;
        return Sa(
          l,
          n,
          r,
          u,
          c
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Po(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? X0(n, r) : Xs(), xd(n);
      else
        return c = n.lanes = 536870912, Sa(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u,
          c
        );
    } else
      r !== null ? (Po(n, r.cachePool), X0(n, r), Vn(), n.memoizedState = null) : (l !== null && Po(n, null), Xs(), Vn());
    return Zt(l, n, s, u), n.child;
  }
  function lc(l, n) {
    return l !== null && l.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function Sa(l, n, u, c, s) {
    var r = Wa();
    return r = r === null ? null : { parent: hl._currentValue, pool: r }, n.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, l !== null && Po(n, null), Xs(), xd(n), l !== null && Bl(l, n, c, !0), n.childLanes = s, null;
  }
  function tr(l, n) {
    return n = nr(
      { mode: n.mode, children: n.children },
      l.mode
    ), n.ref = l.ref, l.child = n, n.return = l, n;
  }
  function ba(l, n, u) {
    return ki(n, l.child, null, u), l = tr(n, n.pendingProps), l.flags |= 2, va(n), n.memoizedState = null, l;
  }
  function tg(l, n, u) {
    var c = n.pendingProps, s = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (it) {
        if (c.mode === "hidden")
          return l = tr(n, c), n.lanes = 536870912, lc(null, l);
        if (af(n), (l = Yt) ? (l = Bg(
          l,
          zl
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Gn !== null ? { id: Ma, overflow: Ln } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Wm(l), u.return = n, n.child = u, xl = n, Yt = null)) : l = null, l === null) throw Tn(n);
        return n.lanes = 536870912, null;
      }
      return tr(n, c);
    }
    var r = l.memoizedState;
    if (r !== null) {
      var m = r.dehydrated;
      if (af(n), s)
        if (n.flags & 256)
          n.flags &= -257, n = ba(
            l,
            n,
            u
          );
        else if (n.memoizedState !== null)
          n.child = l.child, n.flags |= 128, n = null;
        else throw Error(z(558));
      else if (yl || Bl(l, n, u, !1), s = (u & l.childLanes) !== 0, yl || s) {
        if (c = Ut, c !== null && (m = Xa(c, u), m !== 0 && m !== r.retryLane))
          throw r.retryLane = m, ai(l, m), Oa(c, l, m), th;
        Sh(), n = ba(
          l,
          n,
          u
        );
      } else
        l = r.treeContext, Yt = za(m.nextSibling), xl = n, it = !0, vu = null, zl = !1, l !== null && Us(n, l), n = tr(n, c), n.flags |= 4096;
      return n;
    }
    return l = ni(l.child, {
      mode: c.mode,
      children: c.children
    }), l.ref = n.ref, n.child = l, l.return = n, l;
  }
  function Pa(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(z(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function lh(l, n, u, c, s) {
    return qe(n), u = Vs(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = qd(), l !== null && !yl ? (kc(l, n, s), tn(l, n, s)) : (it && c && Wo(n), n.flags |= 1, Zt(l, n, u, s), n.child);
  }
  function ac(l, n, u, c, s, r) {
    return qe(n), n.updateQueue = null, u = V0(
      n,
      c,
      u,
      s
    ), Bd(l), c = qd(), l !== null && !yl ? (kc(l, n, r), tn(l, n, r)) : (it && c && Wo(n), n.flags |= 1, Zt(l, n, u, r), n.child);
  }
  function Hy(l, n, u, c, s) {
    if (qe(n), n.stateNode === null) {
      var r = ma, m = u.contextType;
      typeof m == "object" && m !== null && (r = W(m)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = An, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, Ls(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? W(m) : ma, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (Pc(
        n,
        u,
        m,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && An.enqueueReplaceState(r, r.state, null), Tu(n, c, r, s), Fi(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var v = n.memoizedProps, A = tc(u, v);
      r.props = A;
      var B = r.context, V = u.contextType;
      m = ma, typeof V == "object" && V !== null && (m = W(V));
      var $ = u.getDerivedStateFromProps;
      V = typeof $ == "function" || typeof r.getSnapshotBeforeUpdate == "function", v = n.pendingProps !== v, V || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (v || B !== m) && P0(
        n,
        r,
        c,
        m
      ), fi = !1;
      var Y = n.memoizedState;
      r.state = Y, Tu(n, c, r, s), Fi(), B = n.memoizedState, v || Y !== B || fi ? (typeof $ == "function" && (Pc(
        n,
        u,
        $,
        c
      ), B = n.memoizedState), (A = fi || Oy(
        n,
        u,
        A,
        c,
        Y,
        B,
        m
      )) ? (V || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = B), r.props = c, r.state = B, r.context = m, c = A) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, Hd(l, n), m = n.memoizedProps, V = tc(u, m), r.props = V, $ = n.pendingProps, Y = r.context, B = u.contextType, A = ma, typeof B == "object" && B !== null && (A = W(B)), v = u.getDerivedStateFromProps, (B = typeof v == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== $ || Y !== A) && P0(
        n,
        r,
        c,
        A
      ), fi = !1, Y = n.memoizedState, r.state = Y, Tu(n, c, r, s), Fi();
      var Q = n.memoizedState;
      m !== $ || Y !== Q || fi || l !== null && l.dependencies !== null && Gc(l.dependencies) ? (typeof v == "function" && (Pc(
        n,
        u,
        v,
        c
      ), Q = n.memoizedState), (V = fi || Oy(
        n,
        u,
        V,
        c,
        Y,
        Q,
        A
      ) || l !== null && l.dependencies !== null && Gc(l.dependencies)) ? (B || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, Q, A), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        Q,
        A
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && Y === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && Y === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = Q), r.props = c, r.state = Q, r.context = A, c = V) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && Y === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && Y === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, Pa(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = ki(
      n,
      l.child,
      null,
      s
    ), n.child = ki(
      n,
      null,
      u,
      s
    )) : Zt(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = tn(
      l,
      n,
      s
    ), l;
  }
  function Jn(l, n, u, c) {
    return Qi(), n.flags |= 256, Zt(l, n, u, c), n.child;
  }
  var lr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ar(l) {
    return { baseLanes: l, cachePool: Xc() };
  }
  function en(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= Aa), l;
  }
  function Ny(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : (kt.current & 2) !== 0), m && (s = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (it) {
        if (s ? Au(n) : Vn(), (l = Yt) ? (l = Bg(
          l,
          zl
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Gn !== null ? { id: Ma, overflow: Ln } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Wm(l), u.return = n, n.child = u, xl = n, Yt = null)) : l = null, l === null) throw Tn(n);
        return sc(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var v = c.children;
      return c = c.fallback, s ? (Vn(), s = n.mode, v = nr(
        { mode: "hidden", children: v },
        s
      ), c = ui(
        c,
        s,
        u,
        null
      ), v.return = n, c.return = n, v.sibling = c, n.child = v, c = n.child, c.memoizedState = ar(u), c.childLanes = en(
        l,
        m,
        u
      ), n.memoizedState = lr, lc(null, c)) : (Au(n), nc(n, v));
    }
    var A = l.memoizedState;
    if (A !== null && (v = A.dehydrated, v !== null)) {
      if (r)
        n.flags & 256 ? (Au(n), n.flags &= -257, n = eo(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Vn(), n.child = l.child, n.flags |= 128, n = null) : (Vn(), v = c.fallback, s = n.mode, c = nr(
          { mode: "visible", children: c.children },
          s
        ), v = ui(
          v,
          s,
          u,
          null
        ), v.flags |= 2, c.return = n, v.return = n, c.sibling = v, n.child = c, ki(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = ar(u), c.childLanes = en(
          l,
          m,
          u
        ), n.memoizedState = lr, n = lc(null, c));
      else if (Au(n), sc(v)) {
        if (m = v.nextSibling && v.nextSibling.dataset, m) var B = m.dgst;
        m = B, c = Error(z(419)), c.stack = "", c.digest = m, Io({ value: c, source: null, stack: null }), n = eo(
          l,
          n,
          u
        );
      } else if (yl || Bl(l, n, u, !1), m = (u & l.childLanes) !== 0, yl || m) {
        if (m = Ut, m !== null && (c = Xa(m, u), c !== 0 && c !== A.retryLane))
          throw A.retryLane = c, ai(l, c), Oa(m, l, c), th;
        Dn(v) || Sh(), n = eo(
          l,
          n,
          u
        );
      } else
        Dn(v) ? (n.flags |= 192, n.child = l.child, n = null) : (l = A.treeContext, Yt = za(
          v.nextSibling
        ), xl = n, it = !0, vu = null, zl = !1, l !== null && Us(n, l), n = nc(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (Vn(), v = c.fallback, s = n.mode, A = l.child, B = A.sibling, c = ni(A, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = A.subtreeFlags & 65011712, B !== null ? v = ni(
      B,
      v
    ) : (v = ui(
      v,
      s,
      u,
      null
    ), v.flags |= 2), v.return = n, c.return = n, c.sibling = v, n.child = c, lc(null, c), c = n.child, v = l.child.memoizedState, v === null ? v = ar(u) : (s = v.cachePool, s !== null ? (A = hl._currentValue, s = s.parent !== A ? { parent: A, pool: A } : s) : s = Xc(), v = {
      baseLanes: v.baseLanes | u,
      cachePool: s
    }), c.memoizedState = v, c.childLanes = en(
      l,
      m,
      u
    ), n.memoizedState = lr, lc(l.child, c)) : (Au(n), u = l.child, l = u.sibling, u = ni(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function nc(l, n) {
    return n = nr(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function nr(l, n) {
    return l = cl(22, l, null, n), l.lanes = 0, l;
  }
  function eo(l, n, u) {
    return ki(n, l.child, null, u), l = nc(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function to(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), Cd(l.return, n, u);
  }
  function ah(l, n, u, c, s, r) {
    var m = l.memoizedState;
    m === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: s,
      treeForkCount: r
    } : (m.isBackwards = n, m.rendering = null, m.renderingStartTime = 0, m.last = c, m.tail = u, m.tailMode = s, m.treeForkCount = r);
  }
  function jy(l, n, u) {
    var c = n.pendingProps, s = c.revealOrder, r = c.tail;
    c = c.children;
    var m = kt.current, v = (m & 2) !== 0;
    if (v ? (m = m & 1 | 2, n.flags |= 128) : m &= 1, P(kt, m), Zt(l, n, c, u), c = it ? dl : 0, !v && l !== null && (l.flags & 128) !== 0)
      e: for (l = n.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && to(l, u, n);
        else if (l.tag === 19)
          to(l, u, n);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === n) break e;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === n)
            break e;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && nf(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), ah(
          n,
          !1,
          s,
          u,
          r,
          c
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && nf(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        ah(
          n,
          !0,
          u,
          null,
          r,
          c
        );
        break;
      case "together":
        ah(
          n,
          !1,
          null,
          null,
          void 0,
          c
        );
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function tn(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), Wn |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (Bl(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(z(153));
    if (n.child !== null) {
      for (l = n.child, u = ni(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = ni(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function nh(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Gc(l)));
  }
  function uh(l, n, u) {
    switch (n.tag) {
      case 3:
        Vt(n, n.stateNode.containerInfo), pa(n, hl, l.memoizedState.cache), Qi();
        break;
      case 27:
      case 5:
        wa(n);
        break;
      case 4:
        Vt(n, n.stateNode.containerInfo);
        break;
      case 10:
        pa(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, af(n), null;
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (Au(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? Ny(l, n, u) : (Au(n), l = tn(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        Au(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (Bl(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), s) {
          if (c)
            return jy(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), P(kt, kt.current), c) break;
        return null;
      case 22:
        return n.lanes = 0, eg(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        pa(n, hl, l.memoizedState.cache);
    }
    return tn(l, n, u);
  }
  function xy(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        yl = !0;
      else {
        if (!nh(l, u) && (n.flags & 128) === 0)
          return yl = !1, uh(
            l,
            n,
            u
          );
        yl = (l.flags & 131072) !== 0;
      }
    else
      yl = !1, it && (n.flags & 1048576) !== 0 && Im(n, dl, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          var c = n.pendingProps;
          if (l = Ji(n.elementType), n.type = l, typeof l == "function")
            Yc(l) ? (c = tc(l, c), n.tag = 1, n = Hy(
              null,
              n,
              l,
              c,
              u
            )) : (n.tag = 0, n = lh(
              null,
              n,
              l,
              c,
              u
            ));
          else {
            if (l != null) {
              var s = l.$$typeof;
              if (s === Kt) {
                n.tag = 11, n = My(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              } else if (s === Me) {
                n.tag = 14, n = Cy(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              }
            }
            throw n = Qt(l) || l, Error(z(306, n, ""));
          }
        }
        return n;
      case 0:
        return lh(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, s = tc(
          c,
          n.pendingProps
        ), Hy(
          l,
          n,
          c,
          s,
          u
        );
      case 3:
        e: {
          if (Vt(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(z(387));
          c = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, Hd(l, n), Tu(n, c, null, u);
          var m = n.memoizedState;
          if (c = m.cache, pa(n, hl, c), c !== r.cache && Eu(
            n,
            [hl],
            u,
            !0
          ), Fi(), c = m.element, r.isDehydrated)
            if (r = {
              element: c,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = Jn(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== s) {
              s = Ka(
                Error(z(424)),
                n
              ), Io(s), n = Jn(
                l,
                n,
                c,
                u
              );
              break e;
            } else {
              switch (l = n.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (Yt = za(l.firstChild), xl = n, it = !0, vu = null, zl = !0, u = uy(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Qi(), c === s) {
              n = tn(
                l,
                n,
                u
              );
              break e;
            }
            Zt(l, n, c, u);
          }
          n = n.child;
        }
        return n;
      case 26:
        return Pa(l, n), l === null ? (u = jf(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : it || (u = n.type, l = n.pendingProps, c = fc(
          Le.current
        ).createElement(u), c[Mt] = n, c[ra] = l, kl(c, u, l), Tt(c), n.stateNode = c) : n.memoizedState = jf(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return wa(n), l === null && it && (c = n.stateNode = Hf(
          n.type,
          n.pendingProps,
          Le.current
        ), xl = n, zl = !0, s = Yt, In(n.type) ? (Ar = s, Yt = za(c.firstChild)) : Yt = s), Zt(
          l,
          n,
          n.pendingProps.children,
          u
        ), Pa(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && it && ((s = c = Yt) && (c = uS(
          c,
          n.type,
          n.pendingProps,
          zl
        ), c !== null ? (n.stateNode = c, xl = n, Yt = za(c.firstChild), zl = !1, s = !0) : s = !1), s || Tn(n)), wa(n), s = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, c = r.children, Cf(s, r) ? c = null : m !== null && Cf(s, m) && (n.flags |= 32), n.memoizedState !== null && (s = Vs(
          l,
          n,
          tS,
          null,
          null,
          u
        ), Dr._currentValue = s), Pa(l, n), Zt(l, n, c, u), n.child;
      case 6:
        return l === null && it && ((l = u = Yt) && (u = Fe(
          u,
          n.pendingProps,
          zl
        ), u !== null ? (n.stateNode = u, xl = n, Yt = null, l = !0) : l = !1), l || Tn(n)), null;
      case 13:
        return Ny(l, n, u);
      case 4:
        return Vt(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = ki(
          n,
          null,
          c,
          u
        ) : Zt(l, n, c, u), n.child;
      case 11:
        return My(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return Zt(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return Zt(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return Zt(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, pa(n, n.type, c.value), Zt(l, n, c.children, u), n.child;
      case 9:
        return s = n.type._context, c = n.pendingProps.children, qe(n), s = W(s), c = c(s), n.flags |= 1, Zt(l, n, c, u), n.child;
      case 14:
        return Cy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return Uy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return jy(l, n, u);
      case 31:
        return tg(l, n, u);
      case 22:
        return eg(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        return qe(n), c = W(hl), l === null ? (s = Wa(), s === null && (s = Ut, r = js(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = { parent: c, cache: s }, Ls(n), pa(n, hl, s)) : ((l.lanes & u) !== 0 && (Hd(l, n), Tu(n, null, null, u), Fi()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), pa(n, hl, c)) : (c = r.cache, pa(n, hl, c), c !== s.cache && Eu(
          n,
          [hl],
          u,
          !0
        ))), Zt(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(z(156, n.tag));
  }
  function Mu(l) {
    l.flags |= 4;
  }
  function By(l, n, u, c, s) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (s & 335544128) === s)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (rg()) l.flags |= 8192;
        else
          throw Ki = Vc, Qc;
    } else l.flags &= -16777217;
  }
  function qy(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !xa(n))
      if (rg()) l.flags |= 8192;
      else
        throw Ki = Vc, Qc;
  }
  function ua(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? la() : 536870912, l.lanes |= n, al |= n);
  }
  function hf(l, n) {
    if (!it)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function Be(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 65011712, c |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function lg(l, n, u) {
    var c = n.pendingProps;
    switch (_d(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Be(n), null;
      case 1:
        return Be(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), Qn(hl), yt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (bu(n) ? Mu(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Pm())), Be(n), null;
      case 26:
        var s = n.type, r = n.memoizedState;
        return l === null ? (Mu(n), r !== null ? (Be(n), qy(n, r)) : (Be(n), By(
          n,
          s,
          null,
          c,
          u
        ))) : r ? r !== l.memoizedState ? (Mu(n), Be(n), qy(n, r)) : (Be(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== c && Mu(n), Be(n), By(
          n,
          s,
          l,
          c,
          u
        )), null;
      case 27:
        if (se(n), u = Le.current, s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Mu(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(z(166));
            return Be(n), null;
          }
          l = I.current, bu(n) ? Hs(n) : (l = Hf(s, c, u), n.stateNode = l, Mu(n));
        }
        return Be(n), null;
      case 5:
        if (se(n), s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Mu(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(z(166));
            return Be(n), null;
          }
          if (r = I.current, bu(n))
            Hs(n);
          else {
            var m = fc(
              Le.current
            );
            switch (r) {
              case 1:
                r = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                r = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    r = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    r = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    r = m.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(
                      r.firstChild
                    );
                    break;
                  case "select":
                    r = typeof c.is == "string" ? m.createElement("select", {
                      is: c.is
                    }) : m.createElement("select"), c.multiple ? r.multiple = !0 : c.size && (r.size = c.size);
                    break;
                  default:
                    r = typeof c.is == "string" ? m.createElement(s, { is: c.is }) : m.createElement(s);
                }
            }
            r[Mt] = n, r[ra] = c;
            e: for (m = n.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6)
                r.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === n) break e;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === n)
                  break e;
                m = m.return;
              }
              m.sibling.return = m.return, m = m.sibling;
            }
            n.stateNode = r;
            e: switch (kl(r, s, c), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                c = !!c.autoFocus;
                break e;
              case "img":
                c = !0;
                break e;
              default:
                c = !1;
            }
            c && Mu(n);
          }
        }
        return Be(n), By(
          n,
          n.type,
          l === null ? null : l.memoizedProps,
          n.pendingProps,
          u
        ), null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && Mu(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(z(166));
          if (l = Le.current, bu(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = xl, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[Mt] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || cp(l.nodeValue, u)), l || Tn(n, !0);
          } else
            l = fc(l).createTextNode(
              c
            ), l[Mt] = n, n.stateNode = l;
        }
        return Be(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (c = bu(n), u !== null) {
            if (l === null) {
              if (!c) throw Error(z(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(z(557));
              l[Mt] = n;
            } else
              Qi(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Be(n), l = !1;
          } else
            u = Pm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? (va(n), n) : (va(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(z(558));
        }
        return Be(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = bu(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(z(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(z(317));
              s[Mt] = n;
            } else
              Qi(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Be(n), s = !1;
          } else
            s = Pm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (va(n), n) : (va(n), null);
        }
        return va(n), (n.flags & 128) !== 0 ? (n.lanes = u, n) : (u = c !== null, l = l !== null && l.memoizedState !== null, u && (c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool), r = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), ua(n, n.updateQueue), Be(n), null);
      case 4:
        return yt(), l === null && Mf(n.stateNode.containerInfo), Be(n), null;
      case 10:
        return Qn(n.type), Be(n), null;
      case 19:
        if (x(kt), c = n.memoizedState, c === null) return Be(n), null;
        if (s = (n.flags & 128) !== 0, r = c.rendering, r === null)
          if (s) hf(c, !1);
          else {
            if (Gt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = nf(l), r !== null) {
                  for (n.flags |= 128, hf(c, !1), l = r.updateQueue, n.updateQueue = l, ua(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    km(u, l), u = u.sibling;
                  return P(
                    kt,
                    kt.current & 1 | 2
                  ), it && En(n, c.treeForkCount), n.child;
                }
                l = l.sibling;
              }
            c.tail !== null && vl() > bt && (n.flags |= 128, s = !0, hf(c, !1), n.lanes = 4194304);
          }
        else {
          if (!s)
            if (l = nf(r), l !== null) {
              if (n.flags |= 128, s = !0, l = l.updateQueue, n.updateQueue = l, ua(n, l), hf(c, !0), c.tail === null && c.tailMode === "hidden" && !r.alternate && !it)
                return Be(n), null;
            } else
              2 * vl() - c.renderingStartTime > bt && u !== 536870912 && (n.flags |= 128, s = !0, hf(c, !1), n.lanes = 4194304);
          c.isBackwards ? (r.sibling = n.child, n.child = r) : (l = c.last, l !== null ? l.sibling = r : n.child = r, c.last = r);
        }
        return c.tail !== null ? (l = c.tail, c.rendering = l, c.tail = l.sibling, c.renderingStartTime = vl(), l.sibling = null, u = kt.current, P(
          kt,
          s ? u & 1 | 2 : u & 1
        ), it && En(n, c.treeForkCount), l) : (Be(n), null);
      case 22:
      case 23:
        return va(n), lf(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (Be(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Be(n), u = n.updateQueue, u !== null && ua(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && x(ka), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), Qn(hl), Be(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(z(156, n.tag));
  }
  function ag(l, n) {
    switch (_d(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return Qn(hl), yt(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return se(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (va(n), n.alternate === null)
            throw Error(z(340));
          Qi();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if (va(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(z(340));
          Qi();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return x(kt), null;
      case 4:
        return yt(), null;
      case 10:
        return Qn(n.type), null;
      case 22:
      case 23:
        return va(n), lf(), l !== null && x(ka), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return Qn(hl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ng(l, n) {
    switch (_d(n), n.tag) {
      case 3:
        Qn(hl), yt();
        break;
      case 26:
      case 27:
      case 5:
        se(n);
        break;
      case 4:
        yt();
        break;
      case 31:
        n.memoizedState !== null && va(n);
        break;
      case 13:
        va(n);
        break;
      case 19:
        x(kt);
        break;
      case 10:
        Qn(n.type);
        break;
      case 22:
      case 23:
        va(n), lf(), l !== null && x(ka);
        break;
      case 24:
        Qn(hl);
    }
  }
  function On(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var s = c.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var r = u.create, m = u.inst;
            c = r(), m.destroy = c;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (v) {
      Dt(n, n.return, v);
    }
  }
  function ln(l, n, u) {
    try {
      var c = n.updateQueue, s = c !== null ? c.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        c = r;
        do {
          if ((c.tag & l) === l) {
            var m = c.inst, v = m.destroy;
            if (v !== void 0) {
              m.destroy = void 0, s = n;
              var A = u, B = v;
              try {
                B();
              } catch (V) {
                Dt(
                  s,
                  A,
                  V
                );
              }
            }
          }
          c = c.next;
        } while (c !== r);
      }
    } catch (V) {
      Dt(n, n.return, V);
    }
  }
  function ih(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Ii(n, u);
      } catch (c) {
        Dt(l, l.return, c);
      }
    }
  }
  function uc(l, n, u) {
    u.props = tc(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      Dt(l, n, c);
    }
  }
  function Cu(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (s) {
      Dt(l, n, s);
    }
  }
  function Kn(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (s) {
          Dt(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          Dt(l, n, s);
        }
      else u.current = null;
  }
  function Yy(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (s) {
      Dt(l, l.return, s);
    }
  }
  function ch(l, n, u) {
    try {
      var c = l.stateNode;
      fp(c, l.type, u, n), c[ra] = n;
    } catch (s) {
      Dt(l, l.return, s);
    }
  }
  function wy(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && In(l.type) || l.tag === 4;
  }
  function mf(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || wy(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && In(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function yf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = Nn));
    else if (c !== 4 && (c === 27 && In(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (yf(l, n, u), l = l.sibling; l !== null; )
        yf(l, n, u), l = l.sibling;
  }
  function pf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && In(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (pf(l, n, u), l = l.sibling; l !== null; )
        pf(l, n, u), l = l.sibling;
  }
  function Gy(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      kl(n, c, u), n[Mt] = l, n[ra] = u;
    } catch (r) {
      Dt(l, l.return, r);
    }
  }
  var mi = !1, bl = !1, oh = !1, Ly = typeof WeakSet == "function" ? WeakSet : Set, wl = null;
  function gf(l, n) {
    if (l = l.containerInfo, _h = _l, l = Gi(l), zs(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var s = c.anchorOffset, r = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break e;
            }
            var m = 0, v = -1, A = -1, B = 0, V = 0, $ = l, Y = null;
            t: for (; ; ) {
              for (var Q; $ !== u || s !== 0 && $.nodeType !== 3 || (v = m + s), $ !== r || c !== 0 && $.nodeType !== 3 || (A = m + c), $.nodeType === 3 && (m += $.nodeValue.length), (Q = $.firstChild) !== null; )
                Y = $, $ = Q;
              for (; ; ) {
                if ($ === l) break t;
                if (Y === u && ++B === s && (v = m), Y === r && ++V === c && (A = m), (Q = $.nextSibling) !== null) break;
                $ = Y, Y = $.parentNode;
              }
              $ = Q;
            }
            u = v === -1 || A === -1 ? null : { start: v, end: A };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Mh = { focusedElem: l, selectionRange: u }, _l = !1, wl = n; wl !== null; )
      if (n = wl, l = n.child, (n.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = n, wl = l;
      else
        for (; wl !== null; ) {
          switch (n = wl, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = n.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (u = 0; u < l.length; u++)
                  s = l[u], s.ref.impl = s.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, c = u.stateNode;
                try {
                  var de = tc(
                    u.type,
                    s
                  );
                  l = c.getSnapshotBeforeUpdate(
                    de,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (_e) {
                  Dt(
                    u,
                    u.return,
                    _e
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Tr(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Tr(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(z(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, wl = l;
            break;
          }
          wl = n.return;
        }
  }
  function ur(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        yi(l, u), c & 4 && On(5, u);
        break;
      case 1:
        if (yi(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              Dt(u, u.return, m);
            }
          else {
            var s = tc(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              Dt(
                u,
                u.return,
                m
              );
            }
          }
        c & 64 && ih(u), c & 512 && Cu(u, u.return);
        break;
      case 3:
        if (yi(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Ii(l, n);
          } catch (m) {
            Dt(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && c & 4 && Gy(u);
      case 26:
      case 5:
        yi(l, u), n === null && c & 4 && Yy(u), c & 512 && Cu(u, u.return);
        break;
      case 12:
        yi(l, u);
        break;
      case 31:
        yi(l, u), c & 4 && ug(l, u);
        break;
      case 13:
        yi(l, u), c & 4 && Vy(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = an.bind(
          null,
          u
        ), Uf(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || mi, !c) {
          n = n !== null && n.memoizedState !== null || bl, s = mi;
          var r = bl;
          mi = c, (bl = n) && !r ? $n(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : yi(l, u), mi = s, bl = r;
        }
        break;
      case 30:
        break;
      default:
        yi(l, u);
    }
  }
  function Xy(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Xy(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && nd(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var wt = null, Ea = !1;
  function Uu(l, n, u) {
    for (u = u.child; u !== null; )
      Qy(l, n, u), u = u.sibling;
  }
  function Qy(l, n, u) {
    if (Ol && typeof Ol.onCommitFiberUnmount == "function")
      try {
        Ol.onCommitFiberUnmount(hn, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        bl || Kn(u, n), Uu(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        bl || Kn(u, n);
        var c = wt, s = Ea;
        In(u.type) && (wt = u.stateNode, Ea = !1), Uu(
          l,
          n,
          u
        ), fo(u.stateNode), wt = c, Ea = s;
        break;
      case 5:
        bl || Kn(u, n);
      case 6:
        if (c = wt, s = Ea, wt = null, Uu(
          l,
          n,
          u
        ), wt = c, Ea = s, wt !== null)
          if (Ea)
            try {
              (wt.nodeType === 9 ? wt.body : wt.nodeName === "HTML" ? wt.ownerDocument.body : wt).removeChild(u.stateNode);
            } catch (r) {
              Dt(
                u,
                n,
                r
              );
            }
          else
            try {
              wt.removeChild(u.stateNode);
            } catch (r) {
              Dt(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        wt !== null && (Ea ? (l = wt, hp(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Xf(l)) : hp(wt, u.stateNode));
        break;
      case 4:
        c = wt, s = Ea, wt = u.stateNode.containerInfo, Ea = !0, Uu(
          l,
          n,
          u
        ), wt = c, Ea = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ln(2, u, n), bl || ln(4, u, n), Uu(
          l,
          n,
          u
        );
        break;
      case 1:
        bl || (Kn(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && uc(
          u,
          n,
          c
        )), Uu(
          l,
          n,
          u
        );
        break;
      case 21:
        Uu(
          l,
          n,
          u
        );
        break;
      case 22:
        bl = (c = bl) || u.memoizedState !== null, Uu(
          l,
          n,
          u
        ), bl = c;
        break;
      default:
        Uu(
          l,
          n,
          u
        );
    }
  }
  function ug(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Xf(l);
      } catch (u) {
        Dt(n, n.return, u);
      }
    }
  }
  function Vy(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Xf(l);
      } catch (u) {
        Dt(n, n.return, u);
      }
  }
  function ir(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new Ly()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new Ly()), n;
      default:
        throw Error(z(435, l.tag));
    }
  }
  function cr(l, n) {
    var u = ir(l);
    n.forEach(function(c) {
      if (!u.has(c)) {
        u.add(c);
        var s = Dg.bind(null, l, c);
        c.then(s, s);
      }
    });
  }
  function Ta(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, m = n, v = m;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (In(v.type)) {
                wt = v.stateNode, Ea = !1;
                break e;
              }
              break;
            case 5:
              wt = v.stateNode, Ea = !1;
              break e;
            case 3:
            case 4:
              wt = v.stateNode.containerInfo, Ea = !0;
              break e;
          }
          v = v.return;
        }
        if (wt === null) throw Error(z(160));
        Qy(r, m, s), wt = null, Ea = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        fh(n, l), n = n.sibling;
  }
  var $e = null;
  function fh(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ta(n, l), Ca(l), c & 4 && (ln(3, l, l.return), On(3, l), ln(5, l, l.return));
        break;
      case 1:
        Ta(n, l), Ca(l), c & 512 && (bl || u === null || Kn(u, u.return)), c & 64 && mi && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = $e;
        if (Ta(n, l), Ca(l), c & 512 && (bl || u === null || Kn(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[su] || r[Mt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), kl(r, c, u), r[Mt] = l, Tt(r), c = r;
                      break e;
                    case "link":
                      var m = gp(
                        "link",
                        "href",
                        s
                      ).get(c + (u.href || ""));
                      if (m) {
                        for (var v = 0; v < m.length; v++)
                          if (r = m[v], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(v, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), kl(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = gp(
                        "meta",
                        "content",
                        s
                      ).get(c + (u.content || ""))) {
                        for (v = 0; v < m.length; v++)
                          if (r = m[v], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(v, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), kl(r, c, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(z(468, c));
                  }
                  r[Mt] = l, Tt(r), c = r;
                }
                l.stateNode = c;
              } else
                jh(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = pp(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? jh(
              s,
              l.type,
              l.stateNode
            ) : pp(
              s,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && ch(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Ta(n, l), Ca(l), c & 512 && (bl || u === null || Kn(u, u.return)), u !== null && c & 4 && ch(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Ta(n, l), Ca(l), c & 512 && (bl || u === null || Kn(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            du(s, "");
          } catch (de) {
            Dt(l, l.return, de);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, ch(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && (oh = !0);
        break;
      case 6:
        if (Ta(n, l), Ca(l), c & 4) {
          if (l.stateNode === null)
            throw Error(z(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (de) {
            Dt(l, l.return, de);
          }
        }
        break;
      case 3:
        if (qf = null, s = $e, $e = ia(n.containerInfo), Ta(n, l), $e = s, Ca(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Xf(n.containerInfo);
          } catch (de) {
            Dt(l, l.return, de);
          }
        oh && (oh = !1, Zy(l));
        break;
      case 4:
        c = $e, $e = ia(
          l.stateNode.containerInfo
        ), Ta(n, l), Ca(l), $e = c;
        break;
      case 12:
        Ta(n, l), Ca(l);
        break;
      case 31:
        Ta(n, l), Ca(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, cr(l, c)));
        break;
      case 13:
        Ta(n, l), Ca(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Fn = vl()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, cr(l, c)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var A = u !== null && u.memoizedState !== null, B = mi, V = bl;
        if (mi = B || s, bl = V || A, Ta(n, l), bl = V, mi = B, Ca(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || A || mi || bl || lo(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                A = u = n;
                try {
                  if (r = A.stateNode, s)
                    m = r.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    v = A.stateNode;
                    var $ = A.memoizedProps.style, Y = $ != null && $.hasOwnProperty("display") ? $.display : null;
                    v.style.display = Y == null || typeof Y == "boolean" ? "" : ("" + Y).trim();
                  }
                } catch (de) {
                  Dt(A, A.return, de);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                A = n;
                try {
                  A.stateNode.nodeValue = s ? "" : A.memoizedProps;
                } catch (de) {
                  Dt(A, A.return, de);
                }
              }
            } else if (n.tag === 18) {
              if (u === null) {
                A = n;
                try {
                  var Q = A.stateNode;
                  s ? pl(Q, !0) : pl(A.stateNode, !1);
                } catch (de) {
                  Dt(A, A.return, de);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, cr(l, u))));
        break;
      case 19:
        Ta(n, l), Ca(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, cr(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ta(n, l), Ca(l);
    }
  }
  function Ca(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (wy(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(z(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = mf(l);
            pf(l, r, s);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (du(m, ""), u.flags &= -33);
            var v = mf(l);
            pf(l, v, m);
            break;
          case 3:
          case 4:
            var A = u.stateNode.containerInfo, B = mf(l);
            yf(
              l,
              B,
              A
            );
            break;
          default:
            throw Error(z(161));
        }
      } catch (V) {
        Dt(l, l.return, V);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function Zy(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        Zy(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function yi(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        ur(l, n.alternate, n), n = n.sibling;
  }
  function lo(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ln(4, n, n.return), lo(n);
          break;
        case 1:
          Kn(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && uc(
            n,
            n.return,
            u
          ), lo(n);
          break;
        case 27:
          fo(n.stateNode);
        case 26:
        case 5:
          Kn(n, n.return), lo(n);
          break;
        case 22:
          n.memoizedState === null && lo(n);
          break;
        case 30:
          lo(n);
          break;
        default:
          lo(n);
      }
      l = l.sibling;
    }
  }
  function $n(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, s = l, r = n, m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          $n(
            s,
            r,
            u
          ), On(4, r);
          break;
        case 1:
          if ($n(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (B) {
              Dt(c, c.return, B);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var v = c.stateNode;
            try {
              var A = s.shared.hiddenCallbacks;
              if (A !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < A.length; s++)
                  jd(A[s], v);
            } catch (B) {
              Dt(c, c.return, B);
            }
          }
          u && m & 64 && ih(r), Cu(r, r.return);
          break;
        case 27:
          Gy(r);
        case 26:
        case 5:
          $n(
            s,
            r,
            u
          ), u && c === null && m & 4 && Yy(r), Cu(r, r.return);
          break;
        case 12:
          $n(
            s,
            r,
            u
          );
          break;
        case 31:
          $n(
            s,
            r,
            u
          ), u && m & 4 && ug(s, r);
          break;
        case 13:
          $n(
            s,
            r,
            u
          ), u && m & 4 && Vy(s, r);
          break;
        case 22:
          r.memoizedState === null && $n(
            s,
            r,
            u
          ), Cu(r, r.return);
          break;
        case 30:
          break;
        default:
          $n(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function sh(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && xs(u));
  }
  function rh(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && xs(l));
  }
  function zn(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        vf(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function vf(l, n, u, c) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        zn(
          l,
          n,
          u,
          c
        ), s & 2048 && On(9, n);
        break;
      case 1:
        zn(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        zn(
          l,
          n,
          u,
          c
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && xs(l)));
        break;
      case 12:
        if (s & 2048) {
          zn(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, m = r.id, v = r.onPostCommit;
            typeof v == "function" && v(
              m,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (A) {
            Dt(n, n.return, A);
          }
        } else
          zn(
            l,
            n,
            u,
            c
          );
        break;
      case 31:
        zn(
          l,
          n,
          u,
          c
        );
        break;
      case 13:
        zn(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, m = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? zn(
          l,
          n,
          u,
          c
        ) : or(l, n) : r._visibility & 2 ? zn(
          l,
          n,
          u,
          c
        ) : (r._visibility |= 2, Sf(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && sh(m, n);
        break;
      case 24:
        zn(
          l,
          n,
          u,
          c
        ), s & 2048 && rh(n.alternate, n);
        break;
      default:
        zn(
          l,
          n,
          u,
          c
        );
    }
  }
  function Sf(l, n, u, c, s) {
    for (s = s && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var r = l, m = n, v = u, A = c, B = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Sf(
            r,
            m,
            v,
            A,
            s
          ), On(8, m);
          break;
        case 23:
          break;
        case 22:
          var V = m.stateNode;
          m.memoizedState !== null ? V._visibility & 2 ? Sf(
            r,
            m,
            v,
            A,
            s
          ) : or(
            r,
            m
          ) : (V._visibility |= 2, Sf(
            r,
            m,
            v,
            A,
            s
          )), s && B & 2048 && sh(
            m.alternate,
            m
          );
          break;
        case 24:
          Sf(
            r,
            m,
            v,
            A,
            s
          ), s && B & 2048 && rh(m.alternate, m);
          break;
        default:
          Sf(
            r,
            m,
            v,
            A,
            s
          );
      }
      n = n.sibling;
    }
  }
  function or(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            or(u, c), s & 2048 && sh(
              c.alternate,
              c
            );
            break;
          case 24:
            or(u, c), s & 2048 && rh(c.alternate, c);
            break;
          default:
            or(u, c);
        }
        n = n.sibling;
      }
  }
  var Ua = 8192;
  function Hu(l, n, u) {
    if (l.subtreeFlags & Ua)
      for (l = l.child; l !== null; )
        ig(
          l,
          n,
          u
        ), l = l.sibling;
  }
  function ig(l, n, u) {
    switch (l.tag) {
      case 26:
        Hu(
          l,
          n,
          u
        ), l.flags & Ua && l.memoizedState !== null && qu(
          u,
          $e,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Hu(
          l,
          n,
          u
        );
        break;
      case 3:
      case 4:
        var c = $e;
        $e = ia(l.stateNode.containerInfo), Hu(
          l,
          n,
          u
        ), $e = c;
        break;
      case 22:
        l.memoizedState === null && (c = l.alternate, c !== null && c.memoizedState !== null ? (c = Ua, Ua = 16777216, Hu(
          l,
          n,
          u
        ), Ua = c) : Hu(
          l,
          n,
          u
        ));
        break;
      default:
        Hu(
          l,
          n,
          u
        );
    }
  }
  function dh(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function bf(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          wl = c, hh(
            c,
            l
          );
        }
      dh(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Jy(l), l = l.sibling;
  }
  function Jy(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        bf(l), l.flags & 2048 && ln(9, l, l.return);
        break;
      case 3:
        bf(l);
        break;
      case 12:
        bf(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, fr(l)) : bf(l);
        break;
      default:
        bf(l);
    }
  }
  function fr(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          wl = c, hh(
            c,
            l
          );
        }
      dh(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          ln(8, n, n.return), fr(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, fr(n));
          break;
        default:
          fr(n);
      }
      l = l.sibling;
    }
  }
  function hh(l, n) {
    for (; wl !== null; ) {
      var u = wl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ln(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          xs(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, wl = c;
      else
        e: for (u = l; wl !== null; ) {
          c = wl;
          var s = c.sibling, r = c.return;
          if (Xy(c), c === u) {
            wl = null;
            break e;
          }
          if (s !== null) {
            s.return = r, wl = s;
            break e;
          }
          wl = r;
        }
    }
  }
  var cg = {
    getCacheForType: function(l) {
      var n = W(hl), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return W(hl).controller.signal;
    }
  }, Ky = typeof WeakMap == "function" ? WeakMap : Map, gt = 0, Ut = null, ct = null, lt = 0, zt = 0, je = null, Nu = !1, ic = !1, mh = !1, kn = 0, Gt = 0, Wn = 0, ao = 0, yh = 0, Aa = 0, al = 0, sr = null, nl = null, ph = !1, Fn = 0, $y = 0, bt = 1 / 0, Ef = null, Wt = null, Rl = 0, pi = null, cc = null, ju = 0, Ha = 0, gh = null, vh = null, Tf = 0, rr = null;
  function Na() {
    return (gt & 2) !== 0 && lt !== 0 ? lt & -lt : M.T !== null ? Ah() : ld();
  }
  function og() {
    if (Aa === 0)
      if ((lt & 536870912) === 0 || it) {
        var l = ue;
        ue <<= 1, (ue & 3932160) === 0 && (ue = 262144), Aa = l;
      } else Aa = 536870912;
    return l = ga.current, l !== null && (l.flags |= 32), Aa;
  }
  function Oa(l, n, u) {
    (l === Ut && (zt === 2 || zt === 9) || l.cancelPendingCommit !== null) && (xu(l, 0), gi(
      l,
      lt,
      Aa,
      !1
    )), Hi(l, u), ((gt & 2) === 0 || l !== Ut) && (l === Ut && ((gt & 2) === 0 && (ao |= u), Gt === 4 && gi(
      l,
      lt,
      Aa,
      !1
    )), Bu(l));
  }
  function fg(l, n, u) {
    if ((gt & 6) !== 0) throw Error(z(327));
    var c = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || tt(l, n), s = c ? mg(l, n) : bh(l, n, !0), r = c;
    do {
      if (s === 0) {
        ic && !c && gi(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !sg(u)) {
          s = bh(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var m = 0;
          else
            m = l.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            n = m;
            e: {
              var v = l;
              s = sr;
              var A = v.current.memoizedState.isDehydrated;
              if (A && (xu(v, m).flags |= 256), m = bh(
                v,
                m,
                !1
              ), m !== 2) {
                if (mh && !A) {
                  v.errorRecoveryDisabledLanes |= r, ao |= r, s = 4;
                  break e;
                }
                r = nl, nl = s, r !== null && (nl === null ? nl = r : nl.push.apply(
                  nl,
                  r
                ));
              }
              s = m;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          xu(l, 0), gi(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, r = s, r) {
            case 0:
            case 1:
              throw Error(z(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              gi(
                c,
                n,
                Aa,
                !Nu
              );
              break e;
            case 2:
              nl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(z(329));
          }
          if ((n & 62914560) === n && (s = Fn + 300 - vl(), 10 < s)) {
            if (gi(
              c,
              n,
              Aa,
              !Nu
            ), pe(c, 0, !0) !== 0) break e;
            ju = n, c.timeoutHandle = Er(
              dr.bind(
                null,
                c,
                u,
                nl,
                Ef,
                ph,
                n,
                Aa,
                ao,
                al,
                Nu,
                r,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break e;
          }
          dr(
            c,
            u,
            nl,
            Ef,
            ph,
            n,
            Aa,
            ao,
            al,
            Nu,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Bu(l);
  }
  function dr(l, n, u, c, s, r, m, v, A, B, V, $, Y, Q) {
    if (l.timeoutHandle = -1, $ = n.subtreeFlags, $ & 8192 || ($ & 16785408) === 16785408) {
      $ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Nn
      }, ig(
        n,
        r,
        $
      );
      var de = (r & 62914560) === r ? Fn - vl() : (r & 4194048) === r ? $y - vl() : 0;
      if (de = Sp(
        $,
        de
      ), de !== null) {
        ju = r, l.cancelPendingCommit = de(
          vg.bind(
            null,
            l,
            n,
            r,
            u,
            c,
            s,
            m,
            v,
            A,
            V,
            $,
            null,
            Y,
            Q
          )
        ), gi(l, r, m, !B);
        return;
      }
    }
    vg(
      l,
      n,
      r,
      u,
      c,
      s,
      m,
      v,
      A
    );
  }
  function sg(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var s = u[c], r = s.getSnapshot;
          s = s.value;
          try {
            if (!na(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function gi(l, n, u, c) {
    n &= ~yh, n &= ~ao, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Hl(s), m = 1 << r;
      c[r] = -1, s &= ~m;
    }
    u !== 0 && ms(l, u, n);
  }
  function Af() {
    return (gt & 6) === 0 ? (Si(0), !1) : !0;
  }
  function ky() {
    if (ct !== null) {
      if (zt === 0)
        var l = ct.return;
      else
        l = ct, Xn = ii = null, Zs(l), $i = null, Zc = 0, l = ct;
      for (; l !== null; )
        ng(l.alternate, l), l = l.return;
      ct = null;
    }
  }
  function xu(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, jg(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), ju = 0, ky(), Ut = l, ct = u = ni(l.current, null), lt = n, zt = 0, je = null, Nu = !1, ic = tt(l, n), mh = !1, al = Aa = yh = ao = Wn = Gt = 0, nl = sr = null, ph = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - Hl(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return kn = n, Za(), u;
  }
  function Of(l, n) {
    Ve = null, M.H = Ps, n === Zi || n === ef ? (n = ny(), zt = 3) : n === Qc ? (n = ny(), zt = 4) : zt = n === th ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, je = n, ct === null && (Gt = 1, df(
      l,
      Ka(n, l.current)
    ));
  }
  function rg() {
    var l = ga.current;
    return l === null ? !0 : (lt & 4194048) === lt ? Ia === null : (lt & 62914560) === lt || (lt & 536870912) !== 0 ? l === Ia : !1;
  }
  function dg() {
    var l = M.H;
    return M.H = Ps, l === null ? Ps : l;
  }
  function hg() {
    var l = M.A;
    return M.A = cg, l;
  }
  function Sh() {
    Gt = 4, Nu || (lt & 4194048) !== lt && ga.current !== null || (ic = !0), (Wn & 134217727) === 0 && (ao & 134217727) === 0 || Ut === null || gi(
      Ut,
      lt,
      Aa,
      !1
    );
  }
  function bh(l, n, u) {
    var c = gt;
    gt |= 2;
    var s = dg(), r = hg();
    (Ut !== l || lt !== n) && (Ef = null, xu(l, n)), n = !1;
    var m = Gt;
    e: do
      try {
        if (zt !== 0 && ct !== null) {
          var v = ct, A = je;
          switch (zt) {
            case 8:
              ky(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ga.current === null && (n = !0);
              var B = zt;
              if (zt = 0, je = null, no(l, v, A, B), u && ic) {
                m = 0;
                break e;
              }
              break;
            default:
              B = zt, zt = 0, je = null, no(l, v, A, B);
          }
        }
        aS(), m = Gt;
        break;
      } catch (V) {
        Of(l, V);
      }
    while (!0);
    return n && l.shellSuspendCounter++, Xn = ii = null, gt = c, M.H = s, M.A = r, ct === null && (Ut = null, lt = 0, Za()), m;
  }
  function aS() {
    for (; ct !== null; ) yg(ct);
  }
  function mg(l, n) {
    var u = gt;
    gt |= 2;
    var c = dg(), s = hg();
    Ut !== l || lt !== n ? (Ef = null, bt = vl() + 500, xu(l, n)) : ic = tt(
      l,
      n
    );
    e: do
      try {
        if (zt !== 0 && ct !== null) {
          n = ct;
          var r = je;
          t: switch (zt) {
            case 1:
              zt = 0, je = null, no(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (ly(r)) {
                zt = 0, je = null, pg(n);
                break;
              }
              n = function() {
                zt !== 2 && zt !== 9 || Ut !== l || (zt = 7), Bu(l);
              }, r.then(n, n);
              break e;
            case 3:
              zt = 7;
              break e;
            case 4:
              zt = 5;
              break e;
            case 7:
              ly(r) ? (zt = 0, je = null, pg(n)) : (zt = 0, je = null, no(l, n, r, 7));
              break;
            case 5:
              var m = null;
              switch (ct.tag) {
                case 26:
                  m = ct.memoizedState;
                case 5:
                case 27:
                  var v = ct;
                  if (m ? xa(m) : v.stateNode.complete) {
                    zt = 0, je = null;
                    var A = v.sibling;
                    if (A !== null) ct = A;
                    else {
                      var B = v.return;
                      B !== null ? (ct = B, hr(B)) : ct = null;
                    }
                    break t;
                  }
              }
              zt = 0, je = null, no(l, n, r, 5);
              break;
            case 6:
              zt = 0, je = null, no(l, n, r, 6);
              break;
            case 8:
              ky(), Gt = 6;
              break e;
            default:
              throw Error(z(462));
          }
        }
        oc();
        break;
      } catch (V) {
        Of(l, V);
      }
    while (!0);
    return Xn = ii = null, M.H = c, M.A = s, gt = u, ct !== null ? 0 : (Ut = null, lt = 0, Za(), Gt);
  }
  function oc() {
    for (; ct !== null && !ou(); )
      yg(ct);
  }
  function yg(l) {
    var n = xy(l.alternate, l, kn);
    l.memoizedProps = l.pendingProps, n === null ? hr(l) : ct = n;
  }
  function pg(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = ac(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          lt
        );
        break;
      case 11:
        n = ac(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          lt
        );
        break;
      case 5:
        Zs(n);
      default:
        ng(u, n), n = ct = km(n, kn), n = xy(u, n, kn);
    }
    l.memoizedProps = l.pendingProps, n === null ? hr(l) : ct = n;
  }
  function no(l, n, u, c) {
    Xn = ii = null, Zs(n), $i = null, Zc = 0;
    var s = n.return;
    try {
      if (lS(
        l,
        s,
        n,
        u,
        lt
      )) {
        Gt = 1, df(
          l,
          Ka(u, l.current)
        ), ct = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw ct = s, r;
      Gt = 1, df(
        l,
        Ka(u, l.current)
      ), ct = null;
      return;
    }
    n.flags & 32768 ? (it || c === 1 ? l = !0 : ic || (lt & 536870912) !== 0 ? l = !1 : (Nu = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = ga.current, c !== null && c.tag === 13 && (c.flags |= 16384))), gg(n, l)) : hr(n);
  }
  function hr(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        gg(
          n,
          Nu
        );
        return;
      }
      l = n.return;
      var u = lg(
        n.alternate,
        n,
        kn
      );
      if (u !== null) {
        ct = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        ct = n;
        return;
      }
      ct = n = l;
    } while (n !== null);
    Gt === 0 && (Gt = 5);
  }
  function gg(l, n) {
    do {
      var u = ag(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, ct = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        ct = l;
        return;
      }
      ct = l = u;
    } while (l !== null);
    Gt = 6, ct = null;
  }
  function vg(l, n, u, c, s, r, m, v, A) {
    l.cancelPendingCommit = null;
    do
      zf();
    while (Rl !== 0);
    if ((gt & 6) !== 0) throw Error(z(327));
    if (n !== null) {
      if (n === l.current) throw Error(z(177));
      if (r = n.lanes | n.childLanes, r |= Sn, jo(
        l,
        u,
        r,
        m,
        v,
        A
      ), l === Ut && (ct = Ut = null, lt = 0), cc = n, pi = l, ju = u, Ha = r, gh = s, vh = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Rg(Un, function() {
        return Ag(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = M.T, M.T = null, s = Z.p, Z.p = 2, m = gt, gt |= 4;
        try {
          gf(l, n, u);
        } finally {
          gt = m, Z.p = s, M.T = c;
        }
      }
      Rl = 1, Sg(), bg(), Eg();
    }
  }
  function Sg() {
    if (Rl === 1) {
      Rl = 0;
      var l = pi, n = cc, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = M.T, M.T = null;
        var c = Z.p;
        Z.p = 2;
        var s = gt;
        gt |= 4;
        try {
          fh(n, l);
          var r = Mh, m = Gi(l.containerInfo), v = r.focusedElem, A = r.selectionRange;
          if (m !== v && v && v.ownerDocument && xc(
            v.ownerDocument.documentElement,
            v
          )) {
            if (A !== null && zs(v)) {
              var B = A.start, V = A.end;
              if (V === void 0 && (V = B), "selectionStart" in v)
                v.selectionStart = B, v.selectionEnd = Math.min(
                  V,
                  v.value.length
                );
              else {
                var $ = v.ownerDocument || document, Y = $ && $.defaultView || window;
                if (Y.getSelection) {
                  var Q = Y.getSelection(), de = v.textContent.length, _e = Math.min(A.start, de), Nt = A.end === void 0 ? _e : Math.min(A.end, de);
                  !Q.extend && _e > Nt && (m = Nt, Nt = _e, _e = m);
                  var H = Km(
                    v,
                    _e
                  ), _ = Km(
                    v,
                    Nt
                  );
                  if (H && _ && (Q.rangeCount !== 1 || Q.anchorNode !== H.node || Q.anchorOffset !== H.offset || Q.focusNode !== _.node || Q.focusOffset !== _.offset)) {
                    var j = $.createRange();
                    j.setStart(H.node, H.offset), Q.removeAllRanges(), _e > Nt ? (Q.addRange(j), Q.extend(_.node, _.offset)) : (j.setEnd(_.node, _.offset), Q.addRange(j));
                  }
                }
              }
            }
            for ($ = [], Q = v; Q = Q.parentNode; )
              Q.nodeType === 1 && $.push({
                element: Q,
                left: Q.scrollLeft,
                top: Q.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < $.length; v++) {
              var K = $[v];
              K.element.scrollLeft = K.left, K.element.scrollTop = K.top;
            }
          }
          _l = !!_h, Mh = _h = null;
        } finally {
          gt = s, Z.p = c, M.T = u;
        }
      }
      l.current = n, Rl = 2;
    }
  }
  function bg() {
    if (Rl === 2) {
      Rl = 0;
      var l = pi, n = cc, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = M.T, M.T = null;
        var c = Z.p;
        Z.p = 2;
        var s = gt;
        gt |= 4;
        try {
          ur(l, n.alternate, n);
        } finally {
          gt = s, Z.p = c, M.T = u;
        }
      }
      Rl = 3;
    }
  }
  function Eg() {
    if (Rl === 4 || Rl === 3) {
      Rl = 0, bc();
      var l = pi, n = cc, u = ju, c = vh;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Rl = 5 : (Rl = 0, cc = pi = null, Tg(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (Wt = null), Em(u), n = n.stateNode, Ol && typeof Ol.onCommitFiberRoot == "function")
        try {
          Ol.onCommitFiberRoot(
            hn,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = M.T, s = Z.p, Z.p = 2, M.T = null;
        try {
          for (var r = l.onRecoverableError, m = 0; m < c.length; m++) {
            var v = c[m];
            r(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          M.T = n, Z.p = s;
        }
      }
      (ju & 3) !== 0 && zf(), Bu(l), s = l.pendingLanes, (u & 261930) !== 0 && (s & 42) !== 0 ? l === rr ? Tf++ : (Tf = 0, rr = l) : Tf = 0, Si(0);
    }
  }
  function Tg(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, xs(n)));
  }
  function zf() {
    return Sg(), bg(), Eg(), Ag();
  }
  function Ag() {
    if (Rl !== 5) return !1;
    var l = pi, n = Ha;
    Ha = 0;
    var u = Em(ju), c = M.T, s = Z.p;
    try {
      Z.p = 32 > u ? 32 : u, M.T = null, u = gh, gh = null;
      var r = pi, m = ju;
      if (Rl = 0, cc = pi = null, ju = 0, (gt & 6) !== 0) throw Error(z(331));
      var v = gt;
      if (gt |= 4, Jy(r.current), vf(
        r,
        r.current,
        m,
        u
      ), gt = v, Si(0, !1), Ol && typeof Ol.onPostCommitFiberRoot == "function")
        try {
          Ol.onPostCommitFiberRoot(hn, r);
        } catch {
        }
      return !0;
    } finally {
      Z.p = s, M.T = c, Tg(l, n);
    }
  }
  function Og(l, n, u) {
    n = Ka(u, n), n = Dy(l.stateNode, n, 2), l = Fa(l, n, 2), l !== null && (Hi(l, 2), Bu(l));
  }
  function Dt(l, n, u) {
    if (l.tag === 3)
      Og(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Og(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Wt === null || !Wt.has(c))) {
            l = Ka(u, l), u = Ry(2), c = Fa(n, u, 2), c !== null && (_y(
              u,
              c,
              n,
              l
            ), Hi(c, 2), Bu(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function mr(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new Ky();
      var s = /* @__PURE__ */ new Set();
      c.set(n, s);
    } else
      s = c.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(n, s));
    s.has(u) || (mh = !0, s.add(u), l = Wy.bind(null, l, n, u), n.then(l, l));
  }
  function Wy(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Ut === l && (lt & u) === u && (Gt === 4 || Gt === 3 && (lt & 62914560) === lt && 300 > vl() - Fn ? (gt & 2) === 0 && xu(l, 0) : yh |= u, al === lt && (al = 0)), Bu(l);
  }
  function zg(l, n) {
    n === 0 && (n = la()), l = ai(l, n), l !== null && (Hi(l, n), Bu(l));
  }
  function an(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), zg(l, u);
  }
  function Dg(l, n) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var c = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(z(314));
    }
    c !== null && c.delete(n), zg(l, u);
  }
  function Rg(l, n) {
    return me(l, n);
  }
  var Df = null, uo = null, Fy = !1, Eh = !1, Iy = !1, vi = 0;
  function Bu(l) {
    l !== uo && l.next === null && (uo === null ? Df = uo = l : uo = uo.next = l), Eh = !0, Fy || (Fy = !0, pr());
  }
  function Si(l, n) {
    if (!Iy && Eh) {
      Iy = !0;
      do
        for (var u = !1, c = Df; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = c.suspendedLanes, v = c.pingedLanes;
              r = (1 << 31 - Hl(42 | l) + 1) - 1, r &= s & ~(m & ~v), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, io(c, r));
          } else
            r = lt, r = pe(
              c,
              c === Ut ? r : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (r & 3) === 0 || tt(c, r) || (u = !0, io(c, r));
          c = c.next;
        }
      while (u);
      Iy = !1;
    }
  }
  function Th() {
    Py();
  }
  function Py() {
    Eh = Fy = !1;
    var l = 0;
    vi !== 0 && nS() && (l = vi);
    for (var n = vl(), u = null, c = Df; c !== null; ) {
      var s = c.next, r = ep(c, n);
      r === 0 ? (c.next = null, u === null ? Df = s : u.next = s, s === null && (uo = u)) : (u = c, (l !== 0 || (r & 3) !== 0) && (Eh = !0)), c = s;
    }
    Rl !== 0 && Rl !== 5 || Si(l), vi !== 0 && (vi = 0);
  }
  function ep(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - Hl(r), v = 1 << m, A = s[m];
      A === -1 ? ((v & u) === 0 || (v & c) !== 0) && (s[m] = Xe(v, n)) : A <= n && (l.expiredLanes |= v), r &= ~v;
    }
    if (n = Ut, u = lt, u = pe(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (zt === 2 || zt === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && Ci(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || tt(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && Ci(c), Em(u)) {
        case 2:
        case 8:
          u = Ho;
          break;
        case 32:
          u = Un;
          break;
        case 268435456:
          u = No;
          break;
        default:
          u = Un;
      }
      return c = yr.bind(null, l), u = me(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && Ci(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function yr(l, n) {
    if (Rl !== 0 && Rl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (zf() && l.callbackNode !== u)
      return null;
    var c = lt;
    return c = pe(
      l,
      l === Ut ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (fg(l, c, n), ep(l, vl()), l.callbackNode != null && l.callbackNode === u ? yr.bind(null, l) : null);
  }
  function io(l, n) {
    if (zf()) return null;
    fg(l, n, !0);
  }
  function pr() {
    xg(function() {
      (gt & 6) !== 0 ? me(
        Uo,
        Th
      ) : Py();
    });
  }
  function Ah() {
    if (vi === 0) {
      var l = Vi;
      l === 0 && (l = te, te <<= 1, (te & 261888) === 0 && (te = 256)), vi = l;
    }
    return vi;
  }
  function _g(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : yn("" + l);
  }
  function co(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function gr(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = _g(
        (s[ra] || null).action
      ), m = c.submitter;
      m && (n = (n = m[ra] || null) ? _g(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var v = new Ts(
        "action",
        "action",
        null,
        c,
        s
      );
      l.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (vi !== 0) {
                  var A = m ? co(s, m) : new FormData(s);
                  sf(
                    u,
                    {
                      pending: !0,
                      data: A,
                      method: s.method,
                      action: r
                    },
                    null,
                    A
                  );
                }
              } else
                typeof r == "function" && (v.preventDefault(), A = m ? co(s, m) : new FormData(s), sf(
                  u,
                  {
                    pending: !0,
                    data: A,
                    method: s.method,
                    action: r
                  },
                  r,
                  A
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Oh = 0; Oh < $o.length; Oh++) {
    var Rf = $o[Oh], tp = Rf.toLowerCase(), lp = Rf[0].toUpperCase() + Rf.slice(1);
    ha(
      tp,
      "on" + lp
    );
  }
  ha(Rs, "onAnimationEnd"), ha($m, "onAnimationIteration"), ha(Od, "onAnimationStart"), ha("dblclick", "onDoubleClick"), ha("focusin", "onFocus"), ha("focusout", "onBlur"), ha(Bc, "onTransitionRun"), ha(_s, "onTransitionStart"), ha(pu, "onTransitionCancel"), ha(w0, "onTransitionEnd"), ru("onMouseEnter", ["mouseout", "mouseover"]), ru("onMouseLeave", ["mouseout", "mouseover"]), ru("onPointerEnter", ["pointerout", "pointerover"]), ru("onPointerLeave", ["pointerout", "pointerover"]), xi(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), xi(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), xi("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), xi(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), xi(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), xi(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var _f = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Mg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_f)
  );
  function Cg(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], s = c.event;
      c = c.listeners;
      e: {
        var r = void 0;
        if (n)
          for (var m = c.length - 1; 0 <= m; m--) {
            var v = c[m], A = v.instance, B = v.currentTarget;
            if (v = v.listener, A !== r && s.isPropagationStopped())
              break e;
            r = v, s.currentTarget = B;
            try {
              r(s);
            } catch (V) {
              qc(V);
            }
            s.currentTarget = null, r = A;
          }
        else
          for (m = 0; m < c.length; m++) {
            if (v = c[m], A = v.instance, B = v.currentTarget, v = v.listener, A !== r && s.isPropagationStopped())
              break e;
            r = v, s.currentTarget = B;
            try {
              r(s);
            } catch (V) {
              qc(V);
            }
            s.currentTarget = null, r = A;
          }
      }
    }
  }
  function ut(l, n) {
    var u = n[ad];
    u === void 0 && (u = n[ad] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (vr(n, l, 2, !1), u.add(c));
  }
  function ap(l, n, u) {
    var c = 0;
    n && (c |= 4), vr(
      u,
      l,
      c,
      n
    );
  }
  var zh = "_reactListening" + Math.random().toString(36).slice(2);
  function Mf(l) {
    if (!l[zh]) {
      l[zh] = !0, zc.forEach(function(u) {
        u !== "selectionchange" && (Mg.has(u) || ap(u, !1, l), ap(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[zh] || (n[zh] = !0, ap("selectionchange", !1, n));
    }
  }
  function vr(l, n, u, c) {
    switch (Rr(n)) {
      case 2:
        var s = Yu;
        break;
      case 8:
        s = wu;
        break;
      default:
        s = Wl;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !bs || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function np(l, n, u, c, s) {
    var r = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var m = c.tag;
        if (m === 3 || m === 4) {
          var v = c.stateNode.containerInfo;
          if (v === s) break;
          if (m === 4)
            for (m = c.return; m !== null; ) {
              var A = m.tag;
              if ((A === 3 || A === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; v !== null; ) {
            if (m = Tc(v), m === null) return;
            if (A = m.tag, A === 5 || A === 6 || A === 26 || A === 27) {
              c = r = m;
              continue e;
            }
            v = v.parentNode;
          }
        }
        c = c.return;
      }
    Cm(function() {
      var B = r, V = rd(u), $ = [];
      e: {
        var Y = gu.get(l);
        if (Y !== void 0) {
          var Q = Ts, de = l;
          switch (l) {
            case "keypress":
              if (hd(u) === 0) break e;
            case "keydown":
            case "keyup":
              Q = gd;
              break;
            case "focusin":
              de = "focus", Q = yd;
              break;
            case "focusout":
              de = "blur", Q = yd;
              break;
            case "beforeblur":
            case "afterblur":
              Q = yd;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Q = Qo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = R0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = H0;
              break;
            case Rs:
            case $m:
            case Od:
              Q = M0;
              break;
            case w0:
              Q = Iv;
              break;
            case "scroll":
            case "scrollend":
              Q = Wv;
              break;
            case "wheel":
              Q = Pv;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = Mc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = Bn;
              break;
            case "toggle":
            case "beforetoggle":
              Q = wm;
          }
          var _e = (n & 4) !== 0, Nt = !_e && (l === "scroll" || l === "scrollend"), H = _e ? Y !== null ? Y + "Capture" : null : Y;
          _e = [];
          for (var _ = B, j; _ !== null; ) {
            var K = _;
            if (j = K.stateNode, K = K.tag, K !== 5 && K !== 26 && K !== 27 || j === null || H === null || (K = Nl(_, H), K != null && _e.push(
              Sr(_, K, j)
            )), Nt) break;
            _ = _.return;
          }
          0 < _e.length && (Y = new Q(
            Y,
            de,
            null,
            u,
            V
          ), $.push({ event: Y, listeners: _e }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (Y = l === "mouseover" || l === "pointerover", Q = l === "mouseout" || l === "pointerout", Y && u !== sd && (de = u.relatedTarget || u.fromElement) && (Tc(de) || de[Ni]))
            break e;
          if ((Q || Y) && (Y = V.window === V ? V : (Y = V.ownerDocument) ? Y.defaultView || Y.parentWindow : window, Q ? (de = u.relatedTarget || u.toElement, Q = B, de = de ? Tc(de) : null, de !== null && (Nt = ve(de), _e = de.tag, de !== Nt || _e !== 5 && _e !== 27 && _e !== 6) && (de = null)) : (Q = null, de = B), Q !== de)) {
            if (_e = Qo, K = "onMouseLeave", H = "onMouseEnter", _ = "mouse", (l === "pointerout" || l === "pointerover") && (_e = Bn, K = "onPointerLeave", H = "onPointerEnter", _ = "pointer"), Nt = Q == null ? Y : xo(Q), j = de == null ? Y : xo(de), Y = new _e(
              K,
              _ + "leave",
              Q,
              u,
              V
            ), Y.target = Nt, Y.relatedTarget = j, K = null, Tc(V) === B && (_e = new _e(
              H,
              _ + "enter",
              de,
              u,
              V
            ), _e.target = j, _e.relatedTarget = Nt, K = _e), Nt = K, Q && de)
              t: {
                for (_e = Ug, H = Q, _ = de, j = 0, K = H; K; K = _e(K))
                  j++;
                K = 0;
                for (var Ae = _; Ae; Ae = _e(Ae))
                  K++;
                for (; 0 < j - K; )
                  H = _e(H), j--;
                for (; 0 < K - j; )
                  _ = _e(_), K--;
                for (; j--; ) {
                  if (H === _ || _ !== null && H === _.alternate) {
                    _e = H;
                    break t;
                  }
                  H = _e(H), _ = _e(_);
                }
                _e = null;
              }
            else _e = null;
            Q !== null && Dh(
              $,
              Y,
              Q,
              _e,
              !1
            ), de !== null && Nt !== null && Dh(
              $,
              Nt,
              de,
              _e,
              !0
            );
          }
        }
        e: {
          if (Y = B ? xo(B) : window, Q = Y.nodeName && Y.nodeName.toLowerCase(), Q === "select" || Q === "input" && Y.type === "file")
            var ht = Vm;
          else if (yu(Y))
            if (bd)
              ht = jc;
            else {
              ht = q0;
              var ge = B0;
            }
          else
            Q = Y.nodeName, !Q || Q.toLowerCase() !== "input" || Y.type !== "checkbox" && Y.type !== "radio" ? B && Mm(B.elementType) && (ht = Vm) : ht = wi;
          if (ht && (ht = ht(l, B))) {
            Qm(
              $,
              ht,
              u,
              V
            );
            break e;
          }
          ge && ge(l, Y, B), l === "focusout" && B && Y.type === "number" && B.memoizedProps.value != null && Dc(Y, "number", Y.value);
        }
        switch (ge = B ? xo(B) : window, l) {
          case "focusin":
            (yu(ge) || ge.contentEditable === "true") && (Li = ge, Jo = B, vn = null);
            break;
          case "focusout":
            vn = Jo = Li = null;
            break;
          case "mousedown":
            Yn = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Yn = !1, Ad($, u, V);
            break;
          case "selectionchange":
            if (Ds) break;
          case "keydown":
          case "keyup":
            Ad($, u, V);
        }
        var Qe;
        if (Vo)
          e: {
            switch (l) {
              case "compositionstart":
                var ke = "onCompositionStart";
                break e;
              case "compositionend":
                ke = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ke = "onCompositionUpdate";
                break e;
            }
            ke = void 0;
          }
        else
          Uc ? Sd(l, u) && (ke = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (ke = "onCompositionStart");
        ke && (Gm && u.locale !== "ko" && (Uc || ke !== "onCompositionStart" ? ke === "onCompositionEnd" && Uc && (Qe = Hm()) : (ti = V, Um = "value" in ti ? ti.value : ti.textContent, Uc = !0)), ge = br(B, ke), 0 < ge.length && (ke = new C0(
          ke,
          l,
          null,
          u,
          V
        ), $.push({ event: ke, listeners: ge }), Qe ? ke.data = Qe : (Qe = Lm(u), Qe !== null && (ke.data = Qe)))), (Qe = aa ? x0(l, u) : eS(l, u)) && (ke = br(B, "onBeforeInput"), 0 < ke.length && (ge = new C0(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          V
        ), $.push({
          event: ge,
          listeners: ke
        }), ge.data = Qe)), gr(
          $,
          l,
          B,
          u,
          V
        );
      }
      Cg($, n);
    });
  }
  function Sr(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function br(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = Nl(l, u), s != null && c.unshift(
        Sr(l, s, r)
      ), s = Nl(l, n), s != null && c.push(
        Sr(l, s, r)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function Ug(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Dh(l, n, u, c, s) {
    for (var r = n._reactName, m = []; u !== null && u !== c; ) {
      var v = u, A = v.alternate, B = v.stateNode;
      if (v = v.tag, A !== null && A === c) break;
      v !== 5 && v !== 26 && v !== 27 || B === null || (A = B, s ? (B = Nl(u, r), B != null && m.unshift(
        Sr(u, B, A)
      )) : s || (B = Nl(u, r), B != null && m.push(
        Sr(u, B, A)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var Hg = /\r\n?/g, up = /\u0000|\uFFFD/g;
  function ip(l) {
    return (typeof l == "string" ? l : "" + l).replace(Hg, `
`).replace(up, "");
  }
  function cp(l, n) {
    return n = ip(n), ip(l) === n;
  }
  function Ht(l, n, u, c, s, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || du(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && du(l, "" + c);
        break;
      case "className":
        cd(l, "class", c);
        break;
      case "tabIndex":
        cd(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        cd(l, u, c);
        break;
      case "style":
        O0(l, c, r);
        break;
      case "data":
        if (n !== "object") {
          cd(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = yn("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && Ht(l, n, "name", s.name, s, null), Ht(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Ht(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Ht(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Ht(l, n, "encType", s.encType, s, null), Ht(l, n, "method", s.method, s, null), Ht(l, n, "target", s.target, s, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = yn("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = Nn);
        break;
      case "onScroll":
        c != null && ut("scroll", l);
        break;
      case "onScrollEnd":
        c != null && ut("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(z(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(z(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = yn("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        ut("beforetoggle", l), ut("toggle", l), Yo(l, "popover", c);
        break;
      case "xlinkActuate":
        Pu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        Pu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        Pu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        Pu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        Pu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        Pu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        Pu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        Pu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        Pu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        Yo(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = kv.get(u) || u, Yo(l, u, c));
    }
  }
  function op(l, n, u, c, s, r) {
    switch (u) {
      case "style":
        O0(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(z(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(z(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? du(l, c) : (typeof c == "number" || typeof c == "bigint") && du(l, "" + c);
        break;
      case "onScroll":
        c != null && ut("scroll", l);
        break;
      case "onScrollEnd":
        c != null && ut("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = Nn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ji.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[ra] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, s);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : Yo(l, u, c);
          }
    }
  }
  function kl(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ut("error", l), ut("load", l);
        var c = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var m = u[r];
            if (m != null)
              switch (r) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(z(137, n));
                default:
                  Ht(l, n, r, m, u, null);
              }
          }
        s && Ht(l, n, "srcSet", u.srcSet, u, null), c && Ht(l, n, "src", u.src, u, null);
        return;
      case "input":
        ut("invalid", l);
        var v = r = m = s = null, A = null, B = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var V = u[c];
            if (V != null)
              switch (c) {
                case "name":
                  s = V;
                  break;
                case "type":
                  m = V;
                  break;
                case "checked":
                  A = V;
                  break;
                case "defaultChecked":
                  B = V;
                  break;
                case "value":
                  r = V;
                  break;
                case "defaultValue":
                  v = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null)
                    throw Error(z(137, n));
                  break;
                default:
                  Ht(l, n, c, V, u, null);
              }
          }
        gs(
          l,
          r,
          v,
          A,
          B,
          m,
          s,
          !1
        );
        return;
      case "select":
        ut("invalid", l), c = m = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (v = u[s], v != null))
            switch (s) {
              case "value":
                r = v;
                break;
              case "defaultValue":
                m = v;
                break;
              case "multiple":
                c = v;
              default:
                Ht(l, n, s, v, u, null);
            }
        n = r, u = m, l.multiple = !!c, n != null ? wo(l, !!c, n, !1) : u != null && wo(l, !!c, u, !0);
        return;
      case "textarea":
        ut("invalid", l), r = s = c = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (v = u[m], v != null))
            switch (m) {
              case "value":
                c = v;
                break;
              case "defaultValue":
                s = v;
                break;
              case "children":
                r = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(z(91));
                break;
              default:
                Ht(l, n, m, v, u, null);
            }
        _m(l, c, s, r);
        return;
      case "option":
        for (A in u)
          if (u.hasOwnProperty(A) && (c = u[A], c != null))
            switch (A) {
              case "selected":
                l.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                Ht(l, n, A, c, u, null);
            }
        return;
      case "dialog":
        ut("beforetoggle", l), ut("toggle", l), ut("cancel", l), ut("close", l);
        break;
      case "iframe":
      case "object":
        ut("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < _f.length; c++)
          ut(_f[c], l);
        break;
      case "image":
        ut("error", l), ut("load", l);
        break;
      case "details":
        ut("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        ut("error", l), ut("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (B in u)
          if (u.hasOwnProperty(B) && (c = u[B], c != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(z(137, n));
              default:
                Ht(l, n, B, c, u, null);
            }
        return;
      default:
        if (Mm(n)) {
          for (V in u)
            u.hasOwnProperty(V) && (c = u[V], c !== void 0 && op(
              l,
              n,
              V,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (v in u)
      u.hasOwnProperty(v) && (c = u[v], c != null && Ht(l, n, v, c, u, null));
  }
  function fp(l, n, u, c) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, r = null, m = null, v = null, A = null, B = null, V = null;
        for (Q in u) {
          var $ = u[Q];
          if (u.hasOwnProperty(Q) && $ != null)
            switch (Q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = $;
              default:
                c.hasOwnProperty(Q) || Ht(l, n, Q, null, c, $);
            }
        }
        for (var Y in c) {
          var Q = c[Y];
          if ($ = u[Y], c.hasOwnProperty(Y) && (Q != null || $ != null))
            switch (Y) {
              case "type":
                r = Q;
                break;
              case "name":
                s = Q;
                break;
              case "checked":
                B = Q;
                break;
              case "defaultChecked":
                V = Q;
                break;
              case "value":
                m = Q;
                break;
              case "defaultValue":
                v = Q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Q != null)
                  throw Error(z(137, n));
                break;
              default:
                Q !== $ && Ht(
                  l,
                  n,
                  Y,
                  Q,
                  c,
                  $
                );
            }
        }
        ps(
          l,
          m,
          v,
          A,
          B,
          V,
          r,
          s
        );
        return;
      case "select":
        Q = m = v = Y = null;
        for (r in u)
          if (A = u[r], u.hasOwnProperty(r) && A != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                Q = A;
              default:
                c.hasOwnProperty(r) || Ht(
                  l,
                  n,
                  r,
                  null,
                  c,
                  A
                );
            }
        for (s in c)
          if (r = c[s], A = u[s], c.hasOwnProperty(s) && (r != null || A != null))
            switch (s) {
              case "value":
                Y = r;
                break;
              case "defaultValue":
                v = r;
                break;
              case "multiple":
                m = r;
              default:
                r !== A && Ht(
                  l,
                  n,
                  s,
                  r,
                  c,
                  A
                );
            }
        n = v, u = m, c = Q, Y != null ? wo(l, !!u, Y, !1) : !!c != !!u && (n != null ? wo(l, !!u, n, !0) : wo(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        Q = Y = null;
        for (v in u)
          if (s = u[v], u.hasOwnProperty(v) && s != null && !c.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ht(l, n, v, null, c, s);
            }
        for (m in c)
          if (s = c[m], r = u[m], c.hasOwnProperty(m) && (s != null || r != null))
            switch (m) {
              case "value":
                Y = s;
                break;
              case "defaultValue":
                Q = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(z(91));
                break;
              default:
                s !== r && Ht(l, n, m, s, c, r);
            }
        Rm(l, Y, Q);
        return;
      case "option":
        for (var de in u)
          if (Y = u[de], u.hasOwnProperty(de) && Y != null && !c.hasOwnProperty(de))
            switch (de) {
              case "selected":
                l.selected = !1;
                break;
              default:
                Ht(
                  l,
                  n,
                  de,
                  null,
                  c,
                  Y
                );
            }
        for (A in c)
          if (Y = c[A], Q = u[A], c.hasOwnProperty(A) && Y !== Q && (Y != null || Q != null))
            switch (A) {
              case "selected":
                l.selected = Y && typeof Y != "function" && typeof Y != "symbol";
                break;
              default:
                Ht(
                  l,
                  n,
                  A,
                  Y,
                  c,
                  Q
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var _e in u)
          Y = u[_e], u.hasOwnProperty(_e) && Y != null && !c.hasOwnProperty(_e) && Ht(l, n, _e, null, c, Y);
        for (B in c)
          if (Y = c[B], Q = u[B], c.hasOwnProperty(B) && Y !== Q && (Y != null || Q != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Y != null)
                  throw Error(z(137, n));
                break;
              default:
                Ht(
                  l,
                  n,
                  B,
                  Y,
                  c,
                  Q
                );
            }
        return;
      default:
        if (Mm(n)) {
          for (var Nt in u)
            Y = u[Nt], u.hasOwnProperty(Nt) && Y !== void 0 && !c.hasOwnProperty(Nt) && op(
              l,
              n,
              Nt,
              void 0,
              c,
              Y
            );
          for (V in c)
            Y = c[V], Q = u[V], !c.hasOwnProperty(V) || Y === Q || Y === void 0 && Q === void 0 || op(
              l,
              n,
              V,
              Y,
              c,
              Q
            );
          return;
        }
    }
    for (var H in u)
      Y = u[H], u.hasOwnProperty(H) && Y != null && !c.hasOwnProperty(H) && Ht(l, n, H, null, c, Y);
    for ($ in c)
      Y = c[$], Q = u[$], !c.hasOwnProperty($) || Y === Q || Y == null && Q == null || Ht(l, n, $, Y, c, Q);
  }
  function Rh(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function sp() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, n = 0, u = performance.getEntriesByType("resource"), c = 0; c < u.length; c++) {
        var s = u[c], r = s.transferSize, m = s.initiatorType, v = s.duration;
        if (r && v && Rh(m)) {
          for (m = 0, v = s.responseEnd, c += 1; c < u.length; c++) {
            var A = u[c], B = A.startTime;
            if (B > v) break;
            var V = A.transferSize, $ = A.initiatorType;
            V && Rh($) && (A = A.responseEnd, m += V * (A < v ? 1 : (v - B) / (A - B)));
          }
          if (--c, n += 8 * (r + m) / (s.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var _h = null, Mh = null;
  function fc(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Ng(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function rp(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function Cf(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Ch = null;
  function nS() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Ch ? !1 : (Ch = l, !0) : (Ch = null, !1);
  }
  var Er = typeof setTimeout == "function" ? setTimeout : void 0, jg = typeof clearTimeout == "function" ? clearTimeout : void 0, oo = typeof Promise == "function" ? Promise : void 0, xg = typeof queueMicrotask == "function" ? queueMicrotask : typeof oo < "u" ? function(l) {
    return oo.resolve(null).then(l).catch(dp);
  } : Er;
  function dp(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function In(l) {
    return l === "head";
  }
  function hp(l, n) {
    var u = n, c = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$" || u === "/&") {
          if (c === 0) {
            l.removeChild(s), Xf(n);
            return;
          }
          c--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          c++;
        else if (u === "html")
          fo(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, fo(u);
          for (var r = u.firstChild; r; ) {
            var m = r.nextSibling, v = r.nodeName;
            r[su] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && r.rel.toLowerCase() === "stylesheet" || u.removeChild(r), r = m;
          }
        } else
          u === "body" && fo(l.ownerDocument.body);
      u = s;
    } while (u);
    Xf(n);
  }
  function pl(l, n) {
    var u = l;
    l = 0;
    do {
      var c = u.nextSibling;
      if (u.nodeType === 1 ? n ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (n ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), c && c.nodeType === 8)
        if (u = c.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = c;
    } while (u);
  }
  function Tr(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Tr(u), nd(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function uS(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[su])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = za(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Fe(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = za(l.nextSibling), l === null)) return null;
    return l;
  }
  function Bg(l, n) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !n || (l = za(l.nextSibling), l === null)) return null;
    return l;
  }
  function Dn(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function sc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Uf(l, n) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = n;
    else if (l.data !== "$?" || u.readyState !== "loading")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function za(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return l;
  }
  var Ar = null;
  function Uh(l) {
    l = l.nextSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (n === 0)
            return za(l.nextSibling);
          n--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || n++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Pn(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (n === 0) return l;
          n--;
        } else u !== "/$" && u !== "/&" || n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Hf(l, n, u) {
    switch (n = fc(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(z(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(z(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(z(454));
        return l;
      default:
        throw Error(z(451));
    }
  }
  function fo(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    nd(l);
  }
  var ja = /* @__PURE__ */ new Map(), Or = /* @__PURE__ */ new Set();
  function ia(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var eu = Z.d;
  Z.d = {
    f: iS,
    r: qg,
    D: X,
    C: Et,
    L: cS,
    m: mp,
    X: bi,
    S: yp,
    M: rc
  };
  function iS() {
    var l = eu.f(), n = Af();
    return l || n;
  }
  function qg(l) {
    var n = Ac(l);
    n !== null && n.tag === 5 && n.type === "form" ? Ct(n) : eu.r(l);
  }
  var Nf = typeof document > "u" ? null : document;
  function El(l, n, u) {
    var c = Nf;
    if (c && typeof n == "string" && n) {
      var s = Va(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), Or.has(s) || (Or.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), kl(n, "link", l), Tt(n), c.head.appendChild(n)));
    }
  }
  function X(l) {
    eu.D(l), El("dns-prefetch", l, null);
  }
  function Et(l, n) {
    eu.C(l, n), El("preconnect", l, n);
  }
  function cS(l, n, u) {
    eu.L(l, n, u);
    var c = Nf;
    if (c && l && n) {
      var s = 'link[rel="preload"][as="' + Va(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + Va(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + Va(
        u.imageSizes
      ) + '"]')) : s += '[href="' + Va(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = nn(l);
          break;
        case "script":
          r = so(l);
      }
      ja.has(r) || (l = q(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), ja.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(dc(r)) || n === "script" && c.querySelector(Bf(r)) || (n = c.createElement("link"), kl(n, "link", l), Tt(n), c.head.appendChild(n)));
    }
  }
  function mp(l, n) {
    eu.m(l, n);
    var u = Nf;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + Va(c) + '"][href="' + Va(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = so(l);
      }
      if (!ja.has(r) && (l = q({ rel: "modulepreload", href: l }, n), ja.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Bf(r)))
              return;
        }
        c = u.createElement("link"), kl(c, "link", l), Tt(c), u.head.appendChild(c);
      }
    }
  }
  function yp(l, n, u) {
    eu.S(l, n, u);
    var c = Nf;
    if (c && l) {
      var s = Oc(c).hoistableStyles, r = nn(l);
      n = n || "default";
      var m = s.get(r);
      if (!m) {
        var v = { loading: 0, preload: null };
        if (m = c.querySelector(
          dc(r)
        ))
          v.loading = 5;
        else {
          l = q(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = ja.get(r)) && Hh(l, u);
          var A = m = c.createElement("link");
          Tt(A), kl(A, "link", l), A._p = new Promise(function(B, V) {
            A.onload = B, A.onerror = V;
          }), A.addEventListener("load", function() {
            v.loading |= 1;
          }), A.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, zr(m, n, c);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: v
        }, s.set(r, m);
      }
    }
  }
  function bi(l, n) {
    eu.X(l, n);
    var u = Nf;
    if (u && l) {
      var c = Oc(u).hoistableScripts, s = so(l), r = c.get(s);
      r || (r = u.querySelector(Bf(s)), r || (l = q({ src: l, async: !0 }, n), (n = ja.get(s)) && Nh(l, n), r = u.createElement("script"), Tt(r), kl(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function rc(l, n) {
    eu.M(l, n);
    var u = Nf;
    if (u && l) {
      var c = Oc(u).hoistableScripts, s = so(l), r = c.get(s);
      r || (r = u.querySelector(Bf(s)), r || (l = q({ src: l, async: !0, type: "module" }, n), (n = ja.get(s)) && Nh(l, n), r = u.createElement("script"), Tt(r), kl(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function jf(l, n, u, c) {
    var s = (s = Le.current) ? ia(s) : null;
    if (!s) throw Error(z(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = nn(u.href), u = Oc(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = nn(u.href);
          var r = Oc(
            s
          ).hoistableStyles, m = r.get(l);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = s.querySelector(
            dc(l)
          )) && !r._p && (m.instance = r, m.state.loading = 5), ja.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, ja.set(l, u), r || Yg(
            s,
            l,
            u,
            m.state
          ))), n && c === null)
            throw Error(z(528, ""));
          return m;
        }
        if (n && c !== null)
          throw Error(z(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = so(u), u = Oc(
          s
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(z(444, l));
    }
  }
  function nn(l) {
    return 'href="' + Va(l) + '"';
  }
  function dc(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function xf(l) {
    return q({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Yg(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), kl(n, "link", u), Tt(n), l.head.appendChild(n));
  }
  function so(l) {
    return '[src="' + Va(l) + '"]';
  }
  function Bf(l) {
    return "script[async]" + l;
  }
  function pp(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + Va(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Tt(c), c;
          var s = q({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Tt(c), kl(c, "style", s), zr(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = nn(u.href);
          var r = l.querySelector(
            dc(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Tt(r), r;
          c = xf(u), (s = ja.get(s)) && Hh(c, s), r = (l.ownerDocument || l).createElement("link"), Tt(r);
          var m = r;
          return m._p = new Promise(function(v, A) {
            m.onload = v, m.onerror = A;
          }), kl(r, "link", c), n.state.loading |= 4, zr(r, u.precedence, l), n.instance = r;
        case "script":
          return r = so(u.src), (s = l.querySelector(
            Bf(r)
          )) ? (n.instance = s, Tt(s), s) : (c = u, (s = ja.get(r)) && (c = q({}, u), Nh(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), Tt(s), kl(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(z(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, zr(c, u.precedence, l));
    return n.instance;
  }
  function zr(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, m = 0; m < c.length; m++) {
      var v = c[m];
      if (v.dataset.precedence === n) r = v;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function Hh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function Nh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var qf = null;
  function gp(l, n, u) {
    if (qf === null) {
      var c = /* @__PURE__ */ new Map(), s = qf = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = qf, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[su] || r[Mt] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = r.getAttribute(n) || "";
        m = l + m;
        var v = c.get(m);
        v ? v.push(r) : c.set(m, [r]);
      }
    }
    return c;
  }
  function jh(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function vp(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return l = n.disabled, typeof n.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function xa(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function qu(l, n, u, c) {
    if (u.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var s = nn(c.href), r = n.querySelector(
          dc(s)
        );
        if (r) {
          n = r._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = xh.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = r, Tt(r);
          return;
        }
        r = n.ownerDocument || n, c = xf(c), (s = ja.get(s)) && Hh(c, s), r = r.createElement("link"), Tt(r);
        var m = r;
        m._p = new Promise(function(v, A) {
          m.onload = v, m.onerror = A;
        }), kl(r, "link", c), u.instance = r;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, n), (n = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = xh.bind(l), n.addEventListener("load", u), n.addEventListener("error", u));
    }
  }
  var un = 0;
  function Sp(l, n) {
    return l.stylesheets && l.count === 0 && qh(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var c = setTimeout(function() {
        if (l.stylesheets && qh(l, l.stylesheets), l.unsuspend) {
          var r = l.unsuspend;
          l.unsuspend = null, r();
        }
      }, 6e4 + n);
      0 < l.imgBytes && un === 0 && (un = 62500 * sp());
      var s = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && qh(l, l.stylesheets), l.unsuspend)) {
            var r = l.unsuspend;
            l.unsuspend = null, r();
          }
        },
        (l.imgBytes > un ? 50 : 800) + n
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(c), clearTimeout(s);
      };
    } : null;
  }
  function xh() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) qh(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Bh = null;
  function qh(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Bh = /* @__PURE__ */ new Map(), n.forEach(Gl, l), Bh = null, xh.call(l));
  }
  function Gl(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Bh.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Bh.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      s = n.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || c, r === c && u.set(null, s), u.set(m, s), this.count++, c = xh.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var Dr = {
    $$typeof: xt,
    Provider: null,
    Consumer: null,
    _currentValue: ae,
    _currentValue2: ae,
    _threadCount: 0
  };
  function bp(l, n, u, c, s, r, m, v, A) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = mn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mn(0), this.hiddenUpdates = mn(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = A, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Yh(l, n, u, c, s, r, m, v, A, B, V, $) {
    return l = new bp(
      l,
      n,
      u,
      m,
      A,
      B,
      V,
      $,
      v
    ), n = 1, r === !0 && (n |= 24), r = cl(3, null, null, n), l.current = r, r.stateNode = l, n = js(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, Ls(r), l;
  }
  function ro(l) {
    return l ? (l = ma, l) : ma;
  }
  function wg(l, n, u, c, s, r) {
    s = ro(s), c.context === null ? c.context = s : c.pendingContext = s, c = si(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = Fa(l, c, n), u !== null && (Oa(u, l, n), Wi(u, l, n));
  }
  function wh(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function Ep(l, n) {
    wh(l, n), (l = l.alternate) && wh(l, n);
  }
  function Gg(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = ai(l, 67108864);
      n !== null && Oa(n, l, 67108864), Ep(l, 67108864);
    }
  }
  function ho(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = Na();
      n = td(n);
      var u = ai(l, n);
      u !== null && Oa(u, l, n), Ep(l, n);
    }
  }
  var _l = !0;
  function Yu(l, n, u, c) {
    var s = M.T;
    M.T = null;
    var r = Z.p;
    try {
      Z.p = 2, Wl(l, n, u, c);
    } finally {
      Z.p = r, M.T = s;
    }
  }
  function wu(l, n, u, c) {
    var s = M.T;
    M.T = null;
    var r = Z.p;
    try {
      Z.p = 8, Wl(l, n, u, c);
    } finally {
      Z.p = r, M.T = s;
    }
  }
  function Wl(l, n, u, c) {
    if (_l) {
      var s = Tp(c);
      if (s === null)
        np(
          l,
          n,
          c,
          Gh,
          u
        ), Ei(l, c);
      else if (oS(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (Ei(l, c), n & 4 && -1 < Da.indexOf(l)) {
        for (; s !== null; ) {
          var r = Ac(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var m = Ce(r.pendingLanes);
                  if (m !== 0) {
                    var v = r;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                      var A = 1 << 31 - Hl(m);
                      v.entanglements[1] |= A, m &= ~A;
                    }
                    Bu(r), (gt & 6) === 0 && (bt = vl() + 500, Si(0));
                  }
                }
                break;
              case 31:
              case 13:
                v = ai(r, 2), v !== null && Oa(v, r, 2), Af(), Ep(r, 2);
            }
          if (r = Tp(c), r === null && np(
            l,
            n,
            c,
            Gh,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && c.stopPropagation();
      } else
        np(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function Tp(l) {
    return l = rd(l), Yf(l);
  }
  var Gh = null;
  function Yf(l) {
    if (Gh = null, l = Tc(l), l !== null) {
      var n = ve(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = He(n), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = le(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Gh = l, null;
  }
  function Rr(l) {
    switch (l) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Pr()) {
          case Uo:
            return 2;
          case Ho:
            return 8;
          case Un:
          case ed:
            return 32;
          case No:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var wf = !1, Ml = null, Fl = null, ca = null, hc = /* @__PURE__ */ new Map(), Rn = /* @__PURE__ */ new Map(), Ft = [], Da = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Ei(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        Ml = null;
        break;
      case "dragenter":
      case "dragleave":
        Fl = null;
        break;
      case "mouseover":
      case "mouseout":
        ca = null;
        break;
      case "pointerover":
      case "pointerout":
        hc.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rn.delete(n.pointerId);
    }
  }
  function mo(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = Ac(n), n !== null && Gg(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function oS(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return Ml = mo(
          Ml,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return Fl = mo(
          Fl,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return ca = mo(
          ca,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return hc.set(
          r,
          mo(
            hc.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, Rn.set(
          r,
          mo(
            Rn.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
    }
    return !1;
  }
  function Lg(l) {
    var n = Tc(l.target);
    if (n !== null) {
      var u = ve(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = He(u), n !== null) {
            l.blockedOn = n, Tm(l.priority, function() {
              ho(u);
            });
            return;
          }
        } else if (n === 31) {
          if (n = le(u), n !== null) {
            l.blockedOn = n, Tm(l.priority, function() {
              ho(u);
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function _r(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = Tp(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        sd = c, u.target.dispatchEvent(c), sd = null;
      } else
        return n = Ac(u), n !== null && Gg(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Gf(l, n, u) {
    _r(l) && u.delete(n);
  }
  function Xg() {
    wf = !1, Ml !== null && _r(Ml) && (Ml = null), Fl !== null && _r(Fl) && (Fl = null), ca !== null && _r(ca) && (ca = null), hc.forEach(Gf), Rn.forEach(Gf);
  }
  function Gu(l, n) {
    l.blockedOn === n && (l.blockedOn = null, wf || (wf = !0, O.unstable_scheduleCallback(
      O.unstable_NormalPriority,
      Xg
    )));
  }
  var Lf = null;
  function Qg(l) {
    Lf !== l && (Lf = l, O.unstable_scheduleCallback(
      O.unstable_NormalPriority,
      function() {
        Lf === l && (Lf = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (Yf(c || u) === null)
              continue;
            break;
          }
          var r = Ac(u);
          r !== null && (l.splice(n, 3), n -= 3, sf(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: c
            },
            c,
            s
          ));
        }
      }
    ));
  }
  function Xf(l) {
    function n(A) {
      return Gu(A, l);
    }
    Ml !== null && Gu(Ml, l), Fl !== null && Gu(Fl, l), ca !== null && Gu(ca, l), hc.forEach(n), Rn.forEach(n);
    for (var u = 0; u < Ft.length; u++) {
      var c = Ft[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < Ft.length && (u = Ft[0], u.blockedOn === null); )
      Lg(u), u.blockedOn === null && Ft.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], m = s[ra] || null;
        if (typeof r == "function")
          m || Qg(u);
        else if (m) {
          var v = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[ra] || null)
              v = m.formAction;
            else if (Yf(s) !== null) continue;
          } else v = m.action;
          typeof v == "function" ? u[c + 1] = v : (u.splice(c, 3), c -= 3), Qg(u);
        }
      }
  }
  function Ap() {
    function l(r) {
      r.canIntercept && r.info === "react-transition" && r.intercept({
        handler: function() {
          return new Promise(function(m) {
            return s = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function n() {
      s !== null && (s(), s = null), c || setTimeout(u, 20);
    }
    function u() {
      if (!c && !navigation.transition) {
        var r = navigation.currentEntry;
        r && r.url != null && navigation.navigate(r.url, {
          state: r.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var c = !1, s = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(u, 100), function() {
        c = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), s !== null && (s(), s = null);
      };
    }
  }
  function Lh(l) {
    this._internalRoot = l;
  }
  Xh.prototype.render = Lh.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(z(409));
    var u = n.current, c = Na();
    wg(u, c, l, n, null, null);
  }, Xh.prototype.unmount = Lh.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      wg(l.current, 2, null, l, null, null), Af(), n[Ni] = null;
    }
  };
  function Xh(l) {
    this._internalRoot = l;
  }
  Xh.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = ld();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < Ft.length && n !== 0 && n < Ft[u].priority; u++) ;
      Ft.splice(u, 0, l), u === 0 && Lg(l);
    }
  };
  var Op = L.version;
  if (Op !== "19.2.4")
    throw Error(
      z(
        527,
        Op,
        "19.2.4"
      )
    );
  Z.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(z(188)) : (l = Object.keys(l).join(","), Error(z(268, l)));
    return l = k(n), l = l !== null ? Ne(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Vg = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Mr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Mr.isDisabled && Mr.supportsFiber)
      try {
        hn = Mr.inject(
          Vg
        ), Ol = Mr;
      } catch {
      }
  }
  return v0.createRoot = function(l, n) {
    if (!ne(l)) throw Error(z(299));
    var u = !1, c = "", s = Pd, r = zy, m = eh;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), n = Yh(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      null,
      s,
      r,
      m,
      Ap
    ), l[Ni] = n.current, Mf(l), new Lh(n);
  }, v0.hydrateRoot = function(l, n, u) {
    if (!ne(l)) throw Error(z(299));
    var c = !1, s = "", r = Pd, m = zy, v = eh, A = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (v = u.onRecoverableError), u.formState !== void 0 && (A = u.formState)), n = Yh(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      s,
      A,
      r,
      m,
      v,
      Ap
    ), n.context = ro(null), u = n.current, c = Na(), c = td(c), s = si(c), s.callback = null, Fa(u, s, c), u = c, n.current.lanes = u, Hi(n, u), Bu(n), l[Ni] = n.current, Mf(l), new Xh(n);
  }, v0.version = "19.2.4", v0;
}
var S0 = {};
/**
 * @license React
 * react-dom-client.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J2;
function UT() {
  return J2 || (J2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function O(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function L(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = El(e) ? e.slice() : Fe({}, e);
      return f[o] = L(e[o], t, a + 1, i), f;
    }
    function ie(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return z(e, t, a, 0);
      }
    }
    function z(e, t, a, i) {
      var o = t[i], f = El(e) ? e.slice() : Fe({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], El(f) ? f.splice(o, 1) : delete f[o]) : f[o] = z(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function ne(e, t, a) {
      var i = t[a], o = El(e) ? e.slice() : Fe({}, e);
      return a + 1 === t.length ? (El(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = ne(e[i], t, a + 1), o);
    }
    function ve() {
      return !1;
    }
    function He() {
      return null;
    }
    function le() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function F() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function k() {
    }
    function Ne() {
    }
    function q(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function N(e, t, a, i) {
      return new eS(e, t, a, i);
    }
    function fe(e, t) {
      e.context === Jf && (Dh(e.current, 2, t, e, null, null), ln());
    }
    function Je(e, t) {
      if (Qu !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, ir(), x0(
          e.current,
          t,
          a
        ), ln();
      }
    }
    function _t(e) {
      Qu = e;
    }
    function rt(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function nt(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function Al(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function xt(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Kt(e) {
      if (nt(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function tl(e) {
      var t = e.alternate;
      if (!t) {
        if (t = nt(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return Kt(o), e;
            if (f === i) return Kt(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function il(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = il(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function Me(e) {
      return e === null || typeof e != "object" ? null : (e = qg && e[qg] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function Ke(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Nf ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Uf:
          return "Fragment";
        case Ar:
          return "Profiler";
        case za:
          return "StrictMode";
        case fo:
          return "Suspense";
        case ja:
          return "SuspenseList";
        case eu:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case sc:
            return "Portal";
          case Pn:
            return e.displayName || "Context";
          case Uh:
            return (e._context.displayName || "Context") + ".Consumer";
          case Hf:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Or:
            return t = e.displayName || null, t !== null ? t : Ke(e.type) || "Memo";
          case ia:
            t = e._payload, e = e._init;
            try {
              return Ke(e(t));
            } catch {
            }
        }
      return null;
    }
    function Rt(e) {
      return typeof e.tag == "number" ? he(e) : typeof e.name == "string" ? e.name : null;
    }
    function he(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return t.displayName || "Context";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Ke(t);
        case 8:
          return t === za ? "StrictMode" : "Mode";
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
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return he(e.return);
      }
      return null;
    }
    function Bt(e) {
      return { current: e };
    }
    function Se(e, t) {
      0 > bi ? console.error("Unexpected pop.") : (t !== yp[bi] && console.error("Unexpected Fiber popped."), e.current = mp[bi], mp[bi] = null, yp[bi] = null, bi--);
    }
    function Ge(e, t, a) {
      bi++, mp[bi] = e.current, yp[bi] = a, e.current = t;
    }
    function Qt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function qt(e, t) {
      Ge(nn, t, e), Ge(jf, e, e), Ge(rc, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? sg(t) : _o;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = sg(t), t = gi(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = vm;
                break;
              case "math":
                t = xv;
                break;
              default:
                t = _o;
            }
      }
      a = a.toLowerCase(), a = Dm(null, a), a = {
        context: t,
        ancestorInfo: a
      }, Se(rc, e), Ge(rc, a, e);
    }
    function M(e) {
      Se(rc, e), Se(jf, e), Se(nn, e);
    }
    function Z() {
      return Qt(rc.current);
    }
    function ae(e) {
      e.memoizedState !== null && Ge(dc, e, e);
      var t = Qt(rc.current), a = e.type, i = gi(t.context, a);
      a = Dm(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (Ge(jf, e, e), Ge(rc, i, e));
    }
    function be(e) {
      jf.current === e && (Se(rc, e), Se(jf, e)), dc.current === e && (Se(dc, e), h0._currentValue = Ir);
    }
    function Re() {
    }
    function S() {
      if (xf === 0) {
        Yg = console.log, so = console.info, Bf = console.warn, pp = console.error, zr = console.group, Hh = console.groupCollapsed, Nh = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Re,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      xf++;
    }
    function x() {
      if (xf--, xf === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Fe({}, e, { value: Yg }),
          info: Fe({}, e, { value: so }),
          warn: Fe({}, e, { value: Bf }),
          error: Fe({}, e, { value: pp }),
          group: Fe({}, e, { value: zr }),
          groupCollapsed: Fe({}, e, { value: Hh }),
          groupEnd: Fe({}, e, { value: Nh })
        });
      }
      0 > xf && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function P(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function I(e) {
      if (qf === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          qf = t && t[1] || "", gp = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + qf + e + gp;
    }
    function Te(e, t) {
      if (!e || jh) return "";
      var a = vp.get(e);
      if (a !== void 0) return a;
      jh = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = X.H, X.H = null, S();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var E = function() {
                  throw Error();
                };
                if (Object.defineProperty(E.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(E, []);
                  } catch (ce) {
                    var w = ce;
                  }
                  Reflect.construct(e, [], E);
                } else {
                  try {
                    E.call();
                  } catch (ce) {
                    w = ce;
                  }
                  e.call(E.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ce) {
                  w = ce;
                }
                (E = e()) && typeof E.catch == "function" && E.catch(function() {
                });
              }
            } catch (ce) {
              if (ce && w && typeof ce.stack == "string")
                return [ce.stack, w.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], y = d[1];
        if (h && y) {
          var p = h.split(`
`), R = y.split(`
`);
          for (d = f = 0; f < p.length && !p[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < R.length && !R[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === p.length || d === R.length)
            for (f = p.length - 1, d = R.length - 1; 1 <= f && 0 <= d && p[f] !== R[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (p[f] !== R[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || p[f] !== R[d]) {
                    var C = `
` + p[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && vp.set(e, C), C;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        jh = !1, X.H = i, x(), Error.prepareStackTrace = a;
      }
      return p = (p = e ? e.displayName || e.name : "") ? I(p) : "", typeof e == "function" && vp.set(e, p), p;
    }
    function Le(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return I(e.type);
        case 16:
          return I("Lazy");
        case 13:
          return e.child !== t && t !== null ? I("Suspense Fallback") : I("Suspense");
        case 19:
          return I("SuspenseList");
        case 0:
        case 15:
          return Te(e.type, !1);
        case 11:
          return Te(e.type.render, !1);
        case 1:
          return Te(e.type, !0);
        case 31:
          return I("Activity");
        default:
          return "";
      }
    }
    function ze(e) {
      try {
        var t = "", a = null;
        do {
          t += Le(e, a);
          var i = e._debugInfo;
          if (i)
            for (var o = i.length - 1; 0 <= o; o--) {
              var f = i[o];
              if (typeof f.name == "string") {
                var d = t;
                e: {
                  var h = f.name, y = f.env, p = f.debugLocation;
                  if (p != null) {
                    var R = P(p), C = R.lastIndexOf(`
`), E = C === -1 ? R : R.slice(C + 1);
                    if (E.indexOf(h) !== -1) {
                      var w = `
` + E;
                      break e;
                    }
                  }
                  w = I(
                    h + (y ? " [" + y + "]" : "")
                  );
                }
                t = d + w;
              }
            }
          a = e, e = e.return;
        } while (e);
        return t;
      } catch (ce) {
        return `
Error generating stack: ` + ce.message + `
` + ce.stack;
      }
    }
    function Vt(e) {
      return (e = e ? e.displayName || e.name : "") ? I(e) : "";
    }
    function yt() {
      if (xa === null) return null;
      var e = xa._debugOwner;
      return e != null ? Rt(e) : null;
    }
    function wa() {
      if (xa === null) return "";
      var e = xa;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += I(e.type);
            break;
          case 13:
            t += I("Suspense");
            break;
          case 19:
            t += I("SuspenseList");
            break;
          case 31:
            t += I("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += Vt(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += Vt(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            if (e && i) {
              var o = P(i);
              o !== "" && (t += `
` + o);
            }
          } else if (e.debugStack != null) {
            var f = e.debugStack;
            (e = e.owner) && f && (t += `
` + P(f));
          } else break;
        var d = t;
      } catch (h) {
        d = `
Error generating stack: ` + h.message + `
` + h.stack;
      }
      return d;
    }
    function se(e, t, a, i, o, f, d) {
      var h = xa;
      _i(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        _i(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function _i(e) {
      X.getCurrentStack = e === null ? null : wa, qu = !1, xa = e;
    }
    function Mi(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function Ga(e) {
      try {
        return cu(e), !1;
      } catch {
        return !0;
      }
    }
    function cu(e) {
      return "" + e;
    }
    function pt(e, t) {
      if (Ga(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Mi(e)
        ), cu(e);
    }
    function ta(e, t) {
      if (Ga(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Mi(e)
        ), cu(e);
    }
    function Sc(e) {
      if (Ga(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          Mi(e)
        ), cu(e);
    }
    function ds(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        ho = t.inject(e), _l = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!t.checkDCE;
    }
    function me(e) {
      if (typeof Ep == "function" && Gg(e), _l && typeof _l.setStrictMode == "function")
        try {
          _l.setStrictMode(ho, e);
        } catch (t) {
          Yu || (Yu = !0, console.error(
            "React instrumentation encountered an error: %o",
            t
          ));
        }
    }
    function Ci(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Tp(e) / Gh | 0) | 0;
    }
    function ou(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
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
          return 64;
        case 128:
          return 128;
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
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function bc(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = ou(i) : (d &= h, d !== 0 ? o = ou(d) : a || (a = h & ~e, a !== 0 && (o = ou(a))))) : (h = i & ~f, h !== 0 ? o = ou(h) : d !== 0 ? o = ou(d) : a || (a = i & ~e, a !== 0 && (o = ou(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function vl(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Pr(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
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
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function Uo() {
      var e = wf;
      return wf <<= 1, (wf & 62914560) === 0 && (wf = 4194304), e;
    }
    function Ho(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Un(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function ed(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, y = e.expirationTimes, p = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var R = 31 - Wl(a), C = 1 << R;
        h[R] = 0, y[R] = -1;
        var E = p[R];
        if (E !== null)
          for (p[R] = null, R = 0; R < E.length; R++) {
            var w = E[R];
            w !== null && (w.lane &= -536870913);
          }
        a &= ~C;
      }
      i !== 0 && No(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function No(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Wl(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 261930;
    }
    function hs(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - Wl(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function Ec(e, t) {
      var a = t & -t;
      return a = (a & 42) !== 0 ? 1 : hn(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
    }
    function hn(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
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
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function Ol(e, t, a) {
      if (wu)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - Wl(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function La(e, t) {
      if (wu)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - Wl(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function Hl(e) {
      return e &= -e, Ml < e ? Fl < e ? (e & 134217727) !== 0 ? ca : hc : Fl : Ml;
    }
    function Ui() {
      var e = Et.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? ca : _h(e.type));
    }
    function g(e, t) {
      var a = Et.p;
      try {
        return Et.p = e, t();
      } finally {
        Et.p = a;
      }
    }
    function U(e) {
      delete e[Ft], delete e[Da], delete e[mo], delete e[oS], delete e[Lg];
    }
    function te(e) {
      var t = e[Ft];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Ei] || a[Ft]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = uo(e); e !== null; ) {
              if (a = e[Ft])
                return a;
              e = uo(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function ue(e) {
      if (e = e[Ft] || e[Ei]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function ye(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function Ce(e) {
      var t = e[_r];
      return t || (t = e[_r] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function pe(e) {
      e[Gf] = !0;
    }
    function tt(e, t) {
      Xe(e, t), Xe(e + "Capture", t);
    }
    function Xe(e, t) {
      Gu[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Gu[e] = t;
      var a = e.toLowerCase();
      for (Lf[a] = e, e === "onDoubleClick" && (Lf.ondblclick = e), e = 0; e < t.length; e++)
        Xg.add(t[e]);
    }
    function la(e, t) {
      Qg[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function mn(e) {
      return un.call(Lh, e) ? !0 : un.call(Ap, e) ? !1 : Xf.test(e) ? Lh[e] = !0 : (Ap[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function Hi(e, t, a) {
      if (mn(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (pt(a, t), e === "" + a ? a : e);
      }
    }
    function jo(e, t, a) {
      if (mn(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          pt(a, t), e.setAttribute(t, "" + a);
        }
    }
    function ms(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        pt(a, t), e.setAttribute(t, "" + a);
      }
    }
    function fu(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        pt(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function Xa(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Sc(e), e;
        default:
          return "";
      }
    }
    function td(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Em(e, t, a) {
      var i = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
        var o = i.get, f = i.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            Sc(d), a = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(d) {
            Sc(d), a = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function ld(e) {
      if (!e._valueTracker) {
        var t = td(e) ? "checked" : "value";
        e._valueTracker = Em(
          e,
          t,
          "" + e[t]
        );
      }
    }
    function Tm(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = td(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function Hn(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Mt(e) {
      return e.replace(
        Xh,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function ra(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || Vg || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        yt() || "A component",
        t.type
      ), Vg = !0), t.value === void 0 || t.defaultValue === void 0 || Op || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        yt() || "A component",
        t.type
      ), Op = !0);
    }
    function Ni(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (pt(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Xa(t)) : e.value !== "" + Xa(t) && (e.value = "" + Xa(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Am(e, d, Xa(t)) : a != null ? Am(e, d, Xa(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (pt(h, "name"), e.name = "" + Xa(h)) : e.removeAttribute("name");
    }
    function ad(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (pt(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null)) {
          ld(e);
          return;
        }
        a = a != null ? "" + Xa(a) : "", t = t != null ? "" + Xa(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (pt(d, "name"), e.name = d), ld(e);
    }
    function Am(e, t, a) {
      t === "number" && Hn(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function E0(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Tr.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || l || (l = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || n || (n = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Mr || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Mr = !0);
    }
    function Om() {
      var e = yt();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function su(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + Xa(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function nd(e, t) {
      for (e = 0; e < c.length; e++) {
        var a = c[e];
        if (t[a] != null) {
          var i = El(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            Om()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            Om()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || u || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), u = !0);
    }
    function Tc(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || s || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        yt() || "A component"
      ), s = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function Ac(e, t, a) {
      if (t != null && (t = "" + Xa(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + Xa(a) : "";
    }
    function xo(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (El(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = Xa(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i), ld(e);
    }
    function Oc(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Oc(e.children[0], t) : e;
    }
    function Tt(e) {
      return "  " + "  ".repeat(e);
    }
    function zc(e) {
      return "+ " + "  ".repeat(e);
    }
    function ji(e) {
      return "- " + "  ".repeat(e);
    }
    function xi(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 31:
          return "Activity";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function ru(e, t) {
      return r.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function ud(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return zc(a) + ru(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), zc(a) + ru(e, i) + `
` + ji(a) + ru(t, i) + `
`;
      }
      return Tt(a) + ru(e, i) + `
`;
    }
    function id(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function Bo(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (El(e)) return "[...]";
          if (e.$$typeof === Dn)
            return (t = Ke(e.type)) ? "<" + t + ">" : "<...>";
          var a = id(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = Bo(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function qo(e, t) {
      return typeof e != "string" || r.test(e) ? "{" + Bo(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function Yo(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = qo(
            t[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function cd(e, t, a) {
      var i = "", o = Fe({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = Bo(e[f], d);
          t.hasOwnProperty(f) ? (d = Bo(t[f], d), i += zc(a) + f + ": " + h + `
`, i += ji(a) + f + ": " + d + `
`) : i += zc(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (e = Bo(
          o[y],
          120 - 2 * a - y.length - 2
        ), i += ji(a) + y + ": " + e + `
`);
      return i;
    }
    function Pu(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (p in a)
        a.hasOwnProperty(p) && f.set(
          p.toLowerCase(),
          p
        );
      if (f.size === 1 && f.has("children"))
        o += Yo(
          e,
          t,
          Tt(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, y = f.get(d.toLowerCase());
            if (y !== void 0) {
              f.delete(d.toLowerCase());
              var p = t[d];
              y = a[y];
              var R = qo(
                p,
                h
              );
              h = qo(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && id(p) === "Object" && id(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < R.indexOf("...") || -1 < h.indexOf("...")) ? o += Tt(i + 1) + d + `={{
` + cd(
                p,
                y,
                i + 2
              ) + Tt(i + 1) + `}}
` : (o += zc(i + 1) + d + "=" + R + `
`, o += ji(i + 1) + d + "=" + h + `
`);
            } else
              o += Tt(i + 1) + d + "=" + qo(t[d], h) + `
`;
          }
        f.forEach(function(C) {
          if (C !== "children") {
            var E = 120 - 2 * (i + 1) - C.length - 1;
            o += ji(i + 1) + C + "=" + qo(a[C], E) + `
`;
          }
        }), o = o === "" ? Tt(i) + "<" + e + `>
` : Tt(i) + "<" + e + `
` + o + Tt(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += ud(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + ud("" + t, null, i + 1) : o + ud("" + t, void 0, i + 1)), o;
    }
    function Qa(e, t) {
      var a = xi(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += Qa(e, t), e = e.sibling;
        return a;
      }
      return Tt(t) + "<" + a + `>
`;
    }
    function od(e, t) {
      var a = Oc(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Tt(t) + `...
` + od(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Tt(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = ud(o, e.serverProps, t), t++;
      else if (f = xi(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = qo(o[p], 15);
              if (d -= p.length + y.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + y;
            }
          i = Tt(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = Yo(
            f,
            o,
            zc(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = Pu(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var p = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (p += od(d, t), f++) : p += Qa(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (p += Tt(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], p = typeof f == "string" ? p + (ji(t) + ru(f, 120 - 2 * t) + `
`) : p + Yo(
          f.type,
          f.props,
          ji(t)
        );
      return a + i + p;
    }
    function zm(e) {
      try {
        return `

` + od(e, 0);
      } catch {
        return "";
      }
    }
    function fd(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? zm(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function Dm(e, t) {
      var a = Fe({}, e || V), i = { tag: t };
      return v.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), A.indexOf(t) !== -1 && (a.pTagInButtonScope = null), m.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function ys(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return B.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function $v(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function Va(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function ps(e, t) {
      t = t || V;
      var a = t.current;
      if (t = (a = ys(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : $v(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, $[t]) return !1;
      $[t] = !0;
      var o = (t = xa) ? Va(t.return, i) : null, f = t !== null && o !== null ? fd(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || se(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function gs(e, t, a) {
      if (a || ys("#text", t, !1))
        return !0;
      if (a = "#text|" + t, $[a]) return !1;
      $[a] = !0;
      var i = (a = xa) ? Va(a, t) : null;
      return a = a !== null && i !== null ? fd(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function Dc(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function wo(e) {
      return e.replace(H, function(t, a) {
        return a.toUpperCase();
      });
    }
    function Rm(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? j.hasOwnProperty(t) && j[t] || (j[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        wo(t.replace(Nt, "ms-"))
      )) : _e.test(t) ? j.hasOwnProperty(t) && j[t] || (j[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !_.test(a) || K.hasOwnProperty(a) && K[a] || (K[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(_, "")
      )), typeof a == "number" && (isNaN(a) ? Ae || (Ae = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || ht || (ht = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || ge.has(t) ? t === "float" ? e.cssFloat = a : (ta(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function _m(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = Y[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = Y[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var y in t)
            for (o = Y[y] || [y], f = 0; f < o.length; f++)
              h[o[f]] = y;
          y = {};
          for (var p in i)
            if (o = i[p], (f = h[p]) && o !== f && (d = o + "," + f, !y[d])) {
              y[d] = !0, d = console;
              var R = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                R == null || typeof R == "boolean" || R === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var C in a)
          !a.hasOwnProperty(C) || t != null && t.hasOwnProperty(C) || (C.indexOf("--") === 0 ? e.setProperty(C, "") : C === "float" ? e.cssFloat = "" : e[C] = "");
        for (var E in t)
          p = t[E], t.hasOwnProperty(E) && a[E] !== p && Rm(e, E, p);
      } else
        for (i in t)
          t.hasOwnProperty(i) && Rm(e, i, t[i]);
    }
    function du(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function T0(e) {
      return vt.get(e) || e;
    }
    function A0(e, t) {
      if (un.call(Qh, t) && Qh[t])
        return !0;
      if (eE.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = Zg.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), Qh[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), Qh[t] = !0;
      }
      if (P2.test(t)) {
        if (e = t.toLowerCase(), e = Zg.hasOwnProperty(e) ? e : null, e == null) return Qh[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), Qh[t] = !0);
      }
      return !0;
    }
    function O0(e, t) {
      var a = [], i;
      for (i in t)
        A0(e, i) || a.push(i);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function Mm(e, t, a, i) {
      if (un.call(cn, t) && cn[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), cn[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), cn[t] = !0;
        if (O1.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), cn[t] = !0;
      } else if (O1.test(t))
        return tE.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), cn[t] = !0;
      if (lE.test(t) || aE.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), cn[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), cn[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), cn[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), cn[t] = !0;
      if (tu.hasOwnProperty(o)) {
        if (o = tu[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), cn[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), cn[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), cn[t] = !0);
          }
        case "function":
        case "symbol":
          return cn[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), cn[t] = !0;
          }
      }
      return !0;
    }
    function kv(e, t, a) {
      var i = [], o;
      for (o in t)
        Mm(e, o, t[o], a) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function vs(e) {
      return nE.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function yn() {
    }
    function Nn(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function sd(e) {
      var t = ue(e);
      if (t && (e = t.stateNode)) {
        var a = e[Da] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Ni(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (pt(t, "name"), a = a.querySelectorAll(
                'input[name="' + Mt(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[Da] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Ni(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && Tm(i);
            }
            break e;
          case "textarea":
            Ac(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && su(e, !!a.multiple, t, !1);
        }
      }
    }
    function rd(e, t, a) {
      if (fS) return e(t, a);
      fS = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (fS = !1, (Vh !== null || Zh !== null) && (ln(), Vh && (t = Vh, e = Zh, Zh = Vh = null, sd(t), e)))
          for (t = 0; t < e.length; t++) sd(e[t]);
      }
    }
    function hu(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[Da] || null;
      if (i === null) return null;
      a = i[t];
      e: switch (t) {
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
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function Rc() {
      if (Jg) return Jg;
      var e, t = rS, a = t.length, i, o = "value" in Qf ? Qf.value : Qf.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return Jg = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function Ss(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Go() {
      return !0;
    }
    function Cm() {
      return !1;
    }
    function Nl(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Go : Cm, this.isPropagationStopped = Cm, this;
      }
      return Fe(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Go);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Go);
        },
        persist: function() {
        },
        isPersistent: Go
      }), t;
    }
    function ei(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = gE[e]) ? !!t[e] : !1;
    }
    function bs() {
      return ei;
    }
    function Lo(e, t) {
      switch (e) {
        case "keyup":
          return ME.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== _1;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function ti(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function Um(e, t) {
      switch (e) {
        case "compositionend":
          return ti(t);
        case "keypress":
          return t.which !== C1 ? null : (H1 = !0, U1);
        case "textInput":
          return e = t.data, e === U1 && H1 ? null : e;
        default:
          return null;
      }
    }
    function dd(e, t) {
      if (Jh)
        return e === "compositionend" || !yS && Lo(e, t) ? (e = Rc(), Jg = rS = Qf = null, Jh = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return M1 && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function Hm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!UE[e.type] : t === "textarea";
    }
    function hd(e) {
      if (!mc) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function Es(e, t, a, i) {
      Vh ? Zh ? Zh.push(i) : Zh = [i] : Vh = i, t = Wn(t, "onChange"), 0 < t.length && (a = new Kg(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function z0(e) {
      zt(e, 0);
    }
    function $l(e) {
      var t = ye(e);
      if (Tm(t)) return e;
    }
    function Bi(e, t) {
      if (e === "change") return t;
    }
    function Ts() {
      Cp && (Cp.detachEvent("onpropertychange", Xo), Up = Cp = null);
    }
    function Xo(e) {
      if (e.propertyName === "value" && $l(Up)) {
        var t = [];
        Es(
          t,
          Up,
          e,
          Nn(e)
        ), rd(z0, t);
      }
    }
    function Wv(e, t, a) {
      e === "focusin" ? (Ts(), Cp = t, Up = a, Cp.attachEvent("onpropertychange", Xo)) : e === "focusout" && Ts();
    }
    function Nm(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return $l(Up);
    }
    function jm(e, t) {
      if (e === "click") return $l(t);
    }
    function As(e, t) {
      if (e === "input" || e === "change")
        return $l(t);
    }
    function md(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Qo(e, t) {
      if (on(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!un.call(t, o) || !on(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function D0(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function R0(e, t) {
      var a = D0(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = D0(a);
      }
    }
    function _0(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function yd(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = Hn(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = Hn(e.document);
      }
      return t;
    }
    function xm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function M0(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      gS || Kh == null || Kh !== Hn(i) || (i = Kh, "selectionStart" in i && xm(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), Hp && Qo(Hp, i) || (Hp = i, i = Wn(pS, "onSelect"), 0 < i.length && (t = new Kg(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = Kh)));
    }
    function _c(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function Mc(e) {
      if (vS[e]) return vS[e];
      if (!$h[e]) return e;
      var t = $h[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in j1)
          return vS[e] = t[a];
      return e;
    }
    function jn(e, t) {
      w1.set(e, t), tt(t, [e]);
    }
    function C0(e) {
      for (var t = kg, a = 0; a < e.length; a++) {
        var i = e[a];
        if (typeof i == "object" && i !== null)
          if (El(i) && i.length === 2 && typeof i[0] == "string") {
            if (t !== kg && t !== AS)
              return ES;
            t = AS;
          } else return ES;
        else {
          if (typeof i == "function" || typeof i == "string" && 50 < i.length || t !== kg && t !== TS)
            return ES;
          t = TS;
        }
      }
      return t;
    }
    function Bm(e, t, a, i) {
      for (var o in e)
        un.call(e, o) && o[0] !== "_" && mu(o, e[o], t, a, i);
    }
    function mu(e, t, a, i, o) {
      switch (typeof t) {
        case "object":
          if (t === null) {
            t = "null";
            break;
          } else {
            if (t.$$typeof === Dn) {
              var f = Ke(t.type) || "…", d = t.key;
              t = t.props;
              var h = Object.keys(t), y = h.length;
              if (d == null && y === 0) {
                t = "<" + f + " />";
                break;
              }
              if (3 > i || y === 1 && h[0] === "children" && d == null) {
                t = "<" + f + " … />";
                break;
              }
              a.push([
                o + "  ".repeat(i) + e,
                "<" + f
              ]), d !== null && mu(
                "key",
                d,
                a,
                i + 1,
                o
              ), e = !1;
              for (var p in t)
                p === "children" ? t.children != null && (!El(t.children) || 0 < t.children.length) && (e = !0) : un.call(t, p) && p[0] !== "_" && mu(
                  p,
                  t[p],
                  a,
                  i + 1,
                  o
                );
              a.push([
                "",
                e ? ">…</" + f + ">" : "/>"
              ]);
              return;
            }
            if (f = Object.prototype.toString.call(t), f = f.slice(8, f.length - 1), f === "Array") {
              if (p = C0(t), p === TS || p === kg) {
                t = JSON.stringify(t);
                break;
              } else if (p === AS) {
                for (a.push([
                  o + "  ".repeat(i) + e,
                  ""
                ]), e = 0; e < t.length; e++)
                  f = t[e], mu(
                    f[0],
                    f[1],
                    a,
                    i + 1,
                    o
                  );
                return;
              }
            }
            if (f === "Promise") {
              if (t.status === "fulfilled") {
                if (f = a.length, mu(
                  e,
                  t.value,
                  a,
                  i,
                  o
                ), a.length > f) {
                  a = a[f], a[1] = "Promise<" + (a[1] || "Object") + ">";
                  return;
                }
              } else if (t.status === "rejected" && (f = a.length, mu(
                e,
                t.reason,
                a,
                i,
                o
              ), a.length > f)) {
                a = a[f], a[1] = "Rejected Promise<" + a[1] + ">";
                return;
              }
              a.push([
                "  ".repeat(i) + e,
                "Promise"
              ]);
              return;
            }
            f === "Object" && (p = Object.getPrototypeOf(t)) && typeof p.constructor == "function" && (f = p.constructor.name), a.push([
              o + "  ".repeat(i) + e,
              f === "Object" ? 3 > i ? "" : "…" : f
            ]), 3 > i && Bm(t, a, i + 1, o);
            return;
          }
        case "function":
          t = t.name === "" ? "() => {}" : t.name + "() {}";
          break;
        case "string":
          t = t === YE ? "…" : JSON.stringify(t);
          break;
        case "undefined":
          t = "undefined";
          break;
        case "boolean":
          t = t ? "true" : "false";
          break;
        default:
          t = String(t);
      }
      a.push([
        o + "  ".repeat(i) + e,
        t
      ]);
    }
    function U0(e, t, a, i) {
      var o = !0;
      for (d in e)
        d in t || (a.push([
          Wg + "  ".repeat(i) + d,
          "…"
        ]), o = !1);
      for (var f in t)
        if (f in e) {
          var d = e[f], h = t[f];
          if (d !== h) {
            if (i === 0 && f === "children")
              o = "  ".repeat(i) + f, a.push(
                [Wg + o, "…"],
                [Fg + o, "…"]
              );
            else {
              if (!(3 <= i)) {
                if (typeof d == "object" && typeof h == "object" && d !== null && h !== null && d.$$typeof === h.$$typeof)
                  if (h.$$typeof === Dn) {
                    if (d.type === h.type && d.key === h.key) {
                      d = Ke(h.type) || "…", o = "  ".repeat(i) + f, d = "<" + d + " … />", a.push(
                        [Wg + o, d],
                        [Fg + o, d]
                      ), o = !1;
                      continue;
                    }
                  } else {
                    var y = Object.prototype.toString.call(d), p = Object.prototype.toString.call(h);
                    if (y === p && (p === "[object Object]" || p === "[object Array]")) {
                      y = [
                        X1 + "  ".repeat(i) + f,
                        p === "[object Array]" ? "Array" : ""
                      ], a.push(y), p = a.length, U0(
                        d,
                        h,
                        a,
                        i + 1
                      ) ? p === a.length && (y[1] = "Referentially unequal but deeply equal objects. Consider memoization.") : o = !1;
                      continue;
                    }
                  }
                else if (typeof d == "function" && typeof h == "function" && d.name === h.name && d.length === h.length && (y = Function.prototype.toString.call(d), p = Function.prototype.toString.call(h), y === p)) {
                  d = h.name === "" ? "() => {}" : h.name + "() {}", a.push([
                    X1 + "  ".repeat(i) + f,
                    d + " Referentially unequal function closure. Consider memoization."
                  ]);
                  continue;
                }
              }
              mu(f, d, a, i, Wg), mu(f, h, a, i, Fg);
            }
            o = !1;
          }
        } else
          a.push([
            Fg + "  ".repeat(i) + f,
            "…"
          ]), o = !1;
      return o;
    }
    function xn(e) {
      dt = e & 63 ? "Blocking" : e & 64 ? "Gesture" : e & 4194176 ? "Transition" : e & 62914560 ? "Suspense" : e & 2080374784 ? "Idle" : "Other";
    }
    function pn(e, t, a, i) {
      It && (Zf.start = t, Zf.end = a, yo.color = "warning", yo.tooltipText = i, yo.properties = null, (e = e._debugTask) ? e.run(
        performance.measure.bind(
          performance,
          i,
          Zf
        )
      ) : performance.measure(i, Zf));
    }
    function pd(e, t, a) {
      pn(e, t, a, "Reconnect");
    }
    function gd(e, t, a, i, o) {
      var f = he(e);
      if (f !== null && It) {
        var d = e.alternate, h = e.actualDuration;
        if (d === null || d.child !== e.child)
          for (var y = e.child; y !== null; y = y.sibling)
            h -= y.actualDuration;
        i = 0.5 > h ? i ? "tertiary-light" : "primary-light" : 10 > h ? i ? "tertiary" : "primary" : 100 > h ? i ? "tertiary-dark" : "primary-dark" : "error";
        var p = e.memoizedProps;
        h = e._debugTask, p !== null && d !== null && d.memoizedProps !== p ? (y = [wE], p = U0(
          d.memoizedProps,
          p,
          y,
          0
        ), 1 < y.length && (p && !Vf && (d.lanes & o) === 0 && 100 < e.actualDuration ? (Vf = !0, y[0] = GE, yo.color = "warning", yo.tooltipText = Q1) : (yo.color = i, yo.tooltipText = f), yo.properties = y, Zf.start = t, Zf.end = a, h != null ? h.run(
          performance.measure.bind(
            performance,
            "​" + f,
            Zf
          )
        ) : performance.measure(
          "​" + f,
          Zf
        ))) : h != null ? h.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            Lu,
            void 0,
            i
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          Lu,
          void 0,
          i
        );
      }
    }
    function qm(e, t, a, i) {
      if (It) {
        var o = he(e);
        if (o !== null) {
          for (var f = null, d = [], h = 0; h < i.length; h++) {
            var y = i[h];
            f == null && y.source !== null && (f = y.source._debugTask), y = y.value, d.push([
              "Error",
              typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y)
            ]);
          }
          e.key !== null && mu("key", e.key, d, 0, ""), e.memoizedProps !== null && Bm(e.memoizedProps, d, 0, ""), f == null && (f = e._debugTask), e = {
            start: t,
            end: a,
            detail: {
              devtools: {
                color: "error",
                track: Lu,
                tooltipText: e.tag === 13 ? "Hydration failed" : "Error boundary caught an error",
                properties: d
              }
            }
          }, f ? f.run(
            performance.measure.bind(performance, "​" + o, e)
          ) : performance.measure("​" + o, e);
        }
      }
    }
    function Bn(e, t, a, i, o) {
      if (o !== null) {
        if (It) {
          var f = he(e);
          if (f !== null) {
            i = [];
            for (var d = 0; d < o.length; d++) {
              var h = o[d].value;
              i.push([
                "Error",
                typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
              ]);
            }
            e.key !== null && mu("key", e.key, i, 0, ""), e.memoizedProps !== null && Bm(e.memoizedProps, i, 0, ""), t = {
              start: t,
              end: a,
              detail: {
                devtools: {
                  color: "error",
                  track: Lu,
                  tooltipText: "A lifecycle or effect errored",
                  properties: i
                }
              }
            }, (e = e._debugTask) ? e.run(
              performance.measure.bind(
                performance,
                "​" + f,
                t
              )
            ) : performance.measure("​" + f, t);
          }
        }
      } else
        f = he(e), f !== null && It && (o = 1 > i ? "secondary-light" : 100 > i ? "secondary" : 500 > i ? "secondary-dark" : "error", (e = e._debugTask) ? e.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            Lu,
            void 0,
            o
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          Lu,
          void 0,
          o
        ));
    }
    function Fv(e, t, a, i) {
      if (It && !(t <= e)) {
        var o = (a & 738197653) === a ? "tertiary-dark" : "primary-dark";
        a = (a & 536870912) === a ? "Prepared" : (a & 201326741) === a ? "Hydrated" : "Render", i ? i.run(
          console.timeStamp.bind(
            console,
            a,
            e,
            t,
            dt,
            ft,
            o
          )
        ) : console.timeStamp(
          a,
          e,
          t,
          dt,
          ft,
          o
        );
      }
    }
    function H0(e, t, a, i) {
      !It || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Prewarm",
          e,
          t,
          dt,
          ft,
          a
        )
      ) : console.timeStamp(
        "Prewarm",
        e,
        t,
        dt,
        ft,
        a
      ));
    }
    function N0(e, t, a, i) {
      !It || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Suspended",
          e,
          t,
          dt,
          ft,
          a
        )
      ) : console.timeStamp(
        "Suspended",
        e,
        t,
        dt,
        ft,
        a
      ));
    }
    function Iv(e, t, a, i, o, f) {
      if (It && !(t <= e)) {
        a = [];
        for (var d = 0; d < i.length; d++) {
          var h = i[d].value;
          a.push([
            "Recoverable Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        e = {
          start: e,
          end: t,
          detail: {
            devtools: {
              color: "primary-dark",
              track: dt,
              trackGroup: ft,
              tooltipText: o ? "Hydration Failed" : "Recovered after Error",
              properties: a
            }
          }
        }, f ? f.run(
          performance.measure.bind(performance, "Recovered", e)
        ) : performance.measure("Recovered", e);
      }
    }
    function Ym(e, t, a, i) {
      !It || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          "Errored",
          e,
          t,
          dt,
          ft,
          "error"
        )
      ) : console.timeStamp(
        "Errored",
        e,
        t,
        dt,
        ft,
        "error"
      ));
    }
    function Pv(e, t, a, i) {
      !It || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          a,
          e,
          t,
          dt,
          ft,
          "secondary-light"
        )
      ) : console.timeStamp(
        a,
        e,
        t,
        dt,
        ft,
        "secondary-light"
      ));
    }
    function j0(e, t, a, i, o) {
      if (It && !(t <= e)) {
        for (var f = [], d = 0; d < a.length; d++) {
          var h = a[d].value;
          f.push([
            "Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        e = {
          start: e,
          end: t,
          detail: {
            devtools: {
              color: "error",
              track: dt,
              trackGroup: ft,
              tooltipText: i ? "Remaining Effects Errored" : "Commit Errored",
              properties: f
            }
          }
        }, o ? o.run(
          performance.measure.bind(performance, "Errored", e)
        ) : performance.measure("Errored", e);
      }
    }
    function wm(e, t, a) {
      !It || t <= e || console.timeStamp(
        "Animating",
        e,
        t,
        dt,
        ft,
        "secondary-dark"
      );
    }
    function vd() {
      for (var e = kh, t = OS = kh = 0; t < e; ) {
        var a = Xu[t];
        Xu[t++] = null;
        var i = Xu[t];
        Xu[t++] = null;
        var o = Xu[t];
        Xu[t++] = null;
        var f = Xu[t];
        if (Xu[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && Gm(a, o, f);
      }
    }
    function Vo(e, t, a, i) {
      Xu[kh++] = e, Xu[kh++] = t, Xu[kh++] = a, Xu[kh++] = i, OS |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function Cc(e, t, a, i) {
      return Vo(e, t, a, i), Os(e);
    }
    function aa(e, t) {
      return Vo(e, null, null, t), Os(e);
    }
    function Gm(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & Np || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - Wl(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function Os(e) {
      if (i0 > lT)
        throw Jr = i0 = 0, c0 = a1 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Jr > aT && (Jr = 0, c0 = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && zn(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && zn(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function qi(e) {
      if (Qu === null) return e;
      var t = Qu(e);
      return t === void 0 ? e : t.current;
    }
    function Sd(e) {
      if (Qu === null) return e;
      var t = Qu(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = qi(e.render), e.render !== t) ? (t = { $$typeof: Hf, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function Lm(e, t) {
      if (Qu === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === ia) && (i = !0);
          break;
        case 11:
          (o === Hf || o === ia) && (i = !0);
          break;
        case 14:
        case 15:
          (o === Or || o === ia) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = Qu(a), e !== void 0 && e === Qu(t)));
    }
    function Uc(e) {
      Qu !== null && typeof WeakSet == "function" && (Wh === null && (Wh = /* @__PURE__ */ new WeakSet()), Wh.add(e));
    }
    function x0(e, t, a) {
      do {
        var i = e, o = i.alternate, f = i.child, d = i.sibling, h = i.tag;
        i = i.type;
        var y = null;
        switch (h) {
          case 0:
          case 15:
          case 1:
            y = i;
            break;
          case 11:
            y = i.render;
        }
        if (Qu === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var p = !1;
        if (i = !1, y !== null && (y = Qu(y), y !== void 0 && (a.has(y) ? i = !0 : t.has(y) && (h === 1 ? i = !0 : p = !0))), Wh !== null && (Wh.has(e) || o !== null && Wh.has(o)) && (i = !0), i && (e._debugNeedsRemount = !0), (i || p) && (o = aa(e, 2), o !== null && Be(o, e, 2)), f === null || i || x0(
          f,
          t,
          a
        ), d === null) break;
        e = d;
      } while (!0);
    }
    function eS(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, V1 || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Xm(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function yu(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = N(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = qi(e.type);
          break;
        case 1:
          a.type = qi(e.type);
          break;
        case 11:
          a.type = Sd(e.type);
      }
      return a;
    }
    function Qm(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function Hc(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        Xm(e) && (d = 1), h = qi(h);
      else if (typeof e == "string")
        d = Z(), d = Cg(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case eu:
            return t = N(31, a, t, o), t.elementType = eu, t.lanes = f, t;
          case Uf:
            return Nc(
              a.children,
              o,
              f,
              t
            );
          case za:
            d = 8, o |= Ba, o |= Ti;
            break;
          case Ar:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = N(12, e, t, i | Ie), t.elementType = Ar, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case fo:
            return t = N(13, a, t, o), t.elementType = fo, t.lanes = f, t;
          case ja:
            return t = N(19, a, t, o), t.elementType = ja, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Pn:
                  d = 10;
                  break e;
                case Uh:
                  d = 9;
                  break e;
                case Hf:
                  d = 11, h = Sd(h);
                  break e;
                case Or:
                  d = 14;
                  break e;
                case ia:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : El(e) ? a = "array" : e !== void 0 && e.$$typeof === Dn ? (a = "<" + (Ke(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? Rt(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = N(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function Yi(e, t, a) {
      return t = Hc(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function Nc(e, t, a, i) {
      return e = N(7, e, i, t), e.lanes = a, e;
    }
    function Zo(e, t, a) {
      return e = N(6, e, null, t), e.lanes = a, e;
    }
    function Vm(e) {
      var t = N(18, null, null, xe);
      return t.stateNode = e, t;
    }
    function bd(e, t, a) {
      return t = N(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function da(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = zS.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: ze(t)
        }, zS.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: ze(t)
      };
    }
    function qn(e, t) {
      wi(), Fh[Ih++] = jp, Fh[Ih++] = Ig, Ig = e, jp = t;
    }
    function Zm(e, t, a) {
      wi(), Vu[Zu++] = go, Vu[Zu++] = vo, Vu[Zu++] = Ur, Ur = e;
      var i = go;
      e = vo;
      var o = 32 - Wl(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - Wl(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, go = 1 << 32 - Wl(t) + o | a << o | i, vo = f + e;
      } else
        go = 1 << f | a << o | i, vo = e;
    }
    function Ed(e) {
      wi(), e.return !== null && (qn(e, 1), Zm(e, 1, 0));
    }
    function Td(e) {
      for (; e === Ig; )
        Ig = Fh[--Ih], Fh[Ih] = null, jp = Fh[--Ih], Fh[Ih] = null;
      for (; e === Ur; )
        Ur = Vu[--Zu], Vu[Zu] = null, vo = Vu[--Zu], Vu[Zu] = null, go = Vu[--Zu], Vu[Zu] = null;
    }
    function B0() {
      return wi(), Ur !== null ? { id: go, overflow: vo } : null;
    }
    function q0(e, t) {
      wi(), Vu[Zu++] = go, Vu[Zu++] = vo, Vu[Zu++] = Ur, go = t.id, vo = t.overflow, Ur = e;
    }
    function wi() {
      ot || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function jc(e, t) {
      if (e.return === null) {
        if (lu === null)
          lu = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (lu.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          lu.distanceFromLeaf > t && (lu.distanceFromLeaf = t);
        }
        return lu;
      }
      var a = jc(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function Y0() {
      ot && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function na(e, t) {
      yc || (e = jc(e, 0), e.serverProps = null, t !== null && (t = Dg(t), e.serverTail.push(t)));
    }
    function gn(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", i = lu;
      throw i !== null && (lu = null, a = zm(i)), Ds(
        da(
          Error(
            "Hydration failed because the server rendered " + (t ? "text" : "HTML") + ` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + a
          ),
          e
        )
      ), DS;
    }
    function Jm(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Ft] = e, t[Da] = i, Aa(a, i), a) {
        case "dialog":
          je("cancel", t), je("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          je("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < o0.length; a++)
            je(o0[a], t);
          break;
        case "source":
          je("error", t);
          break;
        case "img":
        case "image":
        case "link":
          je("error", t), je("load", t);
          break;
        case "details":
          je("toggle", t);
          break;
        case "input":
          la("input", i), je("invalid", t), ra(t, i), ad(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          );
          break;
        case "option":
          E0(t, i);
          break;
        case "select":
          la("select", i), je("invalid", t), nd(t, i);
          break;
        case "textarea":
          la("textarea", i), je("invalid", t), Tc(t, i), xo(
            t,
            i.value,
            i.defaultValue,
            i.children
          );
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || $y(t.textContent, a) ? (i.popover != null && (je("beforetoggle", t), je("toggle", t)), i.onScroll != null && je("scroll", t), i.onScrollEnd != null && je("scrollend", t), i.onClick != null && (t.onclick = yn), t = !0) : t = !1, t || gn(e, !0);
    }
    function Km(e) {
      for (Ra = e.return; Ra; )
        switch (Ra.tag) {
          case 5:
          case 31:
          case 13:
            Ju = !1;
            return;
          case 27:
          case 3:
            Ju = !0;
            return;
          default:
            Ra = Ra.return;
        }
    }
    function xc(e) {
      if (e !== Ra) return !1;
      if (!ot)
        return Km(e), ot = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Af(e.type, e.memoizedProps)), a = !a), a && Pt) {
        for (a = Pt; a; ) {
          var i = jc(e, 0), o = Dg(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? Df(a) : an(a.nextSibling);
        }
        gn(e);
      }
      if (Km(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Pt = Df(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Pt = Df(e);
      } else
        t === 27 ? (t = Pt, oc(e.type) ? (e = y1, y1 = null, Pt = e) : Pt = t) : Pt = Ra ? an(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Gi() {
      Pt = Ra = null, yc = ot = !1;
    }
    function zs() {
      var e = Kf;
      return e !== null && (dn === null ? dn = e : dn.push.apply(
        dn,
        e
      ), Kf = null), e;
    }
    function Ds(e) {
      Kf === null ? Kf = [e] : Kf.push(e);
    }
    function Li() {
      var e = lu;
      if (e !== null) {
        lu = null;
        for (var t = zm(e); 0 < e.children.length; )
          e = e.children[0];
        se(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function Jo() {
      Ph = Pg = null, em = !1;
    }
    function vn(e, t, a) {
      Ge(RS, t._currentValue, e), t._currentValue = a, Ge(_S, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== J1 && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = J1;
    }
    function Yn(e, t) {
      e._currentValue = RS.current;
      var a = _S.current;
      Se(_S, t), e._currentRenderer = a, Se(RS, t);
    }
    function Ad(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function li(e, t, a, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var y = 0; y < t.length; y++)
              if (h.context === t[y]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), Ad(
                  f.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), Ad(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function wn(e, t, a, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            on(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === dc.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(h0) : e = [h0]);
        }
        o = o.return;
      }
      e !== null && li(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function Ko(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!on(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function Xi(e) {
      Pg = e, Ph = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function St(e) {
      return em && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), $m(Pg, e);
    }
    function Rs(e, t) {
      return Pg === null && Xi(e), $m(e, t);
    }
    function $m(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, Ph === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        Ph = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else Ph = Ph.next = t;
      return a;
    }
    function Od() {
      return {
        controller: new QE(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Bc(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function _s(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && VE(ZE, function() {
        e.controller.abort();
      });
    }
    function pu(e, t, a) {
      (e & 127) !== 0 ? 0 > pc && (pc = Xl(), Bp = ev(t), MS = t, a != null && (CS = he(a)), (mt & (Pl | uu)) !== sa && (gl = !0, kf = xp), e = Of(), t = xu(), e !== tm || t !== qp ? tm = -1.1 : t !== null && (kf = xp), jr = e, qp = t) : (e & 4194048) !== 0 && 0 > Ku && (Ku = Xl(), Yp = ev(t), K1 = t, a != null && ($1 = he(a)), 0 > To) && (e = Of(), t = xu(), (e !== Ff || t !== xr) && (Ff = -1.1), Wf = e, xr = t);
    }
    function w0(e) {
      if (0 > pc) {
        pc = Xl(), Bp = e._debugTask != null ? e._debugTask : null, (mt & (Pl | uu)) !== sa && (kf = xp);
        var t = Of(), a = xu();
        t !== tm || a !== qp ? tm = -1.1 : a !== null && (kf = xp), jr = t, qp = a;
      }
      0 > Ku && (Ku = Xl(), Yp = e._debugTask != null ? e._debugTask : null, 0 > To) && (e = Of(), t = xu(), (e !== Ff || t !== xr) && (Ff = -1.1), Wf = e, xr = t);
    }
    function gu() {
      var e = Hr;
      return Hr = 0, e;
    }
    function $o(e) {
      var t = Hr;
      return Hr = e, t;
    }
    function ha(e) {
      var t = Hr;
      return Hr += e, t;
    }
    function qc() {
      Ue = De = -1.1;
    }
    function $t() {
      var e = De;
      return De = -1.1, e;
    }
    function jl(e) {
      0 <= e && (De = e);
    }
    function Sn() {
      var e = sl;
      return sl = -0, e;
    }
    function Za(e) {
      0 <= e && (sl = e);
    }
    function Ja() {
      var e = ul;
      return ul = null, e;
    }
    function bn() {
      var e = gl;
      return gl = !1, e;
    }
    function ai(e) {
      fn = Xl(), 0 > e.actualStartTime && (e.actualStartTime = fn);
    }
    function zd(e) {
      if (0 <= fn) {
        var t = Xl() - fn;
        e.actualDuration += t, e.selfBaseDuration = t, fn = -1;
      }
    }
    function Ms(e) {
      if (0 <= fn) {
        var t = Xl() - fn;
        e.actualDuration += t, fn = -1;
      }
    }
    function ma() {
      if (0 <= fn) {
        var e = Xl(), t = e - fn;
        fn = -1, Hr += t, sl += t, Ue = e;
      }
    }
    function G0(e) {
      ul === null && (ul = []), ul.push(e), bo === null && (bo = []), bo.push(e);
    }
    function cl() {
      fn = Xl(), 0 > De && (De = fn);
    }
    function Yc(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ni(e, t) {
      if (Gp === null) {
        var a = Gp = [];
        HS = 0, Br = Ky(), lm = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return HS++, t.then(km, km), t;
    }
    function km() {
      if (--HS === 0 && (-1 < Ku || (To = -1.1), Gp !== null)) {
        lm !== null && (lm.status = "fulfilled");
        var e = Gp;
        Gp = null, Br = 0, lm = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Dd(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function ui() {
      var e = qr.current;
      return e !== null ? e : Xt.pooledCache;
    }
    function ko(e, t) {
      t === null ? Ge(qr, qr.current, e) : Ge(qr, t.pool, e);
    }
    function Wm() {
      var e = ui();
      return e === null ? null : { parent: Ll._currentValue, pool: e };
    }
    function Rd() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Fm(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Ka(e, t, a) {
      X.actQueue !== null && (X.didUsePromise = !0);
      var i = e.thenables;
      if (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(yn, yn), t = a), t._debugInfo === void 0) {
        e = performance.now(), i = t.displayName;
        var o = {
          name: typeof i == "string" ? i : "Promise",
          start: e,
          end: e,
          value: t
        };
        t._debugInfo = [{ awaited: o }], t.status !== "fulfilled" && t.status !== "rejected" && (e = function() {
          o.end = performance.now();
        }, t.then(e, e));
      }
      switch (t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, Cs(e), e;
        default:
          if (typeof t.status == "string")
            t.then(yn, yn);
          else {
            if (e = Xt, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(f) {
                if (t.status === "pending") {
                  var d = t;
                  d.status = "fulfilled", d.value = f;
                }
              },
              function(f) {
                if (t.status === "pending") {
                  var d = t;
                  d.status = "rejected", d.reason = f;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, Cs(e), e;
          }
          throw wr = t, Kp = !0, am;
      }
    }
    function $a(e) {
      try {
        return WE(e);
      } catch (t) {
        throw t !== null && typeof t == "object" && typeof t.then == "function" ? (wr = t, Kp = !0, am) : t;
      }
    }
    function wc() {
      if (wr === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = wr;
      return wr = null, Kp = !1, e;
    }
    function Cs(e) {
      if (e === am || e === ov)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function dl(e) {
      var t = Pe;
      return e != null && (Pe = t === null ? e : t.concat(e)), t;
    }
    function _a() {
      var e = Pe;
      if (e != null) {
        for (var t = e.length - 1; 0 <= t; t--)
          if (e[t].name != null) {
            var a = e[t].debugTask;
            if (a != null) return a;
          }
      }
      return null;
    }
    function ya(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = Yi(e, a.mode, 0), t._debugInfo = Pe, t.return = a), se(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function Gn(e) {
      var t = $p;
      return $p += 1, nm === null && (nm = Rd()), Ka(nm, e, t);
    }
    function Ma(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function Ln(e, t) {
      throw t.$$typeof === Bg ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function En(e, t) {
      var a = _a();
      a !== null ? a.run(
        Ln.bind(null, e, t)
      ) : Ln(e, t);
    }
    function Im(e, t) {
      var a = he(e) || "Component";
      mb[a] || (mb[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function Wo(e, t) {
      var a = _a();
      a !== null ? a.run(
        Im.bind(null, e, t)
      ) : Im(e, t);
    }
    function _d(e, t) {
      var a = he(e) || "Component";
      yb[a] || (yb[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function Us(e, t) {
      var a = _a();
      a !== null ? a.run(
        _d.bind(null, e, t)
      ) : _d(e, t);
    }
    function xl(e) {
      function t(b, T) {
        if (e) {
          var D = b.deletions;
          D === null ? (b.deletions = [T], b.flags |= 16) : D.push(T);
        }
      }
      function a(b, T) {
        if (!e) return null;
        for (; T !== null; )
          t(b, T), T = T.sibling;
        return null;
      }
      function i(b) {
        for (var T = /* @__PURE__ */ new Map(); b !== null; )
          b.key !== null ? T.set(b.key, b) : T.set(b.index, b), b = b.sibling;
        return T;
      }
      function o(b, T) {
        return b = yu(b, T), b.index = 0, b.sibling = null, b;
      }
      function f(b, T, D) {
        return b.index = D, e ? (D = b.alternate, D !== null ? (D = D.index, D < T ? (b.flags |= 67108866, T) : D) : (b.flags |= 67108866, T)) : (b.flags |= 1048576, T);
      }
      function d(b) {
        return e && b.alternate === null && (b.flags |= 67108866), b;
      }
      function h(b, T, D, J) {
        return T === null || T.tag !== 6 ? (T = Zo(
          D,
          b.mode,
          J
        ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = Pe, T) : (T = o(T, D), T.return = b, T._debugInfo = Pe, T);
      }
      function y(b, T, D, J) {
        var oe = D.type;
        return oe === Uf ? (T = R(
          b,
          T,
          D.props.children,
          J,
          D.key
        ), ya(D, T, b), T) : T !== null && (T.elementType === oe || Lm(T, D) || typeof oe == "object" && oe !== null && oe.$$typeof === ia && $a(oe) === T.type) ? (T = o(T, D.props), Ma(T, D), T.return = b, T._debugOwner = D._owner, T._debugInfo = Pe, T) : (T = Yi(D, b.mode, J), Ma(T, D), T.return = b, T._debugInfo = Pe, T);
      }
      function p(b, T, D, J) {
        return T === null || T.tag !== 4 || T.stateNode.containerInfo !== D.containerInfo || T.stateNode.implementation !== D.implementation ? (T = bd(D, b.mode, J), T.return = b, T._debugInfo = Pe, T) : (T = o(T, D.children || []), T.return = b, T._debugInfo = Pe, T);
      }
      function R(b, T, D, J, oe) {
        return T === null || T.tag !== 7 ? (T = Nc(
          D,
          b.mode,
          J,
          oe
        ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = Pe, T) : (T = o(T, D), T.return = b, T._debugInfo = Pe, T);
      }
      function C(b, T, D) {
        if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
          return T = Zo(
            "" + T,
            b.mode,
            D
          ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = Pe, T;
        if (typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case Dn:
              return D = Yi(
                T,
                b.mode,
                D
              ), Ma(D, T), D.return = b, b = dl(T._debugInfo), D._debugInfo = Pe, Pe = b, D;
            case sc:
              return T = bd(
                T,
                b.mode,
                D
              ), T.return = b, T._debugInfo = Pe, T;
            case ia:
              var J = dl(T._debugInfo);
              return T = $a(T), b = C(b, T, D), Pe = J, b;
          }
          if (El(T) || Me(T))
            return D = Nc(
              T,
              b.mode,
              D,
              null
            ), D.return = b, D._debugOwner = b, D._debugTask = b._debugTask, b = dl(T._debugInfo), D._debugInfo = Pe, Pe = b, D;
          if (typeof T.then == "function")
            return J = dl(T._debugInfo), b = C(
              b,
              Gn(T),
              D
            ), Pe = J, b;
          if (T.$$typeof === Pn)
            return C(
              b,
              Rs(b, T),
              D
            );
          En(b, T);
        }
        return typeof T == "function" && Wo(b, T), typeof T == "symbol" && Us(b, T), null;
      }
      function E(b, T, D, J) {
        var oe = T !== null ? T.key : null;
        if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
          return oe !== null ? null : h(b, T, "" + D, J);
        if (typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case Dn:
              return D.key === oe ? (oe = dl(D._debugInfo), b = y(
                b,
                T,
                D,
                J
              ), Pe = oe, b) : null;
            case sc:
              return D.key === oe ? p(b, T, D, J) : null;
            case ia:
              return oe = dl(D._debugInfo), D = $a(D), b = E(
                b,
                T,
                D,
                J
              ), Pe = oe, b;
          }
          if (El(D) || Me(D))
            return oe !== null ? null : (oe = dl(D._debugInfo), b = R(
              b,
              T,
              D,
              J,
              null
            ), Pe = oe, b);
          if (typeof D.then == "function")
            return oe = dl(D._debugInfo), b = E(
              b,
              T,
              Gn(D),
              J
            ), Pe = oe, b;
          if (D.$$typeof === Pn)
            return E(
              b,
              T,
              Rs(b, D),
              J
            );
          En(b, D);
        }
        return typeof D == "function" && Wo(b, D), typeof D == "symbol" && Us(b, D), null;
      }
      function w(b, T, D, J, oe) {
        if (typeof J == "string" && J !== "" || typeof J == "number" || typeof J == "bigint")
          return b = b.get(D) || null, h(T, b, "" + J, oe);
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case Dn:
              return D = b.get(
                J.key === null ? D : J.key
              ) || null, b = dl(J._debugInfo), T = y(
                T,
                D,
                J,
                oe
              ), Pe = b, T;
            case sc:
              return b = b.get(
                J.key === null ? D : J.key
              ) || null, p(T, b, J, oe);
            case ia:
              var we = dl(J._debugInfo);
              return J = $a(J), T = w(
                b,
                T,
                D,
                J,
                oe
              ), Pe = we, T;
          }
          if (El(J) || Me(J))
            return D = b.get(D) || null, b = dl(J._debugInfo), T = R(
              T,
              D,
              J,
              oe,
              null
            ), Pe = b, T;
          if (typeof J.then == "function")
            return we = dl(J._debugInfo), T = w(
              b,
              T,
              D,
              Gn(J),
              oe
            ), Pe = we, T;
          if (J.$$typeof === Pn)
            return w(
              b,
              T,
              D,
              Rs(T, J),
              oe
            );
          En(T, J);
        }
        return typeof J == "function" && Wo(T, J), typeof J == "symbol" && Us(T, J), null;
      }
      function ce(b, T, D, J) {
        if (typeof D != "object" || D === null) return J;
        switch (D.$$typeof) {
          case Dn:
          case sc:
            Ne(b, T, D);
            var oe = D.key;
            if (typeof oe != "string") break;
            if (J === null) {
              J = /* @__PURE__ */ new Set(), J.add(oe);
              break;
            }
            if (!J.has(oe)) {
              J.add(oe);
              break;
            }
            se(T, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                oe
              );
            });
            break;
          case ia:
            D = $a(D), ce(b, T, D, J);
        }
        return J;
      }
      function re(b, T, D, J) {
        for (var oe = null, we = null, Oe = null, Ee = T, We = T = 0, el = null; Ee !== null && We < D.length; We++) {
          Ee.index > We ? (el = Ee, Ee = null) : el = Ee.sibling;
          var Ul = E(
            b,
            Ee,
            D[We],
            J
          );
          if (Ul === null) {
            Ee === null && (Ee = el);
            break;
          }
          oe = ce(
            b,
            Ul,
            D[We],
            oe
          ), e && Ee && Ul.alternate === null && t(b, Ee), T = f(Ul, T, We), Oe === null ? we = Ul : Oe.sibling = Ul, Oe = Ul, Ee = el;
        }
        if (We === D.length)
          return a(b, Ee), ot && qn(b, We), we;
        if (Ee === null) {
          for (; We < D.length; We++)
            Ee = C(b, D[We], J), Ee !== null && (oe = ce(
              b,
              Ee,
              D[We],
              oe
            ), T = f(
              Ee,
              T,
              We
            ), Oe === null ? we = Ee : Oe.sibling = Ee, Oe = Ee);
          return ot && qn(b, We), we;
        }
        for (Ee = i(Ee); We < D.length; We++)
          el = w(
            Ee,
            b,
            We,
            D[We],
            J
          ), el !== null && (oe = ce(
            b,
            el,
            D[We],
            oe
          ), e && el.alternate !== null && Ee.delete(
            el.key === null ? We : el.key
          ), T = f(
            el,
            T,
            We
          ), Oe === null ? we = el : Oe.sibling = el, Oe = el);
        return e && Ee.forEach(function(Co) {
          return t(b, Co);
        }), ot && qn(b, We), we;
      }
      function Jt(b, T, D, J) {
        if (D == null)
          throw Error("An iterable object provided no iterator.");
        for (var oe = null, we = null, Oe = T, Ee = T = 0, We = null, el = null, Ul = D.next(); Oe !== null && !Ul.done; Ee++, Ul = D.next()) {
          Oe.index > Ee ? (We = Oe, Oe = null) : We = Oe.sibling;
          var Co = E(b, Oe, Ul.value, J);
          if (Co === null) {
            Oe === null && (Oe = We);
            break;
          }
          el = ce(
            b,
            Co,
            Ul.value,
            el
          ), e && Oe && Co.alternate === null && t(b, Oe), T = f(Co, T, Ee), we === null ? oe = Co : we.sibling = Co, we = Co, Oe = We;
        }
        if (Ul.done)
          return a(b, Oe), ot && qn(b, Ee), oe;
        if (Oe === null) {
          for (; !Ul.done; Ee++, Ul = D.next())
            Oe = C(b, Ul.value, J), Oe !== null && (el = ce(
              b,
              Oe,
              Ul.value,
              el
            ), T = f(
              Oe,
              T,
              Ee
            ), we === null ? oe = Oe : we.sibling = Oe, we = Oe);
          return ot && qn(b, Ee), oe;
        }
        for (Oe = i(Oe); !Ul.done; Ee++, Ul = D.next())
          We = w(
            Oe,
            b,
            Ee,
            Ul.value,
            J
          ), We !== null && (el = ce(
            b,
            We,
            Ul.value,
            el
          ), e && We.alternate !== null && Oe.delete(
            We.key === null ? Ee : We.key
          ), T = f(
            We,
            T,
            Ee
          ), we === null ? oe = We : we.sibling = We, we = We);
        return e && Oe.forEach(function(bT) {
          return t(b, bT);
        }), ot && qn(b, Ee), oe;
      }
      function st(b, T, D, J) {
        if (typeof D == "object" && D !== null && D.type === Uf && D.key === null && (ya(D, null, b), D = D.props.children), typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case Dn:
              var oe = dl(D._debugInfo);
              e: {
                for (var we = D.key; T !== null; ) {
                  if (T.key === we) {
                    if (we = D.type, we === Uf) {
                      if (T.tag === 7) {
                        a(
                          b,
                          T.sibling
                        ), J = o(
                          T,
                          D.props.children
                        ), J.return = b, J._debugOwner = D._owner, J._debugInfo = Pe, ya(D, J, b), b = J;
                        break e;
                      }
                    } else if (T.elementType === we || Lm(
                      T,
                      D
                    ) || typeof we == "object" && we !== null && we.$$typeof === ia && $a(we) === T.type) {
                      a(
                        b,
                        T.sibling
                      ), J = o(T, D.props), Ma(J, D), J.return = b, J._debugOwner = D._owner, J._debugInfo = Pe, b = J;
                      break e;
                    }
                    a(b, T);
                    break;
                  } else t(b, T);
                  T = T.sibling;
                }
                D.type === Uf ? (J = Nc(
                  D.props.children,
                  b.mode,
                  J,
                  D.key
                ), J.return = b, J._debugOwner = b, J._debugTask = b._debugTask, J._debugInfo = Pe, ya(D, J, b), b = J) : (J = Yi(
                  D,
                  b.mode,
                  J
                ), Ma(J, D), J.return = b, J._debugInfo = Pe, b = J);
              }
              return b = d(b), Pe = oe, b;
            case sc:
              e: {
                for (oe = D, D = oe.key; T !== null; ) {
                  if (T.key === D)
                    if (T.tag === 4 && T.stateNode.containerInfo === oe.containerInfo && T.stateNode.implementation === oe.implementation) {
                      a(
                        b,
                        T.sibling
                      ), J = o(
                        T,
                        oe.children || []
                      ), J.return = b, b = J;
                      break e;
                    } else {
                      a(b, T);
                      break;
                    }
                  else t(b, T);
                  T = T.sibling;
                }
                J = bd(
                  oe,
                  b.mode,
                  J
                ), J.return = b, b = J;
              }
              return d(b);
            case ia:
              return oe = dl(D._debugInfo), D = $a(D), b = st(
                b,
                T,
                D,
                J
              ), Pe = oe, b;
          }
          if (El(D))
            return oe = dl(D._debugInfo), b = re(
              b,
              T,
              D,
              J
            ), Pe = oe, b;
          if (Me(D)) {
            if (oe = dl(D._debugInfo), we = Me(D), typeof we != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var Oe = we.call(D);
            return Oe === D ? (b.tag !== 0 || Object.prototype.toString.call(b.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(Oe) !== "[object Generator]") && (db || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), db = !0) : D.entries !== we || BS || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), BS = !0), b = Jt(
              b,
              T,
              Oe,
              J
            ), Pe = oe, b;
          }
          if (typeof D.then == "function")
            return oe = dl(D._debugInfo), b = st(
              b,
              T,
              Gn(D),
              J
            ), Pe = oe, b;
          if (D.$$typeof === Pn)
            return st(
              b,
              T,
              Rs(b, D),
              J
            );
          En(b, D);
        }
        return typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint" ? (oe = "" + D, T !== null && T.tag === 6 ? (a(
          b,
          T.sibling
        ), J = o(T, oe), J.return = b, b = J) : (a(b, T), J = Zo(
          oe,
          b.mode,
          J
        ), J.return = b, J._debugOwner = b, J._debugTask = b._debugTask, J._debugInfo = Pe, b = J), d(b)) : (typeof D == "function" && Wo(b, D), typeof D == "symbol" && Us(b, D), a(b, T));
      }
      return function(b, T, D, J) {
        var oe = Pe;
        Pe = null;
        try {
          $p = 0;
          var we = st(
            b,
            T,
            D,
            J
          );
          return nm = null, we;
        } catch (el) {
          if (el === am || el === ov) throw el;
          var Oe = N(29, el, null, b.mode);
          Oe.lanes = J, Oe.return = b;
          var Ee = Oe._debugInfo = Pe;
          if (Oe._debugOwner = b._debugOwner, Oe._debugTask = b._debugTask, Ee != null) {
            for (var We = Ee.length - 1; 0 <= We; We--)
              if (typeof Ee[We].stack == "string") {
                Oe._debugOwner = Ee[We], Oe._debugTask = Ee[We].debugTask;
                break;
              }
          }
          return Oe;
        } finally {
          Pe = oe;
        }
      };
    }
    function Yt(e, t) {
      var a = El(e);
      return e = !a && typeof Me(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function it(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function vu(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function zl(e) {
      return {
        lane: e,
        tag: gb,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Su(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, YS === i && !bb) {
        var o = he(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), bb = !0;
      }
      return (mt & Pl) !== sa ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = Os(e), Gm(e, null, a), t) : (Vo(e, i, t, a), Os(e));
    }
    function Tn(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, hs(e, a);
      }
    }
    function Hs(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function Fo() {
      if (wS) {
        var e = lm;
        if (e !== null) throw e;
      }
    }
    function bu(e, t, a, i) {
      wS = !1;
      var o = e.updateQueue;
      If = !1, YS = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var y = h, p = y.next;
        y.next = null, d === null ? f = p : d.next = p, d = y;
        var R = e.alternate;
        R !== null && (R = R.updateQueue, h = R.lastBaseUpdate, h !== d && (h === null ? R.firstBaseUpdate = p : h.next = p, R.lastBaseUpdate = y));
      }
      if (f !== null) {
        var C = o.baseState;
        d = 0, R = p = y = null, h = f;
        do {
          var E = h.lane & -536870913, w = E !== h.lane;
          if (w ? (et & E) === E : (i & E) === E) {
            E !== 0 && E === Br && (wS = !0), R !== null && (R = R.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              E = e;
              var ce = h, re = t, Jt = a;
              switch (ce.tag) {
                case vb:
                  if (ce = ce.payload, typeof ce == "function") {
                    em = !0;
                    var st = ce.call(
                      Jt,
                      C,
                      re
                    );
                    if (E.mode & Ba) {
                      me(!0);
                      try {
                        ce.call(Jt, C, re);
                      } finally {
                        me(!1);
                      }
                    }
                    em = !1, C = st;
                    break e;
                  }
                  C = ce;
                  break e;
                case qS:
                  E.flags = E.flags & -65537 | 128;
                case gb:
                  if (st = ce.payload, typeof st == "function") {
                    if (em = !0, ce = st.call(
                      Jt,
                      C,
                      re
                    ), E.mode & Ba) {
                      me(!0);
                      try {
                        st.call(Jt, C, re);
                      } finally {
                        me(!1);
                      }
                    }
                    em = !1;
                  } else ce = st;
                  if (ce == null) break e;
                  C = Fe({}, C, ce);
                  break e;
                case Sb:
                  If = !0;
              }
            }
            E = h.callback, E !== null && (e.flags |= 64, w && (e.flags |= 8192), w = o.callbacks, w === null ? o.callbacks = [E] : w.push(E));
          } else
            w = {
              lane: E,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, R === null ? (p = R = w, y = C) : R = R.next = w, d |= E;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            w = h, h = w.next, w.next = null, o.lastBaseUpdate = w, o.shared.pending = null;
          }
        } while (!0);
        R === null && (y = C), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = R, f === null && (o.shared.lanes = 0), ts |= d, e.lanes = d, e.memoizedState = C;
      }
      YS = null;
    }
    function Qi(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function Pm(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          Qi(a[e], t);
    }
    function Io(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Qi(a[e], t);
    }
    function Md(e, t) {
      var a = vc;
      Ge(sv, a, e), Ge(um, t, e), vc = a | t.baseLanes;
    }
    function ii(e) {
      Ge(sv, vc, e), Ge(
        um,
        um.current,
        e
      );
    }
    function Xn(e) {
      vc = sv.current, Se(um, e), Se(sv, e);
    }
    function pa(e) {
      var t = e.alternate;
      Ge(
        Cl,
        Cl.current & im,
        e
      ), Ge(au, e, e), $u === null && (t === null || um.current !== null || t.memoizedState !== null) && ($u = e);
    }
    function Qn(e) {
      Ge(Cl, Cl.current, e), Ge(au, e, e), $u === null && ($u = e);
    }
    function Cd(e) {
      e.tag === 22 ? (Ge(Cl, Cl.current, e), Ge(au, e, e), $u === null && ($u = e)) : Eu(e);
    }
    function Eu(e) {
      Ge(Cl, Cl.current, e), Ge(
        au,
        au.current,
        e
      );
    }
    function Bl(e) {
      Se(au, e), $u === e && ($u = null), Se(Cl, e);
    }
    function Gc(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || mr(a) || Wy(a)))
            return t;
        } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function qe() {
      var e = G;
      Wu === null ? Wu = [e] : Wu.push(e);
    }
    function W() {
      var e = G;
      if (Wu !== null && (zo++, Wu[zo] !== e)) {
        var t = he(Ye);
        if (!Eb.has(t) && (Eb.add(t), Wu !== null)) {
          for (var a = "", i = 0; i <= zo; i++) {
            var o = Wu[i], f = i === zo ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function ci(e) {
      e == null || El(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        G,
        typeof e
      );
    }
    function Ns() {
      var e = he(Ye);
      Ab.has(e) || (Ab.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function ol() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function ey(e, t) {
      if (Fp) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          G
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        G,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!on(e[a], t[a])) return !1;
      return !0;
    }
    function ty(e, t, a, i, o, f) {
      Ao = f, Ye = t, Wu = e !== null ? e._debugHookTypes : null, zo = -1, Fp = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = he(Ye), GS.has(f) || (GS.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, X.H = e !== null && e.memoizedState !== null ? XS : Wu !== null ? Ob : LS, Lr = f = (t.mode & Ba) !== xe;
      var d = NS(a, i, o);
      if (Lr = !1, om && (d = js(
        t,
        a,
        i,
        o
      )), f) {
        me(!0);
        try {
          d = js(
            t,
            a,
            i,
            o
          );
        } finally {
          me(!1);
        }
      }
      return hl(e, t), d;
    }
    function hl(e, t) {
      t._debugHookTypes = Wu, t.dependencies === null ? Oo !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: Oo
      }) : t.dependencies._debugThenableState = Oo, X.H = Ip;
      var a = Lt !== null && Lt.next !== null;
      if (Ao = 0, Wu = G = Ql = Lt = Ye = null, zo = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), dv = !1, Wp = 0, Oo = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Vl || (e = e.dependencies, e !== null && Ko(e) && (Vl = !0)), Kp ? (Kp = !1, e = !0) : e = !1, e && (t = he(t) || "Unknown", Tb.has(t) || GS.has(t) || (Tb.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function js(e, t, a, i) {
      Ye = e;
      var o = 0;
      do {
        if (om && (Oo = null), Wp = 0, om = !1, o >= IE)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Fp = !1, Ql = Lt = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        zo = -1, X.H = zb, f = NS(t, a, i);
      } while (om);
      return f;
    }
    function xs() {
      var e = X.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Ys(t) : t, e = e.useState()[0], (Lt !== null ? Lt.memoizedState : null) !== e && (Ye.flags |= 1024), t;
    }
    function Lc() {
      var e = hv !== 0;
      return hv = 0, e;
    }
    function Bs(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Ti) !== xe ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function Vi(e) {
      if (dv) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        dv = !1;
      }
      Ao = 0, Wu = Ql = Lt = Ye = null, zo = -1, G = null, om = !1, Wp = hv = 0, Oo = null;
    }
    function Sl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Ql === null ? Ye.memoizedState = Ql = e : Ql = Ql.next = e, Ql;
    }
    function At() {
      if (Lt === null) {
        var e = Ye.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Lt.next;
      var t = Ql === null ? Ye.memoizedState : Ql.next;
      if (t !== null)
        Ql = t, Lt = e;
      else {
        if (e === null)
          throw Ye.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        Lt = e, e = {
          memoizedState: Lt.memoizedState,
          baseState: Lt.baseState,
          baseQueue: Lt.baseQueue,
          queue: Lt.queue,
          next: null
        }, Ql === null ? Ye.memoizedState = Ql = e : Ql = Ql.next = e;
      }
      return Ql;
    }
    function qs() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Ys(e) {
      var t = Wp;
      return Wp += 1, Oo === null && (Oo = Rd()), e = Ka(Oo, e, t), t = Ye, (Ql === null ? t.memoizedState : Ql.next) === null && (t = t.alternate, X.H = t !== null && t.memoizedState !== null ? XS : LS), e;
    }
    function oi(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Ys(e);
        if (e.$$typeof === Pn) return St(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function ka(e) {
      var t = null, a = Ye.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = Ye.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = qs(), Ye.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || Fp)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = iS;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function Wa(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Po(e, t, a) {
      var i = Sl();
      if (a !== void 0) {
        var o = a(t);
        if (Lr) {
          me(!0);
          try {
            a(t);
          } finally {
            me(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = tS.bind(
        null,
        Ye,
        e
      ), [i.memoizedState, e];
    }
    function Xc(e) {
      var t = At();
      return Zi(t, Lt, e);
    }
    function Zi(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, y = null, p = t, R = !1;
        do {
          var C = p.lane & -536870913;
          if (C !== p.lane ? (et & C) === C : (Ao & C) === C) {
            var E = p.revertLane;
            if (E === 0)
              y !== null && (y = y.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }), C === Br && (R = !0);
            else if ((Ao & E) === E) {
              p = p.next, E === Br && (R = !0);
              continue;
            } else
              C = {
                lane: 0,
                revertLane: p.revertLane,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }, y === null ? (h = y = C, d = f) : y = y.next = C, Ye.lanes |= E, ts |= E;
            C = p.action, Lr && a(f, C), f = p.hasEagerState ? p.eagerState : a(f, C);
          } else
            E = {
              lane: C,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = E, d = f) : y = y.next = E, Ye.lanes |= C, ts |= C;
          p = p.next;
        } while (p !== null && p !== t);
        if (y === null ? d = f : y.next = h, !on(f, e.memoizedState) && (Vl = !0, R && (a = lm, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = y, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function Qc(e) {
      var t = At(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        on(f, t.memoizedState) || (Vl = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function ef(e, t, a) {
      var i = Ye, o = Sl();
      if (ot) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        cm || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), cm = !0);
      } else {
        if (f = t(), cm || (a = t(), on(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), cm = !0)), Xt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (et & 127) !== 0 || ly(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, Jc(
        Ji.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, Tu(
        ku | rn,
        { destroy: void 0 },
        ay.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Vc(e, t, a) {
      var i = Ye, o = At(), f = ot;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !cm) {
        var d = t();
        on(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), cm = !0);
      }
      (d = !on(
        (Lt || o).memoizedState,
        a
      )) && (o.memoizedState = a, Vl = !0), o = o.queue;
      var h = Ji.bind(null, i, o, e);
      if (Dl(2048, rn, h, [e]), o.getSnapshot !== t || d || Ql !== null && Ql.memoizedState.tag & ku) {
        if (i.flags |= 2048, Tu(
          ku | rn,
          { destroy: void 0 },
          ay.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), Xt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (Ao & 127) !== 0 || ly(i, t, a);
      }
      return a;
    }
    function ly(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Ye.updateQueue, t === null ? (t = qs(), Ye.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function ay(e, t, a, i) {
      t.value = a, t.getSnapshot = i, Ki(t) && ny(e);
    }
    function Ji(e, t, a) {
      return a(function() {
        Ki(t) && (pu(2, "updateSyncExternalStore()", e), ny(e));
      });
    }
    function Ki(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !on(e, a);
      } catch {
        return !0;
      }
    }
    function ny(e) {
      var t = aa(e, 2);
      t !== null && Be(t, e, 2);
    }
    function Ud(e) {
      var t = Sl();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), Lr) {
          me(!0);
          try {
            a();
          } finally {
            me(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wa,
        lastRenderedState: e
      }, t;
    }
    function $i(e) {
      e = Ud(e);
      var t = e.queue, a = qd.bind(null, Ye, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function Zc(e) {
      var t = Sl();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Zs.bind(
        null,
        Ye,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function ws(e, t) {
      var a = At();
      return tf(a, Lt, e, t);
    }
    function tf(e, t, a, i) {
      return e.baseState = a, Zi(
        e,
        Lt,
        typeof i == "function" ? i : Wa
      );
    }
    function Gs(e, t) {
      var a = At();
      return Lt !== null ? tf(a, Lt, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function L0(e, t, a, i, o) {
      if (ql(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        X.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, ki(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function ki(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = X.T, d = {};
        d._updatedFibers = /* @__PURE__ */ new Set(), X.T = d;
        try {
          var h = a(o, i), y = X.S;
          y !== null && y(d, h), uy(e, t, h);
        } catch (p) {
          Ls(e, t, p);
        } finally {
          f !== null && d.types !== null && (f.types !== null && f.types !== d.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), f.types = d.types), X.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), uy(e, t, d);
        } catch (p) {
          Ls(e, t, p);
        }
    }
    function uy(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (X.asyncTransitions++, a.then(Kc, Kc), a.then(
        function(i) {
          fi(e, t, i);
        },
        function(i) {
          return Ls(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : fi(e, t, a);
    }
    function fi(e, t, a) {
      t.status = "fulfilled", t.value = a, Hd(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, ki(e, a)));
    }
    function Ls(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, Hd(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function Hd(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function si(e, t) {
      return t;
    }
    function Fa(e, t) {
      if (ot) {
        var a = Xt.formState;
        if (a !== null) {
          e: {
            var i = Ye;
            if (ot) {
              if (Pt) {
                t: {
                  for (var o = Pt, f = Ju; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = an(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === r1 || f === s2 ? o : null;
                }
                if (o) {
                  Pt = an(
                    o.nextSibling
                  ), i = o.data === r1;
                  break e;
                }
              }
              gn(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = Sl(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: si,
        lastRenderedState: t
      }, a.queue = i, a = qd.bind(
        null,
        Ye,
        i
      ), i.dispatch = a, i = Ud(!1), f = Zs.bind(
        null,
        Ye,
        !1,
        i.queue
      ), i = Sl(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = L0.bind(
        null,
        Ye,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function Wi(e) {
      var t = At();
      return Nd(t, Lt, e);
    }
    function Nd(e, t, a) {
      if (t = Zi(
        e,
        t,
        si
      )[0], e = Xc(Wa)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = Ys(t);
        } catch (d) {
          throw d === am ? ov : d;
        }
      else i = t;
      t = At();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (Ye.flags |= 2048, Tu(
        ku | rn,
        { destroy: void 0 },
        iy.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function iy(e, t) {
      e.action = t;
    }
    function Fi(e) {
      var t = At(), a = Lt;
      if (a !== null)
        return Nd(t, a, e);
      At(), t = t.memoizedState, a = At();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function Tu(e, t, a, i) {
      return e = { tag: e, create: a, deps: i, inst: t, next: null }, t = Ye.updateQueue, t === null && (t = qs(), Ye.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function jd(e) {
      var t = Sl();
      return e = { current: e }, t.memoizedState = e;
    }
    function Ii(e, t, a, i) {
      var o = Sl();
      Ye.flags |= e, o.memoizedState = Tu(
        ku | t,
        { destroy: void 0 },
        a,
        i === void 0 ? null : i
      );
    }
    function Dl(e, t, a, i) {
      var o = At();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      Lt !== null && i !== null && ey(i, Lt.memoizedState.deps) ? o.memoizedState = Tu(t, f, a, i) : (Ye.flags |= e, o.memoizedState = Tu(
        ku | t,
        f,
        a,
        i
      ));
    }
    function Jc(e, t) {
      (Ye.mode & Ti) !== xe ? Ii(276826112, rn, e, t) : Ii(8390656, rn, e, t);
    }
    function X0(e) {
      Ye.flags |= 4;
      var t = Ye.updateQueue;
      if (t === null)
        t = qs(), Ye.updateQueue = t, t.events = [e];
      else {
        var a = t.events;
        a === null ? t.events = [e] : a.push(e);
      }
    }
    function Xs(e) {
      var t = Sl(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((mt & Pl) !== sa)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return a.impl.apply(void 0, arguments);
      };
    }
    function lf(e) {
      var t = At().memoizedState;
      return X0({ ref: t, nextImpl: e }), function() {
        if ((mt & Pl) !== sa)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return t.impl.apply(void 0, arguments);
      };
    }
    function ga(e, t) {
      var a = 4194308;
      return (Ye.mode & Ti) !== xe && (a |= 134217728), Ii(a, nu, e, t);
    }
    function Ia(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Au(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (Ye.mode & Ti) !== xe && (i |= 134217728), Ii(
        i,
        nu,
        Ia.bind(null, t, e),
        a
      );
    }
    function af(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, Dl(
        4,
        nu,
        Ia.bind(null, t, e),
        a
      );
    }
    function xd(e, t) {
      return Sl().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function Vn(e, t) {
      var a = At();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && ey(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function va(e, t) {
      var a = Sl();
      t = t === void 0 ? null : t;
      var i = e();
      if (Lr) {
        me(!0);
        try {
          e();
        } finally {
          me(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function kt(e, t) {
      var a = At();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && ey(t, i[1]))
        return i[0];
      if (i = e(), Lr) {
        me(!0);
        try {
          e();
        } finally {
          me(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function nf(e, t) {
      var a = Sl();
      return Ot(a, e, t);
    }
    function Ou(e, t) {
      var a = At();
      return ml(
        a,
        Lt.memoizedState,
        e,
        t
      );
    }
    function Ve(e, t) {
      var a = At();
      return Lt === null ? Ot(a, e, t) : ml(
        a,
        Lt.memoizedState,
        e,
        t
      );
    }
    function Ot(e, t, a) {
      return a === void 0 || (Ao & 1073741824) !== 0 && (et & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = hf(), Ye.lanes |= e, ts |= e, a);
    }
    function ml(e, t, a, i) {
      return on(a, t) ? a : um.current !== null ? (e = Ot(e, a, i), on(e, t) || (Vl = !0), e) : (Ao & 42) === 0 || (Ao & 1073741824) !== 0 && (et & 261930) === 0 ? (Vl = !0, e.memoizedState = a) : (e = hf(), Ye.lanes |= e, ts |= e, t);
    }
    function Kc() {
      X.asyncTransitions--;
    }
    function $c(e, t, a, i, o) {
      var f = Et.p;
      Et.p = f !== 0 && f < Fl ? f : Fl;
      var d = X.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), X.T = h, Zs(e, !1, t, a);
      try {
        var y = o(), p = X.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          X.asyncTransitions++, y.then(Kc, Kc);
          var R = Dd(
            y,
            i
          );
          kc(
            e,
            t,
            R,
            ua(e)
          );
        } else
          kc(
            e,
            t,
            i,
            ua(e)
          );
      } catch (C) {
        kc(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: C },
          ua(e)
        );
      } finally {
        Et.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
          "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
        ), d.types = h.types), X.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function ri(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = Qs(e).queue;
      w0(e), $c(
        e,
        o,
        t,
        Ir,
        a === null ? k : function() {
          return uf(e), a(i);
        }
      );
    }
    function Qs(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: Ir,
        baseState: Ir,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Wa,
          lastRenderedState: Ir
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Wa,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function uf(e) {
      X.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = Qs(e);
      t.next === null && (t = e.alternate.memoizedState), kc(
        e,
        t.next.queue,
        {},
        ua(e)
      );
    }
    function Pi() {
      var e = Ud(!1);
      return e = $c.bind(
        null,
        Ye,
        e.queue,
        !0,
        !1
      ), Sl().memoizedState = e, [!1, e];
    }
    function Q0() {
      var e = Xc(Wa)[0], t = At().memoizedState;
      return [
        typeof e == "boolean" ? e : Ys(e),
        t
      ];
    }
    function ll() {
      var e = Qc(Wa)[0], t = At().memoizedState;
      return [
        typeof e == "boolean" ? e : Ys(e),
        t
      ];
    }
    function di() {
      return St(h0);
    }
    function Vs() {
      var e = Sl(), t = Xt.identifierPrefix;
      if (ot) {
        var a = vo, i = go;
        a = (i & ~(1 << 32 - Wl(i) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = hv++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = FE++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    }
    function Bd() {
      return Sl().memoizedState = V0.bind(
        null,
        Ye
      );
    }
    function V0(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = ua(a), o = zl(i), f = Su(a, o, i);
            f !== null && (pu(i, "refresh()", e), Be(f, a, i), Tn(f, a, i)), e = Od(), t != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), o.payload = { cache: e };
            return;
        }
        a = a.return;
      }
    }
    function tS(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = ua(e);
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      ql(e) ? fl(t, o) : (o = Cc(e, t, o, i), o !== null && (pu(i, "dispatch()", e), Be(o, e, i), Js(o, t, i)));
    }
    function qd(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = ua(e), kc(e, t, a, i) && pu(i, "setState()", e);
    }
    function kc(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ql(e)) fl(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = X.H;
          X.H = Oi;
          try {
            var h = t.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, on(y, h))
              return Vo(e, t, o, 0), Xt === null && vd(), !1;
          } catch {
          } finally {
            X.H = d;
          }
        }
        if (a = Cc(e, t, o, i), a !== null)
          return Be(a, e, i), Js(a, t, i), !0;
      }
      return !1;
    }
    function Zs(e, t, a, i) {
      if (X.T === null && Br === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: Ky(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, ql(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = Cc(
          e,
          a,
          i,
          2
        ), t !== null && (pu(2, "setOptimistic()", e), Be(t, e, 2));
    }
    function ql(e) {
      var t = e.alternate;
      return e === Ye || t !== null && t === Ye;
    }
    function fl(e, t) {
      om = dv = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Js(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, hs(e, a);
      }
    }
    function Wc(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        Bb.has(t) || (Bb.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function cf(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & Ba) {
        me(!0);
        try {
          f = a(i, o);
        } finally {
          me(!1);
        }
      }
      f === void 0 && (t = Ke(t) || "Component", Hb.has(t) || (Hb.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : Fe({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Yd(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & Ba) {
          me(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            me(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Ke(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Qo(a, i) || !Qo(o, f) : !0;
    }
    function zu(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = he(e) || "Component", Rb.has(e) || (Rb.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), QS.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function Du(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = Fe({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function wd(e) {
      bS(e), console.warn(
        `%s

%s
`,
        fm ? "An error occurred in the <" + fm + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function Gd(e) {
      var t = fm ? "The above error occurred in the <" + fm + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((VS || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          v2 + " " + e[0],
          S2,
          Yv + i + Yv,
          b2
        ) : e.splice(
          0,
          0,
          v2,
          S2,
          Yv + i + Yv,
          b2
        ), e.unshift(console), i = vT.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function cy(e) {
      bS(e);
    }
    function Ks(e, t) {
      try {
        fm = t.source ? he(t.source) : null, VS = null;
        var a = t.value;
        if (X.actQueue !== null)
          X.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function oy(e, t, a) {
      try {
        fm = a.source ? he(a.source) : null, VS = he(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Ld(e, t, a) {
      return a = zl(a), a.tag = qS, a.payload = { element: null }, a.callback = function() {
        se(t.source, Ks, e, t);
      }, a;
    }
    function Xd(e) {
      return e = zl(e), e.tag = qS, e;
    }
    function Qd(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          Uc(a), se(
            i.source,
            oy,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        Uc(a), se(
          i.source,
          oy,
          t,
          a,
          i
        ), typeof o != "function" && (as === null ? as = /* @__PURE__ */ new Set([this]) : as.add(this)), KE(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          he(a) || "Unknown"
        );
      });
    }
    function fy(e, t, a, i, o) {
      if (a.flags |= 32768, wu && vf(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && wn(
          t,
          a,
          o,
          !0
        ), ot && (yc = !0), a = au.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return $u === null ? yf() : a.alternate === null && rl === Ro && (rl = pv), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === fv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), fh(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === fv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), fh(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return fh(e, i, o), yf(), !1;
      }
      if (ot)
        return yc = !0, t = au.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== DS && Ds(
          da(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== DS && Ds(
          da(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = da(i, a), o = Ld(
          e.stateNode,
          i,
          o
        ), Hs(e, o), rl !== Pf && (rl = Xr)), !1;
      var f = da(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (n0 === null ? n0 = [f] : n0.push(f), rl !== Pf && (rl = Xr), t === null) return !0;
      i = da(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = Ld(
              a.stateNode,
              i,
              e
            ), Hs(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (as === null || !as.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Xd(o), Qd(
                o,
                e,
                a,
                i
              ), Hs(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function Yl(e, t, a, i) {
      t.child = e === null ? pb(t, null, a, i) : Gr(
        t,
        e.child,
        a,
        i
      );
    }
    function Z0(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return Xi(t), i = ty(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = Lc(), e !== null && !Vl ? (Bs(e, t, o), Zn(e, t, o)) : (ot && h && Ed(t), t.flags |= 1, Yl(e, t, i, o), t.child);
    }
    function sy(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !Xm(f) && f.defaultProps === void 0 && a.compare === null ? (a = qi(f), t.tag = 15, t.type = a, of(t, f), ry(
          e,
          t,
          a,
          i,
          o
        )) : (e = Hc(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !$d(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Qo, a(d, i) && e.ref === t.ref)
          return Zn(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = yu(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function ry(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Qo(f, i) && e.ref === t.ref && t.type === e.type)
          if (Vl = !1, t.pendingProps = i = f, $d(e, o))
            (e.flags & 131072) !== 0 && (Vl = !0);
          else
            return t.lanes = e.lanes, Zn(e, t, o);
      }
      return yy(
        e,
        t,
        a,
        i,
        o
      );
    }
    function dy(e, t, a, i) {
      var o = i.children, f = e !== null ? e.memoizedState : null;
      if (e === null && t.stateNode === null && (t.stateNode = {
        _visibility: Np,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (f = f !== null ? f.baseLanes | a : a, e !== null) {
            for (i = t.child = e.child, o = 0; i !== null; )
              o = o | i.lanes | i.childLanes, i = i.sibling;
            i = o & ~f;
          } else i = 0, t.child = null;
          return hy(
            e,
            t,
            f,
            a,
            i
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ko(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? Md(t, f) : ii(t), Cd(t);
        else
          return i = t.lanes = 536870912, hy(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a,
            i
          );
      } else
        f !== null ? (ko(t, f.cachePool), Md(t, f), Eu(t), t.memoizedState = null) : (e !== null && ko(t, null), ii(t), Eu(t));
      return Yl(e, t, o, a), t.child;
    }
    function Fc(e, t) {
      return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
        _visibility: Np,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), t.sibling;
    }
    function hy(e, t, a, i, o) {
      var f = ui();
      return f = f === null ? null : {
        parent: Ll._currentValue,
        pool: f
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, e !== null && ko(t, null), ii(t), Cd(t), e !== null && wn(e, t, i, !0), t.childLanes = o, null;
    }
    function $s(e, t) {
      var a = t.hidden;
      return a !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        a === !0 ? "hidden" : a === !1 ? "hidden={false}" : "hidden={...}",
        a ? 'mode="hidden"' : 'mode="visible"'
      ), t = Ws(
        { mode: t.mode, children: t.children },
        e.mode
      ), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function my(e, t, a) {
      return Gr(t, e.child, null, a), e = $s(
        t,
        t.pendingProps
      ), e.flags |= 2, Bl(t), t.memoizedState = null, e;
    }
    function J0(e, t, a) {
      var i = t.pendingProps, o = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (ot) {
          if (i.mode === "hidden")
            return e = $s(t, i), t.lanes = 536870912, Fc(null, e);
          if (Qn(t), (e = Pt) ? (a = Dt(
            e,
            Ju
          ), a = a !== null && a.data === $r ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: B0(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Vm(a), i.return = t, t.child = i, Ra = t, Pt = null)) : a = null, a === null)
            throw na(t, e), gn(t);
          return t.lanes = 536870912, null;
        }
        return $s(t, i);
      }
      var f = e.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (Qn(t), o)
          if (t.flags & 256)
            t.flags &= -257, t = my(
              e,
              t,
              a
            );
          else if (t.memoizedState !== null)
            t.child = e.child, t.flags |= 128, t = null;
          else
            throw Error(
              "Client rendering an Activity suspended it again. This is a bug in React."
            );
        else if (Y0(), (a & 536870912) !== 0 && mf(t), Vl || wn(
          e,
          t,
          a,
          !1
        ), o = (a & e.childLanes) !== 0, Vl || o) {
          if (i = Xt, i !== null && (d = Ec(
            i,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, aa(e, d), Be(i, e, d), ZS;
          yf(), t = my(
            e,
            t,
            a
          );
        } else
          e = f.treeContext, Pt = an(
            d.nextSibling
          ), Ra = t, ot = !0, Kf = null, yc = !1, lu = null, Ju = !1, e !== null && q0(t, e), t = $s(t, i), t.flags |= 4096;
        return t;
      }
      return f = e.child, i = { mode: i.mode, children: i.children }, (a & 536870912) !== 0 && (a & e.lanes) !== 0 && mf(t), e = yu(f, i), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function ks(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function yy(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = Ke(a) || "Unknown";
        qb[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), qb[f] = !0);
      }
      return t.mode & Ba && Ai.recordLegacyContextWarning(
        t,
        null
      ), e === null && (of(t, t.type), a.contextTypes && (f = Ke(a) || "Unknown", wb[f] || (wb[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), Xi(t), a = ty(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = Lc(), e !== null && !Vl ? (Bs(e, t, o), Zn(e, t, o)) : (ot && i && Ed(t), t.flags |= 1, Yl(e, t, a, o), t.child);
    }
    function py(e, t, a, i, o, f) {
      return Xi(t), zo = -1, Fp = e !== null && e.type !== t.type, t.updateQueue = null, a = js(
        t,
        i,
        a,
        o
      ), hl(e, t), i = Lc(), e !== null && !Vl ? (Bs(e, t, f), Zn(e, t, f)) : (ot && i && Ed(t), t.flags |= 1, Yl(e, t, a, f), t.child);
    }
    function Ic(e, t, a, i, o) {
      switch (He(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = Xt, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Xd(h), Qd(
            h,
            d,
            t,
            da(f, t)
          ), Hs(t, h);
      }
      if (Xi(t), t.stateNode === null) {
        if (d = Jf, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== Pn) && !xb.has(a) && (xb.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === Uh ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Ke(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = St(f)), f = new a(i, d), t.mode & Ba) {
          me(!0);
          try {
            f = new a(i, d);
          } finally {
            me(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = QS, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = Db, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Ke(a) || "Component", _b.has(d) || (_b.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = Ke(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Cb.has(f) || (Cb.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              p,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              y !== null ? `
  ` + y : ""
            ));
          }
        }
        f = t.stateNode, d = Ke(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !jb.has(a) && (jb.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !Nb.has(a) && (Nb.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Ke(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || Mb.has(a) || (Mb.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Ke(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || El(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, it(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? St(d) : Jf, f.state === i && (d = Ke(a) || "Component", Ub.has(d) || (Ub.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & Ba && Ai.recordLegacyContextWarning(
          t,
          f
        ), Ai.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (cf(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          he(t) || "Component"
        ), QS.enqueueReplaceState(
          f,
          f.state,
          null
        )), bu(t, i, f, o), Fo(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ti) !== xe && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var R = t.memoizedProps;
        h = Du(a, R), f.props = h;
        var C = f.context;
        y = a.contextType, d = Jf, typeof y == "object" && y !== null && (d = St(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", R = t.pendingProps !== R, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (R || C !== d) && zu(
          t,
          f,
          i,
          d
        ), If = !1;
        var E = t.memoizedState;
        f.state = E, bu(t, i, f, o), Fo(), C = t.memoizedState, R || E !== C || If ? (typeof p == "function" && (cf(
          t,
          a,
          p,
          i
        ), C = t.memoizedState), (h = If || Yd(
          t,
          a,
          h,
          i,
          E,
          C,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ti) !== xe && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ti) !== xe && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = C), f.props = i, f.state = C, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ti) !== xe && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, vu(e, t), d = t.memoizedProps, y = Du(a, d), f.props = y, p = t.pendingProps, E = f.context, C = a.contextType, h = Jf, typeof C == "object" && C !== null && (h = St(C)), R = a.getDerivedStateFromProps, (C = typeof R == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || E !== h) && zu(
          t,
          f,
          i,
          h
        ), If = !1, E = t.memoizedState, f.state = E, bu(t, i, f, o), Fo();
        var w = t.memoizedState;
        d !== p || E !== w || If || e !== null && e.dependencies !== null && Ko(e.dependencies) ? (typeof R == "function" && (cf(
          t,
          a,
          R,
          i
        ), w = t.memoizedState), (y = If || Yd(
          t,
          a,
          y,
          i,
          E,
          w,
          h
        ) || e !== null && e.dependencies !== null && Ko(e.dependencies)) ? (C || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, w, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          w,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = w), f.props = i, f.state = w, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, ks(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, _i(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, fn = -1;
        else if (a = lb(h), t.mode & Ba) {
          me(!0);
          try {
            lb(h);
          } finally {
            me(!1);
          }
        }
        t.flags |= 1, e !== null && d ? (t.child = Gr(
          t,
          e.child,
          null,
          o
        ), t.child = Gr(
          t,
          null,
          a,
          o
        )) : Yl(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Zn(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (sm || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        he(t) || "a component"
      ), sm = !0), e;
    }
    function gy(e, t, a, i) {
      return Gi(), t.flags |= 256, Yl(e, t, a, i), t.child;
    }
    function of(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = Ke(t) || "Unknown", Gb[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), Gb[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = Ke(t) || "Unknown", Yb[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), Yb[t] = !0));
    }
    function ff(e) {
      return { baseLanes: e, cachePool: Wm() };
    }
    function Vd(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Cn), e;
    }
    function Zd(e, t, a) {
      var i, o = t.pendingProps;
      ve(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (Cl.current & kp) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (ot) {
          if (f ? pa(t) : Eu(t), (e = Pt) ? (a = Dt(
            e,
            Ju
          ), a = a !== null && a.data !== $r ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: B0(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Vm(a), i.return = t, t.child = i, Ra = t, Pt = null)) : a = null, a === null)
            throw na(t, e), gn(t);
          return Wy(a) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          Eu(t);
          var y = t.mode;
          return h = Ws(
            { mode: "hidden", children: h },
            y
          ), o = Nc(
            o,
            y,
            a,
            null
          ), h.return = t, o.return = t, h.sibling = o, t.child = h, o = t.child, o.memoizedState = ff(a), o.childLanes = Vd(
            e,
            i,
            a
          ), t.memoizedState = JS, Fc(
            null,
            o
          );
        }
        return pa(t), vy(
          t,
          h
        );
      }
      var p = e.memoizedState;
      if (p !== null) {
        var R = p.dehydrated;
        if (R !== null) {
          if (d)
            t.flags & 256 ? (pa(t), t.flags &= -257, t = Jd(
              e,
              t,
              a
            )) : t.memoizedState !== null ? (Eu(t), t.child = e.child, t.flags |= 128, t = null) : (Eu(t), h = o.fallback, y = t.mode, o = Ws(
              {
                mode: "visible",
                children: o.children
              },
              y
            ), h = Nc(
              h,
              y,
              a,
              null
            ), h.flags |= 2, o.return = t, h.return = t, o.sibling = h, t.child = o, Gr(
              t,
              e.child,
              null,
              a
            ), o = t.child, o.memoizedState = ff(a), o.childLanes = Vd(
              e,
              i,
              a
            ), t.memoizedState = JS, t = Fc(
              null,
              o
            ));
          else if (pa(t), Y0(), (a & 536870912) !== 0 && mf(t), Wy(
            R
          )) {
            if (i = R.nextSibling && R.nextSibling.dataset, i) {
              h = i.dgst;
              var C = i.msg;
              y = i.stck;
              var E = i.cstck;
            }
            f = C, i = h, o = y, R = E, h = f, y = R, h = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), h.stack = o || "", h.digest = i, i = y === void 0 ? null : y, o = {
              value: h,
              source: null,
              stack: i
            }, typeof i == "string" && zS.set(
              h,
              o
            ), Ds(o), t = Jd(
              e,
              t,
              a
            );
          } else if (Vl || wn(
            e,
            t,
            a,
            !1
          ), i = (a & e.childLanes) !== 0, Vl || i) {
            if (i = Xt, i !== null && (o = Ec(
              i,
              a
            ), o !== 0 && o !== p.retryLane))
              throw p.retryLane = o, aa(
                e,
                o
              ), Be(
                i,
                e,
                o
              ), ZS;
            mr(
              R
            ) || yf(), t = Jd(
              e,
              t,
              a
            );
          } else
            mr(
              R
            ) ? (t.flags |= 192, t.child = e.child, t = null) : (e = p.treeContext, Pt = an(
              R.nextSibling
            ), Ra = t, ot = !0, Kf = null, yc = !1, lu = null, Ju = !1, e !== null && q0(t, e), t = vy(
              t,
              o.children
            ), t.flags |= 4096);
          return t;
        }
      }
      return f ? (Eu(t), h = o.fallback, y = t.mode, E = e.child, R = E.sibling, o = yu(
        E,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = E.subtreeFlags & 65011712, R !== null ? h = yu(
        R,
        h
      ) : (h = Nc(
        h,
        y,
        a,
        null
      ), h.flags |= 2), h.return = t, o.return = t, o.sibling = h, t.child = o, Fc(null, o), o = t.child, h = e.child.memoizedState, h === null ? h = ff(a) : (y = h.cachePool, y !== null ? (E = Ll._currentValue, y = y.parent !== E ? { parent: E, pool: E } : y) : y = Wm(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), o.memoizedState = h, o.childLanes = Vd(
        e,
        i,
        a
      ), t.memoizedState = JS, Fc(
        e.child,
        o
      )) : (p !== null && (a & 62914560) === a && (a & e.lanes) !== 0 && mf(t), pa(t), a = e.child, e = a.sibling, a = yu(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function vy(e, t) {
      return t = Ws(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Ws(e, t) {
      return e = N(22, e, null, t), e.lanes = 0, e;
    }
    function Jd(e, t, a) {
      return Gr(t, e.child, null, a), e = vy(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function Sy(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), Ad(
        e.return,
        t,
        a
      );
    }
    function Kd(e, t, a, i, o, f) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o,
        treeForkCount: f
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = i, d.tail = a, d.tailMode = o, d.treeForkCount = f);
    }
    function by(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail, d = i.children, h = Cl.current;
      if ((i = (h & kp) !== 0) ? (h = h & im | kp, t.flags |= 128) : h &= im, Ge(Cl, h, t), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !Lb[h])
        if (Lb[h] = !0, o == null)
          console.error(
            'The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".'
          );
        else if (o === "backwards")
          console.error(
            'The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.'
          );
        else if (typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
            case "independent":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
            o
          );
      h = f ?? "null", yv[h] || (f == null ? (o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && (yv[h] = !0, console.error(
        'The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".'
      )) : f !== "visible" && f !== "collapsed" && f !== "hidden" ? (yv[h] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && o !== "unstable_legacy-backwards" && (yv[h] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && d !== void 0 && d !== null && d !== !1)
        if (El(d)) {
          for (h = 0; h < d.length; h++)
            if (!Yt(
              d[h],
              h
            ))
              break e;
        } else if (h = Me(d), typeof h == "function") {
          if (h = h.call(d))
            for (var y = h.next(), p = 0; !y.done; y = h.next()) {
              if (!Yt(y.value, p)) break e;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (Yl(e, t, d, a), ot ? (wi(), d = jp) : d = 0, !i && e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Sy(e, a, t);
          else if (e.tag === 19)
            Sy(e, a, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      switch (o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && Gc(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), Kd(
            t,
            !1,
            o,
            a,
            f,
            d
          );
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && Gc(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          Kd(
            t,
            !0,
            a,
            null,
            f,
            d
          );
          break;
        case "together":
          Kd(
            t,
            !1,
            null,
            null,
            void 0,
            d
          );
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Zn(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), fn = -1, ts |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (wn(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = yu(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = yu(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function $d(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ko(e)));
    }
    function K0(e, t, a) {
      switch (t.tag) {
        case 3:
          qt(
            t,
            t.stateNode.containerInfo
          ), vn(
            t,
            Ll,
            e.memoizedState.cache
          ), Gi();
          break;
        case 27:
        case 5:
          ae(t);
          break;
        case 4:
          qt(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          vn(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (a & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 31:
          if (t.memoizedState !== null)
            return t.flags |= 128, Qn(t), null;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (pa(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Zd(
              e,
              t,
              a
            ) : (pa(t), e = Zn(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          pa(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (wn(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return by(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ge(
            Cl,
            Cl.current,
            t
          ), i) break;
          return null;
        case 22:
          return t.lanes = 0, dy(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          vn(
            t,
            Ll,
            e.memoizedState.cache
          );
      }
      return Zn(e, t, a);
    }
    function Fs(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = Hc(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          Vl = !0;
        else {
          if (!$d(e, a) && (t.flags & 128) === 0)
            return Vl = !1, K0(
              e,
              t,
              a
            );
          Vl = (e.flags & 131072) !== 0;
        }
      else
        Vl = !1, (i = ot) && (wi(), i = (t.flags & 1048576) !== 0), i && (i = t.index, wi(), Zm(t, jp, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = $a(t.elementType), t.type = e, typeof e == "function")
            Xm(e) ? (i = Du(
              e,
              i
            ), t.tag = 1, t.type = e = qi(e), t = Ic(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, of(t, e), t.type = e = qi(e), t = yy(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === Hf) {
                t.tag = 11, t.type = e = Sd(e), t = Z0(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === Or) {
                t.tag = 14, t = sy(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === ia && (t = " Did you wrap a component in React.lazy() more than once?"), a = Ke(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + a + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return yy(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = Du(
            i,
            t.pendingProps
          ), Ic(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (qt(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, vu(e, t), bu(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, vn(t, Ll, i), i !== f.cache && li(
              t,
              [Ll],
              a,
              !0
            ), Fo(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = gy(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = da(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), Ds(o), t = gy(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else {
                switch (e = t.stateNode.containerInfo, e.nodeType) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                }
                for (Pt = an(e.firstChild), Ra = t, ot = !0, Kf = null, yc = !1, lu = null, Ju = !0, a = pb(
                  t,
                  null,
                  i,
                  a
                ), t.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
              }
            else {
              if (Gi(), i === o) {
                t = Zn(
                  e,
                  t,
                  a
                );
                break e;
              }
              Yl(
                e,
                t,
                i,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return ks(e, t), e === null ? (a = ep(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = a : ot || (a = t.type, e = t.pendingProps, i = Qt(
            nn.current
          ), i = dr(
            i
          ).createElement(a), i[Ft] = t, i[Da] = e, Wt(i, a, e), pe(i), t.stateNode = i) : t.memoizedState = ep(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return ae(t), e === null && ot && (i = Qt(nn.current), o = Z(), i = t.stateNode = vi(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), yc || (o = Na(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (jc(t, 0).serverProps = o)), Ra = t, Ju = !0, o = Pt, oc(t.type) ? (y1 = o, Pt = an(
            i.firstChild
          )) : Pt = o), Yl(
            e,
            t,
            t.pendingProps.children,
            a
          ), ks(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && ot && (f = Z(), i = ps(
            t.type,
            f.ancestorInfo
          ), o = Pt, (d = !o) || (d = Ag(
            o,
            t.type,
            t.pendingProps,
            Ju
          ), d !== null ? (t.stateNode = d, yc || (f = Na(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (jc(t, 0).serverProps = f)), Ra = t, Pt = an(
            d.firstChild
          ), Ju = !1, f = !0) : f = !1, d = !f), d && (i && na(t, o), gn(t))), ae(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, Af(o, f) ? i = null : d !== null && Af(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = ty(
            e,
            t,
            xs,
            null,
            null,
            a
          ), h0._currentValue = o), ks(e, t), Yl(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && ot && (a = t.pendingProps, e = Z(), i = e.ancestorInfo.current, a = i != null ? gs(
            a,
            i.tag,
            e.ancestorInfo.implicitRootScope
          ) : !0, e = Pt, (i = !e) || (i = Og(
            e,
            t.pendingProps,
            Ju
          ), i !== null ? (t.stateNode = i, Ra = t, Pt = null, i = !0) : i = !1, i = !i), i && (a && na(t, e), gn(t))), null;
        case 13:
          return Zd(e, t, a);
        case 4:
          return qt(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = Gr(
            t,
            null,
            i,
            a
          ) : Yl(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return Z0(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return Yl(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return Yl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, Yl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || Xb || (Xb = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), vn(t, i, f), Yl(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), Xi(t), o = St(o), i = NS(
            i,
            o,
            void 0
          ), t.flags |= 1, Yl(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return sy(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return ry(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return by(
            e,
            t,
            a
          );
        case 31:
          return J0(e, t, a);
        case 22:
          return dy(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          return Xi(t), i = St(Ll), e === null ? (o = ui(), o === null && (o = Xt, f = Od(), o.pooledCache = f, Bc(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, it(t), vn(t, Ll, o)) : ((e.lanes & a) !== 0 && (vu(e, t), bu(t, null, null, a), Fo()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), vn(t, Ll, i)) : (i = f.cache, vn(t, Ll, i), i !== o.cache && li(
            t,
            [Ll],
            a,
            !0
          ))), Yl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Ru(e) {
      e.flags |= 4;
    }
    function kd(e, t, a, i, o) {
      if ((t = (e.mode & XE) !== xe) && (t = !1), t) {
        if (e.flags |= 16777216, (o & 335544128) === o)
          if (e.stateNode.complete) e.flags |= 8192;
          else if (Yy()) e.flags |= 8192;
          else
            throw wr = fv, xS;
      } else e.flags &= -16777217;
    }
    function $0(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & Fu) !== Fr)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !ut(t))
        if (Yy()) e.flags |= 8192;
        else
          throw wr = fv, xS;
    }
    function sf(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Uo() : 536870912, e.lanes |= t, Zr |= t);
    }
    function rf(e, t) {
      if (!ot)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function Ct(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & Ie) !== xe) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & Ie) !== xe) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function Ey(e, t, a) {
      var i = t.pendingProps;
      switch (Td(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Ct(t), null;
        case 1:
          return Ct(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Yn(Ll, t), M(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (xc(t) ? (Li(), Ru(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, zs())), Ct(t), null;
        case 26:
          var o = t.type, f = t.memoizedState;
          return e === null ? (Ru(t), f !== null ? (Ct(t), $0(
            t,
            f
          )) : (Ct(t), kd(
            t,
            o,
            null,
            i,
            a
          ))) : f ? f !== e.memoizedState ? (Ru(t), Ct(t), $0(
            t,
            f
          )) : (Ct(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && Ru(t), Ct(t), kd(
            t,
            o,
            e,
            i,
            a
          )), null;
        case 27:
          if (be(t), a = Qt(nn.current), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Ru(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Ct(t), null;
            }
            e = Z(), xc(t) ? Jm(t) : (e = vi(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, Ru(t));
          }
          return Ct(t), null;
        case 5:
          if (be(t), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Ru(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Ct(t), null;
            }
            var d = Z();
            if (xc(t))
              Jm(t);
            else {
              switch (f = Qt(nn.current), ps(o, d.ancestorInfo), d = d.context, f = dr(f), d) {
                case vm:
                  f = f.createElementNS(
                    ke,
                    o
                  );
                  break;
                case xv:
                  f = f.createElementNS(
                    Qe,
                    o
                  );
                  break;
                default:
                  switch (o) {
                    case "svg":
                      f = f.createElementNS(
                        ke,
                        o
                      );
                      break;
                    case "math":
                      f = f.createElementNS(
                        Qe,
                        o
                      );
                      break;
                    case "script":
                      f = f.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                        f.firstChild
                      );
                      break;
                    case "select":
                      f = typeof i.is == "string" ? f.createElement("select", {
                        is: i.is
                      }) : f.createElement("select"), i.multiple ? f.multiple = !0 : i.size && (f.size = i.size);
                      break;
                    default:
                      f = typeof i.is == "string" ? f.createElement(o, {
                        is: i.is
                      }) : f.createElement(o), o.indexOf("-") === -1 && (o !== o.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        o
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || un.call(d2, o) || (d2[o] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        o
                      )));
                  }
              }
              f[Ft] = t, f[Da] = i;
              e: for (d = t.child; d !== null; ) {
                if (d.tag === 5 || d.tag === 6)
                  f.appendChild(d.stateNode);
                else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                  d.child.return = d, d = d.child;
                  continue;
                }
                if (d === t) break e;
                for (; d.sibling === null; ) {
                  if (d.return === null || d.return === t)
                    break e;
                  d = d.return;
                }
                d.sibling.return = d.return, d = d.sibling;
              }
              t.stateNode = f;
              e: switch (Wt(f, o, i), o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
              i && Ru(t);
            }
          }
          return Ct(t), kd(
            t,
            t.type,
            e === null ? null : e.memoizedProps,
            t.pendingProps,
            a
          ), null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && Ru(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = Qt(nn.current), a = Z(), xc(t)) {
              if (e = t.stateNode, a = t.memoizedProps, o = !yc, i = null, f = Ra, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = Rg(
                      e,
                      a,
                      i
                    ), o !== null && (jc(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = Rg(
                      e,
                      a,
                      i
                    ), o !== null && (jc(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Ft] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || $y(e.nodeValue, a)), e || gn(t, !0);
            } else
              o = a.ancestorInfo.current, o != null && gs(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = dr(e).createTextNode(
                i
              ), e[Ft] = t, t.stateNode = e;
          }
          return Ct(t), null;
        case 31:
          if (a = t.memoizedState, e === null || e.memoizedState !== null) {
            if (i = xc(t), a !== null) {
              if (e === null) {
                if (!i)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                  throw Error(
                    "Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                e[Ft] = t, Ct(t), (t.mode & Ie) !== xe && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              } else
                Li(), Gi(), (t.flags & 128) === 0 && (a = t.memoizedState = null), t.flags |= 4, Ct(t), (t.mode & Ie) !== xe && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              e = !1;
            } else
              a = zs(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
            if (!e)
              return t.flags & 256 ? (Bl(t), t) : (Bl(t), null);
            if ((t.flags & 128) !== 0)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return Ct(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = i, f = xc(t), o !== null && o.dehydrated !== null) {
              if (e === null) {
                if (!f)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (f = t.memoizedState, f = f !== null ? f.dehydrated : null, !f)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                f[Ft] = t, Ct(t), (t.mode & Ie) !== xe && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Li(), Gi(), (t.flags & 128) === 0 && (o = t.memoizedState = null), t.flags |= 4, Ct(t), (t.mode & Ie) !== xe && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = zs(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (Bl(t), t) : (Bl(t), null);
          }
          return Bl(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & Ie) !== xe && Yc(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), sf(t, t.updateQueue), Ct(t), (t.mode & Ie) !== xe && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return M(t), e === null && ic(
            t.stateNode.containerInfo
          ), Ct(t), null;
        case 10:
          return Yn(t.type, t), Ct(t), null;
        case 19:
          if (Se(Cl, t), i = t.memoizedState, i === null) return Ct(t), null;
          if (o = (t.flags & 128) !== 0, f = i.rendering, f === null)
            if (o) rf(i, !1);
            else {
              if (rl !== Ro || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = Gc(e), f !== null) {
                    for (t.flags |= 128, rf(i, !1), e = f.updateQueue, t.updateQueue = e, sf(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Qm(a, e), a = a.sibling;
                    return Ge(
                      Cl,
                      Cl.current & im | kp,
                      t
                    ), ot && qn(t, i.treeForkCount), t.child;
                  }
                  e = e.sibling;
                }
              i.tail !== null && Gl() > Tv && (t.flags |= 128, o = !0, rf(i, !1), t.lanes = 4194304);
            }
          else {
            if (!o)
              if (e = Gc(f), e !== null) {
                if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, sf(t, e), rf(i, !0), i.tail === null && i.tailMode === "hidden" && !f.alternate && !ot)
                  return Ct(t), null;
              } else
                2 * Gl() - i.renderingStartTime > Tv && a !== 536870912 && (t.flags |= 128, o = !0, rf(i, !1), t.lanes = 4194304);
            i.isBackwards ? (f.sibling = t.child, t.child = f) : (e = i.last, e !== null ? e.sibling = f : t.child = f, i.last = f);
          }
          return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = Gl(), e.sibling = null, a = Cl.current, a = o ? a & im | kp : a & im, Ge(Cl, a, t), ot && qn(t, i.treeForkCount), e) : (Ct(t), null);
        case 22:
        case 23:
          return Bl(t), Xn(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Ct(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ct(t), a = t.updateQueue, a !== null && sf(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && Se(qr, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Yn(Ll, t), Ct(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function k0(e, t) {
      switch (Td(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Ie) !== xe && Yc(t), t) : null;
        case 3:
          return Yn(Ll, t), M(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return be(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (Bl(t), t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Gi();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Ie) !== xe && Yc(t), t) : null;
        case 13:
          if (Bl(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Gi();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Ie) !== xe && Yc(t), t) : null;
        case 19:
          return Se(Cl, t), null;
        case 4:
          return M(t), null;
        case 10:
          return Yn(t.type, t), null;
        case 22:
        case 23:
          return Bl(t), Xn(t), e !== null && Se(qr, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Ie) !== xe && Yc(t), t) : null;
        case 24:
          return Yn(Ll, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Ty(e, t) {
      switch (Td(t), t.tag) {
        case 3:
          Yn(Ll, t), M(t);
          break;
        case 26:
        case 27:
        case 5:
          be(t);
          break;
        case 4:
          M(t);
          break;
        case 31:
          t.memoizedState !== null && Bl(t);
          break;
        case 13:
          Bl(t);
          break;
        case 19:
          Se(Cl, t);
          break;
        case 10:
          Yn(t.type, t);
          break;
        case 22:
        case 23:
          Bl(t), Xn(t), e !== null && Se(qr, t);
          break;
        case 24:
          Yn(Ll, t);
      }
    }
    function _u(e) {
      return (e.mode & Ie) !== xe;
    }
    function W0(e, t) {
      _u(e) ? (cl(), hi(t, e), ma()) : hi(t, e);
    }
    function Wd(e, t, a) {
      _u(e) ? (cl(), ec(
        a,
        e,
        t
      ), ma()) : ec(
        a,
        e,
        t
      );
    }
    function hi(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && (i = void 0, (e & sn) !== rv && (ym = !0), i = se(
              t,
              $E,
              a
            ), (e & sn) !== rv && (ym = !1), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & nu) !== 0 ? "useLayoutEffect" : (a.tag & sn) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, se(
                t,
                function(h, y) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    y
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        $e(t, t.return, h);
      }
    }
    function ec(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & sn) !== rv && (ym = !0), o = t, se(
                o,
                kE,
                o,
                a,
                h
              ), (e & sn) !== rv && (ym = !1));
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (y) {
        $e(t, t.return, y);
      }
    }
    function Is(e, t) {
      _u(e) ? (cl(), hi(t, e), ma()) : hi(t, e);
    }
    function Fd(e, t, a) {
      _u(e) ? (cl(), ec(
        a,
        e,
        t
      ), ma()) : ec(
        a,
        e,
        t
      );
    }
    function Ay(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || sm || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          he(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          he(e) || "instance"
        ));
        try {
          se(
            e,
            Io,
            t,
            a
          );
        } catch (i) {
          $e(e, e.return, i);
        }
      }
    }
    function Ps(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function F0(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || sm || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        he(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        he(e) || "instance"
      ));
      try {
        var o = Du(
          e.type,
          a
        ), f = se(
          e,
          Ps,
          t,
          o,
          i
        );
        a = Qb, f !== void 0 || a.has(e.type) || (a.add(e.type), se(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            he(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        $e(e, e.return, d);
      }
    }
    function Id(e, t, a) {
      a.props = Du(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, _u(e) ? (cl(), se(
        e,
        ob,
        e,
        t,
        a
      ), ma()) : se(
        e,
        ob,
        e,
        t,
        a
      );
    }
    function I0(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (_u(e))
            try {
              cl(), e.refCleanup = t(a);
            } finally {
              ma();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            he(e)
          ), t.current = a;
      }
    }
    function Pc(e, t) {
      try {
        se(e, I0, e);
      } catch (a) {
        $e(e, t, a);
      }
    }
    function An(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (_u(e))
              try {
                cl(), se(e, i);
              } finally {
                ma(e);
              }
            else se(e, i);
          } catch (o) {
            $e(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (_u(e))
              try {
                cl(), se(e, a, null);
              } finally {
                ma(e);
              }
            else se(e, a, null);
          } catch (o) {
            $e(e, t, o);
          }
        else a.current = null;
    }
    function Oy(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", uv && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(f, t, i, a);
    }
    function P0(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", uv && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function tc(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        se(
          e,
          dg,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        $e(e, e.return, o);
      }
    }
    function Pd(e, t, a) {
      try {
        se(
          e,
          Sh,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        $e(e, e.return, i);
      }
    }
    function zy(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && oc(e.type) || e.tag === 4;
    }
    function eh(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || zy(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && oc(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function df(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (mg(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t)) : (mg(a), t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = yn));
      else if (i !== 4 && (i === 27 && oc(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (df(e, t, a), e = e.sibling; e !== null; )
          df(e, t, a), e = e.sibling;
    }
    function er(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && oc(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (er(e, t, a), e = e.sibling; e !== null; )
          er(e, t, a), e = e.sibling;
    }
    function Dy(e) {
      for (var t, a = e.return; a !== null; ) {
        if (zy(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = eh(e), er(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (bh(a), t.flags &= -33), t = eh(e), er(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = eh(e), df(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function Ry(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        se(
          e,
          Bu,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        $e(e, e.return, i);
      }
    }
    function _y(e, t) {
      return t.tag === 31 ? (t = t.memoizedState, e.memoizedState !== null && t === null) : t.tag === 13 ? (e = e.memoizedState, t = t.memoizedState, e !== null && e.dehydrated !== null && (t === null || t.dehydrated === null)) : t.tag === 3 ? e.memoizedState.isDehydrated && (t.flags & 256) === 0 : !1;
    }
    function lS(e, t) {
      if (e = e.containerInfo, d1 = wv, e = yd(e), xm(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, y = -1, p = 0, R = 0, C = e, E = null;
              t: for (; ; ) {
                for (var w; C !== a || o !== 0 && C.nodeType !== 3 || (h = d + o), C !== f || i !== 0 && C.nodeType !== 3 || (y = d + i), C.nodeType === 3 && (d += C.nodeValue.length), (w = C.firstChild) !== null; )
                  E = C, C = w;
                for (; ; ) {
                  if (C === e) break t;
                  if (E === a && ++p === o && (h = d), E === f && ++R === i && (y = d), (w = C.nextSibling) !== null) break;
                  C = E, E = C.parentNode;
                }
                C = w;
              }
              a = h === -1 || y === -1 ? null : { start: h, end: y };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (h1 = {
        focusedElem: e,
        selectionRange: a
      }, wv = !1, fa = t; fa !== null; )
        if (t = fa, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t, fa = e;
        else
          for (; fa !== null; ) {
            switch (e = t = fa, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                if ((o & 4) !== 0 && (e = e.updateQueue, e = e !== null ? e.events : null, e !== null))
                  for (a = 0; a < e.length; a++)
                    o = e[a], o.ref.impl = o.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && F0(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    zf(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        zf(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, fa = e;
              break;
            }
            fa = t.return;
          }
    }
    function th(e, t, a) {
      var i = $t(), o = Sn(), f = Ja(), d = bn(), h = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Pa(e, a), h & 4 && W0(a, nu | ku);
          break;
        case 1:
          if (Pa(e, a), h & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || sm || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                he(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                he(a) || "instance"
              )), _u(a) ? (cl(), se(
                a,
                jS,
                a,
                e
              ), ma()) : se(
                a,
                jS,
                a,
                e
              );
            else {
              var y = Du(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || sm || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                he(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                he(a) || "instance"
              )), _u(a) ? (cl(), se(
                a,
                ub,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), ma()) : se(
                a,
                ub,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          h & 64 && Ay(a), h & 512 && Pc(a, a.return);
          break;
        case 3:
          if (t = gu(), Pa(e, a), h & 64 && (h = a.updateQueue, h !== null)) {
            if (y = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  y = a.child.stateNode;
                  break;
                case 1:
                  y = a.child.stateNode;
              }
            try {
              se(
                a,
                Io,
                h,
                y
              );
            } catch (R) {
              $e(a, a.return, R);
            }
          }
          e.effectDuration += $o(t);
          break;
        case 27:
          t === null && h & 4 && Ry(a);
        case 26:
        case 5:
          if (Pa(e, a), t === null) {
            if (h & 4) tc(a);
            else if (h & 64) {
              e = a.type, t = a.memoizedProps, y = a.stateNode;
              try {
                se(
                  a,
                  hg,
                  y,
                  e,
                  t,
                  a
                );
              } catch (R) {
                $e(
                  a,
                  a.return,
                  R
                );
              }
            }
          }
          h & 512 && Pc(a, a.return);
          break;
        case 12:
          if (h & 4) {
            h = gu(), Pa(e, a), e = a.stateNode, e.effectDuration += ha(h);
            try {
              se(
                a,
                Oy,
                a,
                t,
                $f,
                e.effectDuration
              );
            } catch (R) {
              $e(a, a.return, R);
            }
          } else Pa(e, a);
          break;
        case 31:
          Pa(e, a), h & 4 && Cy(e, a);
          break;
        case 13:
          Pa(e, a), h & 4 && Uy(e, a), h & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (h = yi.bind(
            null,
            a
          ), zg(e, h))));
          break;
        case 22:
          if (h = a.memoizedState !== null || Do, !h) {
            t = t !== null && t.memoizedState !== null || Zl, y = Do;
            var p = Zl;
            Do = h, (Zl = t) && !p ? (Jn(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ), (a.mode & Ie) !== xe && 0 <= De && 0 <= Ue && 0.05 < Ue - De && pd(
              a,
              De,
              Ue
            )) : Pa(e, a), Do = y, Zl = p;
          }
          break;
        case 30:
          break;
        default:
          Pa(e, a);
      }
      (a.mode & Ie) !== xe && 0 <= De && 0 <= Ue && ((gl || 0.05 < sl) && Bn(
        a,
        De,
        Ue,
        sl,
        ul
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < Ue - De && (_y(
        a.return.alternate,
        a.return
      ) || pn(
        a,
        De,
        Ue,
        "Mount"
      ))), jl(i), Za(o), ul = f, gl = d;
    }
    function yl(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, yl(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && U(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function Zt(e, t, a) {
      for (a = a.child; a !== null; )
        My(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function My(e, t, a) {
      if (_l && typeof _l.onCommitFiberUnmount == "function")
        try {
          _l.onCommitFiberUnmount(ho, a);
        } catch (p) {
          Yu || (Yu = !0, console.error(
            "React instrumentation encountered an error: %o",
            p
          ));
        }
      var i = $t(), o = Sn(), f = Ja(), d = bn();
      switch (a.tag) {
        case 26:
          Zl || An(a, t), Zt(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (e = a.stateNode, e.parentNode.removeChild(e));
          break;
        case 27:
          Zl || An(a, t);
          var h = Jl, y = _n;
          oc(a.type) && (Jl = a.stateNode, _n = !1), Zt(
            e,
            t,
            a
          ), se(
            a,
            Si,
            a.stateNode
          ), Jl = h, _n = y;
          break;
        case 5:
          Zl || An(a, t);
        case 6:
          if (h = Jl, y = _n, Jl = null, Zt(
            e,
            t,
            a
          ), Jl = h, _n = y, Jl !== null)
            if (_n)
              try {
                se(
                  a,
                  pg,
                  Jl,
                  a.stateNode
                );
              } catch (p) {
                $e(
                  a,
                  t,
                  p
                );
              }
            else
              try {
                se(
                  a,
                  yg,
                  Jl,
                  a.stateNode
                );
              } catch (p) {
                $e(
                  a,
                  t,
                  p
                );
              }
          break;
        case 18:
          Jl !== null && (_n ? (e = Jl, no(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), oo(e)) : no(Jl, a.stateNode));
          break;
        case 4:
          h = Jl, y = _n, Jl = a.stateNode.containerInfo, _n = !0, Zt(
            e,
            t,
            a
          ), Jl = h, _n = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          ec(
            sn,
            a,
            t
          ), Zl || Wd(
            a,
            t,
            nu
          ), Zt(
            e,
            t,
            a
          );
          break;
        case 1:
          Zl || (An(a, t), h = a.stateNode, typeof h.componentWillUnmount == "function" && Id(
            a,
            t,
            h
          )), Zt(
            e,
            t,
            a
          );
          break;
        case 21:
          Zt(
            e,
            t,
            a
          );
          break;
        case 22:
          Zl = (h = Zl) || a.memoizedState !== null, Zt(
            e,
            t,
            a
          ), Zl = h;
          break;
        default:
          Zt(
            e,
            t,
            a
          );
      }
      (a.mode & Ie) !== xe && 0 <= De && 0 <= Ue && (gl || 0.05 < sl) && Bn(
        a,
        De,
        Ue,
        sl,
        ul
      ), jl(i), Za(o), ul = f, gl = d;
    }
    function Cy(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
          se(
            t,
            Eh,
            e
          );
        } catch (a) {
          $e(t, t.return, a);
        }
      }
    }
    function Uy(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          se(
            t,
            Iy,
            e
          );
        } catch (a) {
          $e(t, t.return, a);
        }
    }
    function eg(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new Vb()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Vb()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function lc(e, t) {
      var a = eg(e);
      t.forEach(function(i) {
        if (!a.has(i)) {
          if (a.add(i), wu)
            if (rm !== null && dm !== null)
              vf(dm, rm);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          var o = lo.bind(null, e, i);
          i.then(o, o);
        }
      });
    }
    function Sa(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = $t(), y = f;
          e: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if (oc(y.type)) {
                  Jl = y.stateNode, _n = !1;
                  break e;
                }
                break;
              case 5:
                Jl = y.stateNode, _n = !1;
                break e;
              case 3:
              case 4:
                Jl = y.stateNode.containerInfo, _n = !0;
                break e;
            }
            y = y.return;
          }
          if (Jl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          My(o, f, d), Jl = null, _n = !1, (d.mode & Ie) !== xe && 0 <= De && 0 <= Ue && 0.05 < Ue - De && pn(
            d,
            De,
            Ue,
            "Unmount"
          ), jl(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; )
          tr(t, e), t = t.sibling;
    }
    function tr(e, t) {
      var a = $t(), i = Sn(), o = Ja(), f = bn(), d = e.alternate, h = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Sa(t, e), ba(e), h & 4 && (ec(
            sn | ku,
            e,
            e.return
          ), hi(sn | ku, e), Wd(
            e,
            e.return,
            nu | ku
          ));
          break;
        case 1:
          if (Sa(t, e), ba(e), h & 512 && (Zl || d === null || An(d, d.return)), h & 64 && Do && (h = e.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = zi, Sa(t, e), ba(e), h & 512 && (Zl || d === null || An(d, d.return)), h & 4) {
            var p = d !== null ? d.memoizedState : null;
            if (h = e.memoizedState, d === null)
              if (h === null)
                if (e.stateNode === null) {
                  e: {
                    h = e.type, d = e.memoizedProps, y = y.ownerDocument || y;
                    t: switch (h) {
                      case "title":
                        p = y.getElementsByTagName(
                          "title"
                        )[0], (!p || p[Gf] || p[Ft] || p.namespaceURI === ke || p.hasAttribute("itemprop")) && (p = y.createElement(h), y.head.insertBefore(
                          p,
                          y.querySelector(
                            "head > title"
                          )
                        )), Wt(p, h, d), p[Ft] = e, pe(p), h = p;
                        break e;
                      case "link":
                        var R = _f(
                          "link",
                          "href",
                          y
                        ).get(h + (d.href || ""));
                        if (R) {
                          for (var C = 0; C < R.length; C++)
                            if (p = R[C], p.getAttribute("href") === (d.href == null || d.href === "" ? null : d.href) && p.getAttribute("rel") === (d.rel == null ? null : d.rel) && p.getAttribute("title") === (d.title == null ? null : d.title) && p.getAttribute("crossorigin") === (d.crossOrigin == null ? null : d.crossOrigin)) {
                              R.splice(C, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), Wt(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      case "meta":
                        if (R = _f(
                          "meta",
                          "content",
                          y
                        ).get(h + (d.content || ""))) {
                          for (C = 0; C < R.length; C++)
                            if (p = R[C], pt(
                              d.content,
                              "content"
                            ), p.getAttribute("content") === (d.content == null ? null : "" + d.content) && p.getAttribute("name") === (d.name == null ? null : d.name) && p.getAttribute("property") === (d.property == null ? null : d.property) && p.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && p.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              R.splice(C, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), Wt(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + h + '". This is a bug in React.'
                        );
                    }
                    p[Ft] = e, pe(p), h = p;
                  }
                  e.stateNode = h;
                } else
                  Mg(
                    y,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = Oh(
                  y,
                  h,
                  e.memoizedProps
                );
            else
              p !== h ? (p === null ? d.stateNode !== null && (d = d.stateNode, d.parentNode.removeChild(d)) : p.count--, h === null ? Mg(
                y,
                e.type,
                e.stateNode
              ) : Oh(
                y,
                h,
                e.memoizedProps
              )) : h === null && e.stateNode !== null && Pd(
                e,
                e.memoizedProps,
                d.memoizedProps
              );
          }
          break;
        case 27:
          Sa(t, e), ba(e), h & 512 && (Zl || d === null || An(d, d.return)), d !== null && h & 4 && Pd(
            e,
            e.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (Sa(t, e), ba(e), h & 512 && (Zl || d === null || An(d, d.return)), e.flags & 32) {
            y = e.stateNode;
            try {
              se(
                e,
                bh,
                y
              );
            } catch (re) {
              $e(e, e.return, re);
            }
          }
          h & 4 && e.stateNode != null && (y = e.memoizedProps, Pd(
            e,
            y,
            d !== null ? d.memoizedProps : y
          )), h & 1024 && (KS = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (Sa(t, e), ba(e), h & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            h = e.memoizedProps, d = d !== null ? d.memoizedProps : h, y = e.stateNode;
            try {
              se(
                e,
                aS,
                y,
                d,
                h
              );
            } catch (re) {
              $e(e, e.return, re);
            }
          }
          break;
        case 3:
          if (y = gu(), Bv = null, p = zi, zi = Th(t.containerInfo), Sa(t, e), zi = p, ba(e), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              se(
                e,
                Fy,
                t.containerInfo
              );
            } catch (re) {
              $e(e, e.return, re);
            }
          KS && (KS = !1, tg(e)), t.effectDuration += $o(
            y
          );
          break;
        case 4:
          h = zi, zi = Th(
            e.stateNode.containerInfo
          ), Sa(t, e), ba(e), zi = h;
          break;
        case 12:
          h = gu(), Sa(t, e), ba(e), e.stateNode.effectDuration += ha(h);
          break;
        case 31:
          Sa(t, e), ba(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, lc(e, h)));
          break;
        case 13:
          Sa(t, e), ba(e), e.child.flags & 8192 && e.memoizedState !== null != (d !== null && d.memoizedState !== null) && (Ev = Gl()), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, lc(e, h)));
          break;
        case 22:
          y = e.memoizedState !== null;
          var E = d !== null && d.memoizedState !== null, w = Do, ce = Zl;
          if (Do = w || y, Zl = ce || E, Sa(t, e), Zl = ce, Do = w, E && !y && !w && !ce && (e.mode & Ie) !== xe && 0 <= De && 0 <= Ue && 0.05 < Ue - De && pd(
            e,
            De,
            Ue
          ), ba(e), h & 8192)
            e: for (t = e.stateNode, t._visibility = y ? t._visibility & ~Np : t._visibility | Np, !y || d === null || E || Do || Zl || (ac(e), (e.mode & Ie) !== xe && 0 <= De && 0 <= Ue && 0.05 < Ue - De && pn(
              e,
              De,
              Ue,
              "Disconnect"
            )), d = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (d === null) {
                  E = d = t;
                  try {
                    p = E.stateNode, y ? se(
                      E,
                      vg,
                      p
                    ) : se(
                      E,
                      Eg,
                      E.stateNode,
                      E.memoizedProps
                    );
                  } catch (re) {
                    $e(E, E.return, re);
                  }
                }
              } else if (t.tag === 6) {
                if (d === null) {
                  E = t;
                  try {
                    R = E.stateNode, y ? se(
                      E,
                      Sg,
                      R
                    ) : se(
                      E,
                      Tg,
                      R,
                      E.memoizedProps
                    );
                  } catch (re) {
                    $e(E, E.return, re);
                  }
                }
              } else if (t.tag === 18) {
                if (d === null) {
                  E = t;
                  try {
                    C = E.stateNode, y ? se(
                      E,
                      gg,
                      C
                    ) : se(
                      E,
                      bg,
                      E.stateNode
                    );
                  } catch (re) {
                    $e(E, E.return, re);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                d === t && (d = null), t = t.return;
              }
              d === t && (d = null), t.sibling.return = t.return, t = t.sibling;
            }
          h & 4 && (h = e.updateQueue, h !== null && (d = h.retryQueue, d !== null && (h.retryQueue = null, lc(e, d))));
          break;
        case 19:
          Sa(t, e), ba(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, lc(e, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Sa(t, e), ba(e);
      }
      (e.mode & Ie) !== xe && 0 <= De && 0 <= Ue && ((gl || 0.05 < sl) && Bn(
        e,
        De,
        Ue,
        sl,
        ul
      ), e.alternate === null && e.return !== null && e.return.alternate !== null && 0.05 < Ue - De && (_y(
        e.return.alternate,
        e.return
      ) || pn(
        e,
        De,
        Ue,
        "Mount"
      ))), jl(a), Za(i), ul = o, gl = f;
    }
    function ba(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          se(e, Dy, e);
        } catch (a) {
          $e(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function tg(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          tg(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function Pa(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          th(e, t.alternate, t), t = t.sibling;
    }
    function lh(e) {
      var t = $t(), a = Sn(), i = Ja(), o = bn();
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Wd(
            e,
            e.return,
            nu
          ), ac(e);
          break;
        case 1:
          An(e, e.return);
          var f = e.stateNode;
          typeof f.componentWillUnmount == "function" && Id(
            e,
            e.return,
            f
          ), ac(e);
          break;
        case 27:
          se(
            e,
            Si,
            e.stateNode
          );
        case 26:
        case 5:
          An(e, e.return), ac(e);
          break;
        case 22:
          e.memoizedState === null && ac(e);
          break;
        case 30:
          ac(e);
          break;
        default:
          ac(e);
      }
      (e.mode & Ie) !== xe && 0 <= De && 0 <= Ue && (gl || 0.05 < sl) && Bn(
        e,
        De,
        Ue,
        sl,
        ul
      ), jl(t), Za(a), ul = i, gl = o;
    }
    function ac(e) {
      for (e = e.child; e !== null; )
        lh(e), e = e.sibling;
    }
    function Hy(e, t, a, i) {
      var o = $t(), f = Sn(), d = Ja(), h = bn(), y = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Jn(
            e,
            a,
            i
          ), W0(a, nu);
          break;
        case 1:
          if (Jn(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && se(
            a,
            jS,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              se(
                a,
                Pm,
                t,
                e
              );
            } catch (p) {
              $e(a, a.return, p);
            }
          }
          i && y & 64 && Ay(a), Pc(a, a.return);
          break;
        case 27:
          Ry(a);
        case 26:
        case 5:
          Jn(
            e,
            a,
            i
          ), i && t === null && y & 4 && tc(a), Pc(a, a.return);
          break;
        case 12:
          if (i && y & 4) {
            y = gu(), Jn(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += ha(y);
            try {
              se(
                a,
                Oy,
                a,
                t,
                $f,
                i.effectDuration
              );
            } catch (p) {
              $e(a, a.return, p);
            }
          } else
            Jn(
              e,
              a,
              i
            );
          break;
        case 31:
          Jn(
            e,
            a,
            i
          ), i && y & 4 && Cy(e, a);
          break;
        case 13:
          Jn(
            e,
            a,
            i
          ), i && y & 4 && Uy(e, a);
          break;
        case 22:
          a.memoizedState === null && Jn(
            e,
            a,
            i
          ), Pc(a, a.return);
          break;
        case 30:
          break;
        default:
          Jn(
            e,
            a,
            i
          );
      }
      (a.mode & Ie) !== xe && 0 <= De && 0 <= Ue && (gl || 0.05 < sl) && Bn(
        a,
        De,
        Ue,
        sl,
        ul
      ), jl(o), Za(f), ul = d, gl = h;
    }
    function Jn(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        Hy(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function lr(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && Bc(e), a != null && _s(a));
    }
    function ar(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Bc(t), e != null && _s(e));
    }
    function en(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (t = t.child; t !== null; ) {
          var f = t.sibling;
          Ny(
            e,
            t,
            a,
            i,
            f !== null ? f.actualStartTime : o
          ), t = f;
        }
    }
    function Ny(e, t, a, i, o) {
      var f = $t(), d = Sn(), h = Ja(), y = bn(), p = Vf, R = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (t.mode & Ie) !== xe && 0 < t.actualStartTime && (t.flags & 1) !== 0 && gd(
            t,
            t.actualStartTime,
            o,
            Il,
            a
          ), en(
            e,
            t,
            a,
            i,
            o
          ), R & 2048 && Is(t, rn | ku);
          break;
        case 1:
          (t.mode & Ie) !== xe && 0 < t.actualStartTime && ((t.flags & 128) !== 0 ? qm(
            t,
            t.actualStartTime,
            o,
            []
          ) : (t.flags & 1) !== 0 && gd(
            t,
            t.actualStartTime,
            o,
            Il,
            a
          )), en(
            e,
            t,
            a,
            i,
            o
          );
          break;
        case 3:
          var C = gu(), E = Il;
          Il = t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) === 0, en(
            e,
            t,
            a,
            i,
            o
          ), Il = E, R & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), i = t.memoizedState.cache, i !== a && (Bc(i), a != null && _s(a))), e.passiveEffectDuration += $o(
            C
          );
          break;
        case 12:
          if (R & 2048) {
            R = gu(), en(
              e,
              t,
              a,
              i,
              o
            ), e = t.stateNode, e.passiveEffectDuration += ha(R);
            try {
              se(
                t,
                P0,
                t,
                t.alternate,
                $f,
                e.passiveEffectDuration
              );
            } catch (w) {
              $e(t, t.return, w);
            }
          } else
            en(
              e,
              t,
              a,
              i,
              o
            );
          break;
        case 31:
          R = Il, C = t.alternate !== null ? t.alternate.memoizedState : null, E = t.memoizedState, C !== null && E === null ? (E = t.deletions, E !== null && 0 < E.length && E[0].tag === 18 ? (Il = !1, C = C.hydrationErrors, C !== null && qm(
            t,
            t.actualStartTime,
            o,
            C
          )) : Il = !0) : Il = !1, en(
            e,
            t,
            a,
            i,
            o
          ), Il = R;
          break;
        case 13:
          R = Il, C = t.alternate !== null ? t.alternate.memoizedState : null, E = t.memoizedState, C === null || C.dehydrated === null || E !== null && E.dehydrated !== null ? Il = !1 : (E = t.deletions, E !== null && 0 < E.length && E[0].tag === 18 ? (Il = !1, C = C.hydrationErrors, C !== null && qm(
            t,
            t.actualStartTime,
            o,
            C
          )) : Il = !0), en(
            e,
            t,
            a,
            i,
            o
          ), Il = R;
          break;
        case 23:
          break;
        case 22:
          E = t.stateNode, C = t.alternate, t.memoizedState !== null ? E._visibility & po ? en(
            e,
            t,
            a,
            i,
            o
          ) : eo(
            e,
            t,
            a,
            i,
            o
          ) : E._visibility & po ? en(
            e,
            t,
            a,
            i,
            o
          ) : (E._visibility |= po, nc(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child),
            o
          ), (t.mode & Ie) === xe || Il || (e = t.actualStartTime, 0 <= e && 0.05 < o - e && pd(t, e, o), 0 <= De && 0 <= Ue && 0.05 < Ue - De && pd(
            t,
            De,
            Ue
          ))), R & 2048 && lr(
            C,
            t
          );
          break;
        case 24:
          en(
            e,
            t,
            a,
            i,
            o
          ), R & 2048 && ar(t.alternate, t);
          break;
        default:
          en(
            e,
            t,
            a,
            i,
            o
          );
      }
      (t.mode & Ie) !== xe && ((e = !Il && t.alternate === null && t.return !== null && t.return.alternate !== null) && (a = t.actualStartTime, 0 <= a && 0.05 < o - a && pn(
        t,
        a,
        o,
        "Mount"
      )), 0 <= De && 0 <= Ue && ((gl || 0.05 < sl) && Bn(
        t,
        De,
        Ue,
        sl,
        ul
      ), e && 0.05 < Ue - De && pn(
        t,
        De,
        Ue,
        "Mount"
      ))), jl(f), Za(d), ul = h, gl = y, Vf = p;
    }
    function nc(e, t, a, i, o, f) {
      for (o = o && ((t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)), t = t.child; t !== null; ) {
        var d = t.sibling;
        nr(
          e,
          t,
          a,
          i,
          o,
          d !== null ? d.actualStartTime : f
        ), t = d;
      }
    }
    function nr(e, t, a, i, o, f) {
      var d = $t(), h = Sn(), y = Ja(), p = bn(), R = Vf;
      o && (t.mode & Ie) !== xe && 0 < t.actualStartTime && (t.flags & 1) !== 0 && gd(
        t,
        t.actualStartTime,
        f,
        Il,
        a
      );
      var C = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          nc(
            e,
            t,
            a,
            i,
            o,
            f
          ), Is(t, rn);
          break;
        case 23:
          break;
        case 22:
          var E = t.stateNode;
          t.memoizedState !== null ? E._visibility & po ? nc(
            e,
            t,
            a,
            i,
            o,
            f
          ) : eo(
            e,
            t,
            a,
            i,
            f
          ) : (E._visibility |= po, nc(
            e,
            t,
            a,
            i,
            o,
            f
          )), o && C & 2048 && lr(
            t.alternate,
            t
          );
          break;
        case 24:
          nc(
            e,
            t,
            a,
            i,
            o,
            f
          ), o && C & 2048 && ar(t.alternate, t);
          break;
        default:
          nc(
            e,
            t,
            a,
            i,
            o,
            f
          );
      }
      (t.mode & Ie) !== xe && 0 <= De && 0 <= Ue && (gl || 0.05 < sl) && Bn(
        t,
        De,
        Ue,
        sl,
        ul
      ), jl(d), Za(h), ul = y, gl = p, Vf = R;
    }
    function eo(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (var f = t.child; f !== null; ) {
          t = f.sibling;
          var d = e, h = a, y = i, p = t !== null ? t.actualStartTime : o, R = Vf;
          (f.mode & Ie) !== xe && 0 < f.actualStartTime && (f.flags & 1) !== 0 && gd(
            f,
            f.actualStartTime,
            p,
            Il,
            h
          );
          var C = f.flags;
          switch (f.tag) {
            case 22:
              eo(
                d,
                f,
                h,
                y,
                p
              ), C & 2048 && lr(f.alternate, f);
              break;
            case 24:
              eo(
                d,
                f,
                h,
                y,
                p
              ), C & 2048 && ar(f.alternate, f);
              break;
            default:
              eo(
                d,
                f,
                h,
                y,
                p
              );
          }
          Vf = R, f = t;
        }
    }
    function to(e, t, a) {
      if (e.subtreeFlags & Pp)
        for (e = e.child; e !== null; )
          ah(
            e,
            t,
            a
          ), e = e.sibling;
    }
    function ah(e, t, a) {
      switch (e.tag) {
        case 26:
          to(
            e,
            t,
            a
          ), e.flags & Pp && e.memoizedState !== null && ap(
            a,
            zi,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          to(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          var i = zi;
          zi = Th(
            e.stateNode.containerInfo
          ), to(
            e,
            t,
            a
          ), zi = i;
          break;
        case 22:
          e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = Pp, Pp = 16777216, to(
            e,
            t,
            a
          ), Pp = i) : to(
            e,
            t,
            a
          ));
          break;
        default:
          to(
            e,
            t,
            a
          );
      }
    }
    function jy(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function tn(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = $t();
            fa = i, Mu(
              i,
              e
            ), (i.mode & Ie) !== xe && 0 <= De && 0 <= Ue && 0.05 < Ue - De && pn(
              i,
              De,
              Ue,
              "Unmount"
            ), jl(o);
          }
        jy(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          nh(e), e = e.sibling;
    }
    function nh(e) {
      var t = $t(), a = Sn(), i = Ja(), o = bn();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          tn(e), e.flags & 2048 && Fd(
            e,
            e.return,
            rn | ku
          );
          break;
        case 3:
          var f = gu();
          tn(e), e.stateNode.passiveEffectDuration += $o(f);
          break;
        case 12:
          f = gu(), tn(e), e.stateNode.passiveEffectDuration += ha(f);
          break;
        case 22:
          f = e.stateNode, e.memoizedState !== null && f._visibility & po && (e.return === null || e.return.tag !== 13) ? (f._visibility &= ~po, uh(e), (e.mode & Ie) !== xe && 0 <= De && 0 <= Ue && 0.05 < Ue - De && pn(
            e,
            De,
            Ue,
            "Disconnect"
          )) : tn(e);
          break;
        default:
          tn(e);
      }
      (e.mode & Ie) !== xe && 0 <= De && 0 <= Ue && (gl || 0.05 < sl) && Bn(
        e,
        De,
        Ue,
        sl,
        ul
      ), jl(t), Za(a), gl = o, ul = i;
    }
    function uh(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = $t();
            fa = i, Mu(
              i,
              e
            ), (i.mode & Ie) !== xe && 0 <= De && 0 <= Ue && 0.05 < Ue - De && pn(
              i,
              De,
              Ue,
              "Unmount"
            ), jl(o);
          }
        jy(e);
      }
      for (e = e.child; e !== null; )
        xy(e), e = e.sibling;
    }
    function xy(e) {
      var t = $t(), a = Sn(), i = Ja(), o = bn();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Fd(
            e,
            e.return,
            rn
          ), uh(e);
          break;
        case 22:
          var f = e.stateNode;
          f._visibility & po && (f._visibility &= ~po, uh(e));
          break;
        default:
          uh(e);
      }
      (e.mode & Ie) !== xe && 0 <= De && 0 <= Ue && (gl || 0.05 < sl) && Bn(
        e,
        De,
        Ue,
        sl,
        ul
      ), jl(t), Za(a), gl = o, ul = i;
    }
    function Mu(e, t) {
      for (; fa !== null; ) {
        var a = fa, i = a, o = t, f = $t(), d = Sn(), h = Ja(), y = bn();
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Fd(
              i,
              o,
              rn
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool, o != null && Bc(o));
            break;
          case 24:
            _s(i.memoizedState.cache);
        }
        if ((i.mode & Ie) !== xe && 0 <= De && 0 <= Ue && (gl || 0.05 < sl) && Bn(
          i,
          De,
          Ue,
          sl,
          ul
        ), jl(f), Za(d), gl = y, ul = h, i = a.child, i !== null) i.return = a, fa = i;
        else
          e: for (a = e; fa !== null; ) {
            if (i = fa, f = i.sibling, d = i.return, yl(i), i === a) {
              fa = null;
              break e;
            }
            if (f !== null) {
              f.return = d, fa = f;
              break e;
            }
            fa = d;
          }
      }
    }
    function By() {
      eT.forEach(function(e) {
        return e();
      });
    }
    function qy() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || X.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function ua(e) {
      if ((mt & Pl) !== sa && et !== 0)
        return et & -et;
      var t = X.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), Ky()) : Ui();
    }
    function hf() {
      if (Cn === 0)
        if ((et & 536870912) === 0 || ot) {
          var e = Rr;
          Rr <<= 1, (Rr & 3932160) === 0 && (Rr = 262144), Cn = e;
        } else Cn = 536870912;
      return e = au.current, e !== null && (e.flags |= 32), Cn;
    }
    function Be(e, t, a) {
      if (ym && console.error("useInsertionEffect must not schedule updates."), n1 && (zv = !0), (e === Xt && (jt === Qr || jt === Vr) || e.cancelPendingCommit !== null) && (Cu(e, 0), On(
        e,
        et,
        Cn,
        !1
      )), Un(e, a), (mt & Pl) !== sa && e === Xt) {
        if (qu)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = at && he(at) || "Unknown", u2.has(e) || (u2.add(e), t = he(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              n2 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), n2 = !0);
          }
      } else
        wu && Ol(e, t, a), or(t), e === Xt && ((mt & Pl) === sa && (ls |= a), rl === Pf && On(
          e,
          et,
          Cn,
          !1
        )), Ua(e);
    }
    function lg(e, t, a) {
      if ((mt & (Pl | uu)) !== sa)
        throw Error("Should not already be working.");
      if (et !== 0 && at !== null) {
        var i = at, o = Gl();
        switch (F1) {
          case l0:
          case Qr:
            var f = wp;
            It && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Suspended",
                f,
                o,
                Lu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Suspended",
              f,
              o,
              Lu,
              void 0,
              "primary-light"
            ));
            break;
          case Vr:
            f = wp, It && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Action",
                f,
                o,
                Lu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Action",
              f,
              o,
              Lu,
              void 0,
              "primary-light"
            ));
            break;
          default:
            It && (i = o - wp, 3 > i || console.timeStamp(
              "Blocked",
              wp,
              o,
              Lu,
              void 0,
              5 > i ? "primary-light" : 10 > i ? "primary" : 100 > i ? "primary-dark" : "error"
            ));
        }
      }
      f = (a = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || vl(e, t)) ? mi(e, t) : pf(e, t, !0);
      var d = a;
      do {
        if (f === Ro) {
          hm && !a && On(e, t, 0, !1), t = jt, wp = Xl(), F1 = t;
          break;
        } else {
          if (i = Gl(), o = e.current.alternate, d && !ng(o)) {
            xn(t), o = oa, f = i, !It || f <= o || (Tl ? Tl.run(
              console.timeStamp.bind(
                console,
                "Teared Render",
                o,
                f,
                dt,
                ft,
                "error"
              )
            ) : console.timeStamp(
              "Teared Render",
              o,
              f,
              dt,
              ft,
              "error"
            )), uc(t, i), f = pf(e, t, !1), d = !1;
            continue;
          }
          if (f === Xr) {
            if (d = t, e.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = e.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              xn(t), Ym(
                oa,
                i,
                t,
                Tl
              ), uc(t, i), t = h;
              e: {
                i = e, f = d, d = n0;
                var y = i.current.memoizedState.isDehydrated;
                if (y && (Cu(i, h).flags |= 256), h = pf(
                  i,
                  h,
                  !1
                ), h !== Xr) {
                  if (WS && !y) {
                    i.errorRecoveryDisabledLanes |= f, ls |= f, f = Pf;
                    break e;
                  }
                  i = dn, dn = d, i !== null && (dn === null ? dn = i : dn.push.apply(
                    dn,
                    i
                  ));
                }
                f = h;
              }
              if (d = !1, f !== Xr) continue;
              i = Gl();
            }
          }
          if (f === t0) {
            xn(t), Ym(
              oa,
              i,
              t,
              Tl
            ), uc(t, i), Cu(e, 0), On(e, t, 0, !0);
            break;
          }
          e: {
            switch (a = e, f) {
              case Ro:
              case t0:
                throw Error("Root did not complete. This is a bug in React.");
              case Pf:
                if ((t & 4194048) !== t) break;
              case gv:
                xn(t), H0(
                  oa,
                  i,
                  t,
                  Tl
                ), uc(t, i), o = t, (o & 127) !== 0 ? lv = i : (o & 4194048) !== 0 && (av = i), On(
                  a,
                  t,
                  Cn,
                  !es
                );
                break e;
              case Xr:
                dn = null;
                break;
              case pv:
              case Zb:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (X.actQueue !== null)
              wt(
                a,
                o,
                t,
                dn,
                u0,
                bv,
                Cn,
                ls,
                Zr,
                f,
                null,
                null,
                oa,
                i
              );
            else {
              if ((t & 62914560) === t && (d = Ev + $b - Gl(), 10 < d)) {
                if (On(
                  a,
                  t,
                  Cn,
                  !es
                ), bc(a, 0, !0) !== 0) break e;
                Di = t, a.timeoutHandle = h2(
                  ag.bind(
                    null,
                    a,
                    o,
                    dn,
                    u0,
                    bv,
                    t,
                    Cn,
                    ls,
                    Zr,
                    es,
                    f,
                    "Throttled",
                    oa,
                    i
                  ),
                  d
                );
                break e;
              }
              ag(
                a,
                o,
                dn,
                u0,
                bv,
                t,
                Cn,
                ls,
                Zr,
                es,
                f,
                null,
                oa,
                i
              );
            }
          }
        }
        break;
      } while (!0);
      Ua(e);
    }
    function ag(e, t, a, i, o, f, d, h, y, p, R, C, E, w) {
      e.timeoutHandle = Wr;
      var ce = t.subtreeFlags, re = null;
      if ((ce & 8192 || (ce & 16785408) === 16785408) && (re = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: yn
      }, ah(t, f, re), ce = (f & 62914560) === f ? Ev - Gl() : (f & 4194048) === f ? Kb - Gl() : 0, ce = zh(re, ce), ce !== null)) {
        Di = f, e.cancelPendingCommit = ce(
          wt.bind(
            null,
            e,
            t,
            f,
            a,
            i,
            o,
            d,
            h,
            y,
            R,
            re,
            re.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < re.count ? 0 < re.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : re.imgCount === 1 ? "Suspended on an Image" : 0 < re.imgCount ? "Suspended on Images" : null,
            E,
            w
          )
        ), On(
          e,
          f,
          d,
          !p
        );
        return;
      }
      wt(
        e,
        t,
        f,
        a,
        i,
        o,
        d,
        h,
        y,
        R,
        re,
        C,
        E,
        w
      );
    }
    function ng(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!on(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function On(e, t, a, i) {
      t &= ~FS, t &= ~ls, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - Wl(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && No(e, a, t);
    }
    function ln() {
      return (mt & (Pl | uu)) === sa ? (Hu(0), !1) : !0;
    }
    function ih() {
      if (at !== null) {
        if (jt === Mn)
          var e = at.return;
        else
          e = at, Jo(), Vi(e), nm = null, $p = 0, e = at;
        for (; e !== null; )
          Ty(e.alternate, e), e = e.return;
        at = null;
      }
    }
    function uc(e, t) {
      (e & 127) !== 0 && (Nr = t), (e & 4194048) !== 0 && (Eo = t), (e & 62914560) !== 0 && (k1 = t), (e & 2080374784) !== 0 && (W1 = t);
    }
    function Cu(e, t) {
      It && (console.timeStamp(
        "Blocking Track",
        3e-3,
        3e-3,
        "Blocking",
        ft,
        "primary-light"
      ), console.timeStamp(
        "Transition Track",
        3e-3,
        3e-3,
        "Transition",
        ft,
        "primary-light"
      ), console.timeStamp(
        "Suspense Track",
        3e-3,
        3e-3,
        "Suspense",
        ft,
        "primary-light"
      ), console.timeStamp(
        "Idle Track",
        3e-3,
        3e-3,
        "Idle",
        ft,
        "primary-light"
      ));
      var a = oa;
      if (oa = Xl(), et !== 0 && 0 < a) {
        if (xn(et), rl === pv || rl === Pf)
          H0(
            a,
            oa,
            t,
            Tl
          );
        else {
          var i = oa, o = Tl;
          if (It && !(i <= a)) {
            var f = (t & 738197653) === t ? "tertiary-dark" : "primary-dark", d = (t & 536870912) === t ? "Prewarm" : (t & 201326741) === t ? "Interrupted Hydration" : "Interrupted Render";
            o ? o.run(
              console.timeStamp.bind(
                console,
                d,
                a,
                i,
                dt,
                ft,
                f
              )
            ) : console.timeStamp(
              d,
              a,
              i,
              dt,
              ft,
              f
            );
          }
        }
        uc(et, oa);
      }
      if (a = Tl, Tl = null, (t & 127) !== 0) {
        Tl = Bp, o = 0 <= pc && pc < Nr ? Nr : pc, i = 0 <= jr && jr < Nr ? Nr : jr, f = 0 <= i ? i : 0 <= o ? o : oa, 0 <= lv ? (xn(2), N0(
          lv,
          f,
          t,
          a
        )) : nv & 127, a = o;
        var h = i, y = qp, p = 0 < tm, R = kf === xp, C = kf === tv;
        if (o = oa, i = Bp, f = MS, d = CS, It) {
          if (dt = "Blocking", 0 < a ? a > o && (a = o) : a = o, 0 < h ? h > a && (h = a) : h = a, y !== null && a > h) {
            var E = p ? "secondary-light" : "warning";
            i ? i.run(
              console.timeStamp.bind(
                console,
                p ? "Consecutive" : "Event: " + y,
                h,
                a,
                dt,
                ft,
                E
              )
            ) : console.timeStamp(
              p ? "Consecutive" : "Event: " + y,
              h,
              a,
              dt,
              ft,
              E
            );
          }
          o > a && (h = R ? "error" : (t & 738197653) === t ? "tertiary-light" : "primary-light", R = C ? "Promise Resolved" : R ? "Cascading Update" : 5 < o - a ? "Update Blocked" : "Update", C = [], d != null && C.push(["Component name", d]), f != null && C.push(["Method name", f]), a = {
            start: a,
            end: o,
            detail: {
              devtools: {
                properties: C,
                track: dt,
                trackGroup: ft,
                color: h
              }
            }
          }, i ? i.run(
            performance.measure.bind(
              performance,
              R,
              a
            )
          ) : performance.measure(R, a));
        }
        pc = -1.1, kf = 0, CS = MS = null, lv = -1.1, tm = jr, jr = -1.1, Nr = Xl();
      }
      if ((t & 4194048) !== 0 && (Tl = Yp, o = 0 <= To && To < Eo ? Eo : To, a = 0 <= Ku && Ku < Eo ? Eo : Ku, i = 0 <= Wf && Wf < Eo ? Eo : Wf, f = 0 <= i ? i : 0 <= a ? a : oa, 0 <= av ? (xn(256), N0(
        av,
        f,
        t,
        Tl
      )) : nv & 4194048, C = i, h = xr, y = 0 < Ff, p = US === tv, f = oa, i = Yp, d = K1, R = $1, It && (dt = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < C ? C > o && (C = o) : C = o, o > C && h !== null && (E = y ? "secondary-light" : "warning", i ? i.run(
        console.timeStamp.bind(
          console,
          y ? "Consecutive" : "Event: " + h,
          C,
          o,
          dt,
          ft,
          E
        )
      ) : console.timeStamp(
        y ? "Consecutive" : "Event: " + h,
        C,
        o,
        dt,
        ft,
        E
      )), a > o && (i ? i.run(
        console.timeStamp.bind(
          console,
          "Action",
          o,
          a,
          dt,
          ft,
          "primary-dark"
        )
      ) : console.timeStamp(
        "Action",
        o,
        a,
        dt,
        ft,
        "primary-dark"
      )), f > a && (o = p ? "Promise Resolved" : 5 < f - a ? "Update Blocked" : "Update", C = [], R != null && C.push(["Component name", R]), d != null && C.push(["Method name", d]), a = {
        start: a,
        end: f,
        detail: {
          devtools: {
            properties: C,
            track: dt,
            trackGroup: ft,
            color: "primary-light"
          }
        }
      }, i ? i.run(
        performance.measure.bind(
          performance,
          o,
          a
        )
      ) : performance.measure(o, a))), Ku = To = -1.1, US = 0, av = -1.1, Ff = Wf, Wf = -1.1, Eo = Xl()), (t & 62914560) !== 0 && (nv & 62914560) !== 0 && (xn(4194304), wm(k1, oa)), (t & 2080374784) !== 0 && (nv & 2080374784) !== 0 && (xn(268435456), wm(W1, oa)), a = e.timeoutHandle, a !== Wr && (e.timeoutHandle = Wr, hT(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Di = 0, ih(), Xt = e, at = a = yu(
        e.current,
        null
      ), et = t, jt = Mn, iu = null, es = !1, hm = vl(e, t), WS = !1, rl = Ro, Zr = Cn = FS = ls = ts = 0, dn = n0 = null, bv = !1, (t & 8) !== 0 && (t |= t & 32), i = e.entangledLanes, i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; )
          o = 31 - Wl(i), f = 1 << o, t |= e[o], i &= ~f;
      return vc = t, vd(), e = L1(), 1e3 < e - G1 && (X.recentlyCreatedOwnerStacks = 0, G1 = e), Ai.discardPendingWarnings(), a;
    }
    function Kn(e, t) {
      Ye = null, X.H = Ip, X.getCurrentStack = null, qu = !1, xa = null, t === am || t === ov ? (t = wc(), jt = l0) : t === xS ? (t = wc(), jt = Jb) : jt = t === ZS ? kS : t !== null && typeof t == "object" && typeof t.then == "function" ? a0 : vv, iu = t;
      var a = at;
      a === null ? (rl = t0, Ks(
        e,
        da(t, e.current)
      )) : a.mode & Ie && zd(a);
    }
    function Yy() {
      var e = au.current;
      return e === null ? !0 : (et & 4194048) === et ? $u === null : (et & 62914560) === et || (et & 536870912) !== 0 ? e === $u : !1;
    }
    function ch() {
      var e = X.H;
      return X.H = Ip, e === null ? Ip : e;
    }
    function wy() {
      var e = X.A;
      return X.A = PE, e;
    }
    function mf(e) {
      Tl === null && (Tl = e._debugTask == null ? null : e._debugTask);
    }
    function yf() {
      rl = Pf, es || (et & 4194048) !== et && au.current !== null || (hm = !0), (ts & 134217727) === 0 && (ls & 134217727) === 0 || Xt === null || On(
        Xt,
        et,
        Cn,
        !1
      );
    }
    function pf(e, t, a) {
      var i = mt;
      mt |= Pl;
      var o = ch(), f = wy();
      if (Xt !== e || et !== t) {
        if (wu) {
          var d = e.memoizedUpdaters;
          0 < d.size && (vf(e, et), d.clear()), La(e, t);
        }
        u0 = null, Cu(e, t);
      }
      t = !1, d = rl;
      e: do
        try {
          if (jt !== Mn && at !== null) {
            var h = at, y = iu;
            switch (jt) {
              case kS:
                ih(), d = gv;
                break e;
              case l0:
              case Qr:
              case Vr:
              case a0:
                au.current === null && (t = !0);
                var p = jt;
                if (jt = Mn, iu = null, gf(e, h, y, p), a && hm) {
                  d = Ro;
                  break e;
                }
                break;
              default:
                p = jt, jt = Mn, iu = null, gf(e, h, y, p);
            }
          }
          Gy(), d = rl;
          break;
        } catch (R) {
          Kn(e, R);
        }
      while (!0);
      return t && e.shellSuspendCounter++, Jo(), mt = i, X.H = o, X.A = f, at === null && (Xt = null, et = 0, vd()), d;
    }
    function Gy() {
      for (; at !== null; ) oh(at);
    }
    function mi(e, t) {
      var a = mt;
      mt |= Pl;
      var i = ch(), o = wy();
      if (Xt !== e || et !== t) {
        if (wu) {
          var f = e.memoizedUpdaters;
          0 < f.size && (vf(e, et), f.clear()), La(e, t);
        }
        u0 = null, Tv = Gl() + kb, Cu(e, t);
      } else
        hm = vl(
          e,
          t
        );
      e: do
        try {
          if (jt !== Mn && at !== null)
            t: switch (t = at, f = iu, jt) {
              case vv:
                jt = Mn, iu = null, gf(
                  e,
                  t,
                  f,
                  vv
                );
                break;
              case Qr:
              case Vr:
                if (Fm(f)) {
                  jt = Mn, iu = null, Ly(t);
                  break;
                }
                t = function() {
                  jt !== Qr && jt !== Vr || Xt !== e || (jt = Sv), Ua(e);
                }, f.then(t, t);
                break e;
              case l0:
                jt = Sv;
                break e;
              case Jb:
                jt = $S;
                break e;
              case Sv:
                Fm(f) ? (jt = Mn, iu = null, Ly(t)) : (jt = Mn, iu = null, gf(
                  e,
                  t,
                  f,
                  Sv
                ));
                break;
              case $S:
                var d = null;
                switch (at.tag) {
                  case 26:
                    d = at.memoizedState;
                  case 5:
                  case 27:
                    var h = at;
                    if (d ? ut(d) : h.stateNode.complete) {
                      jt = Mn, iu = null;
                      var y = h.sibling;
                      if (y !== null) at = y;
                      else {
                        var p = h.return;
                        p !== null ? (at = p, ur(p)) : at = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                jt = Mn, iu = null, gf(
                  e,
                  t,
                  f,
                  $S
                );
                break;
              case a0:
                jt = Mn, iu = null, gf(
                  e,
                  t,
                  f,
                  a0
                );
                break;
              case kS:
                ih(), rl = gv;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          X.actQueue !== null ? Gy() : bl();
          break;
        } catch (R) {
          Kn(e, R);
        }
      while (!0);
      return Jo(), X.H = i, X.A = o, mt = a, at !== null ? Ro : (Xt = null, et = 0, vd(), rl);
    }
    function bl() {
      for (; at !== null && !Bh(); )
        oh(at);
    }
    function oh(e) {
      var t = e.alternate;
      (e.mode & Ie) !== xe ? (ai(e), t = se(
        e,
        Fs,
        t,
        e,
        vc
      ), zd(e)) : t = se(
        e,
        Fs,
        t,
        e,
        vc
      ), e.memoizedProps = e.pendingProps, t === null ? ur(e) : at = t;
    }
    function Ly(e) {
      var t = se(e, wl, e);
      e.memoizedProps = e.pendingProps, t === null ? ur(e) : at = t;
    }
    function wl(e) {
      var t = e.alternate, a = (e.mode & Ie) !== xe;
      switch (a && ai(e), e.tag) {
        case 15:
        case 0:
          t = py(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            et
          );
          break;
        case 11:
          t = py(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            et
          );
          break;
        case 5:
          Vi(e);
        default:
          Ty(t, e), e = at = Qm(e, vc), t = Fs(t, e, vc);
      }
      return a && zd(e), t;
    }
    function gf(e, t, a, i) {
      Jo(), Vi(t), nm = null, $p = 0;
      var o = t.return;
      try {
        if (fy(
          e,
          o,
          t,
          a,
          et
        )) {
          rl = t0, Ks(
            e,
            da(a, e.current)
          ), at = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw at = o, f;
        rl = t0, Ks(
          e,
          da(a, e.current)
        ), at = null;
        return;
      }
      t.flags & 32768 ? (ot || i === vv ? e = !0 : hm || (et & 536870912) !== 0 ? e = !1 : (es = e = !0, (i === Qr || i === Vr || i === l0 || i === a0) && (i = au.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Xy(t, e)) : ur(t);
    }
    function ur(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          Xy(
            t,
            es
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, ai(t), a = se(
          t,
          Ey,
          a,
          t,
          vc
        ), (t.mode & Ie) !== xe && Ms(t), a !== null) {
          at = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          at = t;
          return;
        }
        at = t = e;
      } while (t !== null);
      rl === Ro && (rl = Zb);
    }
    function Xy(e, t) {
      do {
        var a = k0(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, at = a;
          return;
        }
        if ((e.mode & Ie) !== xe) {
          Ms(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          at = e;
          return;
        }
        at = e = a;
      } while (e !== null);
      rl = gv, at = null;
    }
    function wt(e, t, a, i, o, f, d, h, y, p, R, C, E, w) {
      e.cancelPendingCommit = null;
      do
        ir();
      while (Kl !== ns);
      if (Ai.flushLegacyContextWarning(), Ai.flushPendingUnsafeLifecycleWarnings(), (mt & (Pl | uu)) !== sa)
        throw Error("Should not already be working.");
      if (xn(a), p === Xr ? Ym(
        E,
        w,
        a,
        Tl
      ) : i !== null ? Iv(
        E,
        w,
        a,
        i,
        t !== null && t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) !== 0,
        Tl
      ) : Fv(
        E,
        w,
        a,
        Tl
      ), t !== null) {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= OS, ed(
          e,
          a,
          f,
          d,
          h,
          y
        ), e === Xt && (at = Xt = null, et = 0), mm = t, us = e, Di = a, e1 = f, l1 = o, t2 = i, t1 = w, l2 = C, Ri = Av, a2 = null, t.actualDuration !== 0 || (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Sf(ro, function() {
          return r0 = window.event, Ri === Av && (Ri = PS), cr(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), bo = null, $f = Xl(), C !== null && Pv(
          w,
          $f,
          C,
          Tl
        ), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = X.T, X.T = null, o = Et.p, Et.p = Ml, d = mt, mt |= uu;
          try {
            lS(e, t, a);
          } finally {
            mt = d, Et.p = o, X.T = i;
          }
        }
        Kl = Fb, Ea(), Uu(), Qy();
      }
    }
    function Ea() {
      if (Kl === Fb) {
        Kl = ns;
        var e = us, t = mm, a = Di, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = X.T, X.T = null;
          var o = Et.p;
          Et.p = Ml;
          var f = mt;
          mt |= uu;
          try {
            rm = a, dm = e, qc(), tr(t, e), dm = rm = null, a = h1;
            var d = yd(e.containerInfo), h = a.focusedElem, y = a.selectionRange;
            if (d !== h && h && h.ownerDocument && _0(
              h.ownerDocument.documentElement,
              h
            )) {
              if (y !== null && xm(h)) {
                var p = y.start, R = y.end;
                if (R === void 0 && (R = p), "selectionStart" in h)
                  h.selectionStart = p, h.selectionEnd = Math.min(
                    R,
                    h.value.length
                  );
                else {
                  var C = h.ownerDocument || document, E = C && C.defaultView || window;
                  if (E.getSelection) {
                    var w = E.getSelection(), ce = h.textContent.length, re = Math.min(
                      y.start,
                      ce
                    ), Jt = y.end === void 0 ? re : Math.min(y.end, ce);
                    !w.extend && re > Jt && (d = Jt, Jt = re, re = d);
                    var st = R0(
                      h,
                      re
                    ), b = R0(
                      h,
                      Jt
                    );
                    if (st && b && (w.rangeCount !== 1 || w.anchorNode !== st.node || w.anchorOffset !== st.offset || w.focusNode !== b.node || w.focusOffset !== b.offset)) {
                      var T = C.createRange();
                      T.setStart(st.node, st.offset), w.removeAllRanges(), re > Jt ? (w.addRange(T), w.extend(b.node, b.offset)) : (T.setEnd(b.node, b.offset), w.addRange(T));
                    }
                  }
                }
              }
              for (C = [], w = h; w = w.parentNode; )
                w.nodeType === 1 && C.push({
                  element: w,
                  left: w.scrollLeft,
                  top: w.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < C.length; h++) {
                var D = C[h];
                D.element.scrollLeft = D.left, D.element.scrollTop = D.top;
              }
            }
            wv = !!d1, h1 = d1 = null;
          } finally {
            mt = f, Et.p = o, X.T = i;
          }
        }
        e.current = t, Kl = Ib;
      }
    }
    function Uu() {
      if (Kl === Ib) {
        Kl = ns;
        var e = a2;
        if (e !== null) {
          $f = Xl();
          var t = So, a = $f;
          !It || a <= t || console.timeStamp(
            e,
            t,
            a,
            dt,
            ft,
            "secondary-light"
          );
        }
        e = us, t = mm, a = Di;
        var i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = X.T, X.T = null;
          var o = Et.p;
          Et.p = Ml;
          var f = mt;
          mt |= uu;
          try {
            rm = a, dm = e, qc(), th(
              e,
              t.alternate,
              t
            ), dm = rm = null;
          } finally {
            mt = f, Et.p = o, X.T = i;
          }
        }
        e = t1, t = l2, So = Xl(), e = t === null ? e : $f, t = So, a = Ri === IS, i = Tl, bo !== null ? j0(
          e,
          t,
          bo,
          !1,
          i
        ) : !It || t <= e || (i ? i.run(
          console.timeStamp.bind(
            console,
            a ? "Commit Interrupted View Transition" : "Commit",
            e,
            t,
            dt,
            ft,
            a ? "error" : "secondary-dark"
          )
        ) : console.timeStamp(
          a ? "Commit Interrupted View Transition" : "Commit",
          e,
          t,
          dt,
          ft,
          a ? "error" : "secondary-dark"
        )), Kl = Pb;
      }
    }
    function Qy() {
      if (Kl === e2 || Kl === Pb) {
        if (Kl === e2) {
          var e = So;
          So = Xl();
          var t = So, a = Ri === IS;
          !It || t <= e || console.timeStamp(
            a ? "Interrupted View Transition" : "Starting Animation",
            e,
            t,
            dt,
            ft,
            a ? " error" : "secondary-light"
          ), Ri !== IS && (Ri = Wb);
        }
        Kl = ns, qh(), e = us;
        var i = mm;
        t = Di, a = t2;
        var o = i.actualDuration !== 0 || (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0;
        o ? Kl = Ov : (Kl = ns, mm = us = null, Vy(
          e,
          e.pendingLanes
        ), Jr = 0, c0 = null);
        var f = e.pendingLanes;
        if (f === 0 && (as = null), o || rh(e), f = Hl(t), i = i.stateNode, _l && typeof _l.onCommitFiberRoot == "function")
          try {
            var d = (i.current.flags & 128) === 128;
            switch (f) {
              case Ml:
                var h = bp;
                break;
              case Fl:
                h = Yh;
                break;
              case ca:
                h = ro;
                break;
              case hc:
                h = wh;
                break;
              default:
                h = ro;
            }
            _l.onCommitFiberRoot(
              ho,
              i,
              h,
              d
            );
          } catch (C) {
            Yu || (Yu = !0, console.error(
              "React instrumentation encountered an error: %o",
              C
            ));
          }
        if (wu && e.memoizedUpdaters.clear(), By(), a !== null) {
          d = X.T, h = Et.p, Et.p = Ml, X.T = null;
          try {
            var y = e.onRecoverableError;
            for (i = 0; i < a.length; i++) {
              var p = a[i], R = ug(p.stack);
              se(
                p.source,
                y,
                p.value,
                R
              );
            }
          } finally {
            X.T = d, Et.p = h;
          }
        }
        (Di & 3) !== 0 && ir(), Ua(e), f = e.pendingLanes, (t & 261930) !== 0 && (f & 42) !== 0 ? (iv = !0, e === a1 ? i0++ : (i0 = 0, a1 = e)) : i0 = 0, o || uc(t, So), Hu(0);
      }
    }
    function ug(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Vy(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, _s(t)));
    }
    function ir() {
      return Ea(), Uu(), Qy(), cr();
    }
    function cr() {
      if (Kl !== Ov) return !1;
      var e = us, t = e1;
      e1 = 0;
      var a = Hl(Di), i = ca > a ? ca : a;
      a = X.T;
      var o = Et.p;
      try {
        Et.p = i, X.T = null;
        var f = l1;
        l1 = null, i = us;
        var d = Di;
        if (Kl = ns, mm = us = null, Di = 0, (mt & (Pl | uu)) !== sa)
          throw Error("Cannot flush passive effects while already rendering.");
        xn(d), n1 = !0, zv = !1;
        var h = 0;
        if (bo = null, h = Gl(), Ri === Wb)
          wm(
            So,
            h,
            JE
          );
        else {
          var y = So, p = h, R = Ri === PS;
          !It || p <= y || (Tl ? Tl.run(
            console.timeStamp.bind(
              console,
              R ? "Waiting for Paint" : "Waiting",
              y,
              p,
              dt,
              ft,
              "secondary-light"
            )
          ) : console.timeStamp(
            R ? "Waiting for Paint" : "Waiting",
            y,
            p,
            dt,
            ft,
            "secondary-light"
          ));
        }
        y = mt, mt |= uu;
        var C = i.current;
        qc(), nh(C);
        var E = i.current;
        C = t1, qc(), Ny(
          i,
          E,
          d,
          f,
          C
        ), rh(i), mt = y;
        var w = Gl();
        if (E = h, C = Tl, bo !== null ? j0(
          E,
          w,
          bo,
          !0,
          C
        ) : !It || w <= E || (C ? C.run(
          console.timeStamp.bind(
            console,
            "Remaining Effects",
            E,
            w,
            dt,
            ft,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          E,
          w,
          dt,
          ft,
          "secondary-dark"
        )), uc(d, w), Hu(0, !1), zv ? i === c0 ? Jr++ : (Jr = 0, c0 = i) : Jr = 0, zv = n1 = !1, _l && typeof _l.onPostCommitFiberRoot == "function")
          try {
            _l.onPostCommitFiberRoot(ho, i);
          } catch (re) {
            Yu || (Yu = !0, console.error(
              "React instrumentation encountered an error: %o",
              re
            ));
          }
        var ce = i.current.stateNode;
        return ce.effectDuration = 0, ce.passiveEffectDuration = 0, !0;
      } finally {
        Et.p = o, X.T = a, Vy(e, t);
      }
    }
    function Ta(e, t, a) {
      t = da(a, t), G0(t), t = Ld(e.stateNode, t, 2), e = Su(e, t, 2), e !== null && (Un(e, 2), Ua(e));
    }
    function $e(e, t, a) {
      if (ym = !1, e.tag === 3)
        Ta(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            Ta(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (as === null || !as.has(i))) {
              e = da(a, e), G0(e), a = Xd(2), i = Su(t, a, 2), i !== null && (Qd(
                a,
                i,
                t,
                e
              ), Un(i, 2), Ua(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function fh(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new tT();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (WS = !0, o.add(a), i = Ca.bind(null, e, t, a), wu && vf(e, a), t.then(i, i));
    }
    function Ca(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, (a & 127) !== 0 ? 0 > pc && (Nr = pc = Xl(), Bp = ev("Promise Resolved"), kf = tv) : (a & 4194048) !== 0 && 0 > Ku && (Eo = Ku = Xl(), Yp = ev("Promise Resolved"), US = tv), qy() && X.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Xt === e && (et & a) === a && (rl === Pf || rl === pv && (et & 62914560) === et && Gl() - Ev < $b ? (mt & Pl) === sa && Cu(e, 0) : FS |= a, Zr === et && (Zr = 0)), Ua(e);
    }
    function Zy(e, t) {
      t === 0 && (t = Uo()), e = aa(e, t), e !== null && (Un(e, t), Ua(e));
    }
    function yi(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), Zy(e, a);
    }
    function lo(e, t) {
      var a = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), Zy(e, a);
    }
    function $n(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === za;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && se(
            o,
            sh,
            i,
            o
          ) : $n(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? se(
            o,
            sh,
            i,
            o
          ) : o.subtreeFlags & 67108864 && se(
            o,
            $n,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function sh(e, t) {
      me(!0);
      try {
        lh(t), xy(t), Hy(e, t.alternate, t, !1), nr(e, t, 0, null, !1, 0);
      } finally {
        me(!1);
      }
    }
    function rh(e) {
      var t = !0;
      e.current.mode & (Ba | Ti) || (t = !1), $n(
        e,
        e.current,
        t
      );
    }
    function zn(e) {
      if ((mt & Pl) === sa) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = he(e) || "ReactComponent", Dv !== null) {
            if (Dv.has(t)) return;
            Dv.add(t);
          } else Dv = /* @__PURE__ */ new Set([t]);
          se(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function vf(e, t) {
      wu && e.memoizedUpdaters.forEach(function(a) {
        Ol(e, a, t);
      });
    }
    function Sf(e, t) {
      var a = X.actQueue;
      return a !== null ? (a.push(t), nT) : Sp(e, t);
    }
    function or(e) {
      qy() && X.actQueue === null && se(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          he(e)
        );
      });
    }
    function Ua(e) {
      e !== pm && e.next === null && (pm === null ? Rv = pm = e : pm = pm.next = e), _v = !0, X.actQueue !== null ? i1 || (i1 = !0, cg()) : u1 || (u1 = !0, cg());
    }
    function Hu(e, t) {
      if (!c1 && _v) {
        c1 = !0;
        do
          for (var a = !1, i = Rv; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - Wl(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, fr(i, f));
            } else
              f = et, f = bc(
                i,
                i === Xt ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== Wr
              ), (f & 3) === 0 || vl(i, f) || (a = !0, fr(i, f));
            i = i.next;
          }
        while (a);
        c1 = !1;
      }
    }
    function ig() {
      r0 = window.event, dh();
    }
    function dh() {
      _v = i1 = u1 = !1;
      var e = 0;
      is !== 0 && ky() && (e = is);
      for (var t = Gl(), a = null, i = Rv; i !== null; ) {
        var o = i.next, f = bf(i, t);
        f === 0 ? (i.next = null, a === null ? Rv = o : a.next = o, o === null && (pm = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (_v = !0)), i = o;
      }
      Kl !== ns && Kl !== Ov || Hu(e), is !== 0 && (is = 0);
    }
    function bf(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Wl(f), h = 1 << d, y = o[d];
        y === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = Pr(h, t)) : y <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = Xt, a = et, a = bc(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Wr
      ), i = e.callbackNode, a === 0 || e === t && (jt === Qr || jt === Vr) || e.cancelPendingCommit !== null)
        return i !== null && hh(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || vl(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || X.actQueue !== null && i !== o1)
          hh(i);
        else return t;
        switch (Hl(a)) {
          case Ml:
          case Fl:
            a = Yh;
            break;
          case ca:
            a = ro;
            break;
          case hc:
            a = wh;
            break;
          default:
            a = ro;
        }
        return i = Jy.bind(null, e), X.actQueue !== null ? (X.actQueue.push(i), a = o1) : a = Sp(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && hh(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Jy(e, t) {
      if (iv = uv = !1, r0 = window.event, Kl !== ns && Kl !== Ov)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (Ri === Av && (Ri = PS), ir() && e.callbackNode !== a)
        return null;
      var i = et;
      return i = bc(
        e,
        e === Xt ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Wr
      ), i === 0 ? null : (lg(
        e,
        i,
        t
      ), bf(e, Gl()), e.callbackNode != null && e.callbackNode === a ? Jy.bind(null, e) : null);
    }
    function fr(e, t) {
      if (ir()) return null;
      uv = iv, iv = !1, lg(e, t, !0);
    }
    function hh(e) {
      e !== o1 && e !== null && xh(e);
    }
    function cg() {
      X.actQueue !== null && X.actQueue.push(function() {
        return dh(), null;
      }), mT(function() {
        (mt & (Pl | uu)) !== sa ? Sp(
          bp,
          ig
        ) : dh();
      });
    }
    function Ky() {
      if (is === 0) {
        var e = Br;
        e === 0 && (e = Yf, Yf <<= 1, (Yf & 261888) === 0 && (Yf = 256)), is = e;
      }
      return is;
    }
    function gt(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (pt(e, "action"), vs("" + e));
    }
    function Ut(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function ct(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = gt(
          (o[Da] || null).action
        ), d = i.submitter;
        d && (t = (t = d[Da] || null) ? gt(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new Kg(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (is !== 0) {
                    var y = d ? Ut(
                      o,
                      d
                    ) : new FormData(o), p = {
                      pending: !0,
                      data: y,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(p), ri(
                      a,
                      p,
                      null,
                      y
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), y = d ? Ut(
                    o,
                    d
                  ) : new FormData(o), p = {
                    pending: !0,
                    data: y,
                    method: o.method,
                    action: f
                  }, Object.freeze(p), ri(
                    a,
                    p,
                    f,
                    y
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function lt(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        bS(i);
      }
      e.currentTarget = null;
    }
    function zt(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], y = h.instance, p = h.currentTarget;
              if (h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? se(
                y,
                lt,
                f,
                h,
                p
              ) : lt(f, h, p), o = y;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], y = h.instance, p = h.currentTarget, h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? se(
                y,
                lt,
                f,
                h,
                p
              ) : lt(f, h, p), o = y;
            }
        }
      }
    }
    function je(e, t) {
      f1.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[mo];
      a === void 0 && (a = t[mo] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (mh(t, e, 2, !1), a.add(i));
    }
    function Nu(e, t, a) {
      f1.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), mh(
        a,
        e,
        i,
        t
      );
    }
    function ic(e) {
      if (!e[Mv]) {
        e[Mv] = !0, Xg.forEach(function(a) {
          a !== "selectionchange" && (f1.has(a) || Nu(a, !1, e), Nu(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Mv] || (t[Mv] = !0, Nu("selectionchange", !1, t));
      }
    }
    function mh(e, t, a, i) {
      switch (_h(t)) {
        case Ml:
          var o = op;
          break;
        case Fl:
          o = kl;
          break;
        default:
          o = fp;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !sS || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function kn(e, t, a, i, o) {
      var f = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var y = d.tag;
                if ((y === 3 || y === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = te(h), d === null) return;
              if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      rd(function() {
        var p = f, R = Nn(a), C = [];
        e: {
          var E = w1.get(e);
          if (E !== void 0) {
            var w = Kg, ce = e;
            switch (e) {
              case "keypress":
                if (Ss(a) === 0) break e;
              case "keydown":
              case "keyup":
                w = SE;
                break;
              case "focusin":
                ce = "focus", w = mS;
                break;
              case "focusout":
                ce = "blur", w = mS;
                break;
              case "beforeblur":
              case "afterblur":
                w = mS;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                w = z1;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                w = cE;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                w = TE;
                break;
              case x1:
              case B1:
              case q1:
                w = sE;
                break;
              case Y1:
                w = OE;
                break;
              case "scroll":
              case "scrollend":
                w = uE;
                break;
              case "wheel":
                w = DE;
                break;
              case "copy":
              case "cut":
              case "paste":
                w = dE;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                w = R1;
                break;
              case "toggle":
              case "beforetoggle":
                w = _E;
            }
            var re = (t & 4) !== 0, Jt = !re && (e === "scroll" || e === "scrollend"), st = re ? E !== null ? E + "Capture" : null : E;
            re = [];
            for (var b = p, T; b !== null; ) {
              var D = b;
              if (T = D.stateNode, D = D.tag, D !== 5 && D !== 26 && D !== 27 || T === null || st === null || (D = hu(b, st), D != null && re.push(
                Gt(
                  b,
                  D,
                  T
                )
              )), Jt) break;
              b = b.return;
            }
            0 < re.length && (E = new w(
              E,
              ce,
              null,
              a,
              R
            ), C.push({
              event: E,
              listeners: re
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (E = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", E && a !== zp && (ce = a.relatedTarget || a.fromElement) && (te(ce) || ce[Ei]))
              break e;
            if ((w || E) && (E = R.window === R ? R : (E = R.ownerDocument) ? E.defaultView || E.parentWindow : window, w ? (ce = a.relatedTarget || a.toElement, w = p, ce = ce ? te(ce) : null, ce !== null && (Jt = nt(ce), re = ce.tag, ce !== Jt || re !== 5 && re !== 27 && re !== 6) && (ce = null)) : (w = null, ce = p), w !== ce)) {
              if (re = z1, D = "onMouseLeave", st = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (re = R1, D = "onPointerLeave", st = "onPointerEnter", b = "pointer"), Jt = w == null ? E : ye(w), T = ce == null ? E : ye(ce), E = new re(
                D,
                b + "leave",
                w,
                a,
                R
              ), E.target = Jt, E.relatedTarget = T, D = null, te(R) === p && (re = new re(
                st,
                b + "enter",
                ce,
                a,
                R
              ), re.target = T, re.relatedTarget = Jt, D = re), Jt = D, w && ce)
                t: {
                  for (re = ao, st = w, b = ce, T = 0, D = st; D; D = re(D))
                    T++;
                  D = 0;
                  for (var J = b; J; J = re(J))
                    D++;
                  for (; 0 < T - D; )
                    st = re(st), T--;
                  for (; 0 < D - T; )
                    b = re(b), D--;
                  for (; T--; ) {
                    if (st === b || b !== null && st === b.alternate) {
                      re = st;
                      break t;
                    }
                    st = re(st), b = re(b);
                  }
                  re = null;
                }
              else re = null;
              w !== null && yh(
                C,
                E,
                w,
                re,
                !1
              ), ce !== null && Jt !== null && yh(
                C,
                Jt,
                ce,
                re,
                !0
              );
            }
          }
          e: {
            if (E = p ? ye(p) : window, w = E.nodeName && E.nodeName.toLowerCase(), w === "select" || w === "input" && E.type === "file")
              var oe = Bi;
            else if (Hm(E))
              if (N1)
                oe = As;
              else {
                oe = Nm;
                var we = Wv;
              }
            else
              w = E.nodeName, !w || w.toLowerCase() !== "input" || E.type !== "checkbox" && E.type !== "radio" ? p && du(p.elementType) && (oe = Bi) : oe = jm;
            if (oe && (oe = oe(e, p))) {
              Es(
                C,
                oe,
                a,
                R
              );
              break e;
            }
            we && we(e, E, p), e === "focusout" && p && E.type === "number" && p.memoizedProps.value != null && Am(E, "number", E.value);
          }
          switch (we = p ? ye(p) : window, e) {
            case "focusin":
              (Hm(we) || we.contentEditable === "true") && (Kh = we, pS = p, Hp = null);
              break;
            case "focusout":
              Hp = pS = Kh = null;
              break;
            case "mousedown":
              gS = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              gS = !1, M0(
                C,
                a,
                R
              );
              break;
            case "selectionchange":
              if (HE) break;
            case "keydown":
            case "keyup":
              M0(
                C,
                a,
                R
              );
          }
          var Oe;
          if (yS)
            e: {
              switch (e) {
                case "compositionstart":
                  var Ee = "onCompositionStart";
                  break e;
                case "compositionend":
                  Ee = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  Ee = "onCompositionUpdate";
                  break e;
              }
              Ee = void 0;
            }
          else
            Jh ? Lo(e, a) && (Ee = "onCompositionEnd") : e === "keydown" && a.keyCode === _1 && (Ee = "onCompositionStart");
          Ee && (M1 && a.locale !== "ko" && (Jh || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && Jh && (Oe = Rc()) : (Qf = R, rS = "value" in Qf ? Qf.value : Qf.textContent, Jh = !0)), we = Wn(
            p,
            Ee
          ), 0 < we.length && (Ee = new D1(
            Ee,
            e,
            null,
            a,
            R
          ), C.push({
            event: Ee,
            listeners: we
          }), Oe ? Ee.data = Oe : (Oe = ti(a), Oe !== null && (Ee.data = Oe)))), (Oe = CE ? Um(e, a) : dd(e, a)) && (Ee = Wn(
            p,
            "onBeforeInput"
          ), 0 < Ee.length && (we = new mE(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            R
          ), C.push({
            event: we,
            listeners: Ee
          }), we.data = Oe)), ct(
            C,
            e,
            p,
            a,
            R
          );
        }
        zt(C, t);
      });
    }
    function Gt(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Wn(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = hu(e, a), o != null && i.unshift(
          Gt(e, o, f)
        ), o = hu(e, t), o != null && i.push(
          Gt(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function ao(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function yh(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, y = h.alternate, p = h.stateNode;
        if (h = h.tag, y !== null && y === i) break;
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = hu(a, f), p != null && d.unshift(
          Gt(a, p, y)
        )) : o || (p = hu(a, f), p != null && d.push(
          Gt(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function Aa(e, t) {
      O0(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || A1 || (A1 = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Gu,
        possibleRegistrationNames: Lf
      };
      du(e) || typeof t.is == "string" || kv(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function al(e, t, a, i) {
      t !== a && (a = Fn(a), Fn(t) !== a && (i[e] = t));
    }
    function sr(e, t, a) {
      t.forEach(function(i) {
        a[pi(i)] = i === "style" ? cc(e) : e.getAttribute(i);
      });
    }
    function nl(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function ph(e, t) {
      return e = e.namespaceURI === Qe || e.namespaceURI === ke ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function Fn(e) {
      return Ga(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        Mi(e)
      ), cu(e)), (typeof e == "string" ? e : "" + e).replace(uT, `
`).replace(iT, "");
    }
    function $y(e, t) {
      return t = Fn(t), Fn(e) === t;
    }
    function bt(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (gs(i, t, !1), t === "body" || t === "textarea" && i === "" || Dc(e, i)) : (typeof i == "number" || typeof i == "bigint") && (gs("" + i, t, !1), t !== "body" && Dc(e, "" + i));
          break;
        case "className":
          ms(e, "class", i);
          break;
        case "tabIndex":
          ms(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          ms(e, a, i);
          break;
        case "style":
          _m(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            ms(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          pt(i, a), i = vs("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || Hv || (Hv = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Uv || (Uv = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || Cv ? t !== "button" || o.type == null || o.type === "submit" || Cv ? typeof i == "function" && (o.name == null || o2 || (o2 = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Hv || (Hv = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Uv || (Uv = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Cv = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Cv = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && bt(e, t, "name", o.name, o, null), bt(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), bt(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), bt(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (bt(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), bt(e, t, "method", o.method, o, null), bt(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          pt(i, a), i = vs("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && nl(a, i), e.onclick = yn);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && nl(a, i), je("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && nl(a, i), je("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          pt(i, a), a = vs("" + i), e.setAttributeNS(Kr, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (pt(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || Nv[a] || (Nv[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (pt(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (pt(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (pt(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          je("beforetoggle", e), je("toggle", e), jo(e, "popover", i);
          break;
        case "xlinkActuate":
          fu(
            e,
            Kr,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          fu(
            e,
            Kr,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          fu(
            e,
            Kr,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          fu(
            e,
            Kr,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          fu(
            e,
            Kr,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          fu(
            e,
            Kr,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          fu(
            e,
            s1,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          fu(
            e,
            s1,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          fu(
            e,
            s1,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), jo(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          f2 || i == null || typeof i != "object" || (f2 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = T0(a), jo(e, a, i)) : Gu.hasOwnProperty(a) && i != null && typeof i != "function" && nl(a, i);
      }
    }
    function Ef(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          _m(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? Dc(e, i) : (typeof i == "number" || typeof i == "bigint") && Dc(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && nl(a, i), je("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && nl(a, i), je("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && nl(a, i), e.onclick = yn);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (Gu.hasOwnProperty(a))
            i != null && typeof i != "function" && nl(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[Da] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : jo(e, a, i);
            }
      }
    }
    function Wt(e, t, a) {
      switch (Aa(t, a), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          je("error", e), je("load", e);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    bt(e, t, f, d, a, null);
                }
            }
          o && bt(e, t, "srcSet", a.srcSet, a, null), i && bt(e, t, "src", a.src, a, null);
          return;
        case "input":
          la("input", a), je("invalid", e);
          var h = f = d = o = null, y = null, p = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var R = a[i];
              if (R != null)
                switch (i) {
                  case "name":
                    o = R;
                    break;
                  case "type":
                    d = R;
                    break;
                  case "checked":
                    y = R;
                    break;
                  case "defaultChecked":
                    p = R;
                    break;
                  case "value":
                    f = R;
                    break;
                  case "defaultValue":
                    h = R;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (R != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    bt(e, t, i, R, a, null);
                }
            }
          ra(e, a), ad(
            e,
            f,
            h,
            y,
            p,
            d,
            o,
            !1
          );
          return;
        case "select":
          la("select", a), je("invalid", e), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  bt(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          nd(e, a), t = f, a = d, e.multiple = !!i, t != null ? su(e, !!i, t, !1) : a != null && su(e, !!i, a, !0);
          return;
        case "textarea":
          la("textarea", a), je("invalid", e), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  bt(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          Tc(e, a), xo(e, i, o, f);
          return;
        case "option":
          E0(e, a);
          for (y in a)
            if (a.hasOwnProperty(y) && (i = a[y], i != null))
              switch (y) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  bt(e, t, y, i, a, null);
              }
          return;
        case "dialog":
          je("beforetoggle", e), je("toggle", e), je("cancel", e), je("close", e);
          break;
        case "iframe":
        case "object":
          je("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < o0.length; i++)
            je(o0[i], e);
          break;
        case "image":
          je("error", e), je("load", e);
          break;
        case "details":
          je("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          je("error", e), je("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (p in a)
            if (a.hasOwnProperty(p) && (i = a[p], i != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  bt(e, t, p, i, a, null);
              }
          return;
        default:
          if (du(t)) {
            for (R in a)
              a.hasOwnProperty(R) && (i = a[R], i !== void 0 && Ef(
                e,
                t,
                R,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && bt(e, t, h, i, a, null));
    }
    function Rl(e, t, a, i) {
      switch (Aa(t, i), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, h = null, y = null, p = null, R = null;
          for (w in a) {
            var C = a[w];
            if (a.hasOwnProperty(w) && C != null)
              switch (w) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  y = C;
                default:
                  i.hasOwnProperty(w) || bt(
                    e,
                    t,
                    w,
                    null,
                    i,
                    C
                  );
              }
          }
          for (var E in i) {
            var w = i[E];
            if (C = a[E], i.hasOwnProperty(E) && (w != null || C != null))
              switch (E) {
                case "type":
                  f = w;
                  break;
                case "name":
                  o = w;
                  break;
                case "checked":
                  p = w;
                  break;
                case "defaultChecked":
                  R = w;
                  break;
                case "value":
                  d = w;
                  break;
                case "defaultValue":
                  h = w;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (w != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  w !== C && bt(
                    e,
                    t,
                    E,
                    w,
                    i,
                    C
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || c2 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), c2 = !0), !t || i || i2 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), i2 = !0), Ni(
            e,
            d,
            h,
            y,
            p,
            R,
            f,
            o
          );
          return;
        case "select":
          w = d = h = E = null;
          for (f in a)
            if (y = a[f], a.hasOwnProperty(f) && y != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  w = y;
                default:
                  i.hasOwnProperty(f) || bt(
                    e,
                    t,
                    f,
                    null,
                    i,
                    y
                  );
              }
          for (o in i)
            if (f = i[o], y = a[o], i.hasOwnProperty(o) && (f != null || y != null))
              switch (o) {
                case "value":
                  E = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== y && bt(
                    e,
                    t,
                    o,
                    f,
                    i,
                    y
                  );
              }
          i = h, t = d, a = w, E != null ? su(e, !!t, E, !1) : !!a != !!t && (i != null ? su(e, !!t, i, !0) : su(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          w = E = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  bt(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  E = o;
                  break;
                case "defaultValue":
                  w = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && bt(e, t, d, o, i, f);
              }
          Ac(e, E, w);
          return;
        case "option":
          for (var ce in a)
            if (E = a[ce], a.hasOwnProperty(ce) && E != null && !i.hasOwnProperty(ce))
              switch (ce) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  bt(
                    e,
                    t,
                    ce,
                    null,
                    i,
                    E
                  );
              }
          for (y in i)
            if (E = i[y], w = a[y], i.hasOwnProperty(y) && E !== w && (E != null || w != null))
              switch (y) {
                case "selected":
                  e.selected = E && typeof E != "function" && typeof E != "symbol";
                  break;
                default:
                  bt(
                    e,
                    t,
                    y,
                    E,
                    i,
                    w
                  );
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var re in a)
            E = a[re], a.hasOwnProperty(re) && E != null && !i.hasOwnProperty(re) && bt(
              e,
              t,
              re,
              null,
              i,
              E
            );
          for (p in i)
            if (E = i[p], w = a[p], i.hasOwnProperty(p) && E !== w && (E != null || w != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (E != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  bt(
                    e,
                    t,
                    p,
                    E,
                    i,
                    w
                  );
              }
          return;
        default:
          if (du(t)) {
            for (var Jt in a)
              E = a[Jt], a.hasOwnProperty(Jt) && E !== void 0 && !i.hasOwnProperty(Jt) && Ef(
                e,
                t,
                Jt,
                void 0,
                i,
                E
              );
            for (R in i)
              E = i[R], w = a[R], !i.hasOwnProperty(R) || E === w || E === void 0 && w === void 0 || Ef(
                e,
                t,
                R,
                E,
                i,
                w
              );
            return;
          }
      }
      for (var st in a)
        E = a[st], a.hasOwnProperty(st) && E != null && !i.hasOwnProperty(st) && bt(e, t, st, null, i, E);
      for (C in i)
        E = i[C], w = a[C], !i.hasOwnProperty(C) || E === w || E == null && w == null || bt(e, t, C, E, i, w);
    }
    function pi(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function cc(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function ju(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (ta(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || ge.has(f) ? (ta(d, f), i += o + f.replace(Q, "-$1").toLowerCase().replace(de, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(Q, "-$1").toLowerCase().replace(de, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = Fn(i), Fn(t) !== i && (a.style = cc(e)));
      }
    }
    function Ha(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (pt(i, t), e === "" + i)
              return;
        }
      al(t, e, i, f);
    }
    function gh(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      al(t, e, i, f);
    }
    function vh(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (pt(i, a), e === "" + i)
              return;
        }
      al(t, e, i, f);
    }
    function Tf(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (pt(i, t), e === "" + i))
              return;
        }
      al(t, e, i, f);
    }
    function rr(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (pt(i, t), a = vs("" + i), e === a)
              return;
        }
      al(t, e, i, f);
    }
    function Na(e, t, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (du(t)) {
        for (var y in a)
          if (a.hasOwnProperty(y)) {
            var p = a[y];
            if (p != null) {
              if (Gu.hasOwnProperty(y))
                typeof p != "function" && nl(y, p);
              else if (a.suppressHydrationWarning !== !0)
                switch (y) {
                  case "children":
                    typeof p != "string" && typeof p != "number" || al(
                      "children",
                      e.textContent,
                      p,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, p = p ? p.__html : void 0, p != null && (p = ph(e, p), al(
                      y,
                      d,
                      p,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(y), ju(e, p, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(y.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      y
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = Hi(
                      e,
                      "class",
                      p
                    ), al(
                      "className",
                      d,
                      p,
                      o
                    );
                    continue;
                  default:
                    i.context === _o && t !== "svg" && t !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = Hi(
                      e,
                      y,
                      p
                    ), al(
                      y,
                      d,
                      p,
                      o
                    );
                }
            }
          }
      } else
        for (p in a)
          if (a.hasOwnProperty(p) && (y = a[p], y != null)) {
            if (Gu.hasOwnProperty(p))
              typeof y != "function" && nl(p, y);
            else if (a.suppressHydrationWarning !== !0)
              switch (p) {
                case "children":
                  typeof y != "string" && typeof y != "number" || al(
                    "children",
                    e.textContent,
                    y,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, y = y ? y.__html : void 0, y != null && (y = ph(e, y), d !== y && (o[p] = { __html: d }));
                  continue;
                case "className":
                  Ha(
                    e,
                    p,
                    "class",
                    y,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Ha(
                    e,
                    p,
                    "tabindex",
                    y,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(p), ju(e, y, o);
                  continue;
                case "multiple":
                  f.delete(p), al(
                    p,
                    e.multiple,
                    y,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(p), al(
                    p,
                    e.muted,
                    y,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), al(
                    p,
                    e.autofocus,
                    y,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(p), d = e.getAttribute("data"), al(
                      p,
                      d,
                      y,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(y !== "" || t === "a" && p === "href" || t === "object" && p === "data")) {
                    console.error(
                      p === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      p,
                      p
                    );
                    continue;
                  }
                  rr(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(p), typeof y == "function") {
                    f.delete(p.toLowerCase()), p === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === cT) {
                    f.delete(p.toLowerCase()), al(
                      p,
                      "function",
                      y,
                      o
                    );
                    continue;
                  }
                  rr(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  rr(
                    e,
                    p,
                    "xlink:href",
                    y,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  vh(
                    e,
                    p,
                    "contenteditable",
                    y,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  vh(
                    e,
                    p,
                    "spellcheck",
                    y,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  vh(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  gh(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var R = d = p, C = o;
                    if (f.delete(R), h = h.getAttribute(R), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (y === !1) break e;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (y === !0 && h === "") break e;
                          break;
                        default:
                          if (pt(y, d), h === "" + y)
                            break e;
                      }
                    al(
                      d,
                      h,
                      y,
                      C
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, R = d = p, C = o, f.delete(R), h = h.getAttribute(R), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(y) || 1 > y) break e;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(y) || 1 > y) && (pt(y, d), h === "" + y))
                            break e;
                      }
                    al(
                      d,
                      h,
                      y,
                      C
                    );
                  }
                  continue;
                case "rowSpan":
                  Tf(
                    e,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  Tf(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Ha(
                    e,
                    p,
                    "x-height",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Ha(
                    e,
                    p,
                    "xlink:actuate",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Ha(
                    e,
                    p,
                    "xlink:arcrole",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Ha(
                    e,
                    p,
                    "xlink:role",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Ha(
                    e,
                    p,
                    "xlink:show",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Ha(
                    e,
                    p,
                    "xlink:title",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Ha(
                    e,
                    p,
                    "xlink:type",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Ha(
                    e,
                    p,
                    "xml:base",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Ha(
                    e,
                    p,
                    "xml:lang",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Ha(
                    e,
                    p,
                    "xml:space",
                    y,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  y !== "" || Nv[p] || (Nv[p] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    p
                  )), gh(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
                    h = T0(p), d = !1, i.context === _o && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (R = p.toLowerCase(), R = tu.hasOwnProperty(
                      R
                    ) && tu[R] || null, R !== null && R !== p && (d = !0, f.delete(R)), f.delete(h));
                    e: if (R = e, C = h, h = y, mn(C))
                      if (R.hasAttribute(C))
                        R = R.getAttribute(
                          C
                        ), pt(
                          h,
                          C
                        ), h = R === "" + h ? h : R;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (R = C.toLowerCase().slice(0, 5), R !== "data-" && R !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || al(
                      p,
                      h,
                      y,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && sr(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function og(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function Oa(e) {
      switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return !0;
        default:
          return !1;
      }
    }
    function fg() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), i = 0; i < a.length; i++) {
          var o = a[i], f = o.transferSize, d = o.initiatorType, h = o.duration;
          if (f && h && Oa(d)) {
            for (d = 0, h = o.responseEnd, i += 1; i < a.length; i++) {
              var y = a[i], p = y.startTime;
              if (p > h) break;
              var R = y.transferSize, C = y.initiatorType;
              R && Oa(C) && (y = y.responseEnd, d += R * (y < h ? 1 : (h - p) / (y - p)));
            }
            if (--i, t += 8 * (f + d) / (o.duration / 1e3), e++, 10 < e) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
    }
    function dr(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function sg(e) {
      switch (e) {
        case ke:
          return vm;
        case Qe:
          return xv;
        default:
          return _o;
      }
    }
    function gi(e, t) {
      if (e === _o)
        switch (t) {
          case "svg":
            return vm;
          case "math":
            return xv;
          default:
            return _o;
        }
      return e === vm && t === "foreignObject" ? _o : e;
    }
    function Af(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ky() {
      var e = window.event;
      return e && e.type === "popstate" ? e === m1 ? !1 : (m1 = e, !0) : (m1 = null, !1);
    }
    function xu() {
      var e = window.event;
      return e && e !== r0 ? e.type : null;
    }
    function Of() {
      var e = window.event;
      return e && e !== r0 ? e.timeStamp : -1.1;
    }
    function rg(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function dg(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function hg() {
    }
    function Sh(e, t, a, i) {
      Rl(e, t, a, i), e[Da] = i;
    }
    function bh(e) {
      Dc(e, "");
    }
    function aS(e, t, a) {
      e.nodeValue = a;
    }
    function mg(e) {
      if (!e.__reactWarnedAboutChildrenConflict) {
        var t = e[Da] || null;
        if (t !== null) {
          var a = ue(e);
          a !== null && (typeof t.children == "string" || typeof t.children == "number" ? (e.__reactWarnedAboutChildrenConflict = !0, se(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })) : t.dangerouslySetInnerHTML != null && (e.__reactWarnedAboutChildrenConflict = !0, se(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })));
        }
      }
    }
    function oc(e) {
      return e === "head";
    }
    function yg(e, t) {
      e.removeChild(t);
    }
    function pg(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function no(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === s0 || a === jv) {
            if (i === 0) {
              e.removeChild(o), oo(t);
              return;
            }
            i--;
          } else if (a === f0 || a === cs || a === kr || a === gm || a === $r)
            i++;
          else if (a === fT)
            Si(
              e.ownerDocument.documentElement
            );
          else if (a === rT) {
            a = e.ownerDocument.head, Si(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[Gf] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === sT && Si(e.ownerDocument.body);
        a = o;
      } while (a);
      oo(t);
    }
    function hr(e, t) {
      var a = e;
      e = 0;
      do {
        var i = a.nextSibling;
        if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), i && i.nodeType === 8)
          if (a = i.data, a === s0) {
            if (e === 0) break;
            e--;
          } else
            a !== f0 && a !== cs && a !== kr && a !== gm || e++;
        a = i;
      } while (a);
    }
    function gg(e) {
      hr(e, !0);
    }
    function vg(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Sg(e) {
      e.nodeValue = "";
    }
    function bg(e) {
      hr(e, !1);
    }
    function Eg(e, t) {
      t = t[dT], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function Tg(e, t) {
      e.nodeValue = t;
    }
    function zf(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            zf(a), U(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function Ag(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[Gf])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          pt(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = an(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Og(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = an(e.nextSibling), e === null)) return null;
      return e;
    }
    function Dt(e, t) {
      for (; e.nodeType !== 8; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = an(e.nextSibling), e === null)) return null;
      return e;
    }
    function mr(e) {
      return e.data === cs || e.data === kr;
    }
    function Wy(e) {
      return e.data === gm || e.data === cs && e.ownerDocument.readyState !== r2;
    }
    function zg(e, t) {
      var a = e.ownerDocument;
      if (e.data === kr)
        e._reactRetry = t;
      else if (e.data !== cs || a.readyState !== r2)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function an(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === f0 || t === gm || t === cs || t === kr || t === $r || t === r1 || t === s2)
            break;
          if (t === s0 || t === jv)
            return null;
        }
      }
      return e;
    }
    function Dg(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[pi(f.name)] = f.name.toLowerCase() === "style" ? cc(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? e.data === $r ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : e.nodeValue;
    }
    function Rg(e, t, a) {
      return a === null || a[oT] !== !0 ? (e.nodeValue === t ? e = null : (t = Fn(t), e = Fn(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function Df(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === s0 || a === jv) {
            if (t === 0)
              return an(e.nextSibling);
            t--;
          } else
            a !== f0 && a !== gm && a !== cs && a !== kr && a !== $r || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function uo(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === f0 || a === gm || a === cs || a === kr || a === $r) {
            if (t === 0) return e;
            t--;
          } else
            a !== s0 && a !== jv || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function Fy(e) {
      oo(e);
    }
    function Eh(e) {
      oo(e);
    }
    function Iy(e) {
      oo(e);
    }
    function vi(e, t, a, i, o) {
      switch (o && ps(e, i.ancestorInfo), t = dr(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function Bu(e, t, a, i) {
      if (!a[Ei] && ue(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      Wt(a, e, t), a[Ft] = i, a[Da] = t;
    }
    function Si(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      U(e);
    }
    function Th(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Py(e, t, a) {
      var i = Sm;
      if (i && typeof t == "string" && t) {
        var o = Mt(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), g2.has(o) || (g2.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), Wt(t, "link", e), pe(t), i.head.appendChild(t)));
      }
    }
    function ep(e, t, a, i) {
      var o = (o = nn.current) ? Th(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = io(a.href), t = Ce(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = io(a.href);
            var f = Ce(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Fr, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              pr(e)
            )) && !f._p && (d.instance = f, d.state.loading = d0 | Fu), !Iu.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              Iu.set(e, h), f || _g(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + yr(t) + `
  + ` + yr(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + yr(t) + `
  + ` + yr(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = co(a), t = Ce(o).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function yr(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : un.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : un.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : un.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function io(e) {
      return 'href="' + Mt(e) + '"';
    }
    function pr(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function Ah(e) {
      return Fe({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function _g(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = d0 : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= d0;
      }), t.addEventListener("error", function() {
        return i.loading |= y2;
      }), Wt(t, "link", a), pe(t), e.head.appendChild(t));
    }
    function co(e) {
      return '[src="' + Mt(e) + '"]';
    }
    function gr(e) {
      return "script[async]" + e;
    }
    function Oh(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + Mt(a.href) + '"]'
            );
            if (i)
              return t.instance = i, pe(i), i;
            var o = Fe({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), pe(i), Wt(i, "style", o), Rf(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = io(a.href);
            var f = e.querySelector(
              pr(o)
            );
            if (f)
              return t.state.loading |= Fu, t.instance = f, pe(f), f;
            i = Ah(a), (o = Iu.get(o)) && tp(i, o), f = (e.ownerDocument || e).createElement("link"), pe(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), Wt(f, "link", i), t.state.loading |= Fu, Rf(f, a.precedence, e), t.instance = f;
          case "script":
            return f = co(a.src), (o = e.querySelector(
              gr(f)
            )) ? (t.instance = o, pe(o), o) : (i = a, (o = Iu.get(f)) && (i = Fe({}, a), lp(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), pe(o), Wt(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & Fu) === Fr && (i = t.instance, t.state.loading |= Fu, Rf(i, a.precedence, e));
      return t.instance;
    }
    function Rf(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function tp(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function lp(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function _f(e, t, a) {
      if (Bv === null) {
        var i = /* @__PURE__ */ new Map(), o = Bv = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = Bv, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Gf] || f[Ft] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== ke) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function Mg(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function Cg(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === vm || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = og(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function ut(e) {
      return !(e.type === "stylesheet" && (e.state.loading & p2) === Fr);
    }
    function ap(e, t, a, i) {
      if (a.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (a.state.loading & Fu) === Fr) {
        if (a.instance === null) {
          var o = io(i.href), f = t.querySelector(
            pr(o)
          );
          if (f) {
            t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Mf.bind(e), t.then(e, e)), a.state.loading |= Fu, a.instance = f, pe(f);
            return;
          }
          f = t.ownerDocument || t, i = Ah(i), (o = Iu.get(o)) && tp(i, o), f = f.createElement("link"), pe(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), Wt(f, "link", i), a.instance = f;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & p2) === Fr && (e.count++, a = Mf.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
      }
    }
    function zh(e, t) {
      return e.stylesheets && e.count === 0 && vr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
        var i = setTimeout(function() {
          if (e.stylesheets && vr(e, e.stylesheets), e.unsuspend) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        }, yT + t);
        0 < e.imgBytes && p1 === 0 && (p1 = 125 * fg() * gT);
        var o = setTimeout(
          function() {
            if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && vr(e, e.stylesheets), e.unsuspend)) {
              var f = e.unsuspend;
              e.unsuspend = null, f();
            }
          },
          (e.imgBytes > p1 ? 50 : pT) + t
        );
        return e.unsuspend = a, function() {
          e.unsuspend = null, clearTimeout(i), clearTimeout(o);
        };
      } : null;
    }
    function Mf() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          vr(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function vr(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, qv = /* @__PURE__ */ new Map(), t.forEach(np, e), qv = null, Mf.call(e));
    }
    function np(e, t) {
      if (!(t.state.loading & Fu)) {
        var a = qv.get(e);
        if (a) var i = a.get(g1);
        else {
          a = /* @__PURE__ */ new Map(), qv.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(g1, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(g1, o), a.set(d, o), this.count++, i = Mf.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= Fu;
      }
    }
    function Sr(e, t, a, i, o, f, d, h, y) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Wr, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ho(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ho(0), this.hiddenUpdates = Ho(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function br(e, t, a, i, o, f, d, h, y, p, R, C) {
      return e = new Sr(
        e,
        t,
        a,
        d,
        y,
        p,
        R,
        C,
        h
      ), t = LE, f === !0 && (t |= Ba | Ti), t |= Ie, f = N(3, null, null, t), e.current = f, f.stateNode = e, t = Od(), Bc(t), e.pooledCache = t, Bc(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, it(f), e;
    }
    function Ug(e) {
      return e ? (e = Jf, e) : Jf;
    }
    function Dh(e, t, a, i, o, f) {
      if (_l && typeof _l.onScheduleFiberRoot == "function")
        try {
          _l.onScheduleFiberRoot(ho, i, a);
        } catch (d) {
          Yu || (Yu = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = Ug(o), i.context === null ? i.context = o : i.pendingContext = o, qu && xa !== null && !E2 && (E2 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        he(xa) || "Unknown"
      )), i = zl(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = Su(e, i, t), a !== null && (pu(t, "root.render()", null), Be(a, e, t), Tn(a, e, t));
    }
    function Hg(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function up(e, t) {
      Hg(e, t), (e = e.alternate) && Hg(e, t);
    }
    function ip(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = aa(e, 67108864);
        t !== null && Be(t, e, 67108864), up(e, 67108864);
      }
    }
    function cp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = ua(e);
        t = hn(t);
        var a = aa(e, t);
        a !== null && Be(a, e, t), up(e, t);
      }
    }
    function Ht() {
      return xa;
    }
    function op(e, t, a, i) {
      var o = X.T;
      X.T = null;
      var f = Et.p;
      try {
        Et.p = Ml, fp(e, t, a, i);
      } finally {
        Et.p = f, X.T = o;
      }
    }
    function kl(e, t, a, i) {
      var o = X.T;
      X.T = null;
      var f = Et.p;
      try {
        Et.p = Fl, fp(e, t, a, i);
      } finally {
        Et.p = f, X.T = o;
      }
    }
    function fp(e, t, a, i) {
      if (wv) {
        var o = Rh(i);
        if (o === null)
          kn(
            e,
            t,
            i,
            Gv,
            a
          ), Mh(e, i);
        else if (Ng(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (Mh(e, i), t & 4 && -1 < ST.indexOf(e)) {
          for (; o !== null; ) {
            var f = ue(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = ou(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - Wl(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      Ua(f), (mt & (Pl | uu)) === sa && (Tv = Gl() + kb, Hu(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = aa(f, 2), h !== null && Be(h, f, 2), ln(), up(f, 2);
              }
            if (f = Rh(i), f === null && kn(
              e,
              t,
              i,
              Gv,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          kn(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function Rh(e) {
      return e = Nn(e), sp(e);
    }
    function sp(e) {
      if (Gv = null, e = te(e), e !== null) {
        var t = nt(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = Al(t), e !== null) return e;
            e = null;
          } else if (a === 31) {
            if (e = xt(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return Gv = e, null;
    }
    function _h(e) {
      switch (e) {
        case "beforetoggle":
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
        case "toggle":
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
          return Ml;
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
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Fl;
        case "message":
          switch (Dr()) {
            case bp:
              return Ml;
            case Yh:
              return Fl;
            case ro:
            case wg:
              return ca;
            case wh:
              return hc;
            default:
              return ca;
          }
        default:
          return ca;
      }
    }
    function Mh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          os = null;
          break;
        case "dragenter":
        case "dragleave":
          fs = null;
          break;
        case "mouseover":
        case "mouseout":
          ss = null;
          break;
        case "pointerover":
        case "pointerout":
          m0.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          y0.delete(t.pointerId);
      }
    }
    function fc(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = ue(t), t !== null && ip(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Ng(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return os = fc(
            os,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return fs = fc(
            fs,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return ss = fc(
            ss,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return m0.set(
            f,
            fc(
              m0.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, y0.set(
            f,
            fc(
              y0.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function rp(e) {
      var t = te(e.target);
      if (t !== null) {
        var a = nt(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = Al(a), t !== null) {
              e.blockedOn = t, g(e.priority, function() {
                cp(a);
              });
              return;
            }
          } else if (t === 31) {
            if (t = xt(a), t !== null) {
              e.blockedOn = t, g(e.priority, function() {
                cp(a);
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Cf(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = Rh(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          zp !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), zp = o, a.target.dispatchEvent(i), zp === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), zp = null;
        } else
          return t = ue(a), t !== null && ip(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function Ch(e, t, a) {
      Cf(e) && a.delete(t);
    }
    function nS() {
      v1 = !1, os !== null && Cf(os) && (os = null), fs !== null && Cf(fs) && (fs = null), ss !== null && Cf(ss) && (ss = null), m0.forEach(Ch), y0.forEach(Ch);
    }
    function Er(e, t) {
      e.blockedOn === t && (e.blockedOn = null, v1 || (v1 = !0, pl.unstable_scheduleCallback(
        pl.unstable_NormalPriority,
        nS
      )));
    }
    function jg(e) {
      Lv !== e && (Lv = e, pl.unstable_scheduleCallback(
        pl.unstable_NormalPriority,
        function() {
          Lv === e && (Lv = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (sp(i || a) === null)
                continue;
              break;
            }
            var f = ue(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), ri(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function oo(e) {
      function t(y) {
        return Er(y, e);
      }
      os !== null && Er(os, e), fs !== null && Er(fs, e), ss !== null && Er(ss, e), m0.forEach(t), y0.forEach(t);
      for (var a = 0; a < rs.length; a++) {
        var i = rs[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < rs.length && (a = rs[0], a.blockedOn === null); )
        rp(a), a.blockedOn === null && rs.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[Da] || null;
          if (typeof f == "function")
            d || jg(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[Da] || null)
                h = d.formAction;
              else if (sp(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), jg(a);
          }
        }
    }
    function xg() {
      function e(f) {
        f.canIntercept && f.info === "react-transition" && f.intercept({
          handler: function() {
            return new Promise(function(d) {
              return o = d;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function t() {
        o !== null && (o(), o = null), i || setTimeout(a, 20);
      }
      function a() {
        if (!i && !navigation.transition) {
          var f = navigation.currentEntry;
          f && f.url != null && navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var i = !1, o = null;
        return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
          i = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener(
            "navigatesuccess",
            t
          ), navigation.removeEventListener(
            "navigateerror",
            t
          ), o !== null && (o(), o = null);
        };
      }
    }
    function dp(e) {
      this._internalRoot = e;
    }
    function In(e) {
      this._internalRoot = e;
    }
    function hp(e) {
      e[Ei] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var pl = W2(), Tr = bm(), uS = F2(), Fe = Object.assign, Bg = Symbol.for("react.element"), Dn = Symbol.for("react.transitional.element"), sc = Symbol.for("react.portal"), Uf = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Ar = Symbol.for("react.profiler"), Uh = Symbol.for("react.consumer"), Pn = Symbol.for("react.context"), Hf = Symbol.for("react.forward_ref"), fo = Symbol.for("react.suspense"), ja = Symbol.for("react.suspense_list"), Or = Symbol.for("react.memo"), ia = Symbol.for("react.lazy"), eu = Symbol.for("react.activity"), iS = Symbol.for("react.memo_cache_sentinel"), qg = Symbol.iterator, Nf = Symbol.for("react.client.reference"), El = Array.isArray, X = Tr.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Et = uS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, cS = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), mp = [], yp = [], bi = -1, rc = Bt(null), jf = Bt(null), nn = Bt(null), dc = Bt(null), xf = 0, Yg, so, Bf, pp, zr, Hh, Nh;
    Re.__reactDisabledLog = !0;
    var qf, gp, jh = !1, vp = new (typeof WeakMap == "function" ? WeakMap : Map)(), xa = null, qu = !1, un = Object.prototype.hasOwnProperty, Sp = pl.unstable_scheduleCallback, xh = pl.unstable_cancelCallback, Bh = pl.unstable_shouldYield, qh = pl.unstable_requestPaint, Gl = pl.unstable_now, Dr = pl.unstable_getCurrentPriorityLevel, bp = pl.unstable_ImmediatePriority, Yh = pl.unstable_UserBlockingPriority, ro = pl.unstable_NormalPriority, wg = pl.unstable_LowPriority, wh = pl.unstable_IdlePriority, Ep = pl.log, Gg = pl.unstable_setDisableYieldValue, ho = null, _l = null, Yu = !1, wu = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Wl = Math.clz32 ? Math.clz32 : Ci, Tp = Math.log, Gh = Math.LN2, Yf = 256, Rr = 262144, wf = 4194304, Ml = 2, Fl = 8, ca = 32, hc = 268435456, Rn = Math.random().toString(36).slice(2), Ft = "__reactFiber$" + Rn, Da = "__reactProps$" + Rn, Ei = "__reactContainer$" + Rn, mo = "__reactEvents$" + Rn, oS = "__reactListeners$" + Rn, Lg = "__reactHandles$" + Rn, _r = "__reactResources$" + Rn, Gf = "__reactMarker$" + Rn, Xg = /* @__PURE__ */ new Set(), Gu = {}, Lf = {}, Qg = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Xf = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Ap = {}, Lh = {}, Xh = /[\n"\\]/g, Op = !1, Vg = !1, Mr = !1, l = !1, n = !1, u = !1, c = ["value", "defaultValue"], s = !1, r = /["'&<>\n\t]|^\s|\s$/, m = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), v = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), A = v.concat(["button"]), B = "dd dt li option optgroup p rp rt".split(" "), V = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, $ = {}, Y = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, Q = /([A-Z])/g, de = /^ms-/, _e = /^(?:webkit|moz|o)[A-Z]/, Nt = /^-ms-/, H = /-(.)/g, _ = /;\s*$/, j = {}, K = {}, Ae = !1, ht = !1, ge = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Qe = "http://www.w3.org/1998/Math/MathML", ke = "http://www.w3.org/2000/svg", vt = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), tu = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Zg = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0,
      "aria-braillelabel": 0,
      "aria-brailleroledescription": 0,
      "aria-colindextext": 0,
      "aria-rowindextext": 0
    }, Qh = {}, P2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), eE = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), A1 = !1, cn = {}, O1 = /^on./, tE = /^on[^A-Z]/, lE = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), aE = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), nE = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, zp = null, Vh = null, Zh = null, fS = !1, mc = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), sS = !1;
    if (mc)
      try {
        var Dp = {};
        Object.defineProperty(Dp, "passive", {
          get: function() {
            sS = !0;
          }
        }), window.addEventListener("test", Dp, Dp), window.removeEventListener("test", Dp, Dp);
      } catch {
        sS = !1;
      }
    var Qf = null, rS = null, Jg = null, Cr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Kg = Nl(Cr), Rp = Fe({}, Cr, { view: 0, detail: 0 }), uE = Nl(Rp), dS, hS, _p, $g = Fe({}, Rp, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: bs,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== _p && (_p && e.type === "mousemove" ? (dS = e.screenX - _p.screenX, hS = e.screenY - _p.screenY) : hS = dS = 0, _p = e), dS);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : hS;
      }
    }), z1 = Nl($g), iE = Fe({}, $g, { dataTransfer: 0 }), cE = Nl(iE), oE = Fe({}, Rp, { relatedTarget: 0 }), mS = Nl(oE), fE = Fe({}, Cr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), sE = Nl(fE), rE = Fe({}, Cr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), dE = Nl(rE), hE = Fe({}, Cr, { data: 0 }), D1 = Nl(
      hE
    ), mE = D1, yE = {
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
    }, pE = {
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
    }, gE = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, vE = Fe({}, Rp, {
      key: function(e) {
        if (e.key) {
          var t = yE[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = Ss(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? pE[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: bs,
      charCode: function(e) {
        return e.type === "keypress" ? Ss(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Ss(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), SE = Nl(vE), bE = Fe({}, $g, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), R1 = Nl(bE), EE = Fe({}, Rp, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: bs
    }), TE = Nl(EE), AE = Fe({}, Cr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), OE = Nl(AE), zE = Fe({}, $g, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), DE = Nl(zE), RE = Fe({}, Cr, {
      newState: 0,
      oldState: 0
    }), _E = Nl(RE), ME = [9, 13, 27, 32], _1 = 229, yS = mc && "CompositionEvent" in window, Mp = null;
    mc && "documentMode" in document && (Mp = document.documentMode);
    var CE = mc && "TextEvent" in window && !Mp, M1 = mc && (!yS || Mp && 8 < Mp && 11 >= Mp), C1 = 32, U1 = String.fromCharCode(C1), H1 = !1, Jh = !1, UE = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }, Cp = null, Up = null, N1 = !1;
    mc && (N1 = hd("input") && (!document.documentMode || 9 < document.documentMode));
    var on = typeof Object.is == "function" ? Object.is : md, HE = mc && "documentMode" in document && 11 >= document.documentMode, Kh = null, pS = null, Hp = null, gS = !1, $h = {
      animationend: _c("Animation", "AnimationEnd"),
      animationiteration: _c("Animation", "AnimationIteration"),
      animationstart: _c("Animation", "AnimationStart"),
      transitionrun: _c("Transition", "TransitionRun"),
      transitionstart: _c("Transition", "TransitionStart"),
      transitioncancel: _c("Transition", "TransitionCancel"),
      transitionend: _c("Transition", "TransitionEnd")
    }, vS = {}, j1 = {};
    mc && (j1 = document.createElement("div").style, "AnimationEvent" in window || (delete $h.animationend.animation, delete $h.animationiteration.animation, delete $h.animationstart.animation), "TransitionEvent" in window || delete $h.transitionend.transition);
    var x1 = Mc("animationend"), B1 = Mc("animationiteration"), q1 = Mc("animationstart"), NE = Mc("transitionrun"), jE = Mc("transitionstart"), xE = Mc("transitioncancel"), Y1 = Mc("transitionend"), w1 = /* @__PURE__ */ new Map(), SS = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    SS.push("scrollEnd");
    var G1 = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var BE = performance, L1 = function() {
        return BE.now();
      };
    else {
      var qE = Date;
      L1 = function() {
        return qE.now();
      };
    }
    var bS = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, YE = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", kg = 0, ES = 1, TS = 2, AS = 3, Wg = "– ", Fg = "+ ", X1 = "  ", It = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", Lu = "Components ⚛", ft = "Scheduler ⚛", dt = "Blocking", Vf = !1, yo = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: Lu
    }, Zf = {
      start: -0,
      end: -0,
      detail: { devtools: yo }
    }, wE = ["Changed Props", ""], Q1 = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", GE = ["Changed Props", Q1], Np = 1, po = 2, Xu = [], kh = 0, OS = 0, Jf = {};
    Object.freeze(Jf);
    var Qu = null, Wh = null, xe = 0, LE = 1, Ie = 2, Ba = 8, Ti = 16, XE = 32, V1 = !1;
    try {
      var Z1 = Object.preventExtensions({});
    } catch {
      V1 = !0;
    }
    var zS = /* @__PURE__ */ new WeakMap(), Fh = [], Ih = 0, Ig = null, jp = 0, Vu = [], Zu = 0, Ur = null, go = 1, vo = "", Ra = null, Pt = null, ot = !1, yc = !1, lu = null, Kf = null, Ju = !1, DS = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), RS = Bt(null), _S = Bt(null), J1 = {}, Pg = null, Ph = null, em = !1, QE = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, VE = pl.unstable_scheduleCallback, ZE = pl.unstable_NormalPriority, Ll = {
      $$typeof: Pn,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Xl = pl.unstable_now, ev = console.createTask ? console.createTask : function() {
      return null;
    }, xp = 1, tv = 2, oa = -0, $f = -0, So = -0, bo = null, fn = -1.1, Hr = -0, sl = -0, De = -1.1, Ue = -1.1, ul = null, gl = !1, Nr = -0, pc = -1.1, Bp = null, kf = 0, MS = null, CS = null, jr = -1.1, qp = null, tm = -1.1, lv = -1.1, Eo = -0, To = -1.1, Ku = -1.1, US = 0, Yp = null, K1 = null, $1 = null, Wf = -1.1, xr = null, Ff = -1.1, av = -1.1, k1 = -0, W1 = -0, nv = 0, JE = null, F1 = 0, wp = -1.1, uv = !1, iv = !1, Gp = null, HS = 0, Br = 0, lm = null, I1 = X.S;
    X.S = function(e, t) {
      if (Kb = Gl(), typeof t == "object" && t !== null && typeof t.then == "function") {
        if (0 > To && 0 > Ku) {
          To = Xl();
          var a = Of(), i = xu();
          (a !== Ff || i !== xr) && (Ff = -1.1), Wf = a, xr = i;
        }
        ni(e, t);
      }
      I1 !== null && I1(e, t);
    };
    var qr = Bt(null), Ai = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, Lp = [], Xp = [], Qp = [], Vp = [], Zp = [], Jp = [], Yr = /* @__PURE__ */ new Set();
    Ai.recordUnsafeLifecycleWarnings = function(e, t) {
      Yr.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Lp.push(e), e.mode & Ba && typeof t.UNSAFE_componentWillMount == "function" && Xp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Qp.push(e), e.mode & Ba && typeof t.UNSAFE_componentWillReceiveProps == "function" && Vp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Zp.push(e), e.mode & Ba && typeof t.UNSAFE_componentWillUpdate == "function" && Jp.push(e));
    }, Ai.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < Lp.length && (Lp.forEach(function(h) {
        e.add(
          he(h) || "Component"
        ), Yr.add(h.type);
      }), Lp = []);
      var t = /* @__PURE__ */ new Set();
      0 < Xp.length && (Xp.forEach(function(h) {
        t.add(
          he(h) || "Component"
        ), Yr.add(h.type);
      }), Xp = []);
      var a = /* @__PURE__ */ new Set();
      0 < Qp.length && (Qp.forEach(function(h) {
        a.add(
          he(h) || "Component"
        ), Yr.add(h.type);
      }), Qp = []);
      var i = /* @__PURE__ */ new Set();
      0 < Vp.length && (Vp.forEach(
        function(h) {
          i.add(
            he(h) || "Component"
          ), Yr.add(h.type);
        }
      ), Vp = []);
      var o = /* @__PURE__ */ new Set();
      0 < Zp.length && (Zp.forEach(function(h) {
        o.add(
          he(h) || "Component"
        ), Yr.add(h.type);
      }), Zp = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < Jp.length && (Jp.forEach(function(h) {
        f.add(
          he(h) || "Component"
        ), Yr.add(h.type);
      }), Jp = []), 0 < t.size) {
        var d = q(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = q(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = q(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = q(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = q(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = q(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var cv = /* @__PURE__ */ new Map(), P1 = /* @__PURE__ */ new Set();
    Ai.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & Ba && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !P1.has(e.type) && (i = cv.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], cv.set(a, i)), i.push(e));
    }, Ai.flushLegacyContextWarning = function() {
      cv.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(he(o) || "Component"), P1.add(o.type);
          });
          var i = q(a);
          se(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, Ai.discardPendingWarnings = function() {
      Lp = [], Xp = [], Qp = [], Vp = [], Zp = [], Jp = [], cv = /* @__PURE__ */ new Map();
    };
    var eb = {
      react_stack_bottom_frame: function(e, t, a) {
        var i = qu;
        qu = !0;
        try {
          return e(t, a);
        } finally {
          qu = i;
        }
      }
    }, NS = eb.react_stack_bottom_frame.bind(eb), tb = {
      react_stack_bottom_frame: function(e) {
        var t = qu;
        qu = !0;
        try {
          return e.render();
        } finally {
          qu = t;
        }
      }
    }, lb = tb.react_stack_bottom_frame.bind(tb), ab = {
      react_stack_bottom_frame: function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          $e(e, e.return, a);
        }
      }
    }, jS = ab.react_stack_bottom_frame.bind(
      ab
    ), nb = {
      react_stack_bottom_frame: function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          $e(e, e.return, f);
        }
      }
    }, ub = nb.react_stack_bottom_frame.bind(
      nb
    ), ib = {
      react_stack_bottom_frame: function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, KE = ib.react_stack_bottom_frame.bind(
      ib
    ), cb = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          $e(e, t, i);
        }
      }
    }, ob = cb.react_stack_bottom_frame.bind(
      cb
    ), fb = {
      react_stack_bottom_frame: function(e) {
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, $E = fb.react_stack_bottom_frame.bind(fb), sb = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a();
        } catch (i) {
          $e(e, t, i);
        }
      }
    }, kE = sb.react_stack_bottom_frame.bind(sb), rb = {
      react_stack_bottom_frame: function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, WE = rb.react_stack_bottom_frame.bind(rb), am = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), xS = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), ov = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), fv = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, wr = null, Kp = !1, nm = null, $p = 0, Pe = null, BS, db = BS = !1, hb = {}, mb = {}, yb = {};
    Ne = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = he(e), o = i || "null";
        if (!hb[o]) {
          hb[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = he(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = he(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), se(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var Gr = xl(!0), pb = xl(!1), gb = 0, vb = 1, Sb = 2, qS = 3, If = !1, bb = !1, YS = null, wS = !1, um = Bt(null), sv = Bt(0), au = Bt(null), $u = null, im = 1, kp = 2, Cl = Bt(0), rv = 0, ku = 1, sn = 2, nu = 4, rn = 8, cm, Eb = /* @__PURE__ */ new Set(), Tb = /* @__PURE__ */ new Set(), GS = /* @__PURE__ */ new Set(), Ab = /* @__PURE__ */ new Set(), Ao = 0, Ye = null, Lt = null, Ql = null, dv = !1, om = !1, Lr = !1, hv = 0, Wp = 0, Oo = null, FE = 0, IE = 25, G = null, Wu = null, zo = -1, Fp = !1, Ip = {
      readContext: St,
      use: oi,
      useCallback: ol,
      useContext: ol,
      useEffect: ol,
      useImperativeHandle: ol,
      useLayoutEffect: ol,
      useInsertionEffect: ol,
      useMemo: ol,
      useReducer: ol,
      useRef: ol,
      useState: ol,
      useDebugValue: ol,
      useDeferredValue: ol,
      useTransition: ol,
      useSyncExternalStore: ol,
      useId: ol,
      useHostTransitionStatus: ol,
      useFormState: ol,
      useActionState: ol,
      useOptimistic: ol,
      useMemoCache: ol,
      useCacheRefresh: ol
    };
    Ip.useEffectEvent = ol;
    var LS = null, Ob = null, XS = null, zb = null, gc = null, Oi = null, mv = null;
    LS = {
      readContext: function(e) {
        return St(e);
      },
      use: oi,
      useCallback: function(e, t) {
        return G = "useCallback", qe(), ci(t), xd(e, t);
      },
      useContext: function(e) {
        return G = "useContext", qe(), St(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", qe(), ci(t), Jc(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", qe(), ci(a), Au(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        G = "useInsertionEffect", qe(), ci(t), Ii(4, sn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", qe(), ci(t), ga(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", qe(), ci(t);
        var a = X.H;
        X.H = gc;
        try {
          return va(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", qe();
        var i = X.H;
        X.H = gc;
        try {
          return Po(e, t, a);
        } finally {
          X.H = i;
        }
      },
      useRef: function(e) {
        return G = "useRef", qe(), jd(e);
      },
      useState: function(e) {
        G = "useState", qe();
        var t = X.H;
        X.H = gc;
        try {
          return $i(e);
        } finally {
          X.H = t;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", qe();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", qe(), nf(e, t);
      },
      useTransition: function() {
        return G = "useTransition", qe(), Pi();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", qe(), ef(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", qe(), Vs();
      },
      useFormState: function(e, t) {
        return G = "useFormState", qe(), Ns(), Fa(e, t);
      },
      useActionState: function(e, t) {
        return G = "useActionState", qe(), Fa(e, t);
      },
      useOptimistic: function(e) {
        return G = "useOptimistic", qe(), Zc(e);
      },
      useHostTransitionStatus: di,
      useMemoCache: ka,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", qe(), Bd();
      },
      useEffectEvent: function(e) {
        return G = "useEffectEvent", qe(), Xs(e);
      }
    }, Ob = {
      readContext: function(e) {
        return St(e);
      },
      use: oi,
      useCallback: function(e, t) {
        return G = "useCallback", W(), xd(e, t);
      },
      useContext: function(e) {
        return G = "useContext", W(), St(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", W(), Jc(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", W(), Au(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        G = "useInsertionEffect", W(), Ii(4, sn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", W(), ga(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", W();
        var a = X.H;
        X.H = gc;
        try {
          return va(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", W();
        var i = X.H;
        X.H = gc;
        try {
          return Po(e, t, a);
        } finally {
          X.H = i;
        }
      },
      useRef: function(e) {
        return G = "useRef", W(), jd(e);
      },
      useState: function(e) {
        G = "useState", W();
        var t = X.H;
        X.H = gc;
        try {
          return $i(e);
        } finally {
          X.H = t;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", W();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", W(), nf(e, t);
      },
      useTransition: function() {
        return G = "useTransition", W(), Pi();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", W(), ef(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", W(), Vs();
      },
      useActionState: function(e, t) {
        return G = "useActionState", W(), Fa(e, t);
      },
      useFormState: function(e, t) {
        return G = "useFormState", W(), Ns(), Fa(e, t);
      },
      useOptimistic: function(e) {
        return G = "useOptimistic", W(), Zc(e);
      },
      useHostTransitionStatus: di,
      useMemoCache: ka,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", W(), Bd();
      },
      useEffectEvent: function(e) {
        return G = "useEffectEvent", W(), Xs(e);
      }
    }, XS = {
      readContext: function(e) {
        return St(e);
      },
      use: oi,
      useCallback: function(e, t) {
        return G = "useCallback", W(), Vn(e, t);
      },
      useContext: function(e) {
        return G = "useContext", W(), St(e);
      },
      useEffect: function(e, t) {
        G = "useEffect", W(), Dl(2048, rn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", W(), af(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", W(), Dl(4, sn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", W(), Dl(4, nu, e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", W();
        var a = X.H;
        X.H = Oi;
        try {
          return kt(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", W();
        var i = X.H;
        X.H = Oi;
        try {
          return Xc(e, t, a);
        } finally {
          X.H = i;
        }
      },
      useRef: function() {
        return G = "useRef", W(), At().memoizedState;
      },
      useState: function() {
        G = "useState", W();
        var e = X.H;
        X.H = Oi;
        try {
          return Xc(Wa);
        } finally {
          X.H = e;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", W();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", W(), Ou(e, t);
      },
      useTransition: function() {
        return G = "useTransition", W(), Q0();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", W(), Vc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", W(), At().memoizedState;
      },
      useFormState: function(e) {
        return G = "useFormState", W(), Ns(), Wi(e);
      },
      useActionState: function(e) {
        return G = "useActionState", W(), Wi(e);
      },
      useOptimistic: function(e, t) {
        return G = "useOptimistic", W(), ws(e, t);
      },
      useHostTransitionStatus: di,
      useMemoCache: ka,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", W(), At().memoizedState;
      },
      useEffectEvent: function(e) {
        return G = "useEffectEvent", W(), lf(e);
      }
    }, zb = {
      readContext: function(e) {
        return St(e);
      },
      use: oi,
      useCallback: function(e, t) {
        return G = "useCallback", W(), Vn(e, t);
      },
      useContext: function(e) {
        return G = "useContext", W(), St(e);
      },
      useEffect: function(e, t) {
        G = "useEffect", W(), Dl(2048, rn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", W(), af(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", W(), Dl(4, sn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", W(), Dl(4, nu, e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", W();
        var a = X.H;
        X.H = mv;
        try {
          return kt(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", W();
        var i = X.H;
        X.H = mv;
        try {
          return Qc(e, t, a);
        } finally {
          X.H = i;
        }
      },
      useRef: function() {
        return G = "useRef", W(), At().memoizedState;
      },
      useState: function() {
        G = "useState", W();
        var e = X.H;
        X.H = mv;
        try {
          return Qc(Wa);
        } finally {
          X.H = e;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", W();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", W(), Ve(e, t);
      },
      useTransition: function() {
        return G = "useTransition", W(), ll();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", W(), Vc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", W(), At().memoizedState;
      },
      useFormState: function(e) {
        return G = "useFormState", W(), Ns(), Fi(e);
      },
      useActionState: function(e) {
        return G = "useActionState", W(), Fi(e);
      },
      useOptimistic: function(e, t) {
        return G = "useOptimistic", W(), Gs(e, t);
      },
      useHostTransitionStatus: di,
      useMemoCache: ka,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", W(), At().memoizedState;
      },
      useEffectEvent: function(e) {
        return G = "useEffectEvent", W(), lf(e);
      }
    }, gc = {
      readContext: function(e) {
        return F(), St(e);
      },
      use: function(e) {
        return le(), oi(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", le(), qe(), xd(e, t);
      },
      useContext: function(e) {
        return G = "useContext", le(), qe(), St(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", le(), qe(), Jc(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", le(), qe(), Au(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        G = "useInsertionEffect", le(), qe(), Ii(4, sn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", le(), qe(), ga(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", le(), qe();
        var a = X.H;
        X.H = gc;
        try {
          return va(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", le(), qe();
        var i = X.H;
        X.H = gc;
        try {
          return Po(e, t, a);
        } finally {
          X.H = i;
        }
      },
      useRef: function(e) {
        return G = "useRef", le(), qe(), jd(e);
      },
      useState: function(e) {
        G = "useState", le(), qe();
        var t = X.H;
        X.H = gc;
        try {
          return $i(e);
        } finally {
          X.H = t;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", le(), qe();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", le(), qe(), nf(e, t);
      },
      useTransition: function() {
        return G = "useTransition", le(), qe(), Pi();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", le(), qe(), ef(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", le(), qe(), Vs();
      },
      useFormState: function(e, t) {
        return G = "useFormState", le(), qe(), Fa(e, t);
      },
      useActionState: function(e, t) {
        return G = "useActionState", le(), qe(), Fa(e, t);
      },
      useOptimistic: function(e) {
        return G = "useOptimistic", le(), qe(), Zc(e);
      },
      useMemoCache: function(e) {
        return le(), ka(e);
      },
      useHostTransitionStatus: di,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", qe(), Bd();
      },
      useEffectEvent: function(e) {
        return G = "useEffectEvent", le(), qe(), Xs(e);
      }
    }, Oi = {
      readContext: function(e) {
        return F(), St(e);
      },
      use: function(e) {
        return le(), oi(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", le(), W(), Vn(e, t);
      },
      useContext: function(e) {
        return G = "useContext", le(), W(), St(e);
      },
      useEffect: function(e, t) {
        G = "useEffect", le(), W(), Dl(2048, rn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", le(), W(), af(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", le(), W(), Dl(4, sn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", le(), W(), Dl(4, nu, e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", le(), W();
        var a = X.H;
        X.H = Oi;
        try {
          return kt(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", le(), W();
        var i = X.H;
        X.H = Oi;
        try {
          return Xc(e, t, a);
        } finally {
          X.H = i;
        }
      },
      useRef: function() {
        return G = "useRef", le(), W(), At().memoizedState;
      },
      useState: function() {
        G = "useState", le(), W();
        var e = X.H;
        X.H = Oi;
        try {
          return Xc(Wa);
        } finally {
          X.H = e;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", le(), W();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", le(), W(), Ou(e, t);
      },
      useTransition: function() {
        return G = "useTransition", le(), W(), Q0();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", le(), W(), Vc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", le(), W(), At().memoizedState;
      },
      useFormState: function(e) {
        return G = "useFormState", le(), W(), Wi(e);
      },
      useActionState: function(e) {
        return G = "useActionState", le(), W(), Wi(e);
      },
      useOptimistic: function(e, t) {
        return G = "useOptimistic", le(), W(), ws(e, t);
      },
      useMemoCache: function(e) {
        return le(), ka(e);
      },
      useHostTransitionStatus: di,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", W(), At().memoizedState;
      },
      useEffectEvent: function(e) {
        return G = "useEffectEvent", le(), W(), lf(e);
      }
    }, mv = {
      readContext: function(e) {
        return F(), St(e);
      },
      use: function(e) {
        return le(), oi(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", le(), W(), Vn(e, t);
      },
      useContext: function(e) {
        return G = "useContext", le(), W(), St(e);
      },
      useEffect: function(e, t) {
        G = "useEffect", le(), W(), Dl(2048, rn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", le(), W(), af(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", le(), W(), Dl(4, sn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", le(), W(), Dl(4, nu, e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", le(), W();
        var a = X.H;
        X.H = Oi;
        try {
          return kt(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", le(), W();
        var i = X.H;
        X.H = Oi;
        try {
          return Qc(e, t, a);
        } finally {
          X.H = i;
        }
      },
      useRef: function() {
        return G = "useRef", le(), W(), At().memoizedState;
      },
      useState: function() {
        G = "useState", le(), W();
        var e = X.H;
        X.H = Oi;
        try {
          return Qc(Wa);
        } finally {
          X.H = e;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", le(), W();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", le(), W(), Ve(e, t);
      },
      useTransition: function() {
        return G = "useTransition", le(), W(), ll();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", le(), W(), Vc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", le(), W(), At().memoizedState;
      },
      useFormState: function(e) {
        return G = "useFormState", le(), W(), Fi(e);
      },
      useActionState: function(e) {
        return G = "useActionState", le(), W(), Fi(e);
      },
      useOptimistic: function(e, t) {
        return G = "useOptimistic", le(), W(), Gs(e, t);
      },
      useMemoCache: function(e) {
        return le(), ka(e);
      },
      useHostTransitionStatus: di,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", W(), At().memoizedState;
      },
      useEffectEvent: function(e) {
        return G = "useEffectEvent", le(), W(), lf(e);
      }
    };
    var Db = {}, Rb = /* @__PURE__ */ new Set(), _b = /* @__PURE__ */ new Set(), Mb = /* @__PURE__ */ new Set(), Cb = /* @__PURE__ */ new Set(), Ub = /* @__PURE__ */ new Set(), Hb = /* @__PURE__ */ new Set(), Nb = /* @__PURE__ */ new Set(), jb = /* @__PURE__ */ new Set(), xb = /* @__PURE__ */ new Set(), Bb = /* @__PURE__ */ new Set();
    Object.freeze(Db);
    var QS = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = ua(e), o = zl(i);
        o.payload = t, a != null && (Wc(a), o.callback = a), t = Su(e, o, i), t !== null && (pu(i, "this.setState()", e), Be(t, e, i), Tn(t, e, i));
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = ua(e), o = zl(i);
        o.tag = vb, o.payload = t, a != null && (Wc(a), o.callback = a), t = Su(e, o, i), t !== null && (pu(i, "this.replaceState()", e), Be(t, e, i), Tn(t, e, i));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = ua(e), i = zl(a);
        i.tag = Sb, t != null && (Wc(t), i.callback = t), t = Su(e, i, a), t !== null && (pu(a, "this.forceUpdate()", e), Be(t, e, a), Tn(t, e, a));
      }
    }, fm = null, VS = null, ZS = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Vl = !1, qb = {}, Yb = {}, wb = {}, Gb = {}, sm = !1, Lb = {}, yv = {}, JS = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, Xb = !1, Qb = null;
    Qb = /* @__PURE__ */ new Set();
    var Do = !1, Zl = !1, KS = !1, Vb = typeof WeakSet == "function" ? WeakSet : Set, fa = null, rm = null, dm = null, Jl = null, _n = !1, zi = null, Il = !1, Pp = 8192, PE = {
      getCacheForType: function(e) {
        var t = St(Ll), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      cacheSignal: function() {
        return St(Ll).controller.signal;
      },
      getOwner: function() {
        return xa;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var e0 = Symbol.for;
      e0("selector.component"), e0("selector.has_pseudo_class"), e0("selector.role"), e0("selector.test_id"), e0("selector.text");
    }
    var eT = [], tT = typeof WeakMap == "function" ? WeakMap : Map, sa = 0, Pl = 2, uu = 4, Ro = 0, t0 = 1, Xr = 2, pv = 3, Pf = 4, gv = 6, Zb = 5, mt = sa, Xt = null, at = null, et = 0, Mn = 0, vv = 1, Qr = 2, l0 = 3, Jb = 4, $S = 5, a0 = 6, Sv = 7, kS = 8, Vr = 9, jt = Mn, iu = null, es = !1, hm = !1, WS = !1, vc = 0, rl = Ro, ts = 0, ls = 0, FS = 0, Cn = 0, Zr = 0, n0 = null, dn = null, bv = !1, Ev = 0, Kb = 0, $b = 300, Tv = 1 / 0, kb = 500, u0 = null, Tl = null, as = null, Av = 0, IS = 1, PS = 2, Wb = 3, ns = 0, Fb = 1, Ib = 2, Pb = 3, e2 = 4, Ov = 5, Kl = 0, us = null, mm = null, Di = 0, e1 = 0, t1 = -0, l1 = null, t2 = null, l2 = null, Ri = Av, a2 = null, lT = 50, i0 = 0, a1 = null, n1 = !1, zv = !1, aT = 50, Jr = 0, c0 = null, ym = !1, Dv = null, n2 = !1, u2 = /* @__PURE__ */ new Set(), nT = {}, Rv = null, pm = null, u1 = !1, i1 = !1, _v = !1, c1 = !1, is = 0, o1 = {};
    (function() {
      for (var e = 0; e < SS.length; e++) {
        var t = SS[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), jn(a, "on" + t);
      }
      jn(x1, "onAnimationEnd"), jn(B1, "onAnimationIteration"), jn(q1, "onAnimationStart"), jn("dblclick", "onDoubleClick"), jn("focusin", "onFocus"), jn("focusout", "onBlur"), jn(NE, "onTransitionRun"), jn(jE, "onTransitionStart"), jn(xE, "onTransitionCancel"), jn(Y1, "onTransitionEnd");
    })(), Xe("onMouseEnter", ["mouseout", "mouseover"]), Xe("onMouseLeave", ["mouseout", "mouseover"]), Xe("onPointerEnter", ["pointerout", "pointerover"]), Xe("onPointerLeave", ["pointerout", "pointerover"]), tt(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), tt(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), tt("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), tt(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), tt(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), tt(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var o0 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), f1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(o0)
    ), Mv = "_reactListening" + Math.random().toString(36).slice(2), i2 = !1, c2 = !1, Cv = !1, o2 = !1, Uv = !1, Hv = !1, f2 = !1, Nv = {}, uT = /\r\n?/g, iT = /\u0000|\uFFFD/g, Kr = "http://www.w3.org/1999/xlink", s1 = "http://www.w3.org/XML/1998/namespace", cT = "javascript:throw new Error('React form unexpectedly submitted.')", oT = "suppressHydrationWarning", $r = "&", jv = "/&", f0 = "$", s0 = "/$", cs = "$?", kr = "$~", gm = "$!", fT = "html", sT = "body", rT = "head", r1 = "F!", s2 = "F", r2 = "loading", dT = "style", _o = 0, vm = 1, xv = 2, d1 = null, h1 = null, d2 = { dialog: !0, webview: !0 }, m1 = null, r0 = void 0, h2 = typeof setTimeout == "function" ? setTimeout : void 0, hT = typeof clearTimeout == "function" ? clearTimeout : void 0, Wr = -1, m2 = typeof Promise == "function" ? Promise : void 0, mT = typeof queueMicrotask == "function" ? queueMicrotask : typeof m2 < "u" ? function(e) {
      return m2.resolve(null).then(e).catch(rg);
    } : h2, y1 = null, Fr = 0, d0 = 1, y2 = 2, p2 = 3, Fu = 4, Iu = /* @__PURE__ */ new Map(), g2 = /* @__PURE__ */ new Set(), Mo = Et.d;
    Et.d = {
      f: function() {
        var e = Mo.f(), t = ln();
        return e || t;
      },
      r: function(e) {
        var t = ue(e);
        t !== null && t.tag === 5 && t.type === "form" ? uf(t) : Mo.r(e);
      },
      D: function(e) {
        Mo.D(e), Py("dns-prefetch", e, null);
      },
      C: function(e, t) {
        Mo.C(e, t), Py("preconnect", e, t);
      },
      L: function(e, t, a) {
        Mo.L(e, t, a);
        var i = Sm;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + Mt(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Mt(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Mt(
            a.imageSizes
          ) + '"]')) : o += '[href="' + Mt(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = io(e);
              break;
            case "script":
              f = co(e);
          }
          Iu.has(f) || (e = Fe(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), Iu.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            pr(f)
          ) || t === "script" && i.querySelector(gr(f)) || (t = i.createElement("link"), Wt(t, "link", e), pe(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        Mo.m(e, t);
        var a = Sm;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Mt(i) + '"][href="' + Mt(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = co(e);
          }
          if (!Iu.has(f) && (e = Fe({ rel: "modulepreload", href: e }, t), Iu.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(gr(f)))
                  return;
            }
            i = a.createElement("link"), Wt(i, "link", e), pe(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        Mo.X(e, t);
        var a = Sm;
        if (a && e) {
          var i = Ce(a).hoistableScripts, o = co(e), f = i.get(o);
          f || (f = a.querySelector(
            gr(o)
          ), f || (e = Fe({ src: e, async: !0 }, t), (t = Iu.get(o)) && lp(e, t), f = a.createElement("script"), pe(f), Wt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        Mo.S(e, t, a);
        var i = Sm;
        if (i && e) {
          var o = Ce(i).hoistableStyles, f = io(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: Fr, preload: null };
            if (d = i.querySelector(
              pr(f)
            ))
              h.loading = d0 | Fu;
            else {
              e = Fe(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = Iu.get(f)) && tp(e, a);
              var y = d = i.createElement("link");
              pe(y), Wt(y, "link", e), y._p = new Promise(function(p, R) {
                y.onload = p, y.onerror = R;
              }), y.addEventListener("load", function() {
                h.loading |= d0;
              }), y.addEventListener("error", function() {
                h.loading |= y2;
              }), h.loading |= Fu, Rf(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        Mo.M(e, t);
        var a = Sm;
        if (a && e) {
          var i = Ce(a).hoistableScripts, o = co(e), f = i.get(o);
          f || (f = a.querySelector(
            gr(o)
          ), f || (e = Fe({ src: e, async: !0, type: "module" }, t), (t = Iu.get(o)) && lp(e, t), f = a.createElement("script"), pe(f), Wt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var Sm = typeof document > "u" ? null : document, Bv = null, yT = 6e4, pT = 800, gT = 500, p1 = 0, g1 = null, qv = null, Ir = cS, h0 = {
      $$typeof: Pn,
      Provider: null,
      Consumer: null,
      _currentValue: Ir,
      _currentValue2: Ir,
      _threadCount: 0
    }, v2 = "%c%s%c", S2 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", b2 = "", Yv = " ", vT = Function.prototype.bind, E2 = !1, T2 = null, A2 = null, O2 = null, z2 = null, D2 = null, R2 = null, _2 = null, M2 = null, C2 = null, U2 = null;
    T2 = function(e, t, a, i) {
      t = O(e, t), t !== null && (a = L(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Fe({}, e.memoizedProps), a = aa(e, 2), a !== null && Be(a, e, 2));
    }, A2 = function(e, t, a) {
      t = O(e, t), t !== null && (a = ne(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = Fe({}, e.memoizedProps), a = aa(e, 2), a !== null && Be(a, e, 2));
    }, O2 = function(e, t, a, i) {
      t = O(e, t), t !== null && (a = ie(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Fe({}, e.memoizedProps), a = aa(e, 2), a !== null && Be(a, e, 2));
    }, z2 = function(e, t, a) {
      e.pendingProps = L(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = aa(e, 2), t !== null && Be(t, e, 2);
    }, D2 = function(e, t) {
      e.pendingProps = ne(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = aa(e, 2), t !== null && Be(t, e, 2);
    }, R2 = function(e, t, a) {
      e.pendingProps = ie(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = aa(e, 2), t !== null && Be(t, e, 2);
    }, _2 = function(e) {
      var t = aa(e, 2);
      t !== null && Be(t, e, 2);
    }, M2 = function(e) {
      var t = Uo(), a = aa(e, t);
      a !== null && Be(a, e, t);
    }, C2 = function(e) {
      He = e;
    }, U2 = function(e) {
      ve = e;
    };
    var wv = !0, Gv = null, v1 = !1, os = null, fs = null, ss = null, m0 = /* @__PURE__ */ new Map(), y0 = /* @__PURE__ */ new Map(), rs = [], ST = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Lv = null;
    if (In.prototype.render = dp.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : rt(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = ua(i);
      Dh(i, o, a, t, null, null);
    }, In.prototype.unmount = dp.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (mt & (Pl | uu)) !== sa && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), Dh(e.current, 2, null, e, null, null), ln(), t[Ei] = null;
      }
    }, In.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Ui();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < rs.length && t !== 0 && t < rs[a].priority; a++) ;
        rs.splice(a, 0, e), a === 0 && rp(e);
      }
    }, (function() {
      var e = Tr.version;
      if (e !== "19.2.4")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.2.4
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), Et.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = tl(t), e = e !== null ? il(e) : null, e = e === null ? null : e.stateNode, e;
    }, !(function() {
      var e = {
        bundleType: 1,
        version: "19.2.4",
        rendererPackageName: "react-dom",
        currentDispatcherRef: X,
        reconcilerVersion: "19.2.4"
      };
      return e.overrideHookState = T2, e.overrideHookStateDeletePath = A2, e.overrideHookStateRenamePath = O2, e.overrideProps = z2, e.overridePropsDeletePath = D2, e.overridePropsRenamePath = R2, e.scheduleUpdate = _2, e.scheduleRetry = M2, e.setErrorHandler = C2, e.setSuspenseHandler = U2, e.scheduleRefresh = Je, e.scheduleRoot = fe, e.setRefreshHandler = _t, e.getCurrentFiber = Ht, ds(e);
    })() && mc && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var H2 = window.location.protocol;
      /^(https?|file):$/.test(H2) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (H2 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    S0.createRoot = function(e, t) {
      if (!rt(e))
        throw Error("Target container is not a DOM element.");
      hp(e);
      var a = !1, i = "", o = wd, f = Gd, d = cy;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === Dn && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = br(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        null,
        o,
        f,
        d,
        xg
      ), e[Ei] = t.current, ic(e), new dp(t);
    }, S0.hydrateRoot = function(e, t, a) {
      if (!rt(e))
        throw Error("Target container is not a DOM element.");
      hp(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = wd, d = Gd, h = cy, y = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), t = br(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        o,
        y,
        f,
        d,
        h,
        xg
      ), t.context = Ug(null), a = t.current, i = ua(a), i = hn(i), o = zl(i), o.callback = null, Su(a, o, i), pu(i, "hydrateRoot()", null), a = i, t.current.lanes = a, Un(t, a), Ua(t), e[Ei] = t.current, ic(e), new In(t);
    }, S0.version = "19.2.4", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), S0;
}
var K2;
function HT() {
  if (K2) return Vv.exports;
  K2 = 1;
  function O() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
      } catch (L) {
        console.error(L);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (O(), Vv.exports = CT()) : Vv.exports = UT(), Vv.exports;
}
var NT = HT();
const jT = {
  q: "",
  country: "",
  division: "",
  type: "",
  yearFrom: "",
  yearTo: "",
  sort: "enactDate",
  order: "desc",
  page: 1
};
function $2() {
  const O = new URLSearchParams(window.location.search);
  return {
    q: O.get("q") ?? "",
    country: O.get("country") ?? "",
    division: O.get("division") ?? "",
    type: O.get("type") ?? "",
    yearFrom: O.get("yearFrom") ?? "",
    yearTo: O.get("yearTo") ?? "",
    sort: O.get("sort") ?? "enactDate",
    order: O.get("order") ?? "desc",
    page: Math.max(1, parseInt(O.get("page") ?? "1", 10) || 1)
  };
}
function xT(O) {
  const L = new URLSearchParams();
  for (const [ne, ve] of Object.entries(O)) {
    const He = String(ve), le = String(jT[ne]);
    He && He !== le && L.set(ne, He);
  }
  const ie = L.toString(), z = ie ? `?${ie}` : window.location.pathname;
  window.history.replaceState(null, "", z);
}
function BT() {
  const [O, L] = ea.useState($2);
  ea.useEffect(() => {
    const z = () => L($2());
    return window.addEventListener("popstate", z), () => window.removeEventListener("popstate", z);
  }, []);
  const ie = ea.useCallback((z) => {
    L((ne) => {
      const ve = !("page" in z), He = { ...ne, ...z };
      return ve && (He.page = 1), xT(He), He;
    });
  }, []);
  return [O, ie];
}
function qT(O, L) {
  const [ie, z] = ea.useState(O);
  return ea.useEffect(() => {
    const ne = setTimeout(() => z(O), L);
    return () => clearTimeout(ne);
  }, [O, L]), ie;
}
const E1 = "/api";
async function T1(O) {
  const L = await fetch(O);
  if (!L.ok)
    throw new Error(`API error: ${L.status}`);
  return L.json();
}
async function I2() {
  return T1(`${E1}/countries.php`);
}
async function YT(O) {
  const L = O ? `?country=${encodeURIComponent(O)}` : "";
  return T1(`${E1}/divisions.php${L}`);
}
async function wT(O) {
  const L = new URLSearchParams();
  return O.q && L.set("q", O.q), O.country && L.set("country", O.country), O.division && L.set("division", O.division), O.type && L.set("type", O.type), O.yearFrom && L.set("yearFrom", O.yearFrom), O.yearTo && L.set("yearTo", O.yearTo), O.sort && L.set("sort", O.sort), O.order && L.set("order", O.order), L.set("page", String(O.page)), T1(`${E1}/search.php?${L.toString()}`);
}
function GT() {
  return window.__LAWBRARY_CONFIG__ ?? {
    lang: "en",
    translations: {},
    baseDomain: "lawbrary.org"
  };
}
function LT(O) {
  return GT().translations[O] ?? O;
}
function XT({ value: O, onChange: L }) {
  const [ie, z] = ea.useState(O);
  return ea.useEffect(() => {
    z(O);
  }, [O]), /* @__PURE__ */ ee.jsx(
    "input",
    {
      className: "search-input",
      type: "search",
      value: ie,
      onChange: (ne) => {
        z(ne.target.value), L(ne.target.value);
      },
      placeholder: LT("SEARCH") || "Search laws, countries, organizations...",
      autoComplete: "off"
    }
  );
}
function QT({ query: O, onQueryChange: L }) {
  return /* @__PURE__ */ ee.jsxs("header", { className: "app-header", children: [
    /* @__PURE__ */ ee.jsx("a", { className: "header-logo", href: "/", children: /* @__PURE__ */ ee.jsx("img", { src: "/images/favicon.ico", alt: "Lawbrary", width: "40", height: "40" }) }),
    /* @__PURE__ */ ee.jsx("div", { className: "header-title", children: "Lawbrary" }),
    /* @__PURE__ */ ee.jsx("div", { className: "header-search", children: /* @__PURE__ */ ee.jsx(XT, { value: O, onChange: L }) })
  ] });
}
function VT({ country: O, division: L, onCountryChange: ie, onDivisionChange: z }) {
  const [ne, ve] = ea.useState([]), [He, le] = ea.useState([]);
  return ea.useEffect(() => {
    I2().then(ve).catch(console.error);
  }, []), ea.useEffect(() => {
    O ? YT(O).then(le).catch(console.error) : le([]);
  }, [O]), /* @__PURE__ */ ee.jsxs("div", { className: "filter-group", children: [
    /* @__PURE__ */ ee.jsx("label", { className: "filter-label", children: "Jurisdiction" }),
    /* @__PURE__ */ ee.jsxs(
      "select",
      {
        className: "filter-select",
        value: O,
        onChange: (F) => {
          ie(F.target.value), z("");
        },
        children: [
          /* @__PURE__ */ ee.jsx("option", { value: "", children: "All Countries" }),
          ne.map((F) => /* @__PURE__ */ ee.jsxs("option", { value: F.id, children: [
            F.emoji,
            " ",
            F.name
          ] }, F.id))
        ]
      }
    ),
    He.length > 0 && /* @__PURE__ */ ee.jsxs(
      "select",
      {
        className: "filter-select",
        value: L,
        onChange: (F) => z(F.target.value),
        children: [
          /* @__PURE__ */ ee.jsx("option", { value: "", children: "All Divisions" }),
          He.map((F) => /* @__PURE__ */ ee.jsx("option", { value: F.id, children: F.name }, F.id))
        ]
      }
    )
  ] });
}
const ZT = [
  { value: "", label: "All Types" },
  { value: "law", label: "Laws" },
  { value: "country", label: "Countries" },
  { value: "division", label: "Divisions" },
  { value: "organization", label: "Organizations" }
];
function JT({ value: O, onChange: L }) {
  return /* @__PURE__ */ ee.jsxs("div", { className: "filter-group", children: [
    /* @__PURE__ */ ee.jsx("label", { className: "filter-label", children: "Type" }),
    /* @__PURE__ */ ee.jsx("div", { className: "filter-checkboxes", children: ZT.map((ie) => /* @__PURE__ */ ee.jsxs("label", { className: "filter-checkbox", children: [
      /* @__PURE__ */ ee.jsx(
        "input",
        {
          type: "radio",
          name: "type-filter",
          checked: O === ie.value,
          onChange: () => L(ie.value)
        }
      ),
      ie.label
    ] }, ie.value)) })
  ] });
}
function KT({ yearFrom: O, yearTo: L, onYearFromChange: ie, onYearToChange: z }) {
  return /* @__PURE__ */ ee.jsxs("div", { className: "filter-group", children: [
    /* @__PURE__ */ ee.jsx("label", { className: "filter-label", children: "Date Range" }),
    /* @__PURE__ */ ee.jsxs("div", { className: "filter-date-range", children: [
      /* @__PURE__ */ ee.jsx(
        "input",
        {
          className: "filter-input",
          type: "number",
          placeholder: "From year",
          min: "1",
          max: "9999",
          value: O,
          onChange: (ne) => ie(ne.target.value)
        }
      ),
      /* @__PURE__ */ ee.jsx("span", { className: "filter-date-sep", children: "–" }),
      /* @__PURE__ */ ee.jsx(
        "input",
        {
          className: "filter-input",
          type: "number",
          placeholder: "To year",
          min: "1",
          max: "9999",
          value: L,
          onChange: (ne) => z(ne.target.value)
        }
      )
    ] })
  ] });
}
function $T({ params: O, onUpdate: L }) {
  return /* @__PURE__ */ ee.jsxs("aside", { className: "filter-panel", children: [
    /* @__PURE__ */ ee.jsx("h2", { className: "filter-heading", children: "Filters" }),
    /* @__PURE__ */ ee.jsx(
      VT,
      {
        country: O.country,
        division: O.division,
        onCountryChange: (ie) => L({ country: ie, division: "" }),
        onDivisionChange: (ie) => L({ division: ie })
      }
    ),
    /* @__PURE__ */ ee.jsx(
      JT,
      {
        value: O.type,
        onChange: (ie) => L({ type: ie })
      }
    ),
    /* @__PURE__ */ ee.jsx(
      KT,
      {
        yearFrom: O.yearFrom,
        yearTo: O.yearTo,
        onYearFromChange: (ie) => L({ yearFrom: ie }),
        onYearToChange: (ie) => L({ yearTo: ie })
      }
    ),
    (O.country || O.division || O.type || O.yearFrom || O.yearTo) && /* @__PURE__ */ ee.jsx(
      "button",
      {
        className: "filter-clear",
        onClick: () => L({ country: "", division: "", type: "", yearFrom: "", yearTo: "" }),
        children: "Clear All Filters"
      }
    )
  ] });
}
function kT({ sort: O, order: L, total: ie, onSortChange: z, onOrderChange: ne }) {
  return /* @__PURE__ */ ee.jsxs("div", { className: "sort-controls", children: [
    /* @__PURE__ */ ee.jsxs("span", { className: "sort-total", children: [
      ie.toLocaleString(),
      " result",
      ie !== 1 ? "s" : ""
    ] }),
    /* @__PURE__ */ ee.jsxs("div", { className: "sort-right", children: [
      /* @__PURE__ */ ee.jsx("label", { className: "sort-label", children: "Sort by" }),
      /* @__PURE__ */ ee.jsxs(
        "select",
        {
          className: "sort-select",
          value: O,
          onChange: (ve) => z(ve.target.value),
          children: [
            /* @__PURE__ */ ee.jsx("option", { value: "enactDate", children: "Date" }),
            /* @__PURE__ */ ee.jsx("option", { value: "name", children: "Name" })
          ]
        }
      ),
      /* @__PURE__ */ ee.jsx(
        "button",
        {
          className: "sort-order-btn",
          onClick: () => ne(L === "asc" ? "desc" : "asc"),
          title: L === "asc" ? "Ascending" : "Descending",
          children: L === "asc" ? "↑" : "↓"
        }
      )
    ] })
  ] });
}
const WT = {
  country: "Country",
  division: "Division",
  organization: "Organization",
  law: "Law"
};
function FT(O, L) {
  switch (O) {
    case "country":
      return `/country.php?id=${L.toLowerCase()}`;
    case "division":
      return `/division.php?id=${L.toLowerCase()}`;
    case "organization":
      return `/organization.php?id=${L.toLowerCase()}`;
    case "law":
      return `/law.php?id=${L}`;
    default:
      return "#";
  }
}
function Kv({ type: O, id: L, name: ie, emoji: z, enactDate: ne, country: ve }) {
  return /* @__PURE__ */ ee.jsx("a", { className: "result-card", href: FT(O, L), children: /* @__PURE__ */ ee.jsxs("div", { className: "result-card-left", children: [
    z && /* @__PURE__ */ ee.jsx("span", { className: "result-emoji", children: z }),
    /* @__PURE__ */ ee.jsxs("div", { className: "result-info", children: [
      /* @__PURE__ */ ee.jsx("span", { className: "result-name", children: ie || L }),
      /* @__PURE__ */ ee.jsxs("span", { className: "result-meta", children: [
        /* @__PURE__ */ ee.jsx("span", { className: "result-type-badge", children: WT[O] }),
        ve && /* @__PURE__ */ ee.jsx("span", { className: "result-country", children: ve }),
        ne && /* @__PURE__ */ ee.jsx("span", { className: "result-date", children: ne })
      ] })
    ] })
  ] }) });
}
function IT({ data: O }) {
  const L = O.countries.length > 0 || O.divisions.length > 0 || O.organizations.length > 0, ie = O.laws.length > 0;
  return !L && !ie ? /* @__PURE__ */ ee.jsxs("div", { className: "results-empty", children: [
    /* @__PURE__ */ ee.jsxs("p", { children: [
      "No results found for “",
      O.query,
      "”"
    ] }),
    /* @__PURE__ */ ee.jsx("p", { children: "Try adjusting your search or filters." })
  ] }) : /* @__PURE__ */ ee.jsxs("div", { className: "results-list", children: [
    O.countries.length > 0 && /* @__PURE__ */ ee.jsxs("section", { className: "results-section", children: [
      /* @__PURE__ */ ee.jsx("h3", { className: "results-section-title", children: "Countries" }),
      O.countries.map((z) => /* @__PURE__ */ ee.jsx(Kv, { type: "country", id: z.id, name: z.name, emoji: z.emoji }, z.id))
    ] }),
    O.divisions.length > 0 && /* @__PURE__ */ ee.jsxs("section", { className: "results-section", children: [
      /* @__PURE__ */ ee.jsx("h3", { className: "results-section-title", children: "Divisions" }),
      O.divisions.map((z) => /* @__PURE__ */ ee.jsx(Kv, { type: "division", id: z.id, name: z.name }, z.id))
    ] }),
    O.organizations.length > 0 && /* @__PURE__ */ ee.jsxs("section", { className: "results-section", children: [
      /* @__PURE__ */ ee.jsx("h3", { className: "results-section-title", children: "Organizations" }),
      O.organizations.map((z) => /* @__PURE__ */ ee.jsx(Kv, { type: "organization", id: z.id, name: z.name }, z.id))
    ] }),
    ie && /* @__PURE__ */ ee.jsxs("section", { className: "results-section", children: [
      /* @__PURE__ */ ee.jsx("h3", { className: "results-section-title", children: "Laws" }),
      O.laws.map((z) => /* @__PURE__ */ ee.jsx(
        Kv,
        {
          type: "law",
          id: z.id,
          name: z.name,
          enactDate: z.enactDate,
          country: z.country
        },
        z.id
      ))
    ] })
  ] });
}
function PT({ page: O, total: L, limit: ie, onPageChange: z }) {
  const ne = Math.max(1, Math.ceil(L / ie));
  if (ne <= 1) return null;
  const ve = [], He = Math.max(1, O - 2), le = Math.min(ne, O + 2);
  for (let F = He; F <= le; F++)
    ve.push(F);
  return /* @__PURE__ */ ee.jsxs("nav", { className: "pagination", children: [
    /* @__PURE__ */ ee.jsx(
      "button",
      {
        className: "pagination-btn",
        disabled: O <= 1,
        onClick: () => z(O - 1),
        children: "« Prev"
      }
    ),
    He > 1 && /* @__PURE__ */ ee.jsxs(ee.Fragment, { children: [
      /* @__PURE__ */ ee.jsx("button", { className: "pagination-btn", onClick: () => z(1), children: "1" }),
      He > 2 && /* @__PURE__ */ ee.jsx("span", { className: "pagination-dots", children: "…" })
    ] }),
    ve.map((F) => /* @__PURE__ */ ee.jsx(
      "button",
      {
        className: `pagination-btn ${F === O ? "pagination-active" : ""}`,
        onClick: () => z(F),
        children: F
      },
      F
    )),
    le < ne && /* @__PURE__ */ ee.jsxs(ee.Fragment, { children: [
      le < ne - 1 && /* @__PURE__ */ ee.jsx("span", { className: "pagination-dots", children: "…" }),
      /* @__PURE__ */ ee.jsx("button", { className: "pagination-btn", onClick: () => z(ne), children: ne })
    ] }),
    /* @__PURE__ */ ee.jsx(
      "button",
      {
        className: "pagination-btn",
        disabled: O >= ne,
        onClick: () => z(O + 1),
        children: "Next »"
      }
    )
  ] });
}
const eA = [
  { type: "law", label: "Laws", desc: "Browse enacted legislation" },
  { type: "country", label: "Countries", desc: "Browse by country" },
  { type: "division", label: "Divisions", desc: "Browse states, provinces & regions" },
  { type: "organization", label: "Organizations", desc: "International bodies & treaties" }
];
function tA({ onCountrySelect: O, onTypeSelect: L }) {
  const [ie, z] = ea.useState([]);
  return ea.useEffect(() => {
    I2().then(z).catch(console.error);
  }, []), /* @__PURE__ */ ee.jsxs("div", { className: "browse-view", children: [
    /* @__PURE__ */ ee.jsx("h2", { className: "browse-heading", children: "Browse the Legal Corpus" }),
    /* @__PURE__ */ ee.jsx("p", { className: "browse-subtitle", children: "Search above or browse by category" }),
    /* @__PURE__ */ ee.jsx("div", { className: "browse-categories", children: eA.map((ne) => /* @__PURE__ */ ee.jsxs(
      "button",
      {
        className: "browse-card",
        onClick: () => L(ne.type),
        children: [
          /* @__PURE__ */ ee.jsx("h3", { className: "browse-card-title", children: ne.label }),
          /* @__PURE__ */ ee.jsx("p", { className: "browse-card-desc", children: ne.desc })
        ]
      },
      ne.type
    )) }),
    ie.length > 0 && /* @__PURE__ */ ee.jsxs(ee.Fragment, { children: [
      /* @__PURE__ */ ee.jsx("h3", { className: "browse-subheading", children: "Countries" }),
      /* @__PURE__ */ ee.jsx("div", { className: "browse-country-grid", children: ie.map((ne) => /* @__PURE__ */ ee.jsxs(
        "button",
        {
          className: "browse-country-btn",
          onClick: () => O(ne.id),
          children: [
            /* @__PURE__ */ ee.jsx("span", { className: "browse-country-emoji", children: ne.emoji }),
            /* @__PURE__ */ ee.jsx("span", { className: "browse-country-name", children: ne.name })
          ]
        },
        ne.id
      )) })
    ] })
  ] });
}
function lA() {
  const [O, L] = BT(), [ie, z] = ea.useState(null), [ne, ve] = ea.useState(!1), [He, le] = ea.useState(null), F = qT(O.q, 300), k = !!(F || O.country || O.division || O.type || O.yearFrom || O.yearTo), Ne = ea.useCallback(async () => {
    if (!k) {
      z(null);
      return;
    }
    ve(!0), le(null);
    try {
      const q = await wT({ ...O, q: F });
      z(q);
    } catch (q) {
      le(q instanceof Error ? q.message : "Search failed");
    } finally {
      ve(!1);
    }
  }, [F, O.country, O.division, O.type, O.yearFrom, O.yearTo, O.sort, O.order, O.page, k]);
  return ea.useEffect(() => {
    Ne();
  }, [Ne]), /* @__PURE__ */ ee.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ ee.jsx(
      QT,
      {
        query: O.q,
        onQueryChange: (q) => L({ q })
      }
    ),
    /* @__PURE__ */ ee.jsxs("div", { className: "app-body", children: [
      /* @__PURE__ */ ee.jsx($T, { params: O, onUpdate: L }),
      /* @__PURE__ */ ee.jsxs("main", { className: "app-main", children: [
        k && ie && /* @__PURE__ */ ee.jsx(
          kT,
          {
            sort: O.sort,
            order: O.order,
            total: ie.lawsTotal,
            onSortChange: (q) => L({ sort: q }),
            onOrderChange: (q) => L({ order: q })
          }
        ),
        ne && /* @__PURE__ */ ee.jsx("div", { className: "loading", children: "Searching..." }),
        He && /* @__PURE__ */ ee.jsx("div", { className: "error-msg", children: He }),
        !k && !ne && /* @__PURE__ */ ee.jsx(
          tA,
          {
            onCountrySelect: (q) => L({ country: q }),
            onTypeSelect: (q) => L({ type: q })
          }
        ),
        k && ie && !ne && /* @__PURE__ */ ee.jsxs(ee.Fragment, { children: [
          /* @__PURE__ */ ee.jsx(IT, { data: ie }),
          /* @__PURE__ */ ee.jsx(
            PT,
            {
              page: O.page,
              total: ie.lawsTotal,
              limit: ie.limit,
              onPageChange: (q) => L({ page: q })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const k2 = document.getElementById("search-root");
k2 && NT.createRoot(k2).render(
  /* @__PURE__ */ ee.jsx(ea.StrictMode, { children: /* @__PURE__ */ ee.jsx(lA, {}) })
);
