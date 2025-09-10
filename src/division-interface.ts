import { FilterDescriptor, SortDescriptor } from "@progress/kendo-data-query";

export interface ScheduleItem {
    id: number | null;
    Type?: any | null;
    RecordId: number | null;
    ParentId?: any | null;
    ParentItem?: ScheduleParentItem | null;
    DisplayValue?: any | null;
    SortOrder?: any | null;
    IsAssociatedOrganization?: boolean | null;
    expanded: boolean | true;
    checked?: boolean | null;
    selected?: boolean | null;
    link: string | null;
}



export interface Season {
    id?: number | null;
    Type?: any | null;
    RecordId: number | null;
    ParentId?: any | null;
    ParentItem?: ScheduleItem | null;
    Divisions?: League[] | null;
    DisplayValue?: any | null;
    SortOrder?: any | null;
    IsAssociatedOrganization?: boolean | null;
    expanded: boolean | true;
    checked?: boolean | null;
    selected?: boolean | null;
    link: string | null;
}

export interface League {
    id: number | null;
    Type?: any | null;
    RecordId: number | null;
    ParentId?: any | null;
    ParentItem?: ScheduleItem | null;
    Divisions?: Division[] | null;
    DisplayValue?: any | null;
    SortOrder?: any | null;
    IsAssociatedOrganization?: boolean | null;
    expanded: boolean | true;
    checked?: boolean | null;
    selected?: boolean | null;
    link: string | null;
}

export interface Division {
    id: number | null;
    Type?: any | null;
    RecordId: number | null;
    ParentId?: any | null;
    Divisions?: Team[] | null;
    ParentItem?: ScheduleItem | null;
    DisplayValue?: any | null;
    SortOrder?: any | null;
    IsAssociatedOrganization?: boolean | null;
    expanded: boolean | true;
    checked?: boolean | null;
    selected?: boolean | null;
    link: string | null;
}


export interface Team {
    id: number | null;
    Type?: any | null;
    RecordId: number | null;
    ParentId?: any | null;
    ParentItem?: ScheduleItem | null;
    DisplayValue?: any | null;
    SortOrder?: any | null;
    IsAssociatedOrganization?: boolean | null;
    expanded: boolean | true;
    checked?: boolean | null;
    selected?: boolean | null;
    link: string | null;
}

export interface ScheduleParentItem {
    id: number | null;
    Type?: any | null;
    RecordId: number | null;
    ParentId?: any | null;
    ParentItem?: ScheduleItem | null;
    DisplayValue?: any | null;
    SortOrder?: any | null;
    IsAssociatedOrganization?: boolean | null;
    expanded: boolean | true;
    checked?: boolean | null;
    selected?: boolean | null;
}


export interface DataState {
    sort: SortDescriptor[],
    filter: FilterDescriptor[]
}
