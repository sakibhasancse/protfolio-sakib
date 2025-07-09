import { ChevronDown, Github, Linkedin, Mail, MapPin, Code, Database, Cloud, TestTube, ArrowRight, Terminal, Server, Zap, Cpu, Network, GitBranch, GitCommit, GitPullRequest, HardDrive, Codesandbox, CpuIcon, BookOpen, ChevronLeft, Calendar, Clock, User, ArrowUpRight, Command, CornerDownLeft, Layers, Wifi } from 'lucide-react';
const RenderBlogDetails = () => (
  <section className="py-20 min-h-screen">
    <div className="max-w-4xl mx-auto px-4">
      <button 
        onClick={() => setCurrentPage('blogs')}
        className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors mb-8"
      >
        <ChevronLeft className="w-5 h-5" />
        <span>Back to Blog</span>
      </button>
      
      <div className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">{selectedBlog.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{selectedBlog.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>{selectedBlog.readTime}</span>
            </div>
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              <span>Sakib Hasan</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {selectedBlog.tags.map((tag, i) => (
              <span key={i} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="prose prose-invert max-w-none">
          {selectedBlog.content.split('\n').map((paragraph, i) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={i} className="text-2xl font-bold text-white mt-8 mb-4">{paragraph.substring(3)}</h2>;
            } else if (paragraph.startsWith('### ')) {
              return <h3 key={i} className="text-xl font-bold text-white mt-6 mb-3">{paragraph.substring(4)}</h3>;
            } else if (paragraph.startsWith('```')) {
              // Extract code block
              const codeStart = selectedBlog.content.indexOf('```', i) + 3;
              const codeEnd = selectedBlog.content.indexOf('```', codeStart);
              const codeContent = selectedBlog.content.substring(codeStart, codeEnd);
              
              return (
                <pre key={i} className="bg-gray-900 p-4 rounded-lg overflow-x-auto my-4">
                  <code className="font-mono text-sm">{codeContent}</code>
                </pre>
              );
            } else {
              return <p key={i} className="text-gray-300 leading-relaxed mb-4">{paragraph}</p>;
            }
          })}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Share this article</h3>
          <div className="flex space-x-4">
            <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors">
              <Linkedin className="text-cyan-400" />
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors">
              <Github className="text-white" />
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors">
              <Mail className="text-green-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default RenderBlogDetails