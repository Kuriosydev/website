
import { NextResponse } from 'next/server';
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifyServiceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

const client = twilio(accountSid, authToken);

export async function POST(request) {
  try {
    const { phone, otp } = await request.json();
    
    if (!phone || !otp) {
      return NextResponse.json(
        { error: 'Phone number and verification code are required' },
        { status: 400 }
      );
    }

 
    const verificationCheck = await client.verify.v2
      .services(verifyServiceSid)
      .verificationChecks.create({
        to: phone,
        code: otp
      });

    if (verificationCheck.status === 'approved') {
      return NextResponse.json({
        success: true,
        message: 'Phone number verified successfully'
      });
    } else {
      return NextResponse.json(
        { error: 'Invalid verification code' },
        { status: 400 }
      );
    }
    
  } catch (error) {
    console.error('Error verifying OTP:', error);

    if (error.code === 20404) {
      return NextResponse.json(
        { error: 'Verification code expired or not found' }, 
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to verify code' },
      { status: 500 }
    );
  }
}