import "./App.css";

import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { About, Contact } from "./components/Info";

function App() {
    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>Import and Export Components Example</h1>

            <Header />
<About />
<Contact />
<Footer />
        </div>
    );
}

export default App;

