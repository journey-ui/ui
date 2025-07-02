"use client"

import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Copy, Check, Terminal, FileText } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  children: string
  language?: string
  filename?: string
  title?: string
  className?: string
  showLineNumbers?: boolean
  highlightLines?: number[]
}

export function CodeBlock({
  children,
  language = "typescript",
  filename,
  title,
  className,
  showLineNumbers = false,
  highlightLines = []
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children.trim())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const getIcon = () => {
    if (filename) {
      return <FileText className="w-4 h-4" />
    }
    return <Terminal className="w-4 h-4" />
  }

  const getLanguageLabel = () => {
    const labels: Record<string, string> = {
      typescript: "TypeScript",
      javascript: "JavaScript",
      tsx: "TSX",
      jsx: "JSX",
      bash: "Bash",
      shell: "Shell",
      json: "JSON",
      css: "CSS",
      html: "HTML",
      python: "Python",
      sql: "SQL"
    }
    return labels[language] || language.toUpperCase()
  }

  const customStyle = {
    ...oneLight,
    'pre[class*="language-"]': {
      ...oneLight['pre[class*="language-"]'],
      margin: 0,
      padding: "1rem",
      background: "transparent",
      fontSize: "0.875rem",
      lineHeight: "1.5"
    },
    'code[class*="language-"]': {
      ...oneLight['code[class*="language-"]'],
      background: "transparent",
      fontSize: "0.875rem"
    }
  }

  return (
    <div className={cn(
      "rounded-lg border border-slate-200 overflow-hidden bg-white shadow-sm",
      className
    )}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-200">
        <div className="flex items-center gap-2">
          {getIcon()}
          <span className="text-sm font-medium text-slate-900">
            {filename || title || getLanguageLabel()}
          </span>
          {filename && (
            <span className="text-xs text-slate-500 ml-1">
              ({getLanguageLabel()})
            </span>
          )}
        </div>
        
        <button
          onClick={copyToClipboard}
          className={cn(
            "flex items-center gap-1.5 px-2 py-1 text-xs font-medium rounded transition-all duration-200",
            "hover:bg-white border border-transparent hover:border-slate-200",
            copied 
              ? "text-green-600" 
              : "text-slate-500 hover:text-slate-700"
          )}
          disabled={copied}
        >
          {copied ? (
            <>
              <Check className="w-3 h-3" />
              Copiado!
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              Copiar
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="relative overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={customStyle}
          showLineNumbers={showLineNumbers}
          lineNumberStyle={{
            minWidth: "3em",
            paddingRight: "1em",
            color: "#94a3b8",
            borderRight: "1px solid #e2e8f0",
            marginRight: "1em"
          }}
          wrapLines={highlightLines.length > 0}
          lineProps={(lineNumber) => {
            const isHighlighted = highlightLines.includes(lineNumber)
            return {
              style: {
                backgroundColor: isHighlighted 
                  ? "#fef3c7"
                  : "transparent",
                display: "block",
                width: "100%"
              }
            }
          }}
          customStyle={{
            margin: 0,
            padding: "1rem",
            background: "#ffffff",
            fontSize: "0.875rem",
            lineHeight: "1.5"
          }}
        >
          {children.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

// Componente simplificado para uso inline
export function InlineCode({ 
  children, 
  className 
}: { 
  children: string
  className?: string 
}) {
  return (
    <code className={cn(
      "relative rounded bg-slate-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-slate-800",
      className
    )}>
      {children}
    </code>
  )
}