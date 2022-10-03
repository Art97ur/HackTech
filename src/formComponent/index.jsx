import { useState } from "react";
import { AuthToken, BACKEND_URL } from "../const";
import "./styles.css";
export const FormComponent = () => {
  const [task,setTask] = useState([])
  const [contactData, setContactData] = useState({
    name: {
      value: "",
    },
    priority: {
      value: "",
    },
    state: {
      value: "",
    },
    deadline_quarter: {
      value: "",
    },

    deadline_year: {
      value: "",
    },
    owner_id: {
      value: "",
    },
    contributor_ids: {
      value: "",
    },
    parent_id: {
      value: "",
    },
    description: {
      value: "",
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const {
      name: { value: name },
      priority: { value: priority },
      state: { value: state },
      deadline_quarter: { value: deadline_quarter },
      // deadline_year: { value: deadline_year },
      // owner_id: { value: owner_id },
      contributor_ids: { value: contributor_ids },
      parent_id: { value: parent_id },
      description: { value: description },
    } = contactData;

    const formData = {
      name,
      priority,
      state,
      deadline_quarter,
      deadline_year:"2022",
      owner_id:"34",
      contributor_ids,
      parent_id,
      description,
    };
    const token = localStorage.getItem("access_token")
    fetch(`${BACKEND_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setTask((prev) => {
          console.log(data);
        });
        console.log(data, "dataaaaaaaaa");
      });
    e.target.reset();
    
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setContactData((prev) => {
      return {
        ...prev,
        [name]: {
          ...prev[name],
          value,
        },
      };
    });
  };

  return (
    <div className="forms">
      <form className="objective-forms" onSubmit={onSubmit}>
        <input onChange={handleChange} name="name" type="text" />
        <input onChange={handleChange} name="priority" type="text" />
        <input onChange={handleChange} name="state" type="text" />
        <input onChange={handleChange} name="deadline_quarter" type="text" />
        {/* <input onChange={handleChange} name="deadline_year" type="text" />
        <input onChange={handleChange} name="owner_id" type="text" /> */}
        <input onChange={handleChange} name="contributor_ids" type="text" />
        <input onChange={handleChange} name="parent_id" type="text" />
        <input onChange={handleChange} name="description" type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
};
