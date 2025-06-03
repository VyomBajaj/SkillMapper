import React from 'react';
import { TrendingUp, Users, ArrowRight, Star, Briefcase, Code, Palette, BarChart3 } from 'lucide-react';

const trendingRoles = [
  {
    id: "ai-engineer",
    name: "AI/ML Engineer",
    description: "Build and deploy machine learning models, work with neural networks, and develop AI-powered applications.",
    popularity: 95,
    growth: "+45%",
    icon: <Code className="h-6 w-6" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "full-stack-developer",
    name: "Full Stack Developer",
    description: "Master both frontend and backend development to build complete web applications from scratch.",
    popularity: 88,
    growth: "+32%",
    icon: <Briefcase className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "ux-designer",
    name: "UX/UI Designer",
    description: "Create intuitive user experiences and beautiful interfaces that users love to interact with.",
    popularity: 82,
    growth: "+28%",
    icon: <Palette className="h-6 w-6" />,
    color: "from-green-500 to-teal-500",
  },
];

const otherRoles = [
  {
    id: "data-scientist",
    name: "Data Scientist",
    description: "Analyze complex data to extract insights and build predictive models for business decisions.",
    icon: <BarChart3 className="h-5 w-5" />,
    skills: ["Python", "SQL", "Statistics", "Machine Learning"],
  },
  {
    id: "devops-engineer",
    name: "DevOps Engineer",
    description: "Bridge development and operations to automate deployment and manage cloud infrastructure.",
    icon: <Code className="h-5 w-5" />,
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
  },
  {
    id: "product-manager",
    name: "Product Manager",
    description: "Lead product strategy and work with cross-functional teams to deliver successful products.",
    icon: <Users className="h-5 w-5" />,
    skills: ["Strategy", "Analytics", "Communication", "Leadership"],
  },
  {
    id: "cybersecurity-specialist",
    name: "Cybersecurity Specialist",
    description: "Protect organizations from cyber threats and ensure data security and compliance.",
    icon: <Briefcase className="h-5 w-5" />,
    skills: ["Network Security", "Penetration Testing", "Risk Assessment", "Compliance"],
  },
  {
    id: "mobile-developer",
    name: "Mobile Developer",
    description: "Build native and cross-platform mobile applications for iOS and Android devices.",
    icon: <Code className="h-5 w-5" />,
    skills: ["React Native", "Swift", "Kotlin", "Flutter"],
  },
  {
    id: "blockchain-developer",
    name: "Blockchain Developer",
    description: "Develop decentralized applications and smart contracts on various blockchain platforms.",
    icon: <Code className="h-5 w-5" />,
    skills: ["Solidity", "Web3", "Smart Contracts", "DeFi"],
  },
];

// Custom Components
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

const Button = ({ children, variant = "default", size = "default", className = "", onClick, ...props }) => {
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
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

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

// Trending Role Card Component
const TrendingRoleCard = ({ role, onViewRoadmap }) => {
  return (
    <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-5`} />
      <CardHeader className="relative">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-gradient-to-br ${role.color} text-white`}>
              {role.icon}
            </div>
            <div>
              <CardTitle className="text-xl font-bold">{role.name}</CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {role.growth}
                </Badge>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-semibold">{role.popularity}</span>
            </div>
            <p className="text-xs text-gray-500">popularity</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm leading-relaxed mb-4">
          {role.description}
        </CardDescription>
        <Button 
          className="w-full group" 
          onClick={() => onViewRoadmap(role.id)}
        >
          View Roadmap
          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

// Job Role Card Component
const JobRoleCard = ({ role, onLearnMore }) => {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gray-100 text-gray-600">
            {role.icon}
          </div>
          <div>
            <CardTitle className="text-lg font-semibold">{role.name}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-sm leading-relaxed">
          {role.description}
        </CardDescription>

        <div className="flex flex-wrap gap-1">
          {role.skills.map((skill, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>

        <Button 
          variant="outline" 
          className="w-full group"
          onClick={() => onLearnMore(role.id)}
        >
          Learn More
          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

// Main Landing Page Component
const LandingPage = () => {
  const handleViewRoadmap = (roleId) => {
    // Navigate to role detail page
    console.log(`Navigate to roadmap for: ${roleId}`);
    // In a real app, you would use React Router or Next.js router
    // Example: navigate(`/role/${roleId}`);
  };

  const handleLearnMore = (roleId) => {
    // Navigate to role detail page
    console.log(`Learn more about: ${roleId}`);
    // In a real app, you would use React Router or Next.js router
    // Example: navigate(`/role/${roleId}`);
  };

  const handleCompleteProfile = () => {
    // Navigate to profile page
    console.log('Navigate to profile completion');
    // In a real app, you would use React Router or Next.js router
    // Example: navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CareerRoadmap
            </h1>
            <Button variant="outline">Sign In</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Journey to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Success</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover personalized learning paths for the most in-demand tech careers. Start your journey today with
            expert-curated roadmaps.
          </p>
        </div>
      </section>

      {/* Trending Roles Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">🔥 Trending Career Paths</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The most sought-after roles in tech right now. High demand, great salaries, and exciting opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingRoles.map((role, index) => (
              <TrendingRoleCard 
                key={index} 
                role={role} 
                onViewRoadmap={handleViewRoadmap}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Other Job Roles Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Other Career Paths</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore more career opportunities across different domains and find your perfect match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherRoles.map((role, index) => (
              <JobRoleCard 
                key={index} 
                role={role} 
                onLearnMore={handleLearnMore}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want a Personalised Roadmap?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a customized learning path based on your skills, interests, and career goals. Take our assessment to
            unlock your personalized journey.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
            onClick={handleCompleteProfile}
          >
            Complete Your Profile
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-2xl font-bold mb-4">CareerRoadmap</h4>
          <p className="text-gray-400 mb-6">Empowering careers through structured learning paths</p>
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;