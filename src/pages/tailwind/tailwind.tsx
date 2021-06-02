import React from 'react';

const TailWindPage = () => (
  <div className="container">
    <p>This is a container inside</p>
    <h2>Dark mode</h2>
    <div className="bg-white dark:bg-gray-800">
      <h1 className="text-gray-900 dark:text-white">Dark mode is here!</h1>
      <p className="text-gray-600 dark:text-gray-300">
        Lorem ipsum...
      </p>
    </div>
  </div>

);

export default TailWindPage;
