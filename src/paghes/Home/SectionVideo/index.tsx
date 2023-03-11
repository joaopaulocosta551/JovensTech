import { SocialLink, VideoSection } from "./styles";
import { BsInstagram } from 'react-icons/bs'

export const SectionVideo = () => {
  return (
    <>
    <VideoSection>
      <iframe
        width="100%"
        height="100%"
        style={{ borderRadius: "8px" }}
        src="https://www.youtube.com/embed/E7OUJCCfN4I"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
       <SocialLink>
            <BsInstagram />
            <p>@jovenstechpira</p>
        </SocialLink>
    </VideoSection>
    </>
  );
};
