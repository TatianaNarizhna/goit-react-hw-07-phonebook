import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addContact = createAction('contact/addContact', data => {
    return {
        payload: {
            id: uuidv4(),
            name: data.name,
            number: data.number,
          }
    }
})

const deleteItem = createAction('contact/delete');

const changeFilter = createAction('filter/change');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteItem, changeFilter };


// const addContact = data => ({
//         type: types.ADD_CONTACT,
//         // payload: data,
//         payload: {
//           id: uuidv4(),
//           name: data.name,
//           number: data.number,
//         }
//     }
// )

// const deleteItem = listId => ({
//     type: types.DELETE_ITEM,
//     payload: listId,
// })

// const changeFilter = value => ({
//     type: types.CHANGE_FILTER,
//     payload: value,
// })

// eslint-disable-next-line import/no-anonymous-default-export
// export default { addContact, deleteItem };