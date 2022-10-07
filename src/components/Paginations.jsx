import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from 'semantic-ui-react'
import '../index.css'
import { changePag } from '../redux/slices/pagSlice'

const Paginations = ({totalPags}) => {

  const dispatch = useDispatch()
  const pag = useSelector(state => state.pagSlice)

  const changeCurrentPage = num => {
    if (!isNaN(num)) {
      dispatch(changePag(num))
    }
  }

  return (
    <Pagination
      boundaryRange={0}
      defaultActivePage={1}
      siblingRange={1}
      totalPages={totalPags - 1}
      onPageChange={(e) => changeCurrentPage(parseInt(e.target.text))}
    />
  )
}

export { Paginations }