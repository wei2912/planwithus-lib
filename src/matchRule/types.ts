import type { Info } from "../info/types";
import type { Pattern } from "./pattern/types";

type PatternMatchRule = { pattern: Pattern } & Partial<Info>;
type AndMatchRule = { and: MatchRule[] };
type OrMatchRule = { or: MatchRule[] };
type ExcludeMatchRule = { exclude: MatchRule };

type MatchRuleObject =
  | PatternMatchRule
  | AndMatchRule
  | OrMatchRule
  | ExcludeMatchRule;

type MatchRule = Pattern | MatchRuleObject;

export {
  AndMatchRule,
  ExcludeMatchRule,
  MatchRule,
  MatchRuleObject,
  OrMatchRule,
  PatternMatchRule,
};
