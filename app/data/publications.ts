import { Publication } from "./types";

export const publications: Publication[] = [
  {
    id: "example-paper-2025",
    title: "Example Paper Title: A Novel Approach to Something Interesting",
    authors: [
      { name: "First Author", href: "https://example.com/first" },
      { name: "Your Name", isMe: true },
      { name: "Third Author", href: "https://example.com/third" },
    ],
    venue: "CVPR",
    year: 2025,
    projectPage: "https://example.com/project",
    arxiv: "https://arxiv.org/abs/0000.00000",
    description:
      "A brief description of what this paper is about and its key contributions. Keep it to 1-2 sentences.",
    image: "/images/example_before.jpg",
    hoverImage: "/images/example_after.jpg",
    highlight: true,
    award: "Oral Presentation",
  },
  {
    id: "another-paper-2024",
    title: "Another Paper: Exploring New Frontiers",
    authors: [
      { name: "Your Name", isMe: true },
      { name: "Collaborator", href: "https://example.com/collab" },
    ],
    venue: "NeurIPS",
    year: 2024,
    arxiv: "https://arxiv.org/abs/0000.00001",
    code: "https://github.com/yourhandle/repo",
    description:
      "Description of this paper's contributions and findings.",
    image: "/images/another_paper.jpg",
    highlight: false,
  },
];
