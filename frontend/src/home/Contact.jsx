/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { KeyPaths, ImagePaths } from "../Paths";
import {
  Section,
  LordIcon,
  SmDiv,
  LgDiv,
  TitleDiv,
  SubTitleDiv,
  CardIconLink,
  CardIcon,
  CardImgOverlay,
  CardImgLeftHorizontal,
  CardImgRightHorizontal,
  CardImgButton,
} from "../components/Components";

const Contact = () => {
  return (
    <>
      <Section className="flex-column" style={{ height: "100vh" }}>
        <img
          src={ImagePaths.contact}
          alt={ImagePaths.contact}
          className="position-absolute z-n1 object-fit-cover"
        />

        <form
          onSubmit={onSubmit}
          className="contact-form w-100 h-100 d-flex flex-column justify-content-center align-items-center"
        >
          <LordIcon
            lordIconSrc={"https://cdn.lordicon.com/wzrwaorf.json"}
            lordIconClrs={"primary:#FFFFFF,secondary:#35aa90"}
            lordIconSize={5}
          />
          <TitleDiv className="text-light ff-bubblegum">Get in touch</TitleDiv>
          <SubTitleDiv className="text-light">
            We would love to hear from you
          </SubTitleDiv>

          <input
            className="mt-4 p-1 rounded-3 w-65 h-5 fs-lg"
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />
          <input
            className="mt-2 p-1 rounded-3 w-65 h-5 fs-lg"
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <textarea
            className="mt-2 rounded-3 p-1 w-65 fs-lg"
            name="message"
            placeholder="Message"
            required
          />
          <button
            className="contact-btn mt-2 py-1 w-65 btn btn-primary"
            type="submit"
          >
            <SubTitleDiv>Submit</SubTitleDiv>
          </button>
        </form>
      </Section>
    </>
  );
};

const onSubmit = async (event) => {
  event.preventDefault();
  const submitBtn = document.querySelector(".contact-btn");
  submitBtn.disabled = true;
  submitBtn.textContent = `Sending...`;

  const formData = new FormData(event.target);
  formData.append("access_key", `${KeyPaths.accessKey}`);

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  }).then((res) => res.json());

  if (res.success) {
    const form = document.querySelector(".contact-form");
    await form.reset();
    submitBtn.disabled = false;
    submitBtn.textContent = `Submit`;
    console.log("Success", res);
    return true;
  } else {
    const form = document.querySelector(".contact-form");
    await form.reset();
    submitBtn.disabled = false;
    submitBtn.textContent = `Submit`;
    console.log("Failed", res);
  }
};

export default Contact;
