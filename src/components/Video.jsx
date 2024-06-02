import "./Video.css";

function Video({ title, image, channel, views, time }) {
  return (
    <div className="video">
      <div className="pic">
        <img src={image} alt="img" />
      </div>
      <div className="content">
        <p className="title">{title}</p>
        <p className="channel">{channel}</p>
        <div className="views flex">
          <p>{views} views</p>
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
}

export default Video;
