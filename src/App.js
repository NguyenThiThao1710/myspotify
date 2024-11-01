import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchTracks from './components/SearchTracks';

const App = () => {
   return (
       <Routes>
           <Route path="/" element={<SearchTracks />} />
       </Routes>
   );
};

export default App;
