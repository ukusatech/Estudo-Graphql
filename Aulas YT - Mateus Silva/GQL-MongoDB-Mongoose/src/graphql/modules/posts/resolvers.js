import Post from '../../../models/Post';

export default {
    Query: {
    posts: () => Post.find(),
    post: (_, { id }) => Post.findById(id),

    },
    Mutation: {
        createPost: (_, { data }) => Post.create(data),        
        updatePost: (_, { id, data}) => Post.findOneAndUpdate(id,data, {new: true}),// flag new: true, retorna os dados depois de atualizar
        deletePost: async(_, { id }) => !!(await Post.findOneAndDelete(id)), // !! força que o retorno da função sempre será boolean
        
    },
};