
function About() {
  return (
    <div className="bg-[#e9ebee] py-12 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#4f39f6] mb-6 text-center">
          About Us
        </h1>

        <div className="bg-white shadow-xl rounded-xl p-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Welcome to{" "}
            <span className="font-semibold text-[#4f39f6]">YourStore</span> —
            your one-stop shop for high-quality products at unbeatable prices.
            Our mission is to make online shopping effortless, affordable, and
            enjoyable.
          </p>

          <h2 className="text-2xl font-semibold text-[#4f39f6] mb-2">
            Who We Are
          </h2>
          <p className="text-gray-700 mb-6">
            We are a passionate team of developers, designers, and entrepreneurs
            committed to delivering top-notch products and an excellent customer
            experience. Whether you're browsing the latest gadgets or looking
            for fashion essentials, we've got you covered.
          </p>

          <h2 className="text-2xl font-semibold text-[#4f39f6] mb-2">
            What We Offer
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Curated selection of trending products</li>
            <li>Fast and reliable delivery</li>
            <li>Secure checkout and multiple payment options</li>
            <li>Customer support that actually listens</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#4f39f6] mb-2">
            Our Vision
          </h2>
          <p className="text-gray-700 mb-6">
            To become a trusted name in e-commerce by continuously improving our
            product quality, services, and user experience.
          </p>

          <div className="text-center">
            <p className="text-[#4f39f6] font-semibold">
              Thank you for choosing YourStore. Happy Shopping!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
