import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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
import Cleanup from '@/pages/Cleanup';
import RefUpdate from '@/pages/RefUpdate';
import AxiosTest from '@/pages/AxiosTest';
import VoiceToText from '@/pages/VoiceToText';
import AudioRecorder from '@/components/AudioRecorder';
import PathParam from '@/pages/PathParam';
import Caching from '@/pages/Caching';
import Player from '@/pages/Player';
import DragAndDrop from '@/pages/DragAndDrop';
import ToastUiEditor from '@/pages/ToastUiEditor';
import SassTest from '@/pages/SassTest';
import QuillPage from '@/pages/Quill';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* TODO: 경로 상수로 분리해서 관리하기 */}
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
        <Route path="/cleanup" element={<Cleanup />} />
        <Route path="/ref-update" element={<RefUpdate />} />
        <Route path="/axios-test" element={<AxiosTest />} />
        <Route path="/speech-to-text" element={<VoiceToText />} />
        <Route path="/audio-recorder" element={<AudioRecorder />} />
        <Route path="/path-param" element={<PathParam />} />
        <Route path="/path-param/:id" element={<PathParam />} />
        <Route path="/caching" element={<Caching />} />
        <Route path="/player" element={<Player />} />
        <Route path="/drag-and-drop" element={<DragAndDrop />} />
        <Route path="/toast-ui-editor" element={<ToastUiEditor />} />
        <Route path="/sass-test" element={<SassTest />} />
        <Route path="/editor-quill" element={<QuillPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
