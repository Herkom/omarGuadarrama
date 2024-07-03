import LoaderIcon from "@/components/loaderIcon";
import "@/styles/loading.css";

const Loading = () => {
  return (
    <section className="loader">
      <LoaderIcon />
      <div className="clipped"></div>
    </section>
  );
};

export default Loading;
