import { defineField, defineType } from "sanity";

export default defineType({
    name: "project",
    title: "Projekat",
    type: "document",

    fields: [
        defineField({
            name: "title",
            title: "Naziv projekta",
            type: "string",
            validation: Rule => Rule.required()
        }),

        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96
            }
        }),

        defineField({
            name: "status",
            title: "Status projekta",
            type: "string",
            options: {
                list: [
                    { title: "U izgradnji", value: "construction" },
                    { title: "U dolasku", value: "upcoming" },
                    { title: "Završeni", value: "completed" }
                ],
                layout: "radio"
            },
            validation: Rule => Rule.required()
        }),

        defineField({
            name: "location",
            title: "Lokacija",
            type: "string"
        }),

        defineField({
            name: "mainImage",
            title: "Glavna slika projekta",
            type: "image",
            options: {hotspot: true}
        }),

        defineField({
            name: "description",
            title: "Opis projekta",
            type: "text",
        }),

        defineField({
            name: "nekretnine",
            title: "Nekretnine u projektu",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{type: "stan"}]
                }
            ]
        }),

        defineField({
            name: "gallery",
            title: "Galerija projekta",
            type: "array",
            of: [{type: "image"}]
        }),

        defineField({
            name: "youtubeUrl",
            title: "Youtube video",
            type: "url"
        })
    ]
})