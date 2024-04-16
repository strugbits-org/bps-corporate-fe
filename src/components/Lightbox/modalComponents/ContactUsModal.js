import React, { useEffect } from "react";
import ContactForm from "../../../common/ContactForm";
import ContactDetails from "../../commonComponents/ContactDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactUs } from "../../../redux/reducers/contatusData";
import { ModalWrapper } from "../ModalWrapper";

const ContactUsModal = () => {
  const dispatch = useDispatch();
  const contactusData = useSelector((state) => state.contactus.contactusData)[0];
  useEffect(() => {
    dispatch(fetchContactUs(false));
  }, [dispatch]);
  return (
    <ModalWrapper name={"modal-contact"}>
      <ContactForm data={contactusData?.data} />
      <ContactDetails contactusData={contactusData} />
    </ModalWrapper>
  );
};

export default ContactUsModal;
