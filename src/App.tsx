import "./App.css";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import OrderExerciseListExecution from "@features/OrderExerciseListExecution";
import OrderExerciseExecution from "@features/RightOrderExerciseExecution";
import {
  EXERCISE_RIGHT_ORDER,
  EXERCISE_RIGHT_ORDER_LIST,
  EXERCISE_WITH_OMISSIONS,
  EXERCISE_WITH_OMISSIONS_2
} from "@const/exercise_with_omissions";
import OmissionExerciseExecution from "@features/OmissionExerciseExecution";
import ExercisePage from "@pages/ExercisePage";

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
      <Router>
        <Routes>
          <Route path="/exercise/*" element={<ExercisePage />} />
        </Routes>
      </Router>
      {/*<OmissionExerciseExecution exercise={EXERCISE_WITH_OMISSIONS} />*/}
      {/*<OrderExerciseExecution exercise={EXERCISE_RIGHT_ORDER} />*/}
    {/*<OrderExerciseListExecution exercises={EXERCISE_RIGHT_ORDER_LIST}/>*/}
      <ReactQueryDevtools initialIsOpen />
    </PersistQueryClientProvider>
  );
}

export default App;
