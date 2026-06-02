import { Ba as Me, a as Ne, wa as Ae } from "./chunk-E7EHJUJY.js";
import {
  Aa as Re,
  C as he,
  F as fe,
  Fa as we,
  Ha as ve,
  K as Z,
  S as pe,
  U as ye,
  V as w,
  X as _,
  _ as g,
  a as X,
  aa as A,
  ba as f,
  c as le,
  ca as me,
  f as Y,
  fa as ge,
  ga as Te,
  i as Q,
  o as ue,
  p as U,
  qa as H,
  sa as Ee,
  sb as be,
  t as C,
  tb as Pe,
} from "./chunk-KJMU7Q3O.js";
var x = class {},
  F = class {},
  T = class n {
    headers;
    normalizedNames = new Map();
    lazyInit;
    lazyUpdate = null;
    constructor(e) {
      e
        ? typeof e == "string"
          ? (this.lazyInit = () => {
              ((this.headers = new Map()),
                e
                  .split(
                    `
`,
                  )
                  .forEach((t) => {
                    let r = t.indexOf(":");
                    if (r > 0) {
                      let s = t.slice(0, r),
                        i = t.slice(r + 1).trim();
                      this.addHeaderEntry(s, i);
                    }
                  }));
            })
          : typeof Headers < "u" && e instanceof Headers
            ? ((this.headers = new Map()),
              e.forEach((t, r) => {
                this.addHeaderEntry(r, t);
              }))
            : (this.lazyInit = () => {
                ((this.headers = new Map()),
                  Object.entries(e).forEach(([t, r]) => {
                    this.setHeaderEntries(t, r);
                  }));
              })
        : (this.headers = new Map());
    }
    has(e) {
      return (this.init(), this.headers.has(e.toLowerCase()));
    }
    get(e) {
      this.init();
      let t = this.headers.get(e.toLowerCase());
      return t && t.length > 0 ? t[0] : null;
    }
    keys() {
      return (this.init(), Array.from(this.normalizedNames.values()));
    }
    getAll(e) {
      return (this.init(), this.headers.get(e.toLowerCase()) || null);
    }
    append(e, t) {
      return this.clone({ name: e, value: t, op: "a" });
    }
    set(e, t) {
      return this.clone({ name: e, value: t, op: "s" });
    }
    delete(e, t) {
      return this.clone({ name: e, value: t, op: "d" });
    }
    maybeSetNormalizedName(e, t) {
      this.normalizedNames.has(t) || this.normalizedNames.set(t, e);
    }
    init() {
      this.lazyInit &&
        (this.lazyInit instanceof n
          ? this.copyFrom(this.lazyInit)
          : this.lazyInit(),
        (this.lazyInit = null),
        this.lazyUpdate &&
          (this.lazyUpdate.forEach((e) => this.applyUpdate(e)),
          (this.lazyUpdate = null)));
    }
    copyFrom(e) {
      (e.init(),
        Array.from(e.headers.keys()).forEach((t) => {
          (this.headers.set(t, e.headers.get(t)),
            this.normalizedNames.set(t, e.normalizedNames.get(t)));
        }));
    }
    clone(e) {
      let t = new n();
      return (
        (t.lazyInit =
          this.lazyInit && this.lazyInit instanceof n ? this.lazyInit : this),
        (t.lazyUpdate = (this.lazyUpdate || []).concat([e])),
        t
      );
    }
    applyUpdate(e) {
      let t = e.name.toLowerCase();
      switch (e.op) {
        case "a":
        case "s":
          let r = e.value;
          if ((typeof r == "string" && (r = [r]), r.length === 0)) return;
          this.maybeSetNormalizedName(e.name, t);
          let s = (e.op === "a" ? this.headers.get(t) : void 0) || [];
          (s.push(...r), this.headers.set(t, s));
          break;
        case "d":
          let i = e.value;
          if (!i) (this.headers.delete(t), this.normalizedNames.delete(t));
          else {
            let o = this.headers.get(t);
            if (!o) return;
            ((o = o.filter((l) => i.indexOf(l) === -1)),
              o.length === 0
                ? (this.headers.delete(t), this.normalizedNames.delete(t))
                : this.headers.set(t, o));
          }
          break;
      }
    }
    addHeaderEntry(e, t) {
      let r = e.toLowerCase();
      (this.maybeSetNormalizedName(e, r),
        this.headers.has(r)
          ? this.headers.get(r).push(t)
          : this.headers.set(r, [t]));
    }
    setHeaderEntries(e, t) {
      let r = (Array.isArray(t) ? t : [t]).map((i) => i.toString()),
        s = e.toLowerCase();
      (this.headers.set(s, r), this.maybeSetNormalizedName(e, s));
    }
    forEach(e) {
      (this.init(),
        Array.from(this.normalizedNames.keys()).forEach((t) =>
          e(this.normalizedNames.get(t), this.headers.get(t)),
        ));
    }
  };
