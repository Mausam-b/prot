import React from 'react';

class Scrollpbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          scroll: 0
        };
    }
    componentDidMount() {
        window.addEventListener("scroll", this.onScrollProgress);
    }
    
    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScrollProgress);
    }
    
    onScrollProgress = () => {
        const scrollCal = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollValue = `${scrollCal / height * 100}%`;
    
        this.setState({
          scroll: scrollValue
        });
    };

    render() {
        const onScrollProgress = {
            top: 0,
            left: 0,
            zIndex: 102,
            width: "100%",      
            height: "7px",
            position: "fixed",
            background: "rgba(255, 255, 255, 0.12)"
            
        };
      
        const progressIndicator = {
            height: "7px",
            background: "yellow",
            width: this.state.scroll
        };
      
        return (
            <div className="progress-bar" style={onScrollProgress}>
                <div style={progressIndicator} />
            </div>
        );
    }
}
export default Scrollpbar;