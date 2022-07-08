import { Features } from "./Features";
import { Hero } from "./Hero";

export function LandingMain() {
    return (
        <div className="space-y-36">
            <Hero />
            <Features />
        </div>
    );
}

export default LandingMain;