var $ = class {
  encodeKey(e) {
    return Oe(e);
  }
  encodeValue(e) {
    return Oe(e);
  }
  decodeKey(e) {
    return decodeURIComponent(e);
  }
  decodeValue(e) {
    return decodeURIComponent(e);
  }
};
function $e(n, e) {
  let t = new Map();
  return (
    n.length > 0 &&
      n
        .replace(/^\?/, "")
        .split("&")
        .forEach((s) => {
          let i = s.indexOf("="),
            [o, l] =
              i == -1
                ? [e.decodeKey(s), ""]
                : [e.decodeKey(s.slice(0, i)), e.decodeValue(s.slice(i + 1))],
            a = t.get(o) || [];
          (a.push(l), t.set(o, a));
        }),
    t
  );
}
var qe = /%(\d[a-f0-9])/gi,
  Ge = {
    40: "@",
    "3A": ":",
    24: "$",
    "2C": ",",
    "3B": ";",
    "3D": "=",
    "3F": "?",
    "2F": "/",
  };
function Oe(n) {
  return encodeURIComponent(n).replace(qe, (e, t) => Ge[t] ?? e);
}
function J(n) {
  return `${n}`;
}
var b = class n {
  map;
  encoder;
  updates = null;
  cloneFrom = null;
  constructor(e = {}) {
    if (((this.encoder = e.encoder || new $()), e.fromString)) {
      if (e.fromObject) throw new w(2805, !1);
      this.map = $e(e.fromString, this.encoder);
    } else
      e.fromObject
        ? ((this.map = new Map()),
          Object.keys(e.fromObject).forEach((t) => {
            let r = e.fromObject[t],
              s = Array.isArray(r) ? r.map(J) : [J(r)];
            this.map.set(t, s);
          }))
        : (this.map = null);
  }
  has(e) {
    return (this.init(), this.map.has(e));
  }
  get(e) {
    this.init();
    let t = this.map.get(e);
    return t ? t[0] : null;
  }
  getAll(e) {
    return (this.init(), this.map.get(e) || null);
  }
  keys() {
    return (this.init(), Array.from(this.map.keys()));
  }
  append(e, t) {
    return this.clone({ param: e, value: t, op: "a" });
  }
  appendAll(e) {
    let t = [];
    return (
      Object.keys(e).forEach((r) => {
        let s = e[r];
        Array.isArray(s)
          ? s.forEach((i) => {
              t.push({ param: r, value: i, op: "a" });
            })
          : t.push({ param: r, value: s, op: "a" });
      }),
      this.clone(t)
    );
  }
  set(e, t) {
    return this.clone({ param: e, value: t, op: "s" });
  }
  delete(e, t) {
    return this.clone({ param: e, value: t, op: "d" });
  }
  toString() {
    return (
      this.init(),
      this.keys()
        .map((e) => {
          let t = this.encoder.encodeKey(e);
          return this.map
            .get(e)
            .map((r) => t + "=" + this.encoder.encodeValue(r))
            .join("&");
        })
        .filter((e) => e !== "")
        .join("&")
    );
  }
  clone(e) {
    let t = new n({ encoder: this.encoder });
    return (
      (t.cloneFrom = this.cloneFrom || this),
      (t.updates = (this.updates || []).concat(e)),
      t
    );
  }
  init() {
    (this.map === null && (this.map = new Map()),
      this.cloneFrom !== null &&
        (this.cloneFrom.init(),
        this.cloneFrom
          .keys()
          .forEach((e) => this.map.set(e, this.cloneFrom.map.get(e))),
        this.updates.forEach((e) => {
          switch (e.op) {
            case "a":
            case "s":
              let t = (e.op === "a" ? this.map.get(e.param) : void 0) || [];
              (t.push(J(e.value)), this.map.set(e.param, t));
              break;
            case "d":
              if (e.value !== void 0) {
                let r = this.map.get(e.param) || [],
                  s = r.indexOf(J(e.value));
                (s !== -1 && r.splice(s, 1),
                  r.length > 0
                    ? this.map.set(e.param, r)
                    : this.map.delete(e.param));
              } else {
                this.map.delete(e.param);
                break;
              }
          }
        }),
        (this.cloneFrom = this.updates = null)));
  }
};
var q = class {
  map = new Map();
  set(e, t) {
    return (this.map.set(e, t), this);
  }
  get(e) {
    return (
      this.map.has(e) || this.map.set(e, e.defaultValue()),
      this.map.get(e)
    );
  }
  delete(e) {
    return (this.map.delete(e), this);
  }
  has(e) {
    return this.map.has(e);
  }
  keys() {
    return this.map.keys();
  }
};
function We(n) {
  switch (n) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP":
      return !1;
    default:
      return !0;
  }
}
function Ie(n) {
  return typeof ArrayBuffer < "u" && n instanceof ArrayBuffer;
}
function De(n) {
  return typeof Blob < "u" && n instanceof Blob;
}
function _e(n) {
  return typeof FormData < "u" && n instanceof FormData;
}
function Ke(n) {
  return typeof URLSearchParams < "u" && n instanceof URLSearchParams;
}
var B = "Content-Type",
  G = "Accept",
  se = "X-Request-URL",
  Fe = "text/plain",
  je = "application/json",
  Le = `${je}, ${Fe}, */*`,
  k = class n {
    url;
    body = null;
    headers;
    context;
    reportProgress = !1;
    withCredentials = !1;
    responseType = "json";
    method;
    params;
    urlWithParams;
    transferCache;
    constructor(e, t, r, s) {
      ((this.url = t), (this.method = e.toUpperCase()));
      let i;
      if (
        (We(this.method) || s
          ? ((this.body = r !== void 0 ? r : null), (i = s))
          : (i = r),
        i &&
          ((this.reportProgress = !!i.reportProgress),
          (this.withCredentials = !!i.withCredentials),
          i.responseType && (this.responseType = i.responseType),
          i.headers && (this.headers = i.headers),
          i.context && (this.context = i.context),
          i.params && (this.params = i.params),
          (this.transferCache = i.transferCache)),
        (this.headers ??= new T()),
        (this.context ??= new q()),
        !this.params)
      )
        ((this.params = new b()), (this.urlWithParams = t));
      else {
        let o = this.params.toString();
        if (o.length === 0) this.urlWithParams = t;
        else {
          let l = t.indexOf("?"),
            a = l === -1 ? "?" : l < t.length - 1 ? "&" : "";
          this.urlWithParams = t + a + o;
        }
      }
    }
    serializeBody() {
      return this.body === null
        ? null
        : typeof this.body == "string" ||
            Ie(this.body) ||
            De(this.body) ||
            _e(this.body) ||
            Ke(this.body)
          ? this.body
          : this.body instanceof b
            ? this.body.toString()
            : typeof this.body == "object" ||
                typeof this.body == "boolean" ||
                Array.isArray(this.body)
              ? JSON.stringify(this.body)
              : this.body.toString();
    }
    detectContentTypeHeader() {
      return this.body === null || _e(this.body)
        ? null
        : De(this.body)
          ? this.body.type || null
          : Ie(this.body)
            ? null
            : typeof this.body == "string"
              ? Fe
              : this.body instanceof b
                ? "application/x-www-form-urlencoded;charset=UTF-8"
                : typeof this.body == "object" ||
                    typeof this.body == "number" ||
                    typeof this.body == "boolean"
                  ? je
                  : null;
    }
    clone(e = {}) {
      let t = e.method || this.method,
        r = e.url || this.url,
        s = e.responseType || this.responseType,
        i = e.transferCache ?? this.transferCache,
        o = e.body !== void 0 ? e.body : this.body,
        l = e.withCredentials ?? this.withCredentials,
        a = e.reportProgress ?? this.reportProgress,
        p = e.headers || this.headers,
        y = e.params || this.params,
        m = e.context ?? this.context;
      return (
        e.setHeaders !== void 0 &&
          (p = Object.keys(e.setHeaders).reduce(
            (E, u) => E.set(u, e.setHeaders[u]),
            p,
          )),
        e.setParams &&
          (y = Object.keys(e.setParams).reduce(
            (E, u) => E.set(u, e.setParams[u]),
            y,
          )),
        new n(t, r, o, {
          params: y,
          headers: p,
          context: m,
          reportProgress: a,
          responseType: s,
          withCredentials: l,
          transferCache: i,
        })
      );
    }
  },
  P = (function (n) {
    return (
      (n[(n.Sent = 0)] = "Sent"),
      (n[(n.UploadProgress = 1)] = "UploadProgress"),
      (n[(n.ResponseHeader = 2)] = "ResponseHeader"),
      (n[(n.DownloadProgress = 3)] = "DownloadProgress"),
      (n[(n.Response = 4)] = "Response"),
      (n[(n.User = 5)] = "User"),
      n
    );
  })(P || {}),
  j = class {
    headers;
    status;
    statusText;
    url;
    ok;
    type;
    constructor(e, t = 200, r = "OK") {
      ((this.headers = e.headers || new T()),
        (this.status = e.status !== void 0 ? e.status : t),
        (this.statusText = e.statusText || r),
        (this.url = e.url || null),
        (this.ok = this.status >= 200 && this.status < 300));
    }
  },
  S = class n extends j {
    constructor(e = {}) {
      super(e);
    }
    type = P.ResponseHeader;
    clone(e = {}) {
      return new n({
        headers: e.headers || this.headers,
        status: e.status !== void 0 ? e.status : this.status,
        statusText: e.statusText || this.statusText,
        url: e.url || this.url || void 0,
      });
    }
  },
  M = class n extends j {
    body;
    constructor(e = {}) {
      (super(e), (this.body = e.body !== void 0 ? e.body : null));
    }
    type = P.Response;
    clone(e = {}) {
      return new n({
        body: e.body !== void 0 ? e.body : this.body,
        headers: e.headers || this.headers,
        status: e.status !== void 0 ? e.status : this.status,
        statusText: e.statusText || this.statusText,
        url: e.url || this.url || void 0,
      });
    }
  },
  v = class extends j {
    name = "HttpErrorResponse";
    message;
    error;
    ok = !1;
    constructor(e) {
      (super(e, 0, "Unknown Error"),
        this.status >= 200 && this.status < 300
          ? (this.message = `Http failure during parsing for ${e.url || "(unknown url)"}`)
          : (this.message = `Http failure response for ${e.url || "(unknown url)"}: ${e.status} ${e.statusText}`),
        (this.error = e.error || null));
    }
  },
  Ue = 200,
  Ye = 204;
