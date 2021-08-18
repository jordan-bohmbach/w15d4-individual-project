import { csrfFetch } from "./csrf"

const LOAD_EVENTS = 'events/LOAD'
const ADD_EVENT = 'events/ADD'
const REMOVE_EVENT = 'events/REMOVE'
const EDIT_EVENT = 'events/EDIT'

const loadEvents = (events) => ({
    type: LOAD_EVENTS,
    events
})

const update = (event) => ({
    type: EDIT_EVENT,
    event
})

const addOneEvent = event => ({
    type: ADD_EVENT,
    event
})

const remove = (eventId) => ({
    type: REMOVE_EVENT,
    eventId,
})

export const getEvents = () => async(dispatch) => {
    const response = await fetch(`/api/events`);
    const eventList = await response.json()
    dispatch(loadEvents(eventList));
}

export const createOneEvent = (payload) => async dispatch => {
    const {
        name,
        date,
        capacity,
        image,
        venue,
        category,
        hostId
    } = payload

    console.log('hostId is currently ', hostId)
    console.log('hostId type is ', typeof hostId)

    const data = {hostId, venueId: venue, categoryId: category, name, date, capacity, image}
    const response = await csrfFetch(`/api/events`, {
        method: 'POST',
        body: JSON.stringify(data)
    });

    const newEvent = await response.json();
    if(response.ok) {
        dispatch(addOneEvent(newEvent))
    }
    return newEvent;
}

export const updateEvent = event => async dispatch => {
    const response = await csrfFetch(`/api/events/${event.id}`, {
        method: 'put',
        body: JSON.stringify(event)
    })

    if(response.ok){
        const event = await response.json()
        dispatch(update(event))
        return event
    }
}

export default function eventsReducer(state={}, action){
    switch (action.type){
        case LOAD_EVENTS: {
            let newState = { ...state }
            const newEvents = {}
            action.events.forEach(event => {
                newEvents[event.id] = event;
            })
            return {
                ...state,
                ...newEvents
            }
        }
        case ADD_EVENT: {
            if(!state[action.events.id]) {
                const newState = {
                    ...state,
                    [action.event.id]: action.event
                };
                const eventList = newState.list.map(id => newState[id])
                eventList.push(action.event)
                // newState.list = sortList(eventList)
                newState.list = eventList
                return newState
            }
            return {
                ...state,
                [action.event.id] : {
                    ...state[action.event.id],
                    ...action.event,
                }
            }
        }
        case REMOVE_EVENT: {
            let newState = { ...state }
            delete newState[action.eventId];
            return newState;
        }
        case EDIT_EVENT: {
            return{
                ...state,
                [action.event.id] : action.event
            }
        }
        default: {
            return state;
        }
    }
}