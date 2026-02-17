import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaHome, FaUser, FaCode, FaProjectDiagram, FaCertificate, FaGraduationCap, FaEnvelope } from 'react-icons/fa';

const commands = [
  { name: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }), icon: <FaHome/> },
  { name: 'About', action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), icon: <FaUser/> },
  { name: 'Skills', action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }), icon: <FaCode/> },
  { name: 'Projects', action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), icon: <FaProjectDiagram/> },
  { name: 'Certificates', action: () => document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' }), icon: <FaCertificate/> },
  { name: 'Education', action: () => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' }), icon: <FaGraduationCap/> },
  { name: 'Contact', action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), icon: <FaEnvelope/> },
];

const CommandPalette = ({ setIsOpen }) => {
  const [input, setInput] = useState('');

  const filteredCommands = useMemo(() => {
    return input === ''
      ? commands
      : commands.filter(c => c.name.toLowerCase().includes(input.toLowerCase()));
  }, [input]);

  const executeCommand = useCallback((command) => {
    command.action();
    setIsOpen(false);
  }, [setIsOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
      if (e.key === 'Enter' && filteredCommands.length > 0) {
        e.preventDefault();
        executeCommand(filteredCommands[0]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredCommands, setIsOpen, executeCommand]);

  return (
    <motion.div
      className="command-palette-overlay flex items-start justify-center pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsOpen(false)}
    >
      <motion.div
        className="w-full max-w-lg bg-slate-800 rounded-lg shadow-2xl overflow-hidden"
        initial={{ scale: 0.95, y: -20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: -20 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-4 p-4 border-b border-slate-700">
          <FaSearch className="text-slate-400" />
          <input
            type="text"
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command or search..."
            className="w-full bg-transparent text-slate-200 focus:outline-none"
          />
        </div>
        <ul className="max-h-80 overflow-y-auto">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((command) => (
              <li
                key={command.name}
                className="flex items-center gap-4 p-4 hover:bg-blue-500/20 cursor-pointer transition-colors"
                onClick={() => executeCommand(command)}
              >
                <span className="text-slate-400">{command.icon}</span>
                <span>{command.name}</span>
              </li>
            ))
          ) : (
            <li className="p-4 text-slate-500">No results found.</li>
          )}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default CommandPalette;