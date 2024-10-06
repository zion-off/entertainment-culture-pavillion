// app/api/airtable/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      "https://api.airtable.com/v0/app8RUorIqgxDMlsk/tblt2MNLZLWR1b2fN",
      {
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data from Airtable');
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
