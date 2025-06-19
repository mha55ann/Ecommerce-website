import React from "react";

function Contact() {
  return (
    <div className="bg-[#e9ebee] min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
          Contact Us
        </h1>

        <p className="text-gray-600 mb-8 text-center text-lg">
          We'd love to hear from you! Whether you have a question about products, pricing, or anything else — our team is ready to answer all your questions.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-500"
              placeholder="Your Message..."
              rows="5"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-semibold"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center text-gray-600">
          Call us: <span className="font-medium text-gray-800">+92 123 4567890</span> <br />
          Email: <span className="font-medium text-gray-800">support@exclusive.com</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