function ee(n, e) {
  return {
    body: e,
    headers: n.headers,
    context: n.context,
    observe: n.observe,
    params: n.params,
    reportProgress: n.reportProgress,
    responseType: n.responseType,
    withCredentials: n.withCredentials,
    transferCache: n.transferCache,
  };
}
var Ce = (() => {
    class n {
      handler;
      constructor(t) {
        this.handler = t;
      }
      request(t, r, s = {}) {
        let i;
        if (t instanceof k) i = t;
        else {
          let a;
          s.headers instanceof T ? (a = s.headers) : (a = new T(s.headers));
          let p;
          (s.params &&
            (s.params instanceof b
              ? (p = s.params)
              : (p = new b({ fromObject: s.params }))),
            (i = new k(t, r, s.body !== void 0 ? s.body : null, {
              headers: a,
              context: s.context,
              params: p,
              reportProgress: s.reportProgress,
              responseType: s.responseType || "json",
              withCredentials: s.withCredentials,
              transferCache: s.transferCache,
            })));
        }
        let o = U(i).pipe(fe((a) => this.handler.handle(a)));
        if (t instanceof k || s.observe === "events") return o;
        let l = o.pipe(he((a) => a instanceof M));
        switch (s.observe || "body") {
          case "body":
            switch (i.responseType) {
              case "arraybuffer":
                return l.pipe(
                  C((a) => {
                    if (a.body !== null && !(a.body instanceof ArrayBuffer))
                      throw new w(2806, !1);
                    return a.body;
                  }),
                );
              case "blob":
                return l.pipe(
                  C((a) => {
                    if (a.body !== null && !(a.body instanceof Blob))
                      throw new w(2807, !1);
                    return a.body;
                  }),
                );
              case "text":
                return l.pipe(
                  C((a) => {
                    if (a.body !== null && typeof a.body != "string")
                      throw new w(2808, !1);
                    return a.body;
                  }),
                );
              case "json":
              default:
                return l.pipe(C((a) => a.body));
            }
          case "response":
            return l;
          default:
            throw new w(2809, !1);
        }
      }
      delete(t, r = {}) {
        return this.request("DELETE", t, r);
      }
      get(t, r = {}) {
        return this.request("GET", t, r);
      }
      head(t, r = {}) {
        return this.request("HEAD", t, r);
      }
      jsonp(t, r) {
        return this.request("JSONP", t, {
          params: new b().append(r, "JSONP_CALLBACK"),
          observe: "body",
          responseType: "json",
        });
      }
      options(t, r = {}) {
        return this.request("OPTIONS", t, r);
      }
      patch(t, r, s = {}) {
        return this.request("PATCH", t, ee(s, r));
      }
      post(t, r, s = {}) {
        return this.request("POST", t, ee(s, r));
      }
      put(t, r, s = {}) {
        return this.request("PUT", t, ee(s, r));
      }
      static ɵfac = function (r) {
        return new (r || n)(A(x));
      };
      static ɵprov = _({ token: n, factory: n.ɵfac });
    }
    return n;
  })(),
  Qe = /^\)\]\}',?\n/;
