import React from 'react';

function Card({ header, body}) {
  return (
    <div className="flex flex-col justify-evenly p-11 my-10 border rounded-lg">
      <div className="card-header px-4 py-2 font-semibold ">
        {header}
      </div>
      <div className="flex flex-row justify-between text-center card-body px-4 py-4 text-gray-600">
        {body}
      </div>
    </div>
  );
}

export default Card;
