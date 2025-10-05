// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'surface': '#ffffff',
        'muted': '#F8F9FA',
        'primary': '#0A66C2',
        'primary-hover': '#004182',
        'light-blue': '#54A6FB',
        'secondary': '#54A6FB',
        'input-bg': '#F3F4F6',
        'input-border': '#E5E7EB',
        'border-default': '#E5E7EB',
        'text-default': '#1F2937',
        'text-muted': '#6B7280',
        'status-neutral': '#9ca3af',
        'status-inprogress': '#3b82f6',
        'status-complete': '#10b981',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0,0,0,0.05)',
        'md': '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
      },
      fontSize: {
        'sm': '14px',
        'md': '16px',
        'lg': '20px',
      },
      lineHeight: {
        'sm': '20px',
        'md': '24px',
        'lg': '28px',
      },
    },
  },
  plugins: [],
};
