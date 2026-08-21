import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import Registrant from '@/models/Registrant'

export async function POST(req) {
  try {
    const { password } = await req.json()

    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ success: false, message: 'Incorrect password' }, { status: 401 })
    }

    await connectDB()
    const realData = await Registrant.find().sort({ createdAt: -1 })

    return NextResponse.json({
      success: true,
      data: realData.map(item => ({
        id: item._id.toString(),
        name: item.name,
        email: item.email,
        skill: item.skill,
        state: item.state || 'Lagos',
        date: new Date(item.createdAt).toLocaleDateString()
      }))
    })
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 })
  }
}