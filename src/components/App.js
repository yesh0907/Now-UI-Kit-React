require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-toggleable-md bg-primary">
                    <div className="container">
                        <div className="navbar-translate">
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar bar1"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </button>

                        <a className="navbar-brand" href="#pablo">
                            React Now UI Kit
                        </a>
                        </div>

                        <div className="collapse navbar-collapse" id="navigation">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#pablo">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#pablo">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#pablo">Disabled</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <button className="btn btn-default">Default</button>
                    <button className="btn btn-primary">Primary</button>
                    <button className="btn btn-info">Info</button>
                    <button className="btn btn-success">Success</button>
                    <button className="btn btn-warning">Warning</button>
                    <button className="btn btn-danger">Danger</button>
                    <button className="btn btn-neutral">Neutral</button>
                    <button className="btn btn-primary btn-icon btn-icon-mini btn-round">
                        <i className="now-ui-icons ui-2_favourite-28"></i>
                    </button>
                    <br/>
                    <br/>
                    <div className="dropdown">
                        <a href="#pablo" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" id="navbarDropdownMenuLink1">
                            Regular
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">One more separated link</a>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
