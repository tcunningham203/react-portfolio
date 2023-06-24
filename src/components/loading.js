import React from 'react';

function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-blue-500 flex items-center justify-center z-50">
      <div className="spinner animate-spinner"></div>
    </div>
  );
}

export default Loading;