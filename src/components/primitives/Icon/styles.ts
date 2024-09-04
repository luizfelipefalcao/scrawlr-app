import { styled } from 'styled-components';
import { device } from '../../../theme';

export const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const NativeIcon = styled.img`
  height: 35px;
  width: 35px;
  display: block;
  filter: grayscale(1) contrast(100%) brightness(1);

  @media ${device.tablet} { 
    height: 45px;
    width: 45px;
  }
 
  @media ${device.laptop} { 
    height: 50px;
    width: 50px;
  }

  @media ${device.desktop} { 
    height: 60px;
    width: 60px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #253CF2;
  mix-blend-mode: color;
`;