function ke(n) {
  if (n.url) return n.url;
  let e = se.toLocaleLowerCase();
  return n.headers.get(e);
}
var Be = new g(""),
  V = (() => {
    class n {
      fetchImpl =
        f(te, { optional: !0 })?.fetch ?? ((...t) => globalThis.fetch(...t));
      ngZone = f(Ee);
      handle(t) {
        return new Q((r) => {
          let s = new AbortController();
          return (
            this.doRequest(t, s.signal, r).then(ne, (i) =>
              r.error(new v({ error: i })),
            ),
            () => s.abort()
          );
        });
      }
      doRequest(t, r, s) {
        return Y(this, null, function* () {
          let i = this.createRequestInit(t),
            o;
          try {
            let u = this.ngZone.runOutsideAngular(() =>
              this.fetchImpl(t.urlWithParams, X({ signal: r }, i)),
            );
            (Ze(u), s.next({ type: P.Sent }), (o = yield u));
          } catch (u) {
            s.error(
              new v({
                error: u,
                status: u.status ?? 0,
                statusText: u.statusText,
                url: t.urlWithParams,
                headers: u.headers,
              }),
            );
            return;
          }
          let l = new T(o.headers),
            a = o.statusText,
            p = ke(o) ?? t.urlWithParams,
            y = o.status,
            m = null;
          if (
            (t.reportProgress &&
              s.next(new S({ headers: l, status: y, statusText: a, url: p })),
            o.body)
          ) {
            let u = o.headers.get("content-length"),
              O = [],
              c = o.body.getReader(),
              d = 0,
              R,
              N,
              h = typeof Zone < "u" && Zone.current;
            yield this.ngZone.runOutsideAngular(() =>
              Y(this, null, function* () {
                for (;;) {
                  let { done: D, value: L } = yield c.read();
                  if (D) break;
                  if ((O.push(L), (d += L.length), t.reportProgress)) {
                    N =
                      t.responseType === "text"
                        ? (N ?? "") +
                          (R ??= new TextDecoder()).decode(L, { stream: !0 })
                        : void 0;
                    let de = () =>
                      s.next({
                        type: P.DownloadProgress,
                        total: u ? +u : void 0,
                        loaded: d,
                        partialText: N,
                      });
                    h ? h.run(de) : de();
                  }
                }
              }),
            );
            let I = this.concatChunks(O, d);
            try {
              let D = o.headers.get(B) ?? "";
              m = this.parseBody(t, I, D);
            } catch (D) {
              s.error(
                new v({
                  error: D,
                  headers: new T(o.headers),
                  status: o.status,
                  statusText: o.statusText,
                  url: ke(o) ?? t.urlWithParams,
                }),
              );
              return;
            }
          }
          (y === 0 && (y = m ? Ue : 0),
            y >= 200 && y < 300
              ? (s.next(
                  new M({
                    body: m,
                    headers: l,
                    status: y,
                    statusText: a,
                    url: p,
                  }),
                ),
                s.complete())
              : s.error(
                  new v({
                    error: m,
                    headers: l,
                    status: y,
                    statusText: a,
                    url: p,
                  }),
                ));
        });
      }
      parseBody(t, r, s) {
        switch (t.responseType) {
          case "json":
            let i = new TextDecoder().decode(r).replace(Qe, "");
            return i === "" ? null : JSON.parse(i);
          case "text":
            return new TextDecoder().decode(r);
          case "blob":
            return new Blob([r], { type: s });
          case "arraybuffer":
            return r.buffer;
        }
      }
      createRequestInit(t) {
        let r = {},
          s = t.withCredentials ? "include" : void 0;
        if (
          (t.headers.forEach((i, o) => (r[i] = o.join(","))),
          t.headers.has(G) || (r[G] = Le),
          !t.headers.has(B))
        ) {
          let i = t.detectContentTypeHeader();
          i !== null && (r[B] = i);
        }
        return {
          body: t.serializeBody(),
          method: t.method,
          headers: r,
          credentials: s,
        };
      }
      concatChunks(t, r) {
        let s = new Uint8Array(r),
          i = 0;
        for (let o of t) (s.set(o, i), (i += o.length));
        return s;
      }
      static ɵfac = function (r) {
        return new (r || n)();
      };
      static ɵprov = _({ token: n, factory: n.ɵfac });
    }
    return n;
  })(),
  te = class {};
