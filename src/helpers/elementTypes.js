export const isTab = (el) => {
  return el.type && el.type.tabsRole === 'Tab'
}

export const isTabList = (el) => {
  return el.type && el.type.tabsRole === 'TabList'
}

export const isTabPanel = (el) => {
  return el.type && el.type.tabsRole === 'TabPanel'
}

export const isTabChild = (el) => {
  return isTab(el) || isTabList(el) || isTabPanel(el)
}
