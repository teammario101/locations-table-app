import React from 'react';
import { createRoot } from 'react-dom/client';
import HelloWorld from  './Components/HelloWorld/HelloWorld'


const root = createRoot(document.querySelector('HelloWorld')!);
root.render(
    <React.StrictMode>


        <HelloWorld></HelloWorld>

    </React.StrictMode>
);

