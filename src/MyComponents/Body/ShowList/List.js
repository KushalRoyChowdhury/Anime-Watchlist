import './List.css';

export default function List(props) {

    return (
        <div className="listStyle m-1 ">
            <div className="card rounded-4">
                <div className="card-body">
                    <h5 className="card-title fw-semibold">{props.anime.title}</h5>
                    <p className="card-title fw-normal fs-6">Status: {props.anime.status}</p>
                    {
                        props.anime.status === 'Watching' ?
                            <button className="btn btn-success m-1 rounded-pill" onClick={() => {props.onComplete(props.anime)}}>Completed</button>
                            : props.anime.status === 'Yet to Watch' ?
                                <>
                                    <button className="btn btn-warning m-1 rounded-pill" onClick={() => {props.onStarted(props.anime)}}>Started</button>
                                    <button className="btn btn-success m-1 rounded-pill" onClick={() => {props.onComplete(props.anime)}}>Completed</button>
                                </>
                                : ""
                    }
                    <button className="btn btn-danger m-1 rounded-pill" onClick={() => {props.onDelete(props.anime)}}>Delete</button>
                </div>
            </div>
        </div>
    )
}
