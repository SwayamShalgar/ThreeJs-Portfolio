const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/SwayamShalgar"  className="w-1/2 h-1/2" >
          <img src="/assets/github.svg" alt="github"/>
          </a>
        </div>
        <div className="social-icon">
        <a href="https://www.linkedin.com/in/swayam-shalgar-0365a9252/"  className="w-1/2 h-1/2" >
          <img src="/assets/Linkedins.png" alt="linkedin"/>
        </a>
        </div>
      </div>

      <p className="text-white-500">© 2025 Swayam Shalgar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
