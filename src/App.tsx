import React, {useEffect} from 'react';
import './App.css';
import { AllRoutes } from './routes';
import { useDispatch} from 'react-redux';
import { AppDispatch } from './app/store';
import { getUsers } from './features/profilePage/userSlice';
import { getAllPosts } from './components/post/postSlice';

function App() { 
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getAllPosts());
  }, [])

  return (
    <div className="App text-slate-600">
      <AllRoutes />
    </div>
  );
}

export default App;
