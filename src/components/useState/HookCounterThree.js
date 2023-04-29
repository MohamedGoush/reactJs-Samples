import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        {/* Only Update one Name One Time using This Code */}
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ firstName: e.target.value })}
        />{" "}
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ lastName: e.target.value })}
        />
        <h1>Your First Name is -{name.firstName}</h1>
        <h1>Your Last Name is -{name.lastName}</h1>
        <h2>{JSON.stringify(name)}</h2>{" "}
        {/* it will shows how to the value is store on the string using on setState */}
      </form>
      <form>
        {/* Only Update one Name One Time using This Code */}
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />{" "}
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h1>Your First Name is -{name.firstName}</h1>
        <h1>Your Last Name is -{name.lastName}</h1>
        <h2>{JSON.stringify(name)}</h2>{" "}
        {/* it will shows how to the value is store on the string using on setState */}
      </form>
    </div>
  );
}

export default HookCounterThree;
