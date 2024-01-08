import PropTypes from 'prop-types';
import {
  BtnContainer,
  Button,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onClick, options }) => {
  return (
    <BtnContainer>
      {options.map(elem => (
        <Button
          type="button"
          onClick={() => onClick(elem)}
          key={elem}
        >
          {elem}
        </Button>
      ))}
    </BtnContainer>
  );
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
