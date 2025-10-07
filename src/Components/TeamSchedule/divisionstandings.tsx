import React, { useState } from 'react';
import { Grid, GridColumn as Column, GridItemChangeEvent } from '@progress/kendo-react-grid';


import divStand from './divisionstandings-data';
import { DivisionStandings, DataState } from './divisionstandings-interface'

const TeamDivStandings = () => {

    const [data, setData] = useState<Array<DivisionStandings>>(divStand);

    const handleItemChange = (event: GridItemChangeEvent) => {
        const newData = data.map((item) =>
            item.Id === event.dataItem.Id ? { ...item, [event.field!]: event.value } : item
        );
        setData(newData);
    };

    return (
        <Grid
            data={data}
            dataItemKey="Id"
            autoProcessData={true}
            sortable={true}
            pageable={true}
            filterable={false}
            defaultSkip={0}
            defaultTake={10}
            onItemChange={handleItemChange}
            

        >
            <Column field="Id" title="Id" filterable={false} width="75px" className="bg-color-red" />
            <Column field="TeamName" title="TeamName" width="300px" />
            <Column field="WinCount" title="W"  width="200px"></Column>
            <Column field="LossCount" title="LossCount" width="150px" />
            <Column field="GamesBackCount" title="GB" editor="boolean" width="50px" />
            <Column field="GamesPlayedCount" title="GP" editor="boolean" width="50px" />
            <Column field="WinningPercentage" title="PCT" editor="boolean" width="50px" />
            <Column field="StreakCount" title="Streak" editor="boolean" width="50px" />
            <Column field="CoachFirstName" title="Coach" editor="boolean" width="150px" />
            <Column field="CoachLastName" title="Coach" editor="boolean" width="150px" />
        </Grid>
    );

};

export default TeamDivStandings;
