import React, { useState } from 'react';

import {
    TreeView,
    TreeViewExpandChangeEvent,
    TreeViewCheckChangeEvent,
    TreeViewItemClickEvent,
    TreeViewCheckDescriptor,
    TreeViewOperationDescriptor,
    TreeViewCheckChangeSettings,
    processTreeViewItems,
    handleTreeViewCheckChange
} from '@progress/kendo-react-treeview';

import Divisions from './divisions';


interface ScheduleItem {
    Type?: any;
    RecordId?: any;
    ParentId?: any;
    ParentItem?: any;
    DisplayValue?: any;
    SortOrder?: any;
    IsAssociatedOrganization?: boolean;
    expanded?: boolean;
    checked?: boolean;
    selected?: boolean;
}

/*

interface ParentItem {
    Type: any;
    RecordId: number;
    ParentId: number;
    ParentItem: ParentItem;
    DisplayValue: any;
    SortOrder: number;
    IsAssociatedOrganization: boolean;
}
*/




type TreeViewDataItem = {
    text: string;
    expanded?: boolean;
    checked?: boolean;
    selected?: boolean;
    items?: TreeViewDataItem[];
};


const tree: TreeViewDataItem[] = [
    {
        text: 'Furniture',
        items: [{ text: 'Tables & Chairs' }, { text: 'Sofas' }, { text: 'Occasional Furniture' }]
    },
    {
        text: 'Decor',
        items: [{ text: 'Bed Linen' }, { text: 'Curtains & Blinds' }, { text: 'Carpets' }]
    }
];



const ScheduleListing = () => {



    const [data, setData] = useState<Array<ScheduleItem>>(Divisions);

    


    //const [data, setData] = useState<Array<ScheduleItem>>(divisions);

    const [check, setCheck] = React.useState<string[] | TreeViewCheckDescriptor>([]);
    const [expand, setExpand] = React.useState<TreeViewOperationDescriptor>({
        ids: ['Item2'],
        idField: 'text'
    });
    const [select, setSelect] = React.useState<string[]>(['']);

    const onItemClick = (event: TreeViewItemClickEvent) => {
        setSelect([event.itemHierarchicalIndex]);
    };

    const onExpandChange = (event: TreeViewExpandChangeEvent) => {
        const ids: string[] = expand.ids ? expand.ids.slice() : [];
        const index: number = ids.indexOf(event.item.text);

        index === -1 ? ids.push(event.item.text) : ids.splice(index, 1);
        setExpand({ ids, idField: 'text' });
    };

    const onCheckChange = (event: TreeViewCheckChangeEvent) => {
        const settings: TreeViewCheckChangeSettings = {
            singleMode: false,
            checkChildren: false,
            checkParents: false
        };
        setCheck(handleTreeViewCheckChange(event, check, tree, settings));
    };

    return (
        <TreeView
            data={processTreeViewItems(tree, {
                select: select,
                check: check,
                expand: expand
            })}
            expandIcons={true}
            onExpandChange={onExpandChange}
            aria-multiselectable={true}
            onItemClick={onItemClick}
            checkboxes={true}
            onCheckChange={onCheckChange}
        />
    );



};

export default ScheduleListing;