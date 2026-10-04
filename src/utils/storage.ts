import { Project, UserProfile } from '../types/portfolio';
import { INITIAL_PROJECTS, INITIAL_USER_PROFILE } from '../data/initialData';

const PROJECTS_STORAGE_KEY = 'aurelia_portfolio_projects_v1';
const PROFILE_STORAGE_KEY = 'aurelia_portfolio_profile_v1';

export function getStoredProjects(): Project[] {
  try {
    const raw = localStorage.getItem(PROJECTS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(INITIAL_PROJECTS));
      return INITIAL_PROJECTS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return INITIAL_PROJECTS;
  } catch (err) {
    console.warn('Failed reading projects from localStorage:', err);
    return INITIAL_PROJECTS;
  }
}

export function saveProjects(projects: Project[]): void {
  try {
    localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(projects));
  } catch (err) {
    console.error('Failed saving projects to localStorage:', err);
  }
}

export function getStoredProfile(): UserProfile {
  try {
    const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(INITIAL_USER_PROFILE));
      return INITIAL_USER_PROFILE;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.warn('Failed reading profile from localStorage:', err);
    return INITIAL_USER_PROFILE;
  }
}

export function saveProfile(profile: UserProfile): void {
  try {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
  } catch (err) {
    console.error('Failed saving profile to localStorage:', err);
  }
}

export function resetPortfolioData(): { projects: Project[]; profile: UserProfile } {
  localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(INITIAL_PROJECTS));
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(INITIAL_USER_PROFILE));
  return {
    projects: INITIAL_PROJECTS,
    profile: INITIAL_USER_PROFILE
  };
}

export function exportPortfolioBackup(): void {
  const data = {
    version: 1,
    exportedAt: new Date().toISOString(),
    profile: getStoredProfile(),
    projects: getStoredProjects()
  };
  const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data, null, 2))}`;
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', jsonString);
  downloadAnchor.setAttribute('download', `aurelia-portfolio-backup-${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}
