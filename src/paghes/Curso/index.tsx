import { Footer } from "@/components/Footer";
import { MenuNav } from "@/components/MenuNav";
import { SectionTeacher } from "./SecitionTeacher";
import { SectionCardInfo } from "./SectionCardInfo";
import { SectionHero } from "./SectionHero";
import { SectionMoreInfo } from "./SectionMoreInfo";
import { Container } from "./styles";

export const CursoPage = () => {
  return (
    <Container>
      <MenuNav />
      <SectionHero />
      <SectionTeacher />
      <SectionCardInfo />
      <SectionMoreInfo />
      <Footer />
    </Container>
  );
};
