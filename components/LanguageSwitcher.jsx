// components/LanguageSwitcher.jsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher({ lang, showFlag = true, showText = false }) {
  const pathname = usePathname();
  const otherLang = lang === "ar" ? "en" : "ar";
  
  // Replace current language in pathname with new language
  const pathWithoutLang = pathname.replace(/^\/(en|ar)/, "");
  const newHref = `/${otherLang}${pathWithoutLang}`;
  
  if (showFlag && !showText) {
    return (
      <Link 
        href={newHref}
        className="flag-only-switcher"
        title={otherLang === "ar" ? "العربية" : "English"}
      >
        {otherLang === "ar" ? (
          <Image
            src="/saudi.png"
            alt="Saudi Flag"
            className="flag-icon-only"
            width={32}
            height={20}
          />
        ) : (
          <Image
            src="/usa.png"
            alt="USA Flag"
            className="flag-icon-only"
            width={32}
            height={20}
          />
        )}
      </Link>
    );
  }
  
  return (
    <Link 
      href={newHref}
      className={`language-switcher ${showFlag ? 'flag-language-switcher' : 'text-language-switcher'}`}
    >
      {showFlag ? (
        <>
          {otherLang === "ar" ? (
            <>
              <Image
                src="/saudi.png"
                alt="Saudi Flag"
                className="flag-icon"
                width={32}
                height={20}
              />
              {showText && <span className="flag-text">العربية</span>}
            </>
          ) : (
            <>
              <Image
                src="/usa.png"
                alt="USA Flag"
                className="flag-icon"
                width={32}
                height={20}
              />
              {showText && <span className="flag-text">English</span>}
            </>
          )}
        </>
      ) : (
        <span className="language-text">{otherLang === "ar" ? "العربية" : "English"}</span>
      )}
    </Link>
  );
}