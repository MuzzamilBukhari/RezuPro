import EducationType from "@/types/Education1";

export function Education({ education }: { education?: EducationType[] }) {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold mb-3 text-sky-600">EDUCATION</h2>
      <ul className="list-disc pl-5">
        {education?.map((edu) => (
          <li key={edu.id} className="text-sm">
            <div className="flex justify-between">
              <div>
                <span>{edu.degree}</span> |{" "}
                <span className="ml-2">{edu.institution}</span>
              </div>
              <div>{edu.details}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
