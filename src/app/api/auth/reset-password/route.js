import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { code, password, passwordConfirmation } = await request.json();
    if (!code || !password || !passwordConfirmation) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    if (password !== passwordConfirmation) {
      return NextResponse.json(
        { error: 'Passwords do not match' },
        { status: 400 }
      );
    }
    
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters long' },
        { status: 400 }
      );
    }
    const strapiUrl = "https://cms.kurixel.com";
    const response = await fetch(`${strapiUrl}/api/auth/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code,
        password,
        passwordConfirmation,
      }),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      if (data.error) {
        return NextResponse.json(
          { error: data.error.message || 'Failed to reset password' },
          { status: response.status }
        );
      }
      
      return NextResponse.json(
        { error: 'Failed to reset password' },
        { status: response.status }
      );
    }
    
    return NextResponse.json({
      success: true,
      user: data.user,
    });
    
  } catch (error) {
    console.error('Error in reset password route:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}