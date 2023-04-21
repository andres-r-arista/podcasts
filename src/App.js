import { Main } from "./ui/Components/Main/";
import { useFetchPodcasts } from './application/Hooks/useFetchPodcasts';

function App() {
  const { podcasts, isLoading } = useFetchPodcasts();
  return (
    <div className="App">
      {isLoading? 'Loading...': <Main podcasts={podcasts} />}
    </div>
  );
}

export default App;
