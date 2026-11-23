import { MealRecommend } from "@/components/MealRecommend";
import { MenuSection } from "@/components/MenuSection";
import { PageMain } from "@/components/PageMain";
import { routes } from "@/lib/routes";
import { MENU_DESCRIPTION, MENU_TITLE, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: MENU_TITLE,
  description: MENU_DESCRIPTION,
  path: routes.menu,
});

export default function MenuPage() {
  return (
    <PageMain>
      <MealRecommend />
      <MenuSection />
    </PageMain>
  );
}
