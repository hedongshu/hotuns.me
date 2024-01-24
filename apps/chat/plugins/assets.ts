import 'katex/dist/katex.min.css'
import '@chatapp/styles/lib/tailwind.css'
import '@chatapp/styles/lib/highlight.less'
import '@chatapp/styles/lib/github-markdown.less'
import '@chatapp/styles/global.less'

/** Tailwind's Preflight Style Override */
function naiveStyleOverride() {
  const meta = document.createElement('meta')
  meta.name = 'naive-ui-style'
  document.head.appendChild(meta)
}

function setupAssets() {
  naiveStyleOverride()
}

export default setupAssets
