import SearchResult from "./SearchResult";
import React from "react";
import {useSelector} from "react-redux";
import {useResults} from "../redux/Results";
import CircularProgress from "@material-ui/core/CircularProgress";


const ResultsPane = ({search}) => {
    const results = useSelector(useResults);
    return (
        <div className="results-container">
            {search.loading && <CircularProgress/>}
            {search.error && <div>Error: {search.error.message}</div>}
            {results && (
                <ul>
                    {
                        results.map((product, index) => (
                            <SearchResult
                                key={index}
                                product={product}
                            />
                        ))
                    }
                </ul>
            )}
        </div>)
};

export default ResultsPane;
