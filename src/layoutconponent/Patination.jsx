export default function Patination({
  handlePageChange,
  totalPages,
  currentPage,
}) {
  return (
    <>
      <div className="tw-flex tw-justify-center tw-gap-4 tw-text-white">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`${
              currentPage === index + 1 ? "tw-bg-blue-500" : "tw-bg-gray-300"
            } tw-p-2 tw-rounded hover:tw-cursor-pointer`}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}
