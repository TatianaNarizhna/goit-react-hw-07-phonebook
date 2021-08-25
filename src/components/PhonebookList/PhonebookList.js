import React from "react";
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import  deleteItem  from '../../redux/actions';
import PhoneBookItem from "../PhonebookItem/PhoneBookItem";
import { getVisibleContacts } from "../../redux/contacts-selector";
// import PropTypes from "prop-types";

const PhonebookList = ({ title }) => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteList = id => dispatch(deleteItem.deleteItem(id));

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
    </div>
  );
};


export default PhonebookList;

// ***
// const getVisibleContacts = (contacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

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
