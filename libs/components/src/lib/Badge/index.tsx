interface Props {
    children: any;
}

export function Badge({ children }: Props) {
    return <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">{children}</span>;
}

export default Badge;
