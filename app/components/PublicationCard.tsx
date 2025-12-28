"use client";

import { useState } from "react";
import Image from "next/image";
import { Publication } from "../data/types";

interface PublicationCardProps {
  publication: Publication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const hasHoverMedia = publication.hoverImage || publication.hoverVideo;

  return (
    <article
      className={`publication-card ${publication.highlight ? "highlighted" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="publication-image">
        <div className="image-container">
          {publication.hoverVideo ? (
            <video
              className={`hover-media ${isHovered ? "visible" : ""}`}
              muted
              autoPlay
              loop
              playsInline
            >
              <source src={publication.hoverVideo} type="video/mp4" />
            </video>
          ) : publication.hoverImage ? (
            <Image
              src={publication.hoverImage}
              alt={`${publication.title} - hover`}
              fill
              className={`hover-media ${isHovered ? "visible" : ""}`}
            />
          ) : null}
          <Image
            src={publication.image}
            alt={publication.title}
            fill
            className={`base-image ${hasHoverMedia && isHovered ? "hidden" : ""}`}
          />
        </div>
      </div>
      <div className="publication-details">
        <a
          href={publication.projectPage || publication.arxiv || "#"}
          className="publication-title"
        >
          {publication.title}
        </a>
        <div className="authors">
          {publication.authors.map((author, i) => (
            <span key={i}>
              {i > 0 && ", "}
              {author.isMe ? (
                <strong>{author.name}</strong>
              ) : author.href ? (
                <a href={author.href} target="_blank" rel="noopener noreferrer">
                  {author.name}
                </a>
              ) : (
                author.name
              )}
            </span>
          ))}
        </div>
        <div className="venue">
          <em>{publication.venue}</em>, {publication.year}
          {publication.award && (
            <span className="award"> ({publication.award})</span>
          )}
        </div>
        <div className="links">
          {publication.projectPage && (
            <a href={publication.projectPage} target="_blank" rel="noopener noreferrer">
              project page
            </a>
          )}
          {publication.arxiv && (
            <>
              {publication.projectPage && " / "}
              <a href={publication.arxiv} target="_blank" rel="noopener noreferrer">
                arXiv
              </a>
            </>
          )}
          {publication.pdf && (
            <>
              {(publication.projectPage || publication.arxiv) && " / "}
              <a href={publication.pdf} target="_blank" rel="noopener noreferrer">
                pdf
              </a>
            </>
          )}
          {publication.video && (
            <>
              {(publication.projectPage || publication.arxiv || publication.pdf) && " / "}
              <a href={publication.video} target="_blank" rel="noopener noreferrer">
                video
              </a>
            </>
          )}
          {publication.code && (
            <>
              {(publication.projectPage || publication.arxiv || publication.pdf || publication.video) && " / "}
              <a href={publication.code} target="_blank" rel="noopener noreferrer">
                code
              </a>
            </>
          )}
        </div>
        <p className="description">{publication.description}</p>
      </div>
    </article>
  );
}
