import { motion } from 'framer-motion';

const CodingStats = () => {
  // IMPORTANT: Replace these with your actual usernames
  const GITHUB_USERNAME = 'raunit2025';
  const LEETCODE_USERNAME = 'raunitraj2336';

  const stats = [
    {
      title: 'GitHub Stats',
      imageUrl: `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=slateorange&hide_border=true&bg_color=0f172a`,
      link: `https://github.com/${GITHUB_USERNAME}`
    },
    {
      title: 'Top Languages',
      imageUrl: `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=slateorange&hide_border=true&bg_color=0f172a`,
      link: `https://github.com/${GITHUB_USERNAME}`
    },
    {
      title: 'LeetCode Stats',
      imageUrl: `https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=Poppins&ext=heatmap`,
      link: `https://leetcode.com/${LEETCODE_USERNAME}`
    }
  ];

  return (
    <section id="stats" className="py-20">
      <div className="text-center mb-12">
        <div className="relative inline-block">
          <h2 className="text-4xl font-bold text-center font-heading">
            Live <span className="text-blue-500">Coding Stats</span>
          </h2>
          <motion.div
            className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-blue-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 container mx-auto items-start">
        {/* LeetCode card gets its own column on large screens */}
        <motion.a 
          href={stats[2].link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="lg:col-span-1 block"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img src={stats[2].imageUrl} alt={stats[2].title} className="w-full h-auto rounded-lg shadow-lg border border-slate-700" />
        </motion.a>
        
        {/* GitHub cards are stacked in the other column */}
        <div className="lg:col-span-1 flex flex-col gap-8">
          <motion.a 
            href={stats[0].link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src={stats[0].imageUrl} alt={stats[0].title} className="w-full h-auto rounded-lg shadow-lg border border-slate-700" />
          </motion.a>
          <motion.a 
            href={stats[1].link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src={stats[1].imageUrl} alt={stats[1].title} className="w-full h-auto rounded-lg shadow-lg border border-slate-700" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CodingStats;