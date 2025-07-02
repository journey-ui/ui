export function fixImport(content: string) {
  content = content.replaceAll("@/registry/ui/", "@/src/components/ui/")
  content = content.replaceAll("@/registry/", "@/src/")

  return content
}