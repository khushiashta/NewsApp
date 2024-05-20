import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NewsDetails from './components/NewsDetails';
import NewsProvider from './context/newsContext';

function App() {
  return (
    <div>
      <NewsProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news/:id" element={<NewsDetails />} />
        </Routes>
      </NewsProvider>
    </div>
  );
}

export default App;
