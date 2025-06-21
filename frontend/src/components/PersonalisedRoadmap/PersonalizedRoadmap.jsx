import { useState, useEffect, useRef } from "react"
import axios from "axios"

// Simple UI Components
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg border shadow-sm ${className}`}>{children}</div>
)

const CardHeader = ({ children, className = "", onClick }) => (
  <div className={`p-6 ${className}`} onClick={onClick}>
    {children}
  </div>
)

const CardContent = ({ children, className = "" }) => <div className={`p-6 pt-0 ${className}`}>{children}</div>

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`}>{children}</h3>
)

const Badge = ({ children, className = "", variant = "default" }) => {
  const variants = {
    default: "bg-gray-100 text-gray-900",
    outline: "border border-gray-200 bg-transparent text-gray-900",
  }

  return (
    <div
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  )
}

const Button = ({ children, className = "", variant = "default", size = "default", onClick, ...props }) => {
  const variants = {
    default: "bg-gray-900 text-gray-50 hover:bg-gray-900/90",
    outline: "border border-gray-200 bg-white hover:bg-gray-100",
    ghost: "hover:bg-gray-100",
  }

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3 text-sm",
  }

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

// Thin Progress Bar Component
const Progress = ({ value = 0, className = "" }) => (
  <div className={`relative h-1 w-full overflow-hidden rounded-full bg-gray-100 ${className}`}>
    <div
      className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
      style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
    />
  </div>
)

const Checkbox = ({ id, checked = false, onCheckedChange, className = "" }) => (
  <input
    type="checkbox"
    id={id}
    checked={checked}
    onChange={(e) => onCheckedChange && onCheckedChange(e.target.checked)}
    className={`h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 ${className}`}
  />
)

// Icons
const Icons = {
  BookOpen: () => (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  ),
  Clock: () => (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  ExternalLink: () => (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  ),
  Target: () => (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>
  ),
  TrendingUp: () => (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  CheckCircle2: () => (
    <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  Circle: () => (
    <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" strokeWidth={2} />
    </svg>
  ),
  ChevronDown: () => (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  ),
  CheckSquare: () => (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  BookMarked: () => (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  ),
  Video: () => (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  ),
  FileText: () => (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  ),
  Globe: () => (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  ),
  Code: () => (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  Sparkles: () => (
    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  ),
  BarChart3: () => (
    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  ),
}

// Custom hooks for scroll animations
const useScrollAnimation = (trigger) => {
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll("[data-animate]");
      elements.forEach((el) => observer.observe(el));
    }, 100); // Delay just enough to ensure DOM update

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [trigger]); // Rerun when data changes

  return visibleElements;
};


const AnimatedCounter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0
          const end = value
          const duration = 800
          const increment = end / (duration / 16)

          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  )
}

// Utility functions
const getResourceIcon = (type) => {
  switch (type.toLowerCase()) {
    case "course":
      return <Icons.Video />
    case "documentation":
      return <Icons.FileText />
    case "tutorial":
      return <Icons.Video />
    case "practice":
      return <Icons.Code />
    case "book":
      return <Icons.BookMarked />
    case "video":
      return <Icons.Video />
    default:
      return <Icons.Globe />
  }
}

const getDifficultyColor = (difficulty) => {
  switch (difficulty?.toLowerCase()) {
    case "beginner":
      return "bg-green-100 text-green-700 border-green-200"
    case "intermediate":
      return "bg-blue-100 text-blue-700 border-blue-200"
    case "advanced":
      return "bg-indigo-100 text-indigo-700 border-indigo-200"
    default:
      return "bg-gray-100 text-gray-700 border-gray-200"
  }
}

