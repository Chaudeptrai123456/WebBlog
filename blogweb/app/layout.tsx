import "./globals.css";
import { UserProvider } from "@/app/context/UserContext";
import Background from "@/app/components/user/components/Background";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
