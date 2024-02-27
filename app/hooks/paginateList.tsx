"use client";

import ArrowIcon from "@/Components/Icons/Arrow";
import { buttonDisabled, buttonHover } from "@/Components/TailwindClasses";
import classNames from "classnames";
import { Dispatch, SetStateAction, useState } from "react";

interface IPaginateList<TDataType> {
  partialList: TDataType[];
  setPartialList: Dispatch<SetStateAction<TDataType[]>>;
  PreviousButton: () => JSX.Element;
  NextButton: () => JSX.Element;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  pageIndex: number;
  setPageIndex: Dispatch<SetStateAction<number>>;
}

export default function usePaginateList<TDataType>(
  data: TDataType[],
  pageSize: number
): IPaginateList<TDataType> {
  const PAGE_COUNT = pageSize,
    LAST_PAGE = data.length - PAGE_COUNT,
    [currentIndex, setCurrentIndex] = useState(0),
    [partialList, setPartialList] = useState(data.slice(0, PAGE_COUNT)),
    [pageIndex, setPageIndex] = useState(1);

  function handlePaginateNext() {
    setCurrentIndex((state) => {
      const newIndex = state + PAGE_COUNT,
        IS_LAST_PAGE = newIndex + PAGE_COUNT > LAST_PAGE;

      setPartialList(
        data.slice(newIndex, IS_LAST_PAGE ? undefined : newIndex + PAGE_COUNT)
      );

      return newIndex;
    });

    setPageIndex((state) => state + 1);
  }

  function handlePaginatePrevious() {
    setCurrentIndex((state) => {
      const newIndex = state - PAGE_COUNT;

      setPartialList(data.slice(newIndex, state));

      return newIndex;
    });

    setPageIndex((state) => state - 1);
  }

  const PreviousButton = () => (
      <button
        aria-label="Show previous items in list"
        disabled={!currentIndex}
        className={classNames(
          buttonHover,
          {
            [buttonDisabled]: !currentIndex,
          },
          "grid text-light transition-all"
        )}
        type="button"
        onClick={handlePaginatePrevious}
      >
        <ArrowIcon />
      </button>
    ),
    NextButton = () => (
      <button
        aria-label="Show next items in list"
        className={classNames(
          buttonHover,
          {
            [buttonDisabled]: currentIndex + PAGE_COUNT > LAST_PAGE,
          },
          "rotate-180 hover:translate-y-2 grid text-light transition-all"
        )}
        type="button"
        onClick={handlePaginateNext}
      >
        <ArrowIcon />
      </button>
    );

  return {
    partialList,
    setPartialList,
    PreviousButton,
    NextButton,
    currentIndex,
    setCurrentIndex,
    pageIndex,
    setPageIndex,
  };
}
