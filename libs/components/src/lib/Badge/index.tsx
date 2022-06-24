import { ColorDisplay } from "@facture/types";

interface Props {
    text: string;
    color: ColorDisplay;
}

export function Badge({ text, color }: Props) {
    if (color === "slate")
        return (
            <span role="badge" className="bg-slate-100 text-slate-800 text-xs font-semibold mx-2 px-2.5 py-0.5 rounded-md my-1 lowercase">
                {text}
            </span>
        );
    else if (color === "gray")
        return (
            <span role="badge" className="bg-gray-100 text-gray-800 text-xs font-semibold mx-2 px-2.5 py-0.5 rounded-md my-1 lowercase">
                {text}
            </span>
        );
    else if (color === "zinc")
        return (
            <span role="badge" className="bg-zinc-100 text-zinc-800 text-xs font-semibold mx-2 px-2.5 py-0.5 rounded-md my-1 lowercase">
                {text}
            </span>
        );
    else if (color === "neutral")
        return (
            <span role="badge" className="bg-neutral-100 text-neutral-800 text-xs font-semibold mx-2 px-2.5 py-0.5 rounded-md my-1 lowercase">
                {text}
            </span>
        );
    else if (color === "stone")
        return (
            <span role="badge" className="bg-stone-100 text-stone-800 text-xs font-semibold mx-2 px-2.5 py-0.5 rounded-md my-1 lowercase">
                {text}
            </span>
        );
    else if (color === "red")
        return (
            <span role="badge" className="bg-red-100 text-red-800 text-xs font-semibold mx-2 px-2.5 py-0.5 rounded-md my-1 lowercase">
                {text}
            </span>
        );
    else if (color === "orange")
        return (
            <span role="badge" className="bg-orange-100 text-orange-800 text-xs font-semibold mx-2 px-2.5 py-0.5 rounded-md my-1 lowercase">
                {text}
            </span>
        );
    else if (color === "amber")
        return (
            <span role="badge" className="bg-amber-100 text-amber-800 text-xs font-semibold mx-2 px-2.5 py-0.5 rounded-md my-1 lowercase">
                {text}
            </span>
        );
    else if (color === "yellow")
        return (
            <span role="badge" className="bg-yellow-100 text-yellow-800 text-xs font-semibold mx-2 px-2.5 py-0.5 rounded-md my-1 lowercase">
                {text}
            </span>
        );
    else if (color === "lime")
        return (
            <span role="badge" className="bg-lime-100 text-lime-800 text-xs font-semibold mx-2 px-2.5 py-0.5 rounded-md my-1 lowercase">
                {text}
            </span>
        );
    else if (color === "green")
        return (
            <span role="badge" className="bg-green-100 text-green-800 text-xs font-semibold mx-2 px-2.5 py-0.5 rounded-md my-1 lowercase">
                {text}
            </span>
        );
    else if (color === "emerald")
        return (
            <span role="badge" className="bg-emerald-100 text-emerald-800 text-xs font-semibold mx-2 px-2.5 py-0.5 rounded-md my-1 lowercase">
                {text}
            </span>
        );
    else if (color === "teal")
        return (
            <span role="badge" className="bg-teal-100 text-teal-800 text-xs font-semibold mx-2 px-2.5 py-0.5 rounded-md my-1 lowercase">
                {text}
            </span>
        );
    else if (color === "cyan")
        return (
            <span role="badge" className="bg-cyan-100 text-cyan-800 text-xs font-semibold mx-2 px-2.5 py-0.5 rounded-md my-1 lowercase">
                {text}
            </span>
        );
    else if (color === "sky")
        return (
            <span role="badge" className="bg-sky-100 text-sky-800 text-xs font-semibold mx-2 px-2.5 py-0.5 rounded-md my-1 lowercase">
                {text}
            </span>
        );
    else if (color === "blue")
        return (
            <span role="badge" className="bg-blue-100 text-blue-800 text-xs font-semibold mx-2 px-2.5 py-0.5 rounded-md my-1 lowercase">
                {text}
            </span>
        );
    else if (color === "indigo")
        return (
            <span role="badge" className="bg-indigo-100 text-indigo-800 text-xs font-semibold mx-2 px-2.5 py-0.5 rounded-md my-1 lowercase">
                {text}
            </span>
        );
    else if (color === "violet")
        return (
            <span role="badge" className="bg-violet-100 text-violet-800 text-xs font-semibold mx-2 px-2.5 py-0.5 rounded-md my-1 lowercase">
                {text}
            </span>
        );
    else if (color === "purple")
        return (
            <span role="badge" className="bg-purple-100 text-purple-800 text-xs font-semibold mx-2 px-2.5 py-0.5 rounded-md my-1 lowercase">
                {text}
            </span>
        );
    else if (color === "fuchsia")
        return (
            <span role="badge" className="bg-fuchsia-100 text-fuchsia-800 text-xs font-semibold mx-2 px-2.5 py-0.5 rounded-md my-1 lowercase">
                {text}
            </span>
        );
    else if (color === "pink")
        return (
            <span role="badge" className="bg-pink-100 text-pink-800 text-xs font-semibold mx-2 px-2.5 py-0.5 rounded-md my-1 lowercase">
                {text}
            </span>
        );
    else if (color === "rose")
        return (
            <span role="badge" className="bg-rose-100 text-rose-800 text-xs font-semibold mx-2 px-2.5 py-0.5 rounded-md my-1 lowercase">
                {text}
            </span>
        );

    return null;
}

export default Badge;
