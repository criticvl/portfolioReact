import ABOUT_ME from './components/about-me/About-me';
import BANNER from './components/banner/Banner';
import MY_PROJECTS from './components/my-projects/My-projects';
import EDUCATION_EXPERIENCE from './components/education-experience/Education-experience';
import CONTACT from './components/contact/Contact';
import './css/index.css';

function App() {

    return (
    <>
        <BANNER/>
        <ABOUT_ME/>
        <EDUCATION_EXPERIENCE/>
        <MY_PROJECTS/>
        <CONTACT/>
    </>
    )

}

export default App;