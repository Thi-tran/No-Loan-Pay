import React from 'react';
import moment from 'moment';

const LoanBook = ({title, dueDate, note, id, onDelete}) => {
    const dueDateRead = moment(Number(dueDate)).format('MMMM Do, YYYY');
    const dayLeftFormat= moment(Number(dueDate)).format('YYYYMMDD')
    const dayLeft = moment(dayLeftFormat, "YYYYMMDD").fromNow('days');
    const today = moment().startOf('day');
    const dayFromNow = Math.round((dueDate-today-1) / 86400000);

    // set up title 
    let titleChanged = '';
    if (title.length > 10){
        titleChanged = title.slice(0,20) + '...';
    } else titleChanged = title;

    // set up book icon color
    let bookIcon = '';
    switch (true) {
        case (dayFromNow < 0):  
            bookIcon = 'icon-red'
            break;
        case (dayFromNow < 4): 
            bookIcon = 'icon-red'
            break;
        default: 
            bookIcon = 'icon-green'
    }
    const onHandleDelete = (e) => {
        e.preventDefault();
        onDelete(id);
    }
    return (
        <div>
            <div className="card mx-2 my-2 loan-box">
                <div className="card-header loan-box-header d-flex justify-content-between">
                    <ion-icon name="book" id={bookIcon}></ion-icon>
                    <h5 className="card-title text-capitalize">{titleChanged}</h5>
                    <button onClick={onHandleDelete}><ion-icon name="trash"></ion-icon></button>
                </div>
                <div className="card-body">
                    <h5 className="card-text text-capitalize">{title}</h5>
                    <div className="card-text">Due date: {dueDateRead}</div>
                    <div className="card-text mb-2">Due in <strong>{dayLeft}</strong></div>
                    <h6 className="card-subtitle mb-2 text-muted">{note}</h6>
                </div>
            </div>
        </div>
    )
}
export default LoanBook;