import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import User from './User';
import Signout from './Signout';

const Nav = () => (
    <User>
    {({ data: { me, error }}) => (
      <NavStyles>
        <Link href="/items">
          <a>Shop</a>
        </Link>
        {me && (
          <>
            <Link href="/sell">
              <a>Sell</a>
            </Link>
            <Link href="/orders">
              <a>Orders</a>
            </Link>
            <Link href="/signup">
              <a>Signup</a>
            </Link>
            <Signout />
          </>
        )}
        {!me && (
          <Link href="/signin">
            <a>Signin</a>
          </Link>
        )}
      </NavStyles>
    )}
  </User>
)

export default Nav;