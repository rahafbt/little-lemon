import littleLemonLogo from '../assets/Logo.svg';

const Footer = () => {
  return (
    <footer>
      <img src={littleLemonLogo} className="logo" alt="Little Lemon Logo" />
      <div>
        <h4>Doormat Navigation</h4>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
            <li><a href="/">Adress</a></li>
            <li><a href="/">Phone Number</a></li>
            <li><a href="/">Email</a></li>
        </ul>
      </div>
      <div>
        <h4>Social Media Links</h4>
        <ul>
            <li><a href="/">Facebook</a></li>
            <li><a href="/">Instagram</a></li>
            <li><a href="/">Tiktok</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;