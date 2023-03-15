import { Footer } from "@/components/Footer";
import { MenuNav } from "@/components/MenuNav";
import { SectionForms } from "./SectionForms";
import { SectionForm } from "./styles";


export const Form = () => {
    return(
        <SectionForm>
            <MenuNav />
            <SectionForms />
            <Footer />
        </SectionForm>
    )
}