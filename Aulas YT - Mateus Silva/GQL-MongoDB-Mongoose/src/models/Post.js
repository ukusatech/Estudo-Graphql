import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    email: String,
      
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Referencia do model usuário para cada post ele criar um ObjectId referenciando o usuário
        required: true,
    },
});

export default mongoose.model('Post', Schema);