function ne() {}
function Ze(n) {
  n.then(ne, ne);
}
function Se(n, e) {
  return e(n);
}
function He(n, e) {
  return (t, r) => e.intercept(t, { handle: (s) => n(s, r) });
}
function et(n, e, t) {
  return (r, s) => Te(t, () => e(r, (i) => n(i, s)));
}
var ze = new g(""),
  oe = new g(""),
  ie = new g(""),
  ae = new g("", { providedIn: "root", factory: () => !0 });
function tt() {
  let n = null;
  return (e, t) => {
    n === null && (n = (f(ze, { optional: !0 }) ?? []).reduceRight(He, Se));
    let r = f(H);
    if (f(ae)) {
      let i = r.add();
      return n(e, t).pipe(Z(() => r.remove(i)));
    } else return n(e, t);
  };
}
var W = (() => {
  class n extends x {
    backend;
    injector;
    chain = null;
    pendingTasks = f(H);
    contributeToStability = f(ae);
    constructor(t, r) {
      (super(), (this.backend = t), (this.injector = r));
    }
    handle(t) {
      if (this.chain === null) {
        let r = Array.from(
          new Set([...this.injector.get(oe), ...this.injector.get(ie, [])]),
        );
        this.chain = r.reduceRight((s, i) => et(s, i, this.injector), Se);
      }
      if (this.contributeToStability) {
        let r = this.pendingTasks.add();
        return this.chain(t, (s) => this.backend.handle(s)).pipe(
          Z(() => this.pendingTasks.remove(r)),
        );
      } else return this.chain(t, (r) => this.backend.handle(r));
    }
    static ɵfac = function (r) {
      return new (r || n)(A(F), A(ge));
    };
    static ɵprov = _({ token: n, factory: n.ɵfac });
  }
  return n;
})();
var nt = /^\)\]\}',?\n/,
  rt = RegExp(`^${se}:`, "m");
