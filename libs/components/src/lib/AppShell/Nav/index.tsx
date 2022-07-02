import { NavMain } from "./NavMain";
import NavNotification from "./NavNotification";

export function Nav() {
    return (
        <div className="mb-14 shadow-md">
            <NavNotification />
            <NavMain />
        </div>
    );
}

export default Nav;
