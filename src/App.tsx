import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppContext } from "./context/contextApi";
import Feed from './components/Feed.tsx'
import Header from './components/Header.tsx'
import SearchResult from './components/SearchResult.tsx'
import VideoDetails from "./components/VideoDetails.tsx";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" element={<Feed/>} />
            <Route path="/searchResult/:searchQuery" element={<SearchResult/>} />
            <Route path="/video/:id" element={<VideoDetails/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
