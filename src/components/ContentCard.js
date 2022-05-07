export default function ContentCard({illustration, title, subtitle}) {
    return (
        <div className="card content-mini center-child-content">
            <img src={illustration} className="content-illustration" alt="illustration"/>
            <div className="content-mini-title">{title}</div>
            <div className="content-mini-subtitle">{subtitle}</div>
        </div>
    )
}