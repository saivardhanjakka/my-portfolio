import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import PersonalProjectAndFooter from "./components/PersonalProjectAndFooter";
import Education from "./components/Education";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutMe />
      <Experience />
      <PersonalProjectAndFooter />
      <Education/>
    </div>
  );
}

export default App;
