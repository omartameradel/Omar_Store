import { b as Di } from "./chunk-U4VN3JV6.js";
import "./chunk-UG4XTEEH.js";
import {
  a as E,
  b as Ce,
  e as Ei,
  f as yn,
  i as Be,
  j as Ot,
  k as ot,
} from "./chunk-HZ5LNM26.js";
import { a as He } from "./chunk-WBJNBVL4.js";
import {
  a as ki,
  b as it,
  c as Oi,
  d as Si,
  e as Ti,
  f as Pt,
  g as ke,
  h as kt,
  i as xi,
} from "./chunk-FXVCYABY.js";
import { a as xt } from "./chunk-RXXE7W5F.js";
import { a as Ai } from "./chunk-LHCHFCXC.js";
import { a as yi, b as _i, f as wi, g as Pi } from "./chunk-7B6XJPMO.js";
import { a as rt, j as st } from "./chunk-SXAF5PWX.js";
import { a as bi, b as vi, c as Ci, d as Mi } from "./chunk-EGLBEBCG.js";
import { a as Ge } from "./chunk-2OT5NRIT.js";
import { a as St, b as Oe } from "./chunk-QI2SEP4K.js";
import { a as Tt } from "./chunk-7CXSKCEU.js";
import {
  V as Ke,
  Y as wt,
  Z as Qe,
  a as Mt,
  va as We,
  za as ye,
} from "./chunk-E7EHJUJY.js";
import {
  $b as gi,
  Aa as Ie,
  Ba as pn,
  Bb as Ee,
  C as Zn,
  Cb as Ct,
  Db as si,
  Fb as ai,
  Gb as li,
  Ha as ii,
  Hb as g,
  Ib as y,
  Jb as O,
  Jc as hi,
  Kb as ci,
  Lb as di,
  Nb as he,
  Ua as ae,
  Ub as ne,
  V as I,
  Vb as T,
  X as _e,
  Xa as vt,
  Y as un,
  Za as _,
  _ as _t,
  _b as ui,
  a as Pe,
  aa as Le,
  ac as pi,
  b as Xn,
  ba as x,
  bb as oi,
  c as Jn,
  cc as q,
  d as qo,
  da as ei,
  db as mn,
  dc as re,
  e as Vo,
  ec as Ae,
  ia as me,
  ja as fe,
  jb as H,
  ka as Ve,
  kb as fn,
  kc as Re,
  la as bt,
  lc as ze,
  m as nt,
  nc as mi,
  ob as $,
  ra as ti,
  sa as ni,
  ua as gn,
  wa as Z,
  wc as fi,
  xb as ri,
  yb as w,
  zb as hn,
} from "./chunk-KJMU7Q3O.js";
var jo = qo((yt, Gn) => {
  "use strict";
  (function (i, t) {
    typeof yt == "object" && typeof Gn == "object"
      ? (Gn.exports = t())
      : typeof define == "function" && define.amd
        ? define([], t)
        : typeof yt == "object"
          ? (yt.AOS = t())
          : (i.AOS = t());
  })(yt, function () {
    return (function (i) {
      function t(n) {
        if (e[n]) return e[n].exports;
        var o = (e[n] = { exports: {}, id: n, loaded: !1 });
        return (
          i[n].call(o.exports, o, o.exports, t),
          (o.loaded = !0),
          o.exports
        );
      }
      var e = {};
      return ((t.m = i), (t.c = e), (t.p = "dist/"), t(0));
    })([
      function (i, t, e) {
        "use strict";
        function n(k) {
          return k && k.__esModule ? k : { default: k };
        }
        var o =
            Object.assign ||
            function (k) {
              for (var ee = 1; ee < arguments.length; ee++) {
                var le = arguments[ee];
                for (var ve in le)
                  Object.prototype.hasOwnProperty.call(le, ve) &&
                    (k[ve] = le[ve]);
              }
              return k;
            },
          r = e(1),
          a = (n(r), e(6)),
          s = n(a),
          l = e(7),
          c = n(l),
          u = e(8),
          d = n(u),
          h = e(9),
          v = n(h),
          p = e(10),
          M = n(p),
          N = e(11),
          z = n(N),
          K = e(14),
          G = n(K),
          F = [],
          pe = !1,
          A = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: "DOMContentLoaded",
            throttleDelay: 99,
            debounceDelay: 50,
            disableMutationObserver: !1,
          },
          U = function () {
            var k =
              arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
            if ((k && (pe = !0), pe))
              return ((F = (0, z.default)(F, A)), (0, M.default)(F, A.once), F);
          },
          W = function () {
            ((F = (0, G.default)()), U());
          },
          C = function () {
            F.forEach(function (k, ee) {
              (k.node.removeAttribute("data-aos"),
                k.node.removeAttribute("data-aos-easing"),
                k.node.removeAttribute("data-aos-duration"),
                k.node.removeAttribute("data-aos-delay"));
            });
          },
          m = function (k) {
            return (
              k === !0 ||
              (k === "mobile" && v.default.mobile()) ||
              (k === "phone" && v.default.phone()) ||
              (k === "tablet" && v.default.tablet()) ||
              (typeof k == "function" && k() === !0)
            );
          },
          L = function (k) {
            ((A = o(A, k)), (F = (0, G.default)()));
            var ee = document.all && !window.atob;
            return m(A.disable) || ee
              ? C()
              : (A.disableMutationObserver ||
                  d.default.isSupported() ||
                  (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
                  (A.disableMutationObserver = !0)),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-easing", A.easing),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-duration", A.duration),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-delay", A.delay),
                A.startEvent === "DOMContentLoaded" &&
                ["complete", "interactive"].indexOf(document.readyState) > -1
                  ? U(!0)
                  : A.startEvent === "load"
                    ? window.addEventListener(A.startEvent, function () {
                        U(!0);
                      })
                    : document.addEventListener(A.startEvent, function () {
                        U(!0);
                      }),
                window.addEventListener(
                  "resize",
                  (0, c.default)(U, A.debounceDelay, !0),
                ),
                window.addEventListener(
                  "orientationchange",
                  (0, c.default)(U, A.debounceDelay, !0),
                ),
                window.addEventListener(
                  "scroll",
                  (0, s.default)(function () {
                    (0, M.default)(F, A.once);
                  }, A.throttleDelay),
                ),
                A.disableMutationObserver || d.default.ready("[data-aos]", W),
                F);
          };
        i.exports = { init: L, refresh: U, refreshHard: W };
      },
      function (i, t) {},
      ,
      ,
      ,
      ,
      function (i, t) {
        (function (e) {
          "use strict";
          function n(m, L, k) {
            function ee(B) {
              var de = V,
                Ne = ie;
              return ((V = ie = void 0), (oe = B), (te = m.apply(Ne, de)));
            }
            function le(B) {
              return ((oe = B), (X = setTimeout(b, L)), J ? ee(B) : te);
            }
            function ve(B) {
              var de = B - R,
                Ne = B - oe,
                Yn = L - de;
              return ce ? W(Yn, D - Ne) : Yn;
            }
            function f(B) {
              var de = B - R,
                Ne = B - oe;
              return R === void 0 || de >= L || de < 0 || (ce && Ne >= D);
            }
            function b() {
              var B = C();
              return f(B) ? P(B) : void (X = setTimeout(b, ve(B)));
            }
            function P(B) {
              return ((X = void 0), j && V ? ee(B) : ((V = ie = void 0), te));
            }
            function S() {
              (X !== void 0 && clearTimeout(X),
                (oe = 0),
                (V = R = ie = X = void 0));
            }
            function Q() {
              return X === void 0 ? te : P(C());
            }
            function Y() {
              var B = C(),
                de = f(B);
              if (((V = arguments), (ie = this), (R = B), de)) {
                if (X === void 0) return le(R);
                if (ce) return ((X = setTimeout(b, L)), ee(R));
              }
              return (X === void 0 && (X = setTimeout(b, L)), te);
            }
            var V,
              ie,
              D,
              te,
              X,
              R,
              oe = 0,
              J = !1,
              ce = !1,
              j = !0;
            if (typeof m != "function") throw new TypeError(u);
            return (
              (L = l(L) || 0),
              r(k) &&
                ((J = !!k.leading),
                (ce = "maxWait" in k),
                (D = ce ? U(l(k.maxWait) || 0, L) : D),
                (j = "trailing" in k ? !!k.trailing : j)),
              (Y.cancel = S),
              (Y.flush = Q),
              Y
            );
          }
          function o(m, L, k) {
            var ee = !0,
              le = !0;
            if (typeof m != "function") throw new TypeError(u);
            return (
              r(k) &&
                ((ee = "leading" in k ? !!k.leading : ee),
                (le = "trailing" in k ? !!k.trailing : le)),
              n(m, L, { leading: ee, maxWait: L, trailing: le })
            );
          }
          function r(m) {
            var L = typeof m > "u" ? "undefined" : c(m);
            return !!m && (L == "object" || L == "function");
          }
          function a(m) {
            return !!m && (typeof m > "u" ? "undefined" : c(m)) == "object";
          }
          function s(m) {
            return (
              (typeof m > "u" ? "undefined" : c(m)) == "symbol" ||
              (a(m) && A.call(m) == h)
            );
          }
          function l(m) {
            if (typeof m == "number") return m;
            if (s(m)) return d;
            if (r(m)) {
              var L = typeof m.valueOf == "function" ? m.valueOf() : m;
              m = r(L) ? L + "" : L;
            }
            if (typeof m != "string") return m === 0 ? m : +m;
            m = m.replace(v, "");
            var k = M.test(m);
            return k || N.test(m)
              ? z(m.slice(2), k ? 2 : 8)
              : p.test(m)
                ? d
                : +m;
          }
          var c =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (m) {
                    return typeof m;
                  }
                : function (m) {
                    return m &&
                      typeof Symbol == "function" &&
                      m.constructor === Symbol &&
                      m !== Symbol.prototype
                      ? "symbol"
                      : typeof m;
                  },
            u = "Expected a function",
            d = NaN,
            h = "[object Symbol]",
            v = /^\s+|\s+$/g,
            p = /^[-+]0x[0-9a-f]+$/i,
            M = /^0b[01]+$/i,
            N = /^0o[0-7]+$/i,
            z = parseInt,
            K =
              (typeof e > "u" ? "undefined" : c(e)) == "object" &&
              e &&
              e.Object === Object &&
              e,
            G =
              (typeof self > "u" ? "undefined" : c(self)) == "object" &&
              self &&
              self.Object === Object &&
              self,
            F = K || G || Function("return this")(),
            pe = Object.prototype,
            A = pe.toString,
            U = Math.max,
            W = Math.min,
            C = function () {
              return F.Date.now();
            };
          i.exports = o;
        }).call(
          t,
          (function () {
            return this;
          })(),
        );
      },
      function (i, t) {
        (function (e) {
          "use strict";
          function n(C, m, L) {
            function k(j) {
              var B = Y,
                de = V;
              return ((Y = V = void 0), (R = j), (D = C.apply(de, B)));
            }
            function ee(j) {
              return ((R = j), (te = setTimeout(f, m)), oe ? k(j) : D);
            }
            function le(j) {
              var B = j - X,
                de = j - R,
                Ne = m - B;
              return J ? U(Ne, ie - de) : Ne;
            }
            function ve(j) {
              var B = j - X,
                de = j - R;
              return X === void 0 || B >= m || B < 0 || (J && de >= ie);
            }
            function f() {
              var j = W();
              return ve(j) ? b(j) : void (te = setTimeout(f, le(j)));
            }
            function b(j) {
              return ((te = void 0), ce && Y ? k(j) : ((Y = V = void 0), D));
            }
            function P() {
              (te !== void 0 && clearTimeout(te),
                (R = 0),
                (Y = X = V = te = void 0));
            }
            function S() {
              return te === void 0 ? D : b(W());
            }
            function Q() {
              var j = W(),
                B = ve(j);
              if (((Y = arguments), (V = this), (X = j), B)) {
                if (te === void 0) return ee(X);
                if (J) return ((te = setTimeout(f, m)), k(X));
              }
              return (te === void 0 && (te = setTimeout(f, m)), D);
            }
            var Y,
              V,
              ie,
              D,
              te,
              X,
              R = 0,
              oe = !1,
              J = !1,
              ce = !0;
            if (typeof C != "function") throw new TypeError(c);
            return (
              (m = s(m) || 0),
              o(L) &&
                ((oe = !!L.leading),
                (J = "maxWait" in L),
                (ie = J ? A(s(L.maxWait) || 0, m) : ie),
                (ce = "trailing" in L ? !!L.trailing : ce)),
              (Q.cancel = P),
              (Q.flush = S),
              Q
            );
          }
          function o(C) {
            var m = typeof C > "u" ? "undefined" : l(C);
            return !!C && (m == "object" || m == "function");
          }
          function r(C) {
            return !!C && (typeof C > "u" ? "undefined" : l(C)) == "object";
          }
          function a(C) {
            return (
              (typeof C > "u" ? "undefined" : l(C)) == "symbol" ||
              (r(C) && pe.call(C) == d)
            );
          }
          function s(C) {
            if (typeof C == "number") return C;
            if (a(C)) return u;
            if (o(C)) {
              var m = typeof C.valueOf == "function" ? C.valueOf() : C;
              C = o(m) ? m + "" : m;
            }
            if (typeof C != "string") return C === 0 ? C : +C;
            C = C.replace(h, "");
            var L = p.test(C);
            return L || M.test(C)
              ? N(C.slice(2), L ? 2 : 8)
              : v.test(C)
                ? u
                : +C;
          }
          var l =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (C) {
                    return typeof C;
                  }
                : function (C) {
                    return C &&
                      typeof Symbol == "function" &&
                      C.constructor === Symbol &&
                      C !== Symbol.prototype
                      ? "symbol"
                      : typeof C;
                  },
            c = "Expected a function",
            u = NaN,
            d = "[object Symbol]",
            h = /^\s+|\s+$/g,
            v = /^[-+]0x[0-9a-f]+$/i,
            p = /^0b[01]+$/i,
            M = /^0o[0-7]+$/i,
            N = parseInt,
            z =
              (typeof e > "u" ? "undefined" : l(e)) == "object" &&
              e &&
              e.Object === Object &&
              e,
            K =
              (typeof self > "u" ? "undefined" : l(self)) == "object" &&
              self &&
              self.Object === Object &&
              self,
            G = z || K || Function("return this")(),
            F = Object.prototype,
            pe = F.toString,
            A = Math.max,
            U = Math.min,
            W = function () {
              return G.Date.now();
            };
          i.exports = n;
        }).call(
          t,
          (function () {
            return this;
          })(),
        );
      },
      function (i, t) {
        "use strict";
        function e(l) {
          var c = void 0,
            u = void 0,
            d = void 0;
          for (c = 0; c < l.length; c += 1)
            if (
              ((u = l[c]),
              (u.dataset && u.dataset.aos) || (d = u.children && e(u.children)))
            )
              return !0;
          return !1;
        }
        function n() {
          return (
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver
          );
        }
        function o() {
          return !!n();
        }
        function r(l, c) {
          var u = window.document,
            d = n(),
            h = new d(a);
          ((s = c),
            h.observe(u.documentElement, {
              childList: !0,
              subtree: !0,
              removedNodes: !0,
            }));
        }
        function a(l) {
          l &&
            l.forEach(function (c) {
              var u = Array.prototype.slice.call(c.addedNodes),
                d = Array.prototype.slice.call(c.removedNodes),
                h = u.concat(d);
              if (e(h)) return s();
            });
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var s = function () {};
        t.default = { isSupported: o, ready: r };
      },
      function (i, t) {
        "use strict";
        function e(u, d) {
          if (!(u instanceof d))
            throw new TypeError("Cannot call a class as a function");
        }
        function n() {
          return navigator.userAgent || navigator.vendor || window.opera || "";
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = (function () {
            function u(d, h) {
              for (var v = 0; v < h.length; v++) {
                var p = h[v];
                ((p.enumerable = p.enumerable || !1),
                  (p.configurable = !0),
                  "value" in p && (p.writable = !0),
                  Object.defineProperty(d, p.key, p));
              }
            }
            return function (d, h, v) {
              return (h && u(d.prototype, h), v && u(d, v), d);
            };
          })(),
          r =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          a =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          s =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
          l =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          c = (function () {
            function u() {
              e(this, u);
            }
            return (
              o(u, [
                {
                  key: "phone",
                  value: function () {
                    var d = n();
                    return !(!r.test(d) && !a.test(d.substr(0, 4)));
                  },
                },
                {
                  key: "mobile",
                  value: function () {
                    var d = n();
                    return !(!s.test(d) && !l.test(d.substr(0, 4)));
                  },
                },
                {
                  key: "tablet",
                  value: function () {
                    return this.mobile() && !this.phone();
                  },
                },
              ]),
              u
            );
          })();
        t.default = new c();
      },
      function (i, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var e = function (o, r, a) {
            var s = o.node.getAttribute("data-aos-once");
            r > o.position
              ? o.node.classList.add("aos-animate")
              : typeof s < "u" &&
                (s === "false" || (!a && s !== "true")) &&
                o.node.classList.remove("aos-animate");
          },
          n = function (o, r) {
            var a = window.pageYOffset,
              s = window.innerHeight;
            o.forEach(function (l, c) {
              e(l, s + a, r);
            });
          };
        t.default = n;
      },
      function (i, t, e) {
        "use strict";
        function n(s) {
          return s && s.__esModule ? s : { default: s };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = e(12),
          r = n(o),
          a = function (s, l) {
            return (
              s.forEach(function (c, u) {
                (c.node.classList.add("aos-init"),
                  (c.position = (0, r.default)(c.node, l.offset)));
              }),
              s
            );
          };
        t.default = a;
      },
      function (i, t, e) {
        "use strict";
        function n(s) {
          return s && s.__esModule ? s : { default: s };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = e(13),
          r = n(o),
          a = function (s, l) {
            var c = 0,
              u = 0,
              d = window.innerHeight,
              h = {
                offset: s.getAttribute("data-aos-offset"),
                anchor: s.getAttribute("data-aos-anchor"),
                anchorPlacement: s.getAttribute("data-aos-anchor-placement"),
              };
            switch (
              (h.offset && !isNaN(h.offset) && (u = parseInt(h.offset)),
              h.anchor &&
                document.querySelectorAll(h.anchor) &&
                (s = document.querySelectorAll(h.anchor)[0]),
              (c = (0, r.default)(s).top),
              h.anchorPlacement)
            ) {
              case "top-bottom":
                break;
              case "center-bottom":
                c += s.offsetHeight / 2;
                break;
              case "bottom-bottom":
                c += s.offsetHeight;
                break;
              case "top-center":
                c += d / 2;
                break;
              case "bottom-center":
                c += d / 2 + s.offsetHeight;
                break;
              case "center-center":
                c += d / 2 + s.offsetHeight / 2;
                break;
              case "top-top":
                c += d;
                break;
              case "bottom-top":
                c += s.offsetHeight + d;
                break;
              case "center-top":
                c += s.offsetHeight / 2 + d;
            }
            return (
              h.anchorPlacement || h.offset || isNaN(l) || (u = l),
              c + u
            );
          };
        t.default = a;
      },
      function (i, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var e = function (n) {
          for (
            var o = 0, r = 0;
            n && !isNaN(n.offsetLeft) && !isNaN(n.offsetTop);
          )
            ((o += n.offsetLeft - (n.tagName != "BODY" ? n.scrollLeft : 0)),
              (r += n.offsetTop - (n.tagName != "BODY" ? n.scrollTop : 0)),
              (n = n.offsetParent));
          return { top: r, left: o };
        };
        t.default = e;
      },
      function (i, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var e = function (n) {
          return (
            (n = n || document.querySelectorAll("[data-aos]")),
            Array.prototype.map.call(n, function (o) {
              return { node: o };
            })
          );
        };
        t.default = e;
      },
    ]);
  });
});
function Ni(i) {
  return new I(3e3, !1);
}
function Ko() {
  return new I(3100, !1);
}
function Qo() {
  return new I(3101, !1);
}
function Wo(i) {
  return new I(3001, !1);
}
function Ho(i) {
  return new I(3003, !1);
}
function Go(i) {
  return new I(3004, !1);
}
function Ii(i, t) {
  return new I(3005, !1);
}
function Fi() {
  return new I(3006, !1);
}
function Ri() {
  return new I(3007, !1);
}
function zi(i, t) {
  return new I(3008, !1);
}
function Bi(i) {
  return new I(3002, !1);
}
function Ui(i, t, e, n, o) {
  return new I(3010, !1);
}
function ji() {
  return new I(3011, !1);
}
function $i() {
  return new I(3012, !1);
}
function qi() {
  return new I(3200, !1);
}
function Vi() {
  return new I(3202, !1);
}
function Ki() {
  return new I(3013, !1);
}
function Qi(i) {
  return new I(3014, !1);
}
function Wi(i) {
  return new I(3015, !1);
}
function Hi(i) {
  return new I(3016, !1);
}
function Gi(i, t) {
  return new I(3404, !1);
}
function Yo(i) {
  return new I(3502, !1);
}
function Yi(i) {
  return new I(3503, !1);
}
function Xi() {
  return new I(3300, !1);
}
function Ji(i) {
  return new I(3504, !1);
}
function Zi(i) {
  return new I(3301, !1);
}
function eo(i, t) {
  return new I(3302, !1);
}
function to(i) {
  return new I(3303, !1);
}
function no(i, t) {
  return new I(3400, !1);
}
function io(i) {
  return new I(3401, !1);
}
function oo(i) {
  return new I(3402, !1);
}
function ro(i, t) {
  return new I(3505, !1);
}
function De(i) {
  switch (i.length) {
    case 0:
      return new Be();
    case 1:
      return i[0];
    default:
      return new Ot(i);
  }
}
function Cn(i, t, e = new Map(), n = new Map()) {
  let o = [],
    r = [],
    a = -1,
    s = null;
  if (
    (t.forEach((l) => {
      let c = l.get("offset"),
        u = c == a,
        d = (u && s) || new Map();
      (l.forEach((h, v) => {
        let p = v,
          M = h;
        if (v !== "offset")
          switch (((p = i.normalizePropertyName(p, o)), M)) {
            case ot:
              M = e.get(v);
              break;
            case Ce:
              M = n.get(v);
              break;
            default:
              M = i.normalizeStyleValue(v, p, M, o);
              break;
          }
        d.set(p, M);
      }),
        u || r.push(d),
        (s = d),
        (a = c));
    }),
    o.length)
  )
    throw Yo(o);
  return r;
}
function Et(i, t, e, n) {
  switch (t) {
    case "start":
      i.onStart(() => n(e && _n(e, "start", i)));
      break;
    case "done":
      i.onDone(() => n(e && _n(e, "done", i)));
      break;
    case "destroy":
      i.onDestroy(() => n(e && _n(e, "destroy", i)));
      break;
  }
}
function _n(i, t, e) {
  let n = e.totalTime,
    o = !!e.disabled,
    r = At(
      i.element,
      i.triggerName,
      i.fromState,
      i.toState,
      t || i.phaseName,
      n ?? i.totalTime,
      o,
    ),
    a = i._data;
  return (a != null && (r._data = a), r);
}
function At(i, t, e, n, o = "", r = 0, a) {
  return {
    element: i,
    triggerName: t,
    fromState: e,
    toState: n,
    phaseName: o,
    totalTime: r,
    disabled: !!a,
  };
}
function ue(i, t, e) {
  let n = i.get(t);
  return (n || i.set(t, (n = e)), n);
}
function Mn(i) {
  let t = i.indexOf(":"),
    e = i.substring(1, t),
    n = i.slice(t + 1);
  return [e, n];
}
var Xo = typeof document > "u" ? null : document.documentElement;
function Dt(i) {
  let t = i.parentNode || i.host || null;
  return t === Xo ? null : t;
}
function Jo(i) {
  return i.substring(1, 6) == "ebkit";
}
var Ue = null,
  Li = !1;
function so(i) {
  Ue ||
    ((Ue = Zo() || {}), (Li = Ue.style ? "WebkitAppearance" in Ue.style : !1));
  let t = !0;
  return (
    Ue.style &&
      !Jo(i) &&
      ((t = i in Ue.style),
      !t &&
        Li &&
        (t = "Webkit" + i.charAt(0).toUpperCase() + i.slice(1) in Ue.style)),
    t
  );
}
function Zo() {
  return typeof document < "u" ? document.body : null;
}
function wn(i, t) {
  for (; t; ) {
    if (t === i) return !0;
    t = Dt(t);
  }
  return !1;
}
function Pn(i, t, e) {
  if (e) return Array.from(i.querySelectorAll(t));
  let n = i.querySelector(t);
  return n ? [n] : [];
}
var er = 1e3,
  kn = "{{",
  tr = "}}",
  On = "ng-enter",
  Nt = "ng-leave",
  at = "ng-trigger",
  lt = ".ng-trigger",
  Sn = "ng-animating",
  Lt = ".ng-animating";
function Se(i) {
  if (typeof i == "number") return i;
  let t = i.match(/^(-?[\.\d]+)(m?s)/);
  return !t || t.length < 2 ? 0 : bn(parseFloat(t[1]), t[2]);
}
function bn(i, t) {
  switch (t) {
    case "s":
      return i * er;
    default:
      return i;
  }
}
function ct(i, t, e) {
  return i.hasOwnProperty("duration") ? i : nr(i, t, e);
}
function nr(i, t, e) {
  let n =
      /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i,
    o,
    r = 0,
    a = "";
  if (typeof i == "string") {
    let s = i.match(n);
    if (s === null)
      return (t.push(Ni(i)), { duration: 0, delay: 0, easing: "" });
    o = bn(parseFloat(s[1]), s[2]);
    let l = s[3];
    l != null && (r = bn(parseFloat(l), s[4]));
    let c = s[5];
    c && (a = c);
  } else o = i;
  if (!e) {
    let s = !1,
      l = t.length;
    (o < 0 && (t.push(Ko()), (s = !0)),
      r < 0 && (t.push(Qo()), (s = !0)),
      s && t.splice(l, 0, Ni(i)));
  }
  return { duration: o, delay: r, easing: a };
}
function ao(i) {
  return i.length
    ? i[0] instanceof Map
      ? i
      : i.map((t) => new Map(Object.entries(t)))
    : [];
}
function Me(i, t, e) {
  t.forEach((n, o) => {
    let r = It(o);
    (e && !e.has(o) && e.set(o, i.style[r]), (i.style[r] = n));
  });
}
function Fe(i, t) {
  t.forEach((e, n) => {
    let o = It(n);
    i.style[o] = "";
  });
}
function Ye(i) {
  return Array.isArray(i) ? (i.length == 1 ? i[0] : Ei(i)) : i;
}
function lo(i, t, e) {
  let n = t.params || {},
    o = Tn(i);
  o.length &&
    o.forEach((r) => {
      n.hasOwnProperty(r) || e.push(Wo(r));
    });
}
var vn = new RegExp(`${kn}\\s*(.+?)\\s*${tr}`, "g");
function Tn(i) {
  let t = [];
  if (typeof i == "string") {
    let e;
    for (; (e = vn.exec(i)); ) t.push(e[1]);
    vn.lastIndex = 0;
  }
  return t;
}
function Xe(i, t, e) {
  let n = `${i}`,
    o = n.replace(vn, (r, a) => {
      let s = t[a];
      return (s == null && (e.push(Ho(a)), (s = "")), s.toString());
    });
  return o == n ? i : o;
}
var ir = /-+([a-z0-9])/g;
function It(i) {
  return i.replace(ir, (...t) => t[1].toUpperCase());
}
function co(i, t) {
  return i === 0 || t === 0;
}
function uo(i, t, e) {
  if (e.size && t.length) {
    let n = t[0],
      o = [];
    if (
      (e.forEach((r, a) => {
        (n.has(a) || o.push(a), n.set(a, r));
      }),
      o.length)
    )
      for (let r = 1; r < t.length; r++) {
        let a = t[r];
        o.forEach((s) => a.set(s, Ft(i, s)));
      }
  }
  return t;
}
function ge(i, t, e) {
  switch (t.type) {
    case E.Trigger:
      return i.visitTrigger(t, e);
    case E.State:
      return i.visitState(t, e);
    case E.Transition:
      return i.visitTransition(t, e);
    case E.Sequence:
      return i.visitSequence(t, e);
    case E.Group:
      return i.visitGroup(t, e);
    case E.Animate:
      return i.visitAnimate(t, e);
    case E.Keyframes:
      return i.visitKeyframes(t, e);
    case E.Style:
      return i.visitStyle(t, e);
    case E.Reference:
      return i.visitReference(t, e);
    case E.AnimateChild:
      return i.visitAnimateChild(t, e);
    case E.AnimateRef:
      return i.visitAnimateRef(t, e);
    case E.Query:
      return i.visitQuery(t, e);
    case E.Stagger:
      return i.visitStagger(t, e);
    default:
      throw Go(t.type);
  }
}
function Ft(i, t) {
  return window.getComputedStyle(i)[t];
}
var Kn = (() => {
    class i {
      validateStyleProperty(e) {
        return so(e);
      }
      containsElement(e, n) {
        return wn(e, n);
      }
      getParentElement(e) {
        return Dt(e);
      }
      query(e, n, o) {
        return Pn(e, n, o);
      }
      computeStyle(e, n, o) {
        return o || "";
      }
      animate(e, n, o, r, a, s = [], l) {
        return new Be(o, r);
      }
      static ɵfac = function (n) {
        return new (n || i)();
      };
      static ɵprov = _e({ token: i, factory: i.ɵfac });
    }
    return i;
  })(),
  $e = class {
    static NOOP = new Kn();
  },
  qe = class {};
var or = new Set([
    "width",
    "height",
    "minWidth",
    "minHeight",
    "maxWidth",
    "maxHeight",
    "left",
    "top",
    "bottom",
    "right",
    "fontSize",
    "outlineWidth",
    "outlineOffset",
    "paddingTop",
    "paddingLeft",
    "paddingBottom",
    "paddingRight",
    "marginTop",
    "marginLeft",
    "marginBottom",
    "marginRight",
    "borderRadius",
    "borderWidth",
    "borderTopWidth",
    "borderLeftWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "textIndent",
    "perspective",
  ]),
  jt = class extends qe {
    normalizePropertyName(t, e) {
      return It(t);
    }
    normalizeStyleValue(t, e, n, o) {
      let r = "",
        a = n.toString().trim();
      if (or.has(e) && n !== 0 && n !== "0")
        if (typeof n == "number") r = "px";
        else {
          let s = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
          s && s[1].length == 0 && o.push(Ii(t, n));
        }
      return a + r;
    }
  };
var $t = "*";
function rr(i, t) {
  let e = [];
  return (
    typeof i == "string"
      ? i.split(/\s*,\s*/).forEach((n) => sr(n, e, t))
      : e.push(i),
    e
  );
}
function sr(i, t, e) {
  if (i[0] == ":") {
    let l = ar(i, e);
    if (typeof l == "function") {
      t.push(l);
      return;
    }
    i = l;
  }
  let n = i.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (n == null || n.length < 4) return (e.push(Wi(i)), t);
  let o = n[1],
    r = n[2],
    a = n[3];
  t.push(go(o, a));
  let s = o == $t && a == $t;
  r[0] == "<" && !s && t.push(go(a, o));
}
function ar(i, t) {
  switch (i) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (e, n) => parseFloat(n) > parseFloat(e);
    case ":decrement":
      return (e, n) => parseFloat(n) < parseFloat(e);
    default:
      return (t.push(Hi(i)), "* => *");
  }
}
var Rt = new Set(["true", "1"]),
  zt = new Set(["false", "0"]);
function go(i, t) {
  let e = Rt.has(i) || zt.has(i),
    n = Rt.has(t) || zt.has(t);
  return (o, r) => {
    let a = i == $t || i == o,
      s = t == $t || t == r;
    return (
      !a && e && typeof o == "boolean" && (a = o ? Rt.has(i) : zt.has(i)),
      !s && n && typeof r == "boolean" && (s = r ? Rt.has(t) : zt.has(t)),
      a && s
    );
  };
}
var Mo = ":self",
  lr = new RegExp(`s*${Mo}s*,?`, "g");
function wo(i, t, e, n) {
  return new Ln(i).build(t, e, n);
}
var po = "",
  Ln = class {
    _driver;
    constructor(t) {
      this._driver = t;
    }
    build(t, e, n) {
      let o = new In(e);
      return (this._resetContextStyleTimingState(o), ge(this, Ye(t), o));
    }
    _resetContextStyleTimingState(t) {
      ((t.currentQuerySelector = po),
        (t.collectedStyles = new Map()),
        t.collectedStyles.set(po, new Map()),
        (t.currentTime = 0));
    }
    visitTrigger(t, e) {
      let n = (e.queryCount = 0),
        o = (e.depCount = 0),
        r = [],
        a = [];
      return (
        t.name.charAt(0) == "@" && e.errors.push(Fi()),
        t.definitions.forEach((s) => {
          if ((this._resetContextStyleTimingState(e), s.type == E.State)) {
            let l = s,
              c = l.name;
            (c
              .toString()
              .split(/\s*,\s*/)
              .forEach((u) => {
                ((l.name = u), r.push(this.visitState(l, e)));
              }),
              (l.name = c));
          } else if (s.type == E.Transition) {
            let l = this.visitTransition(s, e);
            ((n += l.queryCount), (o += l.depCount), a.push(l));
          } else e.errors.push(Ri());
        }),
        {
          type: E.Trigger,
          name: t.name,
          states: r,
          transitions: a,
          queryCount: n,
          depCount: o,
          options: null,
        }
      );
    }
    visitState(t, e) {
      let n = this.visitStyle(t.styles, e),
        o = (t.options && t.options.params) || null;
      if (n.containsDynamicStyles) {
        let r = new Set(),
          a = o || {};
        (n.styles.forEach((s) => {
          s instanceof Map &&
            s.forEach((l) => {
              Tn(l).forEach((c) => {
                a.hasOwnProperty(c) || r.add(c);
              });
            });
        }),
          r.size && e.errors.push(zi(t.name, [...r.values()])));
      }
      return {
        type: E.State,
        name: t.name,
        style: n,
        options: o ? { params: o } : null,
      };
    }
    visitTransition(t, e) {
      ((e.queryCount = 0), (e.depCount = 0));
      let n = ge(this, Ye(t.animation), e),
        o = rr(t.expr, e.errors);
      return {
        type: E.Transition,
        matchers: o,
        animation: n,
        queryCount: e.queryCount,
        depCount: e.depCount,
        options: je(t.options),
      };
    }
    visitSequence(t, e) {
      return {
        type: E.Sequence,
        steps: t.steps.map((n) => ge(this, n, e)),
        options: je(t.options),
      };
    }
    visitGroup(t, e) {
      let n = e.currentTime,
        o = 0,
        r = t.steps.map((a) => {
          e.currentTime = n;
          let s = ge(this, a, e);
          return ((o = Math.max(o, e.currentTime)), s);
        });
      return (
        (e.currentTime = o),
        { type: E.Group, steps: r, options: je(t.options) }
      );
    }
    visitAnimate(t, e) {
      let n = gr(t.timings, e.errors);
      e.currentAnimateTimings = n;
      let o,
        r = t.styles ? t.styles : yn({});
      if (r.type == E.Keyframes) o = this.visitKeyframes(r, e);
      else {
        let a = t.styles,
          s = !1;
        if (!a) {
          s = !0;
          let c = {};
          (n.easing && (c.easing = n.easing), (a = yn(c)));
        }
        e.currentTime += n.duration + n.delay;
        let l = this.visitStyle(a, e);
        ((l.isEmptyStep = s), (o = l));
      }
      return (
        (e.currentAnimateTimings = null),
        { type: E.Animate, timings: n, style: o, options: null }
      );
    }
    visitStyle(t, e) {
      let n = this._makeStyleAst(t, e);
      return (this._validateStyleAst(n, e), n);
    }
    _makeStyleAst(t, e) {
      let n = [],
        o = Array.isArray(t.styles) ? t.styles : [t.styles];
      for (let s of o)
        typeof s == "string"
          ? s === Ce
            ? n.push(s)
            : e.errors.push(Bi(s))
          : n.push(new Map(Object.entries(s)));
      let r = !1,
        a = null;
      return (
        n.forEach((s) => {
          if (
            s instanceof Map &&
            (s.has("easing") && ((a = s.get("easing")), s.delete("easing")), !r)
          ) {
            for (let l of s.values())
              if (l.toString().indexOf(kn) >= 0) {
                r = !0;
                break;
              }
          }
        }),
        {
          type: E.Style,
          styles: n,
          easing: a,
          offset: t.offset,
          containsDynamicStyles: r,
          options: null,
        }
      );
    }
    _validateStyleAst(t, e) {
      let n = e.currentAnimateTimings,
        o = e.currentTime,
        r = e.currentTime;
      (n && r > 0 && (r -= n.duration + n.delay),
        t.styles.forEach((a) => {
          typeof a != "string" &&
            a.forEach((s, l) => {
              let c = e.collectedStyles.get(e.currentQuerySelector),
                u = c.get(l),
                d = !0;
              (u &&
                (r != o &&
                  r >= u.startTime &&
                  o <= u.endTime &&
                  (e.errors.push(Ui(l, u.startTime, u.endTime, r, o)),
                  (d = !1)),
                (r = u.startTime)),
                d && c.set(l, { startTime: r, endTime: o }),
                e.options && lo(s, e.options, e.errors));
            });
        }));
    }
    visitKeyframes(t, e) {
      let n = { type: E.Keyframes, styles: [], options: null };
      if (!e.currentAnimateTimings) return (e.errors.push(ji()), n);
      let o = 1,
        r = 0,
        a = [],
        s = !1,
        l = !1,
        c = 0,
        u = t.steps.map((z) => {
          let K = this._makeStyleAst(z, e),
            G = K.offset != null ? K.offset : ur(K.styles),
            F = 0;
          return (
            G != null && (r++, (F = K.offset = G)),
            (l = l || F < 0 || F > 1),
            (s = s || F < c),
            (c = F),
            a.push(F),
            K
          );
        });
      (l && e.errors.push($i()), s && e.errors.push(qi()));
      let d = t.steps.length,
        h = 0;
      r > 0 && r < d ? e.errors.push(Vi()) : r == 0 && (h = o / (d - 1));
      let v = d - 1,
        p = e.currentTime,
        M = e.currentAnimateTimings,
        N = M.duration;
      return (
        u.forEach((z, K) => {
          let G = h > 0 ? (K == v ? 1 : h * K) : a[K],
            F = G * N;
          ((e.currentTime = p + M.delay + F),
            (M.duration = F),
            this._validateStyleAst(z, e),
            (z.offset = G),
            n.styles.push(z));
        }),
        n
      );
    }
    visitReference(t, e) {
      return {
        type: E.Reference,
        animation: ge(this, Ye(t.animation), e),
        options: je(t.options),
      };
    }
    visitAnimateChild(t, e) {
      return (e.depCount++, { type: E.AnimateChild, options: je(t.options) });
    }
    visitAnimateRef(t, e) {
      return {
        type: E.AnimateRef,
        animation: this.visitReference(t.animation, e),
        options: je(t.options),
      };
    }
    visitQuery(t, e) {
      let n = e.currentQuerySelector,
        o = t.options || {};
      (e.queryCount++, (e.currentQuery = t));
      let [r, a] = cr(t.selector);
      ((e.currentQuerySelector = n.length ? n + " " + r : r),
        ue(e.collectedStyles, e.currentQuerySelector, new Map()));
      let s = ge(this, Ye(t.animation), e);
      return (
        (e.currentQuery = null),
        (e.currentQuerySelector = n),
        {
          type: E.Query,
          selector: r,
          limit: o.limit || 0,
          optional: !!o.optional,
          includeSelf: a,
          animation: s,
          originalSelector: t.selector,
          options: je(t.options),
        }
      );
    }
    visitStagger(t, e) {
      e.currentQuery || e.errors.push(Ki());
      let n =
        t.timings === "full"
          ? { duration: 0, delay: 0, easing: "full" }
          : ct(t.timings, e.errors, !0);
      return {
        type: E.Stagger,
        animation: ge(this, Ye(t.animation), e),
        timings: n,
        options: null,
      };
    }
  };
function cr(i) {
  let t = !!i.split(/\s*,\s*/).find((e) => e == Mo);
  return (
    t && (i = i.replace(lr, "")),
    (i = i
      .replace(/@\*/g, lt)
      .replace(/@\w+/g, (e) => lt + "-" + e.slice(1))
      .replace(/:animating/g, Lt)),
    [i, t]
  );
}
function dr(i) {
  return i ? Pe({}, i) : null;
}
var In = class {
  errors;
  queryCount = 0;
  depCount = 0;
  currentTransition = null;
  currentQuery = null;
  currentQuerySelector = null;
  currentAnimateTimings = null;
  currentTime = 0;
  collectedStyles = new Map();
  options = null;
  unsupportedCSSPropertiesFound = new Set();
  constructor(t) {
    this.errors = t;
  }
};
function ur(i) {
  if (typeof i == "string") return null;
  let t = null;
  if (Array.isArray(i))
    i.forEach((e) => {
      if (e instanceof Map && e.has("offset")) {
        let n = e;
        ((t = parseFloat(n.get("offset"))), n.delete("offset"));
      }
    });
  else if (i instanceof Map && i.has("offset")) {
    let e = i;
    ((t = parseFloat(e.get("offset"))), e.delete("offset"));
  }
  return t;
}
function gr(i, t) {
  if (i.hasOwnProperty("duration")) return i;
  if (typeof i == "number") {
    let r = ct(i, t).duration;
    return xn(r, 0, "");
  }
  let e = i;
  if (e.split(/\s+/).some((r) => r.charAt(0) == "{" && r.charAt(1) == "{")) {
    let r = xn(0, 0, "");
    return ((r.dynamic = !0), (r.strValue = e), r);
  }
  let o = ct(e, t);
  return xn(o.duration, o.delay, o.easing);
}
function je(i) {
  return (
    i ? ((i = Pe({}, i)), i.params && (i.params = dr(i.params))) : (i = {}),
    i
  );
}
function xn(i, t, e) {
  return { duration: i, delay: t, easing: e };
}
function Qn(i, t, e, n, o, r, a = null, s = !1) {
  return {
    type: 1,
    element: i,
    keyframes: t,
    preStyleProps: e,
    postStyleProps: n,
    duration: o,
    delay: r,
    totalTime: o + r,
    easing: a,
    subTimeline: s,
  };
}
var ut = class {
    _map = new Map();
    get(t) {
      return this._map.get(t) || [];
    }
    append(t, e) {
      let n = this._map.get(t);
      (n || this._map.set(t, (n = [])), n.push(...e));
    }
    has(t) {
      return this._map.has(t);
    }
    clear() {
      this._map.clear();
    }
  },
  pr = 1,
  mr = ":enter",
  fr = new RegExp(mr, "g"),
  hr = ":leave",
  yr = new RegExp(hr, "g");
function Po(i, t, e, n, o, r = new Map(), a = new Map(), s, l, c = []) {
  return new Fn().buildKeyframes(i, t, e, n, o, r, a, s, l, c);
}
var Fn = class {
    buildKeyframes(t, e, n, o, r, a, s, l, c, u = []) {
      c = c || new ut();
      let d = new Rn(t, e, c, o, r, u, []);
      d.options = l;
      let h = l.delay ? Se(l.delay) : 0;
      (d.currentTimeline.delayNextStep(h),
        d.currentTimeline.setStyles([a], null, d.errors, l),
        ge(this, n, d));
      let v = d.timelines.filter((p) => p.containsAnimation());
      if (v.length && s.size) {
        let p;
        for (let M = v.length - 1; M >= 0; M--) {
          let N = v[M];
          if (N.element === e) {
            p = N;
            break;
          }
        }
        p &&
          !p.allowOnlyTimelineStyles() &&
          p.setStyles([s], null, d.errors, l);
      }
      return v.length
        ? v.map((p) => p.buildKeyframes())
        : [Qn(e, [], [], [], 0, h, "", !1)];
    }
    visitTrigger(t, e) {}
    visitState(t, e) {}
    visitTransition(t, e) {}
    visitAnimateChild(t, e) {
      let n = e.subInstructions.get(e.element);
      if (n) {
        let o = e.createSubContext(t.options),
          r = e.currentTimeline.currentTime,
          a = this._visitSubInstructions(n, o, o.options);
        r != a && e.transformIntoNewTimeline(a);
      }
      e.previousNode = t;
    }
    visitAnimateRef(t, e) {
      let n = e.createSubContext(t.options);
      (n.transformIntoNewTimeline(),
        this._applyAnimationRefDelays([t.options, t.animation.options], e, n),
        this.visitReference(t.animation, n),
        e.transformIntoNewTimeline(n.currentTimeline.currentTime),
        (e.previousNode = t));
    }
    _applyAnimationRefDelays(t, e, n) {
      for (let o of t) {
        let r = o?.delay;
        if (r) {
          let a =
            typeof r == "number" ? r : Se(Xe(r, o?.params ?? {}, e.errors));
          n.delayNextStep(a);
        }
      }
    }
    _visitSubInstructions(t, e, n) {
      let r = e.currentTimeline.currentTime,
        a = n.duration != null ? Se(n.duration) : null,
        s = n.delay != null ? Se(n.delay) : null;
      return (
        a !== 0 &&
          t.forEach((l) => {
            let c = e.appendInstructionToTimeline(l, a, s);
            r = Math.max(r, c.duration + c.delay);
          }),
        r
      );
    }
    visitReference(t, e) {
      (e.updateOptions(t.options, !0),
        ge(this, t.animation, e),
        (e.previousNode = t));
    }
    visitSequence(t, e) {
      let n = e.subContextCount,
        o = e,
        r = t.options;
      if (
        r &&
        (r.params || r.delay) &&
        ((o = e.createSubContext(r)),
        o.transformIntoNewTimeline(),
        r.delay != null)
      ) {
        o.previousNode.type == E.Style &&
          (o.currentTimeline.snapshotCurrentStyles(), (o.previousNode = qt));
        let a = Se(r.delay);
        o.delayNextStep(a);
      }
      (t.steps.length &&
        (t.steps.forEach((a) => ge(this, a, o)),
        o.currentTimeline.applyStylesToKeyframe(),
        o.subContextCount > n && o.transformIntoNewTimeline()),
        (e.previousNode = t));
    }
    visitGroup(t, e) {
      let n = [],
        o = e.currentTimeline.currentTime,
        r = t.options && t.options.delay ? Se(t.options.delay) : 0;
      (t.steps.forEach((a) => {
        let s = e.createSubContext(t.options);
        (r && s.delayNextStep(r),
          ge(this, a, s),
          (o = Math.max(o, s.currentTimeline.currentTime)),
          n.push(s.currentTimeline));
      }),
        n.forEach((a) => e.currentTimeline.mergeTimelineCollectedStyles(a)),
        e.transformIntoNewTimeline(o),
        (e.previousNode = t));
    }
    _visitTiming(t, e) {
      if (t.dynamic) {
        let n = t.strValue,
          o = e.params ? Xe(n, e.params, e.errors) : n;
        return ct(o, e.errors);
      } else return { duration: t.duration, delay: t.delay, easing: t.easing };
    }
    visitAnimate(t, e) {
      let n = (e.currentAnimateTimings = this._visitTiming(t.timings, e)),
        o = e.currentTimeline;
      n.delay && (e.incrementTime(n.delay), o.snapshotCurrentStyles());
      let r = t.style;
      (r.type == E.Keyframes
        ? this.visitKeyframes(r, e)
        : (e.incrementTime(n.duration),
          this.visitStyle(r, e),
          o.applyStylesToKeyframe()),
        (e.currentAnimateTimings = null),
        (e.previousNode = t));
    }
    visitStyle(t, e) {
      let n = e.currentTimeline,
        o = e.currentAnimateTimings;
      !o && n.hasCurrentStyleProperties() && n.forwardFrame();
      let r = (o && o.easing) || t.easing;
      (t.isEmptyStep
        ? n.applyEmptyStep(r)
        : n.setStyles(t.styles, r, e.errors, e.options),
        (e.previousNode = t));
    }
    visitKeyframes(t, e) {
      let n = e.currentAnimateTimings,
        o = e.currentTimeline.duration,
        r = n.duration,
        s = e.createSubContext().currentTimeline;
      ((s.easing = n.easing),
        t.styles.forEach((l) => {
          let c = l.offset || 0;
          (s.forwardTime(c * r),
            s.setStyles(l.styles, l.easing, e.errors, e.options),
            s.applyStylesToKeyframe());
        }),
        e.currentTimeline.mergeTimelineCollectedStyles(s),
        e.transformIntoNewTimeline(o + r),
        (e.previousNode = t));
    }
    visitQuery(t, e) {
      let n = e.currentTimeline.currentTime,
        o = t.options || {},
        r = o.delay ? Se(o.delay) : 0;
      r &&
        (e.previousNode.type === E.Style ||
          (n == 0 && e.currentTimeline.hasCurrentStyleProperties())) &&
        (e.currentTimeline.snapshotCurrentStyles(), (e.previousNode = qt));
      let a = n,
        s = e.invokeQuery(
          t.selector,
          t.originalSelector,
          t.limit,
          t.includeSelf,
          !!o.optional,
          e.errors,
        );
      e.currentQueryTotal = s.length;
      let l = null;
      (s.forEach((c, u) => {
        e.currentQueryIndex = u;
        let d = e.createSubContext(t.options, c);
        (r && d.delayNextStep(r),
          c === e.element && (l = d.currentTimeline),
          ge(this, t.animation, d),
          d.currentTimeline.applyStylesToKeyframe());
        let h = d.currentTimeline.currentTime;
        a = Math.max(a, h);
      }),
        (e.currentQueryIndex = 0),
        (e.currentQueryTotal = 0),
        e.transformIntoNewTimeline(a),
        l &&
          (e.currentTimeline.mergeTimelineCollectedStyles(l),
          e.currentTimeline.snapshotCurrentStyles()),
        (e.previousNode = t));
    }
    visitStagger(t, e) {
      let n = e.parentContext,
        o = e.currentTimeline,
        r = t.timings,
        a = Math.abs(r.duration),
        s = a * (e.currentQueryTotal - 1),
        l = a * e.currentQueryIndex;
      switch (r.duration < 0 ? "reverse" : r.easing) {
        case "reverse":
          l = s - l;
          break;
        case "full":
          l = n.currentStaggerTime;
          break;
      }
      let u = e.currentTimeline;
      l && u.delayNextStep(l);
      let d = u.currentTime;
      (ge(this, t.animation, e),
        (e.previousNode = t),
        (n.currentStaggerTime =
          o.currentTime - d + (o.startTime - n.currentTimeline.startTime)));
    }
  },
  qt = {},
  Rn = class i {
    _driver;
    element;
    subInstructions;
    _enterClassName;
    _leaveClassName;
    errors;
    timelines;
    parentContext = null;
    currentTimeline;
    currentAnimateTimings = null;
    previousNode = qt;
    subContextCount = 0;
    options = {};
    currentQueryIndex = 0;
    currentQueryTotal = 0;
    currentStaggerTime = 0;
    constructor(t, e, n, o, r, a, s, l) {
      ((this._driver = t),
        (this.element = e),
        (this.subInstructions = n),
        (this._enterClassName = o),
        (this._leaveClassName = r),
        (this.errors = a),
        (this.timelines = s),
        (this.currentTimeline = l || new Vt(this._driver, e, 0)),
        s.push(this.currentTimeline));
    }
    get params() {
      return this.options.params;
    }
    updateOptions(t, e) {
      if (!t) return;
      let n = t,
        o = this.options;
      (n.duration != null && (o.duration = Se(n.duration)),
        n.delay != null && (o.delay = Se(n.delay)));
      let r = n.params;
      if (r) {
        let a = o.params;
        (a || (a = this.options.params = {}),
          Object.keys(r).forEach((s) => {
            (!e || !a.hasOwnProperty(s)) && (a[s] = Xe(r[s], a, this.errors));
          }));
      }
    }
    _copyOptions() {
      let t = {};
      if (this.options) {
        let e = this.options.params;
        if (e) {
          let n = (t.params = {});
          Object.keys(e).forEach((o) => {
            n[o] = e[o];
          });
        }
      }
      return t;
    }
    createSubContext(t = null, e, n) {
      let o = e || this.element,
        r = new i(
          this._driver,
          o,
          this.subInstructions,
          this._enterClassName,
          this._leaveClassName,
          this.errors,
          this.timelines,
          this.currentTimeline.fork(o, n || 0),
        );
      return (
        (r.previousNode = this.previousNode),
        (r.currentAnimateTimings = this.currentAnimateTimings),
        (r.options = this._copyOptions()),
        r.updateOptions(t),
        (r.currentQueryIndex = this.currentQueryIndex),
        (r.currentQueryTotal = this.currentQueryTotal),
        (r.parentContext = this),
        this.subContextCount++,
        r
      );
    }
    transformIntoNewTimeline(t) {
      return (
        (this.previousNode = qt),
        (this.currentTimeline = this.currentTimeline.fork(this.element, t)),
        this.timelines.push(this.currentTimeline),
        this.currentTimeline
      );
    }
    appendInstructionToTimeline(t, e, n) {
      let o = {
          duration: e ?? t.duration,
          delay: this.currentTimeline.currentTime + (n ?? 0) + t.delay,
          easing: "",
        },
        r = new zn(
          this._driver,
          t.element,
          t.keyframes,
          t.preStyleProps,
          t.postStyleProps,
          o,
          t.stretchStartingKeyframe,
        );
      return (this.timelines.push(r), o);
    }
    incrementTime(t) {
      this.currentTimeline.forwardTime(this.currentTimeline.duration + t);
    }
    delayNextStep(t) {
      t > 0 && this.currentTimeline.delayNextStep(t);
    }
    invokeQuery(t, e, n, o, r, a) {
      let s = [];
      if ((o && s.push(this.element), t.length > 0)) {
        ((t = t.replace(fr, "." + this._enterClassName)),
          (t = t.replace(yr, "." + this._leaveClassName)));
        let l = n != 1,
          c = this._driver.query(this.element, t, l);
        (n !== 0 &&
          (c = n < 0 ? c.slice(c.length + n, c.length) : c.slice(0, n)),
          s.push(...c));
      }
      return (!r && s.length == 0 && a.push(Qi(e)), s);
    }
  },
  Vt = class i {
    _driver;
    element;
    startTime;
    _elementTimelineStylesLookup;
    duration = 0;
    easing = null;
    _previousKeyframe = new Map();
    _currentKeyframe = new Map();
    _keyframes = new Map();
    _styleSummary = new Map();
    _localTimelineStyles = new Map();
    _globalTimelineStyles;
    _pendingStyles = new Map();
    _backFill = new Map();
    _currentEmptyStepKeyframe = null;
    constructor(t, e, n, o) {
      ((this._driver = t),
        (this.element = e),
        (this.startTime = n),
        (this._elementTimelineStylesLookup = o),
        this._elementTimelineStylesLookup ||
          (this._elementTimelineStylesLookup = new Map()),
        (this._globalTimelineStyles = this._elementTimelineStylesLookup.get(e)),
        this._globalTimelineStyles ||
          ((this._globalTimelineStyles = this._localTimelineStyles),
          this._elementTimelineStylesLookup.set(e, this._localTimelineStyles)),
        this._loadKeyframe());
    }
    containsAnimation() {
      switch (this._keyframes.size) {
        case 0:
          return !1;
        case 1:
          return this.hasCurrentStyleProperties();
        default:
          return !0;
      }
    }
    hasCurrentStyleProperties() {
      return this._currentKeyframe.size > 0;
    }
    get currentTime() {
      return this.startTime + this.duration;
    }
    delayNextStep(t) {
      let e = this._keyframes.size === 1 && this._pendingStyles.size;
      this.duration || e
        ? (this.forwardTime(this.currentTime + t),
          e && this.snapshotCurrentStyles())
        : (this.startTime += t);
    }
    fork(t, e) {
      return (
        this.applyStylesToKeyframe(),
        new i(
          this._driver,
          t,
          e || this.currentTime,
          this._elementTimelineStylesLookup,
        )
      );
    }
    _loadKeyframe() {
      (this._currentKeyframe &&
        (this._previousKeyframe = this._currentKeyframe),
        (this._currentKeyframe = this._keyframes.get(this.duration)),
        this._currentKeyframe ||
          ((this._currentKeyframe = new Map()),
          this._keyframes.set(this.duration, this._currentKeyframe)));
    }
    forwardFrame() {
      ((this.duration += pr), this._loadKeyframe());
    }
    forwardTime(t) {
      (this.applyStylesToKeyframe(), (this.duration = t), this._loadKeyframe());
    }
    _updateStyle(t, e) {
      (this._localTimelineStyles.set(t, e),
        this._globalTimelineStyles.set(t, e),
        this._styleSummary.set(t, { time: this.currentTime, value: e }));
    }
    allowOnlyTimelineStyles() {
      return this._currentEmptyStepKeyframe !== this._currentKeyframe;
    }
    applyEmptyStep(t) {
      t && this._previousKeyframe.set("easing", t);
      for (let [e, n] of this._globalTimelineStyles)
        (this._backFill.set(e, n || Ce), this._currentKeyframe.set(e, Ce));
      this._currentEmptyStepKeyframe = this._currentKeyframe;
    }
    setStyles(t, e, n, o) {
      e && this._previousKeyframe.set("easing", e);
      let r = (o && o.params) || {},
        a = _r(t, this._globalTimelineStyles);
      for (let [s, l] of a) {
        let c = Xe(l, r, n);
        (this._pendingStyles.set(s, c),
          this._localTimelineStyles.has(s) ||
            this._backFill.set(s, this._globalTimelineStyles.get(s) ?? Ce),
          this._updateStyle(s, c));
      }
    }
    applyStylesToKeyframe() {
      this._pendingStyles.size != 0 &&
        (this._pendingStyles.forEach((t, e) => {
          this._currentKeyframe.set(e, t);
        }),
        this._pendingStyles.clear(),
        this._localTimelineStyles.forEach((t, e) => {
          this._currentKeyframe.has(e) || this._currentKeyframe.set(e, t);
        }));
    }
    snapshotCurrentStyles() {
      for (let [t, e] of this._localTimelineStyles)
        (this._pendingStyles.set(t, e), this._updateStyle(t, e));
    }
    getFinalKeyframe() {
      return this._keyframes.get(this.duration);
    }
    get properties() {
      let t = [];
      for (let e in this._currentKeyframe) t.push(e);
      return t;
    }
    mergeTimelineCollectedStyles(t) {
      t._styleSummary.forEach((e, n) => {
        let o = this._styleSummary.get(n);
        (!o || e.time > o.time) && this._updateStyle(n, e.value);
      });
    }
    buildKeyframes() {
      this.applyStylesToKeyframe();
      let t = new Set(),
        e = new Set(),
        n = this._keyframes.size === 1 && this.duration === 0,
        o = [];
      this._keyframes.forEach((s, l) => {
        let c = new Map([...this._backFill, ...s]);
        (c.forEach((u, d) => {
          u === ot ? t.add(d) : u === Ce && e.add(d);
        }),
          n || c.set("offset", l / this.duration),
          o.push(c));
      });
      let r = [...t.values()],
        a = [...e.values()];
      if (n) {
        let s = o[0],
          l = new Map(s);
        (s.set("offset", 0), l.set("offset", 1), (o = [s, l]));
      }
      return Qn(
        this.element,
        o,
        r,
        a,
        this.duration,
        this.startTime,
        this.easing,
        !1,
      );
    }
  },
  zn = class extends Vt {
    keyframes;
    preStyleProps;
    postStyleProps;
    _stretchStartingKeyframe;
    timings;
    constructor(t, e, n, o, r, a, s = !1) {
      (super(t, e, a.delay),
        (this.keyframes = n),
        (this.preStyleProps = o),
        (this.postStyleProps = r),
        (this._stretchStartingKeyframe = s),
        (this.timings = {
          duration: a.duration,
          delay: a.delay,
          easing: a.easing,
        }));
    }
    containsAnimation() {
      return this.keyframes.length > 1;
    }
    buildKeyframes() {
      let t = this.keyframes,
        { delay: e, duration: n, easing: o } = this.timings;
      if (this._stretchStartingKeyframe && e) {
        let r = [],
          a = n + e,
          s = e / a,
          l = new Map(t[0]);
        (l.set("offset", 0), r.push(l));
        let c = new Map(t[0]);
        (c.set("offset", mo(s)), r.push(c));
        let u = t.length - 1;
        for (let d = 1; d <= u; d++) {
          let h = new Map(t[d]),
            v = h.get("offset"),
            p = e + v * n;
          (h.set("offset", mo(p / a)), r.push(h));
        }
        ((n = a), (e = 0), (o = ""), (t = r));
      }
      return Qn(
        this.element,
        t,
        this.preStyleProps,
        this.postStyleProps,
        n,
        e,
        o,
        !0,
      );
    }
  };
function mo(i, t = 3) {
  let e = Math.pow(10, t - 1);
  return Math.round(i * e) / e;
}
function _r(i, t) {
  let e = new Map(),
    n;
  return (
    i.forEach((o) => {
      if (o === "*") {
        n ??= t.keys();
        for (let r of n) e.set(r, Ce);
      } else for (let [r, a] of o) e.set(r, a);
    }),
    e
  );
}
function fo(i, t, e, n, o, r, a, s, l, c, u, d, h) {
  return {
    type: 0,
    element: i,
    triggerName: t,
    isRemovalTransition: o,
    fromState: e,
    fromStyles: r,
    toState: n,
    toStyles: a,
    timelines: s,
    queriedElements: l,
    preStyleProps: c,
    postStyleProps: u,
    totalTime: d,
    errors: h,
  };
}
var En = {},
  Kt = class {
    _triggerName;
    ast;
    _stateStyles;
    constructor(t, e, n) {
      ((this._triggerName = t), (this.ast = e), (this._stateStyles = n));
    }
    match(t, e, n, o) {
      return br(this.ast.matchers, t, e, n, o);
    }
    buildStyles(t, e, n) {
      let o = this._stateStyles.get("*");
      return (
        t !== void 0 && (o = this._stateStyles.get(t?.toString()) || o),
        o ? o.buildStyles(e, n) : new Map()
      );
    }
    build(t, e, n, o, r, a, s, l, c, u) {
      let d = [],
        h = (this.ast.options && this.ast.options.params) || En,
        v = (s && s.params) || En,
        p = this.buildStyles(n, v, d),
        M = (l && l.params) || En,
        N = this.buildStyles(o, M, d),
        z = new Set(),
        K = new Map(),
        G = new Map(),
        F = o === "void",
        pe = { params: ko(M, h), delay: this.ast.options?.delay },
        A = u ? [] : Po(t, e, this.ast.animation, r, a, p, N, pe, c, d),
        U = 0;
      return (
        A.forEach((W) => {
          U = Math.max(W.duration + W.delay, U);
        }),
        d.length
          ? fo(e, this._triggerName, n, o, F, p, N, [], [], K, G, U, d)
          : (A.forEach((W) => {
              let C = W.element,
                m = ue(K, C, new Set());
              W.preStyleProps.forEach((k) => m.add(k));
              let L = ue(G, C, new Set());
              (W.postStyleProps.forEach((k) => L.add(k)), C !== e && z.add(C));
            }),
            fo(
              e,
              this._triggerName,
              n,
              o,
              F,
              p,
              N,
              A,
              [...z.values()],
              K,
              G,
              U,
            ))
      );
    }
  };
function br(i, t, e, n, o) {
  return i.some((r) => r(t, e, n, o));
}
function ko(i, t) {
  let e = Pe({}, t);
  return (
    Object.entries(i).forEach(([n, o]) => {
      o != null && (e[n] = o);
    }),
    e
  );
}
var Bn = class {
  styles;
  defaultParams;
  normalizer;
  constructor(t, e, n) {
    ((this.styles = t), (this.defaultParams = e), (this.normalizer = n));
  }
  buildStyles(t, e) {
    let n = new Map(),
      o = ko(t, this.defaultParams);
    return (
      this.styles.styles.forEach((r) => {
        typeof r != "string" &&
          r.forEach((a, s) => {
            a && (a = Xe(a, o, e));
            let l = this.normalizer.normalizePropertyName(s, e);
            ((a = this.normalizer.normalizeStyleValue(s, l, a, e)),
              n.set(s, a));
          });
      }),
      n
    );
  }
};
function vr(i, t, e) {
  return new Un(i, t, e);
}
var Un = class {
  name;
  ast;
  _normalizer;
  transitionFactories = [];
  fallbackTransition;
  states = new Map();
  constructor(t, e, n) {
    ((this.name = t),
      (this.ast = e),
      (this._normalizer = n),
      e.states.forEach((o) => {
        let r = (o.options && o.options.params) || {};
        this.states.set(o.name, new Bn(o.style, r, n));
      }),
      ho(this.states, "true", "1"),
      ho(this.states, "false", "0"),
      e.transitions.forEach((o) => {
        this.transitionFactories.push(new Kt(t, o, this.states));
      }),
      (this.fallbackTransition = Cr(t, this.states)));
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(t, e, n, o) {
    return this.transitionFactories.find((a) => a.match(t, e, n, o)) || null;
  }
  matchStyles(t, e, n) {
    return this.fallbackTransition.buildStyles(t, e, n);
  }
};
function Cr(i, t, e) {
  let n = [(a, s) => !0],
    o = { type: E.Sequence, steps: [], options: null },
    r = {
      type: E.Transition,
      animation: o,
      matchers: n,
      options: null,
      queryCount: 0,
      depCount: 0,
    };
  return new Kt(i, r, t);
}
function ho(i, t, e) {
  i.has(t) ? i.has(e) || i.set(e, i.get(t)) : i.has(e) && i.set(t, i.get(e));
}
var Mr = new ut(),
  jn = class {
    bodyNode;
    _driver;
    _normalizer;
    _animations = new Map();
    _playersById = new Map();
    players = [];
    constructor(t, e, n) {
      ((this.bodyNode = t), (this._driver = e), (this._normalizer = n));
    }
    register(t, e) {
      let n = [],
        o = [],
        r = wo(this._driver, e, n, o);
      if (n.length) throw Yi(n);
      this._animations.set(t, r);
    }
    _buildPlayer(t, e, n) {
      let o = t.element,
        r = Cn(this._normalizer, t.keyframes, e, n);
      return this._driver.animate(o, r, t.duration, t.delay, t.easing, [], !0);
    }
    create(t, e, n = {}) {
      let o = [],
        r = this._animations.get(t),
        a,
        s = new Map();
      if (
        (r
          ? ((a = Po(
              this._driver,
              e,
              r,
              On,
              Nt,
              new Map(),
              new Map(),
              n,
              Mr,
              o,
            )),
            a.forEach((u) => {
              let d = ue(s, u.element, new Map());
              u.postStyleProps.forEach((h) => d.set(h, null));
            }))
          : (o.push(Xi()), (a = [])),
        o.length)
      )
        throw Ji(o);
      s.forEach((u, d) => {
        u.forEach((h, v) => {
          u.set(v, this._driver.computeStyle(d, v, Ce));
        });
      });
      let l = a.map((u) => {
          let d = s.get(u.element);
          return this._buildPlayer(u, new Map(), d);
        }),
        c = De(l);
      return (
        this._playersById.set(t, c),
        c.onDestroy(() => this.destroy(t)),
        this.players.push(c),
        c
      );
    }
    destroy(t) {
      let e = this._getPlayer(t);
      (e.destroy(), this._playersById.delete(t));
      let n = this.players.indexOf(e);
      n >= 0 && this.players.splice(n, 1);
    }
    _getPlayer(t) {
      let e = this._playersById.get(t);
      if (!e) throw Zi(t);
      return e;
    }
    listen(t, e, n, o) {
      let r = At(e, "", "", "");
      return (Et(this._getPlayer(t), n, r, o), () => {});
    }
    command(t, e, n, o) {
      if (n == "register") {
        this.register(t, o[0]);
        return;
      }
      if (n == "create") {
        let a = o[0] || {};
        this.create(t, e, a);
        return;
      }
      let r = this._getPlayer(t);
      switch (n) {
        case "play":
          r.play();
          break;
        case "pause":
          r.pause();
          break;
        case "reset":
          r.reset();
          break;
        case "restart":
          r.restart();
          break;
        case "finish":
          r.finish();
          break;
        case "init":
          r.init();
          break;
        case "setPosition":
          r.setPosition(parseFloat(o[0]));
          break;
        case "destroy":
          this.destroy(t);
          break;
      }
    }
  },
  yo = "ng-animate-queued",
  wr = ".ng-animate-queued",
  An = "ng-animate-disabled",
  Pr = ".ng-animate-disabled",
  kr = "ng-star-inserted",
  Or = ".ng-star-inserted",
  Sr = [],
  Oo = {
    namespaceId: "",
    setForRemoval: !1,
    setForMove: !1,
    hasAnimation: !1,
    removedBeforeQueried: !1,
  },
  Tr = {
    namespaceId: "",
    setForMove: !1,
    setForRemoval: !1,
    hasAnimation: !1,
    removedBeforeQueried: !0,
  },
  we = "__ng_removed",
  gt = class {
    namespaceId;
    value;
    options;
    get params() {
      return this.options.params;
    }
    constructor(t, e = "") {
      this.namespaceId = e;
      let n = t && t.hasOwnProperty("value"),
        o = n ? t.value : t;
      if (((this.value = Er(o)), n)) {
        let r = t,
          { value: a } = r,
          s = Jn(r, ["value"]);
        this.options = s;
      } else this.options = {};
      this.options.params || (this.options.params = {});
    }
    absorbOptions(t) {
      let e = t.params;
      if (e) {
        let n = this.options.params;
        Object.keys(e).forEach((o) => {
          n[o] == null && (n[o] = e[o]);
        });
      }
    }
  },
  dt = "void",
  Dn = new gt(dt),
  $n = class {
    id;
    hostElement;
    _engine;
    players = [];
    _triggers = new Map();
    _queue = [];
    _elementListeners = new Map();
    _hostClassName;
    constructor(t, e, n) {
      ((this.id = t),
        (this.hostElement = e),
        (this._engine = n),
        (this._hostClassName = "ng-tns-" + t),
        be(e, this._hostClassName));
    }
    listen(t, e, n, o) {
      if (!this._triggers.has(e)) throw eo(n, e);
      if (n == null || n.length == 0) throw to(e);
      if (!Ar(n)) throw no(n, e);
      let r = ue(this._elementListeners, t, []),
        a = { name: e, phase: n, callback: o };
      r.push(a);
      let s = ue(this._engine.statesByElement, t, new Map());
      return (
        s.has(e) || (be(t, at), be(t, at + "-" + e), s.set(e, Dn)),
        () => {
          this._engine.afterFlush(() => {
            let l = r.indexOf(a);
            (l >= 0 && r.splice(l, 1), this._triggers.has(e) || s.delete(e));
          });
        }
      );
    }
    register(t, e) {
      return this._triggers.has(t) ? !1 : (this._triggers.set(t, e), !0);
    }
    _getTrigger(t) {
      let e = this._triggers.get(t);
      if (!e) throw io(t);
      return e;
    }
    trigger(t, e, n, o = !0) {
      let r = this._getTrigger(e),
        a = new pt(this.id, e, t),
        s = this._engine.statesByElement.get(t);
      s ||
        (be(t, at),
        be(t, at + "-" + e),
        this._engine.statesByElement.set(t, (s = new Map())));
      let l = s.get(e),
        c = new gt(n, this.id);
      if (
        (!(n && n.hasOwnProperty("value")) && l && c.absorbOptions(l.options),
        s.set(e, c),
        l || (l = Dn),
        !(c.value === dt) && l.value === c.value)
      ) {
        if (!Lr(l.params, c.params)) {
          let M = [],
            N = r.matchStyles(l.value, l.params, M),
            z = r.matchStyles(c.value, c.params, M);
          M.length
            ? this._engine.reportError(M)
            : this._engine.afterFlush(() => {
                (Fe(t, N), Me(t, z));
              });
        }
        return;
      }
      let h = ue(this._engine.playersByElement, t, []);
      h.forEach((M) => {
        M.namespaceId == this.id &&
          M.triggerName == e &&
          M.queued &&
          M.destroy();
      });
      let v = r.matchTransition(l.value, c.value, t, c.params),
        p = !1;
      if (!v) {
        if (!o) return;
        ((v = r.fallbackTransition), (p = !0));
      }
      return (
        this._engine.totalQueuedPlayers++,
        this._queue.push({
          element: t,
          triggerName: e,
          transition: v,
          fromState: l,
          toState: c,
          player: a,
          isFallbackTransition: p,
        }),
        p ||
          (be(t, yo),
          a.onStart(() => {
            Je(t, yo);
          })),
        a.onDone(() => {
          let M = this.players.indexOf(a);
          M >= 0 && this.players.splice(M, 1);
          let N = this._engine.playersByElement.get(t);
          if (N) {
            let z = N.indexOf(a);
            z >= 0 && N.splice(z, 1);
          }
        }),
        this.players.push(a),
        h.push(a),
        a
      );
    }
    deregister(t) {
      (this._triggers.delete(t),
        this._engine.statesByElement.forEach((e) => e.delete(t)),
        this._elementListeners.forEach((e, n) => {
          this._elementListeners.set(
            n,
            e.filter((o) => o.name != t),
          );
        }));
    }
    clearElementCache(t) {
      (this._engine.statesByElement.delete(t),
        this._elementListeners.delete(t));
      let e = this._engine.playersByElement.get(t);
      e &&
        (e.forEach((n) => n.destroy()),
        this._engine.playersByElement.delete(t));
    }
    _signalRemovalForInnerTriggers(t, e) {
      let n = this._engine.driver.query(t, lt, !0);
      (n.forEach((o) => {
        if (o[we]) return;
        let r = this._engine.fetchNamespacesByElement(o);
        r.size
          ? r.forEach((a) => a.triggerLeaveAnimation(o, e, !1, !0))
          : this.clearElementCache(o);
      }),
        this._engine.afterFlushAnimationsDone(() =>
          n.forEach((o) => this.clearElementCache(o)),
        ));
    }
    triggerLeaveAnimation(t, e, n, o) {
      let r = this._engine.statesByElement.get(t),
        a = new Map();
      if (r) {
        let s = [];
        if (
          (r.forEach((l, c) => {
            if ((a.set(c, l.value), this._triggers.has(c))) {
              let u = this.trigger(t, c, dt, o);
              u && s.push(u);
            }
          }),
          s.length)
        )
          return (
            this._engine.markElementAsRemoved(this.id, t, !0, e, a),
            n && De(s).onDone(() => this._engine.processLeaveNode(t)),
            !0
          );
      }
      return !1;
    }
    prepareLeaveAnimationListeners(t) {
      let e = this._elementListeners.get(t),
        n = this._engine.statesByElement.get(t);
      if (e && n) {
        let o = new Set();
        e.forEach((r) => {
          let a = r.name;
          if (o.has(a)) return;
          o.add(a);
          let l = this._triggers.get(a).fallbackTransition,
            c = n.get(a) || Dn,
            u = new gt(dt),
            d = new pt(this.id, a, t);
          (this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: t,
              triggerName: a,
              transition: l,
              fromState: c,
              toState: u,
              player: d,
              isFallbackTransition: !0,
            }));
        });
      }
    }
    removeNode(t, e) {
      let n = this._engine;
      if (
        (t.childElementCount && this._signalRemovalForInnerTriggers(t, e),
        this.triggerLeaveAnimation(t, e, !0))
      )
        return;
      let o = !1;
      if (n.totalAnimations) {
        let r = n.players.length ? n.playersByQueriedElement.get(t) : [];
        if (r && r.length) o = !0;
        else {
          let a = t;
          for (; (a = a.parentNode); )
            if (n.statesByElement.get(a)) {
              o = !0;
              break;
            }
        }
      }
      if ((this.prepareLeaveAnimationListeners(t), o))
        n.markElementAsRemoved(this.id, t, !1, e);
      else {
        let r = t[we];
        (!r || r === Oo) &&
          (n.afterFlush(() => this.clearElementCache(t)),
          n.destroyInnerAnimations(t),
          n._onRemovalComplete(t, e));
      }
    }
    insertNode(t, e) {
      be(t, this._hostClassName);
    }
    drainQueuedTransitions(t) {
      let e = [];
      return (
        this._queue.forEach((n) => {
          let o = n.player;
          if (o.destroyed) return;
          let r = n.element,
            a = this._elementListeners.get(r);
          (a &&
            a.forEach((s) => {
              if (s.name == n.triggerName) {
                let l = At(
                  r,
                  n.triggerName,
                  n.fromState.value,
                  n.toState.value,
                );
                ((l._data = t), Et(n.player, s.phase, l, s.callback));
              }
            }),
            o.markedForDestroy
              ? this._engine.afterFlush(() => {
                  o.destroy();
                })
              : e.push(n));
        }),
        (this._queue = []),
        e.sort((n, o) => {
          let r = n.transition.ast.depCount,
            a = o.transition.ast.depCount;
          return r == 0 || a == 0
            ? r - a
            : this._engine.driver.containsElement(n.element, o.element)
              ? 1
              : -1;
        })
      );
    }
    destroy(t) {
      (this.players.forEach((e) => e.destroy()),
        this._signalRemovalForInnerTriggers(this.hostElement, t));
    }
  },
  qn = class {
    bodyNode;
    driver;
    _normalizer;
    players = [];
    newHostElements = new Map();
    playersByElement = new Map();
    playersByQueriedElement = new Map();
    statesByElement = new Map();
    disabledNodes = new Set();
    totalAnimations = 0;
    totalQueuedPlayers = 0;
    _namespaceLookup = {};
    _namespaceList = [];
    _flushFns = [];
    _whenQuietFns = [];
    namespacesByHostElement = new Map();
    collectedEnterElements = [];
    collectedLeaveElements = [];
    onRemovalComplete = (t, e) => {};
    _onRemovalComplete(t, e) {
      this.onRemovalComplete(t, e);
    }
    constructor(t, e, n) {
      ((this.bodyNode = t), (this.driver = e), (this._normalizer = n));
    }
    get queuedPlayers() {
      let t = [];
      return (
        this._namespaceList.forEach((e) => {
          e.players.forEach((n) => {
            n.queued && t.push(n);
          });
        }),
        t
      );
    }
    createNamespace(t, e) {
      let n = new $n(t, e, this);
      return (
        this.bodyNode && this.driver.containsElement(this.bodyNode, e)
          ? this._balanceNamespaceList(n, e)
          : (this.newHostElements.set(e, n), this.collectEnterElement(e)),
        (this._namespaceLookup[t] = n)
      );
    }
    _balanceNamespaceList(t, e) {
      let n = this._namespaceList,
        o = this.namespacesByHostElement;
      if (n.length - 1 >= 0) {
        let a = !1,
          s = this.driver.getParentElement(e);
        for (; s; ) {
          let l = o.get(s);
          if (l) {
            let c = n.indexOf(l);
            (n.splice(c + 1, 0, t), (a = !0));
            break;
          }
          s = this.driver.getParentElement(s);
        }
        a || n.unshift(t);
      } else n.push(t);
      return (o.set(e, t), t);
    }
    register(t, e) {
      let n = this._namespaceLookup[t];
      return (n || (n = this.createNamespace(t, e)), n);
    }
    registerTrigger(t, e, n) {
      let o = this._namespaceLookup[t];
      o && o.register(e, n) && this.totalAnimations++;
    }
    destroy(t, e) {
      t &&
        (this.afterFlush(() => {}),
        this.afterFlushAnimationsDone(() => {
          let n = this._fetchNamespace(t);
          this.namespacesByHostElement.delete(n.hostElement);
          let o = this._namespaceList.indexOf(n);
          (o >= 0 && this._namespaceList.splice(o, 1),
            n.destroy(e),
            delete this._namespaceLookup[t]);
        }));
    }
    _fetchNamespace(t) {
      return this._namespaceLookup[t];
    }
    fetchNamespacesByElement(t) {
      let e = new Set(),
        n = this.statesByElement.get(t);
      if (n) {
        for (let o of n.values())
          if (o.namespaceId) {
            let r = this._fetchNamespace(o.namespaceId);
            r && e.add(r);
          }
      }
      return e;
    }
    trigger(t, e, n, o) {
      if (Bt(e)) {
        let r = this._fetchNamespace(t);
        if (r) return (r.trigger(e, n, o), !0);
      }
      return !1;
    }
    insertNode(t, e, n, o) {
      if (!Bt(e)) return;
      let r = e[we];
      if (r && r.setForRemoval) {
        ((r.setForRemoval = !1), (r.setForMove = !0));
        let a = this.collectedLeaveElements.indexOf(e);
        a >= 0 && this.collectedLeaveElements.splice(a, 1);
      }
      if (t) {
        let a = this._fetchNamespace(t);
        a && a.insertNode(e, n);
      }
      o && this.collectEnterElement(e);
    }
    collectEnterElement(t) {
      this.collectedEnterElements.push(t);
    }
    markElementAsDisabled(t, e) {
      e
        ? this.disabledNodes.has(t) || (this.disabledNodes.add(t), be(t, An))
        : this.disabledNodes.has(t) &&
          (this.disabledNodes.delete(t), Je(t, An));
    }
    removeNode(t, e, n) {
      if (Bt(e)) {
        let o = t ? this._fetchNamespace(t) : null;
        o ? o.removeNode(e, n) : this.markElementAsRemoved(t, e, !1, n);
        let r = this.namespacesByHostElement.get(e);
        r && r.id !== t && r.removeNode(e, n);
      } else this._onRemovalComplete(e, n);
    }
    markElementAsRemoved(t, e, n, o, r) {
      (this.collectedLeaveElements.push(e),
        (e[we] = {
          namespaceId: t,
          setForRemoval: o,
          hasAnimation: n,
          removedBeforeQueried: !1,
          previousTriggersValues: r,
        }));
    }
    listen(t, e, n, o, r) {
      return Bt(e) ? this._fetchNamespace(t).listen(e, n, o, r) : () => {};
    }
    _buildInstruction(t, e, n, o, r) {
      return t.transition.build(
        this.driver,
        t.element,
        t.fromState.value,
        t.toState.value,
        n,
        o,
        t.fromState.options,
        t.toState.options,
        e,
        r,
      );
    }
    destroyInnerAnimations(t) {
      let e = this.driver.query(t, lt, !0);
      (e.forEach((n) => this.destroyActiveAnimationsForElement(n)),
        this.playersByQueriedElement.size != 0 &&
          ((e = this.driver.query(t, Lt, !0)),
          e.forEach((n) => this.finishActiveQueriedAnimationOnElement(n))));
    }
    destroyActiveAnimationsForElement(t) {
      let e = this.playersByElement.get(t);
      e &&
        e.forEach((n) => {
          n.queued ? (n.markedForDestroy = !0) : n.destroy();
        });
    }
    finishActiveQueriedAnimationOnElement(t) {
      let e = this.playersByQueriedElement.get(t);
      e && e.forEach((n) => n.finish());
    }
    whenRenderingDone() {
      return new Promise((t) => {
        if (this.players.length) return De(this.players).onDone(() => t());
        t();
      });
    }
    processLeaveNode(t) {
      let e = t[we];
      if (e && e.setForRemoval) {
        if (((t[we] = Oo), e.namespaceId)) {
          this.destroyInnerAnimations(t);
          let n = this._fetchNamespace(e.namespaceId);
          n && n.clearElementCache(t);
        }
        this._onRemovalComplete(t, e.setForRemoval);
      }
      (t.classList?.contains(An) && this.markElementAsDisabled(t, !1),
        this.driver.query(t, Pr, !0).forEach((n) => {
          this.markElementAsDisabled(n, !1);
        }));
    }
    flush(t = -1) {
      let e = [];
      if (
        (this.newHostElements.size &&
          (this.newHostElements.forEach((n, o) =>
            this._balanceNamespaceList(n, o),
          ),
          this.newHostElements.clear()),
        this.totalAnimations && this.collectedEnterElements.length)
      )
        for (let n = 0; n < this.collectedEnterElements.length; n++) {
          let o = this.collectedEnterElements[n];
          be(o, kr);
        }
      if (
        this._namespaceList.length &&
        (this.totalQueuedPlayers || this.collectedLeaveElements.length)
      ) {
        let n = [];
        try {
          e = this._flushAnimations(n, t);
        } finally {
          for (let o = 0; o < n.length; o++) n[o]();
        }
      } else
        for (let n = 0; n < this.collectedLeaveElements.length; n++) {
          let o = this.collectedLeaveElements[n];
          this.processLeaveNode(o);
        }
      if (
        ((this.totalQueuedPlayers = 0),
        (this.collectedEnterElements.length = 0),
        (this.collectedLeaveElements.length = 0),
        this._flushFns.forEach((n) => n()),
        (this._flushFns = []),
        this._whenQuietFns.length)
      ) {
        let n = this._whenQuietFns;
        ((this._whenQuietFns = []),
          e.length
            ? De(e).onDone(() => {
                n.forEach((o) => o());
              })
            : n.forEach((o) => o()));
      }
    }
    reportError(t) {
      throw oo(t);
    }
    _flushAnimations(t, e) {
      let n = new ut(),
        o = [],
        r = new Map(),
        a = [],
        s = new Map(),
        l = new Map(),
        c = new Map(),
        u = new Set();
      this.disabledNodes.forEach((f) => {
        u.add(f);
        let b = this.driver.query(f, wr, !0);
        for (let P = 0; P < b.length; P++) u.add(b[P]);
      });
      let d = this.bodyNode,
        h = Array.from(this.statesByElement.keys()),
        v = vo(h, this.collectedEnterElements),
        p = new Map(),
        M = 0;
      v.forEach((f, b) => {
        let P = On + M++;
        (p.set(b, P), f.forEach((S) => be(S, P)));
      });
      let N = [],
        z = new Set(),
        K = new Set();
      for (let f = 0; f < this.collectedLeaveElements.length; f++) {
        let b = this.collectedLeaveElements[f],
          P = b[we];
        P &&
          P.setForRemoval &&
          (N.push(b),
          z.add(b),
          P.hasAnimation
            ? this.driver.query(b, Or, !0).forEach((S) => z.add(S))
            : K.add(b));
      }
      let G = new Map(),
        F = vo(h, Array.from(z));
      (F.forEach((f, b) => {
        let P = Nt + M++;
        (G.set(b, P), f.forEach((S) => be(S, P)));
      }),
        t.push(() => {
          (v.forEach((f, b) => {
            let P = p.get(b);
            f.forEach((S) => Je(S, P));
          }),
            F.forEach((f, b) => {
              let P = G.get(b);
              f.forEach((S) => Je(S, P));
            }),
            N.forEach((f) => {
              this.processLeaveNode(f);
            }));
        }));
      let pe = [],
        A = [];
      for (let f = this._namespaceList.length - 1; f >= 0; f--)
        this._namespaceList[f].drainQueuedTransitions(e).forEach((P) => {
          let S = P.player,
            Q = P.element;
          if ((pe.push(S), this.collectedEnterElements.length)) {
            let R = Q[we];
            if (R && R.setForMove) {
              if (
                R.previousTriggersValues &&
                R.previousTriggersValues.has(P.triggerName)
              ) {
                let oe = R.previousTriggersValues.get(P.triggerName),
                  J = this.statesByElement.get(P.element);
                if (J && J.has(P.triggerName)) {
                  let ce = J.get(P.triggerName);
                  ((ce.value = oe), J.set(P.triggerName, ce));
                }
              }
              S.destroy();
              return;
            }
          }
          let Y = !d || !this.driver.containsElement(d, Q),
            V = G.get(Q),
            ie = p.get(Q),
            D = this._buildInstruction(P, n, ie, V, Y);
          if (D.errors && D.errors.length) {
            A.push(D);
            return;
          }
          if (Y) {
            (S.onStart(() => Fe(Q, D.fromStyles)),
              S.onDestroy(() => Me(Q, D.toStyles)),
              o.push(S));
            return;
          }
          if (P.isFallbackTransition) {
            (S.onStart(() => Fe(Q, D.fromStyles)),
              S.onDestroy(() => Me(Q, D.toStyles)),
              o.push(S));
            return;
          }
          let te = [];
          (D.timelines.forEach((R) => {
            ((R.stretchStartingKeyframe = !0),
              this.disabledNodes.has(R.element) || te.push(R));
          }),
            (D.timelines = te),
            n.append(Q, D.timelines));
          let X = { instruction: D, player: S, element: Q };
          (a.push(X),
            D.queriedElements.forEach((R) => ue(s, R, []).push(S)),
            D.preStyleProps.forEach((R, oe) => {
              if (R.size) {
                let J = l.get(oe);
                (J || l.set(oe, (J = new Set())),
                  R.forEach((ce, j) => J.add(j)));
              }
            }),
            D.postStyleProps.forEach((R, oe) => {
              let J = c.get(oe);
              (J || c.set(oe, (J = new Set())), R.forEach((ce, j) => J.add(j)));
            }));
        });
      if (A.length) {
        let f = [];
        (A.forEach((b) => {
          f.push(ro(b.triggerName, b.errors));
        }),
          pe.forEach((b) => b.destroy()),
          this.reportError(f));
      }
      let U = new Map(),
        W = new Map();
      (a.forEach((f) => {
        let b = f.element;
        n.has(b) &&
          (W.set(b, b),
          this._beforeAnimationBuild(f.player.namespaceId, f.instruction, U));
      }),
        o.forEach((f) => {
          let b = f.element;
          this._getPreviousPlayers(
            b,
            !1,
            f.namespaceId,
            f.triggerName,
            null,
          ).forEach((S) => {
            (ue(U, b, []).push(S), S.destroy());
          });
        }));
      let C = N.filter((f) => Co(f, l, c)),
        m = new Map();
      bo(m, this.driver, K, c, Ce).forEach((f) => {
        Co(f, l, c) && C.push(f);
      });
      let k = new Map();
      (v.forEach((f, b) => {
        bo(k, this.driver, new Set(f), l, ot);
      }),
        C.forEach((f) => {
          let b = m.get(f),
            P = k.get(f);
          m.set(f, new Map([...(b?.entries() ?? []), ...(P?.entries() ?? [])]));
        }));
      let ee = [],
        le = [],
        ve = {};
      (a.forEach((f) => {
        let { element: b, player: P, instruction: S } = f;
        if (n.has(b)) {
          if (u.has(b)) {
            (P.onDestroy(() => Me(b, S.toStyles)),
              (P.disabled = !0),
              P.overrideTotalTime(S.totalTime),
              o.push(P));
            return;
          }
          let Q = ve;
          if (W.size > 1) {
            let V = b,
              ie = [];
            for (; (V = V.parentNode); ) {
              let D = W.get(V);
              if (D) {
                Q = D;
                break;
              }
              ie.push(V);
            }
            ie.forEach((D) => W.set(D, Q));
          }
          let Y = this._buildAnimation(P.namespaceId, S, U, r, k, m);
          if ((P.setRealPlayer(Y), Q === ve)) ee.push(P);
          else {
            let V = this.playersByElement.get(Q);
            (V && V.length && (P.parentPlayer = De(V)), o.push(P));
          }
        } else
          (Fe(b, S.fromStyles),
            P.onDestroy(() => Me(b, S.toStyles)),
            le.push(P),
            u.has(b) && o.push(P));
      }),
        le.forEach((f) => {
          let b = r.get(f.element);
          if (b && b.length) {
            let P = De(b);
            f.setRealPlayer(P);
          }
        }),
        o.forEach((f) => {
          f.parentPlayer ? f.syncPlayerEvents(f.parentPlayer) : f.destroy();
        }));
      for (let f = 0; f < N.length; f++) {
        let b = N[f],
          P = b[we];
        if ((Je(b, Nt), P && P.hasAnimation)) continue;
        let S = [];
        if (s.size) {
          let Y = s.get(b);
          Y && Y.length && S.push(...Y);
          let V = this.driver.query(b, Lt, !0);
          for (let ie = 0; ie < V.length; ie++) {
            let D = s.get(V[ie]);
            D && D.length && S.push(...D);
          }
        }
        let Q = S.filter((Y) => !Y.destroyed);
        Q.length ? Dr(this, b, Q) : this.processLeaveNode(b);
      }
      return (
        (N.length = 0),
        ee.forEach((f) => {
          (this.players.push(f),
            f.onDone(() => {
              f.destroy();
              let b = this.players.indexOf(f);
              this.players.splice(b, 1);
            }),
            f.play());
        }),
        ee
      );
    }
    afterFlush(t) {
      this._flushFns.push(t);
    }
    afterFlushAnimationsDone(t) {
      this._whenQuietFns.push(t);
    }
    _getPreviousPlayers(t, e, n, o, r) {
      let a = [];
      if (e) {
        let s = this.playersByQueriedElement.get(t);
        s && (a = s);
      } else {
        let s = this.playersByElement.get(t);
        if (s) {
          let l = !r || r == dt;
          s.forEach((c) => {
            c.queued || (!l && c.triggerName != o) || a.push(c);
          });
        }
      }
      return (
        (n || o) &&
          (a = a.filter(
            (s) => !((n && n != s.namespaceId) || (o && o != s.triggerName)),
          )),
        a
      );
    }
    _beforeAnimationBuild(t, e, n) {
      let o = e.triggerName,
        r = e.element,
        a = e.isRemovalTransition ? void 0 : t,
        s = e.isRemovalTransition ? void 0 : o;
      for (let l of e.timelines) {
        let c = l.element,
          u = c !== r,
          d = ue(n, c, []);
        this._getPreviousPlayers(c, u, a, s, e.toState).forEach((v) => {
          let p = v.getRealPlayer();
          (p.beforeDestroy && p.beforeDestroy(), v.destroy(), d.push(v));
        });
      }
      Fe(r, e.fromStyles);
    }
    _buildAnimation(t, e, n, o, r, a) {
      let s = e.triggerName,
        l = e.element,
        c = [],
        u = new Set(),
        d = new Set(),
        h = e.timelines.map((p) => {
          let M = p.element;
          u.add(M);
          let N = M[we];
          if (N && N.removedBeforeQueried) return new Be(p.duration, p.delay);
          let z = M !== l,
            K = Nr((n.get(M) || Sr).map((U) => U.getRealPlayer())).filter(
              (U) => {
                let W = U;
                return W.element ? W.element === M : !1;
              },
            ),
            G = r.get(M),
            F = a.get(M),
            pe = Cn(this._normalizer, p.keyframes, G, F),
            A = this._buildPlayer(p, pe, K);
          if ((p.subTimeline && o && d.add(M), z)) {
            let U = new pt(t, s, M);
            (U.setRealPlayer(A), c.push(U));
          }
          return A;
        });
      (c.forEach((p) => {
        (ue(this.playersByQueriedElement, p.element, []).push(p),
          p.onDone(() => xr(this.playersByQueriedElement, p.element, p)));
      }),
        u.forEach((p) => be(p, Sn)));
      let v = De(h);
      return (
        v.onDestroy(() => {
          (u.forEach((p) => Je(p, Sn)), Me(l, e.toStyles));
        }),
        d.forEach((p) => {
          ue(o, p, []).push(v);
        }),
        v
      );
    }
    _buildPlayer(t, e, n) {
      return e.length > 0
        ? this.driver.animate(t.element, e, t.duration, t.delay, t.easing, n)
        : new Be(t.duration, t.delay);
    }
  },
  pt = class {
    namespaceId;
    triggerName;
    element;
    _player = new Be();
    _containsRealPlayer = !1;
    _queuedCallbacks = new Map();
    destroyed = !1;
    parentPlayer = null;
    markedForDestroy = !1;
    disabled = !1;
    queued = !0;
    totalTime = 0;
    constructor(t, e, n) {
      ((this.namespaceId = t), (this.triggerName = e), (this.element = n));
    }
    setRealPlayer(t) {
      this._containsRealPlayer ||
        ((this._player = t),
        this._queuedCallbacks.forEach((e, n) => {
          e.forEach((o) => Et(t, n, void 0, o));
        }),
        this._queuedCallbacks.clear(),
        (this._containsRealPlayer = !0),
        this.overrideTotalTime(t.totalTime),
        (this.queued = !1));
    }
    getRealPlayer() {
      return this._player;
    }
    overrideTotalTime(t) {
      this.totalTime = t;
    }
    syncPlayerEvents(t) {
      let e = this._player;
      (e.triggerCallback && t.onStart(() => e.triggerCallback("start")),
        t.onDone(() => this.finish()),
        t.onDestroy(() => this.destroy()));
    }
    _queueEvent(t, e) {
      ue(this._queuedCallbacks, t, []).push(e);
    }
    onDone(t) {
      (this.queued && this._queueEvent("done", t), this._player.onDone(t));
    }
    onStart(t) {
      (this.queued && this._queueEvent("start", t), this._player.onStart(t));
    }
    onDestroy(t) {
      (this.queued && this._queueEvent("destroy", t),
        this._player.onDestroy(t));
    }
    init() {
      this._player.init();
    }
    hasStarted() {
      return this.queued ? !1 : this._player.hasStarted();
    }
    play() {
      !this.queued && this._player.play();
    }
    pause() {
      !this.queued && this._player.pause();
    }
    restart() {
      !this.queued && this._player.restart();
    }
    finish() {
      this._player.finish();
    }
    destroy() {
      ((this.destroyed = !0), this._player.destroy());
    }
    reset() {
      !this.queued && this._player.reset();
    }
    setPosition(t) {
      this.queued || this._player.setPosition(t);
    }
    getPosition() {
      return this.queued ? 0 : this._player.getPosition();
    }
    triggerCallback(t) {
      let e = this._player;
      e.triggerCallback && e.triggerCallback(t);
    }
  };
