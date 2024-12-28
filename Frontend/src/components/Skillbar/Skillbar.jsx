import React from 'react';
import PropTypes from 'prop-types';
import './SkillBar.css'; // Create this CSS file for styling

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="skill-bar">
      <div className="skill-bar__info">
        <span className="skill-bar__name">{skill}</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  skill: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default SkillBar;
