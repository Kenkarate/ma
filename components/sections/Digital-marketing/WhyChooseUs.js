import Image from "next/image";
import React from "react";
import logo from "@/public/TeamDigitalmarketing.png";
import stratergy from "@/public/stratergy.png";
import roi from "@/public/roi.jpeg";
import support from "@/public/support.jpg";
import collab from "@/public/collab.png";

function WhyChooseUs() {
  return (
    <div className=" bg-opacity-50 lg:px-44 py-20">
      <h2 className="lg:text-[90px] text-3xl text-center lg:text-left font-semibold">
        Why Choose NexusCraft <span className="text-red-800">???</span>
      </h2>
      <div className="">
        <div className="grid lg:grid-cols-2 lg:py-16">
          <div className="p-10 my-auto p">
            <h3 className="my-auto text-2xl py-5">1: Experienced Team of Experts</h3>
            <p className="text-gray-500">
              Our experienced team of experts has a proven track record of
              success. We have helped businesses of all sizes achieve their
              marketing goals, from increasing website traffic to generating
              leads and sales. Our team is made up of specialists in all areas
              of digital marketing, including SEO, PPC, social media, content
              marketing, and email marketing. We also offer a variety of other
              digital marketing services, such as website design and
              development, conversion rate optimization, and analytics.
            </p>
          </div>
          <Image src={logo} className="" />
        </div>
        <div className="grid md:grid-cols-2  lg:py-16">
          <Image src={stratergy} className="px-5" />
          <div className="p-10 my-auto -order-1 lg:order-1">
            <h3 className="my-auto text-2xl py-5">
              2: Customized Strategies for Your Business
            </h3>
            <p className="text-gray-500">
              By understanding your target audience, you can create a more
              personalized customer experience and increase brand awareness in
              your target market. Here are a few ways to create customized
              strategies for your business:
            </p>
              <ul style={{ "list-style-type": "disc" }} className="mx-5 text-gray-500">
                <li>
                  Segment your audience: Divide your target market into smaller
                  groups based on common interests, demographics, or other
                  factors.
                </li>
                <li>
                  Use data to inform your decisions: Track your website traffic,
                  social media engagement, and other data to learn more about
                  your target audience and what they are interested in.{" "}
                </li>
                <li>
                  Use personalization: Create targeted email campaigns, social
                  media ads, and other marketing materials using customer data.
                </li>
              </ul>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 lg:py-16">
          <div className="my-auto p-10 text-justify">
            <h3 className="my-auto text-2xl py-5">
              3: Measurable Results and ROI Focus
            </h3>
            <p className="text-gray-500">
              By tracking your results, you can see what's working and what's
              not, and make adjustments to your campaigns accordingly. This will
              help you ensure that your marketing efforts are as effective as
              possible. Some common metrics include:
              <ul style={{ "list-style-type": "disc" }} className="mx-5">
                <li>
                  Website traffic: How many people are visiting your website?
                </li>
                <li>
                  Leads: How many people are signing up for your email list or
                  submitting contact forms?
                </li>
                <li>Sales: How much money are you making?</li>
              </ul>
            </p>
          </div>
          <Image src={roi} className="" />
        </div>
        <div className="grid lg:grid-cols-2 lg:py-16">
          <Image src={support} className="" />
          <div className="my-auto p-10 -order-1 lg:order-1">
            <h3 className="my-auto text-2xl py-5">
              4: Transparent Reporting and Ongoing Support
            </h3>
            <p className="text-gray-500">
              Transparent reporting and ongoing support are essential for any
              successful digital marketing campaign. By providing clear and
              concise reports, you can ensure that your clients understand the
              results of your campaigns and make informed decisions about their
              future marketing strategies. Ongoing support is also essential, as
              it allows you to answer questions, troubleshoot problems, and make
              adjustments as needed.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 lg:py-16">
          <div className="my-auto p-10">
            <h3 className="my-auto text-2xl py-5">
              5: Collaborative Partnership Approach
            </h3>
            <p className="text-gray-500">
              A collaborative partnership approach is a way of working together
              that involves two or more organizations working together to
              achieve a common goal. This approach is based on the idea that by
              working together, organizations can achieve more than they could
              on their own.
            </p>
          </div>

          <Image src={collab} className="" />
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
