import React from 'react';
import { connect } from 'react-redux';
import { requestTaskCreation } from '../store/mutations';

export const TaskList = ({tasks, name, id, createNewTask}) => (
    <div>
        <h1>
            {name}
        </h1>
        <div>
            {tasks.map(task=> (<div key={task.id}> {task.name} </div>))}
        </div>
        <button onClick={ () => createNewTask(id)}>Add New Task</button>
    </div>
)

const mapStateToProps = (state, ownProps) => {
    let groupID = ownProps.id;
    return {
        name:ownProps.name,
        id:groupID,
        tasks:state.tasks.filter(task=> task.group === groupID),
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        createNewTask(id){
                console.log("create new task..." , id);
                dispatch()
        }
    }
}

export const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps) (TaskList);