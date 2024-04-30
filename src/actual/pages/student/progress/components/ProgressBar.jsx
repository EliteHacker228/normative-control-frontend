import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import DocumentsService from "../../../../services/DocumentsService.js";


export default function ProgressBar() {
    const [repetitionCount, setRepetitionCount] = useState(0);

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setRepetitionCount(prevState => (prevState + 1) % 4);
        }, 250);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [repetitionCount]);

    return (
        <div>
            <p>Ожидание{'.'.repeat(repetitionCount)}</p>
        </div>
    );
}