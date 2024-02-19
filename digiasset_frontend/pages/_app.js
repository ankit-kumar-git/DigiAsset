import "@/styles/globals.css";

import {Navbar} from '../components/componentsindex';

const App = ({ Component, pageProps }) =>  (
    <div>
        <Navbar />
        <Component {...pageProps} />
    </div>

);

export default App;
