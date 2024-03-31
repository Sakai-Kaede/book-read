import '../css/Story.css'

type Props = {
  pageNum: number;
}

const Story = ({pageNum}: Props) => {
  const story:string[] = ["1111111111111111111111111111111",
                          "2222222222222222222222222222222",
                          "3333333333333333333333333333333",
                          "4444444444444444444444444444444"]

  return (
    <div className="area-container">
      <section className="area">
        <p className="story">{story[pageNum - 1]}</p>
      </section>
    </div>
  );
};
export default Story;