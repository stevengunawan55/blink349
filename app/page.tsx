import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-newsprint text-dark-text font-lato">
      {/* Hero Section */}
      <header className="relative text-center py-40 px-8 text-white bg-accent-navy">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-accent-navy opacity-50"></div>
        <div className="relative z-10">
          <h1 className="font-merriweather text-5xl md:text-7xl font-bold">Announce Your Union, Brilliantly.</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Crafting timeless digital wedding invitations with the elegance of classic print. Your love story deserves a beautiful headline.
          </p>
          <a
            href="#portfolio"
            className="mt-8 inline-block bg-accent-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            Browse Our Editions
          </a>
        </div>
      </header>

      <main>
        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 px-8">
          <div className="container mx-auto">
            <h2 className="text-4xl font-merriweather font-bold text-center mb-12">Featured Editions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Edition 1 */}
              <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="overflow-hidden">
                  <div className="bg-gray-300 h-64 w-full group-hover:scale-110 transition-transform duration-500"></div>
                </div>
                <div className="p-6 bg-white">
                  <p className="font-bold text-lg">The Carter & Lee Nuptials - Oct 12, 2026</p>
                  <p className="text-gray-600">Art Deco Elegance</p>
                </div>
              </div>
              {/* Edition 2 */}
              <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="overflow-hidden">
                  <div className="bg-gray-300 h-64 w-full group-hover:scale-110 transition-transform duration-500"></div>
                </div>
                <div className="p-6 bg-white">
                  <p className="font-bold text-lg">The Rodriguez & Chen Wedding - Dec 08, 2025</p>
                  <p className="text-gray-600">Minimalist Modern</p>
                </div>
              </div>
              {/* Edition 3 */}
              <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="overflow-hidden">
                  <div className="bg-gray-300 h-64 w-full group-hover:scale-110 transition-transform duration-500"></div>
                </div>
                <div className="p-6 bg-white">
                  <p className="font-bold text-lg">The Williams & Patel Union - Jun 21, 2026</p>
                  <p className="text-gray-600">Classic Serif Chronicle</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Story Section */}
        <section id="story" className="bg-white py-20 px-8">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-300 h-96 w-full rounded-lg shadow-lg"></div>
            <div>
              <h2 className="text-4xl font-merriweather font-bold mb-4">The Story Behind The Press</h2>
              <div className="border-t border-gray-300 w-24 my-4"></div>
              <p className="text-lg leading-relaxed text-gray-700">
                Founded by a graphic designer with a love for typography and a writer who believed every romance is a headline-worthy story, Close Invitation was born. We saw a world of fleeting digital messages and longed to bring back the intentionality and charm of print. Our mission is to blend timeless journalistic design with modern convenience, creating a first impression for your wedding that is as enduring and beautiful as your love story.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-8">
          <div className="container mx-auto">
            <h2 className="text-4xl font-merriweather font-bold text-center mb-12">Choose Your Publication</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Pricing Tier 1 */}
              <div className="border border-gray-200 rounded-lg p-8 text-center flex flex-col">
                <h3 className="text-2xl font-merriweather font-bold mb-4">The Classified</h3>
                <p className="text-5xl font-bold mb-4">$49</p>
                <ul className="text-left space-y-2 mb-8 flex-grow">
                  <li>✓ Choose from 10+ templates</li>
                  <li>✓ Guest list management</li>
                  <li>✓ Digital RSVP tracking</li>
                </ul>
                <a href="#" className="mt-auto bg-accent-navy hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-colors">Get Started</a>
              </div>
              {/* Pricing Tier 2 - Most Popular */}
              <div className="border-2 border-accent-red rounded-lg p-8 text-center flex flex-col relative shadow-xl">
                <p className="absolute top-0 -translate-y-1/2 bg-accent-red text-white font-bold py-1 px-4 rounded-full text-sm">Most Popular</p>
                <h3 className="text-2xl font-merriweather font-bold mb-4">The Feature Story</h3>
                <p className="text-5xl font-bold mb-4">$99</p>
                <ul className="text-left space-y-2 mb-8 flex-grow">
                  <li>✓ All 'Classified' features, plus:</li>
                  <li>✓ Choose from 30+ premium templates</li>
                  <li>✓ Custom color schemes</li>
                  <li>✓ Add a photo gallery</li>
                </ul>
                <a href="#" className="mt-auto bg-accent-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">Get Started</a>
              </div>
              {/* Pricing Tier 3 */}
              <div className="border border-gray-200 rounded-lg p-8 text-center flex flex-col">
                <h3 className="text-2xl font-merriweather font-bold mb-4">The Front Page</h3>
                <p className="text-5xl font-bold mb-4">$199</p>
                <ul className="text-left space-y-2 mb-8 flex-grow">
                  <li>✓ All 'Feature Story' features, plus:</li>
                  <li>✓ Fully bespoke design with our team</li>
                  <li>✓ Custom illustrations or monogram</li>
                  <li>✓ Personalized domain for 1 year</li>
                </ul>
                <a href="#" className="mt-auto bg-accent-navy hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-colors">Get Started</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-accent-navy text-white py-16 px-8">
        <div className="container mx-auto grid md:grid-cols-4 gap-8">
          {/* Column 1: Navigation */}
          <div>
            <h4 className="font-merriweather font-bold text-lg mb-4">Navigation</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
              <li className="mb-2"><a href="#portfolio" className="hover:underline">Editions</a></li>
              <li className="mb-2"><a href="#story" className="hover:underline">Our Story</a></li>
              <li className="mb-2"><a href="#pricing" className="hover:underline">Pricing</a></li>
            </ul>
          </div>

          {/* Column 2: Socials */}
          <div>
            <h4 className="font-merriweather font-bold text-lg mb-4">Socials</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Instagram</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Pinterest</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Facebook</a></li>
            </ul>
          </div>

          {/* Column 3: Subscribe */}
          <div className="md:col-span-2">
            <h4 className="font-merriweather font-bold text-lg mb-4">The Sunday Edition</h4>
            <p className="mb-4">Sign up for our newsletter for wedding tips and exclusive offers.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="w-full px-4 py-2 rounded-l-lg text-dark-text focus:outline-none"/>
              <button type="submit" className="bg-accent-red hover:bg-red-700 text-white font-bold py-2 px-6 rounded-r-lg transition-colors">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="text-center border-t border-gray-700 mt-12 pt-8">
          <p>© 2025 Close Invitation. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}