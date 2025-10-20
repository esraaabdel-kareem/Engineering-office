import { H3Event, createError } from "h3";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export default defineEventHandler((event: H3Event) => {
  const id = Number(event.context.params?.id);

  const projects: Project[] = [
    {
      id: 1,
      title: "Modern Villa",
      category: "arch",
      image: "/image/d1.jpg",
      description:
        "A luxurious modern villa with elegant lines and natural light.",
    },
    {
      id: 2,
      title: "Luxury Apartment",
      category: "interior",
      image: "/image/d2.jpg",
      description: "Interior design focused on comfort and minimalism.",
    },
    {
      id: 3,
      title: "Garden Retreat",
      category: "landscape",
      image: "/image/d3.jpg",
      description:
        "A peaceful outdoor space with lush greenery and stone paths.",
    },
    {
      id: 4,
      title: "Office Tower",
      category: "arch",
      image: "/image/d4.jpg",
      description:
        "A modern office tower combining glass and steel aesthetics.",
    },
    {
      id: 5,
      title: "Minimalist Interior",
      category: "interior",
      image: "/image/d5.jpg",
      description: "A clean and elegant interior space emphasizing simplicity.",
    },
    {
      id: 6,
      title: "Modern Villa",
      category: "arch",
      image: "/image/d1.jpg",
      description:
        "A luxurious modern villa with elegant lines and natural light.",
    },
    {
      id: 7,
      title: "Luxury Apartment",
      category: "interior",
      image: "/image/d2.jpg",
      description: "Interior design focused on comfort and minimalism.",
    },
    {
      id: 8,
      title: "Garden Retreat",
      category: "landscape",
      image: "/image/d3.jpg",
      description:
        "A peaceful outdoor space with lush greenery and stone paths.",
    },
    {
      id: 9,
      title: "Office Tower",
      category: "arch",
      image: "/image/d4.jpg",
      description:
        "A modern office tower combining glass and steel aesthetics.",
    },
    {
      id: 10,
      title: "Minimalist Interior",
      category: "interior",
      image: "/image/d5.jpg",
      description: "A clean and elegant interior space emphasizing simplicity.",
    },
  ];

  const project = projects.find((p) => p.id === id);

  if (!project) {
    throw createError({
      statusCode: 404,
      statusMessage: "Project not found",
    });
  }

  return project;
});
