import { Contact } from "@/components/Contact";
import { PageMain } from "@/components/PageMain";
import { routes } from "@/lib/routes";
import { CONTACT_DESCRIPTION, CONTACT_TITLE, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: CONTACT_TITLE,
  description: CONTACT_DESCRIPTION,
  path: routes.contact,
});

export default function ContactPage() {
  return (
    <PageMain>
      <Contact />
    </PageMain>
  );
}
