import { styled } from 'styled-components';

import { colors } from '../../../theme';
import { TButtonProps } from '.';

export const NativeButton = styled.button<TButtonProps>`
  padding: 10px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ rounded }) => (rounded ? 15 : 0)}px;
  border: none;
  background-color: ${({ selected }) => (selected ? colors.lightBlue : colors.whiteX)};
`;

