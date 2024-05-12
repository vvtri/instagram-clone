'use client';

import { cn } from '@/utilities/tailwind/cn';
import { useTranslations } from 'next-intl';
import React, { forwardRef, useState } from 'react';
import InstaImgIcon from '../icon/InstaImgIcon';
import SearchSvgIcon from '../icon/svg-icon/SearchSvgIcon';

type SearchInputProps = React.JSX.IntrinsicElements['input'];

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className: inputClassName, ...rest }, ref) => {
    const [isFocus, setIsFocus] = useState(false);
    const t = useTranslations('Client');

    return (
      <div
        className={cn(
          'flex items-center relative text-base px-4 bg-bg-hightLight text-text-secondary rounded-lg w-full h-full',
        )}
      >
        {!isFocus && (
          <SearchSvgIcon
            className="mr-3 shrink-0 translate-y-[1px]"
            width={16}
            height={16}
          />
        )}
        <input
          type="text"
          className={cn(
            'border-none focus:outline-none focus:border-none w-full bg-bg-hightLight placeholder:capitalize',
            inputClassName,
          )}
          placeholder={t('common.navbar.search')}
          {...rest}
          ref={ref}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        {isFocus && (
          <InstaImgIcon
            backgroundPosition="-318px -333px"
            className="shrink-0"
          />
        )}
      </div>
    );
  },
);

export default SearchInput;
