import { useState } from "react";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardTitle from "../Card/CardTitle";
import { Badge } from "../Badge/Badge";
import { Clock } from "lucide-react";
import { ProgressBar } from "./ProgressBar";
import CardContent from "../Card/CardContent";
import { Checkbox } from "./Checkbox";
import { Tabs } from "./Tabs/Tabs";
import { TabsContent } from "./Tabs/TabsContent";
import { TabsTrigger} from "./Tabs/TabsTrigger";
import { TabsList } from "./Tabs/TabsList";
import { ResourceCard } from "./ResourceCard";
import { ProjectCard } from "./Projectcard";

export const RoadmapPhase = ({ phase, isCompleted = false }) => {
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