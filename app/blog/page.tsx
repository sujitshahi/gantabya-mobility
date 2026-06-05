'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      slug: 'future-of-evs-in-nepal',
      category: 'Industry',
      title: 'The Future of EVs in Nepal',
      description: 'How electric vehicles are reshaping transportation in the Himalayas.',
      date: 'Jan 15, 2024',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      image: 'https://images.unsplash.com/photo-1617704548623-340376564e68?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    },
    {
      id: 2,
      slug: '5-tips-for-battery-longevity',
      category: 'Tips',
      title: '5 Tips for Battery Longevity',
      description: "Maximize your electric motorcycle's battery life with expert tips.",
      date: 'Jan 15, 2025',
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      image: 'https://images.unsplash.com/photo-1600428235269-c326df6361fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      },
    {
      id: 3,
      slug: 'nepals-growing-charging-network',
      category: 'News',
      title: "Nepal's Growing Charging Network",
      description: 'New charging stations are making long-distance EV travel possible.',
      date: 'Feb 28, 2026',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      image: 'https://images.unsplash.com/photo-1671785291804-5e1286d29049?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      },
    {
      id: 4,
      slug: 'ev-riding-what-you-need-to-know',
      category: 'Tips',
      title: 'EV Riding: What You Need to Know',
      description: 'Mastering the slopes of Nepal on an electric motorcycle.',
      date: 'Jan 15, 2024',
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      image: 'https://images.unsplash.com/photo-1551288519-b5e4d0bca621?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0',
      },
    {
      id: 5,
      slug: 'gantabya-2025-year-in-review',
      category: 'Company',
      title: 'Gantabya 2025: Year in Review',
      description: "A look back at our biggest milestones and what's coming next.",
      date: 'Mar 8, 2026',
      color: 'text-orange-400',
      bg: 'bg-orange-500/10',
      image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0',
      },
    {
      id: 6,
      slug: 'how-much-co2-are-we-saving',
      category: 'News',
      title: 'How Much CO₂ Are We Saving?',
      description: 'Environmental impact of 5,000+ EV bikes in Nepal.',
      date: 'Jan 5, 2026',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=1200&auto=format&fit=crop',
      },
  ];

  return (
    <section className="py-20 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">
            Blog &<span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">  News</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
             Stay updated with the latest in electric vehicle technology, tips, and industry news
           </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id}>
              <article
                className="bg-[#111111] border border-gray-800 rounded-xl
                           hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.08)]
                          "
              >
                {/* Image Container */}
                <div className="relative w-full h-40 overflow-hidden bg-zinc-900">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
             
                {/* Content Container */}
                <div className="p-5 md:p-6 flex flex-col grow">
                  <div className="mb-3">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${post.bg} ${post.color}`}
                    >
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2 min-h-14">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm md:text-base mb-4 leading-relaxed line-clamp-3 min-h-18">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-800 mt-auto">
                    <div className="flex items-center text-gray-500 text-xs md:text-sm">
                      <svg
                        className="w-4 h-4 mr-1.5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {post.date}
                    </div>

                    <div className="text-green-400 text-sm md:text-base font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                      Read More
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href=""
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-green-500 
                       text-green-400 rounded-lg hover:bg-green-500/10 transition-all duration-300
                       font-medium group"
          >
            View All Articles
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;



