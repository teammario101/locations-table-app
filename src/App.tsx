import React, { useState } from 'react';
import { Grid, GridColumn as Column, GridItemChangeEvent } from '@progress/kendo-react-grid';

import locations from './location';

interface  LocationCategory{
    Id: number;
    CategoryName?: any;
    CreatedByUserId?: any;
    CreatedDate?: any;
    UpdatedByUserId?: any;
    UpdatedDate?: any;
}

interface Location {
	Id: number;
        LocationName?: any;
        LocationShortName?: any;
        StreetAddress?: any;
        City?: any;
        State?: any;
        Zip?: any;
        Field?: any;
        MoreInfoUrl?: any;
        MoreInfoText?: any;
        CategoryId: number;
        CategoryName: any;
        CategoryDisplayOrder?: any;
        LocationCategory: LocationCategory;
        AssociatedOrganizationId?: any;
        AssociatedOrganizationName?: any;
        AssociatedOrganizationShortName?: any;
        AssociatedOrganizations?: any;
        GameSpacingInMinutes?: any;
        FlagFirstGame?: any;
        FirstGameMessage?: any;
        FlagLastGame?: any;
        LastGameMessage?: any;
        AgeGroups?: any;
        AgeGroupsDescription?: any;
        InUse?: any;
        AssociatedLocationId?: any;
        AssociatedLocationOrganizationId?: any;
        AssociatedLocationOrganizationName?: any;
        AssociatedLocationName?: any;
        AssociatedLocationShortName?: any;
        AssociatedLocationField?: any;
        LocationParentId?: any;
        IsSubLocation?: any;
        PMFacilityIdentifier?: any;
        PMLocationIdentifier?: any;
        ShowPublic?: any;
        ShowPublicCalendar?: any;
        HighlightCondition?: any;
        ConditionId?: any;
        ConditionName?: any;
        ConditionComment?: any;
        ConditionFontColor?: any;
        ConditionBackgroundColor?: any;
        ShowConditionUpdatedDateTime?: any;
        ConditionUpdatedDateTime?: any;
        ConditionValidUntilDateTime?: any;
        SubscribeTinyUrl?: any;
        EnableCheckIn?: any;
        CheckInFormId?: number;
        CheckInTinyUrl?: any;
        LocationDescription?: any;
        LocationShort?: any;
        OrganizationContactListLocationId: number;
}

const App = () => {

    const [data, setData] = useState<Array<Location>>(locations);

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
            filterable={true}
            editable={{ mode: 'incell' }}
            defaultSkip={0}
            defaultTake={10}
            onItemChange={handleItemChange}
        >
            <Column field="Id" title="Id" editable={false} filterable={false} width="75px" className="bg-color-red"  />
            <Column field="LocationName" title="LocationName" editor="text" />
            <Column field="LocationShortName" title="LocationShortName" editable={false} width="200px"></Column>
            <Column title="StreetAddress" editor="numeric" width="150px" />
            <Column field="LocationDescription" title="LocationDescription" editor="boolean" width="150px" />
            <Column field="LocationShort" title="LocationShort" editor="boolean" width="150px" />
        </Grid>
    );

};

export default App;
