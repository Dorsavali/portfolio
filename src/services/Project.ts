import api from "./api";
import type { Project } from "../types/Project";

interface ProjectsResponse {
  projects: Project[];
}

export async function getProjects(): Promise<Project[]> {
  const { data } = await api.get<ProjectsResponse>("");

  return data.projects;
}