import { useRef, useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loadingToast = toast.loading("Sending email...");

    try {
      const result = await emailjs.sendForm(
        "service_2cyio7g",
        "template_8dql5oc",
        form.current,
        "SxdwSk86UnEdRmFda"
      );

      console.log(result.text);
      toast.success("Successfully sent email!", { id: loadingToast });
    } catch (error) {
      console.log(error.text);
      toast.error("Error sending email", { id: loadingToast });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="Contact_me" className="py-3">
      <h2 className="my-8 text-3xl font-semibold text-center underline underline-offset-8">
        Contact Us
      </h2>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 px-5 md:px-16">
          <h2 className="text-lg font-semibold">Get in Touch</h2>
          <p>
            Have something to say? Or any kind of thing you want to tell use
            then fell free to tell us.
          </p>
          <p className="flex items-center gap-2">
            <FiMapPin className="text-2xl" /> Feni, Bangladesh
          </p>
          <p className="flex items-center gap-2">
            <MdOutlineEmail className="text-2xl" />
            khanapina1992@gmail.com
          </p>
        </div>
        <form className="flex-1 px-5" ref={form} onSubmit={sendEmail}>
          <div className="flex gap-2 flex-col md:flex-row">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="user name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="user email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <textarea
            name="message"
            className="textarea textarea-bordered w-full mt-4"
            placeholder="message..."
          ></textarea>
          <button
            className={`bg-green-500 text-white font-semibold py-2 px-6 rounded-lg ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
