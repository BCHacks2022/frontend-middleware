import { RentalCheckSection } from "../components/RentalCheckSection";

import Deso from "deso-protocol";

export default function Home() {
    const handleDeso = async () => {
        const deso = new Deso();

        const user = await deso.identity.login();
        console.log(user);
    }
    return (
        <div className="w-screen h-screen  bg-white flex justify-center flex-wrap">
            <input type="button" value="Sign Up with email" className="h-20 bg-blue-400 p-5 m-10" /> <br />
            <input type="button" onClick={handleDeso} value="Sign Up with Deso" className="h-20 bg-blue-400 p-5 m-10" />
        </div>
    );
}

//adapt invest kick oil blind wear speed profit mistake resource misery flock