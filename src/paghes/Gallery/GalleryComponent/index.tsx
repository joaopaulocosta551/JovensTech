import {GridGallery, DivBigImg, DivSmallImg1, DivSmallImg2} from './style';
import {useState} from 'react';
import Pessoas from '@/assets/imgDecoration/pessoas.png';



interface IProps{
    direction: boolean;
}

export const GallaryComponent = ({direction}: IProps) => {
    
    return(
      <GridGallery direction={direction}>
        <DivBigImg><img style={{width:"100%"}} src={Pessoas} alt="um grupo de pessoas usando o cumputador" /></DivBigImg>
        <DivSmallImg1><img style={{width:"100%"}} src={Pessoas} alt="um grupo de pessoas usando o cumputador" /></DivSmallImg1>
        <DivSmallImg2><img style={{width:"100%"}} src={Pessoas} alt="um grupo de pessoas usando o cumputador" /></DivSmallImg2>
      </GridGallery>
    )
}