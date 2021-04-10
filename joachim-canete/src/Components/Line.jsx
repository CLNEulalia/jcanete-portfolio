

export default function Line() {
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 1
            }}
        />
    );
    return (
        <ColoredLine color='#ffc107'/>
    )
}