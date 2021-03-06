import Moment from 'moment';

import DropdownInput from '../../DropdownInput';
import ResultsTable  from '../../ResultsTable';
import Tag           from '../../Tag';
import TextInput     from '../../TextInput';

const Routes = ({ routes, locations, tags, filters, handleName, handleDropdown, handleSubmit, viewRoute }) =>
    <div className="routes-container">
        <form className="routes-filters" onSubmit={handleSubmit}>
            <div className="search-filter">
                <TextInput
                    required={true}
                    label="Search by name"
                    name="name"
                    value={filters.name}
                    placeholder="Enter route name"
                    type="search"
                    handleChange={handleName}
                />
            </div>
            <div className="dropdown-filters">
                <DropdownInput
                    label="Filter by type"
                    name="type"
                    options={[
                        'All',
                        'Boulder',
                        'Toprope',
                        'Lead'
                    ]}
                    value={filters.type}
                    handleChange={handleDropdown}
                />
                <DropdownInput
                    label="Filter by location"
                    name="location"
                    options={locations}
                    value={filters.location}
                    handleChange={handleDropdown}
                />
                <DropdownInput
                    label="Filter by tag"
                    name="tag"
                    options={tags}
                    value={filters.tag}
                    handleChange={handleDropdown}
                />
                <DropdownInput
                    label="Sort by"
                    name="sortBy"
                    options={[
                        'Newest - Oldest',
                        'Oldest - Newest',
                        'Name',
                        'Grade'
                    ]}
                    value={filters.sortBy}
                    handleChange={handleDropdown}
                />
            </div>
        </form>
        <ResultsTable
            properties={[{
                title: 'Name',
                getValue: (r) => r.name
            }, {
                title: 'Location',
                getValue: (r) => r.location.name
            }, {
                title: 'Type',
                getValue: (r) => r.type
            }, {
                title: 'Grade',
                getValue: (r) => r.grade
            }, {
                title: 'Date Added',
                getValue: (r) => Moment(r.date_created).format('MM/DD/YY')
            }, {
                title: 'Sent',
                getValue: (r) => (r.climbs && r.climbs[0].sent && r.climbs[0].attempts === 1 ?
                    <i className="fas fa-check"></i> :
                    null
                )
            }, {
                title: 'Flash',
                getValue: (r) => (r.climbs && r.climbs.some((climb) => climb.sent) ?
                <i className="fas fa-check yellow"></i> :
                null
            )
            }, {
                title: 'Tags',
                getValue: (r) => <div>{r.tags && r.tags.map((tag) => <Tag key={tag} name={tag} />)}</div>
            }]}
            results={routes}
            onRowClick={viewRoute}
        />
    </div>
;

export default Routes;