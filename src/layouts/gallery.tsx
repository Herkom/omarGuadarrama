import jobData from "@/data/jobItems";
import { ProjectCard } from "@/components/ProjectCard";
import "@/styles/gallery.css";

const Gallery = () => {
  return (
    <section id="gallery">
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
