import React, { Component } from 'react'

export default class Ethics extends Component {
    render() {
        return (
            <div>

                <footer style={{
                    backgroundColor: 'darkgray',
                    paddingTop: '1.5rem',
                    paddingBottom: '2rem',
                    marginTop: '2rem'
                }}>
                    <div>
                        <div>
                            <a href="#0" class="item">
                                <span>About us</span>
                                <h6>Our mission</h6>
                                <h6>Learn more</h6>
                            </a>

                            <a href="#0" class="item">
                                <span>Recource</span>
                                <h6>Amnesty.org</h6>
                                <h6>Human rights Education</h6>
                            </a>

                            <a href="#0" class="item">
                                <span>Get involved</span>
                                <h6>Join</h6>
                                <h6>Take Action</h6>
                                <h6>Volunteer</h6>
                            </a>

                            <a href="#0" class="item">
                                <span>Contact</span>
                                <h6>Info</h6>
                                <h6>Facebook</h6>
                            </a>
                        </div>
                        <p>&copy; 2020 Company Name. All rights reserved.</p>
                    </div>
                </footer>

            </div>
        )
    }
}

