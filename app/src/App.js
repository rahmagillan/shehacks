import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar.js'
import React, { useState, useEffect } from 'react'
import Interviews from './Interviews.js'
import Applications from './Applications.js'

function App() {
  const [page, setPage] = useState('Applications')
  const [data, setData] = useState()

  useEffect(() => {
      fetch('http://127.0.0.1:5000/get-data')
          .then(response => response.json())
          .then(data => setData(data));
  }, []) 

  return (
    <div>
      <ResponsiveAppBar setPage={setPage} />
      {page === 'Applications' ? 
        <Applications data={data} />
      : page === 'Interviews' ? 
        <Interviews data={data} />
      : page === 'Growth' ? 
        <div>Growth</div>
      : null}
    </div>
  );
}

export default App;
