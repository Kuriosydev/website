import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const strapiUrl = "https://cms.kurixel.com";
    const response = await fetch(`${strapiUrl}/api/auth/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      return NextResponse.json(
        { success: true, message: 'password reset link sent' },
        { status: 200 }
      );
    }
    
    return NextResponse.json(
      { success: true, message: 'password reset link sent' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in forgot password route:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}