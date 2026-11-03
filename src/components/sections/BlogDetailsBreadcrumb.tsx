import type { DetailRecord } from "@/data/details";
import BlogDetailsBreadcrumbAreaWrapper from "@/components/sections/BlogDetailsBreadcrumbAreaWrapper";
export default function BlogDetailsBreadcrumb({
  record,
}: {
  record: DetailRecord;
}) {
  return (
    <div className="rts-breadcrumb-area blog-details jarallax">
      <div className="container">
        <BlogDetailsBreadcrumbAreaWrapper record={record} />
      </div>
    </div>
  );
}
