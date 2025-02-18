import Sidebar from "@/components/Sidebar";
import "../globals.css";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedin = await getLoggedInUser()

  if(!loggedin) redirect('/sign-in')
  return (
    <main className="flex h-screen w-full  font-inter  ">
      <Sidebar user={loggedin} />
      <div className="flex size-full flex-col ">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedin}/>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
