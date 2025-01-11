import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";
import picture from "lume/plugins/picture.ts";
import transformImages from "lume/plugins/transform_images.ts";
import svgo from "lume/plugins/svgo.ts";
import lightningCSS from "lume/plugins/lightningcss.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import date from "lume/plugins/date.ts";
import googleFonts from "lume/plugins/google_fonts.ts";

const site = lume({location: new URL("https://arky.pages.dev"),});

site.use(sass());

site.use(slugifyUrls());

/*site.copy("static/fonts/AcuminPro");*/
site.copy("static/fonts/RobotoFlex");
site.copy("static/favicon.ico");
site.copy("robots.txt");

site.use(picture());
site.use(transformImages());

site.use(svgo());

site.use(date(/* Options */));


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
