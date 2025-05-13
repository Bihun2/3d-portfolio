
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
        </div>
        <div className="socials" style={{ display: 'flex', gap: 16 }}>
          <a href="https://www.linkedin.com/in/hasif-aslam-84b7b9305/" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/linkedin.png"
              alt="LinkedIn logo"
              style={{ width: 48, height: 48 }}
            />
          </a>
          <a href="https://wa.me/60175095708" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/whatsapp.png"
              alt="WhatsApp logo"
              style={{ width: 48, height: 48 }}
            />
          </a>
        </div>
        <div className="flex flex-col justify-center">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
