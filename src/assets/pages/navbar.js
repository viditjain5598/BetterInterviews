import {Server} from "./config.js";

let Navbar = {
  render: async () => {
    let view = `
    <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-dark">
      <strong>
        <a class="navbar-brand" href="/#/">Welcome</a>
      </strong>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
        </div>
      </div>
    </nav>
    `;
    return view
  }
}

export default Navbar;