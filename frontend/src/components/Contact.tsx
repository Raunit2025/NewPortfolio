import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000); // Reset after 5 seconds
      } else {
        setStatus("error");
        setErrorMessage("Failed to send message. Please try again later.");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
      setErrorMessage("An error occurred. Please check your connection.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      {" "}
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left Column: Text & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
              Let's build something <br className="hidden lg:block" />
              <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                extraordinary.
              </span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Whether you have a groundbreaking idea, a question about my work,
              or just want to connect, my inbox is always open. Let's make it
              happen.
            </p>

            {/* Mini Social Dock */}
            <div className="flex justify-center lg:justify-start items-center gap-4">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mr-2 hidden sm:block">
                Connect
              </p>
              {[
                {
                  icon: <FaGithub />,
                  link: "https://github.com/raunit2025",
                  hoverColor:
                    "hover:text-white hover:border-white hover:bg-white/10",
                },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/raunitraj/",
                  hoverColor:
                    "hover:text-blue-400 hover:border-blue-400 hover:bg-blue-400/10",
                },
                {
                  icon: <FaXTwitter />,
                  link: "https://x.com/Raunitraj_01",
                  hoverColor:
                    "hover:text-white hover:border-white hover:bg-white/10",
                },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 flex items-center justify-center text-xl text-slate-400 bg-slate-900/50 backdrop-blur-md rounded-full border border-white/10 transition-all duration-300 ${social.hoverColor}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Glass Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-slate-900/50 backdrop-blur-2xl p-8 md:p-10 rounded-4xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden"
            >
              {/* Form Highlight Glow */}
              <div className="absolute top-0 left-1/4 right-1/4 h-px bg-linear-to-r from-transparent via-cyan-400/50 to-transparent" />

              <div className="space-y-6">
                <div className="relative group">
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === "sending"}
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-slate-950/50 border border-white/5 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 disabled:opacity-50"
                  />
                </div>

                <div className="relative group">
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === "sending"}
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-slate-950/50 border border-white/5 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 disabled:opacity-50"
                  />
                </div>

                <div className="relative group">
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    disabled={status === "sending"}
                    placeholder="Tell me about your project..."
                    className="w-full px-5 py-4 bg-slate-950/50 border border-white/5 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 resize-none disabled:opacity-50"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  whileHover={{
                    scale: status === "idle" || status === "error" ? 1.02 : 1,
                  }}
                  whileTap={{
                    scale: status === "idle" || status === "error" ? 0.98 : 1,
                  }}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                    status === "success"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : status === "error"
                        ? "bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30"
                        : "bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                  } disabled:cursor-not-allowed`}
                >
                  {status === "idle" && (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                  {status === "sending" && (
                    <>
                      <FaSpinner className="animate-spin" /> Sending...
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <FaCheckCircle /> Message Sent!
                    </>
                  )}
                  {status === "error" && <>Try Again</>}
                </motion.button>

                {/* Error Message Display */}
                {status === "error" && (
                  <p className="text-red-400 text-sm text-center mt-2 font-medium">
                    {errorMessage}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
