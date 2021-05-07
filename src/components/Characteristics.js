const Characteristics = ({title, icon, charac, unit, val}) => {
    return (
        <div className = "box">
            <h3>{title}{icon}</h3>
            <p>
                {charac}{unit}{val}
            </p>
        </div>
    )
}

export default Characteristics
