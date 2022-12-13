import Note from '../../models/Note'
import User from '../../models/User'

const Query = {
  async getNotes() {
    const notes = await Note.find();
    return notes;
  },
  async getNoteById(_, { _id }) {
    return await Note.findById(_id);
  },
  async login(_, {email, password}){
    const verifyUser = await User.find({email:email,password:password})
    return verifyUser
  }
};

export default Query