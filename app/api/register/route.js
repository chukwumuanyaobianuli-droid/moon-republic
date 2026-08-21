export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import Registrant from '@/models/Registrant'

export async function POST(req) {
  try {
    await connectDB()
    const { name, email, skill, state } = await req.json()

    if (!name || !email || !skill) {
      return NextResponse.json({ success: false, message: 'Please fill all fields' }, { status: 400 })
    }

    const newEntry = await Registrant.create({ name, email, skill, country })
    return NextResponse.json({ success: true, data: newEntry }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 })
  }
}