import { defineField, defineType } from "sanity";

export default defineType({
  name: "stan",
  title: "Stan",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Naslov stana",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),

    defineField({
      name: "price",
      title: "Cijena (KM/m²)",
      type: "string",
    }),

    defineField({
      name: "location",
      title: "Lokacija",
      type: "string",
    }),

    defineField({
      name: "size",
      title: "Kvadratura",
      type: "string",
    }),

    defineField({
      name: "mainImage",
      title: "Glavna slika",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "gallery",
      title: "Galerija slika",
      type: "array",
      of: [{ type: "image" }],
    }),

    defineField({
      name: "description",
      title: "Opis",
      type: "text",
    }),

    defineField({
      name: "features",
      title: "Karakteristike",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});