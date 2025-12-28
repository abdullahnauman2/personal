export function Philosophy() {
  const companies = [
    { name: "DoubleSpeed (a16z)", href: "https://x.com/nearcyan/status/1981469667320541560" },
    { name: "Anytool (YC W26)", href: "https://www.anytool.sh/" },
    { name: "Sciloop (YC F25)", href: "https://www.ycombinator.com/companies/sciloop" },
    { name: "Canvas (YC F24)", href: "https://www.ycombinator.com/companies/canvas" },
    { name: "Jooba (a16z)", href: "https://jooba.com/" },
    // { name: "Exaflop Labs", href: "https://www.exafloplabs.com/" },
  ];

  return (
    <section className="py-8">
      <h2 className="text-2xl font-normal mb-4">Experiments</h2>
      <div className="text-base leading-relaxed">
        <div className="bg-blue-50 border border-blue-200 rounded-lg px-5 py-4 mb-6">
          <p className="m-0">
            I&apos;m designing a new experiment: a shared office space of
            seed-stage companies in FiDi.{" "}
            <a href="mailto:abdullah@claybird.ai" className="text-blue-600 hover:text-orange-500 font-medium">
              Reach out
            </a>{" "}
            to learn more!
          </p>
        </div>

        <p className="mb-4">
          I founded and run <strong>Powell St</strong> - a curated community of folks with deep computer science background or strong design taste. Here's a running list of the companies that have emerged from our experiment —
          all of these teams met their co-founders and came up with ideas for their companies at Powell:
        </p>

        <ul className="list-disc list-inside my-4 space-y-1">
          {companies.map((company) => (
            <li key={company.name}>
              {company.href ? (
                <a href={company.href} target="_blank">{company.name}</a>
              ) : (
                company.name
              )}
            </li>
          ))}
        </ul>

        ...and of course <strong className="text-gray-800 not-italic">Claybird (YC F25)</strong>, for I met the incredible{" "}
        <a href="https://www.linkedin.com/in/sadjamz/" target="_blank">Saad Jamal</a> at Powell as well.
      </div>
    </section>
  );
}
