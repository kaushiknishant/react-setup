import React from 'react';
import "App.css";
import thumb from './logo.png'

export const App = () => {
    return (
        <div>
            <h1 className='hello'>Hello react</h1>
            <img src={thumb} alt="" />
        </div>
    )
}
export default App;
