import './cardStyle.css'

export function Card(){
    return (
        <div className="card">
            <strong>{nome}</strong>
            <small>{chegada}</small>
        </div>
    )
}