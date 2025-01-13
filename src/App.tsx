import './App.css'
import {QueryClient} from '@tanstack/react-query'
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client'
import {createSyncStoragePersister} from '@tanstack/query-sync-storage-persister'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ExercisePage from '@pages/ExercisePage'
import Layout from '@components/Layout'
import HomePage from '@pages/HomePage'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // staleTime: 1000 * 60 * 60 * 3,
            gcTime: 1000 * 60 * 60 * 24, // 24 hours
        },
    },
})

const persister = createSyncStoragePersister({
    storage: window.localStorage,
})

function App() {
    return (
        <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="exercise/*" element={<ExercisePage />} />
                    </Route>
                </Routes>
            </Router>
            {/*<OmissionExerciseExecution exercise={EXERCISE_WITH_OMISSIONS} />*/}
            {/*<OrderExerciseExecution exercise={EXERCISE_RIGHT_ORDER} />*/}
            {/*<OrderExerciseListExecution exercises={EXERCISE_RIGHT_ORDER_LIST}/>*/}
            <ReactQueryDevtools initialIsOpen />
        </PersistQueryClientProvider>
    )
}

export default App
