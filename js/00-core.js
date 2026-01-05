const App = {
  qs: (e) => document.querySelector(e),
  qsa: (e) => document.querySelectorAll(e),

  storage: {
    get: (k) => JSON.parse(localStorage.getItem(k)),
    set: (k, v) => localStorage.setItem(k, JSON.stringify(v))
  }
};

