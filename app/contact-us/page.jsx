import ContactForm from "@/app/ui/contactForm/contactForm";

// Define dynamic metadata for the Contact Us page
export const metadata = {
  title: "Contact Us | DeltaPrime",
  description:
    "Have questions? Contact DeltaPrime. We're here to assist with any queries or issues you may have.",
};

const ContactUs = () => {
  return (
    <div className="px-4 sm:px-[5%] md:px-[8%] lg:px-[10%] xl:px-[16%] 2xl:px-[20%]">
      <ContactForm hasUnlockPotentialContainer={false} />
    </div>
  );
};

export default ContactUs;
