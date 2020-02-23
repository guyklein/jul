import React, {useEffect} from "react";
import useSearchJul from "../hooks/searchJul";
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import ResultsPane from "./ResultsPane";
import {useDispatch, useSelector} from "react-redux";
import {updateResults, clearResults} from "../redux/ResultsActionCreators";
import {useResults} from "../redux/Results";
import {useSearchText} from "../redux/SearchText";
import {clearSearchText, updateSearchText} from "../redux/SearchTextActionCreators";


const JulSearchBar = (props) => {
    const {inputText, setInputText, search} = useSearchJul();
    const dispatch = useDispatch();
    const results = useSelector(useResults);
    const searchText = useSelector(useSearchText);
    useEffect(() => {
        if (search.loading && results.length) {
            // clear the search results
            dispatch(clearResults());
        }
        if (search.result && search.result.length && !results.length) {
            // update the search results
            dispatch(updateResults(search.result));
        }
    }, [dispatch, search, results]);
    useEffect(() => {
        if (inputText.length >= 3 && searchText !== inputText) {
            // update the input text
            dispatch(updateSearchText(inputText))
        } else if (inputText.length < 3 && searchText.length) {
            // clear the input text
            dispatch(clearSearchText());
        }
    }, [dispatch, search, inputText, searchText]);
    return (
        <>
            <div className="input-search-bar-wrapper">
                <Input
                    className="input-search-bar"
                    id="jul-search-input"
                    endAdornment={
                        <InputAdornment position="end">
                            {inputText ? <ClearIcon
                                onClick={() => {
                                    //clear the results
                                    setInputText('');
                                }
                                }/> : <SearchIcon/>}
                        </InputAdornment>
                    }
                    onChange={e => setInputText(e.target.value)}
                    value={inputText}
                />
            </div>
            <ResultsPane
                search={search}
            />
        </>
    );
};

export default JulSearchBar;
