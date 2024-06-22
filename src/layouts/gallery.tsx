import jobData from "@/data/jobItems";
import { ProjectCard } from "@/components/ProjectCard";

const Gallery = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {
        jobData.map(({name, images}) => {
          return (
            <ProjectCard key={name} projectName={name} cardBackgroundImage={images["0"]} />
          )}
        )
      }
    </div>
  );
};

export default Gallery;
