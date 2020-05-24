import React from 'react';

const Today = (props) => {
  const {
    message,
    forecast: {
      city: {
        name, country,
      },
      list,
    },
  } = props;

  console.log({ list });

  const newList = list.filter((item) => item.dt_txt.includes('15:00:00'));
  return (
    <div>
      <h1>
        {name}
        {' '}
        -
        {' '}
        {country}
      </h1>

      <p>{message}</p>
      <hr />
      <ul>
        {
          newList.map((item) => (
            <li key={item.dt_txt}>
              {new Date(item.dt * 1000).toISOString().slice(0, 16)}
              {' '}
              -
              {' '}
              {item.main.temp}
              {' '}
              &#8451;
            </li>
          ))
      }
      </ul>

    </div>
  );
};

export default Today;
