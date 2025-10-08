import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Toast } from "../Toast";
import { Linkedin, Mail, Github } from "lucide-react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
  };

  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        showToast("Message sent successfully! 🎉 ", "success");
        setFormData({ name: "", email: "", message: "" });
        setShowThankYou(true);

        setTimeout(() => setShowThankYou(false), 8000);
      })
      .catch(() => {
        showToast("Oops! Something went wrong.", "error");
      });
  };

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <RevealOnScroll>
          <div className="px-4 w-full mx-auto">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent text-center">
              Get In Touch
            </h2>

            <p className="text-gray-400 text-sm mb-8 inline-flex items-center justify-center gap-2 flex-wrap">
              Drop me a message below or Connect with me on
              <a
                href="https://www.linkedin.com/in/jenied-sayago/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-lg hover:bg-purple-500/10 hover:border-purple-500 transition-all hover:-translate-y-0.5"
              >
                <Linkedin className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300 font-medium">LinkedIn</span>
              </a>
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
                  placeholder="Name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
                  placeholder="example@gmail.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
                  placeholder="Your message..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Send Message
              </button>
            </form>
            {showThankYou && (
              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-center animate-slide-in">
                <p className="text-green-400 font-medium">
                  ✨ Thank you for reaching out!
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  I'll get back to you as soon as possible.
                </p>
              </div>
            )}
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
};
