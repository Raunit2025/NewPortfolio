const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto text-center text-gray-400">
        <p>&copy; {currentYear} Raunit Raj. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;