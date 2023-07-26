import ReactPlayer from "react-player/youtube";

function Video(props) {
  return (
    <ReactPlayer url={props.url} />
  );
};

export default Video