import React from 'react';

interface FooterLink {
  title: string;
  url: string;
}

function Footer(): JSX.Element {
  const footerLinks: FooterLink[] = [
    { title: 'Link 1', url: '#' },
    { title: 'Link 2', url: '#' },
    { title: 'Link 3', url: '#' },
  ];

  return (
    <footer className="w-full bg-gray-200 py-4">
      <div className="container mx-auto flex justify-evenly">
        {footerLinks.map((link, index) => (
          <a key={index} href={link.url} className="text-gray-800 hover:text-gray-600">
            {link.title}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
