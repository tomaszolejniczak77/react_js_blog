const Footer = () => {
  const today = new Date();

  return <div className="Footer">Tomasz Olejniczak®{today.getFullYear()}</div>;
};

export default Footer;
