export const REQUEST_TASK_CREATION = `REQUEST_TASK_CREATION`;
export const CREATE_TASK = `Create_TASK`;

export const requestTaskCreation = (groupID) => ({
    type:REQUEST_TASK_CREATION,
    groupID
});

export const create_TASK = (taskID, groupID, ownerID) => ({
    type:CREATE_TASK,
    taskID,
    groupID,
    ownerID
})