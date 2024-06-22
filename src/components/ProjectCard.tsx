import { Card, CardTitle, CardImage } from "@/components/ui/card";
import "@/styles/card.css";

interface ProjectCardProps {
  projectName: string;
  cardBackgroundImage: string;
}

export const ProjectCard = ({ projectName, cardBackgroundImage }: ProjectCardProps) => (
  <Card className="card">
    <CardImage
      className="card--image"
      src={`/projectImages/resized/${cardBackgroundImage}`}
      alt={`imagen del projecto ${projectName}`}
    />
    <CardTitle className="card--title">{projectName}</CardTitle>
  </Card>
);
