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

const site = lume({
    location: new URL("https://arky.pages.dev"),
    src: "./src",
    dest: "./_output", 
});

site.use(sass());
site.add("static/styles.scss");

site.use(slugifyUrls());

//site.copy("./content", "blog");

//Copy all the images from these folders and not just the md
site.add("blog")
    .add("media")
    .add("notes")
    .add("software")
    .add("web");

//site.copy("static/fonts/RobotoFlex");
site.copy("static/favicon.ico")
    .copy("static/og.jpg");

site.add("robots.txt");

//site.use(picture())
//    .use(transformImages())

site.use(svgo())
    .use(date())
    .use(sheets());

site.hooks.addMarkdownItPlugin(tocAnchor.default, { level: [1,2,3,4] });
site.hooks.addMarkdownItPlugin(toc, { includeLevel: [2, 3, 4], listType : "ol"});

site.use(googleFonts({
    cssFile: "static/styles.css",
    placeholder: "/* google-fonts */",
      subsets: [
    "latin",
    "latin-ext",
    ],
    fonts:
        {
            Arch: "https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62.5,100..900;1,62.5,100..900&display=swap",
            headtitlefont: "https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap",
            signfont: "https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@400;500&display=swap",
            "Roboto FLex": "https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wdth,wght,GRAD,XTRA@8..144,25..151,100..1000,-200..150,323..603&display=swap",
        }     
}));

export default site;
