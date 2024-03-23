interface StoryProps {
  story: string,
}

const Story = (props: StoryProps) => {
  return (
    <section className="area">
      <p className="story">{props.story}</p>
    </section>
  );
};
export default Story;