import { defineField, defineType } from "sanity";

export default defineType({
    name: "gallery",
    title: "Galerija",
    type: "document",

    fields: [
        defineField({
            name: "gallery",
            title: "Galerija",
            type: "array",
            of: [{type: "image"}]
        })
    ]
})