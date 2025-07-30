import { gql } from "apollo-server";

export const EmojiTypeDef = gql`
  type Emoji {
    name: String!
    emoji: String!
    rarity: String!
    durationHours: Int!
    coinsPerHour: Int!
  }

  type Query {
    emojis: [Emoji!]!
  }
`;