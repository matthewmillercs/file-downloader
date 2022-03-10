import React from "react";
import { FileDownloader } from "./components/file-downloader/FileDownloader";
import { mockData } from "./components/file-downloader/configs/mock-data";

function App() {
  return (
    <div>
      <FileDownloader data={mockData}></FileDownloader>
    </div>
  );
}

export default App;
