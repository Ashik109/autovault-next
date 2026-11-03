import type { DetailRecord } from "@/data/details";
export default function BlogDetailsBreadcrumbAreaWrapper({
  record,
}: {
  record: DetailRecord;
}) {
  return (
    <div className="breadcrumb-area-wrapper">
      <div className="left">
        <p>{"Dealership events"}</p>

        <h1 className="title">{record.title}</h1>

        <div className="author-area">
          <div className="image">
            <img src="/assets/images/testimonials/author-01.svg" alt="" />
          </div>

          <ul>
            <li>{record.author}</li>

            <li>{record.date}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
