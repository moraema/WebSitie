import React from 'react';

function FooterSection({ title, content }) {
  return (
    <div className="footer-section">
      <h2>{title}</h2>
      {content.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}

export default FooterSection;
