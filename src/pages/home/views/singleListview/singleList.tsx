
import { useParams } from "react-router-dom";
import SingleList from "./singleList/singleList";
import articleContent from "../../static/dummy-data";


const SingleListView = () => {
  
  const {id} = useParams();

const articleInfo = articleContent.find((article)=>article.id ==id);

console.log(articleInfo)

if(!articleInfo){
  return <div>page not found</div>
}
  return (
    <>
     
        <SingleList  /> 
    
        <div>Article not found</div>
    
      <div>eifeigjoigj</div>
    </>
  );
};

export default SingleListView;
