import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToastProvider from "@/providers/ToastProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";
import Player from "@/components/Player";

const inter = Inter({ subsets: ["latin"] });

export const revalidate=0;

export const metadata: Metadata = {
  title: "Spotifyy",
  description: "Listen to the latest music",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs=await getSongsByUserId();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider/>
        <SupabaseProvider>
          
          <UserProvider>
          <ModalProvider/>
          <Sidebar songs={userSongs}>{children}</Sidebar>
          <Player/>
          </UserProvider>
          
        </SupabaseProvider>
      </body>
    </html>
  );
}
