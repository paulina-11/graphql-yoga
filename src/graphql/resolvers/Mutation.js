import Note from "../../models/Note";

const Mutation = {
  async createNote(_, { input }) {
    return await Note.create(input);
  },
  async updateNote(_, { input, _id }) {
    return await Note.findByIdAndUpdate(_id, input, { new: true });
  },
  async removeNoteById(_, { _id }) {
    const note = await Note.findByIdAndRemove(_id);
    return await Note.find();
  },
};

export default Mutation;
