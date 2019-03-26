import React, {useState} from 'react';
import {addLoan} from '../action/action';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { UserContext } from '../App';

const AddLoanPage = () => {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [date, setDate] = useState(moment());
    const [calendarFocused, setCalendarFocused] = useState(false);

    const onDateChange = (date) => {
        if (date) {
            setDate(date);
        }
    }

    const onFocusChange = ({focused}) => {
        setCalendarFocused(focused);
    }

    return (
        <UserContext.Consumer>
            {({user}) => 
            <div>
                <form className="mt-3" onSubmit={(e) => {
                    e.preventDefault();
                    addLoan(title, date.valueOf(), note, user.uid)
                    setTitle('');
                    setNote('');
                }}>
                    <div className="form mx-auto">
                        <div className="form-group">
                            <input type="text" className="form-control" id="inputEmail3" placeholder="Enter your book title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                        
                        <small id="dateHelp" className="form-text text-muted">Enter your due date</small>
                        <SingleDatePicker 
                            date={date}
                            onDateChange={onDateChange}
                            focused={calendarFocused}
                            onFocusChange={onFocusChange}
                            numberOfMonths={1}
                        />

                        <div className="form-group mt-3">
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter note for the book" rows="3" value={note} onChange={(e)=> setNote(e.target.value)}/>
                        </div>
                        
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-light">Add new book</button>
                    </div>
                </form>
            </div>
            }
        </UserContext.Consumer>
    )
}

export default AddLoanPage;