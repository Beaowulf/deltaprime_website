import { useTheme } from "next-themes";
import Image from "next/image";
import DarkMode_Logo from "@/public/assets/img/images/logos/DeltaPrime-full-logo_white.png";
import LightMode_Logo from "@/public/assets/img/images/logos/DeltaPrime-full-logo_purple.png";
import White_full_Logo from "@/public/assets/img/images/logos/DeltaPrime-full-logo_white.png";

export const LightModeLogo = () => {
  return (
    <a
      href="/#"
      className="title-font flex items-center font-medium text-[#6B70ED] dark:text-white"
    >
      <Image
        className="max-w-[200px] lg:max-w-[240px] h-auto object-cover"
        src={LightMode_Logo}
        alt="logo_img"
      />
    </a>
  );
};

export const DarkModeLogo = () => {
  return (
    <a
      href="/#"
      className="title-font flex items-center font-medium text-[#6B70ED] dark:text-white"
    >
      <Image
        className="max-w-[200px] lg:max-w-[240px] h-auto object-cover"
        src={LightMode_Logo}
        alt="logo_img"
      />
    </a>
  );
};

export const MobileMenuLogo = () => {
  return (
    <a
      href="/#"
      className="title-font flex items-center font-medium text-[#A79DFF] dark:text-white"
    >
      <Image
        className="max-w-[200px] lg:max-w-[240px] h-auto object-cover"
        src={LightMode_Logo}
        alt="logo_img"
      />
    </a>
  );
};

export const FooterLogo = () => {
  const { resolvedTheme } = useTheme();

  return (
    <a
      href="/#"
      className="flex title-font font-medium items-center text-gray-900 dark:text-white"
    >
      {resolvedTheme === "dark" ? (
        <Image
          className="max-w-[200px] lg:max-w-[240px] h-auto object-cover"
          src={LightMode_Logo}
          alt="logo_img"
        />
      ) : (
        <Image
          className="max-w-[200px] lg:max-w-[240px] h-auto object-cover"
          src={White_full_Logo}
          alt="logo_img"
        />
      )}
    </a>
  );
};
