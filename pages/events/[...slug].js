import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useState, useEffect } from "react";
import ErrorAlert from "../../components/events/ErrorAlert";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/ui/Button";
import useSWR from "swr";

export default function FilteredEventsPage() {
  const router = useRouter();

  const [loadedEvents, setLoadedEvents] = useState(null);

  const filterData = router.query.slug;

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(
    "https://nextjs-course-58101-default-rtdb.firebaseio.com/events.json",
    fetcher
  );

  useEffect(() => {
    if (data) {
      const events = [];

      for (const key in data) {
        events.push(data[key]);
      }

      setLoadedEvents(events);
    }
  }, [data]);

  let pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta name="description" content="A list of filtered events" />
    </Head>
  );

  if (!loadedEvents) {
    return (
      <Fragment>
        {pageHeadData}
        <p className="center">Loading...</p>
      </Fragment>
    );
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content={`All events for ${numMonth}/${numYear}.`}
      />
    </Head>
  );

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <div className="center">
        <ErrorAlert>
          <p>Invalid filter, Please adjust your values!</p>
        </ErrorAlert>
        <Button link="/events">Show all events</Button>
      </div>
    );
  }

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === numYear &&
      eventDate.getMonth() === numMonth - 1
    );
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="center">
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <Button link="/events">Show all events</Button>
      </div>
    );
  }

  const targetDate = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={targetDate} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}
