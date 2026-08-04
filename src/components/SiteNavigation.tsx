"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import type { NavGroup } from "@/data/navigation";
import { isNavigationGroupActive, isNavigationPathCurrent } from "@/lib/navigation";

const OPEN_DELAY = 80;
const CLOSE_DELAY = 220;

export default function SiteNavigation({ groups }: { groups: NavGroup[] }) {
  const pathname = usePathname();
  const root = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearOpenTimer = useCallback(() => {
    if (openTimer.current) {
      clearTimeout(openTimer.current);
      openTimer.current = null;
    }
  }, []);

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const openDesktop = useCallback(
    (id: string) => {
      clearCloseTimer();
      clearOpenTimer();
      openTimer.current = setTimeout(() => {
        setDesktopOpen(id);
        openTimer.current = null;
      }, OPEN_DELAY);
    },
    [clearCloseTimer, clearOpenTimer]
  );

  const closeDesktop = useCallback(() => {
    clearOpenTimer();
    clearCloseTimer();
    closeTimer.current = setTimeout(() => {
      setDesktopOpen(null);
      closeTimer.current = null;
    }, CLOSE_DELAY);
  }, [clearOpenTimer, clearCloseTimer]);

  useEffect(() => {
    function outside(e: PointerEvent) {
      if (!root.current?.contains(e.target as Node)) {
        clearOpenTimer();
        clearCloseTimer();
        setDesktopOpen(null);
        setMobileOpen(false);
      }
    }
    function key(e: KeyboardEvent) {
      if (e.key === "Escape") {
        clearOpenTimer();
        clearCloseTimer();
        setDesktopOpen(null);
        setMobileOpen(false);
        setMobileGroup(null);
        toggle.current?.focus();
      }
    }
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", key);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", key);
    };
  }, [clearOpenTimer, clearCloseTimer]);

  useEffect(() => {
    return () => {
      clearOpenTimer();
      clearCloseTimer();
    };
  }, [clearOpenTimer, clearCloseTimer]);

  return (
    <div className="site-navigation" ref={root}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {groups.map((g) => (
          <div
            className="desktop-nav-group"
            data-active={isNavigationGroupActive(pathname, g) || undefined}
            key={g.id}
            onPointerEnter={() => openDesktop(g.id)}
            onPointerLeave={() => closeDesktop()}
          >
            <Link
              className="nav-top-link"
              href={g.href}
              aria-current={isNavigationPathCurrent(pathname, g.href) ? "page" : undefined}
            >
              {g.label}
            </Link>
            {g.items?.length && (
              <>
                <button
                  className="nav-disclosure"
                  type="button"
                  aria-label={`Open ${g.label} menu`}
                  aria-expanded={desktopOpen === g.id}
                  aria-controls={`desktop-nav-panel-${g.id}`}
                  onClick={() => {
                    clearOpenTimer();
                    clearCloseTimer();
                    setDesktopOpen(desktopOpen === g.id ? null : g.id);
                  }}
                >
                  <span aria-hidden="true">⌄</span>
                </button>
                <div
                  id={`desktop-nav-panel-${g.id}`}
                  className="desktop-nav-panel"
                  hidden={desktopOpen !== g.id}
                  onPointerEnter={() => clearCloseTimer()}
                  onPointerLeave={() => closeDesktop()}
                >
                  <div className="nav-panel-content">
                    <div className="nav-menu-items">
                      {g.items.map((i) => (
                        <Link
                          href={i.href}
                          key={i.href}
                          aria-current={
                            isNavigationPathCurrent(pathname, i.href) ? "page" : undefined
                          }
                        >
                          <span>{i.label}</span>
                          {i.description && <small>{i.description}</small>}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </nav>
      <div className="mobile-navigation">
        <button
          ref={toggle}
          className="mobile-navigation-toggle"
          type="button"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-site-navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <div
          id="mobile-site-navigation"
          className="mobile-navigation-panel"
          data-open={mobileOpen || undefined}
          hidden={!mobileOpen}
        >
          <div className="mobile-navigation-heading">
            <strong>Mobile navigation</strong>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation"
            >
              ×
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {groups.map((g) => (
              <div
                className="mobile-nav-group"
                data-active={isNavigationGroupActive(pathname, g) || undefined}
                key={g.id}
              >
                <div className="mobile-nav-group-heading">
                  <Link href={g.href}>{g.label}</Link>
                  <button
                    type="button"
                    aria-label={`Open ${g.label} menu`}
                    aria-expanded={mobileGroup === g.id}
                    aria-controls={`mobile-nav-panel-${g.id}`}
                    onClick={() => setMobileGroup(mobileGroup === g.id ? null : g.id)}
                  >
                    <span aria-hidden="true">⌄</span>
                  </button>
                </div>
                <div
                  id={`mobile-nav-panel-${g.id}`}
                  className="mobile-nav-group-panel"
                  hidden={mobileGroup !== g.id}
                >
                  {g.items?.map((i) => (
                    <Link href={i.href} key={i.href}>
                      <span>{i.label}</span>
                      {i.description && <small>{i.description}</small>}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
