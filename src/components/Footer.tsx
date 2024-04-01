import React from 'react';

interface FooterProps {
  onBudgetClick: () => void; // Function to handle Budget link click
  onMyInventoryClick: () => void; // Function to handle MyInventory link click
}

function Footer({ onBudgetClick, onMyInventoryClick }: FooterProps): JSX.Element {
  const footerLinks: { title: string; onClick: () => void }[] = [
    { title: 'Budget', onClick: onBudgetClick },
    { title: 'MyInventory', onClick: onMyInventoryClick },
    { title: 'Tips', onClick: () => {} }, // Placeholder for Coming Soon link
  ];

  return (
    <footer className="w-full bg-gray-200 py-4">
      <div className="container mx-auto flex justify-evenly">
        {footerLinks.map((link, index) => (
          <button key={index} onClick={link.onClick} className="text-gray-800 hover:text-gray-600">
            {link.title}
          </button>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
