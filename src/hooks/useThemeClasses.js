import { useTheme } from '../contexts/ThemeContext'

export const useThemeClasses = () => {
  const { isDarkMode } = useTheme()

  return {
    // Background classes
    bg: {
      primary: isDarkMode ? 'bg-gray-900' : 'bg-white',
      secondary: isDarkMode ? 'bg-gray-800' : 'bg-gray-50',
      card: isDarkMode ? 'bg-gray-800' : 'bg-white',
      hover: isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100',
    },
    
    // Text classes
    text: {
      primary: isDarkMode ? 'text-white' : 'text-gray-900',
      secondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
      muted: isDarkMode ? 'text-gray-400' : 'text-gray-500',
      hover: isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600',
    },
    
    // Border classes
    border: {
      primary: isDarkMode ? 'border-gray-700' : 'border-gray-200',
      secondary: isDarkMode ? 'border-gray-600' : 'border-gray-300',
    },
    
    // Gradient classes (remain the same for both themes)
    gradient: {
      primary: 'bg-gradient-to-r from-blue-600 to-purple-600',
      text: 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent',
    }
  }
}
