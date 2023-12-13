// basic enum syntax
/// can be referred to just like an object - eg, MatchResult.HomeWin
/// can be used as a typeguard in other modules
export enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}