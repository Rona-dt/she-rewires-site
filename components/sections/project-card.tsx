import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Project } from "@/types/content"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <p className="text-sm font-medium uppercase tracking-[0.12em] text-md-primary">{project.category} · {project.status}</p>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-md-onSurfaceVariant">{project.description}</p>
        <ul className="mt-4 space-y-2 text-sm text-md-onSurfaceVariant">
          {project.outcomes.map((outcome) => <li key={outcome}>- {outcome}</li>)}
        </ul>
      </CardContent>
    </Card>
  )
}
