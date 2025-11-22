module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}", "./index.html"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',   
      md: '768px',    
      lg: '1024px',   
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        /* Primary Background Colors */
        background: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
          quaternary: "var(--bg-quaternary)",
          surface: "var(--bg-surface)",
          muted: "var(--bg-muted)",
          subtle: "var(--bg-subtle)",
          light: "var(--bg-light)",
          accent: "var(--bg-accent)",
          success: "var(--bg-success)",
          warning: "var(--bg-warning)",
          overlay: "var(--bg-overlay)",
          white: "var(--bg-white)",
          neutral: "var(--bg-neutral)"
        },
        /* Text Colors */
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          subtle: "var(--text-subtle)",
          accent: "var(--text-accent)",
          success: "var(--text-success)"
        },
        /* Border Colors */
        border: {
          primary: "var(--border-primary)",
          subtle: "var(--border-subtle)"
        },
        /* Component-specific Colors */
        button: {
          background: {
            primary: "var(--button-bg-primary)",
            secondary: "var(--button-bg-secondary)",
            muted: "var(--button-bg-muted)",
            overlay: "var(--button-bg-overlay)"
          },
          text: {
            primary: "var(--button-text-primary)",
            muted: "var(--button-text-muted)"
          },
          border: {
            primary: "var(--button-border-primary)"
          }
        },
        chip: {
          background: {
            primary: "var(--chip-bg-primary)"
          },
          text: {
            primary: "var(--chip-text-primary)"
          }
        },
        line: {
          background: {
            primary: "var(--line-bg-primary)",
            secondary: "var(--line-bg-secondary)",
            light: "var(--line-bg-light)"
          }
        }
      },
      /* Typography */
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        '6xl': 'var(--font-size-6xl)',
        '7xl': 'var(--font-size-7xl)'
      },
      fontWeight: {
        'light': 'var(--font-weight-light)',
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
        'semibold': 'var(--font-weight-semibold)'
      },
      lineHeight: {
        'tight': 'var(--line-height-tight)',
        'snug': 'var(--line-height-snug)',
        'normal': 'var(--line-height-normal)',
        'relaxed': 'var(--line-height-relaxed)',
        'loose': 'var(--line-height-loose)',
        'extra-loose': 'var(--line-height-extra-loose)'
      },
      /* Spacing */
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)'
      },
      /* Border Radius */
      borderRadius: {
        'xs': 'var(--radius-xs)',
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        '4xl': 'var(--radius-4xl)',
        '5xl': 'var(--radius-5xl)'
      },
      /* Font Families */
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'dm': ['DM Sans', 'sans-serif'],
        'space': ['Space Grotesk', 'sans-serif']
      }
    }
  },
  plugins: []
};