import './App.css';
import SectionBehind from "./Components/SectionBehind";
import SectionAboutMe from "./Components/SectionAboutMe";
import SectionTechnology from "./Components/SectionTechnology";

function App() {

    return (
        <>
            <section className="overflow-hidden">
                <SectionBehind></SectionBehind>
                <SectionAboutMe></SectionAboutMe>
                <SectionTechnology></SectionTechnology>
            </section>

        </>
    )
}

export default App;
