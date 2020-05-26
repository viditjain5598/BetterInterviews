"use strict";

 import router from "./assets/pages/router.js";

const renderPage = async () => {
  let view = router.match();
  const root = null || document.getElementById('root');
  root.innerHTML = await view.render();
}

window.addEventListener('hashchange', renderPage);
window.addEventListener('load', renderPage);