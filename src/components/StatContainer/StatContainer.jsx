import PropTypes from 'prop-types';
import { countPositiveFeedbackPercentage } from 'utils';
import {
  Container,
  Item,
  Value,
} from './StatContainer.styled';

export const StatContainer = ({ options }) => {
  const items = Object.entries(options);
  const { good, total } = options;
  return (
    <>
      <Container>
        {items.map(([key, value]) => (
          <Item key={key}>
            {key}
            <Value>{value}</Value>
          </Item>
        ))}
      </Container>
      <Item>
        Positive feedback
        <Value>
          {countPositiveFeedbackPercentage(good, total)}
        </Value>
      </Item>
    </>
  );
};

StatContainer.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
};
