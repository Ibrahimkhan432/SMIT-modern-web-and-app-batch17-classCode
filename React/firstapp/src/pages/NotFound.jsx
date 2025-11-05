import React from 'react';

const NotFoundPage = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '100px',
    color: '#ff6347',
    margin: '0',
    fontFamily: "'Arial', sans-serif",
  };

  const messageStyle = {
    fontSize: '20px',
    color: '#555',
    margin: '10px 0',
    fontFamily: "'Arial', sans-serif",
  };

  const linkStyle = {
    fontSize: '18px',
    color: '#007bff',
    textDecoration: 'none',
    fontFamily: "'Arial', sans-serif",
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>404</h1>
      <p style={messageStyle}>Oops! The page you're looking for does not exist.</p>
      <a href="/" style={linkStyle} onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')} onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}>
        Go back to Home
      </a>
    </div>
  );
};

export default NotFoundPage;
