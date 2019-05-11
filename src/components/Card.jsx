const Card = ({ title, headerRight, children }) =>
    <div className="card" id={title}>
        <div className="card-header">
            <h3>{title}</h3>
            <div className='float-right'>{headerRight}</div>
        </div>
        <div className="card-content">
            {children}
        </div>
    </div>
;

export default Card;