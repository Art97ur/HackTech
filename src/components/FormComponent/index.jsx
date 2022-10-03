import { useState } from "react";
import { useDispatch } from "react-redux";
import { postObjective } from "../../redux/slices/action";
import "./styles.css";
import { Button, Input } from "reactstrap";
const initialFormDataState = {
  name: "",
  priority: "",
  state: "",
  deadline_quarter: "",
  deadline_year: "",
  owner_id: 1,
  status: "",
  owner_email: "",
  owner_full_name: "",
  descendant_count: "",
};

const FormComponent = ({ setClose = () => {} }) => {
  const [formData, setFormData] = useState(initialFormDataState);

  const {
    name,
    priority,
    state,
    deadline_quarter,
    deadline_year,
    owner_id,
    status,
    owner_email,
    owner_full_name,
    descendant_count,
  } = formData;
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(postObjective({ ...formData, owner_id: +owner_id }));
    setClose((prevState) => !prevState);
    setFormData(initialFormDataState);
  };

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="forms">
      <form className="objective-forms" onSubmit={onSubmit}>
        <label name="name">Name</label>
        <Input
          onChange={handleChange}
          id="name"
          name="name"
          type="text"
          value={name}
        />
        <label name="owner_full_name">Owner full name</label>
        <Input
          onChange={handleChange}
          name="owner_full_name"
          id="owner_full_name"
          type="text"
          value={owner_full_name}
        />
        <label name="owner_email">Owner Email</label>
        <Input
          id="owner_email"
          onChange={handleChange}
          name="owner_email"
          type="email"
          value={owner_email}
        />
        <label name="deadline_year">Deadline year</label>
        <Input
          onChange={handleChange}
          name="deadline_year"
          id="deadline_year"
          type="number"
          min="2022"
          value={deadline_year}
        />
        <label name="descendant_count">Descendant count</label>
        <Input
          onChange={handleChange}
          name="descendant_count"
          id="descendant_count"
          type="number"
          value={descendant_count}
        />
        <label name="deadline_quarter">Deadline quarter</label>
        <Input
          type="select"
          name="deadline_quarter"
          id="deadline_quarter"
          onChange={handleChange}
          value={deadline_quarter}
        >
          <option selected>-- select an deadline quarter --</option>
          <option value="Q1">Q1</option>
          <option value="Q2">Q2</option>
          <option value="Q3">Q3</option>
          <option value="Q4">Q4</option>
        </Input>

        <label name="state">State</label>
        <Input
          type="select"
          id="state"
          name="state"
          onChange={handleChange}
          value={state}
        >
          <option selected>-- select an state --</option>
          <option value="Behind">Behind</option>
          <option value="On Track">On Track</option>
          <option value="At Risk">At Risk</option>
        </Input>
        <label name="status">Status</label>
        <Input
          type="select"
          id="status"
          name="status"
          onChange={handleChange}
          value={status}
        >
          <option selected>-- select an status --</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </Input>
        <label id="priority" name="priority">
          Priority
        </label>
        <Input
          type="select"
          name="priority"
          onChange={handleChange}
          value={priority}
        >
          <option selected>-- select an priority --</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </Input>
        <Button color="success">Submit</Button>
      </form>
    </div>
  );
};

export default FormComponent;
