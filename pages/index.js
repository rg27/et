import Timeline from '../components/Timeline';
import Container from '../components/Container';
import ProjectCard from '../components/ProjectCard';

 const Home = () => {
  return (
    <Container>
      <div className="justify-center ">
      <iframe 
        width="900" 
        height="750" 
        src="https://datastudio.google.com/embed/reporting/23b10dc1-1e70-492f-adc4-cf93bc112041/page/EQl9B" 
        frameBorder="0" 
        style={{border:'0'}} 
        allowFullScreen>
      </iframe>
      </div>
    </Container>
  );
}

export default Home