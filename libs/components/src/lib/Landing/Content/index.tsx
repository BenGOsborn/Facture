import { SearchHit } from "@facture/types";

import { Card } from "./card";

interface Props {
    data: SearchHit[];
}

export function Content({ data }: Props) {
    return (
        <div className="rounded-md shadow-md py-7 px-14 bg-white space-y-7">
            <h2 className="text-xl text-gray-900 font-bold">Manufacturers</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 auto-rows-max auto-cols-max">
                {data.map((result, index) => (
                    <Card key={index} hit={result} />
                ))}
            </div>
        </div>
    );
}

export default Content;
