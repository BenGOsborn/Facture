import { NavMain } from "./NavMain";
import { NavNotification } from "./NavNotification";

import { Modal } from "../Modal";

export function Nav() {
    return (
        <div className="mb-14 shadow-md">
            <Modal title="My Modal" onClose={() => console.log("Hello World")}>
                Hello World
            </Modal>
            <NavNotification />
            <NavMain />
        </div>
    );
}

export default Nav;
