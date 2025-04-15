import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', position:'absulute', bottom:0, width:'100%', left:0, padding:10}}>
      <p>&copy; 2024 My Coffee Shop Website. All Rights Reserved.</p>
      <p>Connect with me on <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></p>
    </footer>
  );
};

export default Footer;