import firebase from '../firebase';

const database = firebase.database();

export const addLoan = (title, dueDate, note, id) => {
    database.ref(`loan/${id}`).push({
        title,
        dueDate,
        note
    })
}

export const deleteLoan = (userID, bookID) => {
    database.ref(`loan/${userID}/${bookID}`).remove()
        .then(() => {console.log('removed')})
        .catch((err) => {console.log('Error', err)});
}

