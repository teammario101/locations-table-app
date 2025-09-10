import { FilterDescriptor, SortDescriptor } from "@progress/kendo-data-query";

export interface Schedule {
    Id: number;
    DivisionId: number;
    Items: Item[];
    ScheduleTypeId: number;
    ManualFlag: string | null;
    DeletedFlag: string | null;
    HasCrossDivisionItems: boolean;
    CreatedDate: string | null;
    UpdatedDate: string | null;
    OrganizationId: number;
    LeagueId: number;
    CurrentScheduleId: number;
    ScheduleTemplateId: number;
    ScheduleTypeDescription: string | null;
    DivisionName: string | null;
    DivisionTypeId: number;
    DivisionTypeDescription: string | null;
}


// Location Category Interface
export interface LocationCategory {
    Id: number;
    CategoryName: string | null;
    CreatedByUserId: number;
    CreatedDate: string | null;
    UpdatedByUserId: number;
    UpdatedDate: string | null;
}

// Location Interface
export interface Location {
    Id: number;
    LocationName: string;
    LocationShortName: string;
    StreetAddress: string;
    City: string;
    State: string;
    Zip: string;
    Field: string;
    MoreInfoUrl: string;
    MoreInfoText: string | null;
    CategoryId: number;
    CategoryName: string | null;
    CategoryDisplayOrder: number;
    LocationCategory: LocationCategory;
    AssociatedOrganizationId: number;
    AssociatedOrganizationName: string | null;
    AssociatedOrganizationShortName: string | null;
    AssociatedOrganizations: any | null;
    GameSpacingInMinutes: number;
    FlagFirstGame: boolean;
    FirstGameMessage: string | null;
    FlagLastGame: boolean;
    LastGameMessage: string | null;
    AgeGroups: any | null;
    AgeGroupsDescription: string | null;
    InUse: boolean;
    AssociatedLocationId: number;
    AssociatedLocationOrganizationId: number;
    AssociatedLocationOrganizationName: string | null;
    AssociatedLocationName: string | null;
    AssociatedLocationShortName: string | null;
    AssociatedLocationField: string | null;
    LocationParentId: number;
    IsSubLocation: boolean;
    PMFacilityIdentifier: string | null;
    PMLocationIdentifier: string | null;
    ShowPublic: boolean;
    ShowPublicCalendar: boolean;
    HighlightCondition: boolean;
    ConditionId: number;
    ConditionName: string | null;
    ConditionComment: string | null;
    ConditionFontColor: string | null;
    ConditionBackgroundColor: string | null;
    ShowConditionUpdatedDateTime: boolean;
    ConditionUpdatedDateTime: string | null;
    ConditionValidUntilDateTime: string | null;
    SubscribeTinyUrl: string | null;
    EnableCheckIn: boolean;
    CheckInFormId: number;
    CheckInTinyUrl: string | null;
    LocationDescription: string;
    LocationShort: string;
    OrganizationContactListLocationId: number;
}

// Team Pool Interface
export interface TeamPool {
    Id: number;
    DivisionId: number;
    PoolName: string;
    DisplayOrder: number;
    TeamCount: number;
}

// Associated Organization Interface
export interface AssociatedOrganization {
    Id: number;
    ParentOrganizationId: number;
    ParentOrganizationName: string | null;
    OrganizationId: number;
    OrganizationName: string | null;
    OrganizationShortName: string | null;
    Dependencies: number;
    AutoConfirmAssignment: boolean;
    OfficialAutoRejectDays: number;
    AutoConfirmRequest: boolean;
    MaxRequestsPerDay: number;
    ShowOfficialsAssigned: boolean;
    ShowOfficialsContactInfo: boolean;
    AllowOfficialProfileEdit: boolean;
    AutoPostOfficialScores: boolean;
    PaymentGatewayId: string | null;
    ShareCalendar: boolean;
    ShareWorkflows: boolean;
    EnableOfficialSelfRegistration: boolean;
    OfficialSelfRegistrationCode: string | null;
    SelfRegistrationCopyEmailAddresses: string | null;
    ShowTeamContacts: boolean;
    ShowTeamContactsContactInfo: boolean;
}

