import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus } from "../slices/todoSlice";
import styles from "../styles/modules/app.module.scss";
import Button, { SelectButton } from "./Button";
import TodoModal from "./TodoModal";

const AppHeader = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const filterStatus = useSelector((state) => state.todo.filterStatus);
    const dispatch = useDispatch();


    const updatedFilter = (e) => {
        dispatch(updateFilterStatus(e.target.value));
    };
    return (
        <div className={styles.appHeader}>
            <Button variant="primary" onClick={() => setModalOpen(true)}>
                Add Task
            </Button>
            <SelectButton id="status" value={filterStatus} onChange={updatedFilter}>
                <option value="all">All</option>
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
            </SelectButton>
            <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
    );
};

export default AppHeader;