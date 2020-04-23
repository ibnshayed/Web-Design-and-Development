import React, { useState } from "react";

export default () => {
  const firstName = useInput("jon", "text");
  const lastName = useInput("dao", "text");
  const age = useInput(10, "number");

  return (
    <div>
      First Name: <input {...firstName} /> <br />
      Last Name: <input {...lastName} /> <br />
      age: <input {...age} /> <br />
    </div>
  );
};

const useInput = (initialValue, type) => {
  const [value, setValue] = useState(initialValue);

  return {
    type,
    value,
    onChange: e => setValue(e.target.value)
  };
};
