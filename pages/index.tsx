import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import About from '../components/About';
import Contact from '../components/Contact';
import ExperienceComp from '../components/ExperienceComp';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Techs from '../components/Techs';
import home from '../public/home.png';
import Image from 'next/image';
import { Experience, PageInfo, Project, Social, Tech } from '../typings';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchTechs } from '../utils/fetchTechs';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSocials } from '../utils/fetchSocials';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  experience: Experience;
  techs: Tech[];
  projects: Project[];
  project: Project;
  socials: Social[];
}

const Home = ({ pageInfo, experiences, experience, techs, projects, project, socials }: Props) => {
  return (
    <div className="bg-[#252438] text-[#fffcfd] h-screen snap-y 
    snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar 
    scrollbar-track-gray-400/10 scrollbar-thumb-[#fed700]/70">
      <Head>
        <title>My Next App</title>         
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <ExperienceComp experiences={experiences} experience={experience} />
      </section>

      <section id="techs" className="snap-start">
        <Techs techs={techs} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} project={project} />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="absolute bottom-8 w-10 right-8 justify-center cursor-pointer">
          <div className="flex items-center">
            <Image className="filter grayscale hover:grayscale-0
            cursor-pointer" src={home} alt="home" />
          </div>
        </footer>
      </Link>
      
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const techs: Tech[] = await fetchTechs();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  return {
    props: {
      pageInfo,
      experiences,
      techs,
      projects,
      socials,
    },
    revalidate: 10,
  };
}
