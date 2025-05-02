
import { NextResponse } from 'next/server';
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifyServiceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

if (!accountSid || !authToken || !verifyServiceSid) {
  console.error('Missing Twilio environment variables');
}

const client = twilio(accountSid, authToken);

export async function POST(request) {
  try {
    const { phone } = await request.json();
    
    if (!phone) {
      return NextResponse.json(
        { error: 'Phone number is required' },
        { status: 400 }
      );
    }

    const verification = await client.verify.v2
      .services(verifyServiceSid)
      .verifications.create({
        to: phone,
        channel: 'sms'
      });

    return NextResponse.json({
      success: true,
      verificationId: verification.sid,
      message: 'Verification code sent successfully'
    });
    
  } catch (error) {
    console.error('Error sending OTP:', error);

    if (error.code === 60200) {
      return NextResponse.json(
        { error: 'Invalid phone number format. Please include country code.' }, 
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to send verification code' },
      { status: 500 }
    );
  }
}