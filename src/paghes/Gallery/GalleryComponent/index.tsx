import { GridGallery, DivBigImg, DivSmallImg1, DivSmallImg2 } from "./style";
import { useState } from "react";
import Photo1 from "../../../../public/fotosJovens/jovensTech1.jpg";
import Photo2 from "../../../../public/fotosJovens/jovensTech2.jpg";
import Photo3 from "../../../../public/fotosJovens/jovensTech3.jpg";
import Photo4 from "../../../../public/fotosJovens/jovensTech4.jpg";
import Photo5 from "../../../../public/fotosJovens/jovensTech5.jpg";
import Photo6 from "../../../../public/fotosJovens/jovensTech6.jpg";
import Photo7 from "../../../../public/fotosJovens/jovensTech7.jpg";
import Photo8 from "../../../../public/fotosJovens/jovensTech8.jpg";
import Photo9 from "../../../../public/fotosJovens/jovensTech9.jpg";
import Photo10 from "../../../../public/fotosJovens/jovensTech10.jpg";
import Photo11 from "../../../../public/fotosJovens/jovensTech11.jpg";
import Photo12 from "../../../../public/fotosJovens/jovensTech12.jpg";
import Photo13 from "../../../../public/fotosJovens/jovensTech13.jpg";
import Photo14 from "../../../../public/fotosJovens/jovensTech14.jpg";
import Photo15 from "../../../../public/fotosJovens/jovensTech15.jpg";
import Photo16 from "../../../../public/fotosJovens/jovensTech16.jpg";
import Photo17 from "../../../../public/fotosJovens/jovensTech17.jpg";
import Photo18 from "../../../../public/fotosJovens/jovensTech18.jpg";


interface IProps{
  showRestOfGalleries: boolean;
}
interface IImagesGallery {
  images?: string;
  alt?: string;
};

export const GalleryComponent = ({ showRestOfGalleries }: IProps) => {
  // const [show, setShow] = useState(false);
  
  const galleries = [
    [
      {
        images: Photo1,
        alt: "Alunos reunidos numa sala de aula",
      },
      {
        images: Photo2,
        alt: "Alunos reunidos numa sala de aula",
      },
      {
        images: Photo3,
        alt: "Alunos reunidos numa sala de aula",
      },
    ],
    [
      {
        images: Photo4,
        alt: "Alunos reunidos numa sala de aula",
      },
      {
        images: Photo5,
        alt: "Alunos reunidos numa sala de aula",
      },
      {
        images: Photo6,
        alt: "Teste imagem",
      },
    ],
    [
      {
        images: Photo7,
        alt: "Alunos reunidos numa sala de aula",
      },
      {
        images: Photo13,
        alt: "Alunos reunidos numa sala de aula",
      },
      {
        images: Photo14,
        alt: "Teste imagem",
      },
    ],
    [
      {
        images: Photo10,
        alt: "Alunos reunidos numa sala de aula",
      },
      {
        images: Photo11,
        alt: "Alunos reunidos numa sala de aula",
      },
      {
        images: Photo12,
        alt: "Teste imagem",
      },
    ],
    [
      {
        images: Photo15,
        alt: "Alunos reunidos numa sala de aula",
      },
      {
        images: Photo16,
        alt: "Alunos reunidos numa sala de aula",
      },
      {
        images: Photo17,
        alt: "Teste imagem",
      },
    ],
  ];

  return (
    <>
      {galleries.map((gallery,_position) => {
        return (
          <GridGallery direction={_position%2 == 0} key={`GG_component`} showGallery={_position < 2 || showRestOfGalleries}>
            <DivBigImg>
              <img
                style={{ width: "100%", maxWidth:'38.75rem', maxHeight:'29rem', borderRadius: "16px" }}
                src={gallery[0].images}
                alt={gallery[0].alt}
              />
            </DivBigImg>
            <DivSmallImg1>
              <img
                style={{ width: "100%", maxWidth:'15.75rem', maxHeight:'13.75rem', borderRadius: "16px" }}
                src={gallery[1].images}
                alt={gallery[1].alt}
              />
            </DivSmallImg1>
            <DivSmallImg2>
              <img
                style={{ width: "100%", maxWidth:'15.75rem', maxHeight:'13.75rem', borderRadius: "16px" }}
                src={gallery[2].images}
                alt={gallery[2].alt}
              />
            </DivSmallImg2>
          </GridGallery>
        );
      })}
    </>
  );
};
