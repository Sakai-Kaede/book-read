import '../css/BookImage.css'

const BookImage = () => {
  return (
    <div className="image-container">
      <a href="URL">
        <img src="../src/assets/Waterfall.jpg" alt="Waterfall-Pictures" className="BookImage"></img>
        <div className="BookCover"></div>
        <div className="BookText">本</div>
        <div className="BookLabel"></div>
      </a>
    </div>
  )
}
export default BookImage