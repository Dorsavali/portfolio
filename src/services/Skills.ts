import api from "./api";

export interface Skill {
  id: number;
  name: string;
  icon: string;
  className: string;
  delay: number;
  duration: number;
}

interface SkillsResponse {
  skills: Skill[];
}

export async function getSkills(): Promise<Skill[]> {
  const { data } = await api.get<SkillsResponse>("");

  return data.skills;
}