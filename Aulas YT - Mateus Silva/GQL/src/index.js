const { ApolloServer, gql} = require('apollo-server');

// Toda Request do Graphql é POST
// Toda request requisita o MESMO endpoint (/graphql)

//Query -> Obter Informações Equivalente a GET do REST
//Mutation -> Manipular dados  Equivalente a POST, PUT, PATCH, DELETE do REST
//Scalar Types -> Tipos Primitivos, String, Int Boolea, Float e ID


// type Query e type Mutations, nomenclaturas reservadas do Graphql
// Query Hello, retorna uma string

//exclamação para ser required




const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
        email: String!
        active: Boolean!
    }

    type Post {
        _id: ID!
        title: String!
        content: String!
        author: User!
    }
    
    type Query {
       hello: String 
       users: [User!]!
       ##função passando e-mail e retorno do tipo Objeto User não nulo
       getUserByEmail(email: String!): User!
    }

    type Mutation {
        ##função passando nome e e-mail e retorno do tipo Objeto User não nulo
        createUser(name: String!, email: String!): User!
    }
`;

    
 // Mapeamento de 1 pra 1 dos typeDefs para os resolvers
 const users = [
    {_id: String(Math.random()), name: 'Ukusa Tech 1', email: 'ukusa@tech.net', active: true},
    {_id: String(Math.random()), name: 'Ukusa Tech 2', email: 'ukusa2@tech.net', active: false},
    {_id: String(Math.random()), name: 'Ukusa Tech 3', email: 'ukusa3@tech.net', active: true},
];
const resolvers = {
    Query: {
        hello: () => 'Hello World Ukusa.Tech teste hello',
        users: () => users,
        getUserByEmail: (_,args) =>{
            return users.find((user) => user.email === args.email);
        },

    },
    Mutation: {
        createUser: (_,args) =>{
            const newUser = {
                _id: String(Math.random()),
                name: args.name,
                email: args.email,
                active: true,
            };

            users.push(newUser);
            return newUser
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers,playground: true});

server.listen().then(({ url }) => console.log(`🔥 Server started at ${url}`));