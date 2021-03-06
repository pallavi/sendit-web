import { Fragment } from 'react';
import PropTypes    from 'prop-types';

const ResultsTable = ({ properties, results, onRowClick, expandedDetails }) => {
    return (
        <div className="results-table-container">
            <table className="results-table">
                <thead>
                    <tr>
                        <th className="results-count" colSpan={properties.length}><span className="number">{results.length}</span> routes</th>
                    </tr>
                    <tr>
                        {properties.map((property) =>
                            <th id={property.title} key={property.title}>{property.title}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {results.map((result) =>
                        <Fragment>
                            <tr className={`row-result ${onRowClick ? 'row-link' : ''} ${result.expanded ? 'expanded' : ''}`} onClick={onRowClick ? () => onRowClick(result) : null} id={result.id} key={result.id}>
                                {properties.map((property) =>
                                    <td id={property.title} key={property.title}>{property.getValue(result)}</td>
                                )}
                            </tr>
                            {result.expanded && 
                                <tr className="row-details">
                                    <td colSpan={properties.length}>
                                        {expandedDetails(result)}
                                    </td>
                                </tr>
                            }
                        </Fragment>
                    )}
                </tbody>
            </table>
        </div>
    )
};

ResultsTable.propTypes = {
    properties: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        getValue: PropTypes.func.isRequired
    })).isRequired,
    results: PropTypes.arrayOf(PropTypes.shape({
        expanded: PropTypes.bool
    })).isRequired,
    onRowClick: PropTypes.func,
    expandedDetails: PropTypes.func
};

export default ResultsTable;