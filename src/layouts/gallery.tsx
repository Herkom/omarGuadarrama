import jobData from "@/data/jobItems";
import { ProjectCard } from "@/components/ProjectCard";

const Gallery = () => {
  return (
    <section>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">Proyectos</h2>
      <div className="grid grid-cols-3 gap-8">
        {jobData.map(({ name, images, technologies, description }) => {
          return (
            <ProjectCard
              key={name}
              projectName={name}
              cardBackgroundImage={images["0"]}
              technologies={technologies}
              description={description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
