import React from 'react';


function SocialLink({ icon, label, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="social-link">
      {icon}
      {label}
    </a>
  );
}

export default SocialLink;
