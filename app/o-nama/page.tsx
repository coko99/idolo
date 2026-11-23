import { About } from "@/components/About";
import { PageMain } from "@/components/PageMain";
import { WhyIdolo } from "@/components/WhyIdolo";
import { routes } from "@/lib/routes";
import { ABOUT_DESCRIPTION, ABOUT_TITLE, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: ABOUT_TITLE,
  description: ABOUT_DESCRIPTION,
  path: routes.about,
});

export default function AboutPage() {
  return (
    <PageMain>
      <About />
      <WhyIdolo />
    </PageMain>
  );
}
