module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}", "./index.html"],
  darkMode: ["class", "class"],
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
  			background: 'hsl(var(--background))',
  			text: {
  				primary: 'var(--text-primary)',
  				secondary: 'var(--text-secondary)',
  				muted: 'var(--text-muted)',
  				subtle: 'var(--text-subtle)',
  				accent: 'var(--text-accent)',
  				success: 'var(--text-success)'
  			},
  			border: 'hsl(var(--border))',
  			button: {
  				background: {
  					primary: 'var(--button-bg-primary)',
  					secondary: 'var(--button-bg-secondary)',
  					muted: 'var(--button-bg-muted)',
  					overlay: 'var(--button-bg-overlay)'
  				},
  				text: {
  					primary: 'var(--button-text-primary)',
  					muted: 'var(--button-text-muted)'
  				},
  				border: {
  					primary: 'var(--button-border-primary)'
  				}
  			},
  			chip: {
  				background: {
  					primary: 'var(--chip-bg-primary)'
  				},
  				text: {
  					primary: 'var(--chip-text-primary)'
  				}
  			},
  			line: {
  				background: {
  					primary: 'var(--line-bg-primary)',
  					secondary: 'var(--line-bg-secondary)',
  					light: 'var(--line-bg-light)'
  				}
  			},
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontSize: {
  			xs: 'var(--font-size-xs)',
  			sm: 'var(--font-size-sm)',
  			base: 'var(--font-size-base)',
  			lg: 'var(--font-size-lg)',
  			xl: 'var(--font-size-xl)',
  			'2xl': 'var(--font-size-2xl)',
  			'3xl': 'var(--font-size-3xl)',
  			'4xl': 'var(--font-size-4xl)',
  			'5xl': 'var(--font-size-5xl)',
  			'6xl': 'var(--font-size-6xl)',
  			'7xl': 'var(--font-size-7xl)'
  		},
  		fontWeight: {
  			light: 'var(--font-weight-light)',
  			normal: 'var(--font-weight-normal)',
  			medium: 'var(--font-weight-medium)',
  			semibold: 'var(--font-weight-semibold)'
  		},
  		lineHeight: {
  			tight: 'var(--line-height-tight)',
  			snug: 'var(--line-height-snug)',
  			normal: 'var(--line-height-normal)',
  			relaxed: 'var(--line-height-relaxed)',
  			loose: 'var(--line-height-loose)',
  			'extra-loose': 'var(--line-height-extra-loose)'
  		},
  		spacing: {
  			xs: 'var(--spacing-xs)',
  			sm: 'var(--spacing-sm)',
  			md: 'var(--spacing-md)',
  			lg: 'var(--spacing-lg)',
  			xl: 'var(--spacing-xl)',
  			'2xl': 'var(--spacing-2xl)',
  			'3xl': 'var(--spacing-3xl)',
  			'4xl': 'var(--spacing-4xl)',
  			'5xl': 'var(--spacing-5xl)'
  		},
  		borderRadius: {
  			xs: 'var(--radius-xs)',
  			sm: 'calc(var(--radius) - 4px)',
  			md: 'calc(var(--radius) - 2px)',
  			lg: 'var(--radius)',
  			xl: 'var(--radius-xl)',
  			'2xl': 'var(--radius-2xl)',
  			'3xl': 'var(--radius-3xl)',
  			'4xl': 'var(--radius-4xl)',
  			'5xl': 'var(--radius-5xl)'
  		},
  		fontFamily: {
  			montserrat: [
  				'Montserrat',
  				'sans-serif'
  			],
  			dm: [
  				'DM Sans',
  				'sans-serif'
  			],
  			space: [
  				'Space Grotesk',
  				'sans-serif'
  			]
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")]
};