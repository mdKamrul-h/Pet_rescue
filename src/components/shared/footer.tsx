import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'About',
      links: [
        { name: 'Our Mission', href: '/about' },
        { name: 'Success Stories', href: '/success-stories' },
        { name: 'Contact Us', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Adoption Guide', href: '/adoption-guide' },
        { name: 'Pet Care Tips', href: '/pet-care' },
        { name: 'FAQs', href: '/faqs' },
      ],
    },
    {
      title: 'Get Involved',
      links: [
        { name: 'Become a Rescuer', href: '/become-rescuer' },
        { name: 'Volunteer', href: '/volunteer' },
        { name: 'Donate', href: '/donate' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-blue-600">Pet Rescue</h2>
            <p className="mt-4 text-sm text-gray-600">
              Connecting loving homes with pets in need. Making a difference, one adoption at a time.
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} Pet Rescue Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
