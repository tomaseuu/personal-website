import type { MouseEvent } from "react";

export function scrollHomeToTop(event: MouseEvent<HTMLAnchorElement>) {
  if (
    window.location.pathname === "/" &&
    !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey
  ) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
