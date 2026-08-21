'use client'

import { useState } from 'react'

export default function RegisterModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skill: 'Programming',
    state: 'Edo'
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  if (!isOpen) return null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ type: '', text: '' })

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setMessage({ type: 'success', text: 'Registration successful! Welcome aboard.' })
        setFormData({ name: '', email: '', skill: 'Programming', country: 'Nigeria' })
        setTimeout(() => onClose(), 2000)
      } else {
        setMessage({ type: 'error', text: data.message || 'Something went wrong.' })
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to connect to the server.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-md p-6 rounded-2xl relative shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white"
        >
          ✕
        </button>

        <h3 className="text-xl font-bold text-white mb-1">Join Moon Republic</h3>
        <p className="text-xs text-slate-400 mb-6">Select your track and register to get started.</p>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-300 font-medium mb-1">Full Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required 
              placeholder="Enter your full name" 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-indigo-500" 
            />
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
              placeholder="yourname@gmail.com" 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-indigo-500" 
            />
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">Skill Track</label>
            <select 
              name="skill"
              value={formData.skill}
              onChange={handleChange}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-indigo-500"
            >
              <option value="Programming">Programming</option>
              <option value="Ghostwriting">Ghostwriting</option>
              <option value="Forex Trading">Forex Trading</option>
              <option value="AI & Virtual Assistant">AI & Virtual Assistant</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">Country</label>
            <input 
              type="text" 
              name="state"
              value={formData.state}
              onChange={handleChange}
              required 
              placeholder="e.g. Nigeria" 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-indigo-500" 
            />
          </div>

          {message.text && (
            <p className={`p-2.5 rounded-lg text-xs font-medium ${message.type === 'success' ? 'bg-emerald-950/60 border border-emerald-800 text-emerald-300' : 'bg-red-950/60 border border-red-800 text-red-300'}`}>
              {message.text}
            </p>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-900 text-white font-semibold rounded-xl transition"
          >
            {loading ? 'Submitting...' : 'Complete Registration'}
          </button>
        </form>
      </div>
    </div>
  )
}