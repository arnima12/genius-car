import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';

function App() {

  return (
    <div className="container mx-auto px-4 sm:px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
