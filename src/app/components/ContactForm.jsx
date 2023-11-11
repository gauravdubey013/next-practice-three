"use client";

import styles from "@/app/contact/contact.module.css";
import { Mulish } from "next/font/google";
import { useState } from "react";
import { submitContact } from "../../app/contact/actions";

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const ContactForm = () => {
  // const [user, setUser] = useState({
  //   username: "",
  //   email: "",
  //   countyCode: "",
  //   phone: "",
  //   message: "",
  // });

  const [status, setStatus] = useState(null);

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;

  //   setUser((prevUser) => ({ ...prevUser, [name]: value }));
  //   console.log(value);
  // };

  const handlSubmit = async (formData) => {
    // e.preventDefault();
    try {
      // const response = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { Content_Type: "application/json" },
      //   body: JSON.stringify({
      //     username: user.username,
      //     email: user.email,
      //     countyCode: user.countyCode,
      //     phone: user.phone,
      //     message: user.message,
      //   }),
      // }); // Set the status based on the response from the API route

      const response = await submitContact({
        username: formData.get("username"),
        email: formData.get("email"),
        countryCode: formData.get("countryCode"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      });

      if (response.status === 200) {
        // setUser({
        //   username: "",
        //   email: "",
        //   countyCode: "",
        //   phone: "",
        //   message: "",
        // });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className={styles.contact_form} action={handlSubmit}>
      <div className={styles.input_field}>
        <label htmlFor="username">
          <input
            type="text"
            name="username"
            id="username"
            // value={user.username}
            // onChange={handleChange}
            placeholder="Enter ur username..."
            className={mulish.className}
            autoComplete="off"
            required
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            // value={user.email}
            // onChange={handleChange}
            placeholder="Enter ur e-mail..."
            className={mulish.className}
            autoComplete="off"
            required
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <div className={styles.disp}>
          <div className={styles.county_code}>
            <label htmlFor="country-code">
              <input
                type="text"
                name="countryCode"
                id="countryCode"
                // value={user.countyCode}
                // onChange={handleChange}
                placeholder="+91"
                className={mulish.className}
                autoComplete="off"
                required
              />
            </label>
          </div>
          <div className={styles.phone_num}>
            <label htmlFor="phone">
              <input
                type="number"
                step="0.01"
                name="phone"
                id="phone"
                // value={user.phone}
                // onChange={handleChange}
                placeholder="Enter ur mobile no..."
                className={mulish.className}
                autoComplete="off"
                required
              />
            </label>
          </div>
        </div>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="username">
          <textarea
            // type="text"
            rows={5}
            name="message"
            id="message"
            // value={user.message}
            // onChange={handleChange}
            placeholder="Enter ur message..."
            className={mulish.className}
            autoComplete="off"
            required
          />
        </label>
      </div>

      <div>
        {status === "success" && (
          <p className={styles.success_msg}>Thank you for your message!</p>
        )}
        {status === "error" && (
          <p className={styles.error_msg}>
            There was an error submitting your message. Please try again.
          </p>
        )}

        <button type="submit" className={mulish.className}>
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
