/** Professional career start — JavaScript Developer at Fortius (Feb 2022) */
export const CAREER_START_DATE = new Date(2022, 1, 1)

export function getYearsOfExperience(): number {
  const now = new Date()
  const totalMonths =
    (now.getFullYear() - CAREER_START_DATE.getFullYear()) * 12 +
    (now.getMonth() - CAREER_START_DATE.getMonth())

  return Math.max(0, Math.floor(totalMonths / 12))
}

export function formatYearsOfExperience(): string {
  return `${getYearsOfExperience()}+ years`
}

export function injectExperienceYears(content: string): string {
  return content.replace(/\{\{yearsOfExperience\}\}/g, formatYearsOfExperience())
}
