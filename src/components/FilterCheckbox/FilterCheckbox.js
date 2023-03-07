import React, {useState} from 'react';
import styles from './FilterCheckbox.module.scss'

function FilterCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange() {
    setIsChecked(!isChecked);
  }

  return (
    <label className={styles.checkbox}>
      <input className={styles.checkbox__input} type="checkbox" value={isChecked} onChange={handleChange}/>
      <div className={styles.checkbox__slider}></div>
    </label>
  );
}

export default FilterCheckbox;
