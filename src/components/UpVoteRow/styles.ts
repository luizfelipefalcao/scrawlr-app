import { styled } from 'styled-components';
import { colors } from '../../theme';

export const Wrapper = styled.div``;

export const RowWrapper = styled.div`
  padding: 24px;
  gap: 0 25px;
  display: flex;
  align-items: center;
`;

export const RectangleRow = styled.div`
  padding: 15px;
  height: auto;
  width: 90%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid ${colors.grey};
  border-radius: 15px;
  flex-wrap: wrap;
`;