import React, { useState } from 'react';
import { GroupDescriptor, toDataSourceRequestString } from '@progress/kendo-data-query';
import { Grid, GridColumn as Column, GridItemChangeEvent, GridCustomCellProps } from '@progress/kendo-react-grid';
import { State } from '@progress/kendo-data-query';

import schedule from './schedule-data';
import { Schedule, DataState, Item } from './schedule-interface'


const initialGroup: GroupDescriptor[] = [
    {
        field: 'WeekNumber'
    }
];


const TeamSchedule = () => {

    const [data, setData] = useState<Array<Item>>(schedule[0].Items);

    const queryString = toDataSourceRequestString(dataState);

    const handleItemChange = (event: GridItemChangeEvent) => {
        const newData = data.map((item) =>
            item.Id === event.dataItem.Id ? { ...item, [event.field!]: event.value } : item
        );
        setData(newData);
    };

    const MyCell = (props: GridCustomCellProps) => {
        const { dataItem } = props;
        const field = props.field || '';
        const cellData = dataItem[field];
        return (
            <td>
                Week {String(cellData)}
            </td>
        );
    };


    const GroupMyHeaderCustomCell = (props: GridCustomCellProps) => <MyCell {...props} />;

    return (
        <Grid
            data={data}
            dataItemKey="Id"
            autoProcessData={true}
            sortable={true}
            pageable={true}
            filterable={false}
            defaultSkip={0}
            defaultTake={50}
            onItemChange={handleItemChange}
            groupable={true}
            defaultGroup={initialGroup}
            cells={{
                group: {
                    groupHeader: GroupMyHeaderCustomCell
                }
            }}

        >
            <Column field="Id" title="Id" filterable={false} className="bg-color-red" />
            <Column field="WeekNumber" title="WeekNumber" filterable={false}  className="bg-color-red" />
            <Column field="ItemDateTime" title="ItemDateTime" />
            <Column field="LeagueName" title="LeagueName" filterable={true} ></Column>
            <Column field="CreatedDate" title="CreatedDate"  />
            <Column field="DivisionName" title="DivisionName" filterable={true}  />
            <Column field="HomeTeamName" title="HomeTeamName" filterable={true}  />
            <Column field="AwayTeamName" title="AwayTeamName" filterable={true}  />
            <Column field="Location" title="Location" editor="boolean"  />
        </Grid>
    );

};

export default TeamSchedule;
