import { BookOpen, Calendar, Clock } from "lucide-react";

const BlogCard = ({ blog, index }) => (
  <div 
    className={`bg-gray-800 rounded-lg p-6 border border-gray-700 transition-all duration-300 hover:border-green-400 cursor-pointer ${
      isVisible.blogs ? 'animate-fade-in-up' : 'opacity-0'
    }`}
    style={{ animationDelay: `${index * 200}ms` }}
    onClick={() => {
      setSelectedBlog(blog);
      setCurrentPage('blog-details');
    }}
  >
    <div className="flex items-start mb-4">
      <div className="bg-gray-700 p-2 rounded-lg mr-4">
        <BookOpen className="w-6 h-6 text-green-400" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{blog.title}</h3>
        <p className="text-gray-400">{blog.excerpt}</p>
      </div>
    </div>
    <div className="flex flex-wrap gap-2 mt-4">
      {blog.tags.map((tag, i) => (
        <span key={i} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
          {tag}
        </span>
      ))}
    </div>
    <div className="flex items-center justify-between mt-4 text-gray-500 text-sm">
      <div className="flex items-center">
        <Calendar className="w-4 h-4 mr-1" />
        <span>{blog.date}</span>
      </div>
      <div className="flex items-center">
        <Clock className="w-4 h-4 mr-1" />
        <span>{blog.readTime}</span>
      </div>
    </div>
  </div>
);

export default BlogCard