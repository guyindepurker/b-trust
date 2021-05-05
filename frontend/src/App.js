import React from 'react';
import AppHeader from './cmps/AppHeader/AppHeader';
import SideBar from './cmps/SideBar/SideBar';
import BtrustData from './pages/BtrustData/BtrustData';
function App() {
  return (
    <div className="App">
      <AppHeader />
      <SideBar />
      <main className="main-content">
        <BtrustData />
      </main>
    </div>
  );
}

export default App;
