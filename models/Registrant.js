import mongoose from 'mongoose'

const RegistrantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  skill: { type: String, required: true },
  state: { type: String, default: 'Lagos' },
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.models.Registrant || mongoose.model('Registrant', RegistrantSchema)