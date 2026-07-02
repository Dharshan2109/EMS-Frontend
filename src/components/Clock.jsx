import {
    useEffect,
    useState
}
from "react";

function Clock(){

    const [
        time,
        setTime
    ] = useState(
        new Date()
    );

    useEffect(()=>{

        const timer =
            setInterval(()=>{

                setTime(
                    new Date()
                );

            },1000);

        return ()=>{

            clearInterval(
                timer
            );
        };

    },[]);

    return(

        <div
            className=
            "clock"
        >

            <h4>

                {
                    time
                    .toLocaleTimeString()
                }

            </h4>

            <small>

                {
                    time
                    .toLocaleDateString()
                }

            </small>

        </div>
    );
}

export default Clock;