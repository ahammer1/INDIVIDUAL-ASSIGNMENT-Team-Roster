import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewTeamDetails } from '../../components/api/mergedData';

export default function ViewTeam() {
  const [TeamDetails, setTeamDetails] = useState({});
  const router = useRouter();

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  // TODO: make call to API layer to get the data
  useEffect(() => {
    viewTeamDetails(firebaseKey).then(setTeamDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">
        <h5>
          {TeamDetails.first_name} {TeamDetails.last_name}
          {TeamDetails.favorite ? ' 🤍' : ''}
        </h5>
        Team Email: <a href={`mailto:${TeamDetails.email}`}>{TeamDetails.email}</a>
      </div>
    </div>
  );
}
