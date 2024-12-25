export function Skills({ skills }: { skills?: string[] }) {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold mb-3 text-sky-600">SKILLS</h2>
      <ul
        className="list-disc pl-5 grid grid-cols-2 gap-2 font-semibold"
        style={{
          listStyle: "disc",
          listStylePosition: "inside",
          margin: 0,
          padding: 0,
        }}
      >
        {skills?.map((skill, index) => (
          <li key={index} className="text-sm">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
