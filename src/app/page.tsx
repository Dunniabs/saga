import { BackgroundBeams } from "@/components/ui/background-beams";
import Logo from "@/components/ui/logo";

export default function Home() {
  return (
    <main className="min-h-screen p-8 overflow-auto flex justify-center">
      <BackgroundBeams className="absolute inset-0 z-0" />
      <div className="w-full max-w-6xl z-10">
        <header className="mb-12 flex gap-2 items-center px-4 py-2 rounded">
          <Logo className="w-8 h-8 fill-foreground bg-background rounded-full" />
          <h1 className="text-2xl font-bold select-none">Dunniabs</h1>
        </header>
      </div>
    </main>
  );
}
