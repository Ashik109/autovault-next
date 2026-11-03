export default function HomeEightVideo() {
  return (
    <div className="rts-video-area bg-video-five bg_image jarallax">
      <video muted={true} loop={true} id="myVideo" playsInline={true}>
        <source src="/assets/images/portfolio/video-01.webm" />
      </video>

      <div className="content">
        <button id="myBtn" aria-label="Open control"></button>
      </div>
    </div>
  );
}
