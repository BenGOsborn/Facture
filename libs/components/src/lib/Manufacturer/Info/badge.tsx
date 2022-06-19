import { FindManufacturerQuery } from "@facture/types";

interface Props {
    color: FindManufacturerQuery["manufacturers"]["data"][number]["attributes"]["color"];
    children: any;
}

export function Badge({ color, children }: Props) {
    if (color === "slate") return <span className="bg-slate-100 text-slate-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md my-1">{children}</span>;
    else if (color === "gray") return <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md my-1">{children}</span>;
    else if (color === "zinc") return <span className="bg-zinc-100 text-zinc-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md my-1">{children}</span>;
    else if (color === "neutral") return <span className="bg-neutral-100 text-neutral-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md my-1">{children}</span>;
    else if (color === "stone") return <span className="bg-stone-100 text-stone-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md my-1">{children}</span>;
    else if (color === "red") return <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md my-1">{children}</span>;
    else if (color === "orange") return <span className="bg-orange-100 text-orange-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md my-1">{children}</span>;
    else if (color === "amber") return <span className="bg-amber-100 text-amber-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md my-1">{children}</span>;
    else if (color === "yellow") return <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md my-1">{children}</span>;
    else if (color === "lime") return <span className="bg-lime-100 text-lime-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md my-1">{children}</span>;
    else if (color === "green") return <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md my-1">{children}</span>;
    else if (color === "emerald") return <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md my-1">{children}</span>;
    else if (color === "teal") return <span className="bg-teal-100 text-teal-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md my-1">{children}</span>;
    else if (color === "cyan") return <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md my-1">{children}</span>;
    else if (color === "sky") return <span className="bg-sky-100 text-sky-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md my-1">{children}</span>;
    else if (color === "blue") return <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md my-1">{children}</span>;
    else if (color === "indigo") return <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md my-1">{children}</span>;
    else if (color === "violet") return <span className="bg-violet-100 text-violet-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md my-1">{children}</span>;
    else if (color === "purple") return <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md my-1">{children}</span>;
    else if (color === "fuchsia") return <span className="bg-fuchsia-100 text-fuchsia-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md my-1">{children}</span>;
    else if (color === "pink") return <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md my-1">{children}</span>;
    else if (color === "rose") return <span className="bg-rose-100 text-rose-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md my-1">{children}</span>;

    return null;
}

export default Badge;
