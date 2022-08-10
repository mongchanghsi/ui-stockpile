import { useEffect, useState } from 'react'
import { IMultiLevelOption } from '../../utils/constants/data'
import styles from './index.module.scss'

const MultilevelDropdown = ({ data }: { data: IMultiLevelOption[] }) => {
  const [dropdown, setDropdown] = useState<any>([])
  const [mapper, setMapper] = useState<any>([])
  const [parent, setParent] = useState('')
  const [firstOptions, setFirstOptions] = useState<any>([])
  useEffect(() => {
    setFirstOptions(data)
    setDropdown(data)
  },[data])
  const finder = () => {
    return mapper.find((option: any) => option.parent === parent).child
  }
  return (
    <ul className={styles.main}>
      {parent && firstOptions !== parent && (
        <li className={styles.item} key={`multilevel_back`}>
          <div
            onClick={() => {
              setParent(finder)
              setDropdown(finder)
            }}
            className={styles.name}
          >
            back
          </div>
        </li>
      )}
      {dropdown.map((option: any, index: any) => {
        return (
          <li className={styles.item} key={`multilevel_${index}`}>
            <div
              onClick={() => {
                if (option.children) {
                  setMapper((prev: any) => {
                    // find if parents array have set the parent for this option
                    // if set, skip. else, set it
                    if (
                      prev.find(
                        (parentChildMap: any) =>
                          parentChildMap.parent === option.children.data,
                      ) === undefined
                    ) {
                      return [
                        ...prev,
                        {
                          parent: option.children.data,
                          child: dropdown,
                        },
                      ]
                    }
                    return [...prev]
                  })
                  setParent(option.children.data)
                  setDropdown(option.children.data)
                }
              }}
              className={styles.name}
            >
              {option.name}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default MultilevelDropdown
