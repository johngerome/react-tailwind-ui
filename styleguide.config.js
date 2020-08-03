const path = require('path')
const pkg = require('./package.json')
const webpackConfig = require('./config/webpack.js')

module.exports = {
  title: `${pkg.name} v${pkg.version}`,
  moduleAliases: {
    [pkg.name]: path.resolve(__dirname, 'src/lib'),
  },
  sections: [
    { name: 'Atoms', components: 'src/lib/patterns/atoms/**/[A-Z]*.{js,jsx,ts,tsx}' },
    { name: 'Molecules', components: 'src/lib/patterns/molecules/**/[A-Z]*.{js,jsx,ts,tsx}' },
  ],
  ribbon: {
    url: 'https://github.com/johngerome/react-tailwind-ui',
    text: 'Fork me on GitHub',
  },
  showSidebar: true,
  usageMode: 'expand',
  skipComponentsWithoutExample: true,
  theme: {
    color: {
      link: '#718096',
      linkHover: '#1a202c',
      sidebarBackground: '#fff',
    },
    font: [
      'Inter varsystem-ui/n-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'Noto Sans',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'Noto Color Emoji',
    ],
  },
  styles: {
    Ribbon: {
      root: {
        backgroundImage: 'url("https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png")',
        backgroundSize: '50px 50px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right top',
      },
      link: {
        backgroundColor: '#065fd4',
      },
    },
    Heading: {
      heading2: {
        fontSize: 26,
      },
    },
    ReactComponent: {
      root: {
        marginBottom: 20,
      },
      header: {
        marginBottom: 0,
      },
      tabs: {
        marginBottom: 0,
      },
    },
  },
  webpackConfig,
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.tsx?$/, '.examples.md')
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.tsx')

    return `import { ${name} } from '${pkg.name}';`
  },
}
