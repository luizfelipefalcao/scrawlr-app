import { useState } from 'react';

import plusBtn from '../../assets/plus.svg'
import arrowUp from '../../assets/arrow-up.svg'
import Button from '../primitives/Button';
import Icon from '../primitives/Icon';

import { Wrapper, RowWrapper, RectangleRow } from './styles';

type UpVoteRowProps = {
  rowIndex: number,
}

type RowContainerProps = {
  setCurrentRow: (row: number) => void,
  upVoteLengthPerRow: number,
  currentRow: number,
} & UpVoteRowProps

function RowContainer({ rowIndex, setCurrentRow, upVoteLengthPerRow = 0, currentRow }: RowContainerProps) {
  return (
    <RowWrapper>
      <RectangleRow onClick={() => setCurrentRow(rowIndex)}>
        {Array.from({ length: upVoteLengthPerRow })?.map(() => (
          <Button rounded selected={currentRow === rowIndex} key={`row-${Math.random().toFixed(6)}`} onPressButton={() => alert(rowIndex)}>
            <Icon iconName={arrowUp} selected={currentRow === rowIndex} />
          </Button>
        ))}
      </RectangleRow>
      <Button rounded onPressButton={() => alert('xxxx')}>
        <Icon iconName={plusBtn} />
      </Button>
    </RowWrapper>
  )
};

function UpVoteRow({ rowIndex }: UpVoteRowProps): JSX.Element {
  const [currentRow, updateCurrentRow] = useState<number>(-1);

  return (
    <Wrapper>
      <RowContainer currentRow={currentRow} rowIndex={rowIndex} setCurrentRow={updateCurrentRow} upVoteLengthPerRow={3} />
    </Wrapper>
  )
}

export default UpVoteRow;