// Playoff Interface
export interface Playoff {
    PlayoffStatusId: number;
    PlayoffRound: number;
    PlayoffGame: number;
    PlayoffPlacementType: number;
    PlayoffNumberingScheme: number;
    PlayoffSwapTeams: boolean;
    PlayoffSeedMethodId: number;
    PlayoffStandingsSourceId: number;
    PlayoffStandingsOffset: number;
    PlayoffGameNumber: number;
    PlayoffHomePlaceTeam: number;
    PlayoffHomePlacePool: number;
    PlayoffHomePlacePoolName: string | null;
    PlayoffHomeRound: number;
    PlayoffHomeGame: number;
    PlayoffHomeResultId: number;
    PlayoffHomeGameNumber: number;
    PlayoffAwayPlaceTeam: number;
    PlayoffAwayPlacePool: number;
    PlayoffAwayPlacePoolName: string | null;
    PlayoffAwayRound: number;
    PlayoffAwayGame: number;
    PlayoffAwayResultId: number;
    PlayoffAwayGameNumber: number;
}

// Main Game Interface
export interface Item {
    HomeTeamPool: TeamPool;
    AwayTeamPool: TeamPool;
    SystemGenerated: boolean;
    Id: number;
    ScheduleItemTypeId: number;
    WeekNumber: number;
    HomeTeamId: number;
    AwayTeamId: number;
    HomeTeamNumber: number;
    AwayTeamNumber: number;
    ItemDateTime: string;
    GameSpacingInMinutes: number;
    Comments: string | null;
    OrganizationId: number;
    LeagueId: number;
    LeagueName: string;
    DivisionId: number;
    DivisionName: string;
    HomeTeamName: string;
    LongHomeTeamName: string;
    ShortHomeTeamName: string;
    AwayTeamName: string;
    LongAwayTeamName: string;
    ShortAwayTeamName: string;
    TimeSlotId: number;
    Location: Location;
    VisibleFlag: string;
    StatsVisibleFlag: string | null;
    DispositionId: number;
    DispositionDescription: string;
    Result1Home: number;
    Result1Away: number;
    Result2Home: number;
    Result2Away: number;
    Result3Home: number;
    Result3Away: number;
    Result4Home: number;
    Result4Away: number;
    Result5Home: number;
    Result5Away: number;
    Result6Home: number;
    Result6Away: number;
    Result7Home: number;
    Result7Away: number;
    LockedFlag: string | null;
    InternalComments: string;
    TbdFlag: string;
    HomeIsExternalTeam: boolean;
    AwayIsExternalTeam: boolean;
    HomeAssociatedOrganization: AssociatedOrganization;
    AwayAssociatedOrganization: AssociatedOrganization;
    ScheduleDeletedFlag: string | null;
    Playoff: Playoff;
    AutoCoachScoring: string | null;
    ScheduleTypeId: number;
    OrganizationGameNumber: number;
    ItemEndDateTime: string;
    ItemDateTimeUtc: string;
    ItemEndDateTimeUtc: string;
    AdjustUtc: string;
    IsHomeCrossDivision: boolean;
    IsAwayCrossDivision: boolean;
    IsCrossDivision: boolean;
    CrossDivisionId: number;
    TeamTypeId: number;
    EditMode: boolean;
    ScheduleId: number;
    SubDispositionId: number;
    SubDispositionDescription: string;
    EnableCustomRowColor: boolean;
    CustomRowColor: string | null;
    RescheduleItemId: number;
    RescheduledSinceLastSave: boolean;
    ExcludeFromStandings: boolean;
    HomeSportsmanshipPoints: number;
    AwaySportsmanshipPoints: number;
    ACSCustomFields: any | null;
    UpdatedDate: string | null;
    ItemDateTimeShortDescription: string;
    ItemDateTimeShortTime: string;
    TeamTypeHasOvertime: boolean;
    CalendarBackgroundColorHex: string | null;
    CalendarBorderColorHex: string | null;
    ScoresPerMatch: number;
    AutoCoachScoringFlag: string | null;
    SwapHomeAndAway: boolean;
    EnableSportsmanshipTracking: boolean;
    PlayoffTypeId: number;
    PlayoffSeedMethodId: number;
    PlayoffStandingsSourceId: string | null;
    PlayoffNumberOfTeams: number;
    Playoff2TypeId: number;
    Playoff2SeedMethodId: number;
    Playoff2StandingsSourceId: string | null;
    Playoff2NumberOfTeams: number;
    OfficialItemDateTimeDescription: string;
    OfficialLeagueDivisionDescription: string;
    OfficialHomeAwayTeamDescription: string;
}



export interface DataState {
    sort: SortDescriptor[],
    filter: FilterDescriptor[]
}
