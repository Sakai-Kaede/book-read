interface PageNumProps {
  pageNum: number
}

const PageNum = (props: PageNumProps) => {
  return (
      <p className="pageNum">Page {props.pageNum} of 999</p>
  );
};
export default PageNum