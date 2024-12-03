import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function TimerComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [count]);

    return (
        <div>
            <h1 className='flex justify-center pt-10 font-bold text-6xl'>Timer  </h1>
            <p className='flex justify-center text-5xl font-semibold pt-1'>{count}</p>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TimerComponent />);

export default TimerComponent;
