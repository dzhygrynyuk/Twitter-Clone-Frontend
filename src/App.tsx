import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SignIn from './pages/SingIn';
import Home from './pages/Home';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </div>
    );
}

export default App;
