"use client";
import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userEmail, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [sending, setSending] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (companyUrl) return;
    const trimmedPhone = phoneNumber.replace(/\D/g, "");
    if (username.trim() === "") {
      setErrMsg("Name is required!");
    } else if (phoneNumber.trim() === "") {
      setErrMsg("Phone number is required!");
    } else if (trimmedPhone.length < 10 || trimmedPhone.length > 13) {
      setErrMsg("A valid phone number is required!");
    } else if (userEmail.trim() === "") {
      setErrMsg("Email is required!");
    } else if (subject.trim() === "") {
      setErrMsg("Subject is required!");
    } else if (message.trim() === "") {
      setErrMsg("Message is required!");
    } else {
      setSending(true);
      const Sendmessage = `Name: ${username}\nEmail: ${userEmail}\nPhone: ${phoneNumber}\n\n${message}`;
      try {
        const response = await fetch("/.netlify/functions/sendMail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ subject, message: Sendmessage }),
        });
        if (!response.ok) {
          setErrMsg("Message sending failed. Please email me directly.");
        } else {
          setSuccessMsg(
            `Thank you ${username}, your message has been sent successfully.`,
          );
          setTimeout(() => {
            setSuccessMsg("");
          }, 3000);
        }
        if (!response.ok) {
          setTimeout(() => {
            setErrMsg("");
          }, 2000);
        } else {
          setErrMsg("");
          setUsername("");
          setPhoneNumber("");
          setEmail("");
          setSubject("");
          setMessage("");
        }
      } catch (error) {
        setErrMsg("Message sending failed. Please email me directly.");
        setTimeout(() => {
          setErrMsg("");
        }, 2000);
      } finally {
        setSending(false);
      }
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b border-white/10 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute left-[-8%] top-6 text-[5rem] md:text-[8rem] font-titleFont font-bold text-white/5 tracking-[0.2em]">
        Contact
      </div>
      <div className="flex justify-center items-center text-center">
        <Title title="Get In Touch" des="Contact Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-8">
          <ContactLeft />
          <div className="premium-card contact-panel w-full lgl:w-[60%] h-full py-10 flex flex-col gap-8 p-4 lgl:p-8 rounded-lg">
            <div className="premium-card-line" aria-hidden="true" />
            <form
              className="relative z-10 w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
              method="POST"
              onSubmit={submitHandler}
            >
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company-url">Company URL</label>
                <input
                  id="company-url"
                  name="company-url"
                  tabIndex={-1}
                  autoComplete="off"
                  value={companyUrl}
                  onChange={(e) => setCompanyUrl(e.target.value)}
                />
              </div>
              <div aria-live="polite">
                {errMsg && (
                  <p className="py-3 glass-card text-center text-orange-400 text-base tracking-wide">
                    {errMsg}
                  </p>
                )}
                {successMsg && (
                  <p className="py-3 glass-card text-center text-green-400 text-base tracking-wide">
                    {successMsg}
                  </p>
                )}
              </div>
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <label htmlFor="contact-name" className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    name="name"
                    autoComplete="name"
                    required
                    className={`${
                      errMsg === "Name is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <label htmlFor="contact-phone" className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    name="phone"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="tel"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="contact-email" className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </label>
                <input
                  id="contact-email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={userEmail}
                  name="email"
                  autoComplete="email"
                  required
                  className={`${
                    errMsg === "Email is required!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="contact-subject" className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  name="subject"
                  required
                  className={`${
                    errMsg === "Subject is required!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="contact-message" className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  value={message}
                  required
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  disabled={sending}
                  className="premium-submit w-full h-12 rounded-lg text-base tracking-wider uppercase duration-300"
                >
                  {sending ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
