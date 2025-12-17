import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { MarkdownContent } from '@/types'
import './MarkdownRenderer.css'

const MarkdownRenderer: React.FC<MarkdownContent> = ({ content }) => {
  return (
    <div className="markdown-content">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownRenderer

