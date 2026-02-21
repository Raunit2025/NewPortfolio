import { motion } from 'framer-motion';

const CodingStats = () => {
  const GITHUB_USERNAME = 'raunit2025';
  const LEETCODE_USERNAME = 'raunitraj2336';

  const stats = [
    {
      title: 'GitHub Stats',
      imageUrl: `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&title_color=3b82f6&icon_color=3b82f6&text_color=e2e8f0&bg_color=0f172a&hide_border=true`,
      link: `https://github.com/${GITHUB_USERNAME}`
    },
    {
      title: 'Top Languages',
      imageUrl: `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&title_color=3b82f6&text_color=e2e8f0&bg_color=0f172a&hide_border=true`,
      link: `https://github.com/${GITHUB_USERNAME}`
    },
    {
      title: 'LeetCode Stats',
      imageUrl: `https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=Poppins&ext=heatmap`,
      link: `https://leetcode.com/u/${LEETCODE_USERNAME}`
    },
    {
      title: 'GitHub Contribution Graph',
      imageUrl: `https://ghchart.rshah.org/2025/${GITHUB_USERNAME}`,
      link: `https://github.com/${GITHUB_USERNAME}`
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const StatCard = ({ item, delay = 0, className = "" }) => (
    <motion.a 
      href={item.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`block bg-slate-800/50 backdrop-blur-lg rounded-lg p-4 border border-slate-300/10 shadow-lg group transition-all duration-300 ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 0 25px -5px rgba(59, 130, 246, 0.4), 0 8px 10px -6px rgba(59, 130, 246, 0.2)" 
      }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <img 
        src={item.imageUrl} 
        alt={item.title} 
        className="w-full h-auto rounded-md" 
      />
    </motion.a>
  );

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

      <div className="container mx-auto flex flex-col gap-8">
        {/* Top row of stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StatCard item={stats[0]} />
          <StatCard item={stats[1]} delay={0.2} />
          <div className="md:col-span-2 lg:col-span-1">
            <StatCard item={stats[2]} delay={0.4} />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CodingStats;