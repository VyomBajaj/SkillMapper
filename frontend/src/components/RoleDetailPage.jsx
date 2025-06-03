import React, { useState } from 'react';
import { ArrowLeft, Clock, Users, DollarSign, TrendingUp, BookOpen, Code, ExternalLink, Play, FileText, Youtube, Globe, Check } from 'lucide-react';

const roleDetails = {
  name: "Full Stack Developer",
  description: "Master both frontend and backend development to build complete web applications from database to user interface.",
  salary: "$80k - $150k",
  demand: "High",
  growth: "+32%",
  timeToLearn: "6-10 months",
  overview: "Full Stack Developers are versatile professionals who can work on both client-side and server-side development. They have the skills to build complete web applications from scratch, handling everything from user interfaces to databases and server logic.",
  roadmap: [
    {
      id: 1,
      phase: "Foundation",
      title: "Web Development Fundamentals",
      duration: "4-6 weeks",
      difficulty: "Beginner",
      description: "Learn the building blocks of web development",
      topics: [
        "HTML5 semantic elements and structure",
        "CSS3 styling, flexbox, and grid",
        "JavaScript ES6+ fundamentals",
        "DOM manipulation and events",
        "Responsive web design principles",
        "Version control with Git",
      ],
      resources: [
        {
          type: "course",
          title: "HTML & CSS Crash Course",
          provider: "freeCodeCamp",
          url: "#",
          icon: <Youtube className="h-4 w-4" />,
        },
        {
          type: "documentation",
          title: "MDN Web Docs",
          provider: "Mozilla",
          url: "#",
          icon: <FileText className="h-4 w-4" />,
        },
        {
          type: "practice",
          title: "CSS Grid Garden",
          provider: "Interactive",
          url: "#",
          icon: <Play className="h-4 w-4" />,
        },
        {
          type: "book",
          title: "Eloquent JavaScript",
          provider: "Online Book",
          url: "#",
          icon: <BookOpen className="h-4 w-4" />,
        },
      ],
      projects: [
        {
          title: "Personal Portfolio Website",
          description: "Create a responsive portfolio showcasing your skills and projects",
          difficulty: "Beginner",
          duration: "1-2 weeks",
          skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        },
        {
          title: "Landing Page Clone",
          description: "Recreate a popular website's landing page to practice layout skills",
          difficulty: "Beginner",
          duration: "1 week",
          skills: ["HTML", "CSS", "Flexbox/Grid"],
        },
      ],
    },
    {
      id: 2,
      phase: "Frontend Mastery",
      title: "Modern Frontend Development",
      duration: "6-8 weeks",
      difficulty: "Intermediate",
      description: "Master modern frontend frameworks and tools",
      topics: [
        "React.js fundamentals and hooks",
        "Component-based architecture",
        "State management (Context API, Redux)",
        "React Router for navigation",
        "CSS frameworks (Tailwind CSS)",
        "Build tools (Vite, Webpack)",
      ],
      resources: [
        {
          type: "course",
          title: "React - The Complete Guide",
          provider: "Udemy",
          url: "#",
          icon: <Play className="h-4 w-4" />,
        },
        {
          type: "documentation",
          title: "React Official Docs",
          provider: "Meta",
          url: "#",
          icon: <FileText className="h-4 w-4" />,
        },
        {
          type: "tutorial",
          title: "React Tutorial",
          provider: "React.dev",
          url: "#",
          icon: <Code className="h-4 w-4" />,
        },
        {
          type: "practice",
          title: "React Challenges",
          provider: "Frontend Mentor",
          url: "#",
          icon: <Globe className="h-4 w-4" />,
        },
      ],
      projects: [
        {
          title: "Task Management App",
          description: "Build a todo app with CRUD operations and local storage",
          difficulty: "Intermediate",
          duration: "2-3 weeks",
          skills: ["React", "State Management", "Local Storage", "CSS"],
        },
        {
          title: "Weather Dashboard",
          description: "Create a weather app using external APIs with search functionality",
          difficulty: "Intermediate",
          duration: "2 weeks",
          skills: ["React", "API Integration", "Responsive Design"],
        },
      ],
    },
    {
      id: 3,
      phase: "Backend Development",
      title: "Server-Side Programming",
      duration: "6-8 weeks",
      difficulty: "Intermediate",
      description: "Learn backend development and server management",
      topics: [
        "Node.js and Express.js framework",
        "RESTful API design and development",
        "Database design and modeling",
        "MongoDB and Mongoose ODM",
        "Authentication and authorization",
        "Middleware and error handling",
      ],
      resources: [
        {
          type: "course",
          title: "Node.js Complete Course",
          provider: "Udemy",
          url: "#",
          icon: <Play className="h-4 w-4" />,
        },
        {
          type: "documentation",
          title: "Express.js Guide",
          provider: "Express",
          url: "#",
          icon: <FileText className="h-4 w-4" />,
        },
        {
          type: "tutorial",
          title: "MongoDB University",
          provider: "MongoDB",
          url: "#",
          icon: <Code className="h-4 w-4" />,
        },
        {
          type: "practice",
          title: "API Design Best Practices",
          provider: "REST API Tutorial",
          url: "#",
          icon: <Globe className="h-4 w-4" />,
        },
      ],
      projects: [
        {
          title: "Blog API Backend",
          description: "Create a RESTful API for a blog with user authentication",
          difficulty: "Intermediate",
          duration: "3-4 weeks",
          skills: ["Node.js", "Express", "MongoDB", "JWT Authentication"],
        },
        {
          title: "E-commerce API",
          description: "Build a complete e-commerce backend with payment integration",
          difficulty: "Advanced",
          duration: "4-5 weeks",
          skills: ["Node.js", "Database Design", "Payment APIs", "Security"],
        },
      ],
    },
    {
      id: 4,
      phase: "Database & DevOps",
      title: "Data Management & Deployment",
      duration: "4-6 weeks",
      difficulty: "Advanced",
      description: "Master database management and deployment strategies",
      topics: [
        "SQL databases (PostgreSQL)",
        "Database optimization and indexing",
        "Cloud platforms (AWS, Vercel, Netlify)",
        "Containerization with Docker",
        "CI/CD pipelines",
        "Monitoring and logging",
      ],
      resources: [
        {
          type: "course",
          title: "PostgreSQL Complete Course",
          provider: "Udemy",
          url: "#",
          icon: <Play className="h-4 w-4" />,
        },
        {
          type: "documentation",
          title: "AWS Documentation",
          provider: "Amazon",
          url: "#",
          icon: <FileText className="h-4 w-4" />,
        },
        {
          type: "tutorial",
          title: "Docker for Beginners",
          provider: "Docker",
          url: "#",
          icon: <Code className="h-4 w-4" />,
        },
        {
          type: "practice",
          title: "DevOps Roadmap",
          provider: "roadmap.sh",
          url: "#",
          icon: <Globe className="h-4 w-4" />,
        },
      ],
      projects: [
        {
          title: "Social Media Platform",
          description: "Build a full-stack social media app with real-time features",
          difficulty: "Advanced",
          duration: "6-8 weeks",
          skills: ["Full Stack", "Real-time Communication", "Database Design", "Deployment"],
        },
        {
          title: "Project Management Tool",
          description: "Create a comprehensive project management application",
          difficulty: "Advanced",
          duration: "8-10 weeks",
          skills: ["Full Stack", "Complex State Management", "File Uploads", "Team Collaboration"],
        },
      ],
    },
  ],
  skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "PostgreSQL", "Git", "AWS"],
  companies: ["Netflix", "Airbnb", "Spotify", "Stripe", "Shopify", "GitHub"],
};

