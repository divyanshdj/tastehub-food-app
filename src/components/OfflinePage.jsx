import React from 'react';

const OfflinePage = () => {
  return (
    <div className="offline-container">
      <h1 className="offline-title">You are offline</h1>
      <p className="offline-message">
        It looks like you are not connected to the internet. Please check your connection and try again.
      </p>
      <button 
        className="retry-button" 
        onClick={() => window.location.reload()}
      >
        Retry
      </button>
    </div>
  );
};

export default OfflinePage;
