import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Main } from "./ui/Components/Main/";
import { useFetchPodcasts } from "./application/Hooks/useFetchPodcasts";
import { Header } from "./ui/Components/Header";
import { Podcast } from "./ui/Components/Podcast";

function App() {
  const { podcasts, isLoadingPodcasts } = useFetchPodcasts();
  return (
    <Router>
      <Header />
      <div className="App">
        {isLoadingPodcasts ? (
          "Loading..."
        ) : (
          <Routes>
            <Route path="/" element={<Main podcasts={podcasts} />} />
            <Route path="/podcast/:podcastId" element={<Podcast />} />
            {/*<Route path="/podcast/:podcastId/episode/:episodeId" element={<Episode />} /> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
