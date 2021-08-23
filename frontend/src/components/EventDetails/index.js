import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import './EventDetails.css'

const EventDetails = () => {

    let {eventId} = useParams()
    eventId = parseInt(eventId)
    // console.log(typeof eventId)
    const currentEvent = useSelector(state=> state.events[eventId])
    // console.log(currentEvent)

    return (
        <>
            <div className="event-details">
                <Link to='/events/' className='back-to-events'>Back to Events Page</Link>
                <p className="event-info">{currentEvent?.name}</p>
                <img src={`${currentEvent?.image}`} alt={currentEvent?.name}></img>
                <p>Description: {currentEvent?.description}</p>            
                <p>HostId:{currentEvent?.hostId}</p>
                <p>VenueId:{currentEvent?.venueId}</p >
                <p>Date: {currentEvent?.date}</p >
                <p>Capacity: {currentEvent?.capacity}</p>

            </div>
        </>
    )
}

export default EventDetails