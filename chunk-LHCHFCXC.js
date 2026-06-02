import { e as Q } from "./chunk-7B6XJPMO.js";
import { V as $, ea as F, va as z, za as k } from "./chunk-E7EHJUJY.js";
import {
  $b as E,
  Aa as L,
  Ab as T,
  Ac as N,
  Db as h,
  Fb as v,
  Gb as q,
  Hb as u,
  Ib as p,
  Jb as C,
  Ta as f,
  Wb as x,
  Xb as H,
  Za as l,
  Zb as V,
  _b as R,
  ac as S,
  db as _,
  ha as D,
  jb as I,
  l as b,
  yb as c,
} from "./chunk-KJMU7Q3O.js";
var j = ["OmMarqueeContent"],
  A = ["OmMarquee"],
  Y = ["*"];
function B(r, s) {
  if ((r & 1 && C(0, "div", 5), r & 2)) {
    let e = s.$implicit;
    c("innerHTML", e, f);
  }
}
function W(r, s) {
  if ((r & 1 && C(0, "div", 5), r & 2)) {
    let e = s.$implicit;
    c("innerHTML", e, f);
  }
}
function X(r, s) {
  if ((r & 1 && C(0, "div", 5), r & 2)) {
    let e = s.$implicit;
    c("innerHTML", e, f);
  }
}
function G(r, s) {
  if ((r & 1 && C(0, "div", 5), r & 2)) {
    let e = s.$implicit;
    c("innerHTML", e, f);
  }
}
var se = (() => {
  class r {
    sanitizer;
    cdr;
    platformId;
    marqueeRef;
    elementRefs;
    styleClass;
    set reverse(e) {
      if (e) {
        this.style["--om-marquee-reverse"] = "reverse";
        return;
      }
      this.style["--om-marquee-reverse"] = "";
    }
    set animationDuration(e) {
      this.style["--om-marquee-animation-duration"] = e;
    }
    set marqueeGap(e) {
      this.style["--om-marquee-gap"] = e;
    }
    set pauseOnHover(e) {
      if (e) {
        this.style["--om-marquee-pause"] = "paused";
        return;
      }
      this.style["--om-marquee-pause"] = "running";
    }
    vertical = !1;
    scrollable = !1;
    wasScrollable = this.scrollable;
    isDragging = !1;
    startCoord = 0;
    currentTranslate = 0;
    lastTranslate = 0;
    unListeners = [];
    style = {};
    marqueeElements = [];
    isInView = !1;
    intersectionObserver;
    contentSnapshot = [];
    constructor(e, t, n) {
      ((this.sanitizer = e), (this.cdr = t), (this.platformId = n));
    }
    ngAfterViewInit() {
      (this.getMarqueeContent(),
        k(this.platformId) &&
          ((this.intersectionObserver = new IntersectionObserver(([e]) => {
            e.isIntersecting
              ? this.isInView ||
                ((this.isInView = !0), this.cdr.detectChanges())
              : this.isInView &&
                ((this.isInView = !1), this.cdr.detectChanges());
          })),
          this.intersectionObserver.observe(this.marqueeRef.nativeElement),
          this.scrollable && this.initDragEvents()));
    }
    ngAfterContentChecked() {
      if (!this.elementRefs) return;
      let e = this.elementRefs.map((t) => t.nativeElement.innerHTML);
      JSON.stringify(this.contentSnapshot) !== JSON.stringify(e) &&
        ((this.contentSnapshot = e), this.getMarqueeContent());
    }
    ngOnChanges(e) {
      if (e.scrollable && !e.scrollable.firstChange) {
        let t = e.scrollable.currentValue;
        (t && !this.wasScrollable
          ? this.initDragEvents()
          : !t && this.wasScrollable && this.cleanupDragEvents(),
          (this.wasScrollable = t));
      }
    }
    destroy$ = new b();
    ngOnDestroy() {
      (this.intersectionObserver?.disconnect(),
        this.cleanupDragEvents(),
        this.destroy$.next(),
        this.destroy$.complete());
    }
    cleanupDragEvents() {
      (this.unListeners.forEach((e) => e()), (this.unListeners = []));
    }
    getMarqueeContent() {
      this.elementRefs &&
        ((this.marqueeElements = this.elementRefs
          ?.toArray()
          .map((e) =>
            this.sanitizer.bypassSecurityTrustHtml(e.nativeElement.outerHTML),
          )),
        this.cdr.detectChanges());
    }
    initDragEvents() {
      let e = this.marqueeRef.nativeElement.querySelector(
          ".om-marquee-content",
        ),
        t = Array.from(e.querySelectorAll(".om-marquee-item-wrapper")),
        n = (i) => {
          this.scrollable &&
            ((this.lastTranslate = this.getCurrentTranslate(
              t[0],
              this.vertical ? "y" : "x",
            )),
            (this.currentTranslate = this.lastTranslate),
            (this.isDragging = !0),
            (this.startCoord = this.vertical ? i.clientY : i.clientX),
            e.classList.add("dragging"),
            t.forEach((d) => {
              (d.classList.add("paused"),
                (d.style.transform = this.vertical
                  ? `translateY(${this.currentTranslate}px)`
                  : `translateX(${this.currentTranslate}px)`));
            }),
            i.preventDefault());
        },
        a = (i) => {
          if (!this.isDragging) return;
          let M = (this.vertical ? i.clientY : i.clientX) - this.startCoord;
          this.currentTranslate = this.lastTranslate + M;
          let g = t[0],
            y = this.vertical ? g.offsetHeight : g.offsetWidth,
            w = parseFloat(
              getComputedStyle(g).getPropertyValue("--om-marquee-gap") || "0",
            ),
            O = -(y + w);
          (this.currentTranslate < O && (this.currentTranslate = O),
            this.currentTranslate > 0 && (this.currentTranslate = 0),
            t.forEach((P) => {
              P.style.transform = this.vertical
                ? `translateY(${this.currentTranslate}px)`
                : `translateX(${this.currentTranslate}px)`;
            }));
        },
        o = () => {
          if (!this.isDragging) return;
          ((this.isDragging = !1),
            (this.lastTranslate = this.currentTranslate));
          let i = t[0],
            d = this.vertical ? i.offsetHeight : i.offsetWidth,
            M = parseFloat(
              getComputedStyle(i).getPropertyValue("--om-marquee-gap") || "0",
            ),
            g = d + M,
            y = Math.abs(this.currentTranslate) / g,
            w = getComputedStyle(i).getPropertyValue(
              "--om-marquee-animation-duration",
            ),
            P = -1 * (parseFloat(w) * 1e3 || 2e4) * (this.reverse ? 1 - y : y);
          (e.classList.remove("dragging"),
            t.forEach((m) => {
              (m.classList.remove("paused"),
                (m.style.animation = "none"),
                m.offsetWidth,
                (m.style.animation = ""),
                (m.style.animationDelay = `${P}ms`),
                (m.style.transform = ""));
            }));
        };
      (e.addEventListener("pointerdown", n),
        e.addEventListener("pointermove", a),
        window.addEventListener("pointerup", o),
        window.addEventListener("pointercancel", o),
        this.unListeners.push(() => {
          (e.removeEventListener("pointerdown", n),
            e.removeEventListener("pointermove", a),
            window.removeEventListener("pointerup", o),
            window.removeEventListener("pointercancel", o));
        }));
    }
    getCurrentTranslate(e, t) {
      let a = getComputedStyle(e).transform;
      if (a === "none") return 0;
      let o = a.match(/matrix\(([^)]+)\)/);
      if (!o) return 0;
      let i = o[1].split(", ").map(parseFloat);
      return t === "x" ? i[4] : i[5];
    }
    static ɵfac = function (t) {
      return new (t || r)(_(Q), _(N), _(L));
    };
    static ɵcmp = I({
      type: r,
      selectors: [["om-marquee"]],
      contentQueries: function (t, n, a) {
        if ((t & 1 && V(a, j, 4), t & 2)) {
          let o;
          E((o = S())) && (n.elementRefs = o);
        }
      },
      viewQuery: function (t, n) {
        if ((t & 1 && R(A, 5), t & 2)) {
          let a;
          E((a = S())) && (n.marqueeRef = a.first);
        }
      },
      inputs: {
        styleClass: "styleClass",
        reverse: "reverse",
        animationDuration: "animationDuration",
        marqueeGap: "marqueeGap",
        pauseOnHover: "pauseOnHover",
        vertical: "vertical",
        scrollable: "scrollable",
      },
      features: [D],
      ngContentSelectors: Y,
      decls: 17,
      vars: 10,
      consts: [
        ["OmMarquee", ""],
        [1, "om-marquee", 3, "ngStyle", "ngClass"],
        [1, "om-marquee-invisible"],
        [1, "om-marquee-content"],
        [1, "om-marquee-item-wrapper"],
        [1, "om-marquee-item", 3, "innerHTML"],
      ],
      template: function (t, n) {
        (t & 1 &&
          (x(),
          u(0, "div", 1, 0)(2, "div", 2),
          H(3),
          p(),
          u(4, "div", 3)(5, "div", 4),
          v(6, B, 1, 1, "div", 5, h),
          p(),
          u(8, "div", 4),
          v(9, W, 1, 1, "div", 5, h),
          p(),
          u(11, "div", 4),
          v(12, X, 1, 1, "div", 5, h),
          p(),
          u(14, "div", 4),
          v(15, G, 1, 1, "div", 5, h),
          p()()()),
          t & 2 &&
            (T("direction-row", !n.vertical)("direction-column", n.vertical),
            c("ngStyle", n.style)("ngClass", n.styleClass),
            l(4),
            T("outOfView", !n.isInView)("scrollable", n.scrollable),
            l(2),
            q(n.marqueeElements),
            l(3),
            q(n.marqueeElements),
            l(3),
            q(n.marqueeElements),
            l(3),
            q(n.marqueeElements)));
      },
      dependencies: [z, $, F],
      styles: [
        ".om-marquee[_ngcontent-%COMP%]{--om-marquee-animation-duration: 20s;--om-marquee-gap: 1rem;--om-marquee-reverse: ;--om-marquee-pause: paused;width:100%;height:100%}.om-marquee[_ngcontent-%COMP%]   .om-marquee-invisible[_ngcontent-%COMP%]{width:0;height:0;display:none;pointer-events:none}.om-marquee[_ngcontent-%COMP%]   .om-marquee-content[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;gap:var(--om-marquee-gap);overflow:hidden;padding:.5rem}.om-marquee[_ngcontent-%COMP%]   .om-marquee-content[_ngcontent-%COMP%]   .om-marquee-item-wrapper[_ngcontent-%COMP%]{display:flex;gap:var(--om-marquee-gap);flex-shrink:0}.om-marquee.direction-row[_ngcontent-%COMP%]   .om-marquee-content[_ngcontent-%COMP%]{flex-direction:row}.om-marquee.direction-row[_ngcontent-%COMP%]   .om-marquee-content[_ngcontent-%COMP%]   .om-marquee-item-wrapper[_ngcontent-%COMP%]{flex-direction:row;animation:_ngcontent-%COMP%_om-marquee-row var(--om-marquee-animation-duration) infinite linear var(--om-marquee-reverse)}.om-marquee.direction-column[_ngcontent-%COMP%]   .om-marquee-content[_ngcontent-%COMP%]{flex-direction:column}.om-marquee.direction-column[_ngcontent-%COMP%]   .om-marquee-content[_ngcontent-%COMP%]   .om-marquee-item-wrapper[_ngcontent-%COMP%]{flex-direction:column;animation:_ngcontent-%COMP%_om-marquee-column var(--om-marquee-animation-duration) infinite linear var(--om-marquee-reverse)}.om-marquee[_ngcontent-%COMP%]   .om-marquee-content.scrollable[_ngcontent-%COMP%]{cursor:grab}.om-marquee[_ngcontent-%COMP%]   .om-marquee-content.scrollable.dragging[_ngcontent-%COMP%]{cursor:grabbing}.om-marquee[_ngcontent-%COMP%]   .om-marquee-content[_ngcontent-%COMP%]:hover > .om-marquee-item-wrapper[_ngcontent-%COMP%]{animation-play-state:var(--om-marquee-pause)}.om-marquee[_ngcontent-%COMP%]   .om-marquee-content.outOfView[_ngcontent-%COMP%] > .om-marquee-item-wrapper[_ngcontent-%COMP%]{animation-play-state:paused}.om-marquee[_ngcontent-%COMP%]   .om-marquee-item-wrapper.paused[_ngcontent-%COMP%]{animation:none!important}@keyframes _ngcontent-%COMP%_om-marquee-row{0%{transform:translate(0)}to{transform:translate(calc(-100% - var(--om-marquee-gap)))}}@keyframes _ngcontent-%COMP%_om-marquee-column{0%{transform:translateY(0)}to{transform:translateY(calc(-100% - var(--om-marquee-gap)))}}",
      ],
    });
  }
  return r;
})();
export { se as a };
