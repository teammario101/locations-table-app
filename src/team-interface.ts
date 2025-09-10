import { FilterDescriptor, SortDescriptor } from "@progress/kendo-data-query";

export interface Team {
    RecordId: number | null,
    ParentId: number | null,
    Type: string | null,
    ParentItem: string | null,
    DisplayValue: string | null,
    SortOrder: string | null,
    IsAssociatedOrganization: boolean
}