import { client } from "./client";

export async function getStanovi() {
  return await client.fetch(`
    *[_type == "stan"]{
      title,
      slug,
      price,
      fullprice,
      location,
      size,
      mainImage,
      gallery,
      description,
    } | order(_createdAt desc)
  `);
}

export async function getStan(slug: string) {
  const query = `*[_type == "stan" && slug.current == $slug][0]{
    title,
    price,
    fullprice,
    size,
    locationName,
    location {
      lat,
      lng
    },
    description,
    "mainImage": mainImage.asset->url,
    "gallery": gallery[].asset->url,
  }`;
  return await client.fetch(query, { slug });
}

export async function getIzrada() {
  return await client.fetch(`
    *[_type == "project" && status == "construction"] | order(_createdAt desc){
      title,
      slug,
      location,
      description,
      mainImage,
      "stanovi": stanovi[]->{
        title,
        slug,
        price,
        size,
        location,
        mainImage
      }
    }
  `);
}

export async function getDolazak() {
  return await client.fetch(`
    *[_type == "project" && status == "upcoming"] | order(_createdAt desc){
      title,
      slug,
      location,
      description,
      mainImage
    }
  `);
}

export async function getZavrseni() {
  return await client.fetch(`
    *[_type == "project" && status == "completed"] | order(_createdAt desc){
      title,
      slug,
      location,
      description,
      mainImage,
      "stanovi": stanovi[]->{
        title,
        slug,
        price,
        size,
        location,
        mainImage
      }
    }
  `);
}

export async function getProject(slug: string) {
  return await client.fetch(
    `
    *[_type == "project" && slug.current == $slug][0]{
      title,
      slug,
      locationName,
      location {
        lat,
        lng
      },
      description,

      "mainImage": mainImage.asset->url,
      "gallery": gallery[].asset->url,
      youtubeUrl,

      "stanovi": nekretnine[]->{
        title,
        slug,
        price,
        size,
        location,
        "mainImage": mainImage.asset->url
      }
    }
    `,
    { slug }
  );
}

export async function getGallery(): Promise<string[]> {
  return await client.fetch(`
    array::compact(
      *[_type == "gallery"].gallery[].asset->url
    )
  `);
}