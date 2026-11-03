export default function BlogDetailsBreadcrumbAreaWrapper() {
  return (
    <div className="breadcrumb-area-wrapper">
      <div className="left">
        <p>{"Dealership events"}</p>

        <h1 className="title">
          {"Seasonal Car Care Tips to Keep Your "}
          <br />
          {" Vehicle Best Running Smoothly"}
        </h1>

        <div className="author-area">
          <div className="image">
            <img src="/assets/images/testimonials/author-01.svg" alt="" />
          </div>

          <ul>
            <li>{"Jack Alexander "}</li>

            <li>{"March 26, 2024"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
