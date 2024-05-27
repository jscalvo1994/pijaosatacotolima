import { TopMenu,Footer, Slidebar} from "@/components";

export default function ShopLayout({children}: {
    children: React.ReactNode;
}) {
  return (
  <main className="min-h-screen bg-white">
    <TopMenu />
    <Slidebar />
    {children}
    <Footer />
  </main>
  );
}
