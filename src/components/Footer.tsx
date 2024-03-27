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
      <footer>
        {footerLinks.map((link, index) => (
          <a key={index} href={link.url}>
            {link.title}
          </a>
        ))}
      </footer>
    );
  }

  export default Footer;