import React from "react";
import { connect } from "react-redux";
import filterAction from "../../redux/actions";
import { getFilter } from "../../redux/contacts-selector";
import PropTypes from "prop-types";
import s from "./Filter.module.css";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <label className={s.filter}>
      <p className={s.title}>Find contacts by name </p>

      <input
        className={s.inputFilter}
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: getFilter(state),
})

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(filterAction.changeFilter(e.currentTarget.value)),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
