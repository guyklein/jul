import React from "react";
import useSearchJul from "../hooks/searchJul";
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import ResultsPane from "./ResultsPane";

const JulSearchBar = () => {
    const { inputText, setInputText, search } = useSearchJul();
    return (
        <div>
            <Input
                id="jul-search-input"
                endAdornment={
                    <InputAdornment position="end">
                        { inputText ? <ClearIcon
                            onClick={() => {
                                //clear the results
                                setInputText('');
                            }
                        } /> : <SearchIcon /> }
                    </InputAdornment>
                }
                onChange={e => setInputText(e.target.value)}
                value={inputText}
            />
            <ResultsPane
                search={search}
            />
        </div>
    );
};

export default JulSearchBar;
