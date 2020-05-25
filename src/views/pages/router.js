import Index from "./index.js";
// import Signup from "Signup.js";
// import Signin from "Signin.js";
// import Landing from "Landing.js";
// import UserProfile from "UserProfile.js";
// import UserInterview from "UserInterview.js";
// import EditInterview from "EditInterview.js";

class Router {
  constructor() {
    this.routes = [{
      pattern: /^\/?$/i,
      view: Index
    // }, {
    //   pattern: /^\/landing\/?$/i,
    //   view: Landing,
    // }, {
    //   pattern: /^\/signup\/?$/i,
    //   view: Signup
    // }, {
    //   pattern: /^\/login\/?$/i,
    //   view: Signin,
    // }, {
    //   pattern: /^\/user\/\d+\/?$/i,
    //   view: UserProfile,
    // }, {
    //   pattern: /^\/\d+\/?$/i,
    //   view: UserInterview,
    // }, {
    //   pattern: /^\/\d+\/edit\/?$/i,
    //   view: EditInterview,
    }];
  }
  getUrl() {
    return location.hash.slice(1);
  }
  match(url=null) {
    let view = null;
    if (url === null) {
      url = this.getUrl();
    }
    for (let route of this.routes) {
      if (route.pattern.test(url)) {
        view = route.view;
        break;
      }
    }
    return view;
  }
};

const router = new Router();

export default router;