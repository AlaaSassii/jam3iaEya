import React, { useEffect, useState } from "react";
import { createActivity, getActivities } from "../../helpers/ActivityMethod";

const ModalFormActivity = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [Activities, setActivities] = useState([]);

  const handleCreateActivity = (e) => {
    e.preventDefault();
    createActivity(title, description);
    setTitle("");
    setDescription("");
  };
  console.log({ Activities });

  useEffect(() => {
    const getActivitiesFunction = async () => {
      const Activities = await getActivities();
      setActivities(Activities);
    };
    getActivitiesFunction();
  }, []);
  return (
    <form>
      <input
        placeholder='Title...'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        placeholder='Description...'
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button onClick={handleCreateActivity}>Create Activity</button>
      {Activities?.map((activity, index) => {
        return (
          <div key={index}>
            <h1>Title: {activity.title}</h1>
            <p>description:{activity.description}</p>
          </div>
        );
      })}
    </form>
  );
};

export default ModalFormActivity;
