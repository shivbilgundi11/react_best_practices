import FetchingData from './components/Examples/FetchingData';
import ReactQueryEx from './components/Examples/ReactQueryEx';
import ReduxEx from './components/Examples/ReduxEx';
import LocalStorage from './components/Examples/UseLocalStorageEx';
import { UsersListing } from './components/Examples/UsersListing';

export default function App() {
  return (
    <>
      <main className='w-full min-h-screen flex items-center justify-center flex-col gap-5 bg-[#1a1b1e] text-white'>
        <h1 className='text-3xl font-bold underline'>Hello World...!</h1>

        {/* useDebounce custom hook example */}
        <UsersListing />

        {/* useLocalStorage example */}
        <LocalStorage />

        {/* Data Fetching in React */}
        <FetchingData />

        {/* React Query Example */}
        <ReactQueryEx />

        <ReduxEx />
      </main>
    </>
  );
}
