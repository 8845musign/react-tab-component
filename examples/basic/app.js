import React from 'react'
import { render } from 'react-dom'

import { Tabs, TabList, Tab, TabPanel } from '../../src/index.js'

const App = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>tab 1</Tab>
        <Tab>tab 2</Tab>
      </TabList>

      <TabPanel>panel 1</TabPanel>
      <TabPanel>panel 2</TabPanel>
    </Tabs>
  )
}

render(
  <App />,
  document.getElementById('root')
)