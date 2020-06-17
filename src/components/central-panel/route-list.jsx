// import React, { useEffect } from 'react'
// import { connect } from 'react-redux'

// import { getRouteList } from '../../actions/index'

// import Route from './route'

// export const RouteList = (props) => {
//     console.log(props, 'routelist errors')
//     useEffect(() => {
//         // props.getRouteList({ route_type: props.route_type, date: props.date })
//     }, [])

//     return (
//         <>
//             {props.routes && props.routes.forEach(route => {
//                 return <Route route={route} />
//             })}
//         </>
//     )
// }

// const mapStateToProps = state => {
//     return {
//         route_type: state.report.route_id,
//         date: state.date || state.report.date,
//         routes: state.routes
//     }
// }

// export default connect(mapStateToProps, { getRouteList })(RouteList)