'use client'

import { useState } from 'react'

export default function AdminDashboard() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [registrations, setRegistrations] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/admin/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setIsAuthenticated(true)
        setRegistrations(data.data || [])
      } else {
        setError(data.message || 'Incorrect password')
      }
    } catch (err) {
      console.error(err)
      setError('API endpoint not found or server error. Check folder path app/api/admin/verify/route.js')
    } finally {
      setLoading(false)
    }
  }

  const filteredRegistrations = registrations.filter(user => 
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.skill?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.state?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#030712] text-white flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
          <h2 className="text-2xl font-bold text-center mb-2">Admin Portal</h2>
          <p className="text-slate-400 text-xs text-center mb-6">Enter system key to access global registrants.</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs uppercase font-semibold text-slate-300 mb-2">Access Password</label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            {error && (
              <div className="p-3 bg-red-950/60 border border-red-800/80 rounded-xl text-red-300 text-xs font-medium leading-relaxed">
                {error}
              </div>
            )}

            <button 
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-900 font-semibold rounded-xl text-sm transition"
            >
              {loading ? 'Verifying...' : 'Unlock Dashboard'}
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#030712] text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold">Moon Republic Admin</h1>
            <p className="text-slate-400 text-sm">Managing global member registrations in real-time.</p>
          </div>
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs rounded-lg text-slate-300 self-start md:self-auto"
          >
            Lock Dashboard
          </button>
        </div>

        <div className="mb-6">
          <input 
            type="text"
            placeholder="Search by name, skill, or country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-x-auto shadow-xl">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-950 text-xs uppercase text-slate-400 border-b border-slate-800">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Selected Skill</th>
                <th className="p-4">State</th>
                <th className="p-4">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredRegistrations.map((user) => (
                <tr key={user.id} className="hover:bg-slate-800/40 transition">
                  <td className="p-4 font-semibold text-white">{user.name}</td>
                  <td className="p-4 text-slate-400">{user.email}</td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 bg-indigo-950 text-indigo-300 border border-indigo-800/50 rounded-md text-xs font-medium">
                      {user.skill}
                    </span>
                  </td>
                  <td className="p-4">{user.state}</td>
                  <td className="p-4 text-slate-500 text-xs">{user.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}