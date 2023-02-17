import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'

export function DefaultLayouts() {
  return (
    <div>
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </div>
  )
}
