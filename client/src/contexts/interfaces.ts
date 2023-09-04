
export interface ThemeContextProviderProps {
    children: React.ReactNode;
  }

export interface ThemeContextType {
    theme: boolean;
    toggleTheme: () => void;
}