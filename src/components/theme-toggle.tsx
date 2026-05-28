"use client";

export function ThemeToggle() {
  function onToggle() {
    const isDark = document.documentElement.classList.contains("dark");
    const nextTheme = isDark ? "light" : "dark";
    window.localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      className="rounded-full border border-black/10 px-3 py-1.5 text-xs text-muted transition hover:text-foreground"
      aria-label="Toggle color theme"
    >
      Theme
    </button>
  );
}
