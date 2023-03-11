import { Footer } from "@/components/Footer";
import { MenuNav } from "@/components/MenuNav";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Title } from "@/components/Typography/Title";
import { GallaryComponent } from "./GalleryComponent";
import { SectionGallery } from "./styles";

export const Gallery = () => {
  return (
    <SectionGallery>
      <MenuNav />
      <div
        style={{
          marginTop: "7.5rem",
          maxWidth: "25.75rem",
          textAlign: "center",
        }}
      >
        <Title value={" "} children={"Acompanhe o que está rolando"} />
        <div style={{ marginTop: "1.5rem" }}>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.722)",
              lineHeight: "1.5rem",
              fontSize: "15px",
              marginBottom: "19rem",
            }}
          >
            Nossa primeira edição está cada vez melhor, se liga!
          </p>
        </div>
      </div>
      <GallaryComponent direction={true}  />
      <GallaryComponent direction={false}  />
      <Footer />
    </SectionGallery>
  );
};
