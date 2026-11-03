export default function FaqVideo() {
  return (
    <div className="rts-video-area inner bg-video-five bg_image jarallax">
      <video muted={true} loop={true} id="myVideo" playsInline={true}>
        <source src="/assets/images/portfolio/video-01.webm" />
      </video>

      <div className="content">
        <div id="myBtn">
          <img src="/assets/images/video/round-text.svg" alt="" />

          <img src="/assets/images/video/play.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
