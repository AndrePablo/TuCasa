import React from "react";

const NotFoundException = () => {
  return (
    <div className="nonexistant">
      <h1 className="nonexistant__heading"> 404 not found</h1>
      <p className="nonexistant__paragraph"> link requested does not exist </p>
    </div>
  );
};

export default NotFoundException;
