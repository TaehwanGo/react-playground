import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '@/pages/About';
import Home from '@/pages/Home';
import StudySWR from '@/pages/StudySWR';
import StudyZustand from '@/pages/StudyZustand';
import FileDownload from '@/pages/FileDownload';
import ReactTablePage from '@/pages/ReactTablePage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/study/swr" element={<StudySWR />} />
        <Route path="/study/zustand" element={<StudyZustand />} />
        <Route path="/files" element={<FileDownload />} />
        <Route path="/table" element={<ReactTablePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
