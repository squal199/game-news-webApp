import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";



interface FetchDataResponse<T> {
    count: number;
    results: T[];
}

const useData = <T> (apiEndpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<string>("");
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const controller = new AbortController();
        
        setLoading(true);
        apiClient.get<FetchDataResponse<T>>(apiEndpoint, {signal: controller.signal})
            .then(({data}) => {
                setData(data.results);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });
        return () => controller.abort();
    },[])
    
    return {data, error, isLoading};
};

export default useData;