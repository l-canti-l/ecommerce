import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../../actions';

class Shop extends Component {

    componentDidMount() {
        const headerLinks = [
            {
                _id: 0,
                title: 'Login',
                path: '/signin'
            }
        ]
        this.props.setHeaderLinks(headerLinks);
        this.props.fetchShopCategories();
        //fetch shop products action creator
        //fetch navbar links 
            //set navbar links
            //filter product with links
    }

    render() {
        return(
        <div className="shop">
            {/* shop searchbar */}
            {/* shop product component */}
            {/* cart button */}
        </div>
        )
    }
}

function mapStateToProps(state) {
    return { state }
}

Shop = connect(mapStateToProps, actions)(Shop)

export default Shop;