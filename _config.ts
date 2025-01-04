import lume from "lume/mod.ts";
import lightningCSS from "lume/plugins/lightningcss.ts";
import nav from "lume/plugins/nav.ts"; /* Remove */


const site = lume();

site.use(lightningCSS());
site.use(nav(/* Options */)); /* Remove */

export default site;
