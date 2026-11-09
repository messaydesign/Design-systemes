import { TableOfContents } from "@/components/docs/client"
import { DocsMobileNav, DocsSidebar } from "@/components/docs/docs-nav"

export default function DocsLayout({ children }: LayoutProps<"/docs">) {
  return (
    <div className="mx-auto flex w-full max-w-[1400px] gap-10 px-4 sm:px-8">
      <aside className="sticky top-16 hidden h-[calc(100svh-4rem)] w-60 shrink-0 overflow-y-auto pt-8 lg:block">
        <DocsSidebar />
      </aside>
      <main className="min-w-0 flex-1 py-8">
        <div className="mb-6 lg:hidden">
          <DocsMobileNav />
        </div>
        <article data-docs-content className="flex max-w-3xl flex-col gap-6">
          {children}
        </article>
      </main>
      <aside className="sticky top-16 hidden h-[calc(100svh-4rem)] w-52 shrink-0 overflow-y-auto pt-8 xl:block">
        <TableOfContents />
      </aside>
    </div>
  )
}
