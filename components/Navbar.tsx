"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Tính Năng", href: "#features" },
  { label: "Cách Hoạt Động", href: "#how-it-works" },
  { label: "Đánh Giá", href: "#testimonials" },
] as const;

export default function Navbar() {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuState ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuState]);

  return (
    <header>
      <nav
        data-state={menuState ? "active" : undefined}
        className="group fixed z-20 w-full px-2"
        aria-label="Điều hướng chính"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "max-w-4xl rounded-2xl border bg-background/50 backdrop-blur-lg lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="Trang chủ"
                className="flex items-center space-x-2"
              >
                <span className="text-xl font-bold tracking-tight">
                  GLOWMAX
                </span>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Đóng Menu" : "Mở Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu
                  className={cn(
                    "m-auto size-6 duration-200",
                    menuState && "rotate-180 scale-0 opacity-0"
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 m-auto size-6 duration-200",
                    menuState
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-180 scale-0 opacity-0"
                  )}
                />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={cn(
                "bg-background mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent",
                menuState && "block lg:flex"
              )}
            >
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                        onClick={() => setMenuState(false)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button asChild size="sm">
                  <a href="#">Bắt Đầu</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
