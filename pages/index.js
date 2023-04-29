import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { Button } from 'react-bootstrap';
import { Form, FormControl } from 'react-bootstrap';
import { getMembers } from '../components/api/memberData';
import { useAuth } from '../utils/context/authContext';
import MemberCard from '../components/MemberCard';
// import SearchBar from '../components/search';

function Home() {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState('');

  const { user } = useAuth();

  const getAllMembers = () => {
    getMembers(user.uid).then(setMembers);
  };

  useEffect(() => {
    getAllMembers();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredMembers = members.filter((member) => {
    const query = search.toLowerCase();
    return (
      member.first_name.toLowerCase().includes(query)
      || member.last_name.toLowerCase().includes(query)
      || member.description.toLowerCase().includes(query)
    );
  });

  return (
    <div className="text-center my-4">
      <Form className="d-flex justify-content-center mb-3">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={handleSearch}
          value={search}
        />
      </Form>
      <div className="d-flex flex-wrap justify-content-center">
        {filteredMembers.map((member) => (
          <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getAllMembers} />
        ))}
      </div>
    </div>
  );
}

export default Home;
