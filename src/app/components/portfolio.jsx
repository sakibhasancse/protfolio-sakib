"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Code, Database, Cloud, TestTube, ArrowRight, Terminal, Server, Zap, Cpu, Network, GitBranch, GitCommit, GitPullRequest, HardDrive, Codesandbox, CpuIcon, BookOpen, ChevronLeft, Calendar, Clock, User, ArrowUpRight, Command, CornerDownLeft, Layers, Wifi } from 'lucide-react';
import Footer from './footer';
import ProjectCard from './project-card';
import BlogCard from './blog-card';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeSection, setActiveSection] = useState('hero');
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [command, setCommand] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedBlog, setSelectedBlog] = useState(null);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Initial terminal greeting
    setTerminalOutput([
      { text: 'Welcome to Sakib\'s Portfolio', type: 'system' },
      { text: 'Type "help" to see available commands', type: 'system' }
    ]);
  }, []);

  useEffect(() => {
    // Scroll to bottom of terminal when output updates
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalOutput]);


  const projects = [
    {
      title: "Microservices Architecture Platform",
      description: "Built a scalable microservices platform using Node.js, Express.js, and AWS services. Implemented event-driven architecture with SQS/SNS for inter-service communication.",
      tech: ["Node.js", "Express.js", "AWS", "Docker", "Redis"],
      highlight: "Serverless"
    },
    {
      title: "GraphQL API Gateway",
      description: "Developed a unified GraphQL API gateway using Nest.js to aggregate multiple REST services. Implemented real-time subscriptions and advanced caching strategies.",
      tech: ["Nest.js", "GraphQL", "PostgreSQL", "Redis", "Docker"],
      highlight: "GraphQL"
    },
    {
      title: "E-commerce Backend System",
      description: "Created a high-performance e-commerce backend with TypeScript, handling 10k+ concurrent users. Implemented advanced search, payment processing, and inventory management.",
      tech: ["TypeScript", "MongoDB", "Express.js", "AWS", "Jest"],
      highlight: "High Performance"
    }
  ];

  const blogs = [
    {
      id: 1,
      title: "Building Scalable Microservices with Node.js",
      excerpt: "Learn how to design and implement microservices that can handle millions of requests per day using Node.js and Docker.",
      content: `## Building Scalable Microservices with Node.js

In today's cloud-native world, microservices architecture has become the standard for building scalable applications. As a backend developer, I've designed and implemented numerous microservices systems that handle millions of requests per day.

### Key Principles for Scalable Microservices

1. **Decoupled Architecture**: Each service should have a single responsibility and be independently deployable.
2. **Event-Driven Communication**: Use message brokers like Kafka or RabbitMQ for inter-service communication.
3. **Containerization**: Docker provides consistency across development, testing, and production environments.
4. **Stateless Design**: Services should be stateless to enable horizontal scaling.

### Implementation with Node.js

Node.js is perfect for microservices due to its:
- Asynchronous, non-blocking I/O model
- Lightweight nature
- Rich ecosystem of libraries

Here's a basic Express.js microservice:

\`\`\`javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Simple health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

// Core service endpoint
app.get('/api/data', async (req, res) => {
  try {
    const data = await fetchDataFromDatabase();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(\`Service running on port \${PORT}\`);
});
\`\`\`

### Deployment Strategies

- **Kubernetes**: Orchestrate container deployments
- **Serverless**: Use AWS Lambda for event-driven services
- **Service Mesh**: Implement Istio for advanced traffic management

By following these patterns, you can build microservices that scale horizontally to handle any load.`,
      date: "2025-06-15",
      readTime: "8 min read",
      tags: ["Node.js", "Microservices", "Docker", "AWS"]
    },
    {
      id: 2,
      title: "Mastering GraphQL for API Development",
      excerpt: "Advanced techniques for building efficient GraphQL APIs with Node.js and Apollo Server.",
      content: `## Mastering GraphQL for API Development

GraphQL has revolutionized API development by providing clients with the power to request exactly what they need. As a backend developer specializing in API design, I've implemented GraphQL in several large-scale projects.

### Why GraphQL?

- **Efficient Data Fetching**: Clients request only the data they need
- **Strong Typing**: Schema serves as contract between client and server
- **Real-time Updates**: Subscriptions for live data
- **Versionless APIs**: Evolve your API without versioning

### Advanced GraphQL Techniques

**1. Schema Stitching**

Combine multiple GraphQL APIs into a single unified schema:

\`\`\`javascript
const { stitchSchemas } = require('@graphql-tools/stitch');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const userSchema = makeExecutableSchema({
  typeDefs: /* ... */,
  resolvers: /* ... */
});

const productSchema = makeExecutableSchema({
  typeDefs: /* ... */,
  resolvers: /* ... */
});

const gatewaySchema = stitchSchemas({
  subschemas: [userSchema, productSchema]
});
\`\`\`

**2. Performance Optimization**

- **DataLoader**: Batch and cache database requests
- **Persisted Queries**: Pre-compile queries on the server
- **Caching Strategies**: Implement Redis caching for frequent queries

**3. Security Best Practices**

- Query depth limiting
- Cost analysis
- Authentication with JWT

### Real-world Implementation

In a recent e-commerce project, we reduced API payload size by 60% and improved response times by 45% by migrating from REST to GraphQL.`,
      date: "2025-05-22",
      readTime: "10 min read",
      tags: ["GraphQL", "API", "Node.js", "Performance"]
    },
    {
      id: 3,
      title: "Serverless Architectures on AWS",
      excerpt: "Building cost-effective, scalable applications using AWS Lambda and serverless patterns.",
      content: `## Serverless Architectures on AWS

Serverless computing has transformed how we build and deploy applications. By abstracting infrastructure management, developers can focus on writing business logic.

### Core AWS Serverless Services

- **AWS Lambda**: Execute code without provisioning servers
- **API Gateway**: Create and manage APIs
- **DynamoDB**: Fully managed NoSQL database
- **S3**: Scalable object storage
- **SQS/SNS**: Messaging services for decoupled architectures

### Serverless Patterns

**1. Event-Driven Processing**

\`\`\`
S3 Upload → Lambda → Process Image → Store in DynamoDB
\`\`\`

**2. API Backend**

\`\`\`
API Gateway → Lambda → DynamoDB
\`\`\`

**3. Batch Processing**

\`\`\`
Scheduled Event → Lambda → Process Batch → Store Results
\`\`\`

### Cost Optimization

- **Memory Tuning**: Right-size Lambda memory allocations
- **Cold Start Mitigation**: Use provisioned concurrency
- **Efficient Logging**: Filter unnecessary logs to reduce costs

### Implementation Example

Deploying a Lambda function with the Serverless Framework:

\`\`\`yaml
# serverless.yml
service: image-processor

provider:
  name: aws
  runtime: nodejs18.x
  region: us-east-1

functions:
  processImage:
    handler: handler.process
    events:
      - s3:
          bucket: my-image-bucket
          event: s3:ObjectCreated:*
\`\`\`

\`\`\`javascript
// handler.js
const AWS = require('aws-sdk');
const sharp = require('sharp');

exports.process = async (event) => {
  const s3 = new AWS.S3();
  const record = event.Records[0].s3;
  
  const image = await s3.getObject({
    Bucket: record.bucket.name,
    Key: record.object.key
  }).promise();
  
  const resized = await sharp(image.Body)
    .resize(800)
    .toBuffer();
  
  await s3.putObject({
    Bucket: 'processed-images',
    Key: record.object.key,
    Body: resized
  }).promise();
};
\`\`\`

Serverless architectures enable rapid development while maintaining scalability and reducing operational overhead.`,
      date: "2025-04-10",
      readTime: "12 min read",
      tags: ["Serverless", "AWS", "Lambda", "Architecture"]
    }
  ];

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = command.trim().toLowerCase();
      setTerminalOutput(prev => [
        ...prev,
        { text: `$ ${command}`, type: 'command' }
      ]);
      
      switch(cmd) {
        case 'help':
          setTerminalOutput(prev => [
            ...prev,
            { text: 'Available commands:', type: 'system' },
            { text: '  about - Show about section', type: 'system' },
            { text: '  projects - Show featured projects', type: 'system' },
            { text: '  blogs - Show technical blog posts', type: 'system' },
            { text: '  contact - Show contact information', type: 'system' },
            { text: '  clear - Clear terminal', type: 'system' }
          ]);
          break;
        case 'about':
          document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
          setTerminalOutput(prev => [
            ...prev,
            { text: 'Navigating to About section...', type: 'system' }
          ]);
          break;
        case 'projects':
          document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
          setTerminalOutput(prev => [
            ...prev,
            { text: 'Navigating to Projects section...', type: 'system' }
          ]);
          break;
        case 'blogs':
          setCurrentPage('blogs');
          setTerminalOutput(prev => [
            ...prev,
            { text: 'Opening blog repository...', type: 'system' }
          ]);
          break;
        case 'contact':
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
          setTerminalOutput(prev => [
            ...prev,
            { text: 'Navigating to Contact section...', type: 'system' }
          ]);
          break;
        case 'clear':
          setTerminalOutput([]);
          break;
        case '':
          // Do nothing for empty command
          break;
        default:
          setTerminalOutput(prev => [
            ...prev,
            { text: `Command not found: ${cmd}`, type: 'error' },
            { text: 'Type "help" for available commands', type: 'system' }
          ]);
      }
      
      setCommand('');
    }
  };


  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Server Room Grid Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/0 to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-gray-900/0 to-gray-900"></div>
      </div>
      
      {/* Navigation */}
      {/* <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent flex items-center"
            >
              <Terminal className="mr-2" />
              sakib@portfolio:~$
            </button>
            <div className="hidden md:flex space-x-8">
              {['About', 'Projects', 'Blogs', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item === 'Blogs') {
                      setCurrentPage('blogs');
                    } else {
                      setCurrentPage('home');
                      document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`hover:text-green-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-green-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav> */}

      {/* Main Content */}
  
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-cyan-900/10" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 w-full">
          <div className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden">
            <div className="bg-gray-900 border-b border-gray-700 px-4 py-2 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-gray-400 text-sm ml-4">bash - sakib@portfolio</div>
            </div>
            
            <div 
              ref={terminalRef}
              className="terminal-content h-96 overflow-y-auto p-4 font-mono text-sm"
            >
              {terminalOutput.map((item, index) => (
                <div 
                  key={index} 
                  className={`mb-1 ${item.type === 'command' ? 'text-green-400' : item.type === 'error' ? 'text-red-400' : 'text-cyan-400'}`}
                >
                  {item.text}
                </div>
              ))}
              
              <div className="flex items-center">
                <span className="text-green-400 mr-2">sakib@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  onKeyDown={handleCommand}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="bg-transparent outline-none flex-1 text-white caret-green-500"
                  autoFocus
                />
                {isFocused && <span className="ml-1 animate-pulse">|</span>}
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full">
              <Server className="w-5 h-5 text-green-400" />
              <span className="text-sm">Backend Expert</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full">
              <Cloud className="w-5 h-5 text-cyan-400" />
              <span className="text-sm">Cloud Architect</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">Performance Optimizer</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent flex justify-center items-center">
              <Code className="mr-3" /> About Me
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-lg p-6 mb-8">
                <div className="flex items-start mb-6">
                  <div className="bg-gray-700 p-3 rounded-lg mr-4">
                    <Cpu className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Backend Architecture</h3>
                    <p className="text-gray-300">
                      I design and implement robust backend systems using modern JavaScript ecosystems.
                      My expertise includes creating scalable microservices, API gateways, and event-driven architectures.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-700 p-3 rounded-lg mr-4">
                    <Network className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Cloud Infrastructure</h3>
                    <p className="text-gray-300">
                      I architect and deploy solutions on AWS, leveraging services like SQS, SNS, Lambda, and EC2
                      to build resilient and scalable cloud-native applications.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate senior backend-focused full stack developer with expertise in building scalable, 
                  high-performance applications. My journey spans across modern JavaScript ecosystems, cloud architectures, 
                  and cutting-edge development practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent flex justify-center items-center">
            <Codesandbox className="mr-3" /> Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="#contact" className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
              <span>Let's Build Something Amazing</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent flex justify-center items-center">
            <BookOpen className="mr-3" /> Technical Insights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => setCurrentPage('blogs')}
              className="inline-flex items-center space-x-2 border border-gray-700 hover:border-green-400 px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105"
            >
              <span>Explore All Articles</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent flex justify-center items-center">
              <Mail className="mr-3" /> Let's Connect
            </h2>
            
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <div className="text-center mb-8">
                <p className="text-lg text-gray-300 mb-6">
                  Ready to build something exceptional together? I'm always open to discussing new opportunities, 
                  innovative projects, and technical challenges.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="mailto:sakib@example.com" className="flex flex-col items-center bg-gray-800 hover:bg-gray-750 p-6 rounded-lg transition-all transform hover:scale-105 border border-gray-700">
                  <Mail className="w-10 h-10 text-green-400 mb-3" />
                  <span className="font-semibold">Email Me</span>
                  <span className="text-gray-400 text-sm mt-1">sakib@example.com</span>
                </a>
                
                <a href="https://linkedin.com/in/sakib-hasan" className="flex flex-col items-center bg-gray-800 hover:bg-gray-750 p-6 rounded-lg transition-all transform hover:scale-105 border border-gray-700">
                  <Linkedin className="w-10 h-10 text-cyan-400 mb-3" />
                  <span className="font-semibold">LinkedIn</span>
                  <span className="text-gray-400 text-sm mt-1">/in/sakib-hasan</span>
                </a>
                
                <a href="https://github.com/sakib-hasan" className="flex flex-col items-center bg-gray-800 hover:bg-gray-750 p-6 rounded-lg transition-all transform hover:scale-105 border border-gray-700">
                  <Github className="w-10 h-10 text-white mb-3" />
                  <span className="font-semibold">GitHub</span>
                  <span className="text-gray-400 text-sm mt-1">@sakib-hasan</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
     <Footer/>
    </div>
  );
};

export default Portfolio;