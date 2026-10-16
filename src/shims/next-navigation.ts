import { notFound as tanstackNotFound, redirect, useRouterState } from "@tanstack/react-router";
export function usePathname() { return useRouterState({ select: (s) => s.location.pathname }); }
export { redirect };
export function notFound(): never { throw tanstackNotFound(); }
export function useRouter() { return { push: (h: string) => { window.location.href = h; }, replace: (h: string) => { window.location.replace(h); }, back: () => history.back() }; }
export function useSearchParams() { return new URLSearchParams(typeof window === "undefined" ? "" : window.location.search); }
