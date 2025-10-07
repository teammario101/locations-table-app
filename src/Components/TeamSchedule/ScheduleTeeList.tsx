import * as React from 'react';
import {
    TreeList,
    orderBy,
    filterBy,
    mapTree,
    extendDataItem,
    TreeListColumnProps,
    TreeListTextFilter,
    TreeListNumericFilter,
    TreeListDateFilter,
    TreeListBooleanFilter,
    TreeListExpandChangeEvent,
    TreeListDataStateChangeEvent,
    TreeListCellProps,
    TreeListCell
} from '@progress/kendo-react-treelist';

//import seasons from './division-data';
import seasons from './division-data';
import { Season, DataState } from './division-interface';


const MyCell = (props: TreeListCellProps) => {
    const { dataItem } = props;
    const field = props.field || '';
    const cellData = dataItem[field];
    return (
        <td>
            
            <a href={`https://xyz-league.multiscreensite.com/schedule/${cellData}`} target='_parent'>
                https://xyz-league.multiscreensite.com/schedule/{String(cellData)}
            </a>
        </td>
    );
};



const subItemsField: string = 'Divisions';
const expandField: string = 'expanded';
const columns: TreeListColumnProps[] = [
    { field: 'DisplayValue', title: 'Description', width: '300px', filter: TreeListTextFilter, expandable: true },
    { field: 'ParentId', title: 'Standings and Schedule Link', cell: MyCell },
    { field: 'Expanded', title: 'Expanded' }
];

interface AppState {
    data: Season[];
    dataState: DataState;
    expanded: number[];
}

const ScheduleTreeList = () => {
    const [state, setState] = React.useState<AppState>({
        data: [...seasons],
        dataState: {
            sort: [{ field: 'DisplayValue', dir: 'asc' }],
            filter: []
        },
        expanded: [1, 2, 3]
    });

    const expandAll = () => {
        setData(
            data.map(item => Object.assign({}, item, { expanded: true }))
        );
    }

    const onExpandChange = (e: TreeListExpandChangeEvent) => {
        setState({
            ...state,
            expanded:  e.value ? state.expanded.filter((id) => id !== e.dataItem.id) : [...state.expanded, e.dataItem.id]
        });
    };

    const handleDataStateChange = (event: TreeListDataStateChangeEvent) => {
        setState({
            ...state,
            dataState: event.dataState
        });
    };

    const addExpandField = (dataTree: seasons) => {
        const expanded: number[] = state.expanded;
        return mapTree(dataTree, subItemsField, (item) =>
            extendDataItem(item, subItemsField, {
                [expandField]: expanded.includes(item.id)
            })
        );
    };

    const processData = () => {
        let { data, dataState } = state;
        let filteredData: Season[] = filterBy(data, dataState.filter, subItemsField);
        let sortedData: Season[] = orderBy(filteredData, dataState.sort, subItemsField);
        return addExpandField(sortedData);
    };

    return (
        <TreeList
            style={{ maxHeight: '510px', overflow: 'auto' }}
            expandField={expandField}
            subItemsField={subItemsField}
            onExpandChange={onExpandChange}
            sortable={{ mode: 'multiple' }}
            {...state.dataState}
            data={processData()}
            onDataStateChange={handleDataStateChange}
            columns={columns}
        />
    );
};

export default ScheduleTreeList;