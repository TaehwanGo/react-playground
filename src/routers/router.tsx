import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '@/pages/About';
import Home from '@/pages/Home';
import StudySWR from '@/pages/StudySWR';
import StudyZustand from '@/pages/StudyZustand';
import FileDownload from '@/pages/FileDownload';
import ReactTablePage from '@/pages/ReactTablePage';
import UploadPage from '@/pages/Upload';
import NestedRouting from '@/pages/NestedRouting';
import AddComponent from '@/pages/AddComponent';
import ListPerformance from '@/pages/ListPerformance';
import SangtePage from '@/pages/SangtePage';

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
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/nested-routing" element={<NestedRouting />} />
        <Route path="/add-component" element={<AddComponent />} />
        <Route path="/list-performance" element={<ListPerformance />} />
        <Route path="/sangte" element={<SangtePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
