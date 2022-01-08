import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar.js'
import React, { useState } from 'react'
import Interviews from './Interviews.js'

function App() {
  const [page, setPage] = useState('Applications')

  return (
    <div>
      <ResponsiveAppBar setPage={setPage} />
      {page === 'Applications' ? 
        <div>Apps</div>
      : page === 'Interviews' ? 
        <Interviews />
      : page === 'Growth' ? 
        <div>Growth</div>
      : null}
    </div>
  );
}

export default App;
