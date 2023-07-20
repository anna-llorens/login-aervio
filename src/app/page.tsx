import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Main page</h1>
      <Link href="/dashboard">Dashboard</Link>
    </main>
  );
}
