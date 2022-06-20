interface Props {}

export function Footer({}: Props) {
    return (
        <footer className="p-6 pt-12 mt-14 shadow-md bg-gray-800">
            <ul className="font-medium text-white flex items-center justify-center">
                <li>Facture - {new Date().getFullYear()}</li>
            </ul>
        </footer>
    );
}

export default Footer;
