import Card      from '../../../Card';
import ListTable from '../../../ListTable';
import Tag       from '../../../Tag';

const RouteStat = ({ number, name }) =>
    <div className="route-stat">
        <span className="number">{number}</span> {number === 1 ? name.slice(0, -1) : name}
    </div>
;

const Route = ({ route }) =>
    <div className="routes-container">
        <div className="route-header">
            <h2 className="route-title">{route.name}</h2>
            <div className="route-stats">
                <RouteStat number={route.climbs.length} name='sessions' /> 
                <RouteStat number={route.climbs.reduce((sum, c) => sum + c.attempts, 0)} name='attempts' />
                <RouteStat number={route.climbs.filter((c) => c.sent).length} name='sends' />
            </div>
        </div>

        <div className="route-details">
            <Card title='Details' headerRight={<a className="btn btn-red-inverse btn-small">Edit</a>}>
                <table className="property-table">
                    <tr>
                        <td>Name</td>
                        <td>{route.name}</td>
                    </tr>
                    <tr>
                        <td>Location</td>
                        <td>{route.location.name}</td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td>{route.type}</td>
                    </tr>
                    <tr>
                        <td>Grade</td>
                        <td>{route.grade}</td>
                    </tr>
                    <tr>
                        <td>Tags</td>
                        <td>{route.tags && route.tags.map((tag) => <Tag key={tag} name={tag} />)}</td>
                    </tr>
                </table>

            </Card>

            <Card title='Photos'>
            
            </Card>
            
            <Card title='History'>
                {route.climbs.length ?
                    <ListTable
                        properties={[{
                            title: 'Session',
                            getValue: (c) => 'session'
                        }, {
                            title: 'Number of attempts',
                            getValue: (c) => c.attempts
                        }, {
                            title: 'Sent?',
                            getValue: (c) => c.sent ? <i className="fas fa-check"></i> : null
                        }, {
                            title: 'Notes',
                            getValue: (c) => c.notes
                        }]}
                        results={route.climbs}
                    /> :
                    'You have not recorded any climbs for this route.'
                }
            </Card>
        </div>
    </div>
;

export default Route;