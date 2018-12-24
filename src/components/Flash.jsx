const Flash = ({ type, message }) =>
    <div className={`flash ${type}`}>
        {message}
    </div>
;

export default Flash;