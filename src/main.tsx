import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';    
//import ScheduleListing from './ScheduleListing';
import TeamSchedule from './teamSchedule'
import HellowWorld from './Components/HelloWorld/HelloWorld'
import TeamDivStandings from './divisionstandings'

import ScheduleTreeList from './ScheduleTeeList';
import FindTeamSchedule from './Components/FindTeamSchedule/FindTeamSchedule';
const root = createRoot(document.querySelector('my-app')!);
root.render(
    <React.StrictMode>
        <h1>HW</h1>
        <HellowWorld />
        <h1>FTS</h1>
        <FindTeamSchedule />
        <h1>TDS</h1>
        <TeamDivStandings />
        <h1>STL</h1>
        <ScheduleTreeList />
    </React.StrictMode>
);

/* <ScheduleTreeList />*/