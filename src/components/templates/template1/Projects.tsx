import Project from "@/types/Project";

export function Projects({ projects }: { projects?: Project[] }) {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold mb-3 text-sky-600">ACADEMIC PROJECTS</h2>
      <ul className="list-disc space-y-3 pl-5">
        {projects?.map((project) => (
          <li key={project.id} className="text-sm">
            <div className="font-semibold">
              <span>{project.name}</span> |
              <span className="ml-2">{project.description}</span>
            </div>
            <div>
              <div>
                <span> Project link :- </span>
                <a
                  href={project.link}
                  className="text-sky-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.link}
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
