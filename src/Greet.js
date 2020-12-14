export function Greet(props) {
    console.log(props)
    return ( < div >
            {
                props.names.map((name) => {
                    return (<h1>{name}</h1>)
                })
            }
        </div>
    );
}