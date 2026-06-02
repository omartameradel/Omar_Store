var p = ((a) => (
    (a.home = "home"),
    (a.contact = "contact-us"),
    (a.payments = "payment-methods"),
    (a.payments2 = "payment-method"),
    (a.aboutUs = "about-us"),
    (a.portfolio = "portfolio"),
    (a.soonPage = "soon"),
    (a.dynamicPages = "pages"),
    (a.dynamicAppPage = "app-page"),
    (a.pageNotFound = "Error404"),
    a
  ))(p || {}),
  o = Object.values(p);
export { o as a, p as p };