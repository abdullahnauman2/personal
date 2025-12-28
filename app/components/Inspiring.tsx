export function Inspiring() {
  const teams = [
    { name: "Huxe", href: "https://www.huxe.com/" },
    { name: "Coframe", href: "https://coframe.com/" },
    { name: "Wispr Flow", href: "https://wisprflow.ai/" },
    { name: "NotebookLM", href: "https://notebooklm.google/" },
    { name: "Chromecast", href: "https://blog.google/products/chromecast/from-tvs-to-tablets-everything-you-love/" },
  ];

  return (
    <section className="py-8">
      <h2 className="text-2xl font-normal mb-4">Inspiring work</h2>
      <div className="text-base leading-relaxed">
        <p className="mb-4">
          I have deep respect for the following teams and their work:
        </p>

        <ul className="list-disc list-inside my-4 space-y-1">
          {teams.map((team) => (
            <li key={team.name}>
              <a href={team.href} target="_blank">{team.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
