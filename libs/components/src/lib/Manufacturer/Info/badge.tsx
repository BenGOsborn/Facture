import { FindManufacturerQuery } from "@facture/types";

interface Props {
    color: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["color"];
    children: any;
}

export function Badge({ color, children }: Props) {
    return <span className={`bg-${color}-100 text-${color}-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md my-1`}>{children}</span>;
}

export default Badge;
