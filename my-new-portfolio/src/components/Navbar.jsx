const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        <a href="#hero" className="text-xl font-bold">Raunit Raj</a>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#skills" className="hover:text-gray-400">Skills</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;