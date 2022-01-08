import { Fragment } from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/event/Event";
import ResultTitle from "../../components/event/results-title";
import ErrorALert from "../../components/ui/error-alert";
import Button from "../../components/ui/Button";

const FilteredEventPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return (
      <Fragment>
        <p className="center">Loading...</p>
      </Fragment>
    );
  }
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorALert>
          <p>Invalid Filter. Please adjust your values! </p>
        </ErrorALert>

        <div className="center">
          <Button link="/events">Show all event</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvent = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  if (!filteredEvent || filteredEvent.length === 0) {
    return (
      <Fragment>
        <ErrorALert>
          <p>No event found for the chosen filter</p>
        </ErrorALert>
        <div className="center">
          <Button link="/events">Show all event</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);
  return (
    <Fragment>
      <ResultTitle date={date} />
      <EventList items={filteredEvent} />
    </Fragment>
  );
};

export default FilteredEventPage;
