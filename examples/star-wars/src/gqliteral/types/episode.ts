import { GQLiteralEnum } from "gqliteral";

/**
 * Note: this could also be:
 *
 * GQLiteralEnum("Episode", {
 *   NEWHOPE: 4,
 *   EMPIRE: 5,
 *   JEDI: 6
 * })
 *
 * if we chose to omit the descriptions
 */
export const Episode = GQLiteralEnum("Episode", (t) => {
  t.description("One of the films in the Star Wars Trilogy");
  t.member("NEWHOPE", { value: 4, description: "Released in 1977." });
  t.member("EMPIRE", { value: 5, description: "Released in 1980." });
  t.member("JEDI", { value: 6, description: "Released in 1983" });
});

export const MoreEpisodes = GQLiteralEnum("MoreEpisodes", (t) => {
  t.mix("Episode");
  t.members(["OTHER"]);
});