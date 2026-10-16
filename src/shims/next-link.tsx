import { forwardRef, type AnchorHTMLAttributes } from "react";
type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string | { pathname?: string }; prefetch?: boolean; scroll?: boolean; replace?: boolean };
const Link = forwardRef<HTMLAnchorElement, Props>(function Link({ href, prefetch: _p, scroll: _s, replace: _r, ...rest }, ref) {
  const h = typeof href === "string" ? href : (href as { pathname?: string }).pathname ?? "/";
  return <a ref={ref} href={h} {...rest} />;
});
export default Link;