// Custom Checkbox Component
const Checkbox = ({ checked, onChange, id, className = "" }) => {
  return (
    <div className="relative">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <label
        htmlFor={id}
        className={`flex items-center justify-center w-4 h-4 border-2 border-gray-300 rounded cursor-pointer transition-colors ${
          checked ? 'bg-blue-600 border-blue-600' : 'bg-white hover:border-blue-400'
        } ${className}`}
      >
        {checked && <Check className="w-3 h-3 text-white" />}
      </label>
    </div>
  );
};

// Custom Progress Bar Component
const ProgressBar = ({ value, className = "" }) => {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
      <div
        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      ></div>
    </div>
  );
};

// Custom Badge Component
const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800",
    outline: "border border-gray-300 bg-white text-gray-700"
  };
  
  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

// Custom Card Components
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`p-6 pb-4 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-semibold text-gray-900 ${className}`}>
    {children}
  </h3>
);

const CardDescription = ({ children, className = "" }) => (
  <p className={`text-sm text-gray-600 ${className}`}>
    {children}
  </p>
);

// Custom Button Component
const Button = ({ children, variant = "default", size = "default", className = "", ...props }) => {
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
  };
  
  const sizes = {
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };
  
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Custom Tabs Components
const Tabs = ({ children, defaultValue, value, onValueChange }) => {
  const [activeTab, setActiveTab] = useState(defaultValue || value);
  
  const handleTabChange = (newValue) => {
    setActiveTab(newValue);
    if (onValueChange) onValueChange(newValue);
  };
  
  return (
    <div className="w-full">
      {React.Children.map(children, child =>
        React.cloneElement(child, { activeTab, onTabChange: handleTabChange })
      )}
    </div>
  );
};

