import React from 'react'
import ReactDOM from 'react-dom'
import "../css/style.scss";
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Weather from "./frontend/weather";

const Root = () => {
  const tabsArray = [
    { title: "1", content: "one" },
    { title: "2", content: "two" },
    { title: "3", content: "three" }
  ]
  return (
    <div>
      <Clock />
      <Tabs tabs={tabsArray} />
      <Weather />
    </div>
  )
}
document.addEventListener("DOMContentLoaded", () => {

  ReactDOM.render(<Root/>, document.getElementById('root'))
})