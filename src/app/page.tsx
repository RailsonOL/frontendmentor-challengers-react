import ProjectPreview from '../components/ProjectPreview'
import './style.css'

export default function Home() {
  return (
    <div className="relative  grid min-h-screen content-center justify-center p-4">
      <main className="grid grid-cols-3 place-content-center gap-4 max-[650px]:grid-cols-2">
        <ProjectPreview
          title="Stats preview card component"
          link="frontendmentor/stats-preview-card"
          category="FrontendMentor - NEWBIE"
          tecnologys={['TS', 'React', 'TailwindCSS']}
        />

        <ProjectPreview
          title="News homepage"
          link="frontendmentor/news-homepage"
          category="FrontendMentor - JUNIOR"
          tecnologys={['TS', 'React', 'TailwindCSS']}
        />

        <ProjectPreview
          title="Advice generator app"
          link="frontendmentor/advice-generator-app"
          category="FrontendMentor - JUNIOR"
          tecnologys={['TS', 'React', 'TailwindCSS']}
        />

        <ProjectPreview
          title="Expenses chart component"
          link="frontendmentor/expenses-chart"
          category="FrontendMentor - JUNIOR"
          tecnologys={['TS', 'React', 'TailwindCSS']}
        />

        <ProjectPreview
          title="Sunnyside agency"
          link="frontendmentor/sunnyside-agency"
          category="FrontendMentor - JUNIOR"
          tecnologys={['TS', 'React', 'TailwindCSS']}
        />
        <ProjectPreview
          title="3 Column preview card"
          link="frontendmentor/3-column-preview-card"
          category="FrontendMentor - NEWBIE"
          tecnologys={['TS', 'React', 'TailwindCSS']}
        />
        <ProjectPreview
          title="Space tourism multi-page website"
          link="space-tourism"
          category="FrontendMentor - INTERMEDIATE"
          tecnologys={['TS', 'React', 'TailwindCSS']}
        />
      </main>
    </div>
  )
}
