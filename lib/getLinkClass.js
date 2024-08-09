export const getLinkClass = (path, pathname, resolvedTheme) => {
  if (pathname.startsWith(path) && resolvedTheme === "dark") {
    return "w-full h-[2px] mt-1 bg-gradient-to-b from-[#FFBB9B] from-10% via-[#FF8FB8] via-60% to-[#AFAFFF] to-80%";
  } else if (pathname.startsWith(path) && resolvedTheme === "light") {
    return "w-full h-1 mt-1 bg-[#1F3C75]";
  } else {
    return null;
  }
};
