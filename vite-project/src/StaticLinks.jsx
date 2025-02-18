import React from 'react';

const StaticLinks = ({ onLinkClick }) => {
  return (
    <div className="static-links">
      <ul>
        <li onClick={() => onLinkClick('Content 1')}>Link 1</li>
        <li onClick={() => onLinkClick('Content 2')}>Link 2</li>
        <li onClick={() => onLinkClick('Content 3')}>Link 3</li>
      </ul>
    </div>
  );
};

export default StaticLinks;
