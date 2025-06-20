

export default function EmptyList(props) {
    let listStyle = {
        width: '100%'
    }
    return (
        <div className="col-sm-6 mb-3 mb-sm-0 m-1" style={listStyle}>
            <div className="card rounded-4">
                <div className="card-body fw-semibold">
                    Nothing in List
                </div>
            </div>
        </div>
    )
}
