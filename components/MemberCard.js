import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSingleMember } from './api/memberData';

function MemberCard({ memberObj, onUpdate }) {
  const deleteThisMember = () => {
    if (window.confirm(`Delete ${memberObj.first_name} ${memberObj.last_name}?`)) {
      deleteSingleMember(memberObj.firebaseKey).then(() => onUpdate());
    }
  };

  const styles = {
    card: {
      backgroundColor: '#ccc',
      borderRadius: 10,
      padding: '1rem',
      width: '18rem',
    },
    cardImage: {
      // objectFit: 'scale-down',
      width: '150px',
      height: '180px',
      borderRadius: 20,
    },
  };

  return (
    <Card style={styles.card}>
      <Card.Img className="mx-auto" variant="top" src={memberObj.image} style={styles.cardImage} />
      <Card.Body>
        <Card.Title>{memberObj.first_name} </Card.Title>
        <Card.Text>{memberObj.last_name}</Card.Text>
        {/* <Card.Text>{memberObj.description}</Card.Text> */}
        {/* DYNAMIC LINK TO VIEW THE Member DETAILS  */}
        <Link href={`/member/${memberObj.firebaseKey}`} passHref>
          <Button variant="dark" size="sm" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE Member DETAILS  */}
        <Link href={`/member/edit/${memberObj.firebaseKey}`} passHref>
          <Button variant="dark" size="sm">EDIT</Button>
        </Link>
        <Button variant="dark" size="sm" onClick={deleteThisMember} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

MemberCard.propTypes = {
  memberObj: PropTypes.shape({
    image: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    // description: PropTypes.string,
    favorite: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default MemberCard;
