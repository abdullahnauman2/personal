"use client";

import Image from "next/image";
import { ProfileData } from "../data/types";

interface HeaderProps {
  profile: ProfileData;
}

export function Header({ profile }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1 className="name">{profile.name}</h1>
          <div
            className="bio"
            dangerouslySetInnerHTML={{
              __html: profile.bio
                .split("\n")
                .map((p) => `<p>${p}</p>`)
                .join(""),
            }}
          />
          <div className="social-links">
            <a href={`mailto:${profile.email}`}>Email</a>
            {profile.socialLinks.map((link, i) => (
              <span key={link.label}>
                <span className="separator">/</span>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </span>
            ))}
          </div>
        </div>
        <div className="header-photo">
          <Image
            src={profile.photo}
            alt={profile.name}
            width={280}
            height={280}
            className="profile-photo"
            priority
          />
        </div>
      </div>
    </header>
  );
}
