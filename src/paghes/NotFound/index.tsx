import { Footer } from "@/components/Footer";
import { MenuNav } from "@/components/MenuNav";
import { SectionNotFound } from "./style";
import IconNot from '@/assets/IconNotFound.svg'

export const NotFound = () => {
  return (
    <SectionNotFound>
      <MenuNav />
      <div
        style={{
          marginTop: "6.75rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ fontSize: "2.8rem" }}>Página não encontrada!</h1>
        <p
          style={{
            fontSize: "1.438",
            lineHeight: "1.563rem",
            marginTop: "1rem",
          }}
        >
          Ainda bem que o robô Jonas fez o curso do Jovens Tech e já está
          arrumando.
        </p>
      </div>
      <div>
          <img style={{margin: '4rem', marginBottom: '5.875rem'}} src={IconNot} alt="Incone de página não encontrada" />
      </div>
      <Footer/>
    </SectionNotFound>
  );
};
