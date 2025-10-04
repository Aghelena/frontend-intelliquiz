"use client";
import Link from "next/link";
import { useApp } from "@/lib/store";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { user, logout } = useApp();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo + Marca juntos (remove o gap enorme) */}
        <div className="flex items-center gap-2">
          <img
            src="/logoambar.png"
            alt="IntelliQuiz logo"
            className="h-23 w-23 shrink-0 rounded-full object-contain"
            loading="eager"
          />
          <Link
            href="/"
            className="text-xl font-semibold text-amber-300 outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md px-1"
            aria-label="Voltar para a página inicial do IntelliQuiz"
          >
            IntelliQuiz
          </Link>
        </div>

        {/* Navegação */}
        <nav className="flex items-center gap-3" aria-label="Menu principal">
          <Link
            href="/"
            className="text-sm text-neutral-300 hover:text-amber-300 outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md px-1"
          >
            Explorar
          </Link>

          <Link
            href="/leaderboard/global"
            className="text-sm text-neutral-300 hover:text-amber-300 outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md px-1"
          >
            Leaderboard
          </Link>

          {user?.role === "client" && (
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="border-amber-400/40 text-amber-200 hover:bg-amber-400/10"
              >
                Criar Quizzes
              </Button>
            </Link>
          )}

          {!user ? (
            <div className="flex gap-2">
              <Link href="/login">
                <Button variant="ghost" className="hover:text-black hover:bg-amber-200">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-amber-400 text-black hover:bg-amber-300">
                  Cadastrar
                </Button>
              </Link>
            </div>
          ) : (
            <Button
              variant="outline"
              className="border-neutral-700 text-black hover:bg-neutral-800"
              onClick={logout}
              aria-label="Sair da conta"
            >
              Sair
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
