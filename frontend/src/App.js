import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StudentsPage from './app/page';

function App() {
  return (
    <Router>
      <Routes>
        {/* Correct usage of the element prop */}
        <Route path="/" element={<StudentsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
