import { useState } from 'react';
import styles from '../styles/SearchBar.module.scss';
import { ComponentTypeNames, ComponentNames } from '../utils/constants/enums';
import { ISearchResult } from '../utils/constants/interface';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRouter } from 'next/router';

const SearchBar = () => {
  const router = useRouter();

  const [query, setQuery] = useState<string>('');
  const [result, setResult] = useState<ISearchResult[]>([]);

  const handleChange = (_keyword: string) => {
    setQuery(_keyword);
    if (_keyword.length <= 2) return setResult([]);

    setTimeout(() => handleSearch(), 500);
  };

  const handleSearch = () => {
    if (query.length <= 2) return setResult([]);

    const _result = Object.values(ComponentNames).filter((pair) =>
      pair.label.toLowerCase().includes(`${query}`)
    );

    setResult(_result);
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <AiOutlineSearch size={30} color='black' />
        <input
          placeholder='Insert in keywords'
          value={query}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
      </div>

      {result.length > 0 && (
        <ul className={styles.result}>
          {result.map((_result) => {
            return (
              <li
                key={_result.label}
                onClick={() => router.push(`components/${_result.href}`)}
              >
                {_result.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
