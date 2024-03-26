import '../css/Story.css'

type Props = {
  pageNum: number;
}

const Story = ({pageNum}: Props) => {
  const story:string[] = ["111","222","333","444"]

  return (
    <section className="area">
      <p className="story">{story[pageNum - 1]}</p>
    </section>
  );
};
export default Story;