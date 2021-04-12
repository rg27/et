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
        src="https://datastudio.google.com/embed/reporting/fbb278de-6911-45ff-a6f8-2532699379e0/page/GdkCC" 
        frameBorder="0" 
        style={{border:'0'}} 
        allowFullScreen>
      </iframe>
      </div>
    </Container>
  );
}

export default Home