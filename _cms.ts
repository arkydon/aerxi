import lumeCMS from "lume/cms/mod.ts";
import { Field } from "lume/cms/types.ts";

const cms = lumeCMS({
    extraHead: `
  <style>
    body {
      font-family: "Barlow Condensed";
      font-size: 20px;
    }
  </style>
    `,
});

cms.collection({
    name:"Blog", 
    store: "src:blog/**/*.{md, vto}",
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

cms.collection({
    name:"Software", 
    store: "src:software/**/*.{md, vto}",
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
            options: ["android","windows"],
            multiple: true,
            value: ["hub"]
        },
        {   
            name: "layout", 
            type: "hidden", 
            value: "layouts/post.vto"
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

cms.collection({
    name:"Media", 
    store: "src:media/**/*.{md,vto}",
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
            options: ["music","photos"],
            multiple: true,
            value: ["hub"]
        },
        {   
            name: "layout", 
            type: "hidden", 
            value: "layouts/post.vto"
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

cms.collection({
    name:"Web > Links", 
    store: "src:web/links/**/*.{md,vto}",
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
            options: ["links"],
            multiple: true,
            value: ["hub"]
        },
        {   
            name: "layout", 
            type: "hidden", 
            value: "layouts/post.vto"
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


cms.document("Changelog", "src:notes/changelog/index.vto", [
    "content: markdown",
]);

cms.document("Now", "src:notes/now/index.md", [
    "content: markdown",
]);

cms.document("Blogroll", "src:web/blogroll/blog-roll.vto", [
    "content: markdown",
]);

cms.collection({ 
    name: "Favourites", 
    store: "src:notes/about/_data/favourites/*.yaml", 
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
