import { Footer } from "@/components/Footer";
import { MenuNav } from "@/components/MenuNav";
import { SectionHero } from "./SectionHero";
import { SectionForm } from "./styles";


export const Form = () => {
    return(
        <SectionForm>
            <MenuNav />
            <SectionHero />
            <Footer />
        </SectionForm>
    )
}