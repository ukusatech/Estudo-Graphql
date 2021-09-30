import User from '../../../models/User';

export default {
    Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id),

    },
    Mutation: {
        createUser: (_, { data }) => User.create(data),        
        updateUser: (_, { id, data}) => User.findOneAndUpdate(id,data, {new: true}),// flag new: true, retorna os dados depois de atualizar
        deleteUser: async(_, { id }) => !!(await User.findOneAndDelete(id)), // !! força que o retorno da função sempre será boolean
        
    },
};