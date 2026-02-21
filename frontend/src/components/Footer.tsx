const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 bg-slate-800">
      <div className="container mx-auto text-center text-slate-400">
        <p>&copy; {currentYear} Raunit Raj. All Rights Reserved.</p>
        <p className="text-sm mt-2">
          Built with <span className="text-blue-500">React</span> & <span className="text-blue-500">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;