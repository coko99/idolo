import { Gallery } from "@/components/Gallery";
import { PageMain } from "@/components/PageMain";
import { routes } from "@/lib/routes";
import { GALLERY_DESCRIPTION, GALLERY_TITLE, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: GALLERY_TITLE,
  description: GALLERY_DESCRIPTION,
  path: routes.gallery,
});

export default function GalleryPage() {
  return (
    <PageMain>
      <Gallery />
    </PageMain>
  );
}