function st(n) {
  return "responseURL" in n && n.responseURL
    ? n.responseURL
    : rt.test(n.getAllResponseHeaders())
      ? n.getResponseHeader(se)
      : null;
}
var re = (() => {
    class n {
      xhrFactory;
      constructor(t) {
        this.xhrFactory = t;
      }
      handle(t) {
        if (t.method === "JSONP") throw new w(-2800, !1);
        let r = this.xhrFactory;
        return (r.ɵloadImpl ? ue(r.ɵloadImpl()) : U(null)).pipe(
          pe(
            () =>
              new Q((i) => {
                let o = r.build();
                if (
                  (o.open(t.method, t.urlWithParams),
                  t.withCredentials && (o.withCredentials = !0),
                  t.headers.forEach((c, d) =>
                    o.setRequestHeader(c, d.join(",")),
                  ),
                  t.headers.has(G) || o.setRequestHeader(G, Le),
                  !t.headers.has(B))
                ) {
                  let c = t.detectContentTypeHeader();
                  c !== null && o.setRequestHeader(B, c);
                }
                if (t.responseType) {
                  let c = t.responseType.toLowerCase();
                  o.responseType = c !== "json" ? c : "text";
                }
                let l = t.serializeBody(),
                  a = null,
                  p = () => {
                    if (a !== null) return a;
                    let c = o.statusText || "OK",
                      d = new T(o.getAllResponseHeaders()),
                      R = st(o) || t.url;
                    return (
                      (a = new S({
                        headers: d,
                        status: o.status,
                        statusText: c,
                        url: R,
                      })),
                      a
                    );
                  },
                  y = () => {
                    let { headers: c, status: d, statusText: R, url: N } = p(),
                      h = null;
                    (d !== Ye &&
                      (h =
                        typeof o.response > "u" ? o.responseText : o.response),
                      d === 0 && (d = h ? Ue : 0));
                    let I = d >= 200 && d < 300;
                    if (t.responseType === "json" && typeof h == "string") {
                      let D = h;
                      h = h.replace(nt, "");
                      try {
                        h = h !== "" ? JSON.parse(h) : null;
                      } catch (L) {
                        ((h = D), I && ((I = !1), (h = { error: L, text: h })));
                      }
                    }
                    I
                      ? (i.next(
                          new M({
                            body: h,
                            headers: c,
                            status: d,
                            statusText: R,
                            url: N || void 0,
                          }),
                        ),
                        i.complete())
                      : i.error(
                          new v({
                            error: h,
                            headers: c,
                            status: d,
                            statusText: R,
                            url: N || void 0,
                          }),
                        );
                  },
                  m = (c) => {
                    let { url: d } = p(),
                      R = new v({
                        error: c,
                        status: o.status || 0,
                        statusText: o.statusText || "Unknown Error",
                        url: d || void 0,
                      });
                    i.error(R);
                  },
                  E = !1,
                  u = (c) => {
                    E || (i.next(p()), (E = !0));
                    let d = { type: P.DownloadProgress, loaded: c.loaded };
                    (c.lengthComputable && (d.total = c.total),
                      t.responseType === "text" &&
                        o.responseText &&
                        (d.partialText = o.responseText),
                      i.next(d));
                  },
                  O = (c) => {
                    let d = { type: P.UploadProgress, loaded: c.loaded };
                    (c.lengthComputable && (d.total = c.total), i.next(d));
                  };
                return (
                  o.addEventListener("load", y),
                  o.addEventListener("error", m),
                  o.addEventListener("timeout", m),
                  o.addEventListener("abort", m),
                  t.reportProgress &&
                    (o.addEventListener("progress", u),
                    l !== null &&
                      o.upload &&
                      o.upload.addEventListener("progress", O)),
                  o.send(l),
                  i.next({ type: P.Sent }),
                  () => {
                    (o.removeEventListener("error", m),
                      o.removeEventListener("abort", m),
                      o.removeEventListener("load", y),
                      o.removeEventListener("timeout", m),
                      t.reportProgress &&
                        (o.removeEventListener("progress", u),
                        l !== null &&
                          o.upload &&
                          o.upload.removeEventListener("progress", O)),
                      o.readyState !== o.DONE && o.abort());
                  }
                );
              }),
          ),
        );
      }
      static ɵfac = function (r) {
        return new (r || n)(A(Me));
      };
      static ɵprov = _({ token: n, factory: n.ɵfac });
    }
    return n;
  })(),
  Xe = new g(""),
  ot = "XSRF-TOKEN",
  it = new g("", { providedIn: "root", factory: () => ot }),
  at = "X-XSRF-TOKEN",
  ct = new g("", { providedIn: "root", factory: () => at }),
  z = class {},
  dt = (() => {
    class n {
      doc;
      platform;
      cookieName;
      lastCookieString = "";
      lastToken = null;
      parseCount = 0;
      constructor(t, r, s) {
        ((this.doc = t), (this.platform = r), (this.cookieName = s));
      }
      getToken() {
        if (this.platform === "server") return null;
        let t = this.doc.cookie || "";
        return (
          t !== this.lastCookieString &&
            (this.parseCount++,
            (this.lastToken = Ae(t, this.cookieName)),
            (this.lastCookieString = t)),
          this.lastToken
        );
      }
      static ɵfac = function (r) {
        return new (r || n)(A(Ne), A(Re), A(it));
      };
      static ɵprov = _({ token: n, factory: n.ɵfac });
    }
    return n;
  })();
