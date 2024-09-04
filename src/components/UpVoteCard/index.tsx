import UpVoteRow from '../UpVoteRow';
import { Wrapper } from './styles';

function UpVote(): JSX.Element {
  return (
    <Wrapper>
      {Array.from({ length: 3 })?.map((_, index) => (
        <UpVoteRow key={`row_index-${index}`} rowIndex={index} />
      ))}
    </Wrapper>
  );
}

export default UpVote;