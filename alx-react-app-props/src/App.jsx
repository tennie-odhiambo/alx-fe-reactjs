import WelcomeMessage from './components/WelcomeMessage';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import UserContext from './components/UserContext';
import ProfilePage from './components/ProfilePage';
import UserDetails from './components/UserDetails';


function App() {
  const userData = { name: 'Jane Doe', email: 'jane.doe@gmail.com'};
  

  return (
    <>
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>

      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="Bob" age="30" bio="Enjoys cooking and traveling" />
      <UserProfile name="Charlie" age="22" bio="Avid reader and music lover" />

     
      
    </>
  )
}

export default App
