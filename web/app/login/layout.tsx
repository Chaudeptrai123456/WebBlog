import { UserProvider } from "@/app/context/UserContext";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <UserProvider>{children}</UserProvider>
    </div>
  );
}
