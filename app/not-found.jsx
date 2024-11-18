import Image from "next/image";
// Mobile Images for 404
import mobile_map_image from "@/public/assets/img/images/404_Images/404_mobile_map_image.png";
import mobile_hand_image from "@/public/assets/img/images/404_Images/404_mobile_hand_image.png";
// Desktop Images for 404
import desktop_map_image from "@/public/assets/img/images/404_Images/404_desktop_map_image.png";
import desktop_hand_image from "@/public/assets/img/images/404_Images/404_desktop_hand_image.png";

export const metadata = {
  title: "404 | DeltaPrime",
};

const Custom404 = () => {
  return (
    <div className="px-4 sm:px-[5%] md:px-[8%] lg:px-[10%] xl:px-[16%] 2xl:px-[20%]">
      <div className="flex justify-center items-center my-10 ">
        {/* Mobile View for 404 */}
        <div className="lg:hidden inline-block overflow-hidden relative">
          <Image
            src={mobile_map_image}
            alt="mobile_map_image"
            className="h-[650px] w-auto my-10"
            height={650}
            width={200}
          />
          <div className="h-fit absolute bottom-[-1.55rem] z-50 left-[14rem] w-full text-center text-white py-2">
            <Image
              src={mobile_hand_image}
              alt="mobile_hand_image"
              className="h-[100px] w-auto my-10"
              height={120}
              width={120}
            />
          </div>
          <div className="h-fit absolute bottom-[13.5rem] left-[-12px] w-full text-center text-white py-2">
            <p className="font-bold leading-[4rem] uppercase text-[65px]">
              404
            </p>
            <p className="font-bold text-[25px]">Not found</p>
          </div>
          <div className="h-fit absolute bottom-[6rem] left-[-12px] w-full text-center text-white py-2">
            <p className="font-bold leading-[2rem] uppercase text-[25px]">
              Feeling Lost?
            </p>
            <button className="border-[2px] rounded-full border-white px-[10px]">
              <p className="font-bold leading-[2.5rem] uppercase text-[17px]">
                Go back home
              </p>
            </button>
          </div>
        </div>
        {/* Desktop View for 404 */}
        <div className="lg:block hidden  relative">
          <Image
            width={1250}
            height={100}
            src={desktop_map_image}
            alt="desktop_map_image"
            className="h-auto max-w-[1550px]"
          />
          <div className="h-fit absolute bottom-[1.5rem] z-50 right-[5rem] w-fit text-center text-white py-2">
            <Image
              src={desktop_hand_image}
              alt="desktop_hand_image"
              className="h-[150px] w-auto my-10"
              height={150}
              width={150}
            />
          </div>
          <div className="h-fit absolute bottom-[23rem] right-[-13rem] w-full text-center text-white py-2">
            <p className="font-bold leading-[4rem] uppercase text-[65px]">
              404
            </p>
            <p className="font-bold text-[30px]">Not found</p>
          </div>
          <div className="h-fit absolute bottom-[12rem] right-[-13rem] w-full text-center text-white py-2">
            <p className="font-bold leading-[4rem] uppercase text-[30px]">
              Feeling Lost?
            </p>
            <button className="border-[2px] rounded-full border-white px-[10px]">
              <p className="font-bold leading-[2.5rem] uppercase text-[20px]">
                Go back home
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
