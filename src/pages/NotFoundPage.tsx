// Tailwind мне не зашел, с ним сложнее творить творческий стилистический беспорядок

function NotFoundPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[calc(100vh-174px)]">
        <div>
          <img className="block mx-auto" src="/404.jpg" alt="" />
          <div className="bg-black py-9">
            <h2 className="text-center text-white uppercase font-semibold text-3xl">
              Неизвестный путь
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
