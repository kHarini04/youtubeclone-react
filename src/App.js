import React from 'react';
import './App.css';
import Demo from './Component/Demo';
import Sidebar from './Component/Sidebar';
import Recommend from './Component/Recommend';
import Searchbar from './Component/Searchbar';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="app">
     <Router>
      <Demo/>
        <Routes>
          {/* Route for /search */}
          <Route path="/search/:searchTerm" 
          element={
                <div className='app_layout'>
                <Sidebar/>
                <Searchbar/>
                </div>
          }
          />
          
          {/* Route for / */}
          <Route 
            path="/" 
            element={
              <>
                <div className='app_layout'>
                  <Sidebar />
                  <Recommend />
                </div>
              </>
            } 
          />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
