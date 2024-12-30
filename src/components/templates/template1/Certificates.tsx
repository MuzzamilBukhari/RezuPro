import Certificate from "@/types/Certificate";

export function Certificates({
  certificates,
}: {
  certificates?: Certificate[];
}) {
  return (
    <section>
      <h2 className="text-sm sm:text-lg font-bold mb-3 text-sky-600">
        CERTIFICATES
      </h2>
      <ul className="list-disc pl-5">
        {certificates?.map((cert, index) => (
          <li key={index} className="text-sm">
            <a href={cert.link} className="text-sky-600 hover:underline">
              {cert.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
