const { ApolloServer, gql} = require('apollo-server');

// Toda Request do Graphql é POST
// Toda request requisita o MESMO endpoint (/graphql)

//Query -> Obter Informações Equivalente a GET do REST
//Mutation -> Manipular dados  Equivalente a POST, PUT, PATCH, DELETE do REST
//Scalar Types -> Tipos Primitivos, String, Int Boolea, Float e ID


// type Query e type Mutations, nomenclaturas reservadas do Graphql
// Query Hello, retorna uma string
const typeDefs = gql`
    type Query {
       hello: String 
    }
`;
    
 // Mapeamento de 1 pra 1 dos typeDefs para os resolvers
const resolvers = {
    Query: {
        hello: () => 'Hello World Ukusa.Tech teste hello'
    }
};

const server = new ApolloServer({ typeDefs, resolvers});
server.listen().then(({ url }) => console.log(`🔥 Server started at ${url}`));