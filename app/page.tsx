import { GoogleReviews } from "@/components/GoogleReviews";
import { Hero } from "@/components/Hero";
import { HomeExperience } from "@/components/HomeExperience";
import { MealRecommend } from "@/components/MealRecommend";
import { TopPicks } from "@/components/TopPicks";
import { HOME_DESCRIPTION, HOME_TITLE, pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata = pageMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: routes.home,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <MealRecommend />
      <TopPicks />
      <HomeExperience />
      <GoogleReviews />
    </>
  );
}
