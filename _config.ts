import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";
import picture from "lume/plugins/picture.ts";
import transformImages from "lume/plugins/transform_images.ts";
import svgo from "lume/plugins/svgo.ts";
import lightningCSS from "lume/plugins/lightningcss.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import date from "lume/plugins/date.ts";
import googleFonts from "lume/plugins/google_fonts.ts";

import toc from "npm:markdown-it-table-of-contents";
import tocAnchor from "npm:markdown-it-anchor";

import sheets from "lume/plugins/sheets.ts";

const site = lume({location: new URL("https://arky.pages.dev"),});

site.use(sass());

site.use(slugifyUrls());

site.copy("static/fonts/RobotoFlex")
    .copy("static/favicon.ico")
    .copy("static/og.jpg")
    .copy("robots.txt");

site.use(picture())
    .use(transformImages())

    .use(svgo())
    .use(date())
    .use(sheets());

site.hooks.addMarkdownItPlugin(tocAnchor.default, { level: [1,2,3,4] });
site.hooks.addMarkdownItPlugin(toc, { includeLevel: [2, 3, 4], listType : "ol"});

/*
site.use(googleFonts({
    fonts:
    {
    rflex: "https://fonts.google.com/share?selection.family=Roboto+Flex:opsz,wght@8..144,100..1000",
    rflex: "https://fonts.google.com/share?selection.family=Roboto+Flex:opsz,wdth,wght,GRAD@8..144,25..151,100..1000,-200..150",
    }
}));
*/

export default site;