function lt(n, e) {
  let t = n.url.toLowerCase();
  if (
    !f(Xe) ||
    n.method === "GET" ||
    n.method === "HEAD" ||
    t.startsWith("http://") ||
    t.startsWith("https://")
  )
    return e(n);
  let r = f(z).getToken(),
    s = f(ct);
  return (
    r != null &&
      !n.headers.has(s) &&
      (n = n.clone({ headers: n.headers.set(s, r) })),
    e(n)
  );
}
var K = (function (n) {
  return (
    (n[(n.Interceptors = 0)] = "Interceptors"),
    (n[(n.LegacyInterceptors = 1)] = "LegacyInterceptors"),
    (n[(n.CustomXsrfConfiguration = 2)] = "CustomXsrfConfiguration"),
    (n[(n.NoXsrfProtection = 3)] = "NoXsrfProtection"),
    (n[(n.JsonpSupport = 4)] = "JsonpSupport"),
    (n[(n.RequestsMadeViaParent = 5)] = "RequestsMadeViaParent"),
    (n[(n.Fetch = 6)] = "Fetch"),
    n
  );
})(K || {});
function Je(n, e) {
  return { ɵkind: n, ɵproviders: e };
}
function ut(...n) {
  let e = [
    Ce,
    re,
    W,
    { provide: x, useExisting: W },
    { provide: F, useFactory: () => f(Be, { optional: !0 }) ?? f(re) },
    { provide: oe, useValue: lt, multi: !0 },
    { provide: Xe, useValue: !0 },
    { provide: z, useClass: dt },
  ];
  for (let t of n) e.push(...t.ɵproviders);
  return me(e);
}
var xe = new g("");
function ht() {
  return Je(K.LegacyInterceptors, [
    { provide: xe, useFactory: tt },
    { provide: oe, useExisting: xe, multi: !0 },
  ]);
}
function ft() {
  return Je(K.Fetch, [
    V,
    { provide: Be, useExisting: V },
    { provide: F, useExisting: V },
  ]);
}
var pt = new g(""),
  yt = "b",
  mt = "h",
  gt = "s",
  Tt = "st",
  Et = "u",
  Rt = "rt",
  ce = new g(""),
  wt = ["GET", "HEAD"];
