import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-y-4 w-full h-[80vh] py-32">
      <span className="text-30 font-bold text-gray">404</span>
      <span className="text-18 text-gray_sub">페이지를 찾을 수 없습니다.</span>
      <Link
        href="/"
        className="text-16 text-gray_sub hover:text-gray underline"
      >
        홈으로 돌아가기
      </Link>
    </section>
  );
};

export default NotFound;
