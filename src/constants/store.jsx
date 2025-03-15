import { create } from "zustand";

const useDarkMode = create((set) => ({
    isDark: false, // Controls dark mode state
    Color: "#afb0b6", // New state for user
    
    setIsDark: (props) => set({ 
        isDark: props, 
    }),
    setColor: (c) => set({ 
        Color: c 
    }), // Setter for user
}));

export default useDarkMode;
