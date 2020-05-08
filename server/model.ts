import * as mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    nickName: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Contacts', ContactSchema);