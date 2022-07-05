import { Footer } from "../Footer";
import { Nav } from "../Nav";

interface Props {
    children: any;
}

export function AppShell({ children }: Props) {
    return (
        <>
            <Nav />
            <main className="w-5/6 mx-auto">{children}</main>
            <Footer />
        </>
    );
}

export default AppShell;
