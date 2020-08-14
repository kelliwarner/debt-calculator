import React, { useState, useEffect } from 'react';

const App = () => {
  return (
    <div>
      <h1>Debt Calculator</h1>
      <div className="input">
        <div>
          Creditor <input />
        </div>
        <div>
          Current balance <input />
        </div>
        <div>
          Interest rate <input />
        </div>
        <div>
          Monthly payment <input />
        </div>
      </div>
    </div>
  );
};

export default App;
