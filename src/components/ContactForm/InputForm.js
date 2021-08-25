import { useState, useRef } from "react";
import { connect } from "react-redux";
import contactAction from "../../redux/actions";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import s from "./InputForm.module.css";

 function Input({ onFormSubmit, contacts }) {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactId = useRef(uuidv4());

   const inputValue = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

        case 'number':
          setNumber(value);
          break;

            default:
              return;
    }
  };

   const addContact = (e) => {
    e.preventDefault();
    const newContact = contacts.some((contact) => contact.name === name)
    if (newContact) {
        alert(`${name} is already in contacts`);
        formReset();
        return;
      }
      onFormSubmit({ name: name, number: number, contactId: contactId});
      formReset();
  };

   const formReset = () => {
    setName('');
    setNumber('');
  };

    return (
      <div className={s.inputContainer}>
        <form className={s.form} onSubmit={addContact}>
          <label className={s.formItem}>
            Name{" "}
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={name}
              onChange={inputValue}
            />
          </label>
          <label className={s.formItem}>
            Number{" "}
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={number}
              onChange={inputValue}
            />
          </label>
          <button type="submit" className={s.button}>
            Add contact
          </button>
        </form>
      </div>
    );
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
 })

const mapDispatchToProps = dispatch => ({
  onFormSubmit: data => dispatch(contactAction.addContact(data)), 
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Input);

Input.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

