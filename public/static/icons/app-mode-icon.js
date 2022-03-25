import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { CgSun, CgMoon } from "react-icons/cg";

export default function ThemeIcon() {
  const { theme } = useTheme();
  const [isDark, setisDark] = useState(null);

  useEffect(() => {
    if (theme === "dark") setisDark(true);
    if (theme === "light") setisDark(false);
  }, [theme]);
  if (isDark) return <CgSun />;
  if (isDark === false) return <CgMoon />;
  if (isDark === null) return <></>;
}
