import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';
import { Section } from './Section';
import { Socials } from './Socials';

type BodyProps = {
  className?: string;
}

export default function Body({ className }: BodyProps) {
  return (
    <div className={className}>
      <h1 className="name">Youssef Mahmoud</h1>
      <p className="title">Software Engineer</p>
      <button className="email-button"
      onClick={() => window.open('mailto:kamel.youssef1@gmail.com')}
      >
        <MdEmail />
        <p className="email-text">Email</p>
      </button>
      <button className="linkedin-button"
      onClick={() => window.open('https://www.linkedin.com/in/youssef-h-mahmoud/')}
      >
        <FaLinkedinIn />
        <p className="linkedin-text">LinkedIn</p>
      </button>
      <Section 
        title="About" 
        description="I am a software engineer with a passion for building web applications that are both functional and aesthetically pleasing." 
        titleClass="section-title about-title"
        descriptionClass="section-description about-description"
      />
      <Section 
        title="Interests" 
        description="I am into everything tech and I love to learn new things. I like to stay active and I am a big fan of the gym and running." 
        titleClass="section-title interests-title"
        descriptionClass="section-description interests-description"
      />
      <Socials className="socials" />

    </div>
  )
}