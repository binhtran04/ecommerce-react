import React from 'react';
import { Box, Text, Heading, Image, Button } from 'gestalt';
import { NavLink, withRouter } from 'react-router-dom';
import { getToken, clearCart, clearToken } from '../utils';



class Navbar extends React.Component {
    handleSignout = () => {
        clearCart();
        clearToken();
        this.props.history.push('/');
    }

    render() {
        return getToken() !== null ? <AuthNav handleSignout={this.handleSignout} /> : <UnAuthNav />;
    }
    
}

const AuthNav = ({ handleSignout }) => (
    <Box display="flex" alignItems="center" justifyContent="around" height={70} color="midnight" padding={1} shape="roundedBottom">
        {/* Checkout Link */}
        <NavLink activeClassName="active" to="/checkout">
            <Text size="xl" color="white">
                Checkout
            </Text>
        </NavLink>

        {/* Title and Logo */}
        <NavLink activeClassName="active" exact to="/">
            <Box display="flex" alignItems="center">
                <Box height={50} width={50} margin={2}>
                    <Image src="./icons/logo.svg" alt="Shop Logo" naturalHeight={1} naturalWidth={1} />
                </Box>
                {/* Title */}
                <div className="main-title">  
                    <Heading size="xs" color="orange">
                        BeerShop
                    </Heading>
                </div>
            </Box>
        </NavLink>

        {/* Signout Link */}
        <Button 
            color="transparent"
            text="Sign Out"
            inline
            size="md"
            onClick={handleSignout}
        />
    </Box>
)

const UnAuthNav = () => (
    <Box display="flex" alignItems="center" justifyContent="around" height={70} color="midnight" padding={1} shape="roundedBottom">
        {/* Sign In Link */}
        <NavLink activeClassName="active" to="/signin">
            <Text size="xl" color="white">
                Sign In
            </Text>
        </NavLink>

        {/* Title and Logo */}
        <NavLink activeClassName="active" exact to="/">
            <Box display="flex" alignItems="center">
                <Box height={50} width={50} margin={2}>
                    <Image src="./icons/logo.svg" alt="Shop Logo" naturalHeight={1} naturalWidth={1} />
                </Box>
                {/* Title */}
                <div className="main-title">  
                    <Heading size="xs" color="orange">
                        BeerShop
                    </Heading>
                </div>
            </Box>
        </NavLink>

        {/* Sign Up Link */}
        <NavLink activeClassName="active" to="/signup">
            <Text size="xl" color="white">
                Sign Up
            </Text>
        </NavLink>
    </Box>
)

export default withRouter(Navbar);
