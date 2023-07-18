import Cards from "@/components/Cards";
import React from "react";
import branding from "@/public/branding.jpeg";
import socialmedia from "@/public/socialmedia.jpeg";
import ads from "@/public/ads.jpeg";
import seo from "@/public/seo.png";
import email from "@/public/email.png";

function Services() {
  const service = [
    {
      label: "Logo & Branding",
      image: branding,
      description:
        "Establish a strong brand identity that resonates with your audience and sets you apart.",
    },
    {
      label: "Social Media Managment",
      image: socialmedia,
      description:
        "Engage, grow, and influence your audience through effective social media strategies.",
    },
    {
      label: "Instagram,FaceBook and Google Ads",
      image: ads,
      description:
        "Reach your target audience and drive conversions with targeted ad campaigns on these platforms.",
    },
    {
      label: "Search Engine Optimisation (SEO)",
      image: seo,
      description:
        "Boost your website's visibility and organic traffic through expert SEO techniques.",
    },
    {
      label: "Email Marketing",
      image: email,
      description:
        "Harness the power of email to nurture customer relationships, drive engagement, and increase conversions.",
    },
  ];
  return (
    <div
      className="py-20 font-bold"
      
    >
      <p className="lg:text-4xl font-semibold text-center py-10">
      Our Comprehensive Digital Marketing Solutions
      </p>
      {/* <p className="text-center py-10">
        Partner with a leading digital marketing agency to increase brand
        awareness, reach your target audience & grow your business online.
      </p> */}
      <div className="px-56 grid  lg:grid-cols-3">
        {service.map((item) => {
          return (
            <Cards
              title={item.label}
              image={item.image}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Services;
