import SearchResult from "./SearchResult";
import React from "react";

const ResultsPane = ({search}) =>
    <div>
        {search.loading && <div>...</div>}
        {search.error && <div>Error: {search.error.message}</div>}
        {search.result && (
            <div>
                {
                    // <div>Results: {search.result.length}</div>
                }
                <ul>
                    {search.result.map(product => (
                        <SearchResult
                            key={product.name}
                            product={product}
                        />
                    ))}
                </ul>
            </div>
        )}
    </div>;

export default ResultsPane;
