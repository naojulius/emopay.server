import { ApolloServer } from "apollo-server";
import { EmojiResolver } from "./src/resolvers/emoji.resolver";
import { EmojiTypeDef } from "./src/schema/emoji.schema";

const server = new ApolloServer({
  typeDefs: EmojiTypeDef,
  resolvers: EmojiResolver,
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Emoji GraphQL Server ready at ${url}`);
});
