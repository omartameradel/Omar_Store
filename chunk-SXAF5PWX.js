function p(o, t) {
  return o.includes("_.json")
    ? t === "ar"
      ? o.replace("_.json", "_ar.json")
      : o.replace("_.json", "_en.json")
    : o;
}
function l(o, t) {
  if (!o || typeof o != "string" || !/^\d{2}:\d{2}$/.test(o))
    return t ? "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F" : "N/A";
  try {
    let [s, a] = o.split(":").map(Number);
    if (isNaN(s) || isNaN(a))
      return t ? "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F" : "N/A";
    if (t) {
      let e = s < 12 ? "\u0635" : "\u0645";
      return `${s % 12 || 12}:${a.toString().padStart(2, "0")} ${e}`;
    } else {
      let e = s >= 12 ? "PM" : "AM";
      return `${s % 12 || 12}:${a.toString().padStart(2, "0")} ${e}`;
    }
  } catch {
    return t ? "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F" : "N/A";
  }
}
function c(o) {
  let t = [...o];
  for (let s = t.length - 1; s > 0; s--) {
    let a = Math.floor(Math.random() * (s + 1));
    [t[s], t[a]] = [t[a], t[s]];
  }
  return t;
}
var d = {
    headerJsonUrl: "assets/data/layout/landing/header/header_.json",
    footerJsonUrl: "assets/data/layout/landing/footer/footer_.json",
    floatingContactUsJsonUrl:
      "assets/data/layout/landing/floating-contact-us/floating-contact-us_.json",
    bannerJsonUrl: "assets/data/layout/landing/banner/banner_.json",
  },
  u = {
    seoJsonUrl: "assets/data/home-page/seo/seo_.json",
    heroJsonUrl: "assets/data/home-page/hero-section/hero-section_.json",
    partnersJsonUrl:
      "assets/data/home-page/partners-section/partners-section_.json",
    ourServicesJsonUrl:
      "assets/data/home-page/feature-section/feature-section_.json",
    statsJsonUrl: "assets/data/home-page/stats-section/stats-section_.json",
    teamJsonUrl: "assets/data/home-page/team-section/team-section_.json",
    testimonialsJsonUrl:
      "assets/data/home-page/testimonial-section/testimonials-section_.json",
    callToActionJsonUrl:
      "assets/data/home-page/call-to-action-section/call-to-action-section_.json",
    blogSectionJsonUrl: "assets/data/home-page/blog-section/blog-section_.json",
    faqJsonUrl: "assets/data/home-page/faq-section/faq-section_.json",
    portfolioJsonUrl:
      "assets/data/home-page/portfolio-section/portfolio-section_.json",
  },
  _ = { getAllData: "assets/data/other/about-us-page/about-us-page_.json" },
  f = {
    getAllData: "assets/data/other/contact-us-page/contact-us-page_.json",
    sendEmail: "https://fahd-cloud.com/api/Email",
  },
  h = { getAllData: "assets/data/other/payments-page/payments-page_.json" },
  m = {
    getAllProjects: "assets/data/other/portfolio-page/portfolio-page_.json",
  },
  j = { getPageData: "assets/data/other/error-404-page/error-404-page_.json" },
  U = { getPageData: "assets/data/other/soon-page/soon-page_.json" },
  A = { getPageData: "assets/data/other/dynamic-pages/dynamic-pages_.json" };
export {
  d as a,
  u as b,
  _ as c,
  f as d,
  h as e,
  m as f,
  j as g,
  U as h,
  A as i,
  p as j,
  l as k,
  c as l,
};
