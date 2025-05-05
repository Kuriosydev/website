"use client";
import { useState } from "react";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerAs, setRegisterAs] = useState("parent");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("error"); 

  // OTP related states
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [verificationId, setVerificationId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setMessageType("error");

    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      // Step 1: Register the user
      const userPayload = {
        username,
        email,
        password,
      };

      const registerResponse = await fetch(
        "https://cms.kurixel.com/api/auth/local/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userPayload),
        }
      );

      const userData = await registerResponse.json();

      if (!registerResponse.ok) {
        throw new Error(userData.error?.message || "Registration failed");
      }

      // Store user data for later profile creation
      const { jwt, user } = userData;
      setUserId(user.id);
      setUserToken(jwt);

      const profilePayload = {
        data: {
          firstName,
          lastName,
          phone,
          registerAs,
          users_permissions_user: user.id,
          phoneVerified: true,
        },
      };

      const profileResponse = await fetch(
        "https://cms.kurixel.com/api/user-profiles",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${userToken}`
          },
          body: JSON.stringify(profilePayload),
        }
      );

      const profileData = await profileResponse.json();

      if (!profileResponse.ok) {
        console.error("Profile creation failed:", profileData);
        throw new Error(
          profileData.error?.message || "Profile creation failed"
        );
      }

      // Success!
      setMessage("✅ Registration successful! Phone number verified.");
      setMessageType("success");

      // Store token in localStorage for automatic login
      localStorage.setItem("token", userToken);

      // Redirect to dashboard or login page after 2 seconds
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 2000);
    } catch (err) {
      console.error(err);
      setMessage(`❌ ${err.message || "Something went wrong."}`);
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  // const handleSendOtp = async () => {
  //   setMessage("");
  //   setMessageType("error");

  //   if (!phone || phone.length < 8) {
  //     setMessage("❌ Please enter a valid phone number.");
  //     return;
  //   }

  //   try {
  //     setLoading(true);
  //     const otpResponse = await fetch("/api/send-otp", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ phone }),
  //     });

  //     const otpData = await otpResponse.json();

  //     if (!otpResponse.ok) {
  //       throw new Error(otpData.error || "Failed to send verification code");
  //     }

  //     setVerificationId(otpData.verificationId);
  //     setOtpSent(true);
  //     setMessage("✅ OTP sent successfully. Check your phone.");
  //     setMessageType("success");
  //   } catch (err) {
  //     setMessage(`❌ ${err.message}`);
  //     setMessageType("error");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleVerifyOtpInline = async () => {
  //   try {
  //     setLoading(true);
  //     const verifyResponse = await fetch("/api/verify-otp", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ verificationId, otp, phone }),
  //     });

  //     const verifyData = await verifyResponse.json();

  //     if (!verifyResponse.ok) {
  //       throw new Error(verifyData.error || "Invalid verification code");
  //     }

  //     setOtpVerified(true);
  //     setMessage("✅ Phone number verified.");
  //     setMessageType("success");
  //   } catch (err) {
  //     setMessage(`❌ ${err.message}`);
  //     setMessageType("error");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Render registration form
  return (
    <div className="min-h-screen flex items-center justify-center w-full h-auto bg-[#FFCE49] undefined dark:bg-black dark:text-white">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-md p-8 mt-2 mb-2">
        <h2 className="font-luckiest text-5xl md:text-7xl font-normal text-center md:tracking-wider text-[#8F0E00] dark:text-[#FFCE49] mt-10 font-bold mb-6 text-center">Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-base font-medium">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-base font-medium">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-base font-medium">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
              minLength={3}
            />
            <p className="text-xs text-gray-500 mt-1">Minimum 3 characters</p>
          </div>

          <div>
            <label className="block mb-2 text-base font-medium">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-base font-medium">
              Phone
            </label>
            <div className="flex gap-2">
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setOtpSent(false);
                  setOtpVerified(true);
                }}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
                placeholder="+1234567890"
              />
              <button
                type="button"
                // onClick={handleSendOtp}
                disabled={loading || otpSent}
                className="mt-1 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                {otpSent ? "OTP Sent" : "Send OTP"}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Include country code (e.g., +1)
            </p>

            {otpSent && !otpVerified && (
              <div className="mt-4">
                <label className="block mb-2 text-base font-medium">
                  Enter OTP
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                    maxLength={6}
                    placeholder="123456"
                    required
                  />
                  <button
                    type="button"
                    onClick={handleVerifyOtpInline}
                    className="mt-1 px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Verify OTP
                  </button>
                </div>
              </div>
            )}
          </div>

          <div>
            <label className="block mb-2 text-base font-medium">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
              minLength={6}
            />
            <p className="text-xs text-gray-500 mt-1">Minimum 6 characters</p>
          </div>

          <div>
            <label className="block mb-2 text-base font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-base font-medium">
              Register as
            </label>
            <div className="flex gap-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="parent"
                  checked={registerAs === "parent"}
                  onChange={() => setRegisterAs("parent")}
                  className="form-radio text-blue-600"
                />
                <span>Parent</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="child"
                  checked={registerAs === "child"}
                  onChange={() => setRegisterAs("child")}
                  className="form-radio text-blue-600"
                />
                <span>Child</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            // disabled={loading || !otpVerified}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition "
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              messageType === "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
