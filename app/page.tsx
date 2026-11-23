import { GoogleReviews } from "@/components/GoogleReviews";
import { Hero } from "@/components/Hero";
import { HomeExperience } from "@/components/HomeExperience";
import { MealRecommend } from "@/components/MealRecommend";
import { TopPicks } from "@/components/TopPicks";

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
