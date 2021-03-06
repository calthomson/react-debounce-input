import React from 'react';
import DebounceInput from '../..';
import css from './App.css';


class Textarea extends React.Component {
  state = {
    value: '',
    minLength: 0,
    debounceTimeout: 500,
    infinite: false,
    forceNotifyByEnter: false,
    forceNotifyOnBlur: true
  };

  render() {
    const {
      minLength, infinite, debounceTimeout,
      forceNotifyByEnter, forceNotifyOnBlur,
      value, key
    } = this.state;

    return (
      <div>
        <div className={css.config}>
          <label className={css.label}>
            Min length:
            <input className={css.input}
              type="range"
              value={minLength} step={1} min={0} max={10}
              onChange={e => this.setState({minLength: parseInt(e.target.value, 10)})} />
            {minLength}
          </label>

          <label className={css.label}>
            Debounce timeout:
            <input className={css.input}
              type="range"
              disabled={infinite}
              value={debounceTimeout} step={100} min={0} max={2000}
              onChange={e => this.setState({debounceTimeout: parseInt(e.target.value, 10)})} />
            {debounceTimeout}
          </label>

          <label className={css.label}>
            Infinite timeout:
            <input className={css.input}
              type="checkbox"
              checked={infinite}
              onChange={e => this.setState({infinite: e.target.checked})} />
          </label>
        </div>

        <div className={css.config}>
          <label className={css.label}>
            Notify by:
          </label>

          <label className={css.label}>
            "Enter" keypress:
            <input className={css.input}
              type="checkbox"
              checked={forceNotifyByEnter}
              onChange={e => this.setState({forceNotifyByEnter: e.target.checked})} />
          </label>

          <label className={css.label}>
            Blur:
            <input className={css.input}
              type="checkbox"
              checked={forceNotifyOnBlur}
              onChange={e => this.setState({forceNotifyOnBlur: e.target.checked})} />
          </label>
        </div>

        <DebounceInput
          cols="60"
          rows="7"
          element="textarea"
          forceNotifyByEnter={forceNotifyByEnter}
          forceNotifyOnBlur={forceNotifyOnBlur}
          minLength={minLength}
          debounceTimeout={infinite ? -1 : debounceTimeout}
          onChange={e => this.setState({value: e.target.value})}
          onKeyDown={e => this.setState({key: e.key})} />
        <p>Value: {value}</p>
        <p>Key pressed: {key}</p>
      </div>

    );
  }
}


export default Textarea;