function vt(n, e) {
  let E = f(ce),
    { isCacheActive: t } = E,
    r = le(E, ["isCacheActive"]),
    { transferCache: s, method: i } = n;
  if (
    !t ||
    s === !1 ||
    (i === "POST" && !r.includePostRequests && !s) ||
    (i !== "POST" && !wt.includes(i)) ||
    (!r.includeRequestsWithAuthHeaders && bt(n)) ||
    r.filter?.(n) === !1
  )
    return e(n);
  let o = f(we);
  if (f(pt, { optional: !0 })) throw new w(2803, !1);
  let a = n.url,
    p = Pt(n, a),
    y = o.get(p, null),
    m = r.includeHeaders;
  if ((typeof s == "object" && s.includeHeaders && (m = s.includeHeaders), y)) {
    let { [yt]: u, [Rt]: O, [mt]: c, [gt]: d, [Tt]: R, [Et]: N } = y,
      h = u;
    switch (O) {
      case "arraybuffer":
        h = new TextEncoder().encode(u).buffer;
        break;
      case "blob":
        h = new Blob([u]);
        break;
    }
    let I = new T(c);
    return U(new M({ body: h, headers: I, status: d, statusText: R, url: N }));
  }
  return e(n).pipe(
    ye((u) => {
      u instanceof M;
    }),
  );
}
function bt(n) {
  return n.headers.has("authorization") || n.headers.has("proxy-authorization");
}
function Ve(n) {
  return [...n.keys()]
    .sort()
    .map((e) => `${e}=${n.getAll(e)}`)
    .join("&");
}
function Pt(n, e) {
  let { params: t, method: r, responseType: s } = n,
    i = Ve(t),
    o = n.serializeBody();
  o instanceof URLSearchParams ? (o = Ve(o)) : typeof o != "string" && (o = "");
  let l = [r, s, e, o, i].join("|"),
    a = Nt(l);
  return a;
}
function Nt(n) {
  let e = 0;
  for (let t of n) e = (Math.imul(31, e) + t.charCodeAt(0)) << 0;
  return ((e += 2147483648), e.toString());
}
function yn(n) {
  return [
    {
      provide: ce,
      useFactory: () => (
        ve("NgHttpTransferCache"),
        X({ isCacheActive: !0 }, n)
      ),
    },
    { provide: ie, useValue: vt, multi: !0 },
    {
      provide: be,
      multi: !0,
      useFactory: () => {
        let e = f(Pe),
          t = f(ce);
        return () => {
          e.whenStable().then(() => {
            t.isCacheActive = !1;
          });
        };
      },
    },
  ];
}
export { Ce as a, ut as b, ht as c, ft as d, yn as e };
