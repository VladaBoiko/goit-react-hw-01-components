import PropTypes from 'prop-types';
import {
  Statistics,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
  Box,
} from './Statistic.styled';
export const StatCard = ({ title, stats }) => {
  return (
    <Box>
      {title && <Title>{title}</Title>}
      <Statistics>
        <StatList>
          {stats.map(stat => {
            return (
              <Item key={stat.id}>
                <Label>{stat.label}</Label>
                <Percentage>{stat.percentage}</Percentage>
              </Item>
            );
          })}{' '}
        </StatList>
      </Statistics>
    </Box>
  );
};
StatCard.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
