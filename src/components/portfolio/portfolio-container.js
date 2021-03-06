import React, { Component } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: true,
            data: []
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        if (filter === "CLEAR_FILTERS") {
            this.getPortfolioItems();
        }
        else {
            this.getPortfolioItems(filter);
        }
    }

    getPortfolioItems(filter = null) {
        axios.get('https://damonwestover.devcamp.space/portfolio/portfolio_items')
          .then(response => {
            if (filter) {
                this.setState({
                    data: response.data.portfolio_items.filter(item => {
                        return item.category === filter;
                    }),
                    isLoading: false
                });
            }
            else {
                this.setState({
                    data: response.data.portfolio_items,
                    isLoading: false
                });
            }
          })
          .catch(error => {
            console.log(error);
          })
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return (
                <PortfolioItem key={item.id} item={item}/>
            );
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        return (
            <div className="homepage-wrapper">
                <div className="filter-links">
                    <button className="filter-btn" onClick={() => this.handleFilter("eCommerce")}>
                        eCommerce
                    </button>
                    <button className="filter-btn" onClick={() => this.handleFilter("Scheduling")}>
                        Scheduling
                    </button>
                    <button className="filter-btn" onClick={() => this.handleFilter("Enterprise")}>
                        Enterprise
                    </button>
                    <button className="filter-btn" onClick={() => this.handleFilter("CLEAR_FILTERS")}>
                        All
                    </button>
                </div>
                <div className="portfolio-items-wrapper">
                    <div className="content-wrapper">  
                        {this.portfolioItems()}
                    </div>

                    <div className="loader">
                        {this.state.isLoading 
                            ? (
                                <div className="content-loader">
                                    <FontAwesomeIcon icon="circle-notch" spin/>
                                </div>
                            )
                            : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}