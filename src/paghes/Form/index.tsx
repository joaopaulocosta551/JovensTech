import { Footer } from "@/components/Footer";
import { MenuNav } from "@/components/MenuNav";
import { SectionHero } from "./SectionHero";
import { SectionForm } from "./style";


export const Form = () => {
    return(
        <SectionForm>
            <MenuNav />
            <SectionHero />
            <Footer />
        </SectionForm>
    )
}