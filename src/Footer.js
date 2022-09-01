const Footer = () => {
  const today = new Date();
  return (
    <footer className="Footer">
      <p>
        Developed by <a href="http://www.aikidevs.com">AikiDevs</a>{" "}
        {today.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
