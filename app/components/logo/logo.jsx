import { useTheme } from "next-themes";
import Image from "next/image";
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
        width={240} // Setting fixed width for optimization
        height={80} // Setting height proportionate to logo aspect ratio
        quality={75} // Adjust image quality for better performance
        priority // Ensure the logo loads as a priority image
      />
    </a>
  );
};

export const DarkModeLogo = ({ large = false }) => {
  return (
    <a
      href="/#"
      className="title-font flex items-center font-medium text-[#6B70ED] dark:text-white"
    >
      <Image
        className={`${
          large
            ? "max-w-[230px] lg:max-w-[270px]"
            : "max-w-[200px] lg:max-w-[240px]"
        } h-auto object-cover`}
        src={LightMode_Logo}
        alt="logo_img"
        width={large ? 270 : 240} // Dynamic width based on size
        height={90} // Adjust height accordingly
        quality={75}
        priority
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
        width={240}
        height={80}
        quality={75}
        priority
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
          width={240}
          height={80}
          quality={75}
          priority
        />
      ) : (
        <Image
          className="max-w-[200px] lg:max-w-[240px] h-auto object-cover"
          src={White_full_Logo}
          alt="logo_img"
          width={240}
          height={80}
          quality={75}
          priority
        />
      )}
    </a>
  );
};