function xr(i, t, e) {
  let n = i.get(t);
  if (n) {
    if (n.length) {
      let o = n.indexOf(e);
      n.splice(o, 1);
    }
    n.length == 0 && i.delete(t);
  }
  return n;
}
function Er(i) {
  return i ?? null;
}
function Bt(i) {
  return i && i.nodeType === 1;
}
function Ar(i) {
  return i == "start" || i == "done";
}
function _o(i, t) {
  let e = i.style.display;
  return ((i.style.display = t ?? "none"), e);
}
function bo(i, t, e, n, o) {
  let r = [];
  e.forEach((l) => r.push(_o(l)));
  let a = [];
  n.forEach((l, c) => {
    let u = new Map();
    (l.forEach((d) => {
      let h = t.computeStyle(c, d, o);
      (u.set(d, h), (!h || h.length == 0) && ((c[we] = Tr), a.push(c)));
    }),
      i.set(c, u));
  });
  let s = 0;
  return (e.forEach((l) => _o(l, r[s++])), a);
}
function vo(i, t) {
  let e = new Map();
  if ((i.forEach((s) => e.set(s, [])), t.length == 0)) return e;
  let n = 1,
    o = new Set(t),
    r = new Map();
  function a(s) {
    if (!s) return n;
    let l = r.get(s);
    if (l) return l;
    let c = s.parentNode;
    return (
      e.has(c) ? (l = c) : o.has(c) ? (l = n) : (l = a(c)),
      r.set(s, l),
      l
    );
  }
  return (
    t.forEach((s) => {
      let l = a(s);
      l !== n && e.get(l).push(s);
    }),
    e
  );
}
function be(i, t) {
  i.classList?.add(t);
}
function Je(i, t) {
  i.classList?.remove(t);
}
function Dr(i, t, e) {
  De(e).onDone(() => i.processLeaveNode(t));
}
function Nr(i) {
  let t = [];
  return (So(i, t), t);
}
function So(i, t) {
  for (let e = 0; e < i.length; e++) {
    let n = i[e];
    n instanceof Ot ? So(n.players, t) : t.push(n);
  }
}
function Lr(i, t) {
  let e = Object.keys(i),
    n = Object.keys(t);
  if (e.length != n.length) return !1;
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    if (!t.hasOwnProperty(r) || i[r] !== t[r]) return !1;
  }
  return !0;
}
function Co(i, t, e) {
  let n = e.get(i);
  if (!n) return !1;
  let o = t.get(i);
  return (o ? n.forEach((r) => o.add(r)) : t.set(i, n), e.delete(i), !0);
}
var Ze = class {
  _driver;
  _normalizer;
  _transitionEngine;
  _timelineEngine;
  _triggerCache = {};
  onRemovalComplete = (t, e) => {};
  constructor(t, e, n) {
    ((this._driver = e),
      (this._normalizer = n),
      (this._transitionEngine = new qn(t.body, e, n)),
      (this._timelineEngine = new jn(t.body, e, n)),
      (this._transitionEngine.onRemovalComplete = (o, r) =>
        this.onRemovalComplete(o, r)));
  }
  registerTrigger(t, e, n, o, r) {
    let a = t + "-" + o,
      s = this._triggerCache[a];
    if (!s) {
      let l = [],
        c = [],
        u = wo(this._driver, r, l, c);
      if (l.length) throw Gi(o, l);
      ((s = vr(o, u, this._normalizer)), (this._triggerCache[a] = s));
    }
    this._transitionEngine.registerTrigger(e, o, s);
  }
  register(t, e) {
    this._transitionEngine.register(t, e);
  }
  destroy(t, e) {
    this._transitionEngine.destroy(t, e);
  }
  onInsert(t, e, n, o) {
    this._transitionEngine.insertNode(t, e, n, o);
  }
  onRemove(t, e, n) {
    this._transitionEngine.removeNode(t, e, n);
  }
  disableAnimations(t, e) {
    this._transitionEngine.markElementAsDisabled(t, e);
  }
  process(t, e, n, o) {
    if (n.charAt(0) == "@") {
      let [r, a] = Mn(n),
        s = o;
      this._timelineEngine.command(r, e, a, s);
    } else this._transitionEngine.trigger(t, e, n, o);
  }
  listen(t, e, n, o, r) {
    if (n.charAt(0) == "@") {
      let [a, s] = Mn(n);
      return this._timelineEngine.listen(a, e, s, r);
    }
    return this._transitionEngine.listen(t, e, n, o, r);
  }
  flush(t = -1) {
    this._transitionEngine.flush(t);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(t) {
    this._transitionEngine.afterFlushAnimationsDone(t);
  }
};
function Ir(i, t) {
  let e = null,
    n = null;
  return (
    Array.isArray(t) && t.length
      ? ((e = Nn(t[0])), t.length > 1 && (n = Nn(t[t.length - 1])))
      : t instanceof Map && (e = Nn(t)),
    e || n ? new Fr(i, e, n) : null
  );
}
var Fr = (() => {
  class i {
    _element;
    _startStyles;
    _endStyles;
    static initialStylesByElement = new WeakMap();
    _state = 0;
    _initialStyles;
    constructor(e, n, o) {
      ((this._element = e), (this._startStyles = n), (this._endStyles = o));
      let r = i.initialStylesByElement.get(e);
      (r || i.initialStylesByElement.set(e, (r = new Map())),
        (this._initialStyles = r));
    }
    start() {
      this._state < 1 &&
        (this._startStyles &&
          Me(this._element, this._startStyles, this._initialStyles),
        (this._state = 1));
    }
    finish() {
      (this.start(),
        this._state < 2 &&
          (Me(this._element, this._initialStyles),
          this._endStyles &&
            (Me(this._element, this._endStyles), (this._endStyles = null)),
          (this._state = 1)));
    }
    destroy() {
      (this.finish(),
        this._state < 3 &&
          (i.initialStylesByElement.delete(this._element),
          this._startStyles &&
            (Fe(this._element, this._startStyles), (this._endStyles = null)),
          this._endStyles &&
            (Fe(this._element, this._endStyles), (this._endStyles = null)),
          Me(this._element, this._initialStyles),
          (this._state = 3)));
    }
  }
  return i;
})();
function Nn(i) {
  let t = null;
  return (
    i.forEach((e, n) => {
      Rr(n) && ((t = t || new Map()), t.set(n, e));
    }),
    t
  );
}
function Rr(i) {
  return i === "display" || i === "position";
}
var Qt = class {
    element;
    keyframes;
    options;
    _specialStyles;
    _onDoneFns = [];
    _onStartFns = [];
    _onDestroyFns = [];
    _duration;
    _delay;
    _initialized = !1;
    _finished = !1;
    _started = !1;
    _destroyed = !1;
    _finalKeyframe;
    _originalOnDoneFns = [];
    _originalOnStartFns = [];
    domPlayer;
    time = 0;
    parentPlayer = null;
    currentSnapshot = new Map();
    constructor(t, e, n, o) {
      ((this.element = t),
        (this.keyframes = e),
        (this.options = n),
        (this._specialStyles = o),
        (this._duration = n.duration),
        (this._delay = n.delay || 0),
        (this.time = this._duration + this._delay));
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((t) => t()),
        (this._onDoneFns = []));
    }
    init() {
      (this._buildPlayer(), this._preparePlayerBeforeStart());
    }
    _buildPlayer() {
      if (this._initialized) return;
      this._initialized = !0;
      let t = this.keyframes;
      ((this.domPlayer = this._triggerWebAnimation(
        this.element,
        t,
        this.options,
      )),
        (this._finalKeyframe = t.length ? t[t.length - 1] : new Map()));
      let e = () => this._onFinish();
      (this.domPlayer.addEventListener("finish", e),
        this.onDestroy(() => {
          this.domPlayer.removeEventListener("finish", e);
        }));
    }
    _preparePlayerBeforeStart() {
      this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
    }
    _convertKeyframesToObject(t) {
      let e = [];
      return (
        t.forEach((n) => {
          e.push(Object.fromEntries(n));
        }),
        e
      );
    }
    _triggerWebAnimation(t, e, n) {
      return t.animate(this._convertKeyframesToObject(e), n);
    }
    onStart(t) {
      (this._originalOnStartFns.push(t), this._onStartFns.push(t));
    }
    onDone(t) {
      (this._originalOnDoneFns.push(t), this._onDoneFns.push(t));
    }
    onDestroy(t) {
      this._onDestroyFns.push(t);
    }
    play() {
      (this._buildPlayer(),
        this.hasStarted() ||
          (this._onStartFns.forEach((t) => t()),
          (this._onStartFns = []),
          (this._started = !0),
          this._specialStyles && this._specialStyles.start()),
        this.domPlayer.play());
    }
    pause() {
      (this.init(), this.domPlayer.pause());
    }
    finish() {
      (this.init(),
        this._specialStyles && this._specialStyles.finish(),
        this._onFinish(),
        this.domPlayer.finish());
    }
    reset() {
      (this._resetDomPlayerState(),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._started = !1),
        (this._onStartFns = this._originalOnStartFns),
        (this._onDoneFns = this._originalOnDoneFns));
    }
    _resetDomPlayerState() {
      this.domPlayer && this.domPlayer.cancel();
    }
    restart() {
      (this.reset(), this.play());
    }
    hasStarted() {
      return this._started;
    }
    destroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this._resetDomPlayerState(),
        this._onFinish(),
        this._specialStyles && this._specialStyles.destroy(),
        this._onDestroyFns.forEach((t) => t()),
        (this._onDestroyFns = []));
    }
    setPosition(t) {
      (this.domPlayer === void 0 && this.init(),
        (this.domPlayer.currentTime = t * this.time));
    }
    getPosition() {
      return +(this.domPlayer.currentTime ?? 0) / this.time;
    }
    get totalTime() {
      return this._delay + this._duration;
    }
    beforeDestroy() {
      let t = new Map();
      (this.hasStarted() &&
        this._finalKeyframe.forEach((n, o) => {
          o !== "offset" && t.set(o, this._finished ? n : Ft(this.element, o));
        }),
        (this.currentSnapshot = t));
    }
    triggerCallback(t) {
      let e = t === "start" ? this._onStartFns : this._onDoneFns;
      (e.forEach((n) => n()), (e.length = 0));
    }
  },
  Wt = class {
    validateStyleProperty(t) {
      return !0;
    }
    validateAnimatableStyleProperty(t) {
      return !0;
    }
    containsElement(t, e) {
      return wn(t, e);
    }
    getParentElement(t) {
      return Dt(t);
    }
    query(t, e, n) {
      return Pn(t, e, n);
    }
    computeStyle(t, e, n) {
      return Ft(t, e);
    }
    animate(t, e, n, o, r, a = []) {
      let s = o == 0 ? "both" : "forwards",
        l = { duration: n, delay: o, fill: s };
      r && (l.easing = r);
      let c = new Map(),
        u = a.filter((v) => v instanceof Qt);
      co(n, o) &&
        u.forEach((v) => {
          v.currentSnapshot.forEach((p, M) => c.set(M, p));
        });
      let d = ao(e).map((v) => new Map(v));
      d = uo(t, d, c);
      let h = Ir(t, d);
      return new Qt(t, d, l, h);
    }
  };
