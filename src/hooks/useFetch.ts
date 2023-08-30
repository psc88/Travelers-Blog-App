import { useEffect, useState } from "react";

interface State<T> {
    data?: T
    isLoading: boolean
    hasError: null
}

export const useFetch = <T=unknown> (url: string) :State<T> => {

    const [state, setState] = useState({
        data: undefined,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
            hasError: null,
        })

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null,
        })
    }

    useEffect(() => {
        getFetch();
    }, [url])


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}
