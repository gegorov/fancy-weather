import React from 'react';
import moment from 'moment';
import styles from './Day.module.css';

const Day = (props) => {
  const { getIconUrl, data } = props;
  // console.log({ data });
  console.log(data.dt_text);
  console.log(data);
  return (
    <div className={styles.Day}>
      <h1>{moment(data.dt_txt).format('dddd')}</h1>
      <div className={styles.wrapper}>
        <span className={styles.temp}>
          {Math.round(data.main.temp)}
          &ordm;
        </span>
        <img className={styles.icon} src={getIconUrl(data.weather[0].icon)} alt="" />
      </div>
    </div>
  );
};

export default Day;
