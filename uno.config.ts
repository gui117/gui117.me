import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'border-base': 'border-gray-200 dark:border-gray-800',
    'bg-active': 'bg-gray:20',
    'bg-faded': 'bg-gray:5',
    'bg-base': 'bg-white dark:bg-[#020420]',
    'text-faded': 'text-gray6:100 dark:text-gray3:80',

    'bg-code': 'bg-gray/5',

    'bg-inline-code': 'bg-gray-100 dark:bg-gray-800/75',
    'border-inline-code': 'border-gray-200 dark:border-gray-700/75',

    'icon-link': 'h-9 inline-flex items-center justify-center whitespace-nowrap rounded-md p-2 text-sm font-medium ring-offset-background transition-colors disabled:pointer-events-none hover:bg-accent hover:text-accent-foreground disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring',
  },
  rules: [],
  safelist: [],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'text-bottom',
      },
    }),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        '(components|src)/**/*.{js,ts}',
      ],
    },
  },
})
