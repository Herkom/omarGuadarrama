import { Card, CardTitle, CardImage } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import "@/styles/card.css";

interface ProjectCardProps {
  projectName: string;
  cardBackgroundImage: string;
  technologies: string[];
  description: string;
}

export const ProjectCard = ({
  projectName,
  cardBackgroundImage,
  technologies,
  description,
}: ProjectCardProps) => (
  <Card className="card">
    <CardImage
      className="card--image"
      src={`/omarGuadarrama/projectImages/resized/${cardBackgroundImage}`}
      alt={`image of ${projectName} project`}
    />
    <HoverCard openDelay={150}>
      <HoverCardTrigger asChild>
        <CardTitle className="card--title">{projectName}</CardTitle>
      </HoverCardTrigger>
      <HoverCardContent
        className="max-w-72 bg-card-foreground"
      >  
        <article className="flex flex-col">
          <h3 className="text-lg font-semibold text-muted-foreground">{projectName}</h3>
          <p className="text-sm mt-0 mb-4 text-card">{description}</p>
          <small className="text-sm font-medium leading-none text-muted-foreground">Tools</small>
          <div>
            {technologies.map((technology) => (
              <img key={technology} src={`/omarGuadarrama/svg/${technology}.svg`} alt={`${technology} icon`} className="card--technology"/>
            ))}
          </div>
          <HoverCardArrow />
        </article>
      </HoverCardContent>
    </HoverCard>
  </Card>
);
