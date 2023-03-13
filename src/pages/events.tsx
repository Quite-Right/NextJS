import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

interface IEventsProps {
    eventsList: any[];
}

const fetchEvents = async (category?: string) => {
   const res = await fetch(`http://localhost:4000/events${category ? `?category=${category}`: ''}`);
   const data = await res.json();
   return data;
}

const Events = ({eventsList}: IEventsProps) => {
    const [events, setEvents] = useState(eventsList);
    const router = useRouter();
    const onChangeCategory = async (category?: string) => {
        router.push(
            `/events${category ? `?category=${category}` : ''}`,
            undefined,
            {shallow: true}
        );
        const events = await fetchEvents(category);
        setEvents(events)
    }
    return <>
        <Link href="/">
            <div>
                Back
            </div>
        </Link>
        <button onClick={() => onChangeCategory('sports')}>
            sport events
        </button>
        <h1>Events</h1>
        {events.map(event => <Link href={`/events/${event.id}`} key={event.id}>
            <div>
                {event.title}
            </div>
        </Link>)}
    </>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {query} = context;
    const {category} = query;
    const eventsList = await fetchEvents(category ? 'sports' : undefined);
    return {
        props: {
            eventsList
        },
    }
};

export default Events;
