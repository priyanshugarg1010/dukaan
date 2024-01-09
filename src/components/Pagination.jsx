/* eslint-disable react/prop-types */
import { useState } from "react";
import { paymentData } from "../data/payment";
import { useCallback } from "react";

function Button2({ content, onClick, active, disabled }) {
  return (
    <button
      className={`flex flex-col cursor-pointer items-center justify-center w-9 h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-lg
      ${active ? "bg-blue-500 text-white" : "text-black"}
      ${
        !disabled
          ? " hover:bg-blue-500 hover:text-white"
          : "text-black bg-white cursor-not-allowed"
      }
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

function PaginationNav1({
  gotoPage,
  canPreviousPage,
  canNextPage,
  pageCount,
  pageIndex,
}) {
  const renderPageLinks = useCallback(() => {
    if (pageCount === 0) return null;
    const visiblePageButtonCount = 8;
    let numberOfButtons =
      pageCount < visiblePageButtonCount ? pageCount : visiblePageButtonCount;
    const pageIndices = [pageIndex];
    numberOfButtons--;
    [...Array(numberOfButtons)].forEach((_item, itemIndex) => {
      const pageNumberBefore = pageIndices[0] - 1;
      const pageNumberAfter = pageIndices[pageIndices.length - 1] + 1;
      if (
        pageNumberBefore >= 0 &&
        (itemIndex < numberOfButtons / 2 || pageNumberAfter > pageCount - 1)
      ) {
        pageIndices.unshift(pageNumberBefore);
      } else {
        pageIndices.push(pageNumberAfter);
      }
    });
    return pageIndices.map((pageIndexToMap) => (
      <li key={pageIndexToMap}>
        <Button2
          content={pageIndexToMap + 1}
          onClick={() => gotoPage(pageIndexToMap)}
          active={pageIndex === pageIndexToMap}
        />
      </li>
    ));
  }, [pageCount, pageIndex]);
  return (
    <ul className="flex gap-2 items-center">
      <li>
        <button
          className=" hover:bg-blue-500 w-20 hover:text-white h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] border border-gray-400 text-sm font-normal transition-colors rounded-lg"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
      </li>
      {renderPageLinks()}
      <li>
        <button
          className="w-16  hover:bg-blue-500 hover:text-white h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] border border-gray-400 text-sm font-normal transition-colors rounded-lg"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          Next
        </button>
      </li>
    </ul>
  );
}

const Pagination = () => {
  const length = paymentData.length;
  const [pageIndex, setPageIndex] = useState(0);
  const pageCount = Math.ceil(length / 1);
  return (
    <>
      <div className="flex gap-3 flex-wrap p-6 py-12">
        <PaginationNav1
          gotoPage={setPageIndex}
          canPreviousPage={pageIndex > 0}
          canNextPage={pageIndex < pageCount - 1}
          pageCount={pageCount}
          pageIndex={pageIndex}
        />
      </div>
    </>
  );
};

export default Pagination;
