import React from 'react';
import PropTypes from 'prop-types';

const languages = ['en', 'de'];

const Updater = ({ onUpdate }) => (
  <ul>
    {languages.map(language => (
      <li key={language}>
        <button onClick={() => onUpdate(language)}>{language}</button>
      </li>
    ))}
  </ul>
);

Updater.propTypes = {
  onUpdate: PropTypes.func.isRequired,
};

export default Updater;
