import List from "./List"
import EmptyList from "./EmptyList"

export default function ShowLists(props) {
    return (
        <>
            <h4 className="ms-4 mt-3">List</h4>
            <div className="d-flex justify-content-center align-items-center" style={{ width: '100%' }}>
                <div className="d-flex flex-wrap" style={{ width: '100%' }}>
                    {props.animes.length === 0 ?
                        <EmptyList />
                        : props.animes.map((anime) => {
                            return <List anime={anime} key={anime.sno} onDelete={props.onDelete} onComplete={props.onComplete} onStarted={props.onStarted}/>
                        })}
                </div>
            </div>
        </>
    )
}
