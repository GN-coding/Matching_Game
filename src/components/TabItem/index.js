import './index.css'

const TabItem = props => {
  const {tablist, clickTabItem, activeTabId} = props

  const onClickTabItem = tabId => {
    clickTabItem(tabId)
  }

  return (
    <ul className="tab-container">
      {tablist.map(tab => (
        <button
          key={tab.tabId}
          className={`button ${activeTabId === tab.tabId ? 'active' : ''}`}
          type="button"
        >
          <li onClick={() => onClickTabItem(tab.tabId)}>{tab.displayText}</li>
        </button>
      ))}
    </ul>
  )
}

export default TabItem
