import Index from "./index.js";
// import DeleteInterview from "./deleteInterview.js";
// import NewInterview from "./newInterview.js";
// import EditInterview from "./editInterview.js";

class Router {  
  constructor() {
    this.routes = {
      '/'                  : Index
      '/interviews/edit'   : EditInterview,
      '/interviews/new'    : NewInterview,
      '/interviews/delete' : DeleteInterview  
    };
  }
  getUrl() {
    return location.hash.slice(1);
  }
  match(url=null) {
    url = null || this.getUrl();
    return this.routes[url];
  }
};

const router = new Router();

export default router;