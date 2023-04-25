import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleMember } from '../../components/api/memberData';

export default function ViewMember() {
  const [memberDetails, setMemberDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleMember(firebaseKey).then(setMemberDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">
        <h5>
          {memberDetails.first_name}
        </h5>
        <h6>
          {memberDetails.last_name}
          {memberDetails.favorite ? ' 🤍' : ''}
        </h6>
        <p>{memberDetails.description || ''}</p>
        <hr />
      </div>
    </div>
  );
}
