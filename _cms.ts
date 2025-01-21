import lumeCMS from "lume/cms/mod.ts";
import { Field } from "lume/cms/types.ts";

const cms = lumeCMS({
    extraHead: `
  <style>
    body {
      font-family: "Barlow Condensed";
    }
  </style>
    `,
});



cms.collection({
    name:"Blog", 
    store: "src:blog/**/*.md",
    fields: [
        "title: text",
        {
            name: "date",
            type: "date",
            init(field) {
                field.value = new Date();
            }
        },
        {
            name: "tags",
            label: "Tags",
            type: "list",
            value: ["blog"]
        },
        {   
            name: "layout", 
            type: "hidden", 
            value: "layouts/post.vto"
            /* init(field) {field.value = "layouts/post.vto";} */
,        },
        {
            name: "og_description",
            label: "Open Graph Description",
            type: "text",
        },
        {
            name: "content",
            label: "Blog Post Content",
            type: "markdown"
        },
    ],
    documentName: "{title}.md",
});
cms.collection("Hub", "src:hub/**/*.md", [
    "title: text",
    "date: date",
    "tags: list",
    "content: markdown",
]);

cms.document("Changelog", "src:hub/notes/changelog/index.vto", [
    "content: markdown",
]);

cms.document("Now", "src:hub/notes/now/index.md", [
    "content: markdown",
]);

cms.document("Blogroll", "src:hub/web/blogroll/blog-roll.vto", [
    "content: markdown",
]);

cms.collection({ 
    name: "Favourites", 
    store: "src:hub/notes/about/_data/favourites/*.yaml", 
    fields: [
        {
            name: "title",
            type: "text",
        },
        {
            name: "data",
            type: "list",
        }
    ],
    documentName: "{title}.yaml",

});

cms.upload(
    "uploads: Uploaded files",
    "src:**/*{.jpg,.svg,.png,.gif,.mp3,.mp4,.pdf,.webp}",
);

export default cms;
