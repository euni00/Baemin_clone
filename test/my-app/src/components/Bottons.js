export default function Count({clickplus, clickminus}) {
        return (
        <div>
            <button onClick={clickplus}>plus</button>
            <button onClick={clickminus}>minus</button>
        </div>
    )
}