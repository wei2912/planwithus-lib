import type { Pattern } from "./pattern/types";

type PatternMatchRule = { pattern: Pattern; info?: string };
type AndMatchRule = { and: MatchRule[] };
type OrMatchRule = { or: MatchRule[] };
type ExcludeMatchRule = { exclude: MatchRule };

type MatchRuleObject =
  | PatternMatchRule
  | AndMatchRule
  | OrMatchRule
  | ExcludeMatchRule;

type MatchRule = Pattern | MatchRuleObject;

export type {
  AndMatchRule,
  ExcludeMatchRule,
  MatchRule,
  MatchRuleObject,
  OrMatchRule,
  PatternMatchRule,
};
