import Carousel from "@/src/components/carousel";
import Capacity from "@/src/components/capacity";
import { CompanyIntroOne, CompanyIntroTwo, CompanyIntroThree } from "@/src/components/companyIntro";
import Services from "@/src/components/service";
import Process from "@/src/components/process";
import Meals from "@/src/components/meal";
import Projects from "@/src/components/project"
import Partners from "@/src/components/partner"
import News from "@/src/components/news"

export default function Page() {
  return (
    <>
      <Carousel />
      <Capacity />
      <CompanyIntroOne />
      <Services />
      <Process />
      <Meals />
      <CompanyIntroTwo />
      <Projects />
      <Partners />
      <News />
      <CompanyIntroThree />
    </>
  );
}