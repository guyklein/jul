import SearchResult from "./SearchResult";
import React from "react";
import {useSelector} from "react-redux";
import {useResults} from "../redux/Results";


const ResultsPane = ({search}) => {
    const results = useSelector(useResults);
    return (
    <div>
        {search.loading && <div>...</div>}
        {search.error && <div>Error: {search.error.message}</div>}
        {results && (
            <div>
                <ul>
                    {
                        results
                        .map(product => (
                        <SearchResult
                            key={product.name}
                            product={product}
                        />
                    ))}
                </ul>
            </div>
        )}
    </div>)
};

export default ResultsPane;
