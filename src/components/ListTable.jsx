const ListTable = ({ properties, results }) =>
    <table className="list-table">
        <thead>
            <tr>
                {properties.map((property) =>
                    <th id={property.title} key={property.title}>{property.title}</th>
                )}
            </tr>
        </thead>
        <tbody>
            {results.map((result) => 
                <tr className="row-result" id={result.id} key={result.id}>
                    {properties.map((property) =>
                        <td id={property.title} key={property.title}>{property.getValue(result)}</td>
                    )}
                </tr>
            )}
        </tbody>
    </table>
;

export default ListTable;