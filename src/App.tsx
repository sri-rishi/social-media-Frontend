import React, {useEffect} from 'react';
import './App.css';
import { AllRoutes } from './routes';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './app/store';
import { followUnFollowUser, getUsers } from './features/profilePage/userSlice';

function App() {
  const {users} = useSelector((store: RootState) => store?.users); 
  const dispatch = useDispatch<AppDispatch>();

  const followingDetails = {
    targetUserId:"6490125024420371dd3fe6dc",
    userId: "64aacc0101ce51a05b88cd7b", 
    isFollowed: false
  }

  useEffect(() => {
    dispatch(getUsers());
    dispatch(followUnFollowUser(followingDetails));
  }, [])

  return (
    <div className="App text-slate-600">
      <AllRoutes />
    </div>
  );
}

export default App;
