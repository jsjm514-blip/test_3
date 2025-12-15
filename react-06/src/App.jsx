import { Avatar, Typography, Input, Button } from "antd";
import { useState } from "react";
import "antd/dist/reset.css";
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from "dayjs";
import 'dayjs/locale/ko'

const { Title } = Typography;
const { TextArea } = Input;

dayjs.extend(relativeTime);
dayjs.locale("ko");

function App() {
  const [input,setInput]=useState('')
  const [comments,setComments] = useState([])
  const [avatarSeed, setAvatarSeed]=useState(()=>Math.floor(Math.random()*200));
  const getAvatarUrl = (seed) => `https://api.dicebear.com/7.x/miniavs/svg?seed=${seed}`;

  const handleSubmit = () => {
    setComments([
        {
            id:Date.now(),
            avatar: getAvatarUrl(avatarSeed),
            author: "User",
            content: input,
            date : dayjs().fromNow(),
            liked: false,
        },
        ...comments,
    ]);
    setInput("");
    setAvatarSeed(Math.floor(Math.random()*200));
    console.log('등록완료',comments);
  }


  return (
    <>
      <Title level={2} style={{ marginBottom: "1.5em", textAlign: "center", marginTop: "2rem" }}>
        Ant Design 댓글창
      </Title>

      <div className="main-container">
        <div className="input-container">
            <Avatar src={getAvatarUrl(avatarSeed)} />
          <div className="input-area">
            <TextArea rows={4} value={input} onChange={(e)=>setInput(e.target.value)} />
            <Button type="primary" style={{marginTop:10}} onClick={handleSubmit}>등록</Button>
          </div>
        </div>
        <Title level={5}>총 {comments.length}개의 댓글이 있습니다.</Title>
        {comments.map(comment=>(
            <div key={comment.id} className="list-container">
                <Avatar src={comment.avatar} />
                {comment.author}
                {comment.date}
                {comment.content}
            </div>
        ))}
      </div>
    </>
  );
}

export default App;
