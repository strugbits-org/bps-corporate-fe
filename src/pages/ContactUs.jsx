import ContactForm from "../common/ContactForm";
import video1 from "../utilis/images/lib/video.mp4#t=0.01";
import React, { useEffect, useState } from "react";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections, items } from "@wix/data";
import getFullVideoURL from "../common/common_functions/videoURL";

const ContactUs = () => {
  const [dataItems, setDataItems] = useState([]);
  const firstItem = dataItems[0];
  const title = firstItem ? firstItem.data.title : "";
  const description1  = firstItem ? firstItem.data.description1  : "";
  const description2  = firstItem ? firstItem.data.description2  : "";
  const copyrightText  = firstItem ? firstItem.data.copyrightText  : "";
  const bottomDescription  = firstItem ? firstItem.data.bottomDescription  : "";
  const backgroundVideo  = firstItem ? firstItem.data.backgroundVideo  : "";
  const backgroundVideo1  = firstItem ? getFullVideoURL(firstItem.data.backgroundVideo)  : "";

console.log(backgroundVideo,"video url here");
console.log(backgroundVideo1,"video url after here");
  useEffect(() => {
    async function fetchDataItems() {
      const wixClient = createClient({
        modules: { collections, items },
        auth: OAuthStrategy({
          clientId: "04038da0-732b-471d-babe-4e90ad785740",
        }),
      });

      let options = {
        dataCollectionId: "ContactUsContent",
      };

      const { items: fetchedItems } = await wixClient.items
        .queryDataItems(options)
        .eq("title", "Tried + True")
        .find();

      setDataItems(fetchedItems);
    }

    fetchDataItems();
  }, []);
  console.log(dataItems,"contact us data")
  return (
    <>
      <section className="contact-intro" data-aos="d:loop">
        <div className="container-fluid pos-relative z-5">
          <div className="row">
            <div className="col-lg-5 offset-lg-6 column-1">
              <h1
                className="fs--165 title-contact white-1 split-chars"
                data-aos="d:loop"
              >
                {title}
              </h1>
              <div className="container-text fs--25 lh-140 fs-tablet-18 white-1 mt-15">
                <p data-aos="fadeInUp .8s ease-out-cubic .8s, d:loop">
                 {description1}
                </p>
                <p
                  className="mt-lg-35 mt-mobile-15"
                  data-aos="fadeInUp .8s ease-out-cubic .9s, d:loop"
                >
                  {description2}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-img bg-img">
          <video
            data-src={video1}
            src={video1}
            data-preload
            autoPlay
            loop
            data-parallax-top
            data-translate-y="30rem"
            className="media"
            muted
            playsInline
          ></video>
        </div>
      </section>
      <section
        className="contact-footer bg-blue-1 pt-lg-85 pt-mobile-55 pb-lg-padding pb-tablet-15 pb-phone-padding-fluid"
        data-cursor-style="off"
        data-aos="d:loop, trigger:.contact-intro"
      >
        <div className="container-fluid">
          {/* contact form here.. */}
          <ContactForm />
          {/* contact form here.. */}
          <div className="row mt-135 no-mobile">
            <div className="col-lg-6">
              <p className="fs--14 font-2 white-1">
                {copyrightText}
              </p>
            </div>
            <div className="col-lg-6 flex-end">
              <p className="fs--14 font-2 white-1">
                {bottomDescription}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
