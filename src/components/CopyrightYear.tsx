export default async function CopyrightYear() {
  "use cache";
  return new Date().getUTCFullYear();
}
