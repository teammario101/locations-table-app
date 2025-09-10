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

        <ScheduleTreeList />

        <HellowWorld />
        <FindTeamSchedule />

    </React.StrictMode>
);

/* <ScheduleTreeList />*/