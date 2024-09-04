import { styled } from 'styled-components';
import { device, colors } from '../../theme';

export const Wrapper = styled.div`
  padding: 10px;
  border: 1px solid ${colors.grey};
  border-radius: 15px;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} { 
    width: 640px;
  }
 
  @media ${device.laptop} { 
    width: 768px;
  }
`;