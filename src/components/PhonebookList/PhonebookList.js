import React from "react";
import { useEffect } from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import  contactsOperations  from '../../redux/contacts-operations';
import PhoneBookItem from "../PhonebookItem/PhoneBookItem";
import { getVisibleContacts, getLoading } from "../../redux/contacts-selector";
// import PropTypes from "prop-types";

const PhonebookList = ({ title }) => {
  const contacts = useSelector(getVisibleContacts);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const onDeleteList = id => dispatch(contactsOperations.deleteItem(id));

  return (
    <div>
      <h2>{title}</h2>
      
      <ul>
        {contacts.map(({ id, name, number }) => (
          <PhoneBookItem
            key={id}
            name={name}
            number={number}
            onDeleteList={() => onDeleteList(id)}
          />
        ))}
      </ul>
      {loading && <h1>Loading...</h1>}
    </div>
  );
};

  
export default PhonebookList;



// const mapStateToProps = (state) => {
//  const { filter, items } = state.contacts;
//  const visibleContacts = getVisibleContacts(items, filter);

//  return {
//   contacts: visibleContacts,
//  }
// }
  
// const mapDispatchToProps = dispatch => ({
//   onDeleteList: (id) => dispatch(deleteItem.deleteItem(id))
// })

// PhonebookList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
//   title: PropTypes.string.isRequired,
//   onDeleteList: PropTypes.func.isRequired,
// };

  
// export default connect(mapStateToProps, mapDispatchToProps)(PhonebookList);
