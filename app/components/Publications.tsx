import { Publication } from "../data/types";
import { PublicationCard } from "./PublicationCard";

interface PublicationsProps {
  publications: Publication[];
  researchDescription?: string;
}

export function Publications({ publications, researchDescription }: PublicationsProps) {
  return (
    <section className="publications-section">
      <h2>Research</h2>
      {researchDescription && <p className="research-description">{researchDescription}</p>}
      <div className="publications-list">
        {publications.map((pub) => (
          <PublicationCard key={pub.id} publication={pub} />
        ))}
      </div>
    </section>
  );
}
