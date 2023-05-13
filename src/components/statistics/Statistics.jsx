import PropTypes from 'prop-types';
import React from 'react';
import {
  StatisticsSection,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

function Statistics({ title, stats }) {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} label={label}>
            <Label>{label}</Label>
            <Percentage>{`${percentage}%`}</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
}

const validLabels = ['.docx', '.pdf', '.mp3', '.psd'];

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.oneOf(validLabels).isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
