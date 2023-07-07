import React, {useEffect} from 'react';
import './App.css';
import { AllRoutes } from './routes';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './app/store';
import { getUsers } from './features/profilePage/userSlice';

function App() {
  const {users} = useSelector((store: RootState) => store?.users); 
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUsers());
  }, [])

  return (
    <div className="App text-slate-600">
      <AllRoutes />
    </div>
  );
}

export default App;
