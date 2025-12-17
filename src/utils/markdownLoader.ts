/**
 * Utility to load markdown content from the public directory
 * @param path - Path to the markdown file relative to public directory
 * @returns Promise that resolves to the markdown content as a string
 */
export const loadMarkdown = async (path: string): Promise<string> => {
  try {
    const response = await fetch(path)
    if (!response.ok) {
      throw new Error(`Failed to load markdown: ${path}`)
    }
    return await response.text()
  } catch (error) {
    console.error('Error loading markdown:', error)
    return ''
  }
}

