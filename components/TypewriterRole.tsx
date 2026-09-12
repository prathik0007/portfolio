"use client";

import { useState, useEffect } from "react";

interface TypewriterRoleProps {
  roles: string[];
}

export default function TypewriterRole({ roles }: TypewriterRoleProps) {
  const roleList = roles && roles.length > 0 ? roles : ["Full-Stack Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(roleList[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || roleList.length <= 1) return;

    const currentFullText = roleList[roleIndex % roleList.length];
    const typingSpeed = isDeleting ? 45 : 85;
    const pauseFull = 2000;
    const pauseEmpty = 350;

    if (!isDeleting && displayText === currentFullText) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseFull);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roleList.length);
      }, pauseEmpty);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentFullText.substring(0, prev.length - 1)
          : currentFullText.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roleList, isMounted]);

  // Determine styling: first word is highlighted in primary blue, rest in ink
  const currentRole = roleList[roleIndex % roleList.length] || "";
  const firstWord = currentRole.split(" ")[0] || "";

  let primaryPart = "";
  let inkPart = "";

  if (displayText.length <= firstWord.length) {
    primaryPart = displayText;
  } else {
    primaryPart = firstWord;
    inkPart = displayText.slice(firstWord.length);
  }

  return (
    <span className="inline-flex items-baseline">
      <span className="text-primary">{primaryPart}</span>
      <span className="text-ink">{inkPart}</span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[0.8em] w-[2.5px] translate-y-[1px] rounded-full bg-primary animate-pulse"
      />
    </span>
  );
}
