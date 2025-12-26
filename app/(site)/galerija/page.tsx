import { getGallery } from "@/sanity/lib/queries";
import Galerija from "@/components/galerija";

export default async function GalerijaSlika() {
  const galerija: string[] = await getGallery();

  return (
    <Galerija galerija={galerija} />
  );
}