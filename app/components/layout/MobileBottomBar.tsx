"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Calculator,
  Bot,
  LayoutDashboard,
  Brain,
} from "lucide-react";

const links = [
  {
    href: "/",
    label: "Home",
    icon: Home,
  },
  {
    href: "/calculators",
    label: "Calcolatori",
    icon: Calculator,
  },
  {
    href: "/ai",
    label: "AI",
    icon: Bot,
  },
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/advisor",
    label: "Advisor",
    icon: Brain,
  },
];

export default function MobileBottomBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[9999] bg-red-600 md:hidden">

  <div className="p-4 text-center font-bold text-white">
    TEST BARRA
  </div>

        {links.map((link) => {
          const Icon = link.icon;

          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center gap-1 py-3 text-xs transition ${
                active
                  ? "text-cyan-400"
                  : "text-slate-400"
              }`}
            >
              <Icon size={22} />

              <span>{link.label}</span>
            </Link>
          );
        })}

      </div>

    </nav>
  );
}