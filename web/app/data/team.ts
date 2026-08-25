// ---------------------------------------------------------------------------
// TEAM DATA
// ---------------------------------------------------------------------------
// Edit this file to update the Team section on the website.
// Names below come from docs/project-choice.md and docs/design.md in the
// main repository.
//
// - github:   full profile URL, e.g. "https://github.com/username",
//             or `null` to hide the GitHub button entirely.
// - linkedin: full profile URL, or `null` to hide the LinkedIn link.
// - image:    path under /public (e.g. "/team/julnar.jpg"), or `null` for
//             the generated initials avatar.
// ---------------------------------------------------------------------------

export type TeamMember = {
  name: string;
  role: string;
  github: string | null;
  linkedin?: string | null;
  image?: string | null;
};

export const team: TeamMember[] = [
  {
    name: "Julnar Assi",
    role: "Repository owner & contributor",
    github: "https://github.com/JulnarAssi",
    linkedin: null,
    image: null,
  },
  {
    name: "Lana Says",
    role: "Contributor",
    github: "https://github.com/lanaSys77",
    linkedin: null,
    image: null,
  },
  {
    name: "Maysam Abu-Eid",
    role: "add_task & delete_task tools, threat modeling",
    github: "https://github.com/MaysamAbuEid",
    linkedin: null,
    image: null,
  },
];
