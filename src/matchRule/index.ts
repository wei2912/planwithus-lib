import { Info, INFO_PROPERTIES } from "../info";

type Pattern = string;

const MATCH_RULE_PROPERTIES = ["and", "or", "exclude", ...INFO_PROPERTIES];

type PatternMatchRule = Pattern | ({ [pattern: string]: null } & Partial<Info>);
type AndMatchRule = { and: MatchRule[] };
type OrMatchRule = { or: MatchRule[] };
type ExcludeMatchRule = { exclude: MatchRule };

type MatchRule =
  | PatternMatchRule
  | AndMatchRule
  | OrMatchRule
  | ExcludeMatchRule;

export type { Pattern, MatchRule };
export { MATCH_RULE_PROPERTIES };
