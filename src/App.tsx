import "./App.css";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { exercise_with_omissions } from "./const/exercise_with_omissions";
import OmissionExercise from "./components/features/OmissionExercise";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

function App() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <div>
        <h1>Vite + React</h1>
        <OmissionExercise exercise={exercise_with_omissions} />
      </div>

      <ReactQueryDevtools initialIsOpen />
    </PersistQueryClientProvider>
  );
}

export default App;
