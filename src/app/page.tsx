import ProjectPreview from '../components/ProjectPreview'

export default function Home() {
  return (
    <div className="h-screen p-4">
      <main className="grid grid-cols-3 place-content-center gap-4 max-[650px]:grid-cols-2">
        <ProjectPreview
          title="Stats preview card component"
          link="frontendmentor/stats-preview-card"
          category="FrontendMentor - NEWBIE"
          tecnologys={['TS', 'React', 'TailwindCSS']}
        />
      </main>
    </div>
  )
}
