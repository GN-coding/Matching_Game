import './index.css'

const ImgItem = props => {
  const {imagesList, clickThumbnail} = props

  const handleClick = imageUrl => {
    clickThumbnail(imageUrl)
  }

  return (
    <ul className="imglist-container">
      {imagesList.map(each => (
        <li key={each.id}>
          <img
            src={each.thumbnailUrl}
            alt="img"
            className="img-card-img"
            onClick={() => handleClick(each.imageUrl)}
          />
        </li>
      ))}
    </ul>
  )
}

export default ImgItem
