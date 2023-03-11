import { Footer } from "@/components/Footer";
import { MenuNav } from "@/components/MenuNav";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Title } from "@/components/Typography/Title";
import { GalleryComponent } from "./GalleryComponent";
import { SectionGallery } from "./styles";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai"
import { useState } from "react";

export const Gallery = () => {

  const [showRest, setShowRest] = useState(false);

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
              marginBottom: "10.25rem",
            }}
          >
            Nossa primeira edição está cada vez melhor, se liga!
          </p>
        </div>
      </div>
      
      <GalleryComponent showRestOfGalleries={showRest} />
      {!showRest && <div
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          width: "6.155rem",
          justifyContent: "space-between",
          marginTop: "4rem",
          marginBottom: "7.5rem",
        }} onClick={() =>{
          setShowRest(true);
        }}
      >
        <p>Ver mais</p>
        <AiOutlineArrowDown />
      </div>}

      {showRest && <div
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          width: "6.8rem",
          justifyContent: "space-between",
          marginTop: "4rem",
          marginBottom: "7.5rem",
        }} onClick={() =>{
          setShowRest(false);
        }}
      >
        <p>Ver menos</p>
        <AiOutlineArrowUp />
      </div>}
      <Footer />
    </SectionGallery>
  );
};
