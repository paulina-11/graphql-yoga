import Note from '../../models/Note'

const Query = {
  async getNotes() {
    const notes = await Note.find();
    return notes;
  },
  async getNoteById(_, { _id }) {
    return await Note.findById(_id);
  },
};

export default Query