var Ut = "@",
  To = "@.disabled",
  Ht = class {
    namespaceId;
    delegate;
    engine;
    _onDestroy;
    ɵtype = 0;
    constructor(t, e, n, o) {
      ((this.namespaceId = t),
        (this.delegate = e),
        (this.engine = n),
        (this._onDestroy = o));
    }
    get data() {
      return this.delegate.data;
    }
    destroyNode(t) {
      this.delegate.destroyNode?.(t);
    }
    destroy() {
      (this.engine.destroy(this.namespaceId, this.delegate),
        this.engine.afterFlushAnimationsDone(() => {
          queueMicrotask(() => {
            this.delegate.destroy();
          });
        }),
        this._onDestroy?.());
    }
    createElement(t, e) {
      return this.delegate.createElement(t, e);
    }
    createComment(t) {
      return this.delegate.createComment(t);
    }
    createText(t) {
      return this.delegate.createText(t);
    }
    appendChild(t, e) {
      (this.delegate.appendChild(t, e),
        this.engine.onInsert(this.namespaceId, e, t, !1));
    }
    insertBefore(t, e, n, o = !0) {
      (this.delegate.insertBefore(t, e, n),
        this.engine.onInsert(this.namespaceId, e, t, o));
    }
    removeChild(t, e, n) {
      this.parentNode(e) &&
        this.engine.onRemove(this.namespaceId, e, this.delegate);
    }
    selectRootElement(t, e) {
      return this.delegate.selectRootElement(t, e);
    }
    parentNode(t) {
      return this.delegate.parentNode(t);
    }
    nextSibling(t) {
      return this.delegate.nextSibling(t);
    }
    setAttribute(t, e, n, o) {
      this.delegate.setAttribute(t, e, n, o);
    }
    removeAttribute(t, e, n) {
      this.delegate.removeAttribute(t, e, n);
    }
    addClass(t, e) {
      this.delegate.addClass(t, e);
    }
    removeClass(t, e) {
      this.delegate.removeClass(t, e);
    }
    setStyle(t, e, n, o) {
      this.delegate.setStyle(t, e, n, o);
    }
    removeStyle(t, e, n) {
      this.delegate.removeStyle(t, e, n);
    }
    setProperty(t, e, n) {
      e.charAt(0) == Ut && e == To
        ? this.disableAnimations(t, !!n)
        : this.delegate.setProperty(t, e, n);
    }
    setValue(t, e) {
      this.delegate.setValue(t, e);
    }
    listen(t, e, n, o) {
      return this.delegate.listen(t, e, n, o);
    }
    disableAnimations(t, e) {
      this.engine.disableAnimations(t, e);
    }
  },
  Vn = class extends Ht {
    factory;
    constructor(t, e, n, o, r) {
      (super(e, n, o, r), (this.factory = t), (this.namespaceId = e));
    }
    setProperty(t, e, n) {
      e.charAt(0) == Ut
        ? e.charAt(1) == "." && e == To
          ? ((n = n === void 0 ? !0 : !!n), this.disableAnimations(t, n))
          : this.engine.process(this.namespaceId, t, e.slice(1), n)
        : this.delegate.setProperty(t, e, n);
    }
    listen(t, e, n, o) {
      if (e.charAt(0) == Ut) {
        let r = zr(t),
          a = e.slice(1),
          s = "";
        return (
          a.charAt(0) != Ut && ([a, s] = Br(a)),
          this.engine.listen(this.namespaceId, r, a, s, (l) => {
            let c = l._data || -1;
            this.factory.scheduleListenerCallback(c, n, l);
          })
        );
      }
      return this.delegate.listen(t, e, n, o);
    }
  };
