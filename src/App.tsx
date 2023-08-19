import './App.css';
import SectionBehind from "./Components/SectionBehind";
import SectionAboutMe from "./Components/SectionAboutMe";

function App() {

    return (
        <>
            <section className="overflow-hidden">
                <SectionBehind></SectionBehind>
                <SectionAboutMe></SectionAboutMe>
            </section>

        </>
    )
}

export default App;
