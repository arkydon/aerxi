import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";
import picture from "lume/plugins/picture.ts";
import transformImages from "lume/plugins/transform_images.ts";
import svgo from "lume/plugins/svgo.ts";
import lightningCSS from "lume/plugins/lightningcss.ts";

import date from "lume/plugins/date.ts";

const site = lume();

site.use(sass());

site.copy("static/fonts/AcuminPro");
site.copy("static/favicon.ico");

site.use(picture());
site.use(transformImages());

site.use(svgo());

site.use(date(/* Options */));
export default site;
