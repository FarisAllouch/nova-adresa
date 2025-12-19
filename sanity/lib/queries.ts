import { client } from "./client";

export async function getStanovi() {
  return await client.fetch(`
    *[_type == "stan"]{
      title,
      slug,
      price,
      location,
      size,
      mainImage,
      gallery,
      description,
      features
    } | order(_createdAt desc)
  `);
}

export async function getStan(slug: string) {
  const query = `*[_type == "stan" && slug.current == $slug][0]{
    title,
    price,
    size,
    location,
    description,
    "mainImage": mainImage.asset->url,
    "gallery": gallery[].asset->url,
    features
  }`;

  return await client.fetch(query, { slug });
}