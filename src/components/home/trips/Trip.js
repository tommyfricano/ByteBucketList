import React, { useState, useContext, useEffect } from 'react'
import '../Home.css';
// import DeleteModal from '../modals/DeleteModal';
// import BackDrop from '../modals/BackDrop';
// import TodosContext from '../Todo-Context/todo-context'
// import EditModal from '../modals/EditModal';

const Trip = props => {

    const [delModalOpen, setDelModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);

    const taskId = props.user_id;
    console.log(taskId);

    const deleteHandler = () => {
        setDelModalOpen(true);
    }

    const editHandler = () => {
        setEditModalOpen(true);
    }

    const closeModal = props => {
        setEditModalOpen(false);
        setDelModalOpen(false);
    }

    const confirmDelete = props => { 
        // todoList.delTodo(taskId);
        setDelModalOpen(false);
    }

    const confirmEdit = props => {
        console.log(props);
        // todoList.editTodo(props);
        setEditModalOpen(false);
    }

  return (
  
      <div className='grid-container-tasks' key={props.user_id}>
                        <div className='grid-item-tasks-title' >
                            {props.tripName}
                            </div>
                        <div className='grid-item-tasks' >{props.status}
                        </div>
                        <div className='grid-item-tasks' >{props.possiblePoints}</div>
                        <div className='grid-item-tasks' >{props.dstlatitude}</div>
                        <div className='grid-item-tasks' >{props.dstlongitude}</div>
                        <div className='grid-item-tasks-delete'>
                            <button type="button" class="edit-button" onClick={editHandler}></button>
                        </div>
                        {/* { editModalOpen && <EditModal onCancel={closeModal} onConfirmEdit={confirmEdit} todoInfo={props}/>}
                        { editModalOpen && <BackDrop onCancel={closeModal}/> } */}
                        <div className='grid-item-tasks-delete' > 
                            <button type="button" class="delete-btn" onClick={deleteHandler}>x</button>
                        </div>
                        {/* { delModalOpen && <DeleteModal onCancel={closeModal} onConfirm={confirmDelete} />}
                        { delModalOpen && <BackDrop onCancel={closeModal}/> } */}
                </div>
  );
}

export default Trip;