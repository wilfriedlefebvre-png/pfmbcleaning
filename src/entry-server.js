import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
export { cityServiceAreas, BUSINESS } from './data/cityServiceAreas'
export { pageMeta, buildLocalBusinessSchema, buildFaqSchema } from './utils/seo'
export function render(path) {
  return renderToString(createElement(App, { initialPath: path }))
}
