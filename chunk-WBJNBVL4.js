import { b as h, g as u } from "./chunk-FXVCYABY.js";
import { b as f } from "./chunk-QI2SEP4K.js";
import { Fa as v, za as i } from "./chunk-E7EHJUJY.js";
import { Aa as p, C as c, X as a, ba as o, wa as l } from "./chunk-KJMU7Q3O.js";
var m = class s {
  _activeSection = l("hero");
  activeSection = this._activeSection.asReadonly();
  router = o(u);
  platformId = o(p);
  layoutService = o(f);
  viewportScroller = o(v);
  observers = new Map();
  constructor() {
    i(this.platformId) &&
      this.router.events.pipe(c((t) => t instanceof h)).subscribe(() => {
        this.handleNavigationEnd();
      });
  }
  initializeObserver(t, e) {
    if (!i(this.platformId)) return;
    this.observers.has(t) && this.observers.get(t)?.disconnect();
    let r = new IntersectionObserver(
      (n) => {
        n.forEach((b) => {
          b.isIntersecting && this._activeSection.set(t);
        });
      },
      { threshold: 0.5 },
    );
    (r.observe(e), this.observers.set(t, r));
  }
  scrollToSection(t) {
    if (!i(this.platformId)) return;
    let e = document.getElementById(t);
    e && e.scrollIntoView({ behavior: "smooth" });
  }
  isActiveSection(t) {
    return this._activeSection() === t;
  }
  cleanup() {
    i(this.platformId) &&
      (this.observers.forEach((t) => t.disconnect()), this.observers.clear());
  }
  navigate(t) {
    if (!i(this.platformId)) return;
    let [e, r] = t.split("?"),
      n = r ? { [r.split("=")[0]]: r.split("=")[1] || "" } : {};
    this.router.navigate([`${this.layoutService.currentLang()}${e}`], {
      queryParams: n,
    });
  }
  navigateToExternal(t) {
    window.open(t, "_blank");
  }
  handleNavigationEnd() {
    this.router.url === "/" || this.router.url === ""
      ? this.viewportScroller.scrollToPosition([0, 0])
      : (this._activeSection.set("hero"),
        this.cleanup(),
        this.viewportScroller.scrollToPosition([0, 0]));
  }
  static ɵfac = function (e) {
    return new (e || s)();
  };
  static ɵprov = a({ token: s, factory: s.ɵfac, providedIn: "root" });
};
export { m as a };
