import MainContent from "@/components/ui/MainCon";
import Header from "@/components/ui/Header";

export const revalidate = 0;

export default function Home() {
  return (
    <main className="h-[87vh] bg-[#121212] rounded-md">
      <Header />
      <MainContent />
    </main>
  );
}
