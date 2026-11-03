export default function PortfolioDetails2Video() {
  return (
    <div className="rts-video-area video-2 bg-video-five bg_image jarallax mb--40">
      <video muted={true} loop={true} id="myVideo" playsInline={true}>
        <source src="/assets/images/banner/33.mp4" />
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
