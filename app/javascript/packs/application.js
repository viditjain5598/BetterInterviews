import 'core-js/stable'
import 'regenerator-runtime/runtime'

var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);