import {useState} from "react";
import useConstant from "use-constant";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import {useAsyncAbortable} from "react-async-hook";

const searchJulProduct = async (
    text,
    abortSignal
) => {
    const result = await fetch(
        `https://avo-ops-staging.herokuapp.com/api/v1/products/search?query=${encodeURIComponent(text)}`,
        {
            signal: abortSignal,
        }
    );
    if (result.status !== 200) {
        throw new Error('bad status = ' + result.status);
    }
    const json = await result.json();
    return json;
};

const useSearchJul = () => {
    // Handle the input text state
    const [inputText, setInputText] = useState('');

    // Debounce the original search async function
    const debouncedSearchJulProduct = useConstant(() =>
        AwesomeDebouncePromise(searchJulProduct, 500)
    );

    const search = useAsyncAbortable(
        async (abortSignal, text) => {
            // If the input less than 3 characters, return nothing immediately (without the debouncing delay!)
            if (text.length < 3) {
                return [];
            }
            // Else we use the debounced api
            else {
                return debouncedSearchJulProduct(text, abortSignal);
            }
        },
        // Ensure a new request is made everytime the text changes (even if it's debounced)
        [inputText]
    );

    // Return everything needed for the hook consumer
    return {
        inputText,
        setInputText,
        search,
    };
};

export default useSearchJul;