function zr(i) {
  switch (i) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return i;
  }
}
function Br(i) {
  let t = i.indexOf("."),
    e = i.substring(0, t),
    n = i.slice(t + 1);
  return [e, n];
}
var Gt = class {
  delegate;
  engine;
  _zone;
  _currentId = 0;
  _microtaskId = 1;
  _animationCallbacksBuffer = [];
  _rendererCache = new Map();
  _cdRecurDepth = 0;
  constructor(t, e, n) {
    ((this.delegate = t),
      (this.engine = e),
      (this._zone = n),
      (e.onRemovalComplete = (o, r) => {
        r?.removeChild(null, o);
      }));
  }
  createRenderer(t, e) {
    let n = "",
      o = this.delegate.createRenderer(t, e);
    if (!t || !e?.data?.animation) {
      let c = this._rendererCache,
        u = c.get(o);
      if (!u) {
        let d = () => c.delete(o);
        ((u = new Ht(n, o, this.engine, d)), c.set(o, u));
      }
      return u;
    }
    let r = e.id,
      a = e.id + "-" + this._currentId;
    (this._currentId++, this.engine.register(a, t));
    let s = (c) => {
      Array.isArray(c)
        ? c.forEach(s)
        : this.engine.registerTrigger(r, a, t, c.name, c);
    };
    return (e.data.animation.forEach(s), new Vn(this, a, o, this.engine));
  }
  begin() {
    (this._cdRecurDepth++, this.delegate.begin && this.delegate.begin());
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  scheduleListenerCallback(t, e, n) {
    if (t >= 0 && t < this._microtaskId) {
      this._zone.run(() => e(n));
      return;
    }
    let o = this._animationCallbacksBuffer;
    (o.length == 0 &&
      queueMicrotask(() => {
        this._zone.run(() => {
          (o.forEach((r) => {
            let [a, s] = r;
            a(s);
          }),
            (this._animationCallbacksBuffer = []));
        });
      }),
      o.push([e, n]));
  }
  end() {
    (this._cdRecurDepth--,
      this._cdRecurDepth == 0 &&
        this._zone.runOutsideAngular(() => {
          (this._scheduleCountTask(), this.engine.flush(this._microtaskId));
        }),
      this.delegate.end && this.delegate.end());
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
  componentReplaced(t) {
    (this.engine.flush(), this.delegate.componentReplaced?.(t));
  }
};
var jr = (() => {
  class i extends Ze {
    constructor(e, n, o) {
      super(e, n, o);
    }
    ngOnDestroy() {
      this.flush();
    }
    static ɵfac = function (n) {
      return new (n || i)(Le(Mt), Le($e), Le(qe));
    };
    static ɵprov = _e({ token: i, factory: i.ɵfac });
  }
  return i;
})();
function $r() {
  return new jt();
}
function qr(i, t, e) {
  return new Gt(i, t, e);
}
var xo = [
    { provide: qe, useFactory: $r },
    { provide: Ze, useClass: jr },
    { provide: oi, useFactory: qr, deps: [yi, Ze, ni] },
  ],
  Xs = [
    { provide: $e, useClass: Kn },
    { provide: pn, useValue: "NoopAnimations" },
    ...xo,
  ],
  Vr = [
    { provide: $e, useFactory: () => new Wt() },
    { provide: pn, useFactory: () => "BrowserAnimations" },
    ...xo,
  ];
function Eo() {
  return (ii("NgEagerAnimations"), [...Vr]);
}
var Hn = (function (i) {
    return (
      (i.ballScaleMultiple = "ball-scale-multiple"),
      (i.ballSpin = "ball-spin"),
      (i.ballSpinClockwise = "ball-spin-clockwise"),
      (i.ballSpinClockwiseFadeRotating = "ball-spin-clockwise-fade-rotating"),
      (i.ballSpinFadeRotating = "ball-spin-fade-rotating"),
      (i.chasingDots = "chasing-dots"),
      (i.circle = "circle"),
      (i.cubeGrid = "cube-grid"),
      (i.doubleBounce = "double-bounce"),
      (i.fadingCircle = "fading-circle"),
      (i.foldingCube = "folding-cube"),
      (i.pulse = "pulse"),
      (i.rectangleBounce = "rectangle-bounce"),
      (i.rectangleBounceParty = "rectangle-bounce-party"),
      (i.rectangleBouncePulseOut = "rectangle-bounce-pulse-out"),
      (i.rectangleBouncePulseOutRapid = "rectangle-bounce-pulse-out-rapid"),
      (i.rotatingPlane = "rotating-plane"),
      (i.squareJellyBox = "square-jelly-box"),
      (i.squareLoader = "square-loader"),
      (i.threeBounce = "three-bounce"),
      (i.threeStrings = "three-strings"),
      (i.wanderingCubes = "wandering-cubes"),
      i
    );
  })(Hn || {}),
  ft = (function (i) {
    return (
      (i.bottomCenter = "bottom-center"),
      (i.bottomLeft = "bottom-left"),
      (i.bottomRight = "bottom-right"),
      (i.centerCenter = "center-center"),
      (i.centerLeft = "center-left"),
      (i.centerRight = "center-right"),
      (i.topCenter = "top-center"),
      (i.topLeft = "top-left"),
      (i.topRight = "top-right"),
      i
    );
  })(ft || {}),
  Lo = (function (i) {
    return ((i.leftToRight = "ltr"), (i.rightToLeft = "rtl"), i);
  })(Lo || {}),
  Yt = "fg-default",
  Xt = "bg-default",
  Kr = "master",
  Qr = {},
  Ao = 0,
  Wn = 0,
  Do = 1001,
  No = 601,
  et = !1,
  mt = !0,
  Wr = 500,
  Hr = 300;
var Gr = {
    bgsColor: "#00ACC1",
    bgsOpacity: 0.5,
    bgsPosition: ft.bottomRight,
    bgsSize: 60,
    bgsType: Hn.ballSpinClockwise,
    blur: 5,
    delay: 0,
    fastFadeOut: !1,
    fgsColor: "#00ACC1",
    fgsPosition: ft.centerCenter,
    fgsSize: 60,
    fgsType: Hn.ballSpinClockwise,
    gap: 24,
    logoPosition: ft.centerCenter,
    logoSize: 120,
    logoUrl: "",
    masterLoaderId: Kr,
    overlayBorderRadius: "0",
    overlayColor: "rgba(40, 40, 40, 0.8)",
    pbColor: "#00ACC1",
    pbDirection: Lo.leftToRight,
    pbThickness: 3,
    hasProgressBar: !0,
    text: "",
    textColor: "#FFFFFF",
    textPosition: ft.centerCenter,
    maxTime: -1,
    minTime: 300,
  },
  Io = new _t("ngxUiLoaderCustom.config"),
  Fo = (() => {
    class i {
      constructor(e) {
        ((this.config = e),
          (this.defaultConfig = Pe({}, Gr)),
          this.config &&
            (this.config.minTime &&
              this.config.minTime < Wn &&
              (this.config.minTime = Wn),
            (this.defaultConfig = Pe(Pe({}, this.defaultConfig), this.config))),
          (this.loaders = {}),
          (this.showForeground = new nt({ loaderId: "", isShow: !1 })),
          (this.showForeground$ = this.showForeground.asObservable()),
          (this.showBackground = new nt({ loaderId: "", isShow: !1 })),
          (this.showBackground$ = this.showBackground.asObservable()),
          (this.fgClosing = new nt({ loaderId: "", isShow: !1 })),
          (this.foregroundClosing$ = this.fgClosing.asObservable()),
          (this.bgClosing = new nt({ loaderId: "", isShow: !1 })),
          (this.backgroundClosing$ = this.bgClosing.asObservable()));
      }
      bindLoaderData(e) {
        let n = e === this.defaultConfig.masterLoaderId;
        if (this.loaders[e]) {
          if (this.loaders[e].isBound)
            throw new Error(`[ngx-ui-loader] - loaderId "${e}" is duplicated.`);
          ((this.loaders[e].isBound = !0),
            (this.loaders[e].isMaster = n),
            this.hasRunningTask(mt, e)
              ? this.showForeground.next({ loaderId: e, isShow: !0 })
              : this.hasRunningTask(et, e) &&
                this.showBackground.next({ loaderId: e, isShow: !0 }));
        } else this.createLoaderData(e, n, !0);
      }
      destroyLoaderData(e) {
        (this.stopAllLoader(e), delete this.loaders[e]);
      }
      getDefaultConfig() {
        return Pe({}, this.defaultConfig);
      }
      getLoaders() {
        return JSON.parse(JSON.stringify(this.loaders));
      }
      getLoader(e) {
        return (
          (e = e || this.defaultConfig.masterLoaderId),
          this.loaders[e] ? JSON.parse(JSON.stringify(this.loaders[e])) : null
        );
      }
      startLoader(e, n = Yt, o) {
        this.readyToStart(e, n, !0, o) &&
          (this.loaders[e].tasks[n].isOtherRunning ||
            (this.hasRunningTask(et, e) &&
              (this.backgroundCloseout(e),
              this.showBackground.next({ loaderId: e, isShow: !1 })),
            this.showForeground.next({ loaderId: e, isShow: !0 })));
      }
      start(e = Yt, n) {
        this.startLoader(this.defaultConfig.masterLoaderId, e, n);
      }
      startBackgroundLoader(e, n = Xt, o) {
        this.readyToStart(e, n, !1, o) &&
          !this.hasRunningTask(mt, e) &&
          !this.loaders[e].tasks[n].isOtherRunning &&
          this.showBackground.next({ loaderId: e, isShow: !0 });
      }
      startBackground(e = Xt, n) {
        this.startBackgroundLoader(this.defaultConfig.masterLoaderId, e, n);
      }
      stopLoader(e, n = Yt) {
        this.readyToStop(e, n) &&
          (this.hasRunningTask(mt, e) ||
            (this.foregroundCloseout(e),
            this.showForeground.next({ loaderId: e, isShow: !1 }),
            this.hasRunningTask(et, e) &&
              setTimeout(
                () => {
                  this.hasRunningTask(et, e) &&
                    this.showBackground.next({ loaderId: e, isShow: !0 });
                },
                this.defaultConfig.fastFadeOut ? Hr : Wr,
              )));
      }
      stop(e = Yt) {
        this.stopLoader(this.defaultConfig.masterLoaderId, e);
      }
      stopBackgroundLoader(e, n = Xt) {
        this.readyToStop(e, n) &&
          !this.hasRunningTask(mt, e) &&
          !this.hasRunningTask(et, e) &&
          (this.backgroundCloseout(e),
          this.showBackground.next({ loaderId: e, isShow: !1 }));
      }
      stopBackground(e = Xt) {
        this.stopBackgroundLoader(this.defaultConfig.masterLoaderId, e);
      }
      stopAllLoader(e) {
        if (!this.loaders[e]) {
          console.warn(`[ngx-ui-loader] - loaderId "${e}" does not exist.`);
          return;
        }
        (this.hasRunningTask(mt, e)
          ? (this.foregroundCloseout(e),
            this.showForeground.next({ loaderId: e, isShow: !1 }))
          : this.hasRunningTask(et, e) &&
            (this.backgroundCloseout(e),
            this.showBackground.next({ loaderId: e, isShow: !1 })),
          this.clearAllTimers(this.loaders[e].tasks),
          (this.loaders[e].tasks = {}));
      }
      stopAll() {
        this.stopAllLoader(this.defaultConfig.masterLoaderId);
      }
      hasRunningTask(e, n, o) {
        if (this.loaders[n]) {
          let r = this.loaders[n].tasks;
          return o
            ? r[o]
              ? !!r[o].startAt
              : !1
            : Object.keys(r).some(
                (a) => !!r[a].startAt && r[a].isForeground === e,
              );
        }
        return !1;
      }
      createLoaderData(e, n, o) {
        this.loaders[e] ||
          (this.loaders[e] = {
            loaderId: e,
            tasks: {},
            isMaster: n,
            isBound: o,
          });
      }
      foregroundCloseout(e) {
        (this.fgClosing.next({ loaderId: e, isShow: !0 }),
          setTimeout(
            () => {
              this.fgClosing.next({ loaderId: e, isShow: !1 });
            },
            this.defaultConfig.fastFadeOut ? No : Do,
          ));
      }
      backgroundCloseout(e) {
        (this.bgClosing.next({ loaderId: e, isShow: !0 }),
          setTimeout(
            () => {
              this.bgClosing.next({ loaderId: e, isShow: !1 });
            },
            this.defaultConfig.fastFadeOut ? No : Do,
          ));
      }
      clearTimers(e) {
        (clearTimeout(e.delayTimer),
          clearTimeout(e.maxTimer),
          clearTimeout(e.minTimer));
      }
      clearAllTimers(e) {
        Object.keys(e).map((n) => {
          this.clearTimers(e[n]);
        });
      }
      readyToStart(e, n, o, r = Qr) {
        this.createLoaderData(e, void 0, !1);
        let a = this.hasRunningTask(o, e);
        if (!this.loaders[e].tasks[n])
          this.loaders[e].tasks[n] = {
            taskId: n,
            isForeground: o,
            minTime: r.minTime >= Wn ? r.minTime : this.defaultConfig.minTime,
            maxTime: r.maxTime ? r.maxTime : this.defaultConfig.maxTime,
            delay: r.delay >= Ao ? r.delay : this.defaultConfig.delay,
          };
        else if (this.loaders[e].tasks[n].isForeground !== o)
          throw new Error(`[ngx-ui-loader] - taskId "${n}" is duplicated.`);
        return !(
          this.setDelayTimer(this.loaders[e].tasks[n], e) ||
          ((this.loaders[e].tasks[n] = Xn(Pe({}, this.loaders[e].tasks[n]), {
            isOtherRunning: a,
            startAt: Date.now(),
          })),
          this.setMaxTimer(this.loaders[e].tasks[n], e),
          !this.loaders[e].isBound)
        );
      }
      readyToStop(e, n) {
        if (!this.loaders[e])
          return (
            console.warn(`[ngx-ui-loader] - loaderId "${e}" does not exist.`),
            !1
          );
        let o = this.loaders[e].tasks[n];
        return o
          ? o.isDelayed
            ? (this.clearTimers(o), delete this.loaders[e].tasks[n], !1)
            : this.setMinTimer(o, e)
              ? !1
              : (this.clearTimers(o), delete this.loaders[e].tasks[n], !0)
          : !1;
      }
      setDelayTimer(e, n) {
        if (e.delay > Ao) {
          if (e.isDelayed) return !0;
          if (!e.delayTimer)
            return (
              (e.isDelayed = !0),
              (e.delayTimer = setTimeout(() => {
                ((e.isDelayed = !1),
                  e.isForeground
                    ? this.startLoader(n, e.taskId)
                    : this.startBackgroundLoader(n, e.taskId));
              }, e.delay)),
              !0
            );
        }
        return !1;
      }
      setMaxTimer(e, n) {
        e.maxTime > e.minTime &&
          (clearTimeout(e.maxTimer),
          (e.maxTimer = setTimeout(() => {
            e.isForeground
              ? this.stopLoader(n, e.taskId)
              : this.stopBackgroundLoader(n, e.taskId);
          }, e.maxTime)));
      }
      setMinTimer(e, n) {
        let o = Date.now();
        return e.startAt && e.startAt + e.minTime > o
          ? ((e.minTimer = setTimeout(
              () => {
                e.isForeground
                  ? this.stopLoader(n, e.taskId)
                  : this.stopBackgroundLoader(n, e.taskId);
              },
              e.startAt + e.minTime - o,
            )),
            !0)
          : !1;
      }
    }
    return (
      (i.ɵfac = function (e) {
        return new (e || i)(Le(Io, 8));
      }),
      (i.ɵprov = _e({ token: i, factory: i.ɵfac, providedIn: "root" })),
      i
    );
  })();
var Jt = (() => {
    class i {
      static forRoot(e) {
        return { ngModule: i, providers: [{ provide: Io, useValue: e }] };
      }
    }
    return (
      (i.ɵfac = function (e) {
        return new (e || i)();
      }),
      (i.ɵmod = fn({ type: i })),
      (i.ɵinj = un({ imports: [[We]] })),
      i
    );
  })(),
  va = new _t("ngxUiLoaderRouterCustom.config");
var Ca = new _t("ngxUiLoaderHttpCustom.config");
var tt = class i {
  document = x(Mt);
  platformId = x(Ie);
  isDarkTheme = Z(!1);
  constructor() {
    let t = ye(this.platformId) ? localStorage.getItem("theme") : null;
    (t === "dark"
      ? this.setTheme(!0)
      : this.document.documentElement.classList.remove("dark"),
      this.isDarkTheme.set(t === "dark"));
  }
  setTheme(t) {
    (ye(this.platformId) && localStorage.setItem("theme", t ? "dark" : "light"),
      this.document.documentElement.classList.toggle("dark", t),
      this.isDarkTheme.set(t));
  }
  toggleTheme() {
    let t = !this.isDarkTheme();
    this.setTheme(t);
  }
  getTheme() {
    return this.isDarkTheme;
  }
  static ɵfac = function (e) {
    return new (e || i)();
  };
  static ɵprov = _e({ token: i, factory: i.ɵfac, providedIn: "root" });
};
var Te = class i {
  http = x(bi);
  layoutService = x(Oe);
  getHeaderData() {
    return this.http.get(
      st(rt.headerJsonUrl, this.layoutService.currentLang()),
    );
  }
  getFooterData() {
    return this.http.get(
      st(rt.footerJsonUrl, this.layoutService.currentLang()),
    );
  }
  getFloatingContactUsData() {
    return this.http.get(
      st(rt.floatingContactUsJsonUrl, this.layoutService.currentLang()),
    );
  }
  getBannerData() {
    return this.http.get(
      st(rt.bannerJsonUrl, this.layoutService.currentLang()),
    );
  }
  static ɵfac = function (e) {
    return new (e || i)();
  };
  static ɵprov = _e({ token: i, factory: i.ɵfac, providedIn: "root" });
};
var Zt = class i {
  themeService = x(tt);
  landingService = x(Te);
  floatingContactUsData = Z({});
  ngOnInit() {
    this.landingService.getFloatingContactUsData().subscribe((t) => {
      this.floatingContactUsData.set(t);
    });
  }
  static ɵfac = function (e) {
    return new (e || i)();
  };
  static ɵcmp = H({
    type: i,
    selectors: [["app-floating-contact-us-button"]],
    decls: 4,
    vars: 4,
    consts: [
      [
        "target",
        "_blank",
        "aria-label",
        "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627",
        1,
        "fixed",
        "z-50",
        "flex",
        "items-center",
        "gap-3",
        "px-4",
        "py-3",
        "text-sm",
        "font-semibold",
        "text-white",
        "transition-all",
        "duration-300",
        "bg-green-600",
        "rounded-full",
        "shadow-lg",
        "bottom-5",
        "end-5",
        "hover:bg-green-700",
        "dark:bg-green-500",
        "dark:hover:bg-green-400",
        3,
        "href",
      ],
      [1, "hidden", "sm:inline"],
    ],
    template: function (e, n) {
      (e & 1 && (g(0, "a", 0), O(1, "i"), g(2, "span", 1), q(3), y()()),
        e & 2 &&
          (w("href", n.floatingContactUsData().link, ae),
          _(),
          Ee("text-lg  sm:text-xl " + n.floatingContactUsData().icon),
          _(2),
          re(n.floatingContactUsData().label)));
    },
    encapsulation: 2,
    changeDetection: 0,
  });
};
var Xr = ["menuContainer"],
  Jr = (i, t) => ({
    "max-h-[75vh] p-4 overflow-y-auto rounded-lg bg-gray-900/95 backdrop-blur-lg border border-gray-700/50":
      i,
    "w-full": t,
  }),
  Zr = (i, t) => ({
    "space-y-4": i,
    "flex items-center justify-center gap-2": t,
  }),
  es = (i) => ({ "has-submenu": i }),
  Ro = (i) => ({ "text-white bg-white/20": i }),
  ts = (i) => ({ "rotate-180": i }),
  ns = (i, t) => ({
    "ps-4 mt-3 space-y-2 border-s-2 border-gray-700/50 animate-fade-in": i,
    "absolute top-16 start-0 z-30 w-[55vw] max-w-6xl p-6 bg-gray-900/95 backdrop-blur-xl rounded-xl border border-gray-600/30 shadow-2xl":
      t,
  }),
  is = (i, t) => ({
    "space-y-4": i,
    "grid grid-cols-2 lg:grid-cols-3 gap-6": t,
  });
function os(i, t) {
  if ((i & 1 && O(0, "i", 11), i & 2)) {
    let e = T(2).$implicit;
    Ee(e.icon + " text-lg");
  }
}
function rs(i, t) {
  if ((i & 1 && (g(0, "span", 12), q(1), y()), i & 2)) {
    let e = T(2).$implicit,
      n = T();
    (w("ngClass", n.badgeClass(e.badge.type)), _(), Ae(" ", e.badge.text, " "));
  }
}
function ss(i, t) {
  if (i & 1) {
    let e = he();
    (g(0, "a", 8),
      ne("click", function (o) {
        me(e);
        let r = T().$implicit,
          a = T();
        return fe(a.navigate(r, o));
      }),
      $(1, os, 1, 2, "i", 9),
      g(2, "span"),
      q(3),
      y(),
      $(4, rs, 2, 2, "span", 10),
      y());
  }
  if (i & 2) {
    let e = T().$implicit,
      n = T();
    (w("routerLink", e.link)("ngClass", Re(5, Ro, n.isActive(e))),
      _(),
      w("ngIf", e.icon),
      _(2),
      re(e.label),
      _(),
      w("ngIf", e.badge));
  }
}
function as(i, t) {
  if ((i & 1 && O(0, "i", 11), i & 2)) {
    let e = T(2).$implicit;
    Ee(e.icon + " text-lg");
  }
}
function ls(i, t) {
  if ((i & 1 && (g(0, "span", 12), q(1), y()), i & 2)) {
    let e = T(2).$implicit,
      n = T();
    (w("ngClass", n.badgeClass(e.badge.type)), _(), Ae(" ", e.badge.text, " "));
  }
}
function cs(i, t) {
  if (i & 1) {
    let e = he();
    (g(0, "button", 13),
      ne("click", function () {
        me(e);
        let o = T().$implicit,
          r = T();
        return fe(r.toggleMenuState(o.label));
      }),
      g(1, "div", 14),
      $(2, as, 1, 2, "i", 9),
      g(3, "span"),
      q(4),
      y()(),
      g(5, "div", 14),
      $(6, ls, 2, 2, "span", 10),
      O(7, "i", 15),
      y()());
  }
  if (i & 2) {
    let e = T().$implicit,
      n = T();
    (w("ngClass", Re(7, Ro, n.activeMenu() === e.label)),
      ri("aria-expanded", n.activeMenu() === e.label)(
        "aria-controls",
        "submenu-" + e.label,
      ),
      _(2),
      w("ngIf", e.icon),
      _(2),
      re(e.label),
      _(2),
      w("ngIf", e.badge),
      _(),
      w("ngClass", Re(9, ts, n.activeMenu() === e.label)));
  }
}
function ds(i, t) {
  if ((i & 1 && (g(0, "div", 27), O(1, "img", 28), y()), i & 2)) {
    let e = T().$implicit;
    (_(), w("src", e.image.src, ae)("alt", e.image.alt));
  }
}
function us(i, t) {
  if ((i & 1 && O(0, "i"), i & 2)) {
    let e = T().$implicit;
    Ee(e.icon + " me-3 text-lg opacity-70");
  }
}
function gs(i, t) {
  if (i & 1) {
    let e = he();
    (g(0, "a", 29),
      ne("click", function (o) {
        let r = me(e).$implicit,
          a = T(4);
        return fe(a.navigate(r, o));
      }),
      $(1, us, 1, 2, "i", 30),
      g(2, "span", 31),
      q(3),
      y()());
  }
  if (i & 2) {
    let e = t.$implicit;
    (w("routerLink", e.link), _(), w("ngIf", e.icon), _(2), re(e.label));
  }
}
function ps(i, t) {
  if (
    (i & 1 &&
      (ci(0),
      g(1, "div", 19)(2, "div", 20),
      $(3, ds, 2, 2, "div", 21),
      g(4, "div", 22)(5, "div", 23)(6, "h3", 24),
      q(7),
      y(),
      O(8, "app-custom-hr-line"),
      y(),
      g(9, "div", 25),
      $(10, gs, 4, 3, "a", 26),
      y()()()(),
      di()),
    i & 2)
  ) {
    let e = t.$implicit,
      n = T(3);
    (_(3),
      w("ngIf", !n.isMobileView() && e.image),
      _(4),
      Ae(" ", e.title, " "),
      _(3),
      w("ngForOf", e.items));
  }
}
function ms(i, t) {
  if (
    (i & 1 &&
      (g(0, "div", 16)(1, "div", 17),
      $(2, ps, 11, 3, "ng-container", 18),
      y()()),
    i & 2)
  ) {
    let e = T().$implicit,
      n = T();
    (w("id", "submenu-" + e.label)(
      "ngClass",
      ze(4, ns, n.isMobileView(), !n.isMobileView()),
    ),
      _(),
      w("ngClass", ze(7, is, n.isMobileView(), !n.isMobileView())),
      _(),
      w("ngForOf", e.categories));
  }
}
function fs(i, t) {
  if (
    (i & 1 &&
      (g(0, "li", 4),
      $(1, ss, 5, 7, "a", 5)(2, cs, 8, 11, "button", 6)(3, ms, 3, 10, "div", 7),
      y()),
    i & 2)
  ) {
    let e = t.$implicit,
      n = T();
    (w("ngClass", Re(4, es, e.categories)),
      _(),
      w("ngIf", !e.categories),
      _(),
      w("ngIf", e.categories),
      _(),
      w("ngIf", e.categories && n.activeMenu() === e.label));
  }
}
var en = class i {
  router = x(ke);
  platformId = x(Ie);
  navigationService = x(He);
  menuItems = gn.required();
  isMobileView = gn.required();
  toggleMenu = new ti();
  activeMenu = Z(null);
  currentRoute = Z("/");
  menuContainer;
  clickListener = () => {};
  ngOnInit() {
    this.initRoute();
  }
  ngAfterViewInit() {
    this.setupClickListener();
  }
  ngOnDestroy() {
    ye(this.platformId) &&
      (document.removeEventListener("click", this.clickListener),
      console.log("Cleaned up click listener"));
  }
  setupClickListener() {
    !ye(this.platformId) ||
      !this.menuContainer?.nativeElement ||
      ((this.clickListener = (t) => {
        let e = t.target;
        this.menuContainer.nativeElement.contains(e) ||
          (this.isMobileView() && this.toggleMenu.emit(!1),
          this.activeMenu() && this.activeMenu.set(null));
      }),
      document.addEventListener("click", this.clickListener));
  }
  isActive(t) {
    let e = this.currentRoute();
    return t.link
      ? e.includes(t.link) || this.navigationService.isActiveSection(t.link)
      : t.categories?.some((n) =>
          n.items.some((o) => o.link && e.includes(o.link)),
        ) || !1;
  }
  navigate(t, e) {
    if ((e.preventDefault(), !ye(this.platformId))) return;
    let n = t.link;
    this.isSection(n)
      ? (this.navigationService.scrollToSection(n),
        this.activeMenu.set(null),
        this.isMobileView() && this.toggleMenu.emit())
      : t.link &&
        (this.navigationService.navigate(t.link),
        this.activeMenu.set(null),
        this.isMobileView() && this.toggleMenu.emit());
  }
  badgeClass(t) {
    return t
      ? {
          new: "bg-green-500",
          hot: "bg-red-500",
          update: "bg-blue-500",
          soon: "bg-yellow-500",
        }[t] || "bg-gray-500"
      : "";
  }
  toggleMenuState(t) {
    this.activeMenu.set(this.activeMenu() === t ? null : t);
  }
  initRoute() {
    ye(this.platformId) &&
      (this.router.events
        .pipe(Zn((t) => t instanceof it))
        .subscribe((t) => this.currentRoute.set(t.urlAfterRedirects)),
      console.log("Router events subscribed"));
  }
  isSection(t) {
    return t ? t.startsWith("#") || document.getElementById(t) !== null : !1;
  }
  static ɵfac = function (e) {
    return new (e || i)();
  };
  static ɵcmp = H({
    type: i,
    selectors: [["app-unified-menu"]],
    viewQuery: function (e, n) {
      if ((e & 1 && ui(Xr, 5), e & 2)) {
        let o;
        gi((o = pi())) && (n.menuContainer = o.first);
      }
    },
    inputs: { menuItems: [1, "menuItems"], isMobileView: [1, "isMobileView"] },
    outputs: { toggleMenu: "toggleMenu" },
    decls: 4,
    vars: 9,
    consts: [
      ["menuContainer", ""],
      [1, "nav-container", 3, "ngClass"],
      [1, "menu-list", 3, "ngClass"],
      ["class", "relative menu-item", 3, "ngClass", 4, "ngFor", "ngForOf"],
      [1, "relative", "menu-item", 3, "ngClass"],
      [
        "class",
        "flex items-center gap-2 px-4 py-2 font-semibold uppercase transition-all duration-300 rounded-full text-white/70 hover:text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30",
        3,
        "routerLink",
        "ngClass",
        "click",
        4,
        "ngIf",
      ],
      [
        "class",
        "flex items-center justify-between w-full gap-2 px-4 py-2 font-semibold uppercase transition-all duration-300 rounded-full text-white/70 hover:text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30",
        3,
        "ngClass",
        "click",
        4,
        "ngIf",
      ],
      ["class", "overflow-y-auto max-h-[90vh]", 3, "id", "ngClass", 4, "ngIf"],
      [
        1,
        "flex",
        "items-center",
        "gap-2",
        "px-4",
        "py-2",
        "font-semibold",
        "uppercase",
        "transition-all",
        "duration-300",
        "rounded-full",
        "text-white/70",
        "hover:text-white",
        "hover:bg-white/20",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-white/30",
        3,
        "click",
        "routerLink",
        "ngClass",
      ],
      ["aria-hidden", "true", 3, "class", 4, "ngIf"],
      [
        "class",
        "ms-2 px-2 py-0.5 text-xs font-medium text-white rounded-full",
        3,
        "ngClass",
        4,
        "ngIf",
      ],
      ["aria-hidden", "true"],
      [
        1,
        "ms-2",
        "px-2",
        "py-0.5",
        "text-xs",
        "font-medium",
        "text-white",
        "rounded-full",
        3,
        "ngClass",
      ],
      [
        1,
        "flex",
        "items-center",
        "justify-between",
        "w-full",
        "gap-2",
        "px-4",
        "py-2",
        "font-semibold",
        "uppercase",
        "transition-all",
        "duration-300",
        "rounded-full",
        "text-white/70",
        "hover:text-white",
        "hover:bg-white/20",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-white/30",
        3,
        "click",
        "ngClass",
      ],
      [1, "flex", "items-center", "gap-2"],
      [
        "aria-hidden",
        "true",
        1,
        "transition-transform",
        "duration-300",
        "bi",
        "bi-chevron-down",
        3,
        "ngClass",
      ],
      [1, "overflow-y-auto", "max-h-[90vh]", 3, "id", "ngClass"],
      [3, "ngClass"],
      [4, "ngFor", "ngForOf"],
      [1, "relative", "flex", "flex-col", "group"],
      [
        1,
        "flex-1",
        "p-6",
        "transition-all",
        "duration-300",
        "rounded-xl",
        "group-hover:bg-gray-800/20",
      ],
      ["class", "mb-6 overflow-hidden rounded-lg aspect-[3/2]", 4, "ngIf"],
      [1, "flex", "flex-col", "space-y-4"],
      [1, "pb-2", "w-fit"],
      [1, "text-lg", "font-semibold", "text-white"],
      [1, "flex", "flex-col", "space-y-3", "text-white"],
      [
        "class",
        "flex items-center px-3 py-2.5 -mx-3 rounded-lg transition-colors duration-200 hover:bg-gray-800/40 hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-400/30",
        3,
        "routerLink",
        "click",
        4,
        "ngFor",
        "ngForOf",
      ],
      [1, "mb-6", "overflow-hidden", "rounded-lg", "aspect-[3/2]"],
      [
        "protectImage",
        "",
        "defaultImage",
        "",
        1,
        "object-cover",
        "w-full",
        "h-full",
        "transition-transform",
        "duration-500",
        "group-hover:scale-105",
        3,
        "src",
        "alt",
      ],
      [
        1,
        "flex",
        "items-center",
        "px-3",
        "py-2.5",
        "-mx-3",
        "rounded-lg",
        "transition-colors",
        "duration-200",
        "hover:bg-gray-800/40",
        "hover:text-primary-300",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-primary-400/30",
        3,
        "click",
        "routerLink",
      ],
      [3, "class", 4, "ngIf"],
      [1, "font-medium"],
    ],
    template: function (e, n) {
      (e & 1 && (g(0, "nav", 1, 0)(2, "ul", 2), $(3, fs, 4, 6, "li", 3), y()()),
        e & 2 &&
          (w("ngClass", ze(3, Jr, n.isMobileView(), !n.isMobileView())),
          _(2),
          w("ngClass", ze(6, Zr, n.isMobileView(), !n.isMobileView())),
          _(),
          w("ngForOf", n.menuItems())));
    },
    dependencies: [kt, We, Ke, wt, Qe, xt, Tt, Ge],
    encapsulation: 2,
    changeDetection: 0,
  });
};
var tn = class i {
  themeService = x(tt);
  static ɵfac = function (e) {
    return new (e || i)();
  };
  static ɵcmp = H({
    type: i,
    selectors: [["app-theme-toggle-button"]],
    decls: 5,
    vars: 0,
    consts: [
      [
        "aria-label",
        "Toggle theme",
        1,
        "p-3",
        "text-white",
        "transition-all",
        "duration-300",
        "ease-in-out",
        "transform",
        "rounded-full",
        "text-foreground",
        "hover:bg-primary-500",
        "hover:scale-110",
        "active:scale-95",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-primary-400",
        "focus:ring-opacity-50",
        3,
        "click",
      ],
      [
        "fill",
        "none",
        "stroke",
        "currentColor",
        "viewBox",
        "0 0 24 24",
        1,
        "w-6",
        "h-6",
        "transition-transform",
        "duration-500",
        "scale-100",
        "rotate-0",
        "dark:rotate-180",
        "dark:scale-110",
      ],
      [
        "cx",
        "12",
        "cy",
        "12",
        "r",
        "5",
        "stroke-width",
        "2",
        "opacity",
        "1",
        1,
        "transition-opacity",
        "duration-300",
        "dark:opacity-30",
      ],
      [
        "stroke-width",
        "2",
        "stroke-linecap",
        "round",
        "d",
        "M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z",
        1,
        "transition-opacity",
        "duration-300",
        "dark:hidden",
      ],
      [
        "stroke-width",
        "2",
        "stroke-linecap",
        "round",
        "d",
        "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42",
        1,
        "hidden",
        "transition-opacity",
        "duration-300",
        "dark:block",
      ],
    ],
    template: function (e, n) {
      e & 1 &&
        (g(0, "button", 0),
        ne("click", function () {
          return n.themeService.toggleTheme();
        }),
        Ve(),
        g(1, "svg", 1),
        O(2, "circle", 2)(3, "path", 3)(4, "path", 4),
        y()());
    },
    encapsulation: 2,
    changeDetection: 0,
  });
};
var nn = class i {
  layoutService = x(Oe);
  router = x(ke);
  changeLanguage(t) {
    this.layoutService.currentLang() === "ar"
      ? this.layoutService.setLanguage("en")
      : this.layoutService.setLanguage("ar");
    let e = this.router.url.replace(/^\/(en|ar)/, "");
    (this.router.navigateByUrl(`/${this.layoutService.currentLang()}${e}`),
      setTimeout(() => {
        window.location.reload();
      }, 250));
  }
  static ɵfac = function (e) {
    return new (e || i)();
  };
  static ɵcmp = H({
    type: i,
    selectors: [["app-language-toggle-button"]],
    decls: 3,
    vars: 0,
    consts: [
      [
        "aria-label",
        "Toggle language between English and Arabic",
        1,
        "p-3",
        "transition-all",
        "duration-300",
        "ease-in-out",
        "transform",
        "rounded-full",
        "text-foreground",
        "hover:bg-primary-500",
        3,
        "click",
      ],
      [1, "w-6", "h-6", "text-white"],
      [1, "text-xl", "bi", "bi-translate"],
    ],
    template: function (e, n) {
      e & 1 &&
        (g(0, "button", 0),
        ne("click", function () {
          return n.changeLanguage();
        }),
        g(1, "div", 1),
        O(2, "i", 2),
        y()());
    },
    encapsulation: 2,
    changeDetection: 0,
  });
};
var hs = (i) => ({ "animate-slide-down": i });
function ys(i, t) {
  if ((i & 1 && (g(0, "span", 4, 0), q(2), y()), i & 2)) {
    let e = t.$implicit;
    (_(2), Ae(" ", e, " "));
  }
}
function _s(i, t) {
  if (i & 1) {
    let e = he();
    (g(0, "div", 1)(1, "div", 2)(2, "om-marquee", 3),
      ai(3, ys, 3, 1, "span", 4, si),
      y()(),
      g(5, "div", 5)(6, "button", 6),
      ne("click", function () {
        me(e);
        let o = T();
        return fe(o.hideBanner());
      }),
      O(7, "i", 7),
      y()()());
  }
  if (i & 2) {
    let e = T();
    (w("ngClass", Re(4, hs, e.layoutService.isBannerVisible())),
      _(2),
      w("reverse", e.layoutService.isRtl())("pauseOnHover", !0)(
        "scrollable",
        !0,
      ),
      _(),
      li(e.bannerData().bannerText));
  }
}
var on = class i {
  layoutService = x(Oe);
  landingService = x(Te);
  bannerData = Z({});
  hideBanner() {
    this.layoutService.isBannerVisible.set(!1);
  }
  ngOnInit() {
    this.landingService.getBannerData().subscribe((t) => {
      setTimeout(() => {
        t.isActive === !0 &&
          (this.bannerData.set(t), this.layoutService.isBannerVisible.set(!0));
      }, t.visibleAfter || 500);
    });
  }
  static ɵfac = function (e) {
    return new (e || i)();
  };
  static ɵcmp = H({
    type: i,
    selectors: [["app-banner"]],
    decls: 1,
    vars: 1,
    consts: [
      ["OmMarqueeContent", ""],
      [
        "role",
        "alert",
        1,
        "fixed",
        "top-0",
        "left-0",
        "z-50",
        "flex",
        "items-center",
        "justify-between",
        "w-full",
        "h-12",
        "px-4",
        "transition-all",
        "duration-300",
        "border-b",
        "border-gray-200",
        "shadow-lg",
        "bg-foreground",
        "dark:bg-background",
        "dark:border-gray-700",
        3,
        "ngClass",
      ],
      ["aria-live", "polite", 1, "flex-1", "overflow-hidden"],
      [
        "dir",
        "ltr",
        "animationDuration",
        "90s",
        "marqueeGap",
        "0.75rem",
        1,
        "select-none",
        3,
        "reverse",
        "pauseOnHover",
        "scrollable",
      ],
      [
        1,
        "mx-2",
        "text-sm",
        "font-medium",
        "text-background",
        "dark:text-foreground",
        "whitespace-nowrap",
      ],
      [1, "flex", "items-center", "ms-4"],
      [
        "aria-label",
        "Close banner",
        "title",
        "Close banner",
        1,
        "p-1",
        "transition-colors",
        "rounded-full",
        "text-background",
        "hover:text-background/80",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-offset-2",
        "focus:ring-red-500",
        3,
        "click",
      ],
      [
        1,
        "text-xl",
        "text-red-500",
        "transition-colors",
        "bi",
        "bi-x-circle",
        "hover:text-red-600",
      ],
    ],
    template: function (e, n) {
      (e & 1 && $(0, _s, 8, 6, "div", 1),
        e & 2 && Ct(n.layoutService.isBannerVisible() ? 0 : -1));
    },
    dependencies: [Ke, Ai],
    styles: [
      "@keyframes _ngcontent-%COMP%_slideDown{0%{transform:translateY(-100%);opacity:0}to{transform:translateY(0);opacity:1}}.animate-slide-down[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideDown .3s ease-out forwards}",
    ],
    changeDetection: 0,
  });
};
var bs = (i, t, e, n) => ({
    "bg-transparent backdrop-blur-md": i,
    "top-0": t,
    "top-12": e,
    "bg-gray-900/75 dark:bg-gray-900/75 shadow-lg backdrop-blur-md ": n,
  }),
  vs = (i, t) => ({ "bi bi-list": i, "bi bi-x-lg ": t });
function Cs(i, t) {
  if (i & 1) {
    let e = he();
    (g(0, "div", 15)(1, "div", 16)(2, "app-unified-menu", 17),
      ne("toggleMenu", function (o) {
        me(e);
        let r = T();
        return fe(r.toggleMobileMenu(o));
      }),
      y()()());
  }
  if (i & 2) {
    let e = T();
    (_(2), w("isMobileView", !0)("menuItems", e.menuItems()));
  }
}
var rn = class i {
  platformId = x(Ie);
  layoutService = x(Oe);
  landingService = x(Te);
  navigationService = x(He);
  menuItems = Z([]);
  isScrolled = Z(!1);
  isMobileMenuOpen = Z(!1);
  isVisibleBanner = hi(() => this.layoutService.isBannerVisible());
  ngOnInit() {
    this.landingService.getHeaderData().subscribe((t) => {
      this.menuItems.set(t);
    });
  }
  onWindowScroll(t) {
    ye(this.platformId) && this.isScrolled.set(window.scrollY > 50);
  }
  navigateToSection(t) {
    ye(this.platformId) &&
      (this.navigationService.scrollToSection(t),
      this.isMobileMenuOpen.set(!1));
  }
  toggleMobileMenu(t) {
    this.isMobileMenuOpen.set(t);
  }
  static ɵfac = function (e) {
    return new (e || i)();
  };
  static ɵcmp = H({
    type: i,
    selectors: [["app-navbar"]],
    hostBindings: function (e, n) {
      e & 1 &&
        ne(
          "scroll",
          function (r) {
            return n.onWindowScroll(r);
          },
          !1,
          vt,
        );
    },
    decls: 23,
    vars: 13,
    consts: [
      [
        1,
        "fixed",
        "inset-x-0",
        "z-50",
        "transition-all",
        "duration-300",
        3,
        "ngClass",
      ],
      [
        1,
        "px-4",
        "py-3",
        "mx-auto",
        "transition-all",
        "duration-300",
        "sm:px-6",
        "lg:px-6",
      ],
      [1, "relative", "flex", "items-center", "justify-between"],
      [
        "routerLink",
        "/",
        "aria-label",
        "Fahd Cloud",
        "title",
        "Fahd Cloud",
        1,
        "flex",
        "items-center",
        "transition-all",
        "duration-300",
        "rounded-md",
        "lg:order-none",
        "hover:scale-105",
        "text-primary-500",
      ],
      [
        "protectImage",
        "",
        "src",
        "/assets/images/logo/logo.svg",
        "alt",
        "Fahd Cloud Logo",
        1,
        "w-8",
        "h-8",
        "drop-shadow-md",
        "sm:w-10",
        "sm:h-10",
      ],
      [1, "w-px", "h-10", "mx-2", "bg-gray-300"],
      [1, "font-bold"],
      [1, "text-accent"],
      [1, "flex", "items-center", "gap-2", "lg:hidden"],
      [
        "aria-label",
        "Open Menu",
        "title",
        "Open Menu",
        1,
        "p-2",
        "text-white",
        "transition-all",
        "duration-300",
        "rounded-md",
        "hover:bg-gray-300",
        "hover:text-black",
        3,
        "click",
      ],
      [1, "text-xl", 3, "ngClass"],
      [
        "class",
        "absolute left-0 right-0 mx-4 mt-3 rounded-lg shadow-xl top-full backdrop-blur-lg animate-zoom-in lg:hidden",
        4,
        "ngIf",
      ],
      [1, "hidden", "lg:flex"],
      ["ngSkipHydration", "", 3, "isMobileView", "menuItems"],
      [1, "items-center", "hidden", "gap-2", "lg:flex"],
      [
        1,
        "absolute",
        "left-0",
        "right-0",
        "mx-4",
        "mt-3",
        "rounded-lg",
        "shadow-xl",
        "top-full",
        "backdrop-blur-lg",
        "animate-zoom-in",
        "lg:hidden",
      ],
      [1, "pt-1"],
      ["ngSkipHydration", "", 3, "toggleMenu", "isMobileView", "menuItems"],
    ],
    template: function (e, n) {
      (e & 1 &&
        (O(0, "app-banner"),
        g(1, "header", 0)(2, "div", 1)(3, "div", 2)(4, "a", 3),
        O(5, "img", 4)(6, "div", 5),
        g(7, "span", 6),
        q(8, "Fahd Clo"),
        g(9, "span", 7),
        q(10, "\u2601\uFE0F"),
        y(),
        q(11, "d"),
        y()(),
        g(12, "div", 8),
        O(13, "app-theme-toggle-button")(14, "app-language-toggle-button"),
        g(15, "button", 9),
        ne("click", function () {
          return n.toggleMobileMenu(!n.isMobileMenuOpen());
        }),
        O(16, "i", 10),
        y(),
        $(17, Cs, 3, 2, "div", 11),
        y(),
        g(18, "div", 12),
        O(19, "app-unified-menu", 13),
        y(),
        g(20, "div", 14),
        O(21, "app-theme-toggle-button")(22, "app-language-toggle-button"),
        y()()()()),
        e & 2 &&
          (_(),
          w(
            "ngClass",
            mi(
              5,
              bs,
              !n.isScrolled(),
              !n.isVisibleBanner(),
              n.isVisibleBanner(),
              n.isScrolled(),
            ),
          ),
          _(15),
          w("ngClass", ze(10, vs, !n.isMobileMenuOpen(), n.isMobileMenuOpen())),
          _(),
          w("ngIf", n.isMobileMenuOpen()),
          _(2),
          w("isMobileView", !1)("menuItems", n.menuItems())));
    },
    dependencies: [We, Ke, Qe, kt, en, tn, nn, on],
    styles: [
      "[_nghost-%COMP%]{display:block}header.backdrop-blur-md[_ngcontent-%COMP%]{backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}header.shadow-lg[_ngcontent-%COMP%]{box-shadow:0 10px 15px -3px #0000001a,0 4px 6px -2px #0000000d}.animate-zoom-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_zoomIn .3s cubic-bezier(.16,1,.3,1);transform-origin:top center}@keyframes _ngcontent-%COMP%_zoomIn{0%{opacity:0;transform:scale(.95) translateY(-10px)}to{opacity:1;transform:scale(1) translateY(0)}}",
    ],
  });
};
function Ms(i, t) {
  if ((i & 1 && (g(0, "a", 28), O(1, "img", 29), y()), i & 2)) {
    let e = t.$implicit;
    (w("href", e.link, ae), _(), w("src", e.icon || "", ae)("alt", e.alt));
  }
}
function ws(i, t) {
  if (i & 1) {
    let e = he();
    (g(0, "li")(1, "button", 30),
      ne("click", function () {
        let o = me(e).$implicit,
          r = T();
        return fe(r.navigationService.navigate(o.link));
      }),
      O(2, "i"),
      g(3, "span"),
      q(4),
      y()()());
  }
  if (i & 2) {
    let e = t.$implicit;
    (_(2), Ee(e.icon), _(2), re(e.title));
  }
}
function Ps(i, t) {
  if ((i & 1 && O(0, "img", 35), i & 2)) {
    let e = T(2).$implicit;
    w("src", e.image, ae);
  }
}
function ks(i, t) {
  if (
    (i & 1 &&
      (g(0, "div", 32), $(1, Ps, 1, 1, "img", 33), g(2, "a", 34), q(3), y()()),
    i & 2)
  ) {
    let e = T().$implicit;
    (_(),
      w("ngIf", e.image),
      _(),
      w("href", e.link, ae),
      _(),
      Ae(" ", e.text, " "));
  }
}
function Os(i, t) {
  if ((i & 1 && (g(0, "div"), $(1, ks, 4, 3, "div", 31), y()), i & 2)) {
    let e = t.$implicit;
    (_(), w("ngIf", e.text));
  }
}
function Ss(i, t) {
  if ((i & 1 && (g(0, "a", 28), O(1, "img", 36), y()), i & 2)) {
    let e = t.$implicit;
    (w("href", e.url, ae), _(), w("src", e.logo, ae)("alt", e.name));
  }
}
function Ts(i, t) {
  if ((i & 1 && O(0, "img", 37), i & 2)) {
    let e = t.$implicit;
    w("src", e.logo, ae)("alt", e.name);
  }
}
function xs(i, t) {
  if (i & 1) {
    let e = he();
    (g(0, "li")(1, "button", 38),
      ne("click", function () {
        let o = me(e).$implicit,
          r = T();
        return fe(r.navigationService.navigate(o.link));
      }),
      q(2),
      y()());
  }
  if (i & 2) {
    let e = t.$implicit;
    (_(2), Ae(" ", e.title, " "));
  }
}
var sn = class i {
  landingService = x(Te);
  navigationService = x(He);
  footerData = Z({});
  ngOnInit() {
    this.landingService.getFooterData().subscribe((t) => {
      this.footerData.set(t);
    });
  }
  static ɵfac = function (e) {
    return new (e || i)();
  };
  static ɵcmp = H({
    type: i,
    selectors: [["app-footer"]],
    decls: 49,
    vars: 16,
    consts: [
      [1, "relative"],
      [
        "viewBox",
        "0 0 1440 160",
        "preserveAspectRatio",
        "none",
        "xmlns",
        "http://www.w3.org/2000/svg",
        1,
        "w-full",
        "h-32",
        "sm:h-40",
        "md:h-48",
        "lg:h-56",
        "xl:h-64",
      ],
      [
        "d",
        "M0,112L80,104C160,96,320,80,480,85.3C640,91,800,117,960,114.7C1120,112,1280,80,1440,58.7V160H0Z",
        1,
        "fill-gray-200",
        "dark:fill-gray-900",
      ],
      [1, "w-full", "bg-gray-200", "dark:bg-gray-900"],
      [
        "data-aos",
        "fade-down",
        1,
        "w-full",
        "px-4",
        "py-8",
        "mx-auto",
        "max-w-7xl",
        "md:px-8",
        "lg:px-12",
      ],
      [
        1,
        "grid",
        "grid-cols-1",
        "gap-8",
        "mb-8",
        "sm:grid-cols-2",
        "lg:grid-cols-4",
      ],
      [1, "space-y-4"],
      [1, "flex", "flex-col", "justify-start", "w-full", "gap-2"],
      ["href", "/", 1, "flex", "flex-col", "items-center", "gap-2"],
      [
        "protectImage",
        "",
        "defaultImage",
        "",
        1,
        "w-20",
        "h-20",
        3,
        "src",
        "alt",
      ],
      [1, "ml-2", "text-xl", "font-bold", "tracking-wide", "text-primary-400"],
      [1, "text-sm", "text-gray-600", "dark:text-gray-400"],
      [1, "flex", "flex-wrap", "justify-center", "gap-4", "px-4", "mt-4"],
      ["target", "_blank", 3, "href", 4, "ngFor", "ngForOf"],
      [1, "w-fit"],
      [1, "text-xl", "font-bold", "tracking-wide"],
      [
        1,
        "flex",
        "flex-col",
        "gap-4",
        "text-sm",
        "text-gray-600",
        "dark:text-gray-400",
      ],
      [4, "ngFor", "ngForOf"],
      [
        1,
        "flex",
        "flex-col",
        "gap-3",
        "text-sm",
        "text-gray-600",
        "dark:text-gray-400",
      ],
      [1, "flex", "flex-col", "gap-4"],
      [
        "protectImage",
        "",
        "defaultImage",
        "",
        "alt",
        "Commercial Registration QR Code",
        1,
        "self-start",
        "max-h-[12rem]",
        "max-w-[12rem]",
        3,
        "src",
      ],
      [
        1,
        "flex",
        "flex-col",
        "items-center",
        "justify-between",
        "gap-6",
        "mb-8",
        "md:flex-row",
        "md:items-end",
      ],
      [1, "flex", "flex-wrap", "justify-center", "gap-4"],
      [1, "flex", "flex-wrap", "gap-2"],
      [
        "protectImage",
        "",
        "defaultImage",
        "",
        "class",
        "object-cover h-6",
        3,
        "src",
        "alt",
        4,
        "ngFor",
        "ngForOf",
      ],
      [
        1,
        "flex",
        "flex-col",
        "items-center",
        "justify-between",
        "gap-4",
        "pt-6",
        "pb-4",
        "mt-4",
        "border-t",
        "border-primary-500",
      ],
      [1, "text-sm", "text-center", "text-gray-600", "dark:text-gray-400"],
      [
        1,
        "flex",
        "flex-col",
        "flex-wrap",
        "items-center",
        "justify-center",
        "gap-3",
        "sm:flex-row",
        "sm:gap-5",
      ],
      ["target", "_blank", 3, "href"],
      ["protectImage", "", "defaultImage", "", 1, "h-8", 3, "src", "alt"],
      [
        1,
        "flex",
        "items-center",
        "gap-4",
        "hover:text-primary-400",
        3,
        "click",
      ],
      ["class", "flex items-center gap-2", 4, "ngIf"],
      [1, "flex", "items-center", "gap-2"],
      [
        "protectImage",
        "",
        "defaultImage",
        "",
        "alt",
        "Location Icon",
        "class",
        "h-5",
        3,
        "src",
        4,
        "ngIf",
      ],
      ["target", "_blank", 1, "hover:text-primary-400", 3, "href"],
      [
        "protectImage",
        "",
        "defaultImage",
        "",
        "alt",
        "Location Icon",
        1,
        "h-5",
        3,
        "src",
      ],
      [
        "protectImage",
        "",
        "defaultImage",
        "",
        1,
        "object-cover",
        "h-10",
        3,
        "src",
        "alt",
      ],
      [
        "protectImage",
        "",
        "defaultImage",
        "",
        1,
        "object-cover",
        "h-6",
        3,
        "src",
        "alt",
      ],
      [
        1,
        "text-sm",
        "text-gray-600",
        "hover:text-primary-400",
        "dark:text-gray-400",
        "dark:hover:text-gray-200",
        3,
        "click",
      ],
    ],
    template: function (e, n) {
      if (
        (e & 1 &&
          (g(0, "div", 0),
          Ve(),
          g(1, "svg", 1),
          O(2, "path", 2),
          y(),
          bt(),
          g(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(
            8,
            "a",
            8,
          ),
          O(9, "img", 9),
          g(10, "span", 10),
          q(11),
          y()(),
          g(12, "p", 11),
          q(13),
          y(),
          g(14, "div", 12),
          $(15, Ms, 2, 3, "a", 13),
          y()()(),
          g(16, "div", 6)(17, "div", 14)(18, "h3", 15),
          q(19),
          y(),
          O(20, "app-custom-hr-line"),
          y(),
          g(21, "ul", 16),
          $(22, ws, 5, 3, "li", 17),
          y()(),
          g(23, "div", 6)(24, "div", 14)(25, "h3", 15),
          q(26),
          y(),
          O(27, "app-custom-hr-line"),
          y(),
          g(28, "div", 18),
          $(29, Os, 2, 1, "div", 17),
          y()(),
          g(30, "div", 6)(31, "div", 14)(32, "h3", 15),
          q(33),
          y(),
          O(34, "app-custom-hr-line"),
          y(),
          g(35, "div", 19)(36, "p", 11),
          q(37),
          y(),
          O(38, "img", 20),
          y()()(),
          g(39, "div", 21)(40, "div", 22),
          $(41, Ss, 2, 3, "a", 13),
          y(),
          g(42, "div", 23),
          $(43, Ts, 1, 2, "img", 24),
          y()(),
          g(44, "div", 25)(45, "p", 26),
          q(46),
          y(),
          g(47, "ul", 27),
          $(48, xs, 3, 1, "li", 17),
          y()()()()()),
        e & 2)
      ) {
        let o, r, a, s, l, c, u, d, h, v, p, M, N, z;
        (_(9),
          w(
            "src",
            ((o = n.footerData().company) == null ? null : o.logo) || "",
            ae,
          )(
            "alt",
            ((r = n.footerData().company) == null ? null : r.name) + " Logo",
          ),
          _(2),
          re((a = n.footerData().company) == null ? null : a.name),
          _(2),
          re((s = n.footerData().company) == null ? null : s.description),
          _(2),
          w(
            "ngForOf",
            (l = n.footerData().socialMedia) == null
              ? null
              : l.socialMediaLinks,
          ),
          _(4),
          re((c = n.footerData().usefulLinks) == null ? null : c.title),
          _(3),
          w(
            "ngForOf",
            (u = n.footerData().usefulLinks) == null ? null : u.links,
          ),
          _(4),
          re((d = n.footerData().branches) == null ? null : d.title),
          _(3),
          w(
            "ngForOf",
            (h = n.footerData().branches) == null ? null : h.locations,
          ),
          _(4),
          re((v = n.footerData().commercial) == null ? null : v.title),
          _(4),
          re(
            ((p = n.footerData().commercial) == null ? null : p.description) ||
              "",
          ),
          _(),
          w(
            "src",
            ((M = n.footerData().commercial) == null ? null : M.imageUrl) || "",
            ae,
          ),
          _(3),
          w("ngForOf", n.footerData().mobileApps),
          _(2),
          w("ngForOf", n.footerData().paymentMethods),
          _(3),
          re((N = n.footerData().footer) == null ? null : N.copyright),
          _(2),
          w("ngForOf", (z = n.footerData().footer) == null ? null : z.links));
      }
    },
    dependencies: [Qe, wt, Ge, Tt, xt],
    encapsulation: 2,
    changeDetection: 0,
  });
};
function Es(i, t) {
  if (i & 1) {
    let e = he();
    (g(0, "div", 0)(1, "button", 1),
      ne("click", function () {
        me(e);
        let o = T();
        return fe(o.scrollToTop());
      }),
      Ve(),
      g(2, "svg", 2),
      O(3, "circle", 3)(4, "circle", 4),
      y(),
      bt(),
      O(5, "i", 5),
      y()());
  }
  if (i & 2) {
    let e = T();
    (_(4), hn("stroke-dashoffset", 138 - (e.scrollProgress() / 100) * 138));
  }
}
var an = class i {
  showButton = Z(!1);
  scrollProgress = Z(0);
  onWindowScroll() {
    let t = window.pageYOffset || document.documentElement.scrollTop,
      e =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    (this.showButton.set(t > 100), this.scrollProgress.set((t / e) * 100));
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  static ɵfac = function (e) {
    return new (e || i)();
  };
  static ɵcmp = H({
    type: i,
    selectors: [["app-custom-scroll-to-top"]],
    hostBindings: function (e, n) {
      e & 1 &&
        ne(
          "scroll",
          function () {
            return n.onWindowScroll();
          },
          !1,
          vt,
        );
    },
    decls: 1,
    vars: 1,
    consts: [
      [1, "fixed", "bottom-5", "start-5"],
      [
        "aria-label",
        "Scroll to top",
        1,
        "relative",
        "flex",
        "items-center",
        "justify-center",
        "w-12",
        "h-12",
        "text-white",
        "transition-opacity",
        "duration-300",
        "rounded-full",
        "shadow-lg",
        "bg-primary-500",
        "hover:bg-primary-600",
        "focus:outline-none",
        3,
        "click",
      ],
      [
        "viewBox",
        "0 0 48 48",
        "preserveAspectRatio",
        "xMidYMid meet",
        1,
        "absolute",
        "inset-0",
        "w-full",
        "h-full",
      ],
      [
        "cx",
        "24",
        "cy",
        "24",
        "r",
        "22",
        "fill",
        "none",
        "stroke-opacity",
        "4",
        "stroke-width",
        "4",
        1,
        "stroke-primary-50",
        "dark:stroke-primary-500",
      ],
      [
        "cx",
        "24",
        "cy",
        "24",
        "r",
        "22",
        "fill",
        "none",
        "stroke-width",
        "4",
        "stroke-dasharray",
        "138",
        "stroke-dashoffset",
        "138",
        1,
        "stroke-primary-500",
        "dark:stroke-primary-50",
      ],
      [1, "relative", "z-10", "text-xl", "bi", "bi-arrow-up"],
    ],
    template: function (e, n) {
      (e & 1 && $(0, Es, 6, 2, "div", 0), e & 2 && Ct(n.showButton() ? 0 : -1));
    },
    encapsulation: 2,
    changeDetection: 0,
  });
};
var ln = class i {
  isVisibleBanner = Z(!0);
  isLoading = Z(!0);
  router = x(ke);
  toggleBanner(t) {
    this.isVisibleBanner.set(t);
  }
  static ɵfac = function (e) {
    return new (e || i)();
  };
  static ɵcmp = H({
    type: i,
    selectors: [["app-landing-layout"]],
    decls: 7,
    vars: 0,
    consts: [
      [
        1,
        "flex",
        "flex-col",
        "min-h-screen",
        "text-foreground",
        "bg-background",
      ],
      [1, "flex-grow", "text-foreground", "dark:text-foreground"],
    ],
    template: function (e, n) {
      e & 1 &&
        (g(0, "div", 0),
        O(1, "app-navbar"),
        g(2, "main", 1),
        O(3, "router-outlet"),
        y(),
        O(4, "app-footer")(5, "app-custom-scroll-to-top")(
          6,
          "app-floating-contact-us-button",
        ),
        y());
    },
    dependencies: [Pt, Zt, rn, sn, an],
    encapsulation: 2,
    changeDetection: 0,
  });
};
var cn = class i {
  constructor(t) {
    this.router = t;
  }
  canActivate(t, e) {
    let n = t.params.lang;
    return Object.values(St).includes(n)
      ? !0
      : (this.router.navigate(["ar", "home"]), !1);
  }
  static ɵfac = function (e) {
    return new (e || i)(Le(ke));
  };
  static ɵprov = _e({ token: i, factory: i.ɵfac, providedIn: "root" });
};
var ht = class i {
  constructor(t) {
    this.route = t;
  }
  ngOnInit() {
    let t = this.route.snapshot.data.externalUrl;
    t && (window.open(t, "_blank"), window.history.back());
  }
  static ɵfac = function (e) {
    return new (e || i)(mn(Ti));
  };
  static ɵcmp = H({
    type: i,
    selectors: [["ng-component"]],
    decls: 0,
    vars: 0,
    template: function (e, n) {},
    encapsulation: 2,
  });
};
var zo = [
  { path: "", pathMatch: "full", redirectTo: "ar/home" },
  {
    path: ":lang",
    component: ln,
    canActivate: [cn],
    children: [
      { path: "", pathMatch: "full", redirectTo: "home" },
      {
        path: "home",
        loadComponent: () =>
          import("./chunk-3NVDBDQ7.js").then((i) => i.HomeComponent),
      },
      {
        path: "about-us",
        loadComponent: () =>
          import("./chunk-XDIC6T3G.js").then((i) => i.AboutUsPageComponent),
      },
      {
        path: "payment-methods",
        loadComponent: () =>
          import("./chunk-ME4FO3NP.js").then((i) => i.PaymentsPageComponent),
      },
      {
        path: "payment-method",
        loadComponent: () =>
          import("./chunk-ME4FO3NP.js").then((i) => i.PaymentsPageComponent),
      },
      {
        path: "contact-us",
        loadComponent: () =>
          import("./chunk-XD3ISN72.js").then((i) => i.ContactUsPageComponent),
      },
      {
        path: "portfolio",
        component: ht,
        data: {
          externalUrl: "https://apps.fahd-cloud.com?referrer=fahd-cloud.com",
        },
      },
      {
        path: "soon",
        loadComponent: () =>
          import("./chunk-PG3DSETJ.js").then((i) => i.SoonPageComponent),
      },
      {
        path: "pages",
        loadComponent: () =>
          import("./chunk-4GQSW7NC.js").then((i) => i.DynamicPageComponent),
      },
      {
        path: "app-page",
        loadComponent: () =>
          import("./chunk-B4K3U47U.js").then((i) => i.DynamicAppPageComponent),
      },
      {
        path: "Error404",
        loadComponent: () =>
          import("./chunk-QIQNMNLF.js").then((i) => i.Error404PageComponent),
      },
    ],
  },
  {
    path: "isAdmin",
    component: ht,
    data: { externalUrl: "https://onlinehtmleditor.dev/" },
  },
  { path: "**", redirectTo: "ar/Error404" },
];
var Bo = {
  fgsColor: "var(--primary-500)",
  fgsType: "rectangle-bounce-pulse-out-rapid",
  overlayColor: "rgba(0, 0, 0, 0.7)",
  pbColor: "var(--primary-500)",
  pbThickness: 5,
  fgsSize: 80,
  hasProgressBar: !0,
  textColor: "var(--primary-500)",
  textPosition: "center-center",
  fastFadeOut: !0,
  minTime: 3e3,
  logoUrl: "assets/images/logo/loading-anmation.svg",
  logoSize: 350,
  logoPosition: "center-center",
};
var Uo = {
  providers: [
    Eo(),
    xi(zo),
    fi({ eventCoalescing: !0 }),
    Pi(wi()),
    ei(Jt.forRoot(Bo)),
    Di({
      positionClass: "toast-bottom-center",
      tapToDismiss: !0,
      timeOut: 3e3,
      closeButton: !1,
      maxOpened: 3,
    }),
    vi(Mi(), Ci()),
  ],
};
var $o = Vo(jo());
var dn = class i {
  router = x(ke);
  ngxLoader = x(Fo);
  platformId = x(Ie);
  layoutService = x(Oe);
  ngOnInit() {
    (this.initAOS(), this.initLanguage(), this.setSettingNgxUiLoader(), Ge);
  }
  initLanguage() {
    this.router.events.subscribe((t) => {
      if (t instanceof it) {
        let n = t.urlAfterRedirects.split("/")[1] || "en";
        this.layoutService.setLanguage(n);
      }
    });
  }
  initAOS() {
    ye(this.platformId) &&
      $o.default.init({ duration: 800, easing: "ease-in-out", once: !1 });
  }
  setSettingNgxUiLoader() {
    this.router.events.subscribe((t) => {
      (t instanceof ki && this.ngxLoader.start(),
        (t instanceof it || t instanceof Oi || t instanceof Si) &&
          this.ngxLoader.stop());
    });
  }
  static ɵfac = function (e) {
    return new (e || i)();
  };
  static ɵcmp = H({
    type: i,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function (e, n) {
      e & 1 && O(0, "router-outlet");
    },
    dependencies: [Pt, Jt],
    encapsulation: 2,
    changeDetection: 0,
  });
};
_i(dn, Uo).catch((i) => console.error(i));