const TabsList = ({ children, activeTab, onTabChange, className = "" }) => (
  <div className={`inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500 ${className}`}>
    {React.Children.map(children, child =>
      React.cloneElement(child, { activeTab, onTabChange })
    )}
  </div>
);

const TabsTrigger = ({ children, value, activeTab, onTabChange, className = "" }) => (
  <button
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all ${
      activeTab === value
        ? 'bg-white text-gray-900 shadow-sm'
        : 'text-gray-600 hover:text-gray-900'
    } ${className}`}
    onClick={() => onTabChange(value)}
  >
    {children}
  </button>
);

const TabsContent = ({ children, value, activeTab, className = "" }) => {
  if (activeTab !== value) return null;
  
  return (
    <div className={`mt-2 ${className}`}>
      {children}
    </div>
  );
};

// Resource Card Component
const ResourceCard = ({ resource }) => {
  const getProviderColor = (provider) => {
    const colors = {
      freeCodeCamp: "text-green-600",
      Udemy: "text-purple-600",
      Coursera: "text-blue-600",
      YouTube: "text-red-600",
      Mozilla: "text-orange-600",
      Meta: "text-blue-500",
      default: "text-gray-600",
    };
    return colors[provider] || colors.default;
  };

  return (
    <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer">
      <div className="flex-shrink-0 text-gray-600 group-hover:text-gray-800">
        {resource.icon}
      </div>
      <div className="flex-grow min-w-0">
        <h4 className="font-medium text-gray-900 truncate">{resource.title}</h4>
        <p className={`text-sm ${getProviderColor(resource.provider)}`}>
          {resource.provider}
        </p>
      </div>
      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-gray-600 flex-shrink-0" />
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <Badge variant="outline" className="text-xs">
            {project.difficulty}
          </Badge>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock className="h-4 w-4" />
          {project.duration}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-gray-600">{project.description}</p>
        <div className="flex flex-wrap gap-1">
          {project.skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Roadmap Phase Component
const RoadmapPhase = ({ phase, isCompleted = false }) => {
  const [checkedTopics, setCheckedTopics] = useState({});
  const [checkedProjects, setCheckedProjects] = useState({});

  const handleTopicCheck = (topic) => {
    setCheckedTopics(prev => ({ ...prev, [topic]: !prev[topic] }));
  };

  const handleProjectCheck = (project) => {
    setCheckedProjects(prev => ({ ...prev, [project]: !prev[project] }));
  };

  const topicsCompleted = Object.values(checkedTopics).filter(Boolean).length;
  const totalTopics = phase.topics.length;
  const projectsCompleted = Object.values(checkedProjects).filter(Boolean).length;
  const totalProjects = phase.projects.length;
  const overallProgress = ((topicsCompleted + projectsCompleted) / (totalTopics + totalProjects)) * 100;

  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className={`h-8 w-8 rounded-full flex items-center justify-center text-white font-semibold ${
                isCompleted ? "bg-green-500" : "bg-blue-500"
              }`}>
                {phase.id}
              </div>
              <div>
                <CardTitle className="text-xl">{phase.title}</CardTitle>
                <div className="flex items-center gap-4 mt-1">
                  <Badge variant="outline">{phase.difficulty}</Badge>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {phase.duration}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-600">{phase.description}</p>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Overall Progress</span>
            <span>{Math.round(overallProgress)}%</span>
          </div>
          <ProgressBar value={overallProgress} className="h-2" />
        </div>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="topics" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="topics">
              Topics ({topicsCompleted}/{totalTopics})
            </TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="projects">
              Projects ({projectsCompleted}/{totalProjects})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="topics" className="mt-6">
            <div className="space-y-3">
              {phase.topics.map((topic, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                  <Checkbox
                    id={`topic-${phase.id}-${index}`}
                    checked={checkedTopics[topic] || false}
                    onChange={() => handleTopicCheck(topic)}
                  />
                  <label
                    htmlFor={`topic-${phase.id}-${index}`}
                    className={`text-sm cursor-pointer flex-grow ${
                      checkedTopics[topic] ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {topic}
                  </label>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {phase.resources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="projects" className="mt-6">
            <div className="space-y-4">
              {phase.projects.map((project, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id={`project-${phase.id}-${index}`}
                      checked={checkedProjects[project.title] || false}
                      onChange={() => handleProjectCheck(project.title)}
                    />
                    <label
                      htmlFor={`project-${phase.id}-${index}`}
                      className={`font-medium cursor-pointer ${
                        checkedProjects[project.title] ? "line-through text-gray-500" : ""
                      }`}
                    >
                      Mark as Complete
                    </label>
                  </div>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

// Main Component
const RoleDetailPage = () => {
  const role = roleDetails;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Career Paths
            </button>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CareerRoadmap
            </h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Role Overview */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{role.name} Roadmap</h1>
          <p className="text-xl text-gray-600 mb-6 max-w-4xl">{role.overview}</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <DollarSign className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">{role.salary}</p>
                <p className="text-sm text-gray-600">Average Salary</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">{role.growth}</p>
                <p className="text-sm text-gray-600">Job Growth</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">{role.demand}</p>
                <p className="text-sm text-gray-600">Market Demand</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">{role.timeToLearn}</p>
                <p className="text-sm text-gray-600">Time to Master</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Roadmap */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete Learning Path</h2>
              <p className="text-gray-600 mb-6">
                Follow this comprehensive roadmap to become a {role.name}. Each phase includes topics to learn,
                resources to study, and projects to build. Check off items as you complete them to track your progress.
              </p>
            </div>

            {role.roadmap.map((phase) => (
              <RoadmapPhase key={phase.id} phase={phase} isCompleted={false} />
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Essential Skills</CardTitle>
                <CardDescription>Master these technologies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="mb-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Companies */}
            <Card>
              <CardHeader>
                <CardTitle>Top Hiring Companies</CardTitle>
                <CardDescription>Where you could work</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {role.companies.map((company, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm">
                      <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                        {company.charAt(0)}
                      </div>
                      <span className="font-medium">{company}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Progress Summary */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Overall Completion</span>
                      <span>0%</span>
                    </div>
                    <ProgressBar value={0} className="h-2" />
                  </div>
                  <p className="text-sm text-blue-800">
                    Start checking off topics and projects to see your progress!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-green-900 mb-2">Ready to Start?</h4>
                <p className="text-sm text-green-700 mb-4">
                  Get personalized guidance and track your progress
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Start Learning Path
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleDetailPage;