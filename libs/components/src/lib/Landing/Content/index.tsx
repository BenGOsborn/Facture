import { SearchHit } from "@facture/types";

import { Card } from "./card";

interface Props {
    query: string;
    data?: SearchHit[];
}

export function Content({ query, data }: Props) {
    return (
        <div className="space-y-7 w-full">
            <div className="space-y-3 rounded-md shadow-md py-7 px-14 bg-white">
                <h2 className="text-xl text-gray-900 font-bold">Manufacturers</h2>
                <p className="text-lg text-gray-700">Here's a list of manufacturers that match your query</p>
            </div>
            {data && data.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 auto-rows-max auto-cols-max">
                    {data.map((result, index) => (
                        <Card key={index} resultIndex={index} totalResults={data.length} query={query} hit={result} />
                    ))}
                </div>
            ) : (
                <p className="text-3xl text-gray-900 font-bold text-center mx-auto py-24">No results found.</p>
            )}
        </div>
    );
}

export default Content;
