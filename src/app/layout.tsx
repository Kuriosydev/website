import { cookies } from "next/headers";
import LoggedInLayout from "./layout1";
import LoggedOutLayout from "./layout2";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user")?.value;
  let isLoggedIn = true;
console.log(userCookie,"userCookie");
  if (userCookie) {
    try {
      const user = JSON.parse(decodeURIComponent(userCookie));
      isLoggedIn = false; 
    } catch (err) {
      isLoggedIn = true;
    }
  }
console.log(isLoggedIn,"isLoggedIn")
  return isLoggedIn ? (
    <LoggedInLayout>{children}</LoggedInLayout>
  ) : (
    <LoggedOutLayout>{children}</LoggedOutLayout>
  );
}
