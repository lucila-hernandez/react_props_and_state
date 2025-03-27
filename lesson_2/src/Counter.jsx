
function Counter(props) {
    return (
        <div className="Counter">
            <small>{props.label}</small>
            <h1>{props.value}</h1>
            <button>+</button>
            <button>-</button>
        </div>
    )
}

export default Counter;