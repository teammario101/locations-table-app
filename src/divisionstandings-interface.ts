import { FilterDescriptor, SortDescriptor } from "@progress/kendo-data-query";
export interface DivisionStandings {
    CommonOpponentWins: any | null;
    SOSWinningPercentage: any | null;
    CalculatedPoints: any | null;
    CoinToss: any | null;
    SortKey: any | null;
    Id: any | null;
    DivisionId: any | null;
    Place: any | null;
    TeamId: any | null;
    WinCount: any | null;
    LossCount: any | null;
    TieCount: any | null;
    ForfeitCount: any | null;
    GamesBackCount: any | null;
    GamesPlayedCount: any | null;
    WinningPercentage: any | null;
    HtgWinningPercentage: any | null;
    StreakTypeId: any | null;
    StreakCount: any | null;
    TeamName: any | null;
    ContactPrivacyFlag: any | null;
    CoachLastName: any | null;
    CoachFirstName: any | null;
    CoachAreaCode: any | null;
    CoachPhone: any | null;
    CoachEmail: any | null;
    TotalRunsFor: any | null;
    TotalRunsAgainst: any | null;
    AverageRunsFor: any | null;
    AverageRunsAgainst: any | null;
    MaxTotalRunsFor: any | null;
    MaxTotalRunsAgainst: any | null;
    MaxAverageRunsFor: any | null;
    MaxAverageRunsAgainst: any | null;
    AverageRunDifferentialDescription: any | null;
    RunDifferentialDescription: any | null;
    IsExternalTeam: any | null;
    TeamAssociatedOrganization: any | null;
    Points: any | null;
    StreakDescription: any | null;
    PlaceDescription: any | null;
    GamesBackDescription: any | null;
    WinningPercentDescription: any | null;
    CoachDescription: any | null;
    TeamDescription: any | null;
    IncludeContactFirstName: any | null;
    IncludeContactLastName: any | null;
    IncludeContactPhone: any | null;
    IncludeContactEmailLink: any | null;
    ShutoutCount: any | null;
    StandingsPlacementTypeId: any | null;
    StandingsPlacementTypeDescription: any | null;
    TieBreakerId: any | null;
    TieBreakerAnalysis: any | null;
    HthRank: any | null;
    HthConnected: any | null;
    Opponents: any | null;
    PenaltyCount: any | null;
    Pool: DivisionStandingsPool | null;
    PoolDisplayOrder: any | null;
    PoolName: any | null;
    SportsmanshipPoints: any | null;
    SportsmanshipPointsDescription: any | null;
    AverageSportsmanshipPointsDescription: any | null;
    MatchCount: any | null;
    OvertimeLossCount: any | null;
    TeamNameNavigationUrl: any | null;
    StandingsAggregateTypeId: any | null;
    TeamColorHex: any | null;
    TeamSponsor: any | null;
    TeamSponsorNavigationUrl: any | null;
}



export interface DivisionStandingsPool {
        Id: any | null;
        DivisionId: any | null;
        PoolName: any | null;
        DisplayOrder: any | null;
        TeamCount: any | null;
}



export interface DataState {
    sort: SortDescriptor[],
    filter: FilterDescriptor[]
}
