import "./comment.css"
import usePostData from "../../Hooks/usePostData"

function Comment() {
    const PostData = usePostData()
    console.log(PostData)
  return (
    <div>Comment</div>
  )
}

export default Comment