import { BookOpen, ChevronLeft, Terminal } from "lucide-react";
import BlogCard from "../blog-card";

const RenderBlogsPage = () => (
  <section className="py-20 min-h-screen">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center justify-between mb-12">
        <button 
          onClick={() => setCurrentPage('home')}
          className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Portfolio</span>
        </button>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent flex items-center">
          <BookOpen className="mr-3" /> Technical Blog
        </h2>
        <div></div> {/* Spacer */}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <BlogCard key={blog.id} blog={blog} index={index} />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <div className="inline-flex items-center space-x-2 bg-gray-800 px-6 py-3 rounded-full border border-gray-700">
          <Terminal className="w-5 h-5 text-green-400" />
          <span>More articles coming soon...</span>
        </div>
      </div>
    </div>
  </section>
);

export default RenderBlogsPage