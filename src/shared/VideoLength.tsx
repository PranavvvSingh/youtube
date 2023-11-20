import moment from "moment";
type timeType={
  time:number
}
const VideoLength = ({ time }: timeType) => {
  const videoLength = moment().startOf("day").seconds(time).format("H:mm:ss");
  return (
    <div className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
      {videoLength}
    </div>
  );
};
export default VideoLength;
