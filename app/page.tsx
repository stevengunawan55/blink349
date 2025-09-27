"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Ensure GSAP and plugins are loaded
    if (typeof window !== "undefined" && window.gsap) {
      gsap.registerPlugin(ScrollTrigger, SplitText);

      // Pre-loader Animation
      const preloaderText = new SplitText("#preloader-text", { type: "chars" });
      const preloaderTL = gsap.timeline();

      preloaderTL
        .from(preloaderText.chars, {
          opacity: 0,
          y: 20,
          ease: "power3.out",
          stagger: 0.05,
        })
        .to("#preloader", {
          duration: 1.5,
          opacity: 0,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set("#preloader", { display: "none" });
          },
        }, "+=1")
        .from("header", {
            autoAlpha: 0, // handles both visibility and opacity
            duration: 1,
            ease: "power3.inOut"
        }, "-=1")
        .add(() => {
          // Hero Section Animations
          const heroHeadline = new SplitText("#hero-headline", { type: "words" });
          gsap.from(heroHeadline.words, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            stagger: 0.1,
          });

          gsap.from(["#hero-subheading", "#hero-cta"], {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
            delay: 0.5, // Delay to start after headline
          });

          // Ken Burns effect on the hero background image placeholder
          gsap.to("header .absolute.inset-0", {
            scale: 1.1,
            duration: 15,
            ease: "linear",
            repeat: -1,
            yoyo: true,
          });
        });

      // Portfolio Section Animations
      gsap.from(".portfolio-card", {
        scrollTrigger: {
          trigger: "#portfolio",
          start: "top 80%", // When the top of the trigger hits 80% of the viewport height
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 100,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });

      const portfolioCards = gsap.utils.toArray(".portfolio-card");
      portfolioCards.forEach((card) => {
        const image = card.querySelector(".portfolio-image");
        const tl = gsap.timeline({ paused: true });

        tl.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" })
          .to(image, { filter: "grayscale(0) brightness(1)", duration: 0.3, ease: "power2.out" }, 0);

        card.addEventListener("mouseenter", () => tl.play());
        card.addEventListener("mouseleave", () => tl.reverse());
      });

      // Business Story Section
      const storyTL = gsap.timeline({
        scrollTrigger: {
          trigger: "#story",
          start: "top 80%",
          toggleActions: "play none none none",
        }
      });

      storyTL.from("#story-image", {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }).from("#story-content", {
        x: 200,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "<0.2") // Start 0.2s after the previous animation begins
      .from(".story-paragraph", {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.5"); // Overlap with the content animation

      // Pricing Section Animations
      gsap.from(".pricing-card", {
        scrollTrigger: {
          trigger: "#pricing",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        scale: 0.9,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "elastic.out(1, 0.75)",
      });

      // Gentle pulse for the popular card
      gsap.to(".popular-card", {
        scale: 1.02,
        boxShadow: "0 10px 30px -5px rgba(44, 62, 80, 0.3)",
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut",
      });

      const pricingCards = gsap.utils.toArray(".pricing-card");
      pricingCards.forEach((card) => {
        const tl = gsap.timeline({ paused: true, defaults: { duration: 0.3, ease: "power2.out" } });

        tl.to(card, {
          scale: card.classList.contains('popular-card') ? 1.05 : 1.03, // Slightly more scale for popular
          y: -10,
          boxShadow: "0 15px 30px -5px rgba(44, 62, 80, 0.2)"
        });

        card.addEventListener("mouseenter", () => tl.play());
        card.addEventListener("mouseleave", () => tl.reverse());
      });

      // Footer Animation
      gsap.from(".footer-content", {
        scrollTrigger: {
          trigger: "footer",
          start: "top 95%", // When the top of the footer is 95% from the top of the viewport
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <>
      {/* Pre-loader */}
      <div id="preloader" className="fixed inset-0 bg-newsprint z-50 flex items-center justify-center">
        <h1 id="preloader-text" className="font-merriweather text-4xl text-dark-text">The Wedding Post</h1>
      </div>

      <div className="bg-newsprint text-dark-text font-lato">
        {/* Hero Section */}
        <header className="relative text-center py-40 px-8 text-white bg-accent-navy invisible">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-accent-navy opacity-50"></div>
        <div className="relative z-10">
          <h1 id="hero-headline" className="font-merriweather text-5xl md:text-7xl font-bold">Announce Your Union, Brilliantly.</h1>
          <p id="hero-subheading" className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Crafting timeless digital wedding invitations with the elegance of classic print. Your love story deserves a beautiful headline.
          </p>
          <a
            id="hero-cta"
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
              <div className="group portfolio-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="overflow-hidden">
                  <div className="bg-gray-300 h-64 w-full group-hover:scale-110 transition-transform duration-500 portfolio-image filter grayscale brightness-75"></div>
                </div>
                <div className="p-6 bg-white">
                  <p className="font-bold text-lg">The Carter & Lee Nuptials - Oct 12, 2026</p>
                  <p className="text-gray-600">Art Deco Elegance</p>
                </div>
              </div>
              {/* Edition 2 */}
              <div className="group portfolio-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="overflow-hidden">
                  <div className="bg-gray-300 h-64 w-full group-hover:scale-110 transition-transform duration-500 portfolio-image filter grayscale brightness-75"></div>
                </div>
                <div className="p-6 bg-white">
                  <p className="font-bold text-lg">The Rodriguez & Chen Wedding - Dec 08, 2025</p>
                  <p className="text-gray-600">Minimalist Modern</p>
                </div>
              </div>
              {/* Edition 3 */}
              <div className="group portfolio-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="overflow-hidden">
                  <div className="bg-gray-300 h-64 w-full group-hover:scale-110 transition-transform duration-500 portfolio-image filter grayscale brightness-75"></div>
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
        <section id="story" className="bg-white py-20 px-8 overflow-x-hidden">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div id="story-image" className="bg-gray-300 h-96 w-full rounded-lg shadow-lg"></div>
            <div id="story-content">
              <h2 className="text-4xl font-merriweather font-bold mb-4">The Story Behind The Press</h2>
              <div className="border-t border-gray-300 w-24 my-4"></div>
              <p className="story-paragraph text-lg leading-relaxed text-gray-700">
                Founded by a graphic designer with a love for typography and a writer who believed every romance is a headline-worthy story, Close Invitation was born.
              </p>
              <p className="story-paragraph text-lg leading-relaxed text-gray-700 mt-4">
                We saw a world of fleeting digital messages and longed to bring back the intentionality and charm of print.
              </p>
              <p className="story-paragraph text-lg leading-relaxed text-gray-700 mt-4">
                Our mission is to blend timeless journalistic design with modern convenience, creating a first impression for your wedding that is as enduring and beautiful as your love story.
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
              <div className="pricing-card border border-gray-200 rounded-lg p-8 text-center flex flex-col">
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
              <div className="pricing-card popular-card border-2 border-accent-red rounded-lg p-8 text-center flex flex-col relative">
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
              <div className="pricing-card border border-gray-200 rounded-lg p-8 text-center flex flex-col">
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
        <div className="container mx-auto grid md:grid-cols-4 gap-8 footer-content">
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
        <div className="text-center border-t border-gray-700 mt-12 pt-8 footer-content">
          <p>© 2025 Close Invitation. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}