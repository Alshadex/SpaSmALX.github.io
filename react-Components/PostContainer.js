// import PostContent  from './PostContent';

'use strict';

const e = React.createElement;

class PostContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title
        }
    }

    render() {
        return e(
            'p',
            null,
            this.state.title
        )
    }
}

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.title)
    }

    render() {
        return e(
                PostContent,
                null,
            );
    }
}

const domContainer = document.querySelector('#postContainer');
ReactDOM.render(e(PostContainer), domContainer);