// Main Component
const PersonalizedRoadmap = () => {
  const [activeStep, setActiveStep] = useState(null)
  const [checkedTopics, setCheckedTopics] = useState({})
  const [scrollProgress, setScrollProgress] = useState(0)
  const [data,setData] = useState(null)
 const visibleElements = useScrollAnimation(data)

  

  useEffect(()=>{
    const fetchData = async()=>{
      const token = localStorage.getItem('authToken');
      const res = await axios.get('/api/personalisedRole/get-roadmap',
        {headers:{
          authToken:token
        }}
      )
      setData(res.data)
      console.log("Response data:", res.data);
    };
    fetchData()
  },[])

  // Initialize checked topics based on existing progress
  useEffect(() => {
  if (!data) return;

  const initialCheckedTopics = {}

  data.personalisedSteps.forEach((step, stepIndex) => {
    const stepKey = `step-${stepIndex}`
    const checkedCount = Math.floor(((step.progress || 0) / 100) * step.topicNames.length)
    initialCheckedTopics[stepKey] = new Set(step.topicNames.slice(0, checkedCount).map((topic) => topic.name))
  })

  const capstoneCheckedCount = Math.floor(
    ((data.capstoneProject.progress || 0) / 100) * data.capstoneProject.topicNames.length,
  )
  initialCheckedTopics["capstone"] = new Set(
    data.capstoneProject.topicNames.slice(0, capstoneCheckedCount).map((topic) => topic.name),
  )

  setCheckedTopics(initialCheckedTopics)
}, [data]) 


  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrolled / maxScroll) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleTopicCheck = (stepKey, topicName, checked) => {
    setCheckedTopics((prev) => {
      const newCheckedTopics = { ...prev }
      if (!newCheckedTopics[stepKey]) {
        newCheckedTopics[stepKey] = new Set()
      }

      if (checked) {
        newCheckedTopics[stepKey].add(topicName)
      } else {
        newCheckedTopics[stepKey].delete(topicName)
      }

      return newCheckedTopics
    })
  }
  if(!data){
    return <div>Loading data...</div>
  }

  const getStepProgress = (stepKey, totalTopics) => {
    const checkedCount = checkedTopics[stepKey]?.size || 0
    return Math.round((checkedCount / totalTopics) * 100)
  }

  const handleStepClick = (index) => {
    setActiveStep(activeStep === index ? null : index)
  }

  const calculateOverallProgress = () => {
    let totalTopics = 0
    let checkedCount = 0

    data.personalisedSteps.forEach((step, index) => {
      totalTopics += step.topicNames.length
      checkedCount += checkedTopics[`step-${index}`]?.size || 0
    })

    totalTopics += data.capstoneProject.topicNames.length
    checkedCount += checkedTopics["capstone"]?.size || 0

    return totalTopics > 0 ? Math.round((checkedCount / totalTopics) * 100) : 0
  }

  const overallProgress = calculateOverallProgress()

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-blue-50 via-white to-sky-50">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-blue-100 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-sky-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/3 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl relative z-10">
        {/* Hero Section */}
        <div
          id="hero"
          data-animate
          className={`mb-16 text-center transition-all duration-1000 ${
            visibleElements.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-sky-500/10 blur-3xl rounded-full" />
            <div className="relative bg-white/95 backdrop-blur-xl border border-blue-200/50 rounded-3xl p-8 mb-8 shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-sky-500 rounded-2xl shadow-lg">
                  <Icons.Sparkles />
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
                    Your Learning Roadmap
                  </h1>
                  <p className="text-xl text-gray-700 mt-2">{data.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">{data.description}</p>
            </div>
          </div>
        </div>

        {/* Stats Dashboard */}
        <div
          id="stats"
          data-animate
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${
            visibleElements.has("stats") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="bg-white/95 backdrop-blur-xl border-blue-200/50 hover:border-green-300 transition-all duration-300 group shadow-lg hover:shadow-xl">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icons.TrendingUp />
                </div>
                <div className="py-4"> 
                  <p className="text-sm text-gray-600">Target Salary</p>
                  <p className="text-xl font-bold text-gray-800">{data.salary}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-xl border-blue-200/50 hover:border-blue-300 transition-all duration-300 group shadow-lg hover:shadow-xl">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-sky-500 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icons.BarChart3 />
                </div>
                <div className="py-4">
                  <p className="text-sm text-gray-600">Progress</p>
                  <p className="text-xl font-bold text-gray-800">
                    <AnimatedCounter value={overallProgress} suffix="%" />
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-xl border-blue-200/50 hover:border-indigo-300 transition-all duration-300 group shadow-lg hover:shadow-xl">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icons.Clock />
                </div>
                <div className="py-4">
                  <p className="text-sm text-gray-600">Total Duration</p>
                  <p className="text-xl font-bold text-gray-800">
                    <AnimatedCounter value={13} /> weeks
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-xl border-blue-200/50 hover:border-cyan-300 transition-all duration-300 group shadow-lg hover:shadow-xl">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icons.Target />
                </div>
                <div className="py-4">
                  <p className="text-sm text-gray-600">Topics</p>
                  <p className="text-xl font-bold text-gray-800">
                    <AnimatedCounter
                      value={Object.values(checkedTopics).reduce((acc, topics) => acc + topics.size, 0)}
                    />
                    /
                    {data.personalisedSteps.reduce((acc, step) => acc + step.topicNames.length, 0) +
                      data.capstoneProject.topicNames.length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Overall Progress Section */}
        <div
          id="progress"
          data-animate
          className={`mb-16 transition-all duration-1000 delay-300 ${
            visibleElements.has("progress") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="bg-white/95 backdrop-blur-xl border-blue-200/50 shadow-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Learning Journey Progress</h3>
                <div className="text-right">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
                    {overallProgress}%
                  </div>
                  <div className="text-sm text-gray-600">Complete</div>
                </div>
              </div>
              <div className="relative">
                <Progress value={overallProgress} className="h-1 bg-blue-100" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full opacity-20 animate-pulse" />
              </div>
              <div className="flex justify-between mt-4 text-sm text-gray-600">
                <span>
                  {Object.values(checkedTopics).reduce((acc, topics) => acc + topics.size, 0)} topics completed
                </span>
                <span>
                  {data.personalisedSteps.reduce((acc, step) => acc + step.topicNames.length, 0) +
                    data.capstoneProject.topicNames.length -
                    Object.values(checkedTopics).reduce((acc, topics) => acc + topics.size, 0)}{" "}
                  remaining
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Skills */}
        <div
          id="skills"
          data-animate
          className={`mb-16 transition-all duration-1000 delay-500 ${
            visibleElements.has("skills") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="bg-white/95 backdrop-blur-xl border-blue-200/50 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-gray-800">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg shadow-lg">
                  <Icons.CheckCircle2 />
                </div>
                Current Skills Arsenal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {data.currentSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    className="bg-green-100 text-green-700 border-green-200 px-4 py-2 text-sm hover:bg-green-200 transition-colors duration-300 shadow-sm"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Path Timeline */}
        <div className="mb-16">
          <div
            id="timeline-header"
            data-animate
            className={`text-center mb-12 transition-all duration-1000 delay-600 ${
              visibleElements.has("timeline-header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
              <Icons.BookOpen />
              Your Learning Timeline
            </h2>
            <p className="text-gray-600 text-lg">Follow this carefully crafted path to achieve your goals</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-sky-500 to-indigo-500" />

            <div className="space-y-8">
              {data.personalisedSteps.map((step, index) => {
                const stepKey = `step-${index}`
                const stepProgress = getStepProgress(stepKey, step.topicNames.length)
                const isActive = activeStep === index

                return (
                  <div
                    key={index}
                    id={`step-${index}`}
                    data-animate
                    className={`relative transition-all duration-1000 ${
                      visibleElements.has(`step-${index}`) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                    }`}
                    style={{ transitionDelay: `${700 + index * 100}ms` }}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-6 top-8 w-4 h-4 rounded-full border-4 border-white bg-gradient-to-r from-blue-500 to-sky-500 z-10 shadow-lg" />

                    <Card
                      className={`ml-16 bg-white/95 backdrop-blur-xl border-blue-200/50 hover:border-blue-300 transition-all duration-300 group shadow-lg hover:shadow-xl ${
                        stepProgress === 100 ? "border-green-300 bg-green-50/50" : ""
                      }`}
                    >
                      <CardHeader
                        className="cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => handleStepClick(index)}
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 mt-1">
                            {stepProgress === 100 ? <Icons.CheckCircle2 /> : <Icons.Circle />}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-3">
                              <CardTitle className="text-xl text-gray-800 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                                {step.title}
                                <Icons.ChevronDown
                                  className={`transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
                                />
                              </CardTitle>
                              <div className="flex items-center gap-2">
                                <Badge className={getDifficultyColor(step.difficulty || "")}>{step.difficulty}</Badge>
                                <Badge
                                  variant="outline"
                                  className="flex items-center gap-1 text-gray-600 border-gray-300"
                                >
                                  <Icons.Clock />
                                  {step.estimatedTime}
                                </Badge>
                              </div>
                            </div>
                            <p className="text-gray-600 mb-4">{step.description}</p>

                            {/* Progress Bar - Made thinner */}
                            <div className="mb-4">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700">Progress</span>
                                <span className="text-sm text-gray-600">{stepProgress}%</span>
                              </div>
                              <Progress value={stepProgress} className="h-1 bg-blue-100" />
                            </div>

                            {/* Required Skills */}
                            <div className="flex flex-wrap gap-2">
                              {step.requiredSkills.map((skill, skillIndex) => (
                                <Badge
                                  key={skillIndex}
                                  variant="outline"
                                  className="text-gray-600 border-gray-300 hover:border-blue-400 transition-colors"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      {/* Expandable Content */}
                      {isActive && (
                        <CardContent className="border-t border-gray-200 bg-gray-50/50 animate-in slide-in-from-top-2 duration-300">
                          <div className="space-y-6">
                            {/* Topics Checklist */}
                            <div>
                              <h4 className="font-semibold mb-4 text-gray-800 flex items-center gap-2">
                                <Icons.CheckSquare />
                                Learning Topics ({checkedTopics[stepKey]?.size || 0}/{step.topicNames.length})
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {step.topicNames.map((topic, topicIndex) => (
                                  <div
                                    key={topicIndex}
                                    className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors border"
                                  >
                                    <Checkbox
                                      id={`${stepKey}-${topicIndex}`}
                                      checked={checkedTopics[stepKey]?.has(topic.name) || false}
                                      onCheckedChange={(checked) => handleTopicCheck(stepKey, topic.name, checked)}
                                      className="accent-blue-500"
                                    />
                                    <label
                                      htmlFor={`${stepKey}-${topicIndex}`}
                                      className={`text-sm cursor-pointer flex-1 ${
                                        checkedTopics[stepKey]?.has(topic.name)
                                          ? "line-through text-gray-500"
                                          : "text-gray-700"
                                      }`}
                                    >
                                      {topic.name}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Resources */}
                            <div>
                              <h4 className="font-semibold mb-4 text-gray-800 flex items-center gap-2">
                                <Icons.BookMarked />
                                Learning Resources
                              </h4>
                              <div className="grid gap-3">
                                {step.resources.map((resource, resourceIndex) => (
                                  <div
                                    key={resourceIndex}
                                    className="flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-blue-50 transition-colors group border"
                                  >
                                    <div className="p-2 bg-gray-200 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                      {getResourceIcon(resource.type)}
                                    </div>
                                    <div className="flex-1">
                                      <p className="font-medium text-gray-800">{resource.name}</p>
                                      <p className="text-sm text-gray-600 capitalize">{resource.type}</p>
                                    </div>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="text-gray-600 hover:text-gray-800"
                                      onClick={() => window.open(resource.link, "_blank")}
                                    >
                                      <Icons.ExternalLink />
                                    </Button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Capstone Project */}
        <div
          id="capstone"
          data-animate
          className={`mb-16 transition-all duration-1000 delay-1000 ${
            visibleElements.has("capstone") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-sky-50 backdrop-blur-xl border-blue-200 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-sky-500/5 animate-pulse" />
            <CardHeader className="relative">
              <CardTitle className="flex items-center gap-3 text-2xl text-gray-800">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-sky-500 rounded-xl shadow-lg text-white">🏆</div>
                Capstone Project
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">Final Challenge</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{data.capstoneProject.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{data.capstoneProject.description}</p>
                </div>

                {/* Progress - Made thinner */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700">Project Progress</span>
                    <span className="text-sm text-gray-600">
                      {getStepProgress("capstone", data.capstoneProject.topicNames.length)}%
                    </span>
                  </div>
                  <div className="relative">
                    <Progress
                      value={getStepProgress("capstone", data.capstoneProject.topicNames.length)}
                      className="h-1 bg-blue-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full opacity-20 animate-pulse" />
                  </div>
                </div>

                {/* Topics Checklist */}
                <div>
                  <h4 className="font-semibold mb-4 text-gray-800 flex items-center gap-2">
                    <Icons.CheckSquare />
                    Project Milestones ({checkedTopics["capstone"]?.size || 0}/{data.capstoneProject.topicNames.length})
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {data.capstoneProject.topicNames.map((topic, topicIndex) => (
                      <div
                        key={topicIndex}
                        className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors border"
                      >
                        <Checkbox
                          id={`capstone-${topicIndex}`}
                          checked={checkedTopics["capstone"]?.has(topic.name) || false}
                          onCheckedChange={(checked) => handleTopicCheck("capstone", topic.name, checked)}
                          className="accent-blue-500"
                        />
                        <label
                          htmlFor={`capstone-${topicIndex}`}
                          className={`text-sm cursor-pointer flex-1 ${
                            checkedTopics["capstone"]?.has(topic.name) ? "line-through text-gray-500" : "text-gray-700"
                          }`}
                        >
                          {topic.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-800">Skills You'll Master</h4>
                    <div className="flex flex-wrap gap-2">
                      {data.capstoneProject.skillsUsed.map((skill, index) => (
                        <Badge
                          key={index}
                          className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-gray-800">Project Resources</h4>
                    <div className="space-y-2">
                      {data.capstoneProject.resources.map((resource, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="w-full justify-start text-gray-600 border-gray-300 hover:border-blue-400 hover:text-gray-800"
                          onClick={() => window.open(resource.link, "_blank")}
                        >
                          <Icons.ExternalLink />
                          <span className="ml-2">{resource.name}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Icons.Clock />
                    <span>Estimated time: {data.capstoneProject.estimatedTime}</span>
                  </div>
                  <Button className="bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white shadow-lg">
                    Start Project →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default PersonalizedRoadmap
