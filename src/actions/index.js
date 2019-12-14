import axios from 'axios';

export const fetchAllDefects = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3001/defects');

        dispatch({type: 'FETCH_ALL_DEFECTS', payload: response.data})
    }
};

export const createDefect = (formValues) => {
    return async (dispatch, getState) => {

        const response = await axios.post('http://localhost:3001/defects', {...formValues});

        dispatch({ type: 'CREATE_DEFECT', payload: response.data })
    }
};

export const fetchDefect = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/defects/${id}`);

        dispatch({type: 'FETCH_DEFECT', payload: response.data})
    }
};

export const editDefect = (id, formValues) => {
    return async (dispatch) => {
        const response = await axios.patch(`http://localhost:3001/defects/${id}`, formValues);

        dispatch({ type: 'EDIT_DEFECT', payload: response.data });
    }
};

export const deleteDefect = (id) => {
    return async (dispatch) => {
        const response = await axios.delete(`http://localhost:3001/defects/${id}`);

        dispatch({ type: 'DELETE_DEFECT', payload: id })
    }
};