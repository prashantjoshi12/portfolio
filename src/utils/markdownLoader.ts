/**
 * Utility to load markdown content from the public directory
 * @param path - Path to the markdown file relative to public directory
 * @returns Promise that resolves to the markdown content as a string
 */
export const loadMarkdown = async (path: string): Promise<string> => {
  try {
    // Get the base URL from Vite (handles GitHub Pages base path)
    const baseUrl = import.meta.env.BASE_URL
    // Remove leading slash from path if present, then combine with baseUrl
    const cleanPath = path.startsWith('/') ? path.slice(1) : path
    const fullPath = `${baseUrl}${cleanPath}`
    
    const response = await fetch(fullPath)
    if (!response.ok) {
      throw new Error(`Failed to load markdown: ${fullPath}`)
    }
    return await response.text()
  } catch (error) {
    console.error('Error loading markdown:', error)
    return ''
  }
}

