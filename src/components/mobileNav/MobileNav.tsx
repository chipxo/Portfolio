import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GitHubButton, LinkedinButton, MenuIcon } from "../icons/icons";
import links from "../nav/links";
import { Button } from "../ui/button";
import { useRef } from "react";

const MobileNav = () => {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const closeMenu = () => closeRef.current?.click();

  return (
    <div className="relative left-4 top-4 sm:hidden">
      <Sheet>
        <SheetTrigger ref={closeRef} className="sm:hidden">
          <Button variant="outline" size="icon" className="border-none">
            {MenuIcon}
          </Button>
        </SheetTrigger>
        <SheetContent className="flex w-2/3 flex-col justify-between p-5 sm:hidden">
          <SheetHeader className="pt-6 text-end">
            {links.map(
              ({ id, text, link }) =>
                id !== 6 && (
                  <SheetTitle key={id} onClick={closeMenu}>
                    <a href={link}>{text}</a>
                  </SheetTitle>
                ),
            )}
          </SheetHeader>
          <SheetFooter>
            <nav className="space-y-2">
              <ul className="flex flex-row items-center justify-around gap-3">
                <li onClick={closeMenu}>
                  <GitHubButton />
                </li>
                <li onClick={closeMenu}>
                  <LinkedinButton />
                </li>
              </ul>
              {links.map(
                ({ id, text, link }) =>
                  id === 6 && (
                    <a key={id} href={link} onClick={closeMenu}>
                      <Button variant="outline" className="w-full">
                        {text} me
                      </Button>
                    </a>
                  ),
              )}
            </nav>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
