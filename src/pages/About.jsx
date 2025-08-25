import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="w-full pt-[calc(14rem)] flex flex-col items-center text-gray-800">
      {/* Hero Section */}
      <section className="w-full bg-pink-100 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Story: Where Comfort Meets Elegance</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We started LUNA Fashion with one simple goal – to create pants that make women feel confident, comfortable, and stylish in every moment of their lives.
        </p>
      </section>

      {/* Brand Story Section */}
      <section className="max-w-5xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Journey</h2>
          <p className="mb-4">
            From university days to busy work schedules, we believe every woman deserves pants that combine elegance with true comfort. That’s why our collections are designed to adapt to your lifestyle – without compromise.
          </p>
          <p>
            Every piece is thoughtfully crafted with high-quality fabrics to ensure long-lasting wear, because we know fashion should feel as good as it looks.
          </p>
        </div>
        <img
          src="/image/womenPantslifestyle.jpg"
          alt="Lifestyle"
          className="rounded-2xl shadow-md"
        />
      </section>

      {/* Values Section */}
      <section className="w-full bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Values</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Quality</h3>
            <p>Premium fabrics that last and feel amazing.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Comfort</h3>
            <p>Designed for all-day wear without sacrifice.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Confidence</h3>
            <p>Styles that empower women to feel their best.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Style</h3>
            <p>Trendy and timeless pieces for every occasion.</p>
          </div>
        </div>
      </section>

      {/* Human Touch Section */}
      <section className="max-w-4xl px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
        <p>
          We’re a small but passionate team that believes fashion should be about more than just looks – it should make you feel good inside and out. Every collection is inspired by real women, for real women.
        </p>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-pink-200 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Discover Our Collection</h2>
        <p className="mb-6 text-lg">
          Step into comfort and style today with our exclusive range of women’s pants.
        </p>
        <Link
          to="/products"
          className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-pink-700 transition"
        >
          Shop Now
        </Link>
      </section>
    </div>
  